/* ============================================================
 * 高一物理 · 必修 第二册 · 第七章 万有引力与宇宙航行
 * 课时9：行星的运动
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u9',
    name: '行星的运动',
    chapter: '必修第二册 · 第七章 万有引力与宇宙航行',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、古代人对天体运动的两套说法' },
      { type: 'paragraph', text: '在望远镜发明之前，人们只能靠肉眼看天。大家发现太阳每天东升西落，月亮和星星也在天上移动，于是很自然地猜想：是不是所有天体都绕着地球转？这种想法慢慢形成了地心说。' },
      { type: 'keypoint', label: '重点·地心说与日心说', text: '<strong>地心说认为地球静止在宇宙中心，太阳、月亮和行星都绕地球转动；日心说认为太阳是中心，地球和其他行星绕太阳转动。</strong>后来观测事实证明，日心说更符合实际。' },
      { type: 'paragraph', text: '波兰天文学家哥白尼在十六世纪系统提出了日心说。他指出，我们看到的太阳东升西落，其实是地球自己自转造成的；而行星看起来有时快有时慢、甚至偶尔倒退，是因为地球和行星都在绕太阳公转，相对位置不断变化。' },
      { type: 'list', items: ['地心说：地球在中心静止，日月星辰绕地球转', '日心说：太阳在中心，地球等行星绕太阳转', '日心说能更好地解释行星的视运动，已被观测证实'] },
      { type: 'heading', text: '二、开普勒行星运动三定律' },
      { type: 'paragraph', text: '丹麦天文学家第谷观测天体几十年，留下了非常精确的数据。他去世后，开普勒接手这些数据，经过反复计算，发现行星的运动轨道并不是完美的圆，而是椭圆。由此他总结出了三条定律。' },
      { type: 'keypoint', label: '重点·开普勒第一定律', text: '<strong>所有行星绕太阳运动的轨道都是椭圆，太阳处在椭圆的一个焦点上。</strong>这说明行星离太阳的距离一直在变化，有时近、有时远。' },
      { type: 'example', label: '例题·判断轨道形状', text: '关于行星运动轨道，下列说法正确的是？<br>A. 行星绕太阳做完美的圆周运动<br>B. 行星绕太阳做椭圆运动，太阳在椭圆中心<br>C. 行星绕太阳做椭圆运动，太阳在椭圆的一个焦点上<br><br><strong>解析</strong>：根据开普勒第一定律，行星轨道是椭圆，太阳位于椭圆的一个焦点，而不是中心。圆周只是椭圆在特殊情形下的近似。所以 C 正确，A、B 错误。' },
      { type: 'warn', label: '易错·焦点不是中心', text: '<strong>椭圆有两个焦点，太阳只在一个焦点上，不在椭圆正中心。</strong>很多同学误以为太阳在椭圆中心，于是画错轨道。记住：焦点和中心不是一回事，中心到两焦点有段距离。' },
      { type: 'table', headers: ['定律', '内容要点', '物理意义'], rows: [['第一定律', '轨道是椭圆，太阳在焦点', '行星与太阳距离不断变化'], ['第二定律', '太阳与行星连线相等时间扫过相等面积', '近日点快、远日点慢'], ['第三定律', '半长轴三次方除以周期平方是常数', 'R³/T² = k，k 与中心天体有关']] },
      { type: 'heading', text: '三、开普勒第二定律（面积定律）' },
      { type: 'paragraph', text: '开普勒第二定律说：太阳和行星的连线，在相等的时间里扫过的面积相等。形象地说，行星就像用一把面积扫帚，无论走到轨道哪里，单位时间扫过的面积都一样大。' },
      { type: 'tip', label: '提示·快慢变化', text: '<strong>行星靠近太阳时走得快，远离太阳时走得慢。</strong>因为近处要在同样时间里扫过同样大的面积，就必须在轨道上移动更长的弧长，所以速度更大。' },
      { type: 'list', items: ['相等时间内，太阳与行星连线扫过面积相等', '行星在近日点速度最大，在远日点速度最小', '这条定律反映了行星受太阳引力强弱的变化'] },
      { type: 'heading', text: '四、开普勒第三定律（周期定律）' },
      { type: 'paragraph', text: '开普勒第三定律把所有行星联系了起来：每颗行星轨道半长轴的三次方，除以它公转周期的平方，得到的数值对太阳系所有行星都一样，记作 k。也就是说 R³/T² = k。' },
      { type: 'keypoint', label: '重点·常数 k', text: '<strong>比值 R³/T² = k 对所有绕同一中心天体运动的行星都相同，k 的大小只由中心天体决定。</strong>绕太阳的行星 k 相同；若换一个中心天体，比如绕地球的卫星，k 就变成另一个值。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">两种宇宙观：地球中心(左) 与 太阳中心(右)</text><rect x="40" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="84" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">地心说</text><circle cx="180" cy="158" r="14" fill="#4fb3a5"/><text x="180" y="186" font-size="12" fill="#234b45" text-anchor="middle">地球(中心)</text><circle cx="180" cy="120" r="38" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="258" cy="158" r="6" fill="#234b45"/><text x="270" y="150" font-size="11" fill="#234b45">行星</text><rect x="360" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="84" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">日心说</text><circle cx="500" cy="158" r="14" fill="#4fb3a5"/><text x="500" y="186" font-size="12" fill="#234b45" text-anchor="middle">太阳(中心)</text><circle cx="500" cy="158" r="62" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="500" cy="96" r="6" fill="#234b45"/><text x="500" y="88" font-size="11" fill="#234b45" text-anchor="middle">行星</text></svg>', caption: '图1　左为地心说（地球在中心），右为日心说（太阳在中心），后者已被观测证实。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">开普勒第一定律：轨道是椭圆，太阳在焦点</text><rect x="40" y="58" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><ellipse cx="340" cy="158" rx="250" ry="80" fill="none" stroke="#234b45" stroke-width="3"/><circle cx="250" cy="158" r="12" fill="#4fb3a5"/><text x="250" y="184" font-size="12" fill="#234b45" text-anchor="middle">太阳(焦点)</text><circle cx="590" cy="158" r="6" fill="none" stroke="#2e9e8f" stroke-width="2"/><text x="590" y="142" font-size="11" fill="#234b45" text-anchor="middle">另一焦点</text><circle cx="500" cy="120" r="8" fill="#234b45"/><text x="500" y="108" font-size="11" fill="#234b45" text-anchor="middle">行星</text></svg>', caption: '图2　行星沿椭圆轨道运动，太阳位于椭圆的一个焦点上，而非中心。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">开普勒第三定律：R³/T² 对所有行星相同</text><rect x="40" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">近行星</text><circle cx="180" cy="158" r="14" fill="#4fb3a5"/><circle cx="180" cy="158" r="46" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="180" y="226" font-size="12" fill="#234b45" text-anchor="middle">R小 T小</text><rect x="360" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">远行星</text><circle cx="500" cy="158" r="14" fill="#4fb3a5"/><circle cx="500" cy="158" r="86" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="500" y="226" font-size="12" fill="#234b45" text-anchor="middle">R大 T大</text></svg>', caption: '图3　离太阳越远的行星，轨道半长轴 R 越大、周期 T 越长，但 R³/T² 保持不变。' }
    ],
    exercises: [
      { type: 'choice', question: '关于地心说和日心说，下列说法正确的是？', options: ['地球一定静止在宇宙中心', '日心说认为太阳是中心，地球等行星绕太阳转动', '地心说已经被观测完全证实', '行星看起来倒退说明地球真的不动'], answer: '日心说认为太阳是中心，地球等行星绕太阳转动', explanation: '地心说认为地球在宇宙中心，但这一说法后来被观测否定；日心说由哥白尼提出，认为太阳是中心，地球和其他行星绕太阳公转，能更好地解释行星的视运动，已被观测证实。行星看似倒退是地球与行星相对运动造成的，并不能说明地球静止。' },
      { type: 'choice', question: '根据开普勒第一定律，下列说法正确的是？', options: ['行星绕太阳做完美的圆周运动', '太阳位于椭圆轨道的正中心', '行星轨道是椭圆，太阳在椭圆的一个焦点上', '所有行星到太阳的距离始终不变'], answer: '行星轨道是椭圆，太阳在椭圆的一个焦点上', explanation: '开普勒第一定律明确行星轨道是椭圆，太阳位于椭圆的一个焦点上，而不是正中心，也不是圆轨道。由于焦点不在中心，行星到太阳的距离随位置变化，近时近、远时远，并不始终不变。' },
      { type: 'choice', question: '开普勒第三定律 R³/T² = k 中的常数 k，取决于什么？', options: ['行星本身的质量', '行星的公转周期', '中心天体（如太阳）', '行星到太阳的距离'], answer: '中心天体（如太阳）', explanation: '开普勒第三定律中的常数 k 只由中心天体决定。绕太阳运动的所有行星 k 值相同；若换成绕地球运动的卫星，中心天体变为地球，k 就变成另一个数值。因此 k 与行星自身的质量、周期或距离无关。' },
      { type: 'fill', question: '开普勒第一定律指出：所有行星绕太阳运动的轨道都是___，太阳处在它的一个焦点上。', answer: '椭圆', explanation: '开普勒第一定律又称椭圆轨道定律，它指出每个行星都沿椭圆轨道绕太阳运动，太阳位于椭圆的一个焦点上。这打破了古代认为天体必做圆周运动的观念，是行星运动理论的重要基础。' },
      { type: 'fill', question: '开普勒第三定律的表达式为 R 的三次方除以 T 的二次方等于常数，写作 ___ = k。', answer: 'R³/T²', explanation: '开普勒第三定律也叫周期定律，表述为行星轨道半长轴 R 的三次方与公转周期 T 的平方之比是一个常数，记作 R³/T² = k。这个比值对绕同一中心天体的所有行星都相同，因此可用来比较不同行星的轨道大小与周期。' }
    ]
  });
})();
