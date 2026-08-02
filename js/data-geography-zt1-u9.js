/* 地理 · 高三总复习 · 专题一 自然地理 · 第3章 地球上的大气 · 第2节 热力环流与风 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u9',
    name: '第2节 热力环流与风',
    chapter: '高三地理复习 · 专题一 自然地理 · 第3章 地球上的大气',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、热力环流的形成' },
      { type: 'paragraph', text: '热力环流是大气运动最简单的形式，根本原因是地面冷热不均。受热处空气膨胀上升，近地面气压降低、高空气压升高；冷却处空气收缩下沉，近地面气压升高、高空降低。同一水平面上气压差异产生水平气压梯度力，推动空气由高压流向低压，从而形成环流。' },
      { type: 'list', items: ['冷热不均：是热力环流的根本原因', '受热升、遇冷沉：垂直运动改变同一水平面气压', '高压流向低压：水平气压梯度力驱动水平运动', '闭合环流：垂直与水平运动共同构成循环'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">热力环流原理</text><rect x="60" y="280" width="180" height="40" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="150" y="305" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">受热（A）</text><rect x="420" y="280" width="180" height="40" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="510" y="305" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">冷却（B）</text><line x1="150" y1="280" x2="150" y2="150" stroke="#c1583b" stroke-width="2.5"/><text x="160" y="200" font-size="12" fill="#c1583b">上升</text><line x1="510" y1="280" x2="510" y2="150" stroke="#2a6fa8" stroke-width="2.5"/><text x="520" y="200" font-size="12" fill="#2a6fa8">下沉</text><path d="M150 150 Q330 110 510 150" fill="none" stroke="#1f3a4d" stroke-width="2"/><text x="330" y="125" font-size="12" fill="#1f3a4d">高空：高压→低压</text><path d="M510 270 Q330 310 150 270" fill="none" stroke="#1f3a4d" stroke-width="2"/><text x="330" y="335" font-size="12" fill="#1f3a4d">近地面：高压→低压</text><text x="340" y="350" font-size="12" fill="#1f3a4d" text-anchor="middle">受热处近地面为低压、高空为高压；冷却处相反。</text></svg>', caption: '图1　地面冷热不均引起空气垂直运动，进而形成水平气压差和环流。' },
      { type: 'keypoint', label: '重点·等压面弯曲规律', text: '<strong>等压面「凸高凹低」：高压处等压面向上凸，低压处向下凹。</strong>受热上升使近地面气压降低，等压面下凹；高空堆积使等压面上凸。判断气压高低先比同一水平面：近地面 A 受热为低压、B 冷却为高压；再比垂直方向：同一地点近地面气压总高于高空。' },
      { type: 'heading', text: '二、常见的热力环流' },
      { type: 'paragraph', text: '海陆风、山谷风、城市风都是热力环流的典型例子。海陆风:白天陆地升温快成低压、海面降温慢成高压，风从海吹向陆（海风）；夜晚相反（陆风）。山谷风:白天山坡升温快空气上升、风从谷底吹向山坡（谷风），夜晚相反（山风）。城市风:城市热岛效应使郊区风吹向城市。' },
      { type: 'list', items: ['海陆风：白天海风、夜晚陆风', '山谷风：白天谷风（谷→坡）、夜晚山风（坡→谷）', '城市风：郊区吹向城市（热岛环流）', '共性：都是局部冷热不均驱动的小型环流'] },
      { type: 'table', headers: ['类型', '白天', '夜晚', '成因'], rows: [['海陆风', '海风（海→陆）', '陆风（陆→海）', '海陆热力差异'], ['山谷风', '谷风（谷→坡）', '山风（坡→谷）', '山坡与谷地温差'], ['城市风', '郊区→城市', '郊区→城市', '城市热岛效应']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">海陆风（昼夜方向不同）</text><rect x="40" y="250" width="280" height="50" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="280" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">陆地</text><rect x="360" y="250" width="280" height="50" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="280" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">海洋</text><path d="M360 250 Q270 180 180 250" fill="none" stroke="#2a6fa8" stroke-width="2.5"/><text x="270" y="190" font-size="13" fill="#2a6fa8" font-weight="bold">白天：海风</text><path d="M180 230 Q270 160 360 230" fill="none" stroke="#c1583b" stroke-width="2.5" stroke-dasharray="5 4"/><text x="420" y="170" font-size="13" fill="#c1583b" font-weight="bold">夜晚：陆风</text><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">白天陆地升温快成低压，风从海吹向陆；夜晚相反。</text></svg>', caption: '图2　海陆风白天吹海风、夜晚吹陆风，源于海陆热力性质差异。' },
      { type: 'example', label: '例题·城市风', text: '题目：为减轻城市大气污染，工厂应布局在？<br>解析：城市因人口、工业集中形成热岛，空气上升，风由郊区吹向城市，城市上空空气向外流到郊区下沉。因此污染企业应布局在郊区、城市风下沉距离之外（或最小风频上风向），避免工厂排放被城市风带回市区。答案是「郊区、城市热岛环流之外」。理解城市风环流方向是环保布局的关键。' },
      { type: 'heading', text: '三、风的形成与受力' },
      { type: 'paragraph', text: '风是大气的水平运动，直接原因是水平气压梯度力（由高压指向低压，垂直于等压线）。实际风还受地转偏向力和摩擦力影响：高空风受水平气压梯度力和地转偏向力，最终平行于等压线；近地面风还受摩擦力，斜穿等压线吹向低压一侧。北半球风向右偏，南半球向左偏。' },
      { type: 'warn', label: '易错·风向偏转', text: '① 水平气压梯度力永远垂直于等压线、由高压指向低压，是风的原动力；② 北半球风向相对梯度力向右偏，南半球向左偏；③ 高空风最终与等压线平行，近地面风斜穿等压线指向低压；④ 摩擦力使风速减小、偏向程度减小。画风向先画梯度力再偏转，最稳妥。' },
      { type: 'tip', label: '提示·读等压线判风向', text: '在等压线图上判风向：先过该点作等压线垂线指向低压（梯度力方向），再按半球偏转（北右南左）约 30°–45° 得到实际风向；风速看等压线疏密，越密风力越大。把「垂线定方向、偏转定偏向、疏密定大小」三步记牢。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">近地面风向受力（北半球）</text><line x1="100" y1="100" x2="100" y2="260" stroke="#2a6fa8" stroke-width="2"/><line x1="240" y1="100" x2="240" y2="260" stroke="#2a6fa8" stroke-width="2"/><line x1="380" y1="100" x2="380" y2="260" stroke="#2a6fa8" stroke-width="2"/><text x="170" y="90" font-size="12" fill="#2a6fa8">等压线（高压在左）</text><line x1="190" y1="180" x2="90" y2="180" stroke="#c1583b" stroke-width="2.5"/><text x="120" y="170" font-size="12" fill="#c1583b" font-weight="bold">梯度力→低压</text><path d="M190 180 Q160 210 200 230" fill="none" stroke="#1f3a4d" stroke-width="2.5"/><text x="220" y="230" font-size="12" fill="#1f3a4d" font-weight="bold">实际风向（右偏）</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">北半球近地面风相对梯度力向右偏，斜穿等压线吹向低压。</text></svg>', caption: '图3　北半球近地面风受梯度力、地转偏向力和摩擦力影响，向右偏斜穿等压线。' },
      { type: 'heading', text: '四、风与人类活动' },
      { type: 'paragraph', text: '风对气候、农业、能源都有重要意义。季风和西风带影响降水分布；风能是可再生的清洁能源，多布局在开阔沿海、草原和山口；城市规划和工厂选址要考虑盛行风向，把居民区放在最小风频上风向或盛行风上风向，污染企业放在下风向。理解风的成因有助于解释很多地理现象。' },
      { type: 'list', items: ['风能：沿海、草原、山口等风力稳定处宜建风电场', '城市规划：工业区布局在盛行风下风向', '农业：干热风、台风等灾害性风影响作物', '航海：顺风和洋流可缩短航期'] },
      { type: 'example', label: '例题·最小风频', text: '题目：某城市最小风频为西风，污染企业应布局在城市的哪侧？<br>解析：最小风频是指该方向风吹来的频率最低。把污染企业放在最小风频的上风向（即西侧、来风为西风的一侧），则污染物被吹向城区的机会最小，对城市污染最轻。当然还要结合盛行风向综合判断，但「最小风频上风向」是经典的安全布局原则。' }
    ],
    exercises: [
      { type: 'choice', question: '热力环流形成的根本原因是？', options: ['地转偏向力', '地面冷热不均', '摩擦力', '地球自转'], answer: '地面冷热不均', explanation: '热力环流是大气运动最简单形式，其根本原因是地表受热不均。受热处空气膨胀上升使近地面气压降低，冷却处下沉使近地面气压升高，同一水平面出现气压差，在水平气压梯度力作用下空气流动，形成环流。地转偏向力和摩擦力只影响风向风速，不是环流的根源。' },
      { type: 'choice', question: '白天海滨地区常吹？', options: ['海风（海→陆）', '陆风（陆→海）', '山风', '城市风'], answer: '海风（海→陆）', explanation: '白天陆地比海洋升温快，陆地近地面空气受热膨胀上升形成低压，海洋升温慢为高压，风由高压的海洋吹向低压的陆地，称为海风。夜晚陆地降温快成高压，风由陆吹向海为陆风。这是海陆热力性质差异造成的昼夜风向反转。' },
      { type: 'choice', question: '北半球近地面的风，相对水平气压梯度力会？', options: ['向左偏', '向右偏', '不偏', '有时左有时右'], answer: '向右偏', explanation: '风的直接动力是水平气压梯度力（垂直等压线、由高压指向低压）。受地转偏向力影响，北半球运动的风向右偏转，南半球向左偏。近地面还有摩擦力，使风斜穿等压线吹向低压一侧；高空摩擦可忽略，风最终与等压线平行。' },
      { type: 'fill', question: '等压面弯曲规律可记为「凸___凹___」：高压处等压面向上凸，低压处向下凹。', answer: '高；低', explanation: '受热上升使该地上空空气堆积、近地面空气减少，因此近地面受热处为低压、等压面向下凹，高空为高压、等压面向上凸；冷却下沉处相反。总规律是等压面「凸高凹低」——高压处上凸、低压处下凹，依此可判断气压高低。' },
      { type: 'fill', question: '风的直接成因是___力，它的方向垂直于等压线、由高压指向低压。', answer: '水平气压梯度', explanation: '单位距离内的气压差叫水平气压梯度，由此产生的水平气压梯度力是风形成的直接原因和原动力，方向垂直于等压线、由高压指向低压。没有这个力就没有风；地转偏向力和摩擦力是在此基础上改变风向和风速的后续因素。' }
    ]
  });
})();
