/* ============================================================
 * 高二物理 · 必修第三册 · 第十一章 电路及其应用
 * 课时13：串联电路和并联电路
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u13',
    name: '串联电路和并联电路',
    chapter: '必修第三册 · 第十一章 电路及其应用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、串联电路的特点' },
      { type: 'paragraph', text: '把元件一个接一个首尾相连，电流只有一条通路，这种接法叫串联。比如一节一节连起来的小彩灯（老式那种）就是串联。串联电路里，流过每个元件的电流都相等，因为电荷没有别的去处，只能依次通过每一个。' },
      { type: 'keypoint', label: '重点·串联电路规律', text: '<strong>电流处处相等：I = I₁ = I₂ = I₃。<br>总电压等于各部分电压之和：U = U₁ + U₂ + U₃。<br>总电阻等于各电阻之和：R = R₁ + R₂ + R₃。</strong>串联相当于把导体接长，所以总电阻变大。' },
      { type: 'paragraph', text: '因为串联总电阻 R = R₁ + R₂ + …，所以串联越多电阻越大，且总电阻一定大于其中任何一个分电阻。电压的分配跟电阻成正比：电阻大的分到的电压也大，即 U₁ / U₂ = R₁ / R₂。' },
      { type: 'list', items: ['电流：处处相等（只有一条路）', '电压：总电压等于各部分电压之和', '电阻：总电阻等于各电阻相加，串联越多总电阻越大', '电压分配：按电阻大小成正比分配'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">串联：电流一条路，I 处处相等</text><line x1="80" y1="150" x2="600" y2="150" stroke="#234b45" stroke-width="3"/><rect x="180" y="135" width="50" height="30" rx="4" fill="#4fb3a5"/><rect x="330" y="135" width="50" height="30" rx="4" fill="#4fb3a5"/><rect x="480" y="135" width="50" height="30" rx="4" fill="#4fb3a5"/><text x="205" y="155" font-size="12" fill="#234b45" text-anchor="middle">R₁</text><text x="355" y="155" font-size="12" fill="#234b45" text-anchor="middle">R₂</text><text x="505" y="155" font-size="12" fill="#234b45" text-anchor="middle">R₃</text><polygon points="130,150 112,142 112,158" fill="#1f7a6e"/><text x="150" y="120" font-size="13" fill="#1f7a6e" font-weight="bold">I 相同</text><text x="340" y="230" font-size="13" fill="#234b45" text-anchor="middle">U = U₁ + U₂ + U₃，R = R₁ + R₂ + R₃</text></svg>', caption: '图1　串联电路中电流只有一条路径，流过每个电阻的电流 I 相同，总电压等于各部分电压之和。' },
      { type: 'heading', text: '二、并联电路的特点' },
      { type: 'paragraph', text: '把各个元件的两端分别连在一起，形成多条支路，这种接法叫并联。家里电灯、插座都是并联的，所以关掉一盏灯不影响别的灯亮。并联电路里，各支路两端电压相等（都等于电源电压），而总电流等于各支路电流之和。' },
      { type: 'keypoint', label: '重点·并联电路规律', text: '<strong>各支路电压相等：U = U₁ = U₂ = U₃。<br>总电流等于各支路电流之和：I = I₁ + I₂ + I₃。<br>总电阻的倒数等于各电阻倒数之和：1/R = 1/R₁ + 1/R₂ + 1/R₃。</strong>并联相当于把导体加粗，总电阻变小。' },
      { type: 'warn', label: '易错', text: '并联总电阻公式别记反：是<strong>"倒数相加"</strong> 1/R = 1/R₁ + 1/R₂，然后再取倒数得 R，不是直接 R = R₁ + R₂。而且并联总电阻一定<strong>小于</strong>任何一个分电阻（相当于导线变粗）。两个相等电阻 R₀ 并联，总电阻是 R₀/2，不是 2R₀。' },
      { type: 'example', label: '例题·并联总电阻', text: '一个 6 欧和一个 3 欧的电阻并联，求总电阻。<br><br><strong>解析</strong>：<br>1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2。<br>所以 R = 2 Ω。<br>可见并联总电阻（2 Ω）比最小的那个分电阻（3 Ω）还要小。' },
      { type: 'table', headers: ['对比项', '串联电路', '并联电路'], rows: [['电流', '处处相等 I=I₁=I₂', '总电流等于各支路之和 I=I₁+I₂'], ['电压', '总电压等于各部分之和 U=U₁+U₂', '各支路电压相等 U=U₁=U₂'], ['总电阻', 'R=R₁+R₂（变大）', '1/R=1/R₁+1/R₂（变小）'], ['用电器关系', '一个断全断', '一个断互不影响']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">并联：多条支路，各支路电压相等</text><line x1="120" y1="90" x2="120" y2="220" stroke="#234b45" stroke-width="3"/><line x1="560" y1="90" x2="560" y2="220" stroke="#234b45" stroke-width="3"/><line x1="120" y1="110" x2="560" y2="110" stroke="#234b45" stroke-width="2"/><line x1="120" y1="200" x2="560" y2="200" stroke="#234b45" stroke-width="2"/><rect x="320" y="95" width="40" height="30" rx="4" fill="#4fb3a5"/><rect x="320" y="185" width="40" height="30" rx="4" fill="#4fb3a5"/><text x="340" y="115" font-size="12" fill="#234b45" text-anchor="middle">R₁</text><text x="340" y="205" font-size="12" fill="#234b45" text-anchor="middle">R₂</text><text x="340" y="260" font-size="13" fill="#234b45" text-anchor="middle">U 相等，I = I₁ + I₂</text></svg>', caption: '图2　并联电路中各支路两端电压相等，总电流等于各支路电流相加，相当于导体变粗、总电阻变小。' },
      { type: 'heading', text: '三、电表改装：小量程电流表变大' },
      { type: 'paragraph', text: '常用的电流表（表头）其实很"脆弱"，只能流过很小的电流、量很小的电压。要测大电流或大电压，就得给它"改装"。核心元件是表头内阻 Rg 和满偏电流 Ig（刚好指针满格时的电流）。改装思路都是利用串并联的分压、分流规律。' },
      { type: 'keypoint', label: '重点·改装电压表（串联大电阻）', text: '<strong>把表头串联一个很大的分压电阻 R，就能变成电压表。因为串联分压，大部分电压落在外加电阻上。要扩成量程 U，需串入 R = (U / Ig) − Rg。</strong>电压表内阻很大。' },
      { type: 'keypoint', label: '重点·改装电流表（并联小电阻）', text: '<strong>把表头并联一个很小的分流电阻 R，就能变成大量程电流表。因为并联分流，大部分电流从外加电阻走。要扩成量程 I，需并入 R = Ig × Rg / (I − Ig)。</strong>电流表内阻很小。' },
      { type: 'tip', label: '提示·串并记住就好懂', text: '<strong>改电压表要"挡电压"，所以串联一个大电阻去分压；改电流表要"放电流"，所以并联一个小电阻去分流。</strong>一个串、一个并，一个变大内阻、一个变小内阻，千万别记反。' },
      { type: 'example', label: '例题·改装电压表', text: '表头内阻 Rg = 1000 欧，满偏电流 Ig = 1 毫安。要改成一个量程 10 伏的电压表，需串联多大电阻？<br><br><strong>解析</strong>：<br>Ig = 1 mA = 0.001 A。<br>由 R = U/Ig − Rg = 10 / 0.001 − 1000 = 10000 − 1000 = 9000 Ω。<br>需串联 9000 欧（9 kΩ）的电阻。' },
      { type: 'warn', label: '易错·电流表不能直接测电压', text: '表头内阻通常不大，若直接把它两端接在大电压上，由 I = U/Rg 算出的电流会远超 Ig，表头会被烧坏。所以<strong>测电压必须串联分压电阻改装成电压表</strong>；而电流表并联使用是因为有分流电阻保护表头。使用时要分清"电流表要串联在电路里、电压表要并联在待测元件两端"。' },
      { type: 'list', items: ['电压表：表头串联大电阻，内阻大，要并联在被测元件两端', '电流表：表头并联小电阻，内阻小，要串联在电路中', '扩大量程：电压表靠串联、电流表靠并联', '改装都基于串并联的分压与分流规律'] },
      { type: 'heading', text: '四、串并联在生活中的应用' },
      { type: 'paragraph', text: '家里所有用电器并联，保证各自电压都是 220 伏且互不干扰；装饰用小彩灯若串联，一个坏了全串不亮（新型彩灯常加旁路设计避免此问题）。理解串并联，才能看懂保险丝、开关应该接在干路还是支路，以及为什么大功率电器要单独走线。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电表改装：串大电阻测电压，并小电阻测电流</text><rect x="70" y="90" width="250" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="195" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">改电压表</text><text x="195" y="150" font-size="13" fill="#234b45" text-anchor="middle">表头 串 大电阻</text><text x="195" y="178" font-size="13" fill="#234b45" text-anchor="middle">分压→内阻大</text><rect x="360" y="90" width="250" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="485" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">改电流表</text><text x="485" y="150" font-size="13" fill="#234b45" text-anchor="middle">表头 并 小电阻</text><text x="485" y="178" font-size="13" fill="#234b45" text-anchor="middle">分流→内阻小</text></svg>', caption: '图3　电压表由表头串联大电阻改装（分压、内阻大），电流表由表头并联小电阻改装（分流、内阻小）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于串联电路，下列说法正确的是？', options: ['串联电路总电流等于各支路电流之和', '串联电路中各元件两端电压相等', '串联电路总电阻等于各电阻之和，且大于任一分支电阻', '串联电路中一个用电器断路，其他用电器仍正常工作'], answer: '串联电路总电阻等于各电阻之和，且大于任一分支电阻', explanation: '串联电路电流只有一条路径，处处相等；总电压等于各部分电压之和；总电阻 R = R₁+R₂+…，等于各电阻相加，因此总电阻一定大于其中任何一个分电阻。串联用电器互相影响，一个断路则整条路断开，其他用电器都不能工作。"各支路"的说法是并联的特征，不适用于串联。' },
      { type: 'choice', question: '两个电阻 R₁ = 4 欧、R₂ = 12 欧并联，总电阻为？', options: ['16 欧', '3 欧', '8 欧', '48 欧'], answer: '3 欧', explanation: '并联总电阻满足 1/R = 1/R₁ + 1/R₂。代入 R₁=4、R₂=12，得 1/R = 1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3，所以 R = 3 欧。并联总电阻小于任一分支电阻，这里 3 欧确实小于最小的 4 欧，符合规律。注意要用倒数相加再取倒数，不能直接相加。' },
      { type: 'choice', question: '把小量程表头改装成量程更大的电压表，应该？', options: ['并联一个小电阻', '串联一个大电阻', '并联一个大电阻', '串联一个小电阻'], answer: '串联一个大电阻', explanation: '表头本身能量程很小，要测较大电压需串联一个很大的分压电阻，让大部分电压落在这个外加电阻上，保护表头不过载。串联后总内阻变大，这正是电压表应有的特征（并联在被测元件两端时尽量不分走电流）。并联小电阻是改装电流表（分流）的做法，方向相反。' },
      { type: 'fill', question: '并联电路总电阻的计算公式是 ___（用 R₁、R₂ 表示）；并联后总电阻一定___（填"大于"或"小于"）其中最小的那个分电阻。', answer: '1 / R = 1 / R₁ + 1 / R₂|小于', explanation: '并联电路总电阻的倒数等于各支路电阻倒数之和：1/R = 1/R₁ + 1/R₂ + …，算出倒数和后再取倒数得到总电阻 R。并联相当于把导体的横截面积变大，所以总电阻比任何一个分电阻都小，特别地小于其中最小的那个分电阻。例如 4 欧和 12 欧并联得 3 欧，小于最小的 4 欧。' },
      { type: 'fill', question: '将表头改装成大量程电流表，应给表头___（填"串联"或"并联"）一个___（填"大"或"小"）电阻，利用并联___（填"分压"或"分流"）原理保护表头。', answer: '并联|小|分流', explanation: '要扩大量程测更大电流，应把表头并联一个很小的分流电阻，使超过表头承受能力的那部分电流从外加小电阻上流过，这就是并联分流原理。并联后整体内阻变得很小，这正是电流表串联接入电路时应有的特征（尽量减少对被测电路的影响）。串联大电阻是改装电压表的分压做法，不能用于改装电流表。' }
    ]
  });
})();
