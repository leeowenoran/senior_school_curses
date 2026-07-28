/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第四章 电磁振荡与电磁波
 * 课时13：电磁振荡 —— LC 振荡电路
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u13',
    name: '电磁振荡 —— LC 振荡电路',
    chapter: '选择性必修第二册 · 第四章 电磁振荡与电磁波',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是 LC 振荡电路' },
      { type: 'paragraph', text: '前面学过电容器能储存电荷、电感线圈能阻碍电流变化。把电感线圈 L 和电容器 C 连成一个回路，再给电容器充上一点电，奇妙的事情就发生了：电容器会反复放电、充电，电路里出现一会儿大、一会儿小、还不断改变方向的电流。这种不靠电源也能自己产生的反复变化的电流，就叫电磁振荡，而这个电路就叫 LC 振荡电路。' },
      { type: 'keypoint', label: '重点·LC 振荡电路', text: '<strong>LC 振荡电路由一个电感线圈 L 和一个电容器 C 连成回路组成。</strong>只要一开始给电容器充上电荷，它就能自己产生周期性变化的电流，不需要电池一直供电。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">LC 振荡电路：电容器 C 与电感线圈 L 连成一个回路</text><line x1="140" y1="120" x2="240" y2="120" stroke="#234b45" stroke-width="3"/><line x1="440" y1="120" x2="540" y2="120" stroke="#234b45" stroke-width="3"/><line x1="540" y1="120" x2="540" y2="240" stroke="#234b45" stroke-width="3"/><line x1="540" y1="240" x2="140" y2="240" stroke="#234b45" stroke-width="3"/><line x1="140" y1="240" x2="140" y2="210" stroke="#234b45" stroke-width="3"/><line x1="140" y1="170" x2="140" y2="120" stroke="#234b45" stroke-width="3"/><line x1="120" y1="170" x2="160" y2="170" stroke="#234b45" stroke-width="4"/><line x1="120" y1="210" x2="160" y2="210" stroke="#234b45" stroke-width="4"/><text x="95" y="196" font-size="14" fill="#234b45" text-anchor="middle">C</text><path d="M 240 120 q 12 -28 24 0 q 12 28 24 0 q 12 -28 24 0 q 12 28 24 0 q 12 -28 24 0 q 12 28 24 0 q 12 -28 24 0 q 12 28 24 0" fill="none" stroke="#234b45" stroke-width="3"/><text x="340" y="92" font-size="14" fill="#234b45" text-anchor="middle">L（电感线圈）</text><polygon points="532,148 548,148 540,166" fill="#4fb3a5"/><text x="565" y="165" font-size="13" fill="#234b45">电流 i</text><text x="340" y="282" font-size="13" fill="#234b45" text-anchor="middle">没有电源，也能自己产生反复变化的电流</text></svg>', caption: '图1　LC 振荡电路由电容器 C 与电感线圈 L 连成回路组成。' },
      { type: 'paragraph', text: '振荡是怎么来回进行的呢？先给电容器充好电，这时它两端电压最高、极板电荷最多。然后接通线圈，电容器开始放电：电荷顺着导线流、电流逐渐变大；等电荷放完，电流却不会立刻消失，因为线圈有"惯性"（自感），它反过来给电容器反向充电。反向充到顶，再放电……如此周而复始，就形成了振荡。' },
      { type: 'list', items: ['给电容器充上电后断开电源，它开始通过电感线圈放电', '放电时电荷减少、电流增大，电场能逐渐变成磁场能', '放电完毕电荷为0、电流最大，之后线圈的自感又给电容反向充电', '反向充电到电荷最大、电流为0，再反向放电，如此反复形成振荡'] },
      { type: 'heading', text: '二、电荷与电流怎样周期性变化' },
      { type: 'paragraph', text: '在振荡过程中，电容器极板上的电荷 q 并不是一成不变的，它从最多减到0、再反向增到最多、再回到0，像钟摆一样来回变；电路里的电流 i 也跟着周期性变化，不过它的步调和电荷刚好错开。这种周而复始、规律重复的变化，就是周期性变化。' },
      { type: 'table', headers: ['状态', '电容器电荷 q', '电路电流 i', '主要能量'], rows: [['放电中', '减小', '增大', '电场能 → 磁场能'], ['放电完毕', '0（最小）', '最大', '磁场能最大'], ['充电中', '增大', '减小', '磁场能 → 电场能'], ['充电完毕', '最大', '0（最小）', '电场能最大']] },
      { type: 'warn', label: '易错', text: '电荷和电流<strong>步调相反</strong>：电容器电荷最多的时候，电流恰好为0；电荷为0（放电完毕）的时候，电流反而最大。很多同学想当然以为"电荷多电流也大"，这是错的，二者相差四分之一周期。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电荷 q 与电流 i 随时间做周期性变化</text><line x1="80" y1="150" x2="620" y2="150" stroke="#234b45" stroke-width="2"/><line x1="80" y1="60" x2="80" y2="240" stroke="#234b45" stroke-width="2"/><text x="70" y="55" font-size="13" fill="#234b45" text-anchor="end">q</text><text x="630" y="155" font-size="13" fill="#234b45">t</text><path d="M 80 150 Q 130 60 180 150 Q 230 240 280 150 Q 330 60 380 150 Q 430 240 480 150 Q 530 60 580 150" fill="none" stroke="#2e9e8f" stroke-width="3"/><path d="M 80 150 Q 105 240 130 150 Q 155 60 180 150 Q 205 240 230 150 Q 255 60 280 150 Q 305 240 330 150 Q 355 60 380 150 Q 405 240 430 150 Q 455 60 480 150 Q 505 240 530 150 Q 555 60 580 150" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="320" y="90" font-size="13" fill="#2e9e8f" text-anchor="middle">电荷 q</text><text x="200" y="205" font-size="13" fill="#4fb3a5" text-anchor="middle">电流 i</text><text x="340" y="278" font-size="13" fill="#234b45" text-anchor="middle">深绿为电荷 q，浅绿为电流 i，两者步调错开</text></svg>', caption: '图2　电荷 q 与电流 i 都随时间周期性变化，且步调相反。' },
      { type: 'heading', text: '三、能量怎样转化' },
      { type: 'paragraph', text: '电容器里存的是电场能（电荷越多电场能越大），电感线圈里存的是磁场能（电流越大磁场能越大）。振荡时，这两种能量像两个互相倒水的容器：一会儿电场能多、磁场能少；一会儿反过来。在理想情况下，电路没有电阻、不发热，两种能量之和始终不变。' },
      { type: 'list', items: ['放电过程：电容器电荷减少、电场能减小；电流增大、线圈磁场能增大，电场能转化为磁场能', '充电过程：电流减小、磁场能减小；电容器电荷增多、电场能增大，磁场能转化为电场能', '理想情况下没有电阻，电场能与磁场能之和保持不变，即总能量守恒'] },
      { type: 'keypoint', label: '重点·能量转化', text: '振荡过程中<strong>电场能和磁场能不断相互转化，且此消彼长</strong>：电场能最大时磁场能最小，磁场能最大时电场能最小。理想无电阻时总能量守恒。' },
      { type: 'example', label: '例题·判断振荡状态', text: '已知某时刻 LC 电路里电容器极板电荷达到最大值。请判断此时电流大小和能量情况。<br><br><strong>解析</strong>：<br>电荷最大，说明正处于充电完毕的瞬间，接下来电容器要开始放电。此时电流恰好为0；能量方面电场能最大、磁场能最小。如果问"电流最大"那一瞬间，则对应电荷为0、磁场能最大。' },
      { type: 'tip', label: '提示', text: '<strong>实际电路总有电阻，振荡会逐渐衰减。</strong>因为导线有电阻，能量会被慢慢变成热散失掉，电流越来越小，最后停下，这叫阻尼振荡。要维持等幅振荡，需不断补充能量（如收音机里的振荡电路）。' },
      { type: 'heading', text: '四、周期公式' },
      { type: 'paragraph', text: '振荡一次（电荷从最多出发再回到最多）所用的时长叫周期 T，单位秒；每秒振荡的次数叫频率 f，单位赫兹，二者互为倒数 f = 1 / T。理论和实验都告诉我们，LC 电路的周期只由电感 L 和电容 C 决定，与初始充了多少电无关。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">周期 T = 2π × √(L × C)：L 或 C 越大，振荡越慢</text><rect x="220" y="60" width="240" height="56" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="95" font-size="18" fill="#234b45" text-anchor="middle" font-weight="bold">T = 2π × √(L × C)</text><rect x="60" y="150" width="260" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="180" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">L 大、C 大</text><text x="190" y="210" font-size="13" fill="#234b45" text-anchor="middle">周期 T 长</text><text x="190" y="235" font-size="13" fill="#234b45" text-anchor="middle">振荡慢</text><rect x="360" y="150" width="260" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="180" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">L 小、C 小</text><text x="490" y="210" font-size="13" fill="#234b45" text-anchor="middle">周期 T 短</text><text x="490" y="235" font-size="13" fill="#234b45" text-anchor="middle">振荡快</text></svg>', caption: '图3　LC 振荡周期由电感 L 和电容 C 决定，L、C 越大周期越长。' },
      { type: 'keypoint', label: '重点·周期公式', text: 'LC 振荡周期 <strong>T = 2π × √(L × C)</strong>，频率 f = 1 / T。电感 L 越大或电容 C 越大，周期越长、振荡越慢；反之则越快。' },
      { type: 'tip', label: '提示', text: '<strong>调节 L 或 C 就能改变振荡频率，这是收音机调台的原理之一。</strong>转动收音机旋钮，实际上是在改变可变电容器的电容 C，从而让电路的频率对准想听的电台。' }
    ],
    exercises: [
      { type: 'choice', question: 'LC 振荡电路是由下列哪两部分组成的？', options: ['电感线圈 L 和电容器 C', '一节电池和一根导线', '一个电阻和一个开关', '两块永久磁铁'], answer: '电感线圈 L 和电容器 C', explanation: 'LC 振荡电路的标准组成只有一个电感线圈 L 和一个电容器 C 连成回路，不需要电源也能自己产生周期性变化的电流。电池、电阻、开关或永久磁铁都不是 LC 振荡电路的必要组成部分，靠它们无法形成这种电磁振荡。' },
      { type: 'choice', question: '在 LC 振荡中，下列说法正确的是？', options: ['电容器电荷最大时，电流也最大', '电容器电荷为0时，电流最大', '电流始终不变', '电荷和电流不会变化'], answer: '电容器电荷为0时，电流最大', explanation: '在 LC 振荡中，电容器电荷和电路电流步调相反：当电容器放电完毕、极板上电荷为0时，电流恰好达到最大；而电荷最大时电流为0。所以电荷最大时电流并不是最大，电流也不是始终不变，而是做周期性变化。' },
      { type: 'choice', question: '已知周期公式 T = 2π × √(L × C)，若增大电容 C，周期 T 会怎样？', options: ['变长', '变短', '不变', '先变长后变短'], answer: '变长', explanation: '由周期公式 T = 2π × √(L × C) 可知，周期 T 与 √(L × C) 成正比。当电容 C 增大时，√(L × C) 变大，因此周期 T 变长，振荡变慢。同理增大电感 L 也会使周期变长。' },
      { type: 'fill', question: '在 LC 振荡电路里，当电容器极板上的电荷达到最大时，电路中的电流为___（填"最大"或"0"）。', answer: '0', explanation: 'LC 振荡里电荷和电流相位相差四分之一周期。当电容器极板电荷最多时，正是充电完毕、即将反向放电的瞬间，此时电流刚好减小到0；反过来电荷为0时电流最大。所以电荷最大对应电流为0。' },
      { type: 'fill', question: '理想 LC 振荡中，电容器里的电场能和线圈里的磁场能相互转化，且整个过程中总能量___（填"守恒"或"不断减少"）。', answer: '守恒', explanation: '在理想情况下，电路中没有电阻耗能，电容器中的电场能和线圈中的磁场能不断相互转化，但两者之和始终不变，即总能量守恒。实际电路有电阻，能量会逐渐变成热散失，振荡会衰减，那是另一回事。' }
    ]
  });
})();
