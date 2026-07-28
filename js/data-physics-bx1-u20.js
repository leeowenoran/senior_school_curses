/* ============================================================
 * 高一物理 · 必修 第一册 · 第四章 运动和力的关系
 * 课时20：牛顿运动定律的应用
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u20',
    name: '牛顿运动定律的应用',
    chapter: '必修第一册 · 第四章 运动和力的关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、牛顿运动定律能解决两类问题' },
      { type: 'paragraph', text: '学完牛顿三定律，最关键的是会用它们解决真实问题。这类问题总的来说只有两类：第一类是"已知物体受什么力，求它怎么运动"；第二类相反，是"已知物体怎么运动，反推它受了什么力"。连接这两类问题的桥梁，就是加速度 a。' },
      { type: 'keypoint', label: '重点·两类基本问题', text: '<strong>第一类：已知受力 → 求加速度 → 求运动情况（速度、位移、时间）。</strong><br><strong>第二类：已知运动情况 → 求加速度 → 求受力。</strong>两类问题都靠加速度 a 把"力"和"运动"连起来。' },
      { type: 'paragraph', text: '为什么加速度是桥梁？因为力决定加速度（F = m × a），而加速度又决定速度怎么变、位移怎么累积（运动学公式）。所以只要知道力，就能算出加速度，再算运动；反过来知道运动，就能反推加速度，再算受力。' },
      { type: 'list', items: ['第一类：受力已知，求速度、位移、时间等运动量', '第二类：运动已知，求未知的力', '加速度 a 是连接"力"与"运动"的桥梁', '两类的核心计算都先落到求加速度'] },
      { type: 'heading', text: '二、已知受力，求运动情况' },
      { type: 'paragraph', text: '解决第一类问题，标准思路是四步：先对物体受力分析，再把各力合成求出合力，然后用牛顿第二定律 a = F/m 算出加速度，最后把加速度代入运动学公式求速度或位移。' },
      { type: 'keypoint', label: '重点·第一类解题步骤', text: '<strong>① 受力分析；② 求合力 F；③ 由 a = F / m 求加速度；④ 用运动学公式求速度、位移、时间。</strong>每一步都要先规定正方向，力和加速度都按正方向取正负号。' },
      { type: 'example', label: '例题·已知力求运动', text: '一个质量 5 千克的物体静止在光滑水平面上，受到水平向右 20 牛顿的拉力，求 3 秒内的位移。<br><br><strong>解析</strong>：<br>光滑面无摩擦，物体只受水平拉力，合力 F = 20 牛顿，质量 m = 5 千克。由 a = F / m 得 a = 20 / 5 = 4 米每二次方秒。由初速为零的匀加速位移公式 s = 0.5 × a × t²，代入 t = 3 秒，得 s = 0.5 × 4 × 9 = 18 米。所以 3 秒内物体向右位移 18 米。' },
      { type: 'warn', label: '易错', text: '<strong>第一，受力分析时最容易漏力或多力（如忘记重力、支持力，或把"向前冲的力"当成真实存在的力）。</strong><br><strong>第二，不先统一单位就代入公式，例如用克、厘米会导致结果错误。</strong><br><strong>第三，不规定正方向，合力正负混乱。</strong>做题前先画受力图、统一单位、定正方向，能避开大多数错误。' },
      { type: 'table', headers: ['步骤', '做什么', '得到什么'], rows: [['1 受力分析', '画出所有力', '力的清单'], ['2 求合力', '沿正方向合成', '合力 F'], ['3 求加速度', '用 a = F / m', '加速度 a'], ['4 运动学', '代入公式', '速度 / 位移 / 时间']] },
      { type: 'tip', label: '提示', text: '<strong>当力不在一条直线上时，用正交分解法：把各力沿正方向和垂直方向分解，分别求和得到两个方向的合力，再求总加速度。</strong>通常让一个坐标轴沿加速度方向，这样计算最直接。分解法是处理斜面上、拉绳斜拉等复杂受力情形的利器。' },
      { type: 'list', items: ['先画受力图，不漏力不多力', '所有量统一成国际单位再代入', '规定正方向，给力与加速度标正负', '受力简单用合成，受力复杂用正交分解'] },
      { type: 'heading', text: '三、已知运动，求受力' },
      { type: 'paragraph', text: '第二类问题方向相反：题目告诉你物体怎么动（比如从静止开始几秒走了多远，或刹车滑了多长距离），让你求某个未知的力。思路是先由运动学反推出加速度，再用牛顿第二定律反推合力，进而求出那个未知力。' },
      { type: 'keypoint', label: '重点·第二类解题步骤', text: '<strong>① 由运动学公式求加速度 a；② 由 F = m × a 求合力；③ 结合其他已知力求未知力。</strong>这类问题常用于判断摩擦力大小、绳子拉力、支持力等。' },
      { type: 'paragraph', text: '举个例子：已知物体在水平面上从某速度刹车到停，量出滑行距离和时间，就能算出减速度，再乘以质量得到阻力（摩擦力）大小。生产中测摩擦力、检验刹车性能，用的就是这种"由运动反推受力"的思路。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">解题主线：受力 → 合力 → 加速度 → 运动</text><rect x="40" y="130" width="130" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="105" y="165" font-size="14" fill="#234b45" text-anchor="middle">受力分析</text><rect x="200" y="130" width="120" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="260" y="165" font-size="14" fill="#234b45" text-anchor="middle">求合力 F</text><rect x="350" y="130" width="130" height="60" rx="10" fill="#4fb3a5"/><text x="415" y="165" font-size="14" fill="#234b45" text-anchor="middle">加速度 a</text><rect x="510" y="130" width="130" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="575" y="165" font-size="14" fill="#234b45" text-anchor="middle">运动情况</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">加速度 a 是把"力"与"运动"连接起来的桥梁</text></svg>', caption: '图1　牛顿定律应用主线：受力分析求出合力，得到加速度，再求物体的运动情况。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">两类问题：已知力求运动 / 已知运动求力</text><rect x="60" y="80" width="250" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="115" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">第一类</text><text x="185" y="160" font-size="13" fill="#234b45" text-anchor="middle">已知力 → a → 运动</text><text x="185" y="195" font-size="13" fill="#234b45" text-anchor="middle">求速度、位移、时间</text><rect x="370" y="80" width="250" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="115" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">第二类</text><text x="495" y="160" font-size="13" fill="#234b45" text-anchor="middle">已知运动 → a → 力</text><text x="495" y="195" font-size="13" fill="#234b45" text-anchor="middle">求摩擦、拉力等</text></svg>', caption: '图2　应用牛顿定律的两类问题：由力求运动，或由运动求力，都以加速度为桥梁。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ar" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L11,6 L0,12 Z" fill="#234b45"/></marker><marker id="ar2" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L11,6 L0,12 Z" fill="#2e9e8f"/></marker></defs><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">例题场景：水平拉力拉动箱子</text><rect x="200" y="180" width="160" height="70" rx="6" fill="#4fb3a5"/><text x="280" y="220" font-size="14" fill="#234b45" text-anchor="middle">箱子</text><line x1="360" y1="215" x2="500" y2="215" stroke="#234b45" stroke-width="4" marker-end="url(#ar)"/><text x="430" y="200" font-size="13" fill="#234b45" text-anchor="middle">拉力 F</text><line x1="200" y1="215" x2="120" y2="215" stroke="#2e9e8f" stroke-width="3" marker-end="url(#ar2)"/><text x="160" y="200" font-size="13" fill="#234b45" text-anchor="middle">摩擦</text><rect x="120" y="250" width="440" height="14" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">合力 = 拉力 − 摩擦，再求加速度与位移</text></svg>', caption: '图3　水平拉箱子的受力情形：合力等于拉力减摩擦，据此求加速度和位移。' }
    ],
    exercises: [
      { type: 'choice', question: '应用牛顿运动定律解决问题时，把"受力"和"运动"联系起来的桥梁物理量是？', options: ['速度', '位移', '加速度', '时间'], answer: '加速度', explanation: '力通过牛顿第二定律决定加速度（F = m × a），而加速度又通过运动学公式决定速度、位移等运动量的变化。因此无论是由受力求运动，还是由运动求受力，都要先求出加速度，加速度是把"力"与"运动"连接起来的桥梁。速度、位移、时间都只是运动学的结果量，本身不起桥梁作用。' },
      { type: 'choice', question: '一个质量 4 千克的物体受到 8 牛顿的水平合力，它的加速度大小为？', options: ['0.5 米每二次方秒', '2 米每二次方秒', '12 米每二次方秒', '32 米每二次方秒'], answer: '2 米每二次方秒', explanation: '由牛顿第二定律 a = F / m，代入合力 F = 8 牛顿、质量 m = 4 千克，得到 a = 8 / 4 = 2，单位是米每二次方秒。所以加速度大小为 2 米每二次方秒，方向与合力方向相同。计算时质量和力都已用国际单位，结果单位自然正确。' },
      { type: 'choice', question: '已知物体的运动情况（如位移、时间）去求它受到的力，这类问题属于？', options: ['第一类问题：已知力求运动', '第二类问题：已知运动求力', '与牛顿定律无关', '只能用实验测量'], answer: '第二类问题：已知运动求力', explanation: '牛顿定律应用有两类：第一类是已知受力求运动情况；第二类正好相反，是已知物体的运动情况（如由位移、时间推出加速度），再用 F = m × a 反推它受的力。题目说"已知运动去求力"，正属于第二类问题。这类方法常用于测摩擦力、绳的拉力等。' },
      { type: 'fill', question: '解决"已知受力求运动"问题的标准四步是：受力分析、求合力、由 a = F / m 求___、再用运动学公式求速度或位移。', answer: '加速度', explanation: '第一类问题的核心是先用牛顿第二定律由合力求出加速度，因为加速度是连接受力与运动的桥梁。拿到题目后，先分析物体受的所有力，求合力 F，再代入 a = F / m 算出加速度，最后把加速度带入匀变速直线运动公式，求速度、位移或时间。四步中"求加速度"最关键。' },
      { type: 'fill', question: '一个质量 10 千克的物体在光滑水平面上受 20 牛顿水平拉力，由静止开始运动，3 秒后的速度为___米每秒。', answer: '6', explanation: '光滑水平面无摩擦，物体所受合力 F = 20 牛顿，质量 m = 10 千克。由 a = F / m 得 a = 20 / 10 = 2 米每二次方秒。物体从静止开始做匀加速运动，由速度公式 v = a × t，代入 t = 3 秒，得 v = 2 × 3 = 6 米每秒。所以 3 秒后物体的速度为 6 米每秒，方向与拉力相同。' }
    ]
  });
})();
