/* ============================================================
 * gen-meta.js — 生成 js/data-meta.js（课时轻量元数据）
 *
 * 目的：让首屏（首页/学科/册次/侧边栏）无需加载 997 个数据文件即可渲染。
 * 做法：
 *   1. 解析 index.html 中数据脚本的“文档顺序”——该顺序即当前 v.points 的顺序，
 *      这样原有学习进度（按 sid/vid/idx 存储）的 idx 映射完全保持不变。
 *   2. 在 VM 沙箱中执行每个 data 文件，用桩 gzGetVolume 捕获 v.points.push 的
 *      轻量字段 {id,name,chapter,difficulty,exN}，不加载重内容（content/exercises）。
 *   3. 输出 js/data-meta.js：window.GZ_UNITS = { 'subj/vol': {units, files} }，
 *      并在加载时把 units/files 注入到对应的 volume 对象（v.units / v.files）。
 *
 * 运行：node scripts/gen-meta.js
 * ============================================================ */
'use strict';
const fs = require('fs');
const vm = require('vm');

const ROOT = process.cwd();
const HTML = fs.readFileSync('index.html', 'utf8');

/* ---------- 1) 按 index.html 文档顺序提取数据脚本 ---------- */
const re = /<script\s+src=["'](js\/data-([a-z0-9]+)-([a-z0-9]+)-u(\d+)\.js)["']/g;
let m;
const raw = [];
while ((m = re.exec(HTML))) {
  raw.push({ src: m[1], subj: m[2], vol: m[3], n: parseInt(m[4], 10) });
}
// 去重（保留首次出现），保持顺序
const seen = {};
const files = raw.filter((o) => {
  if (seen[o.src]) return false;
  seen[o.src] = 1;
  return true;
});
console.log('[gen-meta] 从 index.html 解析到 ' + files.length + ' 个数据脚本');

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

files.forEach((f) => {
  const key = f.subj + '/' + f.vol;
  if (!UNITS[key]) UNITS[key] = { units: [], files: [] };
  const vol = volOf(f.subj, f.vol);
  if (!vol) {
    // 该册未在 data-gz.js 注册：仍记录文件路径以便懒加载，但无元数据
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
      return { points: { push: function (obj) { captured.push(obj); } } };
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
    // 文件未 push 任何内容（极少），仍记录文件路径
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
