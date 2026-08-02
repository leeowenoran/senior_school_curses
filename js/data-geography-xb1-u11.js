/* 地理 · 选择性必修1 · 第4章 · 课时：海—气相互作用 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u11',
    name: '第3节 海—气相互作用',
    chapter: '选择性必修1 · 第4章 水的运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、海—气相互作用的过程' },
      { type: 'paragraph', text: '海洋与大气之间不断进行着热量、水分和气体交换，这一过程称为海—气相互作用。海洋通过蒸发向大气输送水汽和热量，大气则通过风应力驱动海水运动（如洋流），并将热量重新分配。两者构成一个紧密耦合的系统。' },
      { type: 'list', items: ['海洋 → 大气：蒸发输送水汽和热量', '大气 → 海洋：风驱动洋流、降水返还', '海—气间热量水分持续交换', '海洋是大气的主要热源和水源'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">海—气相互作用</text><rect x="80" y="180" width="520" height="70" fill="#3d6fb5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="220" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">海洋</text><line x1="340" y1="180" x2="340" y2="90" stroke="#c1583b" stroke-width="3" marker-end="url(#u1)"/><text x="350" y="130" font-size="12" fill="#1f3a4d">蒸发：水汽、热量↑</text><line x1="260" y1="90" x2="320" y2="180" stroke="#7fd0d8" stroke-width="3" marker-end="url(#u2)"/><text x="250" y="130" font-size="12" fill="#1f3a4d">降水、风：返还↓</text></svg>', caption: '图1　海洋通过蒸发 upward 输送水汽热量，大气通过降水与风向下影响海洋。' },
      { type: 'keypoint', label: '重点·海洋对大气的调节作用', text: '<strong>海洋是大气的「调节器」：</strong>海面吸收约 85% 的太阳辐射并储存于深层，比热容大、升温慢，使沿海气候温差小；通过蒸发向大气提供约 86% 的水汽来源；洋流又把热量从高纬传向低纬、从低纬传向高纬，调节全球热量平衡。' },
      { type: 'heading', text: '二、海—气相互作用与水热平衡' },
      { type: 'paragraph', text: '在长期的平均状态下，地球表面接收的太阳辐射热量与向外释放的热量基本相等，海洋与大气之间的热量、水分交换也大致平衡，称为水热平衡。它使全球气候保持相对稳定。一旦这种平衡被打破（如洋流异常），就会引发气候异常。' },
      { type: 'list', items: ['热量收入＝支出，总体平衡', '水分收支也基本平衡', '洋流是热量传输的主要途径', '平衡打破→气候异常'] },
      { type: 'table', headers: ['交换内容', '海洋→大气', '大气→海洋'], rows: [['热量', '蒸发、长波辐射输送', '降水、风搅拌'], ['水分', '蒸发提供水汽', '降水返还海洋'], ['气体', '释放二氧化碳、氧', '吸收二氧化碳']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">全球水热平衡示意</text><circle cx="340" cy="170" r="90" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">收支平衡</text><text x="340" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">热量收入=支出</text><line x1="250" y1="170" x2="150" y2="170" stroke="#c1583b" stroke-width="2" marker-end="url(#v1)"/><text x="120" y="155" font-size="11" fill="#1f3a4d">收入</text><line x1="430" y1="170" x2="530" y2="170" stroke="#3d6fb5" stroke-width="2" marker-end="url(#v2)"/><text x="540" y="155" font-size="11" fill="#1f3a4d">支出</text></svg>', caption: '图2　海—气间热量水分长期收支平衡，维持全球气候稳定。' },
      { type: 'example', label: '例题·海洋的作用', text: '题目：关于海洋对大气影响的叙述，错误的是？<br>A. 是大气主要的水汽来源　B. 能调节全球热量平衡<br>C. 比热容小、升温快　D. 通过洋流输送热量<br>解析：海洋水量巨大、比热容大，升温慢、降温也慢，因而对气候有调节作用，并不是「比热容小、升温快」。海洋蒸发提供了大气中约 86% 的水汽，洋流输送热量维持全球热量平衡。所以错误的选项是 C。' },
      { type: 'heading', text: '三、厄尔尼诺与拉尼娜' },
      { type: 'paragraph', text: '厄尔尼诺和拉尼娜是赤道中东太平洋海温异常现象。厄尔尼诺年，该海区海温异常升高，东南信风减弱，西太平洋暖水东流，引发全球气候异常（如南美西岸暴雨、东南亚干旱）。拉尼娜则相反，海温异常偏低，信风增强，气候异常与之相对。' },
      { type: 'warn', label: '易错·厄尔尼诺≠一定某地升温', text: '厄尔尼诺是赤道中东太平洋海温「异常偏高」的事件，但它对全球的影响是「旱涝易位」：南美西岸多雨、澳大利亚和东南亚易干旱；我国可能出现暖冬、南涝北旱。不要误以为厄尔尼诺就是全球都变热，它打乱的是正常环流。' },
      { type: 'tip', label: '提示·对比记忆', text: '用一句话对比：厄尔尼诺——信风弱、东太平洋暖、西旱东涝；拉尼娜——信风强、东太平洋冷、西涝东旱。两者都是海—气相互作用失衡的表现，常成对出现、交替影响。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">厄尔尼诺与拉尼娜对比</text><rect x="60" y="80" width="270" height="200" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="195" y="115" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">厄尔尼诺</text><text x="195" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">信风减弱</text><text x="195" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">东太平洋海温偏高</text><text x="195" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">东南亚旱、南美涝</text><rect x="360" y="80" width="270" height="200" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="115" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">拉尼娜</text><text x="495" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">信风增强</text><text x="495" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">东太平洋海温偏低</text><text x="495" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">东南亚涝、南美旱</text></svg>', caption: '图3　厄尔尼诺信风弱、东太平洋暖；拉尼娜信风强、东太平洋冷，影响相反。' },
      { type: 'heading', text: '四、海—气相互作用的意义' },
      { type: 'paragraph', text: '海—气相互作用维系着全球水热平衡，深刻影响天气、气候乃至生态系统。研究它，对预测旱涝、台风、渔场变动等意义重大，也是理解全球气候变化（如全球变暖背景下海洋吸热）的重要基础。' },
      { type: 'list', items: ['维持全球水热平衡', '影响降水、旱涝和台风', '关系渔场与生态', '是气候预测的重要对象'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>海—气相互作用 = 海洋与大气的热量、水分、气体交换。</strong>海洋是大气热源和水源，通过蒸发和洋流调节气候；平衡打破时发生厄尔尼诺（信风弱、东暖、西旱东涝）和拉尼娜（相反）。这是水的运动章的综合落脚点。' }
    ],
    exercises: [
      { type: 'choice', question: '海洋对大气的最重要调节作用是？', options: ['提供氧气', '吸收全部太阳辐射', '是大气主要的热源和水汽来源', '阻挡紫外线'], answer: '是大气主要的热源和水汽来源', explanation: '海洋面积约占地球表面 71%，比热容大、储热多，通过长波辐射和蒸发向大气提供热量与水汽，是大气最主要的热源和水汽来源，从而深刻调节全球气候。它并非吸收全部太阳辐射，也不是大气氧气的唯一来源。因此选 C。' },
      { type: 'choice', question: '厄尔尼诺现象发生时，赤道中东太平洋海温如何变化？', options: ['异常偏低', '异常偏高', '不变', '先低后高'], answer: '异常偏高', explanation: '厄尔尼诺是指赤道中东太平洋海表温度持续异常偏高的现象，通常伴随东南信风减弱、西太平洋暖水向东回流。它打乱正常海—气环流，导致南美西岸多雨、东南亚和澳大利亚干旱等全球气候异常。因此海温是异常偏高。' },
      { type: 'choice', question: '拉尼娜现象与厄尔尼诺相比，其信风变化是？', options: ['信风增强', '信风减弱', '信风消失', '信风不变'], answer: '信风增强', explanation: '拉尼娜与厄尔尼诺相反，是赤道中东太平洋海温异常偏低的现象，此时东南信风增强，表层暖水被更强地吹向西太平洋，东太平洋上升流增强、海温更低。因此拉尼娜年信风增强，而厄尔尼诺年信风减弱。' },
      { type: 'fill', question: '在长期平均状态下，海—气之间的热量和水分交换大致___，称为水热平衡。', answer: '平衡', explanation: '地球表面吸收的太阳辐射热量与向外释放的热量在长期平均上基本相等，海洋与大气之间的热量、水分交换也大致平衡，这种状态称为水热平衡。它使全球气候保持相对稳定，一旦被打破（如洋流或海温异常）就会出现气候异常。' },
      { type: 'fill', question: '厄尔尼诺年，东南亚和澳大利亚易出现___（旱/涝），南美西岸易出现___（旱/涝）。', answer: '旱；涝', explanation: '厄尔尼诺年东南信风减弱，西太平洋暖水向东回流，西太平洋对流减弱、降水减少，使东南亚和澳大利亚等地易发生干旱；而东太平洋海温升高，对流和降水增强，南美西岸（如秘鲁、厄瓜多尔）易出现暴雨洪涝。即「西旱东涝」。' }
    ]
  });
})();
