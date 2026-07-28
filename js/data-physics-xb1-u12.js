/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第二章 机械振动
 * 课时12：受迫振动和共振
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u12',
    name: '受迫振动和共振',
    chapter: '选择性必修第一册 · 第二章 机械振动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、固有振动与固有频率' },
      { type: 'paragraph', text: '把一个弹簧振子拉离平衡位置后松手，它就会在自己内部弹力作用下不停地振动，这种不受外界持续外力、只靠系统自身性质维持的振动，叫固有振动。每种系统都有自己"天生"的振动快慢，用固有频率 f₀ 表示。比如不同的音叉、不同的琴弦，固有频率都不一样。' },
      { type: 'keypoint', label: '重点·固有频率', text: '<strong>固有频率是系统自身固有的振动频率，由系统本身的结构决定（如质量大小、弹簧软硬等），与振幅无关。</strong>同一根琴弦、同一个弹簧振子，无论你让它摆多大，它的固有频率基本不变。' },
      { type: 'paragraph', text: '可以打个比方：每口钟都有自己的"脾气"，你敲它一下，它就会按自己固定的调子响，这个调子就是它的固有频率。钟的快慢只和钟本身的材料、形状有关，和你用力敲多敲少（振幅）没关系。' },
      { type: 'list', items: ['固有振动不需要外界持续施加外力，靠系统自身弹力或重力维持', '固有频率由系统自身决定：质量越大往往越慢，弹簧越软往往越慢', '固有频率与振幅大小无关，敲轻敲重调子不变', '实际中因阻力存在，固有振动会逐渐变小（阻尼振动）'] },
      { type: 'heading', text: '二、受迫振动' },
      { type: 'paragraph', text: '如果系统自己振动会慢慢停下来，想让它持续振动怎么办？那就需要外界每隔一段时间推它一下，这种周期性的外力叫驱动力。在驱动力作用下系统的振动，叫受迫振动。例如大人推着小孩荡秋千、发动机带动机器外壳抖动，都是受迫振动。' },
      { type: 'keypoint', label: '重点·受迫振动的频率', text: '<strong>受迫振动达到稳定后，系统的振动频率等于驱动力的频率，而不等于系统的固有频率。</strong>换句话说，外面以多快节奏推，系统就以多快节奏动。' },
      { type: 'paragraph', text: '这一点容易想反：有人以为系统总是按自己的固有频率振动。其实在有持续驱动力时，系统最终"跟着"驱动力的节奏走。比如你按一定的快慢推秋千，秋千稳定后就按你推的快慢摆，而不是它自己原来的快慢。' },
      { type: 'example', label: '例题·受迫振动频率', text: '一台机器工作时以 20 赫兹的频率抖动，带动旁边的外壳一起振动。问外壳稳定后的振动频率是多少？<br><br><strong>解析</strong>：<br>外壳受到机器传来的周期性驱动力，频率是 20 赫兹。受迫振动稳定后，<strong>系统的振动频率等于驱动力的频率</strong>，所以外壳稳定后的振动频率就是 20 赫兹，而不是外壳自身的固有频率。' },
      { type: 'warn', label: '易错', text: '<strong>受迫振动的频率等于驱动力频率，不等于固有频率。</strong>很多同学会混淆：以为系统永远按自己的固有频率振动。只有在没有外界持续驱动、自由振动时才是固有频率；一旦有周期性驱动力，稳定后的频率就由驱动力决定。' },
      { type: 'heading', text: '三、共振——受迫振动的特殊情况' },
      { type: 'paragraph', text: '当驱动力的频率慢慢接近系统的固有频率时，你会发现系统的振幅（摆动幅度）越来越大；当两者几乎相等时，振幅达到最大。这种"驱动力频率接近固有频率时振幅最大"的现象，就叫共振。可以想象：你推秋千的节奏如果正好和秋千自己摆动的节奏合上，每推一下都"帮上忙"，秋千就荡得特别高。' },
      { type: 'keypoint', label: '重点·共振条件', text: '<strong>当驱动力的频率接近（等于）系统的固有频率时，受迫振动的振幅达到最大，这种现象叫共振。</strong>驱动力频率与固有频率相差越大，振幅越小。' },
      { type: 'paragraph', text: '共振曲线能清楚说明这一点：横轴是驱动力频率，纵轴是振幅，曲线在驱动力频率等于固有频率 f₀ 的地方出现一个明显的高峰。这个峰越高越尖，说明系统越容易发生强烈共振。' },
      { type: 'table', headers: ['情形', '驱动力频率与固有频率关系', '振幅大小'], rows: [['远离固有频率', 'f 与 f₀ 相差很大', '振幅很小'], ['接近固有频率', 'f 略小于或略大于 f₀', '振幅明显变大'], ['发生共振', 'f 等于 f₀（或非常接近）', '振幅达到最大']] },
      { type: 'tip', label: '提示', text: '<strong>共振既有好处也有坏处：</strong>要利用它时，就让驱动力频率对准固有频率，比如收音机调台、桥梁和乐器的发声；要防止它时，就设法让驱动力频率远离固有频率，比如部队过桥时便步行走、机器底座加减震垫，都是为了避免共振把东西振坏。' },
      { type: 'list', items: ['共振条件：驱动力频率 ≈ 系统固有频率 f₀', '共振表现：振幅达到最大，系统"响应"最强烈', '应用：乐器发声、共振筛、收音机选台利用共振', '防止：让驱动力频率远离 f₀，或增加阻尼减小振幅'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">固有振动：系统不受外力时自身的振动</text><rect x="120" y="140" width="120" height="20" fill="#234b45"/><path d="M 240 150 q 10 -15 20 0 q 10 15 20 0 q 10 -15 20 0 q 10 15 20 0" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="340" cy="150" r="18" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><line x1="60" y1="190" x2="620" y2="190" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5,4"/><text x="340" y="215" font-size="13" fill="#234b45" text-anchor="middle">平衡位置</text><text x="340" y="255" font-size="14" fill="#1f7a6e" text-anchor="middle">固有频率 f₀ 由系统自身（质量、劲度）决定</text></svg>', caption: '图1　不受外界持续外力时，系统按自身固有频率 f₀ 振动，频率由自身结构决定。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">受迫振动：在周期性驱动力作用下振动</text><circle cx="120" cy="150" r="20" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><line x1="120" y1="150" x2="240" y2="150" stroke="#2e9e8f" stroke-width="3"/><polygon points="250,150 234,144 234,156" fill="#2e9e8f"/><text x="120" y="195" font-size="13" fill="#234b45" text-anchor="middle">周期性驱动力</text><circle cx="440" cy="150" r="20" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><line x1="380" y1="150" x2="500" y2="150" stroke="#2e9e8f" stroke-width="3" stroke-dasharray="5,4"/><line x1="60" y1="200" x2="620" y2="200" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5,4"/><text x="440" y="245" font-size="13" fill="#234b45" text-anchor="middle">系统稳定后按驱动力频率振动</text></svg>', caption: '图2　有周期性驱动力时，系统稳定后的振动频率等于驱动力的频率，而不是固有频率。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">共振曲线：振幅随驱动力频率的变化</text><line x1="80" y1="280" x2="620" y2="280" stroke="#234b45" stroke-width="2"/><line x1="80" y1="280" x2="80" y2="80" stroke="#234b45" stroke-width="2"/><text x="350" y="305" font-size="13" fill="#234b45" text-anchor="middle">驱动力频率 f</text><text x="60" y="70" font-size="13" fill="#234b45" text-anchor="middle">振幅 A</text><path d="M 80 270 Q 215 270 350 100 Q 485 270 620 270" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="350" cy="100" r="5" fill="#1f7a6e"/><line x1="350" y1="100" x2="350" y2="280" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4,3"/><text x="350" y="92" font-size="13" fill="#1f7a6e" text-anchor="middle">共振峰 f = f₀</text><text x="350" y="160" font-size="12" fill="#234b45" text-anchor="middle">振幅最大</text></svg>', caption: '图3　共振曲线在驱动力频率等于固有频率 f₀ 处出现高峰，此时振幅最大，即发生共振。' }
    ],
    exercises: [
      { type: 'choice', question: '一个系统的固有频率由什么决定？', options: ['驱动力的频率', '系统本身的结构（如质量、劲度）', '振幅的大小', '外界环境的温度'], answer: '系统本身的结构（如质量、劲度）', explanation: '固有频率是系统自身"天生"的振动频率，只由系统本身的结构决定，比如振子的质量大小、弹簧的软硬（劲度系数）等。它与驱动力频率无关，也与振幅大小无关，外界温度在此基础问题中也不直接决定固有频率。所以选系统本身结构。' },
      { type: 'choice', question: '物体做受迫振动达到稳定后，其振动频率等于？', options: ['系统的固有频率', '驱动力的频率', '振幅的大小', '重力的频率'], answer: '驱动力的频率', explanation: '受迫振动是系统在周期性驱动力作用下的振动，稳定后系统会"跟着"驱动力的节奏走，振动频率等于驱动力的频率，而不等于系统的固有频率。只有自由振动（无持续驱动）时才按固有频率振动。所以稳定后的频率由驱动力决定。' },
      { type: 'choice', question: '发生共振的条件是？', options: ['驱动力频率远大于固有频率', '驱动力频率接近固有频率', '驱动力频率等于 0', '振幅为零'], answer: '驱动力频率接近固有频率', explanation: '当驱动力的频率接近（或等于）系统的固有频率时，系统每一次都被"推在节骨眼上"，受迫振动的振幅达到最大，这就是共振。驱动力频率远大于或远小于固有频率时振幅都很小；驱动力频率为 0 不能维持振动；振幅为零也不构成共振。' },
      { type: 'fill', question: '当驱动力的频率___系统的固有频率时，受迫振动的振幅达到最大，这种现象叫共振。', answer: '接近', explanation: '共振发生的条件是驱动力的频率接近（或等于）系统的固有频率 f₀。此时外界周期性驱动力与系统自身振动"合拍"，每一次都有效给系统补充能量，使振幅达到最大。所以横线上应填"接近"（或"等于""约等于"均可）。' },
      { type: 'fill', question: '为了避免机器因共振而损坏，应使驱动力的频率___（填"远离"或"接近"）系统的固有频率。', answer: '远离', explanation: '共振会在驱动力频率接近固有频率时使振幅急剧增大，可能振坏机器或建筑。要防止危害，就应当让驱动力的频率尽量偏离固有频率，即"远离"它；同时也可增加阻尼、加固结构来减小共振幅度。所以横线上应填"远离"。' }
    ]
  });
})();
