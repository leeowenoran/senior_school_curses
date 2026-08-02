/* 生物学 · 高三复习 · 遗传与进化 · 第1章 · 课时：第1节 分离定律（二）应用 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u2',
    name: '第1节 分离定律（二）应用',
    chapter: '遗传与进化 · 第1章 遗传因子的发现',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、显隐性性状的判断方法' },
      { type: 'paragraph', text: '判断一对相对性状哪个是显性、哪个是隐性，是遗传题的第一步。常用两种方法：一是<strong>性状分离法</strong>，即两个表现型相同的亲本杂交，子代出现了不同的性状，则新出现的性状为隐性（例如高茎×高茎→出现矮茎，矮茎是隐性）；二是<strong>杂交法</strong>，即具一对相对性状的纯合亲本杂交，F1 显现出来的性状为显性。' },
      { type: 'list', items: [
        '性状分离法：相同性状亲本杂交，子代出现新性状→新性状为隐性。',
        '杂交法：具相对性状纯合亲本杂交，F1 表现的性状为显性。',
        '系谱法：无中生有是隐性，有中生无是显性（常用于人类遗传病）。'
      ] },
      { type: 'warn', text: '易错辨析：显隐性判断必须基于「纯合亲本」或「相同亲本杂交出现性状分离」。若亲本基因型未知，仅凭一个杂交结果不能断定显隐性，例如高茎×矮茎→全高茎，只能说明高茎很可能是显性，但需排除特殊情况。' },
      { type: 'table', headers: ['判断方法', '适用条件', '结论'], rows: [
        ['性状分离法', '相同表现型亲本，子代性状不同', '新出现的为隐性'],
        ['杂交法', '具相对性状的纯合亲本', 'F1 显现的为显性'],
        ['自交法', '某个体自交，子代出现性状分离', '该个体性状为显性']
      ] },
      { type: 'paragraph', text: '在实际题目中，还常结合系谱图判断。口诀「无中生有是隐性，有中生无是显性」非常实用：双亲都正常却生出患病孩子，则该病为隐性；双亲都患病却生出正常孩子，则该病为显性。' },
      { type: 'keypoint', text: '基因型推断核心思路：先根据显隐性确定已知个体的部分基因，再用「隐性纯合子必含两个隐性基因」反推亲本。凡子代出现隐性性状（如 aa），其两个亲本都至少含一个隐性基因。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="220" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">杂交法判断显隐性</text><rect x="70" y="80" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="130" y="112" font-size="16" text-anchor="middle" fill="#2e3a22">P 高茎</text><rect x="280" y="80" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="112" font-size="16" text-anchor="middle" fill="#2e3a22">P 矮茎</text><line x1="190" y1="107" x2="278" y2="107" stroke="#3f7d1e" stroke-width="2"/><polygon points="278,100 294,107 278,114" fill="#3f7d1e"/><rect x="430" y="80" width="160" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="510" y="112" font-size="16" text-anchor="middle" fill="#2e3a22">F1 全为高茎</text><text x="340" y="175" font-size="14" text-anchor="middle" fill="#2e3a22">F1 显现的性状（高茎）为显性性状</text></svg>', caption: '具相对性状的纯合亲本杂交，F1 全部表现出的性状即为显性性状。' },
      { type: 'paragraph', text: '概率计算是分离定律应用的重点。两个基本原理必须掌握：<strong>乘法原理</strong>指相互独立的事件同时发生的概率，等于各事件概率之积；<strong>加法原理</strong>指互斥事件任一发生的概率，等于各事件概率之和。例如 Aa 自交，每胎得显性性状概率 3/4，连续两胎都得显性概率为 3/4 × 3/4。' },
      { type: 'list', items: [
        '乘法原理：独立事件同时发生，概率相乘（如先后两胎都患病）。',
        '加法原理：互斥事件任选其一，概率相加（如患病或正常二选一）。',
        '已知子代表现型再推亲本概率时，先锁定可能的基因型范围。'
      ] },
      { type: 'example', text: '例题：一对表现型正常的夫妇生了一个白化病孩子（白化为隐性，用 a 表示）。求他们再生一个正常孩子的概率。思路：孩子为 aa，说明父母各提供一个 a，故父母基因型均为 Aa。Aa × Aa 后代正常（AA 或 Aa）概率为 3/4。答案：3/4。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="260" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">基因型推断（正推：Aa 自交）</text><rect x="230" y="70" width="60" height="50" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="260" y="100" font-size="18" text-anchor="middle" fill="#2e3a22">♀ A</text><rect x="300" y="70" width="60" height="50" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="330" y="100" font-size="18" text-anchor="middle" fill="#2e3a22">♀ a</text><rect x="160" y="130" width="60" height="50" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="190" y="160" font-size="18" text-anchor="middle" fill="#2e3a22">♂ A</text><rect x="160" y="190" width="60" height="50" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="190" y="220" font-size="18" text-anchor="middle" fill="#2e3a22">♂ a</text><rect x="230" y="130" width="60" height="50" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="260" y="160" font-size="18" text-anchor="middle" fill="#2e3a22">AA</text><rect x="300" y="130" width="60" height="50" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="330" y="160" font-size="18" text-anchor="middle" fill="#2e3a22">Aa</text><rect x="230" y="190" width="60" height="50" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="260" y="220" font-size="18" text-anchor="middle" fill="#2e3a22">Aa</text><rect x="300" y="190" width="60" height="50" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="330" y="220" font-size="18" text-anchor="middle" fill="#2e3a22">aa</text><text x="510" y="160" font-size="14" fill="#5aa832">AA∶Aa∶aa = 1∶2∶1</text></svg>', caption: '用棋盘法（庞纳特方格）正推 Aa 自交，可得基因型比例为 1∶2∶1。' },
      { type: 'tip', text: '高频考点：自交与自由交配是高考常客。自交是个体与自己或相同基因型个体交配；自由交配是群体中雌雄个体随机交配。在杂合子群体中，自交后代纯合子比例逐代升高，而自由交配（随机交配）在无选择时基因型频率保持遗传平衡。' },
      { type: 'paragraph', text: '以 Aa 群体为例：自交时，1/2 AA、1/2 Aa 各自自交，F2 中 AA = 1/2 + 1/2 × 1/4 = 5/8，aa = 1/2 × 1/4 = 1/8，Aa = 1/4，纯合子占 3/4。自由交配时，先算配子频率 A = 1/2、a = 1/2，随机结合后 AA = 1/4、Aa = 1/2、aa = 1/4，与亲代相同。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="200" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">自交与自由交配的区别</text><rect x="60" y="80" width="240" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="110" font-size="16" text-anchor="middle" fill="#2e3a22">自交：个体与自己或</text><text x="180" y="134" font-size="16" text-anchor="middle" fill="#2e3a22">相同基因型个体交配</text><rect x="380" y="80" width="240" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="110" font-size="16" text-anchor="middle" fill="#2e3a22">自由交配：群体内雌雄</text><text x="500" y="134" font-size="16" text-anchor="middle" fill="#2e3a22">个体间随机交配</text><line x1="300" y1="115" x2="378" y2="115" stroke="#3f7d1e" stroke-width="2"/><polygon points="378,108 394,115 378,122" fill="#3f7d1e"/></svg>', caption: '自交强调基因型配对固定，自由交配强调群体内随机组合，二者计算结果常不同。' },
      { type: 'table', headers: ['交配方式', '以 Aa 群体为例', '结果特点'], rows: [
        ['自交', 'F2 为 AA∶Aa∶aa = 5∶2∶1', '纯合子比例逐代升高'],
        ['自由交配', 'F2 为 AA∶Aa∶aa = 1∶2∶1', '无选择时频率保持稳定']
      ] },
      { type: 'tip', text: '复习提示：遇到「连续自交 n 代」的题，记住杂合子比例公式 Aa = (1/2)ⁿ，纯合子比例 = 1 − (1/2)ⁿ。这是遗传计算中非常经典且必考的推论，建议直接背熟。' },
      { type: 'paragraph', text: '综合来看，分离定律的应用题大致分三类：判断显隐性、推断基因型、计算概率。解题总策略是「先定显隐性，再推基因型，最后算概率」，并把配子频率作为桥梁。只要把每一步落稳，复杂的系谱和概率题都能拆解清楚。' }
    ],
    exercises: [
      { type: 'choice', question: '具一对相对性状的纯合亲本杂交，F1 表现出来的性状是', options: ['显性性状', '隐性性状', '无法确定', '中间性状'], answer: '显性性状', explanation: '具有相对性状的纯合亲本杂交，F1 显现出来的性状叫显性性状，未显现的叫隐性性状，这是判断显隐性的杂交法依据。' },
      { type: 'choice', question: '基因型为 Aa 的个体自交，后代中显性纯合子（AA）的比例为', options: ['1/4', '1/2', '3/4', '1/3'], answer: '1/4', explanation: 'Aa 自交后代基因型比例为 AA∶Aa∶aa = 1∶2∶1，其中显性纯合子 AA 占 1/4。' },
      { type: 'choice', question: '下列个体中一定属于纯合子的是', options: ['表现显性性状的个体', '基因型为 AA 的个体', '基因型为 Aa 的个体', '后代会出现性状分离的个体'], answer: '基因型为 AA 的个体', explanation: '纯合子是基因组成相同的个体，如 AA 或 aa，能稳定遗传；Aa 是杂合子，自交会性状分离，表现显性性状的个体也可能是杂合子。' },
      { type: 'fill', question: '基因型为 Aa 的个体连续自交，n 代后杂合子（Aa）的比例为_____。', answer: '(1/2)ⁿ', explanation: '每自交一代，杂合子比例减半，因此连续自交 n 代后杂合子 Aa 的比例为 (1/2) 的 n 次方，纯合子比例相应为 1 减去该值。' },
      { type: 'fill', question: '自由交配是指群体内的雌雄个体之间_____交配。', answer: '随机', explanation: '自由交配也称随机交配，指群体中所有雌雄个体之间随机结合，与自交强调固定配对不同；计算时需先求配子频率再随机组合。' }
    ]
  });
})();
