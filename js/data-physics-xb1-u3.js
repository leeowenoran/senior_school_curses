/* ============================================================
 * 选择性必修第一册 · 第一章 动量守恒定律
 * 课时3：动量守恒定律
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u3',
    name: '动量守恒定律',
    chapter: '选择性必修第一册 · 第一章 动量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是"系统"和"内力、外力"' },
      { type: 'paragraph', text: '研究多个物体一起运动时，我们可以把"彼此有相互作用、要一起研究"的几个物体看成一个整体，这个整体就叫作一个系统。系统内部物体之间的作用力，叫内力；系统以外别的物体对系统内物体的力，叫外力。比如两颗相撞的弹珠，把两颗弹珠合起来看成一个系统，它们之间互相撞击的力是内力，而地面对它们的摩擦力就是外力。' },
      { type: 'keypoint', label: '重点·系统', text: '<strong>系统是我们选定、要一起研究的一组物体。</strong>系统内部物体之间的力叫内力，系统外部物体对系统内物体的力叫外力。区分内力和外力，是判断动量是否守恒的第一步。' },
      { type: 'list', items: ['系统：被当作一个整体一起研究的两个或多个物体', '内力：系统内部物体之间相互作用的力，成对出现、互相抵消', '外力：系统以外的物体施加的力，会单独改变系统的总动量'] },
      { type: 'heading', text: '二、动量守恒定律的内容' },
      { type: 'paragraph', text: '如果系统受到的合外力为零（或者某个方向上合外力为零），那么系统内部不管怎么撞、怎么推，整个系统的总动量始终不变。这就是动量守恒定律。写成式子就是：作用前总动量等于作用后总动量，即 p前总 = p后总。' },
      { type: 'keypoint', label: '重点·动量守恒定律', text: '<strong>当系统所受合外力为零时，系统总动量保持不变：p前总 = p后总。</strong>也就是说，系统内部物体互相作用可以改变各自动量，但所有物体动量的矢量和始终不变。' },
      { type: 'paragraph', text: '举个生活例子：两人在静止的小船上互相推一下，船和人都动起来。单独看人，动量变了；单独看船，动量也变了；但人和船加在一起，向前的动量和向后的动量大小相等、方向相反，总动量仍然为零，和开始时一样。' },
      { type: 'example', label: '例题·守恒判断', text: '水平光滑桌面上有两个小球 A、B 相向运动，A 质量 1 kg 速度 2 m/s 向右，B 质量 1 kg 速度 1 m/s 向左。（取向右为正）<br><br><strong>解析</strong>：<br>系统总动量 p = m_A×v_A + m_B×v_B = 1×2 + 1×(−1) = 1 kg·m/s。<br>因为桌面光滑，水平方向无外力，系统动量守恒。无论两球如何碰撞，碰后它们的总动量仍等于 1 kg·m/s。例如碰后 A 静止、B 以 1 m/s 向右运动，则 p = 0 + 1×1 = 1 kg·m/s，与碰前相同，符合守恒。' },
      { type: 'heading', text: '三、守恒的条件' },
      { type: 'keypoint', label: '重点·守恒条件', text: '<strong>系统守恒的条件是：系统所受合外力为零。</strong>更宽松地说，若某一方向合外力为零，则该方向上动量守恒；若合外力远小于内力（如碰撞瞬间），也可近似认为总动量守恒。' },
      { type: 'warn', label: '易错', text: '<strong>合外力为零，不是内力为零。</strong>系统内部物体之间的撞击力再大，也是内力，成对出现互相抵消，不会改变总动量。真正破坏守恒的是"外力的合力"。另外，守恒指的是"总动量矢量和不变"，不是每个物体的动量都不变。' },
      { type: 'paragraph', text: '在中学里最常用到的是碰撞和爆炸这类过程：它们发生得非常快，外力（如重力、摩擦力）在极短时间内产生的冲量很小，相比物体间巨大的内力冲量可以忽略，于是我们近似认为系统总动量守恒。光滑水平面上的碰撞，则是严格守恒的好例子。' },
      { type: 'tip', label: '提示', text: '<strong>判断守恒的三问：① 选定哪些物体组成系统？② 系统受哪些外力？③ 这些外力的合力是否为零（或某一方向是否为零）？</strong>三问清楚了，守恒与否自然就清楚了。' },
      { type: 'list', items: ['严格守恒：系统所受合外力确实为零', '某方向守恒：该方向合外力为零，另一方向不守恒也可分别处理', '近似守恒：碰撞、爆炸等极短时间内，外力冲量可忽略', '不守恒：明显有外力且不可忽略，如地面有摩擦的滑动碰撞'] },
      { type: 'table', headers: ['情形', '合外力', '动量是否守恒', '说明'], rows: [['光滑水平面两球碰撞', '为零', '守恒', '无摩擦，无水平外力'], ['空中爆炸（忽略空气阻力）', '近似为零', '近似守恒', '爆炸极快，重力冲量可忽略'], ['粗糙地面上的碰撞', '不为零', '不守恒', '摩擦力作为外力改变总动量'], ['某方向无外力、另一方向有外力', '某方向为零', '该方向守恒', '可只在该方向用守恒式']] },
      { type: 'heading', text: '四、怎么列动量守恒方程' },
      { type: 'paragraph', text: '列方程前先规定正方向，再分别写出作用前各物体的动量和、作用后各物体的动量和，令两者相等：m₁×v₁ + m₂×v₂ = m₁×v₁′ + m₂×v₂′。注意每个速度都要带正负号（与正方向相同为正，相反为负）。只要条件满足，这个式子对碰撞、反冲、爆炸都通用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">系统：一起研究的一组物体</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">系统内部</text><circle cx="120" cy="160" r="22" fill="#4fb3a5"/><circle cx="240" cy="160" r="22" fill="#4fb3a5"/><text x="180" y="220" font-size="12" fill="#234b45" text-anchor="middle">内力：两球互相撞击</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">系统外部</text><polygon points="360,160 388,145 388,175" fill="#234b45"/><text x="470" y="160" font-size="18" fill="#234b45">→</text><text x="500" y="220" font-size="12" fill="#234b45" text-anchor="middle">外力：来自系统外的力</text></svg>', caption: '图1　把两颗弹珠圈在一起看作系统：它们之间的撞击是内力，系统外来的推力是外力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">合外力为零，总动量不变</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">作用前</text><line x1="100" y1="160" x2="180" y2="160" stroke="#234b45" stroke-width="4"/><polygon points="180,152 198,160 180,168" fill="#234b45"/><text x="150" y="200" font-size="12" fill="#234b45" text-anchor="middle">总动量 p前</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">作用后</text><line x1="420" y1="160" x2="500" y2="160" stroke="#4fb3a5" stroke-width="4"/><polygon points="500,152 518,160 500,168" fill="#4fb3a5"/><text x="460" y="200" font-size="12" fill="#234b45" text-anchor="middle">总动量 p后</text><text x="340" y="282" font-size="13" fill="#234b45" text-anchor="middle">p前总 = p后总</text></svg>', caption: '图2　系统合外力为零时，无论内部怎么作用，作用前与作用后的总动量大小方向都相同。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">分清内力与外力，判断能否守恒</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="90" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">光滑桌面</text><circle cx="140" cy="160" r="20" fill="#4fb3a5"/><circle cx="220" cy="160" r="20" fill="#4fb3a5"/><text x="180" y="220" font-size="12" fill="#234b45" text-anchor="middle">无外力 → 守恒</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="90" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">粗糙地面</text><polygon points="360,160 388,145 388,175" fill="#234b45"/><text x="400" y="160" font-size="16" fill="#234b45">→</text><text x="500" y="220" font-size="12" fill="#234b45" text-anchor="middle">有摩擦外力 → 不守恒</text></svg>', caption: '图3　光滑桌面上两球碰撞合外力为零（左，守恒）；粗糙地面有摩擦力作外力（右，不守恒）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于动量守恒的条件，下列说法正确的是？', options: ['系统内部作用力为零时才守恒', '系统所受合外力为零时才守恒', '系统动能不变时才守恒', '系统不受任何力时才守恒'], answer: '系统所受合外力为零时才守恒', explanation: '动量守恒的严格条件是系统所受合外力为零。系统内部物体之间的作用力（内力）成对出现、互相抵消，再大也不会改变总动量，所以不能把"内力为零"当作条件。物体受重力等外力但合力为零时仍然守恒，不必要求系统完全不受力；动能是否不变也不是守恒的判断标准。' },
      { type: 'choice', question: '两人在静止的小船上互相推一下，人和船都动起来。关于这个过程，正确的是？', options: ['系统总动量变了', '人和船动量都变了，但总动量仍为零', '只有人的动量守恒', '只有船的动量守恒'], answer: '人和船动量都变了，但总动量仍为零', explanation: '把人和船看作一个系统，两人互推的力是内力，水平方向无外力，系统总动量守恒。初始时人和船都静止，总动量为零；互推后人和船分别获得方向相反的动量，但矢量和为零。单独看人或单独看船动量都变了，守恒的是系统的总动量，不是单个物体。' },
      { type: 'choice', question: '在光滑水平面上发生的一维碰撞，下列说法正确的是？', options: ['碰撞中重力是外力，所以不守恒', '碰撞极快，外力冲量可忽略，近似守恒', '内力会改变系统总动量', '总动能一定不变'], answer: '碰撞极快，外力冲量可忽略，近似守恒', explanation: '光滑水平面无摩擦，竖直方向重力和支持力合力为零，水平方向无外力，因此系统总动量严格守恒。即便存在重力等外力，在碰撞极短时间内其冲量也很小，相比巨大的内力冲量可忽略，仍可认为守恒。内力成对抵消不改变总动量；碰撞中总动能是否不变取决于碰撞种类，不是守恒的条件。' },
      { type: 'fill', question: '动量守恒定律的式子可简写为：作用前总动量___作用后总动量（填"等于"或"大于"）。', answer: '等于', explanation: '当系统所受合外力为零时，系统总动量保持不变，即作用前总动量等于作用后总动量，记作 p前总 = p后总。这里说的是系统所有物体动量的矢量和不变，而不是每个物体的动量都不变。列方程时还要注意先规定正方向。' },
      { type: 'fill', question: '在中学里研究碰撞、爆炸这类过程时，因为过程极短，外力冲量相比内力冲量很小可忽略，所以常近似认为系统总动量___（填"守恒"或"不守恒"）。', answer: '守恒', explanation: '碰撞和爆炸发生得极快，在这么短的时间里，重力、空气阻力等外力产生的冲量很小，远远比不上物体间相互作用的内力冲量，因此可以近似忽略外力冲量，认为系统总动量守恒。这也是中学阶段大量碰撞问题能够直接用动量守恒解题的原因。' }
    ]
  });
})();
