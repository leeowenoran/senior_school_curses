/* 生物学 · 选择性必修3 生物技术与工程 · 第2章 细胞工程 · 课时：第1节 植物细胞工程（二）应用 */
(function () {
  var v = gzGetVolume('biology', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u5',
    name: '第1节 植物细胞工程（二）应用',
    chapter: '选择性必修3 生物技术与工程 · 第2章 细胞工程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、微型繁殖' },
      { type: 'paragraph', text: '微型繁殖又叫快速繁殖技术，就是利用植物组织培养，把名贵花卉、果树的芽或茎段放在培养基上，在试管里快速长成大量小植株。它能在短时间内生产出成千上万棵遗传相同的幼苗。' },
      { type: 'keypoint', text: '<strong>微型繁殖的特点</strong>：属于无性繁殖，能保持母本的优良性状不发生分离；繁殖速度快、效率高，还能不受季节和气候限制，一年四季在车间里生产。' },
      { type: 'list', items: [
        '繁殖效率高：一小块外植体可繁殖出大量幼苗。',
        '保持优良性状：无性繁殖不发生基因重组，后代与母本一致。',
        '不受季节限制：在无菌车间里全年可生产。',
        '节约种苗：只需少量优良母本材料即可大量扩繁。'
      ] },
      { type: 'table', headers: ['比较项目', '微型繁殖', '传统种子繁殖'], rows: [
        ['繁殖速度', '很快，可工厂化', '较慢，受季节限制'],
        ['性状稳定', '保持母本优良性状', '可能发生性状分离'],
        ['用种量', '只需少量外植体', '需要大量种子'],
        ['适用对象', '名贵花卉、果树等', '一般大田作物']
      ] },
      { type: 'heading', text: '二、作物脱毒' },
      { type: 'paragraph', text: '很多作物（如马铃薯、草莓）容易感染病毒，病毒会随种子或营养繁殖代代相传，导致产量和品质下降。植物顶端分生区（茎尖）细胞分裂快、病毒极少甚至没有病毒，因此切取茎尖进行组织培养，就能得到不带病毒的脱毒苗。' },
      { type: 'example', text: '<strong>脱毒马铃薯和脱毒草莓</strong>：取马铃薯或草莓茎尖的很小一块组织，在无菌条件下培养成幼苗，由于茎尖几乎不含病毒，得到的脱毒苗长得更好、产量更高、品质更优。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（a）微型繁殖与作物脱毒流程</text><text x="140" y="62" text-anchor="middle" font-size="15" fill="#3f7d1e">微型繁殖</text><rect x="60" y="74" width="160" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="99" text-anchor="middle" font-size="15" fill="#2e3a22">优良母株</text><rect x="60" y="134" width="160" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="159" text-anchor="middle" font-size="15" fill="#2e3a22">外植体（茎段/芽）</text><rect x="60" y="194" width="160" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="219" text-anchor="middle" font-size="15" fill="#2e3a22">组织培养</text><rect x="60" y="254" width="160" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="279" text-anchor="middle" font-size="15" fill="#2e3a22">试管苗移栽</text><text x="500" y="62" text-anchor="middle" font-size="15" fill="#3f7d1e">作物脱毒</text><rect x="420" y="74" width="160" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="99" text-anchor="middle" font-size="15" fill="#2e3a22">茎尖（分生区）</text><rect x="420" y="134" width="160" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="159" text-anchor="middle" font-size="15" fill="#2e3a22">组织培养</text><rect x="420" y="194" width="160" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="219" text-anchor="middle" font-size="15" fill="#2e3a22">脱毒苗</text><rect x="420" y="254" width="160" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="279" text-anchor="middle" font-size="15" fill="#2e3a22">移栽大田</text><line x1="140" y1="114" x2="140" y2="132" stroke="#3f7d1e" stroke-width="3"/><polygon points="140,136 133,124 147,124" fill="#3f7d1e"/><line x1="140" y1="174" x2="140" y2="192" stroke="#3f7d1e" stroke-width="3"/><polygon points="140,196 133,184 147,184" fill="#3f7d1e"/><line x1="140" y1="234" x2="140" y2="252" stroke="#3f7d1e" stroke-width="3"/><polygon points="140,256 133,244 147,244" fill="#3f7d1e"/><line x1="500" y1="114" x2="500" y2="132" stroke="#3f7d1e" stroke-width="3"/><polygon points="500,136 493,124 507,124" fill="#3f7d1e"/><line x1="500" y1="174" x2="500" y2="192" stroke="#3f7d1e" stroke-width="3"/><polygon points="500,196 493,184 507,184" fill="#3f7d1e"/><line x1="500" y1="234" x2="500" y2="252" stroke="#3f7d1e" stroke-width="3"/><polygon points="500,256 493,244 507,244" fill="#3f7d1e"/></svg>', caption: '微型繁殖与作物脱毒都依赖植物组织培养，前者快速扩繁，后者利用茎尖获得无病毒种苗。' },
      { type: 'heading', text: '三、作物新品种培育' },
      { type: 'paragraph', text: '植物细胞工程还能帮助培育新品种。常用两种方法：单倍体育种和突变体利用。' },
      { type: 'list', items: [
        '第一步：亲本杂交得到F₁，取F₁的花药进行离体培养。',
        '第二步：花药中的花粉发育成单倍体幼苗（染色体只有正常的一半）。',
        '第三步：用秋水仙素处理单倍体幼苗，使染色体数目加倍。',
        '第四步：得到纯合的二倍体植株，直接选育，明显缩短育种年限。'
      ] },
      { type: 'keypoint', text: '<strong>单倍体育种的优势</strong>：秋水仙素使染色体加倍后得到的都是纯合子，自交后代不会发生性状分离，因此能明显缩短育种年限（常规杂交育种往往要连续自交多代）。' },
      { type: 'paragraph', text: '突变体利用则是用射线或化学物质诱变处理愈伤组织，诱导细胞发生突变，再从突变细胞中筛选出抗逆性强、产量高的突变体，培养成新品种。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（b）单倍体育种流程图</text><rect x="10" y="120" width="95" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="57" y="148" text-anchor="middle" font-size="14" fill="#2e3a22">亲本杂交</text><rect x="120" y="120" width="95" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="167" y="148" text-anchor="middle" font-size="14" fill="#2e3a22">F₁花药</text><rect x="230" y="120" width="95" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="277" y="148" text-anchor="middle" font-size="14" fill="#2e3a22">离体培养</text><rect x="340" y="120" width="95" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="387" y="148" text-anchor="middle" font-size="14" fill="#2e3a22">秋水仙素</text><rect x="450" y="120" width="95" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="497" y="148" text-anchor="middle" font-size="14" fill="#2e3a22">纯合二倍体</text><rect x="560" y="120" width="110" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="615" y="148" text-anchor="middle" font-size="14" fill="#2e3a22">选育新品种</text><line x1="105" y1="143" x2="116" y2="143" stroke="#3f7d1e" stroke-width="3"/><polygon points="120,143 106,135 106,151" fill="#3f7d1e"/><line x1="215" y1="143" x2="226" y2="143" stroke="#3f7d1e" stroke-width="3"/><polygon points="230,143 216,135 216,151" fill="#3f7d1e"/><line x1="325" y1="143" x2="336" y2="143" stroke="#3f7d1e" stroke-width="3"/><polygon points="340,143 326,135 326,151" fill="#3f7d1e"/><line x1="435" y1="143" x2="446" y2="143" stroke="#3f7d1e" stroke-width="3"/><polygon points="450,143 436,135 436,151" fill="#3f7d1e"/><line x1="545" y1="143" x2="556" y2="143" stroke="#3f7d1e" stroke-width="3"/><polygon points="560,143 546,135 546,151" fill="#3f7d1e"/><text x="340" y="210" text-anchor="middle" font-size="14" fill="#2e3a22">花粉离体培养得到单倍体幼苗，秋水仙素使染色体加倍成纯合子</text><text x="340" y="250" text-anchor="middle" font-size="14" fill="#2e3a22">单倍体育种能明显缩短育种年限</text></svg>', caption: '单倍体育种：花药离体培养得单倍体幼苗，秋水仙素加倍染色体，快速获得纯合植株。' },
      { type: 'heading', text: '四、细胞产物的工厂化生产' },
      { type: 'paragraph', text: '有些植物的有效成分（叫次生代谢物）很有用，但种整株植物提取太慢、成本太高。科学家就把植物细胞放在液体培养基里进行悬浮培养，让细胞大量增殖并生产这些成分，再从培养液里提取，相当于建了一座生产植物成分的工厂。' },
      { type: 'list', items: [
        '人参皂苷：人参中的有效成分，用细胞培养可大量生产。',
        '紫草素：紫草中的色素和药用成分。',
        '三七：三七细胞的悬浮培养可生产皂苷类物质。',
        '银杏黄酮：从银杏细胞培养物中提取的活性成分。'
      ] },
      { type: 'example', text: '<strong>人参皂苷的工厂化生产</strong>：把人参的愈伤组织或悬浮细胞放在发酵罐里大规模培养，细胞会合成人参皂苷，再把这些成分提取出来制成药品或保健品，不必种植多年的人参。' },
      { type: 'warn', text: '<strong>注意</strong>：细胞产物的工厂化生产只培养植物细胞、提取其次生代谢物，并不需要种出整棵植株，它生产的是细胞产物而不是完整植物体。' },
      { type: 'tip', text: '记忆要点：微型繁殖保性状、茎尖脱毒去病毒、单倍体育种缩年限、细胞工厂产成分（人参皂苷、紫草素等）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（c）细胞产物的工厂化生产</text><rect x="120" y="70" width="180" height="180" rx="14" fill="#d6eac4" stroke="#3f7d1e" stroke-width="3"/><text x="210" y="258" text-anchor="middle" font-size="15" fill="#3f7d1e">细胞悬浮培养罐</text><circle cx="165" cy="115" r="12" fill="#5aa832"/><circle cx="210" cy="140" r="14" fill="#5aa832"/><circle cx="255" cy="120" r="11" fill="#5aa832"/><circle cx="185" cy="180" r="13" fill="#5aa832"/><circle cx="240" cy="195" r="12" fill="#5aa832"/><circle cx="160" cy="205" r="10" fill="#5aa832"/><line x1="300" y1="160" x2="426" y2="160" stroke="#3f7d1e" stroke-width="3"/><polygon points="430,160 416,152 416,168" fill="#3f7d1e"/><rect x="430" y="110" width="120" height="100" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="150" text-anchor="middle" font-size="14" fill="#2e3a22">提取</text><text x="490" y="178" text-anchor="middle" font-size="14" fill="#2e3a22">次生代谢物</text><text x="340" y="295" text-anchor="middle" font-size="14" fill="#2e3a22">如人参皂苷、紫草素、三七、银杏黄酮等</text></svg>', caption: '细胞产物的工厂化生产：在悬浮培养罐中大量培养细胞，提取次生代谢物而非种植整株。' }
    ],
    exercises: [
      { type: 'choice', question: '微型繁殖技术的主要优点是什么？', options: ['能保持母本的优良性状', '后代容易发生性状分离', '只能用于粮食作物', '繁殖速度很慢'], answer: '能保持母本的优良性状', explanation: '微型繁殖属于无性繁殖（植物组织培养），后代的遗传物质与母本相同，因此能保持母本的优良性状而不发生分离，并且繁殖速度快、可工厂化生产。' },
      { type: 'choice', question: '作物脱毒时常取植物的哪一部位进行培养？', options: ['茎尖（顶端分生区）', '成熟叶片', '老根', '花瓣'], answer: '茎尖（顶端分生区）', explanation: '植物体内病毒主要靠维管束运输，而顶端分生区（茎尖）细胞分裂旺盛、维管组织尚未完全形成，病毒极少甚至检测不到，因此切取茎尖培养可获得脱毒苗。' },
      { type: 'choice', question: '单倍体育种中，使单倍体幼苗的染色体数目加倍，常用的药剂是哪一项？', options: ['秋水仙素', '生长素', 'PEG（聚乙二醇）', '纤维素酶'], answer: '秋水仙素', explanation: '秋水仙素能抑制纺锤体的形成，使染色体复制后不能分到两个子细胞，从而导致染色体数目加倍。单倍体幼苗经秋水仙素处理成为纯合二倍体，可明显缩短育种年限。' },
      { type: 'fill', question: '取F₁的花药进行离体培养，得到的幼苗染色体数目只有正常的一半，称为________________幼苗。', answer: '单倍体', explanation: '花药中的花粉是减数分裂产生的配子，染色体数目为体细胞的一半。花药离体培养得到的幼苗由配子发育而来，染色体数目减半，因此称为单倍体幼苗。' },
      { type: 'fill', question: '利用细胞悬浮培养工厂化生产的人参有效成分称为________________（写一种具体产物）。', answer: '人参皂苷', explanation: '人参皂苷是人参中重要的次生代谢物，通过培养人参的愈伤组织或悬浮细胞，可在发酵罐中大量生产人参皂苷，此外还可生产紫草素、银杏黄酮等细胞产物。' }
    ]
  });
})();
