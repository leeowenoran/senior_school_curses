/* ============================================================
 * 高一物理 · 必修 第二册 · 第八章 机械能守恒定律
 * 课时17：机械能守恒定律
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u17',
    name: '机械能守恒定律',
    chapter: '必修第二册 · 第八章 机械能守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是"机械能"' },
      { type: 'paragraph', text: '我们前面认识了动能（运动带来的能量）和势能（位置带来的能量，包括重力势能和弹簧的弹性势能）。动能和势能加在一起，统称为机械能。一个运动的物体系统，它的机械能就是这些能量的总和。' },
      { type: 'keypoint', label: '重点·机械能', text: '<strong>机械能 = 动能 + 势能 = E_k + E_p（重力势能 + 弹性势能）。</strong>机械能是标量，单位焦耳。研究机械能守恒时，常把动能和重力势能放在一起看。' },
      { type: 'paragraph', text: '比如抛起的石子：上升时速度变小、高度变高，动能减少、重力势能增加；下落时反过来。如果忽略空气阻力，你会发现这两种能量像"此消彼长"地转换，加起来的总数似乎不变——这正是机械能守恒的雏形。' },
      { type: 'list', items: ['机械能由动能和势能（重力势能、弹性势能）组成', '机械能 E = E_k + E_p', '动能和势能可以相互转化', '转化的"总数"在条件满足时保持不变'] },
      { type: 'heading', text: '二、机械能什么时候守恒' },
      { type: 'paragraph', text: '并不是所有过程机械能都守恒。关键看"有没有其它力来来回回地搬能量"。如果只有重力或弹簧弹力做功（它们做功只是让动能和势能在内部转换），而没有摩擦力、牵引力等"外部"力做功，那么机械能就不会凭空增多或减少，总量保持不变。' },
      { type: 'keypoint', label: '重点·守恒条件', text: '<strong>在只有重力或弹力做功的系统内，动能和势能相互转化，机械能的总量保持不变，这叫机械能守恒定律。</strong>注意是"只有重力或弹力做功"，不代表不能受其它力，而是其它力不做功（或做功代数和为零）。' },
      { type: 'example', label: '例题·自由落体验证守恒', text: '一小球从高度 h 处自由下落（忽略空气阻力），落到地面时速度为 v。用机械能守恒求 v。<br><br><strong>解析</strong>：<br>初态：动能 0，重力势能 m g h，机械能 = m g h。<br>末态：动能 ½ m v²，重力势能 0，机械能 = ½ m v²。<br>守恒：m g h = ½ m v²，得 v = √(2 g h)。' },
      { type: 'warn', label: '易错', text: '守恒条件说"只有重力或弹力做功"，很多同学误读成"只能受重力"。其实物体可以受支持力、拉力等，只要这些力不做功（例如绳子拉力始终与运动方向垂直、支持力与位移垂直），就不破坏守恒。真正破坏守恒的是摩擦力做负功、发动机牵引力做正功这类"内外能量交换"。另外"忽略空气阻力"是常见前提，有阻力就不守恒。' },
      { type: 'table', headers: ['过程', '做功的力', '机械能是否守恒', '原因'], rows: [['自由落体（无阻力）', '只有重力', '守恒', '重力做功只在动能与势能间转换'], ['沿光滑斜面下滑', '只有重力', '守恒', '支持力不做功'], ['考虑空气阻力下落', '重力 + 阻力', '不守恒', '阻力做负功，机械能损失'], ['起重机匀速吊起', '重力 + 拉力', '不守恒', '拉力做正功，外部输入能量']] },
      { type: 'heading', text: '三、机械能守恒的表达式' },
      { type: 'paragraph', text: '机械能守恒可以写成两种等价形式。一种是从"总量相等"出发：初态机械能等于末态机械能。另一种从"转化"出发：动能的增加量等于势能的减少量（或反过来）。两种写法本质一样，按题目方便选用。' },
      { type: 'keypoint', label: '重点·守恒式', text: '<strong>总量式：E_k1 + E_p1 = E_k2 + E_p2。</strong><br><strong>转化式：E_k2 − E_k1 = E_p1 − E_p2（动能增量 = 势能减少量）。</strong>只要只有重力和弹力做功，两者都成立。' },
      { type: 'list', items: ['总量式：初态总机械能 = 末态总机械能', '转化式：动能的增加 = 势能的减少', '选零势能面后分别计算 E_k 和 E_p 再相加', '只比较首尾两个状态，不必管中间怎么动'] },
      { type: 'tip', label: '提示', text: '<strong>用机械能守恒做题，比用牛顿定律省力得多：先判断"只有重力/弹力做功"，再写出首尾两个状态的 E_k + E_p，列一个等式就解出来了，完全不用管加速度和路径。</strong>这是它最大的魅力。' },
      { type: 'paragraph', text: '过山车从最高点俯冲到低点：高度降低、势能减少，速度增大、动能增加，若轨道光滑无摩擦，减少的势能正好等于增加的动能，总数不变。蹦极运动中，人下落到最低点时动能为零、弹性势能最大，过程里机械能也在动能、重力势能、弹性势能三者间来回转换而总量守恒（忽略空气阻力时）。' },
      { type: 'keypoint', label: '重点·适用范围', text: '<strong>机械能守恒是只在"只有重力或弹力做功"时才成立的特殊规律；一旦有摩擦力或外力做功，机械能就不守恒，但能量仍然守恒（变成内能等其它形式）。</strong>守恒是更普遍的能量守恒在特殊条件下的表现。' },
      { type: 'heading', text: '四、守恒思想的力量' },
      { type: 'paragraph', text: '机械能守恒告诉我们：在一定条件下，能量不会凭空消失，只是换了个"样子"。这种"总量不变、形式可变"的思想，是物理学最深刻的观念之一，也是后面学习能量守恒定律的铺垫。学会判断守恒条件、列出守恒式，你就掌握了分析许多运动问题的利器。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">机械能 = 动能 + 势能</text><rect x="40" y="70" width="180" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">动能</text><circle cx="130" cy="165" r="26" fill="#4fb3a5"/><text x="130" y="240" font-size="12" fill="#234b45" text-anchor="middle">E_k</text><rect x="250" y="70" width="180" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">势能</text><rect x="310" y="140" width="60" height="50" rx="4" fill="#4fb3a5"/><text x="340" y="240" font-size="12" fill="#234b45" text-anchor="middle">E_p</text><rect x="460" y="70" width="180" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="550" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">机械能</text><text x="550" y="160" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">E</text><text x="550" y="240" font-size="12" fill="#234b45" text-anchor="middle">E_k + E_p</text></svg>', caption: '图1　机械能是动能与势能之和，研究守恒时把两者加在一起看总数。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">自由下落：势能减少 = 动能增加，总量不变</text><rect x="60" y="70" width="240" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">最高点</text><circle cx="180" cy="120" r="12" fill="#4fb3a5"/><text x="180" y="190" font-size="12" fill="#234b45" text-anchor="middle">势能大</text><text x="180" y="212" font-size="12" fill="#234b45" text-anchor="middle">动能 0</text><rect x="380" y="70" width="240" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">落地前</text><circle cx="500" cy="200" r="18" fill="#4fb3a5"/><text x="500" y="240" font-size="12" fill="#234b45" text-anchor="middle">势能 0，动能大</text><text x="340" y="282" font-size="12" fill="#234b45" text-anchor="middle">E_k + E_p 处处相等</text></svg>', caption: '图2　自由下落过程（无阻力）中，减少的重力势能全部变成动能，机械能总量不变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">有阻力时机械能不守恒（变成内能）</text><rect x="40" y="70" width="600" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="120" cy="160" r="20" fill="#4fb3a5"/><line x1="160" y1="160" x2="440" y2="160" stroke="#234b45" stroke-width="3" stroke-dasharray="6,4"/><text x="300" y="150" font-size="13" fill="#234b45" text-anchor="middle">空气阻力做负功</text><circle cx="500" cy="160" r="14" fill="#4fb3a5"/><text x="300" y="200" font-size="12" fill="#234b45" text-anchor="middle">机械能减少，部分变内能，不守恒</text></svg>', caption: '图3　存在空气阻力时，阻力做负功，部分机械能转化为内能，机械能总量减少、不守恒。' }
    ],
    exercises: [
      { type: 'choice', question: '关于机械能，下列说法正确的是？', options: ['机械能只是动能', '机械能 = 动能 + 势能', '只有做直线运动的物体才有机械能', '势能不属于机械能'], answer: '机械能 = 动能 + 势能', explanation: '机械能是物体动能与势能（包括重力势能和弹性势能）的总和，表达式为 E = E_k + E_p。任何运动的物体都具有动能，只要处在重力场或弹性形变中就有势能，因此机械能普遍存在，并不只属于直线运动。所以只有"机械能 = 动能 + 势能"正确。' },
      { type: 'choice', question: '下列过程中，机械能守恒的是？（忽略空气阻力）', options: ['石块自由下落', '汽车刹车减速', '起重机把货物吊高', '子弹射入木块'], answer: '石块自由下落', explanation: '机械能守恒要求只有重力或弹力做功。石块自由下落只受重力，重力做功只在动能与重力势能间转换，机械能守恒。汽车刹车有摩擦力做负功；起重机吊高有拉力做正功；子弹射入木块有阻力做负功，三者机械能都不守恒（部分转化为内能）。故只有自由下落守恒。' },
      { type: 'choice', question: '关于机械能守恒条件，正确的说法是？', options: ['物体只能受重力，不能受其它力', '只有重力或弹力做功，其它力不做功（或代数和为零）', '必须不受任何力', '必须有摩擦力参与'], answer: '只有重力或弹力做功，其它力不做功（或代数和为零）', explanation: '守恒条件是"只有重力或弹力做功"，并非物体不能受其它力。支持力、拉力等可以存在，只要它们不做功（如支持力与位移垂直、拉力始终垂直于运动方向），就不向系统输入或抽走机械能。真正破坏守恒的是摩擦力、牵引力等做非零功导致能量进出系统。因此第二个选项正确。' },
      { type: 'fill', question: '机械能守恒的"总量式"为 E_k1 + E_p1 = ___（用末态动能、势能表示）。', answer: 'E_k2 + E_p2', explanation: '机械能守恒时初态机械能等于末态机械能，即 E_k1 + E_p1 = E_k2 + E_p2。也可写成转化式 E_k2 − E_k1 = E_p1 − E_p2，表示动能的增加量等于势能的减少量。使用时常先选好零势能面，再分别计算首尾两态的动能与势能相加列式。' },
      { type: 'fill', question: '一小球从高度 5 米处自由下落（g 取 10，忽略阻力），落地时动能等于减少的重力势能 mgh。若质量 1 千克，则落地速度 v = ___ 米/秒（填 √(2gh) 的数值）。', answer: '10', explanation: '由机械能守恒 m g h = ½ m v²，约去 m 得 v = √(2 g h) = √(2 × 10 × 5) = √100 = 10 米/秒。这里减少的重力势能全部转化为动能，落地时势能为零、动能为 ½ m v² = 50 焦耳，与初态势能 mgh = 50 焦耳相等，验证了守恒。' }
    ]
  });
})();
