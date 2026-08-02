/* 生物学 · 高三复习 · 稳态与调节 · 第2章 · 课时：第3节 神经冲动的产生和传导（一）神经纤维上的传导 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u5',
    name: '第3节 神经冲动的产生和传导（一）神经纤维上的传导',
    chapter: '稳态与调节 · 第2章 神经调节',
    difficulty: '基础',
    content: [
      { type:'heading', text:'一、静息电位与动作电位' },
      { type:'paragraph', text:'神经纤维在未受刺激时处于静息状态，膜两侧存在电位差，称为静息电位。当受到一定刺激时，膜电位发生反转，形成动作电位。兴奋就是动作电位沿着纤维传导的过程，像电流沿电线传播。' },
      { type:'keypoint', text:'静息电位表现为膜外正、膜内负（外正内负），形成原因是K⁺外流（协助扩散）。' },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">静息电位：外正内负</text>
  <rect x="120" y="90" width="200" height="180" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="220" y="185" text-anchor="middle" font-size="16" fill="#2e3a22">膜内 负</text>
  <text x="220" y="215" text-anchor="middle" font-size="13" fill="#5aa832">K⁺ 外流</text>
  <rect x="360" y="90" width="200" height="180" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="460" y="185" text-anchor="middle" font-size="16" fill="#2e3a22">膜外 正</text>
  <polygon points="320,180 360,170 360,190" fill="#3f7d1e"/>
  <text x="340" y="310" text-anchor="middle" font-size="13" fill="#2e3a22">静息时 K⁺ 协助扩散外流，膜外带正电</text>
</svg>`, caption:'静息状态下神经元膜外正、膜内负，由 K⁺ 外流（协助扩散）形成。' },
      { type:'list', items:['静息时膜对K⁺通透性大','K⁺顺浓度梯度外流，带正电离开细胞内','结果膜外正、膜内负'] },
      { type:'paragraph', text:'当神经纤维某一部位受到刺激，膜对Na⁺的通透性突然增大，Na⁺迅速内流，使该部位膜电位变为外负内正，这就是动作电位。' },
      { type:'keypoint', text:'动作电位表现为膜外负、膜内正（外负内正），形成原因是Na⁺内流（协助扩散）。' },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">动作电位：外负内正</text>
  <rect x="120" y="90" width="200" height="180" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="220" y="185" text-anchor="middle" font-size="16" fill="#2e3a22">膜内 正</text>
  <text x="220" y="215" text-anchor="middle" font-size="13" fill="#5aa832">Na⁺ 内流</text>
  <rect x="360" y="90" width="200" height="180" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="460" y="185" text-anchor="middle" font-size="16" fill="#2e3a22">膜外 负</text>
  <polygon points="320,170 360,160 360,180" fill="#3f7d1e"/>
  <text x="340" y="310" text-anchor="middle" font-size="13" fill="#2e3a22">受刺激时 Na⁺ 协助扩散内流，膜外转为负电</text>
</svg>`, caption:'受刺激时 Na⁺ 内流（协助扩散）使膜电位反转为外负内正，形成动作电位。' },
      { type:'table', headers:['项目','静息电位','动作电位'], rows:[
        ['膜电位','外正内负','外负内正'],
        ['主要离子','K⁺外流','Na⁺内流'],
        ['运输方式','协助扩散','协助扩散']
      ] },
      { type:'warn', text:'易错辨析：静息和动作电位的离子基础正好相反——静息靠K⁺外流，动作靠Na⁺内流，二者都是协助扩散而非主动运输；考试中常把内流说成耗能主动运输来设陷阱。' },
      { type:'paragraph', text:'兴奋在离体的神经纤维上可以双向传导：刺激中点，兴奋向两端同时传播。这是因为离体纤维两端都没有完整的反射弧限制方向。' },
      { type:'list', items:['离体神经纤维上兴奋双向传导','在体反射弧中兴奋单向传导','有髓神经纤维髓鞘绝缘，兴奋以跳跃方式传导更快','无髓纤维则逐点连续传导'] },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">兴奋在神经纤维上的传导</text>
  <line x1="80" y1="180" x2="600" y2="180" stroke="#3f7d1e" stroke-width="3"/>
  <polygon points="600,180 575,170 575,190" fill="#3f7d1e"/>
  <polygon points="80,180 105,170 105,190" fill="#3f7d1e"/>
  <circle cx="340" cy="180" r="16" fill="#d6eac4" stroke="#5aa832" stroke-width="2"/>
  <text x="340" y="250" text-anchor="middle" font-size="13" fill="#2e3a22">离体神经纤维上兴奋双向传导</text>
  <text x="340" y="285" text-anchor="middle" font-size="13" fill="#5aa832">有髓纤维经髓鞘跳跃传导更快</text>
</svg>`, caption:'在离体神经纤维上兴奋可双向传导；有髓神经纤维以跳跃方式传导更快。' },
      { type:'example', text:'例题：将一离体神经纤维中部施加适宜刺激，出现的现象是（ ）。A 兴奋只向一端传导 B 兴奋向两端双向传导 C 不发生电位变化 D 只有静息电位。思路：离体神经纤维上兴奋可双向传导，刺激中点后兴奋向两侧同时传播，故B正确。' },
      { type:'tip', text:'高频考点：静息与动作电位的离子基础（K⁺外流、Na⁺内流）几乎每年必考，常结合膜电位曲线图命题。务必记牢外正内负、外负内正及协助扩散方式，区分离子种类与运输方式。' },
      { type:'paragraph', text:'本节核心：静息靠K⁺外流形成外正内负，动作靠Na⁺内流形成外负内正；兴奋在离体纤维上双向传导，有髓纤维跳跃传导更快。下节课将继续学习突触处的传递。' },
      { type:'heading', text:'二、本节复习框架' },
      { type:'list', items:['静息电位：外正内负，K⁺外流','动作电位：外负内正，Na⁺内流','二者均为协助扩散','离体纤维双向传导、有髓跳跃传导'] }
    ],
    exercises: [
      { type:'choice', question:'静息电位的形成及特点是（ ）。', options:['外正内负，由K⁺外流形成','外负内正，由K⁺外流形成','外正内负，由Na⁺内流形成','外负内正，由Na⁺内流形成'], answer:'外正内负，由K⁺外流形成', explanation:'静息时膜对K⁺通透性强，K⁺顺浓度梯度协助扩散外流，使膜外带正电、膜内带负电，即外正内负。动作电位才是外负内正且由Na⁺内流形成，故A正确，其余混淆了离子与电位。' },
      { type:'choice', question:'动作电位产生时，主要的离子基础是（ ）。', options:['K⁺外流','Na⁺内流','Ca²⁺内流','Cl⁻外流'], answer:'Na⁺内流', explanation:'受刺激时膜对Na⁺通透性增大，Na⁺顺浓度梯度内流，使膜电位反转为外负内正，形成动作电位。K⁺外流形成静息电位，Ca²⁺、Cl⁻不是动作电位的主要离子基础，故选B。' },
      { type:'choice', question:'下列关于兴奋在神经纤维上传导的叙述，正确的是（ ）。', options:['在体反射弧中兴奋双向传导','离体神经纤维上兴奋单向传导','离体神经纤维上兴奋可双向传导','有髓纤维传导比无髓更慢'], answer:'离体神经纤维上兴奋可双向传导', explanation:'在离体的神经纤维上，兴奋可向刺激点的两端同时传导，即双向传导；在体内反射弧中因突触存在才单向；有髓纤维靠跳跃传导更快。故正确选项是C。' },
      { type:'fill', question:'静息电位形成时，K⁺通过______方式外流。', answer:'协助扩散', explanation:'静息电位形成时，K⁺顺浓度梯度通过通道蛋白外流，属于协助扩散，不消耗能量；这与主动运输不同，考试中常把外流误说成耗能运输来设置陷阱。' },
      { type:'fill', question:'有髓神经纤维上兴奋以______方式传导，速度更快。', answer:'跳跃', explanation:'有髓神经纤维外有髓鞘绝缘，兴奋只能在郎飞结处产生，从一个结跳到下一个结，即跳跃传导，速度明显快于无髓纤维的连续传导。' }
    ]
  });
})();
