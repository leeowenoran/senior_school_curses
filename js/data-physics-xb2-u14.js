/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第四章 电磁振荡与电磁波
 * 课时14：电磁场与电磁波
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u14',
    name: '电磁场与电磁波',
    chapter: '选择性必修第二册 · 第四章 电磁振荡与电磁波',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、从静电场到变化的场' },
      { type: 'paragraph', text: '我们早就知道，静止的电荷周围存在静电场，通电导线周围存在磁场。可是如果电场不是静止的、而是一直在变化，周围会不会凭空冒出磁场来？英国物理学家麦克斯韦大胆猜想并建立起一套理论，回答了这个问题，也成为后来电磁波发现的基石。' },
      { type: 'keypoint', label: '重点·变化电场生磁场', text: '<strong>麦克斯韦理论之一：变化的电场会在它周围的空间里产生磁场。</strong>电场可以不依赖电荷、靠自身的变化"召唤"出磁场来。' },
      { type: 'list', items: ['变化的电场会在它周围的空间里产生磁场', '变化的磁场会在它周围的空间里产生电场', '两者交替出现，就形成了不断向外扩展的电磁场'] },
      { type: 'paragraph', text: '这里要特别留意"变化"两个字。均匀变化的电场产生稳定的磁场，不均匀变化（比如来回振荡）的电场产生同样来回变化的磁场。总之，关键不在电场本身有多大，而在它是不是在变。磁场也同理。' },
      { type: 'keypoint', label: '重点·变化磁场生电场', text: '<strong>麦克斯韦理论之二：变化的磁场会在它周围的空间里产生电场。</strong>这正是电磁感应现象背后的道理：磁场一变，附近导体里就被"逼"出了感生电场和电流。' },
      { type: 'warn', label: '易错', text: '不是只要有电场就有磁场。<strong>静止的电荷只产生静电场，不会产生磁场；只有"变化"的电场才产生磁场。磁场同理，静止的磁场不产生电场，变化的磁场才产生电场。</strong>很多同学漏掉"变化"二字，以为电场和磁场总是绑在一起，这是错的。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">变化的电场（上）在其周围激发出磁场（环形）</text><line x1="340" y1="70" x2="340" y2="150" stroke="#2e9e8f" stroke-width="3"/><polygon points="340,160 334,142 346,142" fill="#2e9e8f"/><text x="356" y="120" font-size="13" fill="#234b45">变化电场 E</text><ellipse cx="340" cy="200" rx="120" ry="40" fill="none" stroke="#4fb3a5" stroke-width="3"/><ellipse cx="340" cy="200" rx="60" ry="20" fill="none" stroke="#4fb3a5" stroke-width="3"/><polygon points="460,200 442,194 442,206" fill="#4fb3a5"/><text x="340" y="262" font-size="13" fill="#234b45" text-anchor="middle">电场在变化，周围就"缠"出一圈圈磁场</text></svg>', caption: '图1　变化的电场在其周围激发出环形的磁场。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">变化的磁场（环内）在其周围激发出电场（环形）</text><circle cx="340" cy="150" r="40" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="155" font-size="13" fill="#234b45" text-anchor="middle">变化磁场</text><circle cx="340" cy="150" r="100" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="340" cy="150" r="140" fill="none" stroke="#4fb3a5" stroke-width="3" stroke-dasharray="6,5"/><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">磁场在变化，周围就"缠"出一圈圈电场</text></svg>', caption: '图2　变化的磁场在其周围激发出环形的电场。' },
      { type: 'heading', text: '二、什么是电磁场' },
      { type: 'paragraph', text: '既然变化的电场能产生磁场，这个新的磁场又在变化、又去产生电场……如此一环扣一环，电场和磁场就再也分不开了。它们互相依存、互相激发，形成一个统一的整体，这就是电磁场。电磁场是一种真实存在的物质，虽然看不见摸不着，却可以携带能量向远方跑。' },
      { type: 'table', headers: ['对比项', '静电场', '电磁场'], rows: [['来源', '由静止电荷产生', '由变化的电场和变化的磁场相互激发产生'], ['是否依赖电荷', '依赖电荷存在', '可以脱离电荷单独存在（变化的场自己维持）'], ['能否向外传播', '一般不向外传播', '能以电磁波形式由近及远传播']] },
      { type: 'tip', label: '提示', text: '<strong>电磁场是物质的一种形态，不依赖电荷也能独立存在。</strong>它和桌子、空气一样具有能量，只是看不见。正因为电磁场能脱开电荷自己存在并传播，人类才能用无线电把信号送到千里之外。' },
      { type: 'heading', text: '三、电磁波' },
      { type: 'paragraph', text: '如果把电磁场不断"抖动"起来（比如用前面学的 LC 振荡电路），变化的电磁场就不会老待在原地，而是像水波一样由近及远地传开。这种在空间里向前奔跑的电磁场，就是电磁波。手机信号、广播、阳光，本质上全是电磁波。' },
      { type: 'list', items: ['电磁波传播不需要介质，在真空中也能传播（和声音不同）', '电磁波是横波，电场和磁场的振动方向都垂直于传播方向', '真空中所有电磁波的速度都相同，约为 3.0×10⁸ m/s', '无线电、微波、光、X射线等本质上都是电磁波，只是波长频率不同'] },
      { type: 'keypoint', label: '重点·电磁波', text: '<strong>电磁波是横波，电场方向和磁场方向都垂直于传播方向；真空中速度约为 3.0×10⁸ m/s（即光速 c）。</strong>不同电磁波的区别只在于波长和频率。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电磁波：电场与磁场都垂直传播方向，并一起向前传</text><path d="M 150 210 q 15 -50 30 0 q 15 50 30 0 q 15 -50 30 0 q 15 50 30 0 q 15 -50 30 0 q 15 50 30 0" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="150" y="262" font-size="13" fill="#234b45" text-anchor="middle">电场 E（上下振动）</text><path d="M 150 110 q 15 -30 30 0 q 15 30 30 0 q 15 -30 30 0 q 15 30 30 0 q 15 -30 30 0 q 15 30 30 0" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="150" y="80" font-size="13" fill="#234b45" text-anchor="middle">磁场 B（前后振动）</text><line x1="120" y1="160" x2="600" y2="160" stroke="#234b45" stroke-width="2" stroke-dasharray="6,5"/><polygon points="612,160 594,154 594,166" fill="#234b45"/><text x="400" y="150" font-size="13" fill="#234b45">传播方向 v</text></svg>', caption: '图3　电磁波中电场 E、磁场 B 都垂直于传播方向 v，三者互相垂直。' },
      { type: 'example', label: '例题·判断说法', text: '下列说法是否正确？请说明理由。<br>① 电磁波传播必须要有空气作为介质。<br>② 电磁波在真空中的速度等于光速。<br><br><strong>解析</strong>：<br>① 错误。电磁波是变化的电磁场本身在传播，<strong>不需要任何介质</strong>，在真空中反而传得最好。<br>② 正确。真空中所有电磁波的速度都是 c ≈ 3.0×10⁸ m/s，光其实就是电磁波，所以速度等于光速。' },
      { type: 'tip', label: '提示', text: '<strong>我们平时看见的光，其实也是一种电磁波。</strong>光只是电磁波谱里很窄、人眼能感受的一段。认识到这一点，就把"光学"和"电磁学"连成一家人了。' },
      { type: 'warn', label: '易错', text: '<strong>电磁波传播不需要介质，这点和声波完全不同。</strong>声波是空气分子的振动，离开空气就传不了；电磁波是电磁场本身在跑，在真空、甚至星际空间都能传。别把两者混为一谈。' }
    ],
    exercises: [
      { type: 'choice', question: '根据麦克斯韦电磁场理论，变化的电场会？', options: ['产生磁场', '产生一个新的静电场', '不产生任何场', '产生重力场'], answer: '产生磁场', explanation: '麦克斯韦理论的核心之一正是"变化的电场产生磁场"。静止的电荷只产生静电场，不会凭空产生磁场；只有当电场随时间变化时，才会在周围空间激发出磁场，这是电磁波能够产生的根本依据。' },
      { type: 'choice', question: '关于电磁波，下列说法正确的是？', options: ['传播必须依靠空气等介质', '是横波，真空中速度约为 3.0×10⁸ m/s', '速度远小于光速', '由静止电荷直接产生'], answer: '是横波，真空中速度约为 3.0×10⁸ m/s', explanation: '电磁波是变化的电磁场向外传播形成的横波，电场和磁场都垂直于传播方向。真空中所有电磁波都以相同速度传播，约为 3.0×10⁸ m/s，也就是光速。它不需要空气等介质，也与静止电荷直接产生无关。' },
      { type: 'choice', question: '根据麦克斯韦理论，变化的磁场会？', options: ['产生电场', '产生更强的磁场', '消失不见', '变成引力场'], answer: '产生电场', explanation: '麦克斯韦理论的另一个核心是"变化的磁场产生电场"。例如线圈中电流变化时，周围磁场跟着变，就会在附近导体中激发出感生电场，这正是电磁感应现象背后的道理。变化磁场不会变成引力场，也不会凭空消失。' },
      { type: 'fill', question: '变化的电场和变化的磁场相互激发、不可分割地联系在一起，形成一个整体，这个整体叫___。', answer: '电磁场', explanation: '单独一个静电场或静磁场是分开的；但当电场变化时产生磁场，磁场变化又产生电场，两者互相"喂养"、不可分割，就构成了一个统一的客体——电磁场。电磁场是真实存在的物质形态，可以脱离电荷独立存在。' },
      { type: 'fill', question: '我们在白天见到的光，本质上也是一种___（填"电磁波"或"声波"）。', answer: '电磁波', explanation: '可见光只是电磁波谱中很窄的一段，红橙黄绿蓝靛紫对应波长由长到短。光不需要介质就能在真空中传播，速度也是 3.0×10⁸ m/s，和无线电波、X射线等同属电磁波家族，只是波长频率不同。' }
    ]
  });
})();
