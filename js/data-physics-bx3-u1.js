/* ============================================================
 * 高二物理 · 必修 第三册 · 第九章 静电场及其应用
 * 课时1：电荷
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u1',
    name: '电荷',
    chapter: '必修第三册 · 第九章 静电场及其应用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、自然界的两种电荷' },
      { type: 'paragraph', text: '一切物质都是由原子组成的。原子中间是一个带正电的原子核，外面有带负电的电子绕着它转。正常情况下，原子核带的正电荷和核外电子带的负电荷数量正好相等，整块物体对外不显电性，我们说它"中性"。一旦正、负电荷的数量不相等了，物体就带了电。' },
      { type: 'keypoint', label: '重点·两种电荷', text: '电荷只有两种：<strong>正电荷</strong>和<strong>负电荷</strong>。同种电荷相互排斥，异种电荷相互吸引。摩擦后失去电子的物体带正电，得到电子的物体带负电。' },
      { type: 'paragraph', text: '为什么物体会带电？根本原因不是凭空"造"出了电，而是电子在物体之间发生了转移。谁得到电子，谁就多了一份负电；谁失去电子，谁就少了一份负电、显出正电。所以"带电"的本质就是电子的得失。' },
      { type: 'list', items: ['正常物体：正电荷数 = 负电荷数，对外不显电（中性）', '失去电子 → 正电荷偏多 → 物体带正电', '得到电子 → 负电荷偏多 → 物体带负电', '带电的本质是电子的转移，不是电荷被创造出来'] },
      { type: 'heading', text: '二、摩擦起电' },
      { type: 'paragraph', text: '用毛皮摩擦橡胶棒、用丝绸摩擦玻璃棒，棒子就能吸引纸屑，这就是摩擦起电。两种不同物质相互摩擦时，对电子束缚能力弱的那种物质会把一部分电子"让"给束缚能力强的那种物质，于是前者带正电、后者带负电。' },
      { type: 'example', label: '例题·判断摩擦后的带电情况', text: '用丝绸摩擦玻璃棒后，玻璃棒和丝绸分别带什么电？为什么？<br><br><strong>解析</strong>：<br>玻璃棒对电子的束缚能力比丝绸弱，摩擦时玻璃棒失去一部分电子，所以<strong>玻璃棒带正电</strong>；丝绸得到了这些电子，所以<strong>丝绸带负电</strong>。两者所带电荷数量相等、电性相反。' },
      { type: 'warn', label: '易错', text: '<strong>摩擦起电并不是"创造了电荷"，而是电子从一个物体转移到了另一个物体。</strong>两个物体摩擦后带的是等量异种电荷，总电荷量并没有增加。绝不要说"摩擦产生了电荷"。' },
      { type: 'list', items: ['摩擦起电发生在两种不同物质之间，与摩擦的快慢、轻重无关', '束缚电子能力弱的物质失电子带正电，能力强的得电子带负电', '摩擦后两物体带等量异种电荷', '摩擦起电的实质是电子的转移'] },
      { type: 'heading', text: '三、接触起电' },
      { type: 'paragraph', text: '把一个带电的物体（比如带正电的金属球）直接接触一个不带电的金属球，电荷会从带电体流到不带电体上，使原本不带电的球也带上同种电荷，这叫接触起电。如果两个金属球完全一样大、完全一样材料，接触后电荷会平均分配。' },
      { type: 'tip', label: '提示', text: '<strong>两个完全相同的导体接触后，电荷会平分。</strong>例如一个带电量为 Q 的球与一个不带电的相同球接触，分开后每个球都带 Q/2 的电荷。这是接触起电最常考的结论。' },
      { type: 'heading', text: '四、感应起电' },
      { type: 'paragraph', text: '带电体不接触导体，只要靠近导体，就能让导体内部的电荷重新排队：靠近带电体的一端出现与它异种的电荷，远离的一端出现同种电荷，这叫静电感应。此时若把导体接地，远端电荷被大地"中和"或"引走"，再移走带电体，导体就带上了与带电体异种的电荷，这就是感应起电。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">摩擦起电：电子从一个物体转移到另一个物体</text><rect x="40" y="70" width="270" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="98" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">玻璃棒（失电子）</text><circle cx="120" cy="150" r="10" fill="#234b45"/><circle cx="175" cy="180" r="10" fill="#234b45"/><circle cx="230" cy="150" r="10" fill="#234b45"/><text x="175" y="245" font-size="12" fill="#234b45" text-anchor="middle">摩擦后缺少电子 → 带正电</text><rect x="370" y="70" width="270" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="505" y="98" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">丝绸（得电子）</text><circle cx="450" cy="150" r="10" fill="#4fb3a5"/><circle cx="505" cy="180" r="10" fill="#4fb3a5"/><circle cx="560" cy="150" r="10" fill="#4fb3a5"/><text x="505" y="245" font-size="12" fill="#234b45" text-anchor="middle">摩擦后多余电子 → 带负电</text><polygon points="310,150 345,138 345,162" fill="#234b45"/><text x="327" y="126" font-size="12" fill="#234b45" text-anchor="middle">电子转移</text></svg>', caption: '图1　玻璃棒与丝绸摩擦，电子从玻璃棒转移到丝绸，两者带等量异种电荷。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">接触起电：带电体接触导体，电荷重新分配</text><rect x="40" y="80" width="230" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="155" y="108" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">带正电的金属球</text><circle cx="155" cy="170" r="34" fill="#4fb3a5"/><text x="155" y="178" font-size="26" fill="#234b45" text-anchor="middle">+</text><rect x="410" y="80" width="230" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="525" y="108" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">不带电的金属球</text><circle cx="525" cy="170" r="34" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="525" y="178" font-size="22" fill="#234b45" text-anchor="middle">0</text><polygon points="295,170 340,156 340,184" fill="#234b45"/><text x="318" y="146" font-size="12" fill="#234b45" text-anchor="middle">电荷流入</text><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">完全相同的两球接触后，电荷平均分配</text></svg>', caption: '图2　带正电的金属球接触不带电的相同金属球，分开后两球各带一半正电荷。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">感应起电：带电体靠近，导体两端出现异种电荷</text><rect x="40" y="90" width="70" height="150" rx="8" fill="#4fb3a5"/><text x="75" y="172" font-size="24" fill="#234b45" text-anchor="middle">+</text><text x="75" y="262" font-size="12" fill="#234b45" text-anchor="middle">带电体</text><rect x="280" y="90" width="200" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="320" y="165" font-size="22" fill="#234b45" text-anchor="middle">−</text><text x="440" y="165" font-size="22" fill="#234b45" text-anchor="middle">+</text><text x="380" y="262" font-size="12" fill="#234b45" text-anchor="middle">导体：近端显异种，远端显同种</text><text x="380" y="305" font-size="13" fill="#234b45" text-anchor="middle">靠近带电体的一端带异种电，远离的一端带同种电</text></svg>', caption: '图3　带正电的物体靠近中性导体，导体近端感应出负电、远端感应出正电。' },
      { type: 'heading', text: '五、电荷守恒定律' },
      { type: 'paragraph', text: '无论用什么方式起电，电荷的总量从不改变。摩擦、接触、感应都只是让电荷从一个地方搬到另一个地方，或者在一块物体内部重新分布，世界上电荷的"总账"始终不变。' },
      { type: 'keypoint', label: '重点·电荷守恒定律', text: '<strong>电荷既不会凭空产生，也不会凭空消失，它只能从一个物体转移到另一个物体，或从物体的一部分转移到另一部分，在转移过程中电荷的总量保持不变。</strong>这是自然界的一条基本规律。' },
      { type: 'table', headers: ['起电方式', '是否需要接触', '带电原因', '典型例子'], rows: [['摩擦起电', '需要摩擦接触', '电子在两物体间转移', '丝绸摩擦玻璃棒'], ['接触起电', '需要直接接触', '电荷从带电体传给导体', '带电球碰不带电球'], ['感应起电', '不需接触', '带电体使导体内部电荷重新分布', '带电棒靠近导体后接地']] },
      { type: 'heading', text: '六、元电荷' },
      { type: 'paragraph', text: '实验发现，所有带电体所带的电荷量，都是一个固定最小值的整数倍。这个最小的电荷量叫做元电荷，用字母 e 表示，它的值等于 1.6×10⁻¹⁹ 库仑（C）。电子和质子所带电荷量的大小都等于 e，只是电性相反。' },
      { type: 'keypoint', label: '重点·元电荷', text: '<strong>元电荷 e = 1.6×10⁻¹⁹ C，是自然界最小的电荷量。</strong>任何带电体的电荷量 q 都必须是 e 的整数倍，即 q = n × e（n 为整数），电荷量是"一份一份"的，不能连续取任意小数。' },
      { type: 'tip', label: '提示', text: '<strong>电子的电荷量记为 −e，质子的电荷量记为 +e。</strong>计算时若题目给出某个物体带电量为 3.2×10⁻¹⁹ C，直接除以 e 就能知道它比中性时多了（或少）2 个电子。' }
    ],
    exercises: [
      { type: 'choice', question: '关于摩擦起电，下列说法中正确的是？', options: ['摩擦起电创造了新的电荷', '摩擦起电的实质是电子的转移', '摩擦后两物体带同种电荷', '只有绝缘体才能摩擦起电'], answer: '摩擦起电的实质是电子的转移', explanation: '摩擦起电并不是凭空产生电荷。两种不同物质摩擦时，对电子束缚能力弱的物质失去电子、带正电，束缚能力强的得到电子、带负电，整个过程只是电子从一个物体转移到了另一个物体，总电荷量不变。摩擦后两物体带的是等量异种电荷。' },
      { type: 'choice', question: '一个带正电的金属球与一个完全相同的不带电金属球接触后分开，两球所带电荷量如何变化？', options: ['都带原来的全部正电荷', '不带电的球仍不带电', '每个球都带原来一半的电荷', '带电量无法预测'], answer: '每个球都带原来一半的电荷', explanation: '两个完全相同的导体接触时，电荷会在它们之间平均分配。原来带正电的球电荷量为 Q，不带电的球为 0，接触后总电荷 Q 被两球平分，分开后每个球都带 Q/2 的正电荷。这是接触起电的核心结论。' },
      { type: 'choice', question: '关于电荷守恒定律，下列说法正确的是？', options: ['电荷可以凭空产生', '感应起电违背了电荷守恒', '电荷只能转移或重新分布，总量不变', '摩擦起电使世界总电荷增加了'], answer: '电荷只能转移或重新分布，总量不变', explanation: '电荷守恒定律指出，电荷既不会凭空产生也不会凭空消失，只能发生转移或在物体内部重新分布。无论是摩擦、接触还是感应起电，都只是电荷的迁移或分布变化，全世界的电荷总量始终保持不变，绝不违背该定律。' },
      { type: 'fill', question: '自然界最小的电荷量叫做元电荷，其数值 e = ___ C。', answer: '1.6×10⁻¹⁹', explanation: '元电荷 e 是自然界最小的电荷量，等于 1.6×10⁻¹⁹ 库仑。电子带 −e，质子带 +e。任何带电体的电荷量都是 e 的整数倍，不能取任意连续值。' },
      { type: 'fill', question: '用丝绸摩擦玻璃棒，玻璃棒失去电子，因此玻璃棒带___电；丝绸得到电子，带___电。（填"正"或"负"）', answer: '正|负', explanation: '玻璃棒对电子的束缚能力比丝绸弱，摩擦时玻璃棒把一部分电子让给了丝绸。失去电子使玻璃棒正电荷偏多，带正电；丝绸得到多余的电子，负电荷偏多，带负电。两者带等量异种电荷。' }
    ]
  });
})();
