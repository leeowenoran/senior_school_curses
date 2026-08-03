/* ============================================================
 * gen-meta.js — 生成 js/data-meta.js（课时轻量元数据）
 *
 * 目的：让首屏（首页/学科/册次/侧边栏）无需加载 970 个数据文件即可渲染。
 * 做法：
 *   1. 扫描 js/ 目录下所有 data-<subj>-<vol>-u<n>.js 文件，
 *      按 (subj, vol) 分组，组内按单元号 n 数值升序（与 index.html 的加载顺序一致，
 *      保证原有学习进度按 sid/vid/idx 存储的 idx 映射完全不变）。
 *      —— 直接扫描目录，与 index.html 解耦，便于后续重新生成。
 *   2. 在 VM 沙箱中执行每个 data 文件，用桩 gzGetVolume 捕获 v.points.push 的
 *      轻量字段 {id,name,chapter,difficulty,exN}，不加载重内容（content/exercises）。
 *   3. 输出 js/data-meta.js：window.GZ_UNITS = { 'subj/vol': {units, files} }，
 *      并在加载时把 units/files 注入到对应的 volume 对象（v.units / v.files）。
 *
 * 运行：node scripts/gen-meta.js
 * ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = process.cwd();
const JS_DIR = path.join(ROOT, 'js');

/* ---------- 1) 扫描 js/ 下的数据脚本 ---------- */
const fileRe = /^data-([a-z]+)-([a-z0-9]+)-u(\d+)\.js$/;
const byKey = {};
const allFiles = [];
for (const fn of fs.readdirSync(JS_DIR)) {
  const m = fileRe.exec(fn);
  if (!m) continue;
  const e = { src: 'js/' + fn, subj: m[1], vol: m[2], n: parseInt(m[3], 10) };
  const key = e.subj + '/' + e.vol;
  (byKey[key] = byKey[key] || []).push(e);
}
// 组内按单元号 n 数值升序，保证各册 idx 顺序稳定
Object.keys(byKey).forEach((k) => byKey[k].sort((a, b) => a.n - b.n));
Object.keys(byKey).forEach((k) => byKey[k].forEach((e) => allFiles.push(e)));
console.log('[gen-meta] 从 js/ 扫描到 ' + allFiles.length + ' 个数据脚本');

/* ---------- 2) 加载 data-gz.js，建立 volume 查找 ---------- */
const gzCode = fs.readFileSync('js/data-gz.js', 'utf8');
const gzCtx = { console: console, window: {}, document: {} };
vm.createContext(gzCtx);
vm.runInContext(gzCode, gzCtx);
const GZ = gzCtx.GZ_SUBJECTS;
function volOf(subj, vol) {
  const s = GZ.find((x) => x.id === subj);
  if (!s) return null;
  return s.volumes.find((v) => v.id === vol) || null;
}

/* ---------- 3) 逐文件捕获元数据 ---------- */
const UNITS = {}; // key -> { units:[], files:[] }
let multiPush = 0;
let noVol = 0;
let noCapture = 0;

allFiles.forEach((f) => {
  const key = f.subj + '/' + f.vol;
  if (!UNITS[key]) UNITS[key] = { units: [], files: [] };
  const vol = volOf(f.subj, f.vol);
  if (!vol) {
    noVol++;
    UNITS[key].files.push(f.src);
    return;
  }
  let captured = [];
  const sandbox = {
    console: console,
    window: {},
    document: {},
    setTimeout: setTimeout,
    gzGetVolume: function () {
      // 注意：数据文件常用单个 push 调用一次性压入多个课时对象，
      // 例如 v.points.push(objA, objB, objC)。必须收集全部参数，
      // 否则 v.units（元数据）会与真实 v.points 在「长度」和「idx 顺序」上错位，
      // 进而破坏按 sid/vid/idx 存储的既有学习进度映射。
      return {
        points: {
          push: function () {
            for (var i = 0; i < arguments.length; i++) captured.push(arguments[i]);
          }
        }
      };
    }
  };
  vm.createContext(sandbox);
  const code = fs.readFileSync(f.src, 'utf8');
  try {
    vm.runInContext(code, sandbox);
  } catch (e) {
    console.warn('[gen-meta] 执行失败: ' + f.src + ' -> ' + e.message);
  }
  if (captured.length === 0) {
    noCapture++;
    UNITS[key].files.push(f.src);
    return;
  }
  captured.forEach((obj) => {
    UNITS[key].units.push({
      id: obj.id,
      name: obj.name,
      chapter: obj.chapter,
      difficulty: obj.difficulty || '基础',
      exN: (obj.exercises || []).length
    });
    UNITS[key].files.push(f.src);
  });
  if (captured.length !== 1) multiPush++;
});

/* ---------- 4) 写出 js/data-meta.js ---------- */
// 每册文件去重（保持顺序，避免单文件多 push 导致的重复加载）
Object.keys(UNITS).forEach((k) => {
  const seenF = {};
  UNITS[k].files = UNITS[k].files.filter((src) => {
    if (seenF[src]) return false;
    seenF[src] = 1;
    return true;
  });
});

let totalUnits = 0;
let totalFiles = 0;
let volCount = 0;
Object.keys(UNITS).forEach((k) => {
  totalUnits += UNITS[k].units.length;
  totalFiles += UNITS[k].files.length;
  volCount++;
});

const out = [];
out.push('/* 自动生成，请勿手改。由 scripts/gen-meta.js 生成。 */');
out.push('/* 课时轻量元数据：用于首屏即时渲染（首页/学科/册次/侧边栏/进度）。 */');
out.push('/* 生成时间 ' + new Date().toISOString() + ' · 共 ' + totalUnits + ' 课时 / ' + totalFiles + ' 数据文件 / ' + volCount + ' 册 */');
out.push('(function () {');
out.push('  var GZ_UNITS = ' + JSON.stringify(UNITS) + ';');
out.push('  window.GZ_UNITS = GZ_UNITS;');
out.push('  if (typeof GZ_SUBJECTS !== "undefined") {');
out.push('    GZ_SUBJECTS.forEach(function (s) {');
out.push('      s.volumes.forEach(function (v) {');
out.push('        var key = s.id + "/" + v.id;');
out.push('        var meta = GZ_UNITS[key];');
out.push('        if (meta) { v.units = meta.units; v.files = meta.files; }');
out.push('        else { v.units = []; v.files = []; }');
out.push('      });');
out.push('    });');
out.push('  }');
out.push('})();');
fs.writeFileSync('js/data-meta.js', out.join('\n'));

console.log('[gen-meta] 写出 js/data-meta.js:');
console.log('           课时=' + totalUnits + ' 文件=' + totalFiles + ' 册次=' + volCount);
console.log('           单文件多 push=' + multiPush + ' 无注册册=' + noVol + ' 无捕获=' + noCapture);
console.log('           文件体积=' + (fs.statSync('js/data-meta.js').size / 1024).toFixed(1) + ' KB');
