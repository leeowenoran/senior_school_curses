/* ============================================================
 * 高一物理 · 必修 第一册 · 第一章 运动的描述
 * 课时5：实验：用打点计时器测量速度
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u5',
    name: '实验：用打点计时器测量速度',
    chapter: '必修第一册 · 第一章 运动的描述',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、打点计时器的作用与种类' },
      { type: 'paragraph', text: '打点计时器是一种计时仪器，它每隔相等的时间在纸带上打下一个点，于是纸带上的点就记录了物体运动的时间和位置信息。把纸带与运动物体连在一起，通过分析点之间的距离，就能算出物体在不同时刻的速度。' },
      { type: 'keypoint', label: '重点·两种打点计时器', text: '常用打点计时器有两种：<strong>电磁打点计时器</strong>和<strong>电火花计时器</strong>。两者都使用交流电源，工作频率都是50Hz，打点周期都是0.02秒，但工作电压和打点方式不同。' },
      { type: 'paragraph', text: '电磁打点计时器内部有线圈和振针，靠低压交流电驱动振针在纸带上打点，工作电压在6V以下（常接4至6V交流）。由于振针接触纸带，纸带运动受到的阻力稍大。' },
      { type: 'paragraph', text: '电火花计时器利用火花放电在纸带上打点，工作电压为220V交流电。它不直接接触纸带，纸带运动受到的阻力更小，实验误差通常更小。' },
      { type: 'list', items: ['电磁打点计时器：6V以下交流，振针打点，纸带阻力较大', '电火花计时器：220V交流，火花打点，纸带阻力较小', '共同点：都用交流电源，频率50Hz，打点周期0.02s', '两者都通过纸带上的点记录运动的时间和位置'] },
      { type: 'table', headers: ['比较项', '电磁打点计时器', '电火花计时器'], rows: [['工作电压', '6V以下交流', '220V交流'], ['打点方式', '振针打点', '火花打点'], ['纸带阻力', '较大', '较小'], ['频率/周期', '50Hz / 0.02s', '50Hz / 0.02s']] },
      { type: 'heading', text: '二、纸带与计数点' },
      { type: 'paragraph', text: '物体拖动纸带运动时，计时器在纸带上打出一系列点。相邻两个计时点之间的时间间隔就是打点周期0.02秒。点越密，说明物体运动越慢；点越疏，说明运动越快。纸带上的点直接反映了运动的"时间-位置"信息。' },
      { type: 'keypoint', label: '重点·计数点', text: '为方便测量，常<strong>每隔5个计时点取1个计数点</strong>（即每两个计数点之间包含5个间隔）。因为相邻计时点间隔0.02秒，所以相邻计数点的时间间隔为 5 × 0.02 = 0.1秒。' },
      { type: 'example', label: '例题·求某计数点速度', text: '纸带上相邻计数点间距 x₁₂ = 4.0厘米，x₂₃ = 5.0厘米，计数点时间间隔 T = 0.1秒。求计数点2的瞬时速度。<br><br><strong>解析</strong>：取计数点2两侧的一段（从点1到点3），这段位移 = x₁₂ + x₂₃ = 9.0厘米 = 0.09米，对应时间 = 2T = 0.2秒。用这一段的平均速度近似点2的瞬时速度：v₂ ≈ 0.09 ÷ 0.2 = 0.45 m/s。' },
      { type: 'warn', label: '易错', text: '<strong>不要混淆"计时点"和"计数点"。</strong>计时点是计时器实际打出的每一个点，间隔0.02秒；计数点是为方便测量每隔5个计时点取的一个点，间隔0.1秒。题目若说"每5个点取一个计数点"，相邻计数点间包含5个间隔，时间是0.1秒，不是0.02秒。' },
      { type: 'paragraph', text: '物体运动往往时快时慢，真正的瞬时速度难以直接测。我们采用"以平均速度代替瞬时速度"的办法：在某点附近取一段很短的时间（或两个相邻计数点之间），用这段的平均速度近似表示该点（或该段中点）的瞬时速度。取的这段越短，近似越准。' },
      { type: 'heading', text: '三、测量某点速度的方法' },
      { type: 'paragraph', text: '具体做法是：在纸带上标出计数点0、1、2、3……，测出相邻计数点间的距离 x₀₁、x₁₂、x₂₃……。要求某一点（如点n）的速度，就取它前后两段位移之和除以两倍时间间隔，即 vₙ ≈ (xₙ₋₁,ₙ + xₙ,ₙ₊₁) / (2T)。这是本实验的核心计算方法。' },
      { type: 'keypoint', label: '重点·某点速度的计算', text: '计数点 n 的瞬时速度，用其前后相邻两段的平均速度近似：<br><strong>vₙ ≈ (xₙ₋₁,ₙ + xₙ,ₙ₊₁) / (2T)</strong><br>其中 T = 0.1秒是相邻计数点的时间间隔。' },
      { type: 'tip', label: '提示', text: '<strong>打点计时器必须用交流电源。</strong>若误接直流电源，振针不会被周期性驱动，无法正常打点。电磁式接6V以下交流，电火花式接220V交流，接线前务必看清仪器标注。' },
      { type: 'list', items: ['接好交流电源，让纸带穿过限位孔并压好', '先接通电源，待打点稳定后再释放纸带', '选取计数点，测出相邻计数点间距离', '用 vₙ ≈ (前后两段位移和) / (2T) 求各点速度'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">两种打点计时器：电磁式与电火花式</text><rect x="50" y="60" width="270" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="90" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">电磁打点计时器</text><text x="185" y="120" font-size="13" fill="#234b45" text-anchor="middle">工作电压：6V以下交流</text><text x="185" y="148" font-size="13" fill="#234b45" text-anchor="middle">振针打点，纸带阻力较大</text><text x="185" y="176" font-size="13" fill="#234b45" text-anchor="middle">频率50Hz，周期0.02s</text><text x="185" y="204" font-size="13" fill="#234b45" text-anchor="middle">接低压交流电源</text><rect x="360" y="60" width="270" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="90" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">电火花计时器</text><text x="495" y="120" font-size="13" fill="#234b45" text-anchor="middle">工作电压：220V交流</text><text x="495" y="148" font-size="13" fill="#234b45" text-anchor="middle">火花打点，纸带阻力小</text><text x="495" y="176" font-size="13" fill="#234b45" text-anchor="middle">频率50Hz，周期0.02s</text><text x="495" y="204" font-size="13" fill="#234b45" text-anchor="middle">接220V交流电源</text></svg>', caption: '图1　电磁打点计时器（左）与电火花计时器（右）的电压、打点方式对比。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">纸带上的点：计数点每5个计时点取1个</text><line x1="60" y1="120" x2="620" y2="120" stroke="#2e9e8f" stroke-width="2"/><g fill="#234b45"><circle cx="80" cy="120" r="4"/><circle cx="110" cy="120" r="4"/><circle cx="140" cy="120" r="4"/><circle cx="170" cy="120" r="4"/><circle cx="200" cy="120" r="4"/><circle cx="230" cy="120" r="4"/><circle cx="260" cy="120" r="4"/><circle cx="290" cy="120" r="4"/><circle cx="320" cy="120" r="4"/><circle cx="350" cy="120" r="4"/><circle cx="380" cy="120" r="4"/><circle cx="410" cy="120" r="4"/><circle cx="440" cy="120" r="4"/><circle cx="470" cy="120" r="4"/><circle cx="500" cy="120" r="4"/><circle cx="530" cy="120" r="4"/><circle cx="560" cy="120" r="4"/><circle cx="590" cy="120" r="4"/></g><circle cx="80" cy="120" r="9" fill="none" stroke="#1f7a6e" stroke-width="3"/><circle cx="230" cy="120" r="9" fill="none" stroke="#1f7a6e" stroke-width="3"/><circle cx="380" cy="120" r="9" fill="none" stroke="#1f7a6e" stroke-width="3"/><circle cx="530" cy="120" r="9" fill="none" stroke="#1f7a6e" stroke-width="3"/><text x="80" y="158" font-size="13" fill="#1f7a6e" text-anchor="middle">计数点0</text><text x="230" y="158" font-size="13" fill="#1f7a6e" text-anchor="middle">计数点1</text><text x="380" y="158" font-size="13" fill="#1f7a6e" text-anchor="middle">计数点2</text><text x="530" y="158" font-size="13" fill="#1f7a6e" text-anchor="middle">计数点3</text><text x="340" y="205" font-size="13" fill="#234b45" text-anchor="middle">相邻计数点间隔5个计时点，时间 = 0.1 s</text></svg>', caption: '图2　纸带上实际打点密集，按每5个计时点取一个计数点，相邻计数点间隔0.1秒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">用附近一段的平均速度近似该点瞬时速度</text><line x1="80" y1="150" x2="600" y2="150" stroke="#2e9e8f" stroke-width="2"/><circle cx="120" cy="150" r="7" fill="#234b45"/><text x="120" y="180" font-size="13" fill="#234b45" text-anchor="middle">0</text><circle cx="270" cy="150" r="7" fill="#234b45"/><text x="270" y="180" font-size="13" fill="#234b45" text-anchor="middle">1</text><circle cx="420" cy="150" r="10" fill="#4fb3a5"/><text x="420" y="182" font-size="13" fill="#1f7a6e" text-anchor="middle">2(待求)</text><circle cx="570" cy="150" r="7" fill="#234b45"/><text x="570" y="180" font-size="13" fill="#234b45" text-anchor="middle">3</text><line x1="270" y1="118" x2="570" y2="118" stroke="#4fb3a5" stroke-width="4"/><text x="420" y="106" font-size="13" fill="#234b45" text-anchor="middle">用这段平均速度近似点2速度</text><text x="420" y="220" font-size="14" fill="#234b45" text-anchor="middle">v₂ ≈ (x₁₂ + x₂₃) / (2T)</text></svg>', caption: '图3　求计数点2的速度，取它两侧相邻两段（点1到点3）的平均速度来近似。' }
    ],
    exercises: [
      { type: 'choice', question: '电磁打点计时器的工作电压是？', options: ['220V交流', '6V以下交流', '直流6V', '直流220V'], answer: '6V以下交流', explanation: '电磁打点计时器靠低压交流电驱动振针打点，工作电压在6V以下（通常接4至6V交流）。电火花计时器才用220V交流。打点计时器必须用交流电源，不能用直流，所以直流选项都不对。' },
      { type: 'choice', question: '关于打点计时器使用的电源和频率，下列说法正确的是？', options: ['直流电源，频率50Hz', '交流电源，频率50Hz', '交流电源，频率60Hz', '直流电源，频率50Hz'], answer: '交流电源，频率50Hz', explanation: '打点计时器使用交流电源，我国市电频率为50Hz，因此打点周期 T = 1/50 = 0.02秒。它不能用直流电源，频率也不是60Hz，所以只有"交流电源，频率50Hz"是正确的。' },
      { type: 'choice', question: '若纸带上每5个计时点取一个计数点，则相邻计数点的时间间隔为？', options: ['0.02 s', '0.04 s', '0.1 s', '0.5 s'], answer: '0.1 s', explanation: '打点周期（相邻计时点间隔）为0.02秒。每5个计时点取一个计数点，意味着相邻计数点之间包含5个间隔，时间间隔 = 5 × 0.02 = 0.1秒。注意不要误算成0.02秒。' },
      { type: 'fill', question: '用打点计时器测某点瞬时速度时，可用包含该点在内的___（填"极短"或"很长"）时间内的平均速度来近似。', answer: '极短', explanation: '瞬时速度难以直接测量，实验中取该点附近一段极短时间（或相邻两个计数点之间），用这一段的平均速度近似代替该点的瞬时速度。取的时间段越短，近似越准确。' },
      { type: 'fill', question: '我国市电频率为50Hz，打点计时器每打一个点的周期 T = ___ s。', answer: '0.02', explanation: '打点周期等于交流电的周期，T = 1 / f = 1 / 50 = 0.02秒。即计时器每隔0.02秒打一个点。相邻计数点若间隔5个计时点，则时间间隔为0.1秒。' }
    ]
  });
})();
