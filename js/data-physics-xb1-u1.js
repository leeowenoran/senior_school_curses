/* ============================================================
 * 选择性必修第一册 · 第一章 动量守恒定律
 * 课时1：动量
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u1',
    name: '动量',
    chapter: '选择性必修第一册 · 第一章 动量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么要引入"动量"这个概念' },
      { type: 'paragraph', text: '在生活中，一个飞速滚来的乒乓球和一个慢慢推过来的大铁球，哪个更难拦住？光看速度或光看质量都不够：铁球虽然慢，但太重；乒乓球虽然轻，但太快。要想说清"一个运动物体有多难被停下来"，必须把质量和速度合在一起考虑。物理学家给这个"质量和速度共同决定的运动量"起了个名字，叫动量。' },
      { type: 'keypoint', label: '重点·动量的定义', text: '<strong>动量 p 等于物体的质量 m 乘以速度 v，即 p = m × v。</strong>动量的单位由质量和速度的单位合成，是千克·米/秒（kg·m/s）。它描述的是"物体运动的量有多大、朝哪个方向"。' },
      { type: 'paragraph', text: '动量把"多重"和"多快"两个因素绑在一起。质量越大、速度越大，动量就越大，也就越难让它停下来。比如满载的大货车，即使速度不快，动量也很大，刹车距离很长，就是这个道理。' },
      { type: 'list', items: ['动量由质量和速度共同决定，不能只看其中一个', '质量越大、速度越大，动量越大，越不容易停下来', '动量描述的是物体"运动了多少、往哪运动"，是个整体量'] },
      { type: 'heading', text: '二、动量是矢量——方向非常重要' },
      { type: 'paragraph', text: '速度是矢量，有方向；质量是正的标量，没有方向。质量乘以速度，得到的动量自然也带着方向，而且动量的方向和速度方向完全相同。一辆车向东开，它的动量就向东；掉头向西开，动量就向西。比较两个物体的动量，不但要比大小，还要比方向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动量 p 的方向与速度 v 的方向相同</text><rect x="110" y="120" width="90" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="155" y="160" font-size="14" fill="#234b45" text-anchor="middle">物体 m</text><line x1="200" y1="150" x2="380" y2="150" stroke="#234b45" stroke-width="3"/><polygon points="380,150 366,143 366,157" fill="#234b45"/><text x="290" y="140" font-size="13" fill="#234b45" text-anchor="middle">速度 v</text><line x1="200" y1="205" x2="380" y2="205" stroke="#4fb3a5" stroke-width="3"/><polygon points="380,205 366,198 366,212" fill="#4fb3a5"/><text x="290" y="195" font-size="13" fill="#234b45" text-anchor="middle">动量 p = m × v</text><text x="340" y="262" font-size="13" fill="#234b45" text-anchor="middle">两个箭头都朝右，说明动量与速度方向一致</text></svg>', caption: '图1　物体向右运动，速度 v 和动量 p 都向右，二者方向相同。' },
      { type: 'example', label: '例题·比较动量大小和方向', text: '质量都是 2 kg 的两个小球，甲以 3 m/s 向东运动，乙以 3 m/s 向西运动。<br>求两球的动量大小，并说明动量是否相同。<br><br><strong>解析</strong>：<br>甲的动量大小 p甲 = m × v = 2 × 3 = 6 kg·m/s，方向向东。<br>乙的动量大小 p乙 = 2 × 3 = 6 kg·m/s，方向向西。<br>两球动量大小相等，但<strong>方向相反，所以动量并不相同</strong>。比较动量必须同时看大小和方向。' },
      { type: 'warn', label: '易错', text: '很多同学只记"p = m × v 算大小"，却忘了<strong>动量是矢量，方向由速度方向决定</strong>。两个物体质量、速率都相同，只要运动方向相反，动量就不同。求"动量变化""合动量"时一定要先规定正方向，再用带符号的数去算。' },
      { type: 'heading', text: '三、动量变化量 Δp' },
      { type: 'paragraph', text: '物体的速度改变了，动量也会跟着改变。我们关心的是"动量变化了多少"，用末动量减去初动量来表示。因为动量是矢量，这个相减也是按矢量规则来的：先规定一个正方向，把初动量 p前 和末动量 p后 写成带正负的量，再做代数减法。' },
      { type: 'keypoint', label: '重点·动量变化量', text: '<strong>动量变化量 Δp = 末动量 p后 − 初动量 p前，即 Δp = m × v′ − m × v。</strong>这里的减号是矢量相减，必须先定正方向，用带符号的数值计算。物体加速时 Δp 与运动方向相同，减速时 Δp 与运动方向相反。' },
      { type: 'list', items: ['先规定一个正方向，把初、末动量都写成带正负的量', '用末动量减去初动量：Δp = m × v′ − m × v', 'Δp 的方向由"末减初"的结果决定，不一定和初速度同向'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动量变化 Δp = p后 − p前 是矢量相减</text><line x1="120" y1="120" x2="270" y2="120" stroke="#234b45" stroke-width="3"/><polygon points="270,120 256,113 256,127" fill="#234b45"/><text x="195" y="108" font-size="13" fill="#234b45" text-anchor="middle">p前</text><line x1="120" y1="185" x2="400" y2="185" stroke="#4fb3a5" stroke-width="3"/><polygon points="400,185 386,178 386,192" fill="#4fb3a5"/><text x="260" y="173" font-size="13" fill="#234b45" text-anchor="middle">p后（更长）</text><line x1="270" y1="240" x2="400" y2="240" stroke="#1f7a6e" stroke-width="3"/><polygon points="400,240 386,233 386,247" fill="#1f7a6e"/><text x="335" y="262" font-size="13" fill="#234b45" text-anchor="middle">Δp = p后 − p前（向右，物体加速）</text></svg>', caption: '图2　物体加速时，p后 比 p前 长，Δp 的方向与运动方向相同。' },
      { type: 'heading', text: '四、动量 和 动能 有什么不同' },
      { type: 'paragraph', text: '动量 p = m × v 和动能 E = ½ × m × v² 都和质量、速度有关，常被搞混。最关键的区别：动量是矢量，有方向；动能是标量，只有大小没有方向。它们描述的角度也不同——动量更关心"撞上去有多难挡住、往哪推"，动能更关心"一共带了多少能量、能做多少功"。' },
      { type: 'table', headers: ['比较项目', '动量 p = m × v', '动能 E = ½ m v²'], rows: [['有无方向', '有方向（矢量），方向与速度相同', '无方向（标量），只有大小'], ['单位', 'kg·m/s（千克·米/秒）', 'J（焦耳）'], ['与速度关系', '和速度一次方成正比', '和速度平方成正比'], ['关注的问题', '运动时有多难被拦停、朝哪撞', '一共带了多少能量、能做多少功']] },
      { type: 'paragraph', text: '正因为和速度的关系不同（一次方 vs 平方），两个量随速度变化的快慢也不一样。速度翻倍时，动量翻倍，但动能变成原来的四倍。所以讨论"撞击破坏力"时常常看动能，讨论"碰撞时互相推挤"时常常看动量。' },
      { type: 'tip', label: '提示', text: '<strong>做动量相关题目，先问自己三个问题：</strong>① 质量 m 是多少？② 速度 v 的大小和方向是什么？③ 需不需要规定正方向？把方向标清楚，再套 p = m × v 和 Δp = m × v′ − m × v，就不容易出错。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动量是矢量(有方向)，动能是标量(无方向)</text><rect x="60" y="80" width="250" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="112" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">动量 p = m × v</text><line x1="120" y1="170" x2="260" y2="170" stroke="#4fb3a5" stroke-width="3"/><polygon points="260,170 246,163 246,177" fill="#4fb3a5"/><text x="190" y="200" font-size="13" fill="#234b45" text-anchor="middle">有方向，用箭头表示</text><rect x="370" y="80" width="250" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="112" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">动能 E = ½ m v²</text><text x="495" y="165" font-size="13" fill="#234b45" text-anchor="middle">只有大小</text><text x="495" y="195" font-size="13" fill="#234b45" text-anchor="middle">没有方向，是标量</text></svg>', caption: '图3　动量带方向（用箭头画），动能只有大小、没有方向。' }
    ],
    exercises: [
      { type: 'choice', question: '关于动量的定义，下列说法正确的是？', options: ['动量 p = m ÷ v', '动量 p = m × v，是标量', '动量 p = m × v，方向与速度方向相同', '动量只与速度有关，与质量无关'], answer: '动量 p = m × v，方向与速度方向相同', explanation: '动量等于质量乘以速度，即 p = m × v，单位是千克·米/秒。因为速度 v 是矢量，质量 m 是标量，二者相乘得到的动量也是矢量，且方向与速度方向完全相同。动量同时取决于质量和速度，并不是只与速度有关，也不是标量。' },
      { type: 'choice', question: '两个质量相同的物体以相同的速率相向运动，关于它们的动量，正确的是？', options: ['动量完全相同', '动量大小相等但方向相反', '动量大小不相等', '动量都是零'], answer: '动量大小相等但方向相反', explanation: '两物体质量相同、速率相同，所以动量大小都等于 m × v，是相等的。但二者运动方向相反，而动量方向与速度方向一致，因此一个动量向东、一个向西，方向相反。动量是矢量，方向相反就是不相同的两个动量。' },
      { type: 'choice', question: '一个物体向东运动，速度从 2 m/s 增加到 5 m/s（质量不变），它的动量变化量 Δp 的方向是？', options: ['向东', '向西', '为零', '与速度垂直'], answer: '向东', explanation: '规定向东为正方向，则初动量 p前 = m × 2，末动量 p后 = m × 5。动量变化 Δp = p后 − p前 = m × 5 − m × 2 = m × 3，结果为正，方向与正方向（向东）相同。物体加速时，Δp 与运动方向一致，所以向东。' },
      { type: 'fill', question: '质量是 3 kg 的物体以 4 m/s 的速度运动，它的动量大小 p = m × v = ___ kg·m/s。', answer: '12', explanation: '动量大小 p = m × v = 3 kg × 4 m/s = 12 kg·m/s。注意这里只问大小，若还要求方向，则需说明动量方向与速度方向相同。单位是千克·米/秒，由质量和速度的单位相乘得到。' },
      { type: 'fill', question: '动量是矢量，动能是___（填"矢量"或"标量"），二者的最重要区别是有无方向。', answer: '标量', explanation: '动能 E = ½ × m × v² 没有方向，只有大小，因此是标量；而动量 p = m × v 是矢量，方向与速度方向相同。是否带方向是动量和动能最本质的区别，记住这一点就不会把两者混为一谈。' }
    ]
  });
})();
