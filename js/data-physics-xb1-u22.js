/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第四章 光
 * 课时22：激光
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u22',
    name: '激光',
    chapter: '选择性必修第一册 · 第四章 光',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是激光' },
      { type: 'paragraph', text: '普通电灯、太阳发出的光，是里面无数原子"各自随意"发光凑在一起的，颜色杂、方向乱、彼此也不相干。激光则不同：它是原子在外界刺激下"步调一致"地发光，再被放大得到的强光。正因为发光过程高度有序，激光才拥有普通光没有的优异特性，成了现代科技里最重要的光源之一。' },
      { type: 'keypoint', label: '重点·激光四大特点', text: '<strong>激光有四大突出优点：方向性强（平行度高）、单色性好（颜色纯）、相干性好（容易做干涉）、亮度高（能量集中）。</strong>这四点是激光区别于普通光源的根本，也是它各种应用的依据。' },
      { type: 'list', items: ['方向性强：光束几乎不发散，能射得很远很准', '单色性好：波长非常单一，颜色纯净', '相干性好：各光波步调一致，极易产生干涉', '亮度高：能量集中在极细光斑里，又亮又猛'] },
      { type: 'heading', text: '二、方向性强——几乎不发散' },
      { type: 'paragraph', text: '普通灯泡的光向四面八方散开，离得稍远就弱得看不见。激光却像一条拉得笔直的细线，发散极小，可以瞄得很准、传得很远。一束激光从地球射到月亮，光斑 spread 也只有几公里，而同样功率的普通光早就散得无影无踪。' },
      { type: 'example', label: '例题·激光测距', text: '为什么用激光给月球测距离比用普通灯光更合适？<br><br><strong>解析</strong>：<br>测距是朝目标发射光脉冲，再接收反射回来的光，根据往返时间算距离。激光方向性强、几乎不发散，能量集中在一小束里能打到月球并反射回来；普通灯光向四周散开，到达月球时已经弱到无法辨认反射信号。所以激光测距又准又远。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">激光方向性强：几乎不发散</text><circle cx="120" cy="140" r="22" fill="#4fb3a5"/><text x="120" y="200" font-size="12" fill="#234b45" text-anchor="middle">普通光源</text><line x1="142" y1="140" x2="250" y2="80" stroke="#234b45" stroke-width="2"/><line x1="142" y1="140" x2="250" y2="120" stroke="#234b45" stroke-width="2"/><line x1="142" y1="140" x2="250" y2="160" stroke="#234b45" stroke-width="2"/><line x1="142" y1="140" x2="250" y2="200" stroke="#234b45" stroke-width="2"/><text x="200" y="225" font-size="12" fill="#234b45" text-anchor="middle">向四面散开</text><circle cx="430" cy="140" r="14" fill="#4fb3a5"/><text x="430" y="200" font-size="12" fill="#234b45" text-anchor="middle">激光</text><line x1="444" y1="134" x2="640" y2="134" stroke="#2e9e8f" stroke-width="3"/><line x1="444" y1="146" x2="640" y2="146" stroke="#2e9e8f" stroke-width="3"/><text x="540" y="225" font-size="12" fill="#234b45" text-anchor="middle">几乎平行不发散</text></svg>', caption: '图1　普通光源向四周发散，激光则几乎平行地射出，方向性极强。' },
      { type: 'keypoint', label: '重点·方向性的应用', text: '<strong>利用方向性强，激光可做精确测距（激光雷达）、瞄准与引导、光盘信息的密集刻写。</strong>因为光斑能长时间保持极小，标得非常准，所以激光测距、激光制导都靠这个特点。' },
      { type: 'heading', text: '三、单色性好、相干性好' },
      { type: 'paragraph', text: '单色性好，意思是激光的颜色极纯，几乎只有一种波长，不像白光那样红橙黄绿蓝靛紫全混在一起。相干性好，意思是激光里各光波的相位高度一致、步调相同，所以两束激光很容易产生稳定清晰的干涉条纹。普通光颜色杂、相位乱，很难直接做干涉。' },
      { type: 'table', headers: ['对比项', '普通光源（如白炽灯）', '激光'], rows: [['颜色（单色性）', '含多种波长，颜色杂', '波长单一，颜色很纯'], ['相干性', '各原子发光独立，不相干', '步调一致，相干性好'], ['方向性', '向四周发散', '几乎平行，方向性强'], ['亮度', '分散，亮度有限', '集中，亮度极高']] },
      { type: 'example', label: '例题·全息照相', text: '全息照相要把物体光和参考光干涉、把全部信息"冻"在底片上，为什么常用激光而不用普通灯？<br><br><strong>解析</strong>：<br>全息依赖两束光稳定干涉，要求光源相干性好、单色性好。激光波长单一、各光波步调一致，能产生清晰稳定的干涉条纹，把物体的全部光信息记录下来；普通灯光颜色杂、相位乱，干涉条纹糊成一团，记录不出清晰全息图。所以全息必须用激光。' },
      { type: 'warn', label: '易错', text: '<strong>第一，"单色性好"不是"看不见颜色"，而是颜色极纯（波长单一）；别误以为单色就是无色。</strong><br><strong>第二，"相干性好"才让激光容易做干涉；前面学的双缝、薄膜干涉若用激光做，条纹会特别清晰稳定。</strong>不要把"单色性"和"相干性"当成一回事，二者相关但描述不同方面。' },
      { type: 'heading', text: '四、亮度高及应用' },
      { type: 'paragraph', text: '激光把巨大能量压在极细的光斑里，瞬时功率可以非常高，所以亮度惊人。只需把光会聚到一点，就能在瞬间产生极高温度，足以熔化甚至气化金属。这使它既能当"光刀"，也能当"光笔"。' },
      { type: 'keypoint', label: '重点·亮度高与应用汇总', text: '<strong>亮度高＝能量集中。应用有：工业上切割、焊接、打孔；医学上用激光刀做手术、矫正视力；通信上用激光在光纤中传信息；生活上用激光读出光盘、打印条码。</strong>一句话：方向性、单色性、相干性、高亮度，撑起了现代激光技术的广阔用途。' },
      { type: 'tip', label: '提示', text: '<strong>激光很亮也很危险：绝不能用眼睛直接看激光束，哪怕功率不大也可能灼伤视网膜。</strong>实验室和生活中使用激光笔要格外小心，不要照射人或动物的眼睛，这是安全常识。' },
      { type: 'list', items: ['工业：激光切割、焊接、打孔', '医疗：激光手术刀、近视矫正', '通信：光纤中用激光载信息', '生活：光盘读取、条码扫描、激光打印'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">激光的广泛应用</text><rect x="50" y="70" width="170" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="135" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">工业切割</text><line x1="80" y1="135" x2="190" y2="135" stroke="#2e9e8f" stroke-width="4"/><line x1="135" y1="120" x2="135" y2="160" stroke="#4fb3a5" stroke-width="3"/><text x="135" y="195" font-size="12" fill="#234b45" text-anchor="middle">光刀切金属</text><rect x="255" y="70" width="170" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="125" r="30" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="310" y1="125" x2="370" y2="125" stroke="#4fb3a5" stroke-width="3"/><text x="340" y="195" font-size="12" fill="#234b45" text-anchor="middle">光盘存储</text><rect x="460" y="70" width="170" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="545" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">医疗手术</text><line x1="545" y1="120" x2="545" y2="160" stroke="#4fb3a5" stroke-width="4"/><text x="545" y="195" font-size="12" fill="#234b45" text-anchor="middle">激光刀</text><text x="340" y="240" font-size="13" fill="#234b45" text-anchor="middle">工业 · 信息 · 医疗，都离不开激光</text></svg>', caption: '图2　激光在工业切割、光盘信息存储、医疗手术等方面都有重要应用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">单色性对比：普通光含多色，激光只一种</text><rect x="60" y="90" width="240" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="70" y="100" width="40" height="70" fill="#e74c3c"/><rect x="110" y="100" width="40" height="70" fill="#f1c40f"/><rect x="150" y="100" width="40" height="70" fill="#2ecc71"/><rect x="190" y="100" width="40" height="70" fill="#3498db"/><rect x="260" y="100" width="40" height="70" fill="#9b59b6"/><text x="180" y="210" font-size="12" fill="#234b45" text-anchor="middle">普通光：多种波长混合</text><rect x="380" y="90" width="240" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="390" y="100" width="220" height="70" fill="#1f7a6e"/><text x="500" y="210" font-size="12" fill="#234b45" text-anchor="middle">激光：单一波长、颜色纯</text></svg>', caption: '图3　普通光由多种波长混合（上左），激光波长单一、单色性极好（上右）。' },
      { type: 'paragraph', text: '回顾整章：光的干涉和衍射证明光是波，偏振进一步证明光是横波；而激光凭借方向性、单色性、相干性、高亮度四大优点，把光的波动特性用到了极致。从光盘到光纤、从手术刀到测月距离，激光已经成为现代科技离不开的"神奇光刀"。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于激光特点的说法，哪一项是错误的？', options: ['方向性强', '单色性好', '相干性好', '亮度低'], answer: '亮度低', explanation: '激光的四大特点是方向性强、单色性好、相干性好、亮度高。它把能量集中在极细的光斑里，瞬时亮度可以远远超过普通光源，因此"亮度低"这一描述是错误的。其余三项都是激光的真实优点。所以本题应选错误项"亮度低"。' },
      { type: 'choice', question: '"激光方向性强"指的是下列哪一项？', options: ['光束向四面八方散开', '光束几乎不发散、平行度好', '光非常暗淡', '只能照亮很近的地方'], answer: '光束几乎不发散、平行度好', explanation: '方向性强是激光的重要特点，意思是激光束发散角极小，几乎沿一条直线平行射出，能传得很远而光斑不扩大。普通灯光才向四周散开。因此"几乎不发散、平行度好"正确描述了方向性；其余选项都与事实相反。' },
      { type: 'choice', question: '激光的相干性好，因此非常适合用于下面哪项？', options: ['做干涉实验和全息照相', '加热食物', '代替声音传递信息', '制造完全黑暗的环境'], answer: '做干涉实验和全息照相', explanation: '相干性好表示激光中各光波相位一致、步调相同，两束激光相遇能产生稳定清晰的干涉条纹。全息照相正是利用参考光与物光稳定干涉来记录全部光信息，所以特别适合用激光。加热、代替声音、制造黑暗都不是相干性带来的典型用途。因此选"做干涉实验和全息照相"。' },
      { type: 'fill', question: '激光的英文 LASER 原意中包含"受激辐射"，激光是由物质___（填"受激辐射"或"自发辐射"）产生并被放大的光。', answer: '受激辐射', explanation: '普通光源的发光多为原子自发、随机地发光（自发辐射），所以光杂而乱。激光则靠外界能量激发，使大量原子在"受激"下步调一致地辐射出同频率、同相位的光，再经放大形成激光。因此激光本质是受激辐射产生的光，这也是它相干性好的根源。' },
      { type: 'fill', question: '由于激光能量高度集中、亮度高，工业上常用它来___金属（填"切割"或"照亮"）。', answer: '切割', explanation: '激光可经透镜会聚到极小光斑，瞬时功率密度极高，能在局部产生上千度高温，使金属熔化甚至气化，因此可作为"光刀"对金属进行切割、焊接和打孔。这正是利用激光亮度高、能量集中的特点，而不是像普通灯那样仅用来照明。所以填"切割"。' }
    ]
  });
})();
