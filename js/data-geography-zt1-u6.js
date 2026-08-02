/* 地理 · 高三总复习 · 专题一 自然地理 · 第2章 宇宙中的地球 · 第4节 地球公转与黄赤交角 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u6',
    name: '第4节 地球公转与黄赤交角',
    chapter: '高三地理复习 · 专题一 自然地理 · 第2章 宇宙中的地球',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、地球公转的基本特征' },
      { type: 'paragraph', text: '地球绕太阳的运动叫公转。公转方向也是自西向东，轨道是近似正圆的椭圆，太阳位于其中一个焦点上。公转周期为一个恒星年，约 365 日 6 时 9 分。公转平均速度约 30 千米/秒，由于轨道是椭圆，地球在近日点（1 月初）速度快、远日点（7 月初）速度慢，这叫开普勒第二定律。' },
      { type: 'list', items: ['方向：自西向东', '轨道：近似正圆的椭圆，太阳居焦点', '周期：恒星年约 365 日 6 时 9 分', '速度：近日点快、远日点慢（1 月初近日、7 月初远日）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地球公转轨道（椭圆示意）</text><ellipse cx="340" cy="190" rx="270" ry="120" fill="none" stroke="#2a6fa8" stroke-width="2"/><circle cx="420" cy="190" r="14" fill="#e8a33d" stroke="#b5651d" stroke-width="2"/><text x="420" y="225" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">太阳（焦点）</text><circle cx="110" cy="190" r="8" fill="#2a6fa8"/><text x="110" y="175" font-size="12" fill="#2a6fa8" font-weight="bold">近日点（1月初）</text><circle cx="570" cy="190" r="8" fill="#3d6fb5"/><text x="570" y="175" font-size="12" fill="#3d6fb5" font-weight="bold">远日点（7月初）</text><path d="M110 190 A270 120 0 0 1 570 190" fill="none" stroke="#c1583b" stroke-width="2" stroke-dasharray="6 4"/><text x="340" y="330" font-size="12" fill="#1f3a4d" text-anchor="middle">公转方向自西向东；近日点速度快，远日点速度慢。</text></svg>', caption: '图1　公转轨道是椭圆，太阳位于焦点，地球在近日点快、远日点慢。' },
      { type: 'keypoint', label: '重点·黄赤交角', text: '<strong>黄赤交角是赤道面与黄道面的夹角，目前约 23.5°（23°26′）。</strong>它等于回归线纬度，与极圈纬度互余（90°−23.5°=66.5°）。黄赤交角的存在使太阳直射点在南北回归线之间往返移动，是地球上四季更替和五带形成的根本原因。' },
      { type: 'heading', text: '二、黄赤交角与直射点移动' },
      { type: 'paragraph', text: '由于地轴倾斜且倾斜方向在公转中保持不变，赤道面与公转轨道面（黄道面）之间始终存在约 23.5° 的夹角。这使得地球公转时，太阳直射点（太阳光线垂直照射的点）在南北回归线之间来回移动：北半球夏至直射北回归线，冬至直射南回归线，春秋分直射赤道。' },
      { type: 'list', items: ['地轴倾斜方向始终不变，北端指向北极星', '赤道面与黄道面夹角约 23.5°', '直射点在南北纬 23.5° 之间往返移动', '直射点移动范围 = 黄赤交角大小'] },
      { type: 'table', headers: ['节气', '日期', '直射点位置', '移动趋势'], rows: [['春分', '3月21日前后', '赤道', '向北移'], ['夏至', '6月22日前后', '北回归线 23.5°N', '向南移（到最北）'], ['秋分', '9月23日前后', '赤道', '向南移'], ['冬至', '12月22日前后', '南回归线 23.5°S', '向北移（到最南）']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">太阳直射点的回归运动</text><line x1="80" y1="180" x2="600" y2="180" stroke="#1f3a4d" stroke-width="2"/><text x="340" y="172" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">赤道 0°</text><line x1="80" y1="80" x2="600" y2="80" stroke="#c1583b" stroke-width="1.5" stroke-dasharray="5 4"/><text x="90" y="72" font-size="12" fill="#c1583b">北回归线 23.5°N</text><line x1="80" y1="280" x2="600" y2="280" stroke="#c1583b" stroke-width="1.5" stroke-dasharray="5 4"/><text x="90" y="295" font-size="12" fill="#c1583b">南回归线 23.5°S</text><path d="M120 180 Q200 80 280 180 Q360 280 440 180 Q520 80 600 180" fill="none" stroke="#2a6fa8" stroke-width="3"/><circle cx="120" cy="180" r="6" fill="#2a6fa8"/><text x="120" y="200" font-size="11" fill="#1f3a4d">春分</text><circle cx="280" cy="180" r="6" fill="#2a6fa8"/><text x="280" y="200" font-size="11" fill="#1f3a4d">夏至</text><circle cx="440" cy="180" r="6" fill="#2a6fa8"/><text x="440" y="200" font-size="11" fill="#1f3a4d">冬至</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">直射点在南北回归线之间做回归运动，周期为一个回归年。</text></svg>', caption: '图2　太阳直射点在南北回归线之间往返移动，形成回归年，是季节变化的根源。' },
      { type: 'example', label: '例题·直射点移动', text: '题目：从秋分到冬至，太阳直射点的位置和移动方向是？<br>解析：秋分（9 月 23 日前后）直射赤道，之后继续向南移动，到冬至（12 月 22 日前后）直射南回归线。所以从秋分到冬至，直射点由赤道移向南回归线，位置在南半球且继续向南（向南移动）。掌握四节气直射点位置和移动趋势即可直接作答。' },
      { type: 'heading', text: '三、黄赤交角的地理意义' },
      { type: 'paragraph', text: '黄赤交角的存在，使太阳直射点在南北回归线之间移动，进而导致正午太阳高度、昼夜长短随季节和纬度变化，最终形成四季更替。同时，不同纬度地带获得的太阳热量不同，形成五带。可以说，没有黄赤交角，地球就不会有四季和五带之分。' },
      { type: 'warn', label: '易错·黄赤交角与回归线极圈', text: '① 黄赤交角 = 回归线纬度 ≈ 23.5°，不是 66.5°；② 极圈纬度 = 90° − 黄赤交角 ≈ 66.5°，二者互余；③ 若黄赤交角变大，热带和寒带范围扩大、温带缩小；若变小则相反。常考题会问「黄赤交角变化对五带范围的影响」，按互余关系推导即可。' },
      { type: 'tip', label: '提示·黄赤交角变化的连锁反应', text: '画一条「回归线=黄赤交角、极圈=90°−黄赤交角」的等式，遇到黄赤交角变化时：交角变大 → 回归线外移、极圈内缩 → 热带寒带变大、温带变小；交角变小则相反。用这个等式推导，不会在选择题里算错范围。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">五带与黄赤交角的关系</text><rect x="60" y="110" width="100" height="100" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="110" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">北寒带</text><rect x="160" y="110" width="120" height="100" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="220" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">北温带</text><rect x="280" y="110" width="120" height="100" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">热带</text><rect x="400" y="110" width="120" height="100" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="460" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">南温带</text><rect x="520" y="110" width="100" height="100" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="570" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">南寒带</text><text x="340" y="270" font-size="12" fill="#1f3a4d" text-anchor="middle">回归线（23.5°）之间为热带，极圈（66.5°）以内为寒带，中间为温带。</text></svg>', caption: '图3　五带以回归线和极圈为界，回归线、极圈纬度均由黄赤交角决定。' },
      { type: 'heading', text: '四、公转与自转的共同作用' },
      { type: 'paragraph', text: '地球既自转又公转，且地轴倾斜方向不变，二者叠加才产生丰富的地理现象：自转造成昼夜交替和地方时，公转（配合黄赤交角）造成直射点移动，两者共同导致正午太阳高度和昼夜长短的时空变化，进而形成四季和五带。理解这些现象，关键是抓住「地轴倾斜 + 公转」这一组合。' },
      { type: 'list', items: ['自转：昼夜交替、地方时、地转偏向力', '公转+黄赤交角：直射点移动、正午太阳高度变化', '共同作用：昼夜长短变化、四季更替', '根本原因：地轴倾斜使黄赤交角恒定存在'] },
      { type: 'example', label: '例题·近日点远日点', text: '题目：地球公转到近日点时，北半球的季节和大致时间是？<br>解析：地球在 1 月初到达近日点，此时虽然离太阳最近，但北半球正处于冬季。这是因为季节变化由直射点位置决定，而非日地距离。1 月初直射点在南半球，北半球获得的太阳热量少，所以是冬季。可见「近日点≠北半球夏季」，距离不是主因，直射点才是。' }
    ],
    exercises: [
      { type: 'choice', question: '黄赤交角的大小约为？', options: ['0°', '23.5°', '45°', '66.5°'], answer: '23.5°', explanation: '黄赤交角是赤道面与黄道面（公转轨道面）的夹角，目前约为 23.5°（23°26′），它等于回归线的纬度。极圈纬度（66.5°）与黄赤交角互余。黄赤交角使直射点在南北回归线之间移动，是四季和五带形成的根本原因。' },
      { type: 'choice', question: '地球公转到近日点的时间大约是？', options: ['1 月初', '7 月初', '3 月', '9 月'], answer: '1 月初', explanation: '地球公转轨道是椭圆，太阳位于焦点，1 月初地球到达近日点、7 月初到达远日点。近日点附近公转速度较快。需要注意的是，季节由太阳直射点位置决定，1 月初直射南半球，北半球是冬季，近日点不等于北半球夏季。' },
      { type: 'choice', question: '若黄赤交角变大，则？', options: ['热带范围缩小', '温带范围扩大', '热带和寒带范围扩大、温带缩小', '五带范围不变'], answer: '热带和寒带范围扩大、温带缩小', explanation: '回归线纬度等于黄赤交角，极圈纬度等于 90°减黄赤交角。黄赤交角变大，回归线外移、极圈内缩，热带（两回归线间）和寒带（极圈内）范围扩大，温带（回归线与极圈间）范围缩小；变小时则相反。' },
      { type: 'fill', question: '太阳直射点在南北回归线之间的往返运动周期叫___年，长度约为___天。', answer: '回归；365', explanation: '太阳直射点从一次直射北回归线再到下一次直射北回归线（或往返一次）的周期叫回归年，长度约 365 日 5 时 48 分，即约 365 天。它比恒星年略短，是我们日常使用的「一年」基础，也是四季循环的周期。' },
      { type: 'fill', question: '夏至日太阳直射___，冬至日太阳直射___。', answer: '北回归线（23.5°N）；南回归线（23.5°S）', explanation: '由于黄赤交角约 23.5°，直射点最北到北回归线（23.5°N），出现在北半球夏至（6 月 22 日前后）；最南到南回归线（23.5°S），出现在冬至（12 月 22 日前后）。春秋分直射赤道。直射点纬度随节气在 23.5°N 与 23.5°S 之间移动。' }
    ]
  });
})();
