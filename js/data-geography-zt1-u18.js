/* 地理 · 高三总复习 · 专题一 自然地理 · 第6章 自然环境的整体性与差异性 · 第3节 垂直地域分异规律 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u18',
    name: '第3节 垂直地域分异规律',
    chapter: '高三地理复习 · 专题一 自然地理 · 第6章 自然环境的整体性与差异性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、垂直地带性的成因' },
      { type: 'paragraph', text: '垂直地域分异指随海拔高度升高，水热条件发生变化，自然带也发生垂直更替的现象。山地海拔越高、相对高度越大，垂直带谱越丰富。其根本原因类似纬度地带性：海拔升高气温降低（每升 1000 米约降 6.5℃），相当于把山地「搬到高纬」，所以垂直带谱基带与该山所在纬度地带性一致。' },
      { type: 'list', items: ['成因：海拔升高导致水热条件变化', '规律类似纬度地带性（高差≈纬差）', '垂直带谱基带 = 山地所在水平带', '海拔越高、相对高差越大，带谱越完整'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">山地垂直自然带谱</text><polygon points="250,330 430,330 390,70 290,70" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><rect x="290" y="250" width="100" height="80" fill="#cfe4f5"/><text x="340" y="295" font-size="12" fill="#1f3a4d" text-anchor="middle">基带（常绿林）</text><rect x="300" y="180" width="80" height="70" fill="#e3f0fa"/><text x="340" y="220" font-size="11" fill="#1f3a4d" text-anchor="middle">落叶林</text><rect x="310" y="120" width="60" height="60" fill="#cfe4f5"/><text x="340" y="155" font-size="11" fill="#1f3a4d" text-anchor="middle">针叶林</text><rect x="320" y="70" width="40" height="50" fill="#e3f0fa"/><text x="340" y="100" font-size="11" fill="#1f3a4d" text-anchor="middle">冰雪</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">从山麓到山顶，自然带随海拔更替，类似从低纬到高纬。</text></svg>', caption: '图1　山地从山麓到山顶自然带垂直更替，基带与所在水平地带一致。' },
      { type: 'keypoint', label: '重点·垂直带谱判读', text: '<strong>① 基带（山脚自然带）决定于山地所在纬度水平带；② 同一自然带在阳坡分布海拔高于阴坡（北半球南坡为阳坡）；③ 雪线高度受降水与温度影响，迎风坡雪线低；④ 山体越高、带谱越完整，甚至可能从赤道带到极地带。</strong>判读先定基带，再看坡向。' },
      { type: 'heading', text: '二、雪线与林线' },
      { type: 'paragraph', text: '雪线是终年积雪下限的海拔，受气温和降水共同影响：气温高、雪线高；降水多（迎风坡）雪线低。林线是森林分布上限，受热量和水分限制，一般阳坡林线高于阴坡。在干旱区，水分常是林线主控因素；在湿润区，热量更关键。雪线和林线是垂直分异的重要界线。' },
      { type: 'list', items: ['雪线：气温高则高，迎风坡降水多则低', '阳坡（北半球南坡）雪线一般高于阴坡', '林线：森林分布上限，受水热共同限制', '干旱区林线受水分控制，湿润区受热控制'] },
      { type: 'table', headers: ['界线', '含义', '影响因素', '规律'], rows: [['雪线', '终年积雪下限', '气温、降水', '迎风坡低、阳坡高'], ['林线', '森林分布上限', '热量、水分', '阳坡通常较高'], ['基带', '山麓自然带', '纬度地带', '与水平带一致']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">迎风坡与背风坡雪线差异</text><polygon points="120,300 340,90 340,300" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><polygon points="340,90 560,300 340,300" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="220" y="220" font-size="13" fill="#1f3a4d" font-weight="bold">迎风坡</text><text x="460" y="220" font-size="13" fill="#1f3a4d" font-weight="bold">背风坡</text><line x1="200" y1="180" x2="320" y2="200" stroke="#c1583b" stroke-width="2.5"/><text x="160" y="175" font-size="12" fill="#c1583b" font-weight="bold">雪线较低（多降雪）</text><line x1="480" y1="200" x2="560" y2="210" stroke="#3d6fb5" stroke-width="2.5"/><text x="450" y="245" font-size="12" fill="#3d6fb5" font-weight="bold">雪线较高</text><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">迎风坡降水多、雪线低；背风坡少雨、雪线高。</text></svg>', caption: '图2　山地迎风坡降雪多、雪线较低，背风坡雪线较高。' },
      { type: 'example', label: '例题·基带判断', text: '题目：一座位于亚热带常绿阔叶林带地区的山地，其基带是什么自然带？<br>解析：垂直带谱的基带（山脚自然带）与该山地所处的水平地带性自然带一致。若山体位于亚热带常绿阔叶林带地区，则其基带就是亚热带常绿阔叶林带，向上随海拔升高依次过渡到落叶林、针叶林、灌丛草甸等。因此基带由山体所在纬度水平带决定，判读垂直带先定基带。' },
      { type: 'heading', text: '三、垂直分异与水平分异的关系' },
      { type: 'paragraph', text: '垂直地带性与纬度地带性本质相似，都是热量（叠加水分）随空间递减造成的。从山麓到山顶的更替，类似从赤道到两极的更替，故有「一山有四季，十里不同天」之说。但垂直带谱只是在小范围内叠加，谱宽远不及水平地带性；且同一自然带在阳坡分布海拔更高。' },
      { type: 'warn', label: '易错·坡向判断', text: '① 北半球山体南坡为阳坡、北坡为阴坡，南坡热量好、同一自然带海拔更高；② 迎风坡（取决于风向）降水多，雪线反而更低；③ 不能把「阳坡」与「迎风坡」混为一谈——阳坡看热量、迎风坡看降水，二者可能不同坡；④ 雪线是降水与温度共同作用，非单一因素。这是综合题高频易错点。' },
      { type: 'tip', label: '提示·垂直带谱速判', text: '判垂直带谱三步走：第一看基带（定山体所在水平带），第二看山顶（能否到冰雪决定带谱上限），第三看坡向（阳坡带高、迎风坡雪线低）。记住「基带定区、高差定谱、坡向定界」，再复杂的山体图也能拆解。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">垂直分异 ≈ 水平分异（低纬→高纬）</text><rect x="60" y="90" width="180" height="170" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="150" y="150" font-size="13" fill="#1f3a4d" font-weight="bold">山体</text><text x="150" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">山麓→山顶</text><text x="150" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">（低→高纬）</text><rect x="440" y="90" width="180" height="170" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="530" y="150" font-size="13" fill="#1f3a4d" font-weight="bold">地球</text><text x="530" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">赤道→两极</text><text x="530" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">（低纬→高纬）</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">海拔升高≈纬度升高，垂直更替与纬度地带性有可比性。</text></svg>', caption: '图3　山地垂直带从山麓到山顶的更替，与地球从赤道到两极的纬度地带性相似。' },
      { type: 'heading', text: '四、垂直分异的意义' },
      { type: 'paragraph', text: '垂直分异使山地成为「浓缩的自然博物馆」，生物多样性丰富，是重要生态屏障和水源涵养地。人类利用上：低山发展林果、高山放牧、山顶保护冰雪水源；高山药材、物种资源珍贵。保护山地垂直生态系统对维持区域水平衡和生物多样性意义重大。' },
      { type: 'list', items: ['生物多样性热点，生态屏障', '水源涵养：冰雪融水补给河流', '立体农业：低山林果、高山牧业', '需保护脆弱的高山生态系统'] },
      { type: 'example', label: '例题·山地利用', text: '题目：山地垂直分异对农业生产布局的启示是？<br>解析：随海拔升高热量水分变化，宜发展立体农业：山麓热量足种林果粮食，山腰温凉宜茶树、药材，高山草甸可放牧，山顶冰雪是重要水源。这种「因地制宜、分层利用」正是垂直分异规律的实践价值，也提醒人们在高处要保护生态、防止水土流失。' }
    ],
    exercises: [
      { type: 'choice', question: '山地垂直自然带的基带取决于？', options: ['山顶高度', '山体所在纬度水平带', '坡向', '降水量'], answer: '山体所在纬度水平带', explanation: '垂直带谱的基带（山脚自然带）与该山地所处的水平地带性自然带一致，由山体所在纬度和经度位置决定。例如位于亚热带常绿阔叶林带的山地，基带即为亚热带常绿阔叶林带。山顶高度决定带谱是否完整，但不是基带的决定因素。' },
      { type: 'choice', question: '北半球山地同一自然带在阳坡分布海拔一般？', options: ['更低', '更高', '相同', '无规律'], answer: '更高', explanation: '北半球山体南坡为阳坡，接受的太阳辐射多、热量条件好，同一自然带（如针叶林上限）在阳坡可达到更高海拔；阴坡热量差，同带分布海拔较低。因此「阳坡带高、阴坡带低」是垂直分异的基本规律，但雪线还受降水影响。' },
      { type: 'choice', question: '影响雪线高度的主要因素是？', options: ['仅气温', '气温和降水', '仅坡向', '仅海拔'], answer: '气温和降水', explanation: '雪线是终年积雪的下限，受气温和降水共同影响：气温高、雪线升高；降水多（迎风坡）雪线降低。因此迎风坡雪线往往低于背风坡，低纬雪线高于高纬。判雪线不能只看单一因素，要综合温度与降水。' },
      { type: 'fill', question: '山地垂直分异与___地带性本质相似，都是因___随空间变化引起自然带更替。', answer: '纬度（由赤道到两极）；热量（和水）', explanation: '垂直地带性与纬度地带性（由赤道到两极）本质相似：海拔升高气温降低、水热组合变化，相当于把山地「移到高纬」，所以垂直更替与从赤道到两极的纬度更替可比。二者都由热量（叠加水分）沿空间递减驱动，是同一原理在不同尺度的表现。' },
      { type: 'fill', question: '山体海拔越___、相对高差越___，垂直带谱越丰富完整。', answer: '高；大', explanation: '山体海拔越高、相对高差越大，从山麓到山顶的水热梯度变化越大，能容纳的自然带类型越多，垂直带谱越丰富完整。低矮丘陵相对高差小，带谱单一；高大山脉（如喜马拉雅、横断山）带谱可横跨多个水平地带，甚至从赤道带到极地带。' }
    ]
  });
})();
