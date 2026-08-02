/* 生物学 · 高三复习 · 稳态与调节 · 第2章 · 课时：第2节 神经调节的基本方式 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u4',
    name: '第2节 神经调节的基本方式',
    chapter: '稳态与调节 · 第2章 神经调节',
    difficulty: '基础',
    content: [
      { type:'heading', text:'一、反射与反射弧' },
      { type:'paragraph', text:'神经调节的基本方式是反射。反射是指在中枢神经系统的参与下，机体对体内外刺激所产生的规律性应答。例如手碰到高温物体会迅速缩回，这种自动反应就是反射。' },
      { type:'keypoint', text:'反射是在中枢神经系统参与下，机体对内外刺激产生的规律性应答，是神经调节的基本方式。' },
      { type:'list', items:['结构基础：必须有结构完整的反射弧','触发条件：必须有适宜强度和种类的刺激'] },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">反射弧的结构</text>
  <rect x="30" y="150" width="100" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="80" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">感受器</text>
  <rect x="160" y="150" width="100" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="210" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">传入神经</text>
  <rect x="290" y="150" width="100" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="340" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">神经中枢</text>
  <rect x="420" y="150" width="100" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="470" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">传出神经</text>
  <rect x="550" y="150" width="100" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="600" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">效应器</text>
  <line x1="130" y1="180" x2="160" y2="180" stroke="#3f7d1e" stroke-width="2"/>
  <polygon points="160,180 145,172 145,188" fill="#3f7d1e"/>
  <line x1="260" y1="180" x2="290" y2="180" stroke="#3f7d1e" stroke-width="2"/>
  <polygon points="290,180 275,172 275,188" fill="#3f7d1e"/>
  <line x1="390" y1="180" x2="420" y2="180" stroke="#3f7d1e" stroke-width="2"/>
  <polygon points="420,180 405,172 405,188" fill="#3f7d1e"/>
  <line x1="520" y1="180" x2="550" y2="180" stroke="#3f7d1e" stroke-width="2"/>
  <polygon points="550,180 535,172 535,188" fill="#3f7d1e"/>
  <text x="340" y="260" text-anchor="middle" font-size="13" fill="#5aa832">兴奋沿反射弧单向传导</text>
</svg>`, caption:'反射弧由感受器、传入神经、神经中枢、传出神经和效应器五部分顺序组成。' },
      { type:'paragraph', text:'反射的结构基础是反射弧，它由五部分按顺序组成：感受器 → 传入神经 → 神经中枢 → 传出神经 → 效应器。兴奋只能沿这个方向单向传导，不能反向。' },
      { type:'list', items:['感受器：接受刺激并产生兴奋','传入神经：把兴奋传到神经中枢','神经中枢：分析和综合兴奋','传出神经：把指令传到效应器','效应器：作出应答（肌肉或腺体）'] },
      { type:'warn', text:'易错辨析：反射要发生，必须同时满足两个条件——反射弧结构完整、并接受适宜刺激。只要反射弧中任一环节受损（如传入神经断裂），反射就不能完成，即便有刺激也无反应。' },
      { type:'table', headers:['比较','非条件反射','条件反射'], rows:[
        ['形成时间','生来就有','后天学习获得'],
        ['神经中枢','低级中枢（脊髓、脑干）','大脑皮层参与'],
        ['举例','膝跳反射、缩手反射','望梅止渴、谈虎色变']
      ] },
      { type:'keypoint', text:'非条件反射生来就有、由低级中枢完成；条件反射后天形成、必须有大脑皮层参与，是学习和记忆的基础。' },
      { type:'paragraph', text:'二者联系密切：条件反射是在非条件反射的基础上建立起来的，使机体具有更强的适应性和预见性。没有非条件反射，条件反射就失去了根基，就像没有地基的楼房。' },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">条件反射的建立</text>
  <rect x="80" y="120" width="180" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="170" y="165" text-anchor="middle" font-size="14" fill="#2e3a22">食物→唾液</text>
  <rect x="420" y="120" width="180" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="510" y="165" text-anchor="middle" font-size="14" fill="#2e3a22">铃声+食物→唾液</text>
  <polygon points="260,165 420,155 420,175" fill="#3f7d1e"/>
  <text x="340" y="250" text-anchor="middle" font-size="13" fill="#5aa832">反复强化后仅铃声也引起唾液分泌</text>
</svg>`, caption:'条件反射是在非条件反射基础上，经后天学习和大脑皮层参与建立的。' },
      { type:'example', text:'例题：膝跳反射的反射弧中，若传出神经受损，则（ ）。A 有感觉也能完成反射 B 无感觉也不能完成反射 C 有感觉但不能完成反射 D 无感觉但能完成反射。思路：感受器到神经中枢的传入通路完好，故有感觉；但传出神经受损，指令无法到达效应器，故不能完成反射。选C。' },
      { type:'tip', text:'高频考点：反射弧的结构与功能顺序、反射发生的两个条件、非条件反射与条件反射的区分。常考实验分析题，判断反射能否发生要先看反射弧是否完整，再看刺激是否适宜。' },
      { type:'paragraph', text:'复习本节要记住：反射靠反射弧完成，反射弧五部分缺一则反射不能发生；条件反射是大脑皮层参与的高级神经活动，是动物学习行为的基础。' },
      { type:'heading', text:'二、本节复习框架' },
      { type:'list', items:['反射=规律性应答','反射弧=五部分单向传导','反射条件=完整反射弧+适宜刺激','非条件vs条件（大脑皮层参与）'] },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">反射发生的条件</text>
  <rect x="90" y="120" width="200" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="190" y="155" text-anchor="middle" font-size="14" fill="#2e3a22">完整反射弧</text>
  <text x="190" y="185" text-anchor="middle" font-size="13" fill="#5aa832">五部分齐全</text>
  <rect x="390" y="120" width="200" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="490" y="155" text-anchor="middle" font-size="14" fill="#2e3a22">适宜刺激</text>
  <text x="490" y="185" text-anchor="middle" font-size="13" fill="#5aa832">强度够、种类对</text>
  <polygon points="290,165 390,155 390,175" fill="#3f7d1e"/>
  <text x="340" y="260" text-anchor="middle" font-size="14" fill="#2e3a22">二者同时满足才能发生反射</text>
</svg>`, caption:'反射发生须同时满足两个条件：结构完整的反射弧和适宜的强度刺激。' }
    ],
    exercises: [
      { type:'choice', question:'反射是指（ ）。', options:['在中枢神经系统参与下对刺激的规律性应答','任何刺激引起的肌肉收缩','只有大脑皮层参与的反应','淋巴细胞产生的免疫应答'], answer:'在中枢神经系统参与下对刺激的规律性应答', explanation:'反射的定义要点是：在中枢神经系统参与下、对内外刺激作出的规律性应答。B项任何刺激都能引起不对，需要适宜刺激；C项只说大脑皮层参与，非条件反射无皮层也行；D项是免疫应答，不是反射。故选A。' },
      { type:'choice', question:'反射弧的组成和兴奋传导顺序是（ ）。', options:['感受器→传入神经→神经中枢→传出神经→效应器','效应器→传出神经→神经中枢→传入神经→感受器','感受器→传出神经→神经中枢→传入神经→效应器','传入神经→感受器→神经中枢→效应器→传出神经'], answer:'感受器→传入神经→神经中枢→传出神经→效应器', explanation:'反射弧由感受器、传入神经、神经中枢、传出神经、效应器依次组成，兴奋只能单向传导。B、C、D顺序都错乱，只有A的顺序符合结构与功能方向，故选A。' },
      { type:'choice', question:'下列关于条件反射的叙述，正确的是（ ）。', options:['生来就有，不需学习','由低级中枢（脊髓）独立完成','后天形成，必须有大脑皮层参与','与学习记忆无关'], answer:'后天形成，必须有大脑皮层参与', explanation:'条件反射是后天学习形成的，必须有大脑皮层参与，是学习和记忆的基础；非条件反射生来就有、由低级中枢完成。A、B、D都把两者混淆，正确选项是C。' },
      { type:'fill', question:'反射发生的两个必要条件是完整的反射弧和______。', answer:'适宜刺激', explanation:'反射发生必须同时满足两个条件：一是结构完整的反射弧，二是适宜强度和种类的刺激。任一项不满足，反射都不能完成，判断反射能否发生先看反射弧是否完整。' },
      { type:'fill', question:'非条件反射的神经中枢一般是低级中枢，而条件反射必须有______参与。', answer:'大脑皮层', explanation:'非条件反射由低级中枢（如脊髓、脑干）完成，生来就有；条件反射是后天建立的，必须有大脑皮层的参与，这使动物能对环境变化作出更灵活的反应。' }
    ]
  });
})();
