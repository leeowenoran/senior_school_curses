/* ============================================================
 * 高一化学 · 必修 第二册 · 第六章 化学反应与能量
 * 课时10：化学反应的速率
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u10',
    name: '化学反应的速率',
    chapter: '必修 第二册 · 第六章 化学反应与能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、怎样描述反应"快"还是"慢"' },
      { type: 'paragraph', text: '有的反应一瞬间完成，比如炸药爆炸、酸碱中和；有的反应慢得急死人，比如铁生锈要好几年，食物腐败也要好几天。化学家用一个量来公平比较快慢，就叫化学反应速率。它表示的是"单位时间内，某种物质浓度变化了多少"。' },
      { type: 'keypoint', label: '重点·速率定义', text: '<strong>化学反应速率 v = 浓度的变化量 ÷ 所用时间，即 v = Δc / Δt。</strong>浓度单位常用 mol·L⁻¹，时间单位常用秒(s)或分(min)，所以速率单位常写成 mol·L⁻¹·s⁻¹ 或 mol·L⁻¹·min⁻¹。速率越大，反应越快。' },
      { type: 'paragraph', text: '用浓度变化来定义速率很合理：反应物被消耗，浓度越来越小；生成物产生，浓度越来越大。我们只要量出一段时间里浓度变了多少，再除以时间，就得到平均反应速率。' },
      { type: 'list', items: ['反应速率表示"单位时间浓度的变化"，数值越大反应越快', '反应物浓度下降的速率、生成物浓度上升的速率都可作为速率', '速率通常取正值（用浓度变化量的绝对值），是一个平均概念'] },
      { type: 'heading', text: '二、速率的计算与单位' },
      { type: 'paragraph', text: '举个例子：在一个 2 L 的容器里，某反应物 A 开始时有 4 mol，过了 2 秒后剩下 2 mol。A 的浓度从 4÷2 = 2 mol·L⁻¹ 降到 2÷2 = 1 mol·L⁻¹，浓度减少了 1 mol·L⁻¹，用时 2 秒，所以速率 v(A) = 1 ÷ 2 = 0.5 mol·L⁻¹·s⁻¹。' },
      { type: 'example', label: '例题·速率计算', text: '在 2 L 容器中，物质 B 的物质的量由 4 mol 变为 2 mol，用时 2 秒，则 B 的平均速率为？<br>A. 0.25 mol·L⁻¹·s⁻¹　B. 0.5 mol·L⁻¹·s⁻¹<br>C. 1 mol·L⁻¹·s⁻¹　D. 2 mol·L⁻¹·s⁻¹<br><br><strong>解析</strong>：B 的浓度变化 Δc = (4 − 2) mol ÷ 2 L = 1 mol·L⁻¹，时间 Δt = 2 s，所以 v = Δc ÷ Δt = 1 ÷ 2 = <strong>0.5 mol·L⁻¹·s⁻¹</strong>，选 B。注意先除以体积得浓度，再除以时间，不能拿物质的量直接除。' },
      { type: 'table', headers: ['影响因素', '对速率的影响', '生活例子'], rows: [['浓度', '浓度越大，速率越快', '火更旺时氧气浓度高'], ['温度', '温度越高，速率越快', '热水泡茶比冷水快'], ['催化剂', '改变速率（常加快）', '加酶加快食物分解'], ['接触面积', '面积越大，速率越快', '木屑比木块烧得快']] },
      { type: 'warn', label: '易错·不同物质速率不同', text: '同一反应里，<strong>用不同物质表示的速率数值可能不同</strong>，但它们之比等于化学方程式的化学计量数之比。例如反应 2A + B → 3C 中，v(A) : v(B) : v(C) = 2 : 1 : 3。比较快慢时要换算成同一物质，或直接比"速率÷计量数"，不能直接拿不同物质的数值比大小。' },
      { type: 'heading', text: '三、因素一：浓度' },
      { type: 'paragraph', text: '浓度越大，单位体积里能反应的粒子越多，它们撞在一起的机会就越多，反应自然更快。比如铁丝在纯氧里能剧烈燃烧，在空气中却只是缓慢氧化，就是因为氧气浓度差别巨大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">浓度越大，粒子碰撞机会越多，反应越快</text><rect x="60" y="70" width="220" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="170" y="96" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">低浓度</text><circle cx="120" cy="150" r="9" fill="#d98e3a"/><circle cx="200" cy="180" r="9" fill="#d98e3a"/><circle cx="160" cy="200" r="9" fill="#d98e3a"/><text x="170" y="240" font-size="12" fill="#4a3724" text-anchor="middle">粒子稀，碰撞少</text><rect x="400" y="70" width="220" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="510" y="96" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">高浓度</text><circle cx="430" cy="120" r="8" fill="#d98e3a"/><circle cx="470" cy="140" r="8" fill="#d98e3a"/><circle cx="520" cy="120" r="8" fill="#d98e3a"/><circle cx="560" cy="150" r="8" fill="#d98e3a"/><circle cx="450" cy="180" r="8" fill="#d98e3a"/><circle cx="510" cy="200" r="8" fill="#d98e3a"/><circle cx="560" cy="195" r="8" fill="#d98e3a"/><text x="510" y="240" font-size="12" fill="#4a3724" text-anchor="middle">粒子密，碰撞多</text></svg>', caption: '图1　相同体积内，浓度越高， reactant 粒子越多、碰撞越频繁，反应速率越快。' },
      { type: 'keypoint', label: '重点·浓度与速率', text: '<strong>在其他条件不变时，增大反应物浓度，反应速率加快；减小浓度，速率减慢。</strong>注意：固体和纯液体的"浓度"视为常数，改变它们的量一般不影响速率，改变的是它们的接触面积。' },
      { type: 'heading', text: '四、因素二：温度、催化剂、接触面积' },
      { type: 'list', items: ['温度：升温使粒子运动更快、更易碰撞，速率明显加快（每升温约10℃，速率约翻倍）', '催化剂：能改变反应速率而自身质量和化学性质不变，常见是加快反应', '接触面积：把固体粉碎、搅拌、溶解，能增大接触面，加快反应', '压强（气体）：增大压强相当于增大浓度，气体反应速率加快'] },
      { type: 'paragraph', text: '温度的影响最直观：妈妈用热水泡奶粉比冷水化得快，就是温度加速了溶解（虽然不是化学反应，道理相通）。催化剂更神奇，比如汽车尾气处理用催化剂让有害气体快速转化；生物体内的酶也是催化剂，没有酶人就没法活着。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">温度与催化剂对速率的影响</text><rect x="50" y="80" width="170" height="150" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="110" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">低温</text><text x="135" y="150" font-size="12" fill="#4a3724" text-anchor="middle">粒子慢</text><text x="135" y="175" font-size="12" fill="#4a3724" text-anchor="middle">反应慢</text><rect x="255" y="80" width="170" height="150" rx="10" fill="#d98e3a"/><text x="340" y="110" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">高温</text><text x="340" y="150" font-size="12" fill="#ffffff" text-anchor="middle">粒子快</text><text x="340" y="175" font-size="12" fill="#ffffff" text-anchor="middle">反应快</text><rect x="460" y="80" width="170" height="150" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="545" y="110" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">加催化剂</text><text x="545" y="150" font-size="12" fill="#4a3724" text-anchor="middle">降低门槛</text><text x="545" y="175" font-size="12" fill="#4a3724" text-anchor="middle">反应更快</text><text x="340" y="265" font-size="12" fill="#d98e3a" text-anchor="middle">升温、用催化剂都能显著加快反应速率</text></svg>', caption: '图2　升温让粒子运动加快，催化剂降低反应"门槛"，二者都使反应更快。' },
      { type: 'tip', label: '提示·催化剂的本质', text: '催化剂参加反应但反应前后自身的质量和化学性质不变，它只是改变了反应的途径，让反应更容易发生，从而加快（少数也会减慢，叫抑制剂）速率。催化剂具有选择性，一种催化剂往往只对某一类反应有效，而且催化剂不能让本不发生的反应发生。' },
      { type: 'heading', text: '五、反应速率的调控意义' },
      { type: 'paragraph', text: '学会控制速率，人类就能"想快就快、想慢就慢"。想快：工业上升温、加压、用催化剂来提高产量；想慢：给食物冷藏、加防腐剂来减慢腐败，给金属涂漆来减慢生锈。调控速率是化学服务生活的重要本领。' },
      { type: 'warn', label: '易错·压强与固体', text: '<strong>对于气体反应，增大压强（缩小体积）相当于增大浓度，速率加快；减小压强则减慢。</strong>但对只有固体或液体的反应，压强几乎不影响速率。另外，改变固体质量不改变其"浓度"（固体浓度视作常数），要加快这类反应得增大接触面积，比如把煤块粉碎、把食物切小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">影响反应速率的四大因素汇总</text><rect x="40" y="80" width="140" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="110" y="130" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">浓度↑</text><text x="110" y="162" font-size="12" fill="#4a3724" text-anchor="middle">速率↑</text><rect x="200" y="80" width="140" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="270" y="130" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">温度↑</text><text x="270" y="162" font-size="12" fill="#4a3724" text-anchor="middle">速率↑</text><rect x="360" y="80" width="140" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="430" y="130" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">催化剂</text><text x="430" y="162" font-size="12" fill="#4a3724" text-anchor="middle">速率↑</text><rect x="520" y="80" width="140" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="590" y="130" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">面积↑</text><text x="590" y="162" font-size="12" fill="#4a3724" text-anchor="middle">速率↑</text><text x="340" y="250" font-size="12" fill="#d98e3a" text-anchor="middle">四者均使速率加快；反之则减慢</text></svg>', caption: '图3　浓度、温度、催化剂、接触面积四大因素都能影响反应速率，一般增大它们都会加快反应。' },
      { type: 'example', label: '例题·因素判断', text: '下列措施中，不能加快化学反应速率的是？<br>A. 升高温度　B. 增大反应物浓度<br>C. 将块状固体粉碎　D. 降低温度<br><br><strong>解析</strong>：升高温度、增大浓度、把块状固体粉碎（增大接触面积）都会<strong>加快</strong>反应速率。而降低温度会使粒子运动变慢、碰撞减少，反而<strong>减慢</strong>反应。因此"不能加快"的是降低温度，选 D。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于化学反应速率的说法，正确的是？', options: ['反应速率越大，反应越慢', '反应速率 v = 浓度变化量 ÷ 时间', '反应速率的单位只能是 mol·L⁻¹·s⁻¹', '只有气体反应才有速率'], answer: '反应速率 v = 浓度变化量 ÷ 时间', explanation: '化学反应速率定义为单位时间内浓度的变化量，即 v = Δc / Δt，数值越大表示反应越快，所以第一项错误、第二项正确。速率单位可以是 mol·L⁻¹·s⁻¹ 或 mol·L⁻¹·min⁻¹ 等，不只一种；固体、液体参与的反应同样有速率概念。故只有第二项正确。' },
      { type: 'choice', question: '下列条件中，能加快化学反应速率的是？', options: ['降低温度', '减小反应物浓度', '使用合适的催化剂', '减小固体接触面积'], answer: '使用合适的催化剂', explanation: '加快反应速率的常用手段有：升高温度、增大浓度、增大接触面积、使用催化剂、对气体增大压强等。降低温度、减小浓度、减小接触面积都会使速率减慢。催化剂能改变反应途径、降低反应门槛，从而显著加快反应，因此选"使用合适的催化剂"。' },
      { type: 'choice', question: '对于只有固体参加的反应，增大压强通常会怎样影响速率？', options: ['明显加快', '明显减慢', '几乎不影响', '先加快后减慢'], answer: '几乎不影响', explanation: '压强的本质是改变气体体积从而改变浓度。对于只含固体（或液体）的反应，压强变化几乎不改变粒子浓度，因此对速率几乎没有影响。压强主要影响气体反应的速率。所以"只有固体参加的反应，增大压强几乎不影响速率"是正确的。' },
      { type: 'fill', question: '在 2 L 容器中，某反应物 4 秒内由 4 mol 减少到 2 mol，其平均反应速率为___ mol·L⁻¹·s⁻¹。', answer: '0.25', explanation: '先算浓度变化：Δc = (4 − 2) mol ÷ 2 L = 1 mol·L⁻¹；再除以时间：v = Δc ÷ Δt = 1 mol·L⁻¹ ÷ 4 s = 0.25 mol·L⁻¹·s⁻¹。注意必须用浓度而不是物质的量，也要用对时间 4 秒而不是别的数字。答案为 0.25。' },
      { type: 'fill', question: '同一反应中，用不同物质表示的反应速率之比等于化学方程式中的___之比。', answer: '化学计量数', explanation: '在一个化学反应里，各物质的速率之比等于它们在化学方程式中前面的系数（化学计量数）之比。例如 aA + bB → cC 中，v(A):v(B):v(C) = a:b:c。因此比较不同物质的速率快慢时，要先除以各自的计量数再比较，或者直接换算成同一种物质来表示。' }
    ]
  });
})();
