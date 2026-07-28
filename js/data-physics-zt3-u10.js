/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题三 热力学定律
 * 课时3：热学综合应用：气缸活塞与液柱模型中的能量分析
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u10-l1',
    name: '热学综合应用：气缸活塞与液柱模型中的能量分析',
    chapter: '热学与近代物理 · 专题三 热力学定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、气缸活塞模型的受力平衡' },
      { type: 'paragraph', text: '气缸里封闭着一定质量的气体，上方有一个可以滑动的活塞。分析这类问题，第一步是看活塞受力是否平衡。活塞受到：气体向下的压力 pS、外界大气向上的压力 p0S、活塞自身重力 mg，有时还有外加的力 F。当活塞静止或缓慢移动时，这些力互相平衡。通过平衡方程，就能把未知的气体压强 p 求出来。' },
      { type: 'keypoint', label: '重点·活塞平衡方程', text: '<strong>对活塞列受力平衡：气体压力、大气压力、活塞重力和外力相互平衡，即 pS = p0S + mg + F（符号依方向而定）。</strong>由此解出封闭气体压强 p，是分析气缸问题的第一步。' },
      { type: 'list', items: ['先确定活塞受几个力：气体压力 pS、大气压力 p0S、活塞重力 mg、可能的外力 F', '规定正方向，列平衡方程 pS = p0S + mg + F', '由平衡方程解出封闭气体压强 p', '压强 p 确定后，再结合温度、体积变化分析内能'] },
      { type: 'heading', text: '二、液柱模型（U形管、水银柱）的压强' },
      { type: 'paragraph', text: '液柱模型和气缸类似，只是把活塞换成了液体（常用水银或水）。一段高为 h 的液柱产生的压强是 ρgh（ρ 是液体密度，g 是重力加速度）。在连通器或封闭管中，同一水平面上的压强相等，利用这个"等压面"可以从已知压强推出封闭气体的压强。比如一端封闭、一端开口的玻璃管，开口端是大气压 p0，封闭端气体压强就用液柱高度差换算。' },
      { type: 'keypoint', label: '重点·液柱压强', text: '<strong>高为 h 的液柱产生压强 ρgh；同一水平面处压强相等。</strong>据此可由大气压 p0 和液柱高度差 h 求出封闭气体压强 p = p0 ± ρgh（加减看液柱在封闭侧还是开口侧）。' },
      { type: 'example', label: '例题·求封闭气体压强', text: '一端封闭、一端开口的细管竖直放置，管内有高 h = 10 cm 的水银柱（ρ水银 = 13.6×10³ kg/m³），封闭端在上、开口端在下，水银柱下方连通大气。求封闭气体压强 p（用 cmHg 作单位，即厘米汞柱）。<br><br><strong>解析</strong>：<br>开口端压强为大气压 p0 = 76 cmHg。封闭端在水银柱上方，比下方低一截，所以 p = p0 − h = 76 − 10 = 66 cmHg。<br>若管子倒过来（封闭端在下），则 p = p0 + h = 86 cmHg。' },
      { type: 'warn', label: '易错', text: '<strong>液柱压强的加减方向容易搞反。</strong>口诀："液柱把自己的重量压在下方"。水银柱在封闭气体下方时，它把重量加给下方，封闭气体压强比大气压小，应减 h；水银柱在封闭气体上方时，封闭气体要多托住这段液柱，压强比大气压大，应加 h。画受力图最稳妥。' },
      { type: 'heading', text: '三、气体做功 W = pΔV 与能量分析' },
      { type: 'paragraph', text: '气体体积变化时就会做功。当气体膨胀、体积增加 ΔV，气体对外界做功，大小为 W = pΔV（p 为气体压强）；当气体被压缩、体积减小，是外界对气体做功，W 取正。结合热力学第一定律 ΔU = W + Q，就能把"气缸活塞的力学平衡"和"内能变化"连起来：先由平衡求 p，再由 pΔV 求功，最后由 Q 和 W 判断 ΔU 与温度。' },
      { type: 'keypoint', label: '重点·气体做功', text: '<strong>气体体积变化做的功 W = p × ΔV。</strong>气体膨胀（ΔV &gt; 0）时对外做功，在 ΔU = W + Q 中取 W &gt; 0（外界对气体做负功）；被压缩时 ΔV &lt; 0，外界对气体做正功。' },
      { type: 'table', headers: ['过程', '体积变化', '做功 W', '内能变化 ΔU 与温度'], rows: [['等温膨胀', '增大', '气体对外做功(W按约定取负)', 'ΔU=0，温度不变'], ['等压压缩', '减小', '外界对气体做功(W取正)', '若放热则ΔU可正可负，需算'], ['绝热膨胀', '增大', '对外做功，Q=0', 'ΔU=W&lt;0，温度降低'], ['绝热压缩', '减小', '外界做功，Q=0', 'ΔU=W&gt;0，温度升高']] },
      { type: 'tip', label: '提示', text: '<strong>绝热过程 Q = 0，是最容易算能量的情形：做功全用来改变内能。</strong>气体绝热膨胀对外做功，内能减少、温度降低（如气球放气变凉）；绝热压缩则内能增加、温度升高（如打气筒发热）。先判断过程类型再套 ΔU = W + Q。' },
      { type: 'heading', text: '四、综合解题三步法' },
      { type: 'paragraph', text: '遇到气缸活塞或液柱的混合题，按三步走：第一步，对活塞或液柱列平衡方程，求出气体压强 p；第二步，看体积 V 和温度 T 怎么变，用气体实验定律或 pV = nRT 找状态关系；第三步，用气体做功 W = pΔV 和热力学第一定律 ΔU = W + Q，分析内能和温度变化。力学、气体定律、能量三者结合，就是这类题的核心。' },
      { type: 'keypoint', label: '重点·解题主线', text: '<strong>力平衡求压强 p → 气体定律求状态变化（V、T）→ W = pΔV 与 ΔU = W + Q 做能量分析。</strong>三者环环相扣，缺一不可。' },
      { type: 'list', items: ['先列活塞/液柱受力平衡，确定各状态气体压强', '再用玻意耳、查理或盖·吕萨克定律（或 pV=nRT）找 V、T 关系', '计算气体做功 W = pΔV，注意正负', '最后用 ΔU = W + Q 判断内能和温度变化', '绝热时 Q=0，等温时 ΔU=0，是常见简化条件'] },
      { type: 'example', label: '例题·绝热压缩', text: '一定质量理想气体在气缸中被活塞缓慢绝热压缩，体积减小 ΔV = −2.0×10⁻³ m³，压强 p = 1.0×10⁵ Pa。求外界对气体做的功及内能变化。<br><br><strong>解析</strong>：<br>气体被压缩，外界对气体做功 W = p × |ΔV| = 1.0×10⁵ × 2.0×10⁻³ = 200 J，即 W = +200 J。<br>绝热过程 Q = 0，由 ΔU = W + Q 得 ΔU = 200 J &gt; 0。<br>内能增加，温度升高。' },
      { type: 'warn', label: '易错', text: '<strong>W = pΔV 中的 W 与 ΔU = W + Q 中的 W 正负约定要对上。</strong>若把 W = pΔV 算成"气体对外做功的量值"，代入第一定律时要按"外界对系统做功"取号：膨胀时外界对气体做负功，压缩时做正功。很多同学直接把 200 J 当 ΔU 的减项，导致符号全反。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">气缸活塞受力平衡求气体压强</text><rect x="180" y="70" width="320" height="150" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="150" font-size="14" fill="#234b45" text-anchor="middle">封闭气体 压强 p</text><rect x="168" y="130" width="24" height="40" fill="#4fb3a5"/><text x="300" y="110" font-size="13" fill="#234b45" text-anchor="middle">pS 向下</text><text x="380" y="110" font-size="13" fill="#234b45" text-anchor="middle">p0S 向上</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">平衡：pS = p0S + mg + F（方向依题而定）</text></svg>', caption: '图1　对活塞列受力平衡方程，可由大气压强、活塞重力和外力求出封闭气体的压强 p。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">液柱模型：用液柱高度换算气体压强</text><rect x="300" y="70" width="80" height="170" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="310" y="120" width="60" height="100" fill="#4fb3a5"/><text x="340" y="180" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">液柱 h</text><text x="160" y="150" font-size="13" fill="#234b45" text-anchor="middle">封闭气体 p</text><text x="520" y="150" font-size="13" fill="#234b45" text-anchor="middle">大气 p0</text><text x="340" y="265" font-size="13" fill="#234b45" text-anchor="middle">等压面：p = p0 ± ρgh（依液柱位置取加减）</text></svg>', caption: '图2　同一水平面压强相等，用水银柱高度 h 产生的压强 ρgh 换算出封闭气体的压强。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">综合三步：力平衡→气体定律→能量分析</text><rect x="50" y="120" width="160" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="155" font-size="13" fill="#234b45" text-anchor="middle">①力平衡求p</text><rect x="260" y="120" width="160" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="155" font-size="13" fill="#234b45" text-anchor="middle">②气体定律求V,T</text><rect x="470" y="120" width="160" height="60" rx="8" fill="#4fb3a5"/><text x="550" y="155" font-size="13" fill="#234b45" text-anchor="middle">③W=pΔV,ΔU=W+Q</text><text x="210" y="110" font-size="18" fill="#2e9e8f" text-anchor="middle">→</text><text x="420" y="110" font-size="18" fill="#2e9e8f" text-anchor="middle">→</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">力学、气体状态、能量三者环环相扣</text></svg>', caption: '图3　气缸与液柱综合题的三步主线：先求压强，再用气体定律，最后做 W = pΔV 与 ΔU = W + Q 能量分析。' }
    ],
    exercises: [
      { type: 'choice', question: '关于气体做功与热力学第一定律，下列说法正确的是？', options: ['气体膨胀时外界对气体做正功', '气体被压缩时外界对气体做正功', '绝热过程中气体做功不会改变内能', 'W = pΔV 中的 W 永远取正值'], answer: '气体被压缩时外界对气体做正功', explanation: '按"外界对系统做功为正"的约定，气体被压缩时体积减小，外界对气体做正功；气体膨胀时是对外做功，外界对气体做负功，所以A错。绝热过程 Q = 0，做功全部用来改变内能，C错。W 的正负号取决于体积增减，并非永远为正，D错。' },
      { type: 'choice', question: '一定质量的理想气体经历绝热膨胀，下列判断正确的是？', options: ['Q>0，内能增加', 'Q=0，气体对外做功使内能减少、温度降低', '温度不变，内能不变', '外界对气体做功，内能增加'], answer: 'Q=0，气体对外做功使内能减少、温度降低', explanation: '绝热过程与外界无热量交换，Q = 0。气体膨胀时体积增大，对外做功，按约定外界对气体做负功（W < 0）。由 ΔU = W + Q 得 ΔU < 0，内能减少；理想气体内能只由温度决定，故温度降低。这正是气球放气变凉的原因。' },
      { type: 'choice', question: '一端封闭、一端开口的细管，封闭端在上，管内有一段高 h 的水银柱，开口端通大气 p0。封闭气体的压强 p 等于？', options: ['p0 + ρgh', 'p0 − ρgh', 'p0', 'ρgh'], answer: 'p0 − ρgh', explanation: '开口端压强为大气压 p0。水银柱位于封闭气体下方，它的重量压在下方，使封闭端压强比开口端小一个液柱压强 ρgh，因此 p = p0 − ρgh。若管子倒过来封闭端在下，则封闭气体要多托住液柱，压强变为 p0 + ρgh。' },
      { type: 'fill', question: '气缸中气体被活塞缓慢压缩，体积变化 ΔV = −1.0×10⁻³ m³，气体压强 p = 2.0×10⁵ Pa。外界对气体做的功 W = p×|ΔV| = ___ J（填数值）。', answer: '200', explanation: '外界对气体做功的大小为 W = p × |ΔV| = 2.0×10⁵ × 1.0×10⁻³ = 200 J。压缩时体积减小，按"外界对系统做功为正"的约定，W 取正值 +200 J。若代入 ΔU = W + Q，这份功会使气体内能增加（放热情况另算）。' },
      { type: 'fill', question: '分析气缸活塞或液柱综合题的三步主线是：①列___求气体压强 p；②用气体实验定律求体积和温度的变化；③用 W = pΔV 和 ___ 做能量分析。', answer: '受力平衡 | ΔU=W+Q', explanation: '这类综合题的核心主线是：先对活塞或液柱列受力平衡方程求出封闭气体压强 p；再用玻意耳、查理或盖·吕萨克等气体定律确定体积 V 和温度 T 的变化；最后用气体做功 W = pΔV 与热力学第一定律 ΔU = W + Q 做能量分析，把力学、气体状态和能量三者联系起来。' }
    ]
  });
})();
