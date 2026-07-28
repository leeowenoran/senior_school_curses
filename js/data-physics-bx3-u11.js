/* ============================================================
 * 高二物理 · 必修第三册 · 第十一章 电路及其应用
 * 课时11：导体的电阻
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u11',
    name: '导体的电阻',
    chapter: '必修第三册 · 第十一章 电路及其应用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电阻：导体对电流的阻碍作用' },
      { type: 'paragraph', text: '同一节电池，接上粗铜线时灯泡很亮，接上细铁丝时灯泡很暗，甚至不亮。这说明不同的导体对电流的"阻挡能力"不一样。导体对电流的阻碍作用，就叫作电阻，用字母 R 表示。电阻越大，电流通过越困难。' },
      { type: 'keypoint', label: '重点·电阻的物理意义', text: '<strong>电阻 R 反映导体对电流的阻碍作用大小。电阻越大，导体越"难"通过电流；电阻为 0 的理想情况叫作超导体。</strong>' },
      { type: 'paragraph', text: '电阻的单位是欧姆，简称欧，符号是 Ω（读作"欧米伽"）。比较大的单位还有千欧（kΩ）和兆欧（MΩ），它们的关系是：1 kΩ = 1000 Ω，1 MΩ = 1000 kΩ = 10⁶ Ω。' },
      { type: 'heading', text: '二、电阻的定义式 R = U / I' },
      { type: 'paragraph', text: '给一段导体加上电压 U，导体里就会有电流 I。实验发现，对同一段导体，电压 U 和电流 I 的比值是个定值；换一段导体，这个比值一般不同。于是用 U 除以 I 来量度这段导体的电阻：R = U / I。也就是说，电阻等于导体两端电压与通过它的电流的比值。' },
      { type: 'keypoint', label: '重点·电阻定义式', text: '<strong>R = U / I。R 由导体本身性质决定，与加在它两端的电压 U、通过它的电流 I 无关。不能理解为"电压越大电阻就越大"或"电流越大电阻就越小"。</strong>' },
      { type: 'example', label: '例题·求电阻', text: '一段导体两端加 6 伏电压时，通过的电流是 0.3 安，求这段导体的电阻。<br><br><strong>解析</strong>：<br>已知 U = 6 V，I = 0.3 A。<br>由 R = U / I 得：R = 6 / 0.3 = 20 Ω。<br>所以这段导体的电阻是 20 欧。' },
      { type: 'warn', label: '易错', text: '千万不要把定义式 R = U / I 当成决定式。R 是导体本身的属性，由材料、长短、粗细、温度决定。比如一个 20 欧的电阻，你不加电压（U = 0）时电流也是 0，但<strong>它的电阻仍然是 20 欧，并不会变成 0</strong>。比值 U/I 只是"量出来"的电阻，不是"造出"电阻的原因。' },
      { type: 'list', items: ['比值定义：R = U / I 是用电压与电流的比值来量度电阻，不是决定电阻大小的公式', '无关性：同一导体 R 是定值，不随 U、I 改变而改变', '普适性：这个公式对一切导体（金属、电解液等）都适用，不论它是否遵循欧姆定律'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">R = U / I：电压与电流的比值量度电阻</text><rect x="70" y="80" width="240" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="108" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">导体（电阻 R）</text><text x="190" y="150" font-size="15" fill="#234b45" text-anchor="middle">两端加电压 U</text><text x="190" y="182" font-size="15" fill="#234b45" text-anchor="middle">通过电流 I</text><rect x="370" y="80" width="240" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="116" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">电阻</text><text x="490" y="156" font-size="20" fill="#1f7a6e" text-anchor="middle" font-weight="bold">R = U / I</text><text x="490" y="200" font-size="13" fill="#234b45" text-anchor="middle">比值固定，由导体本身决定</text></svg>', caption: '图1　给导体加电压 U、测出电流 I，用比值 U/I 得到电阻 R；对同一导体该比值恒定。' },
      { type: 'heading', text: '三、欧姆定律' },
      { type: 'paragraph', text: '德国物理学家欧姆通过大量实验发现：对于金属导体，在温度不变时，通过导体的电流 I 跟导体两端的电压 U 成正比。写成公式就是 I = U / R，也可以写成 U = I × R。这就是欧姆定律。它表明：在电阻一定时，电压越大，电流越大；在电压一定时，电阻越大，电流越小。' },
      { type: 'keypoint', label: '重点·欧姆定律', text: '<strong>内容：导体中的电流 I 跟它两端的电压 U 成正比，跟它的电阻 R 成反比，即 I = U / R（适用条件：金属、电解液等线性导体，温度不变）。</strong>' },
      { type: 'tip', label: '提示·三个公式的关系', text: '<strong>I = U / R 是欧姆定律（反映 I、U、R 的数量关系）；R = U / I 是电阻的量度式；真正决定电阻大小的公式在下一节课讲（R = ρ × l / S）。</strong>三者不要混为一谈。' },
      { type: 'warn', label: '易错·欧姆定律的适用对象', text: '欧姆定律<strong>不是对所有元件都成立</strong>。白炽灯灯丝发热后电阻会随温度变化，严格说不是理想线性；二极管、晶体管等根本不服从 I 与 U 成正比。中学阶段欧姆定律主要用于金属导体和电解液，且默认温度不变。' },
      { type: 'heading', text: '四、伏安特性曲线' },
      { type: 'paragraph', text: '把导体两端的电压 U 作为横轴、通过的电流 I 作为纵轴，画出 I 随 U 变化的图像，就是伏安特性曲线。对于遵守欧姆定律的导体（叫线性元件），I 与 U 成正比，图像是一条过原点的直线，斜率等于 1/R，斜率越大说明电阻越小。' },
      { type: 'table', headers: ['图像特征', '代表元件', '电阻特点'], rows: [['过原点的直线', '金属导线、定值电阻', '电阻不变（线性元件）'], ['向下弯曲的曲线', '白炽灯灯丝（升温）', '电阻随电压增大而变大'], ['弯向另一侧的曲线', '二极管等半导体', '不服从欧姆定律']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">伏安特性曲线：线性元件是一条过原点的直线</text><rect x="90" y="70" width="240" height="190" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="90" y1="260" x2="330" y2="260" stroke="#234b45" stroke-width="2"/><line x1="90" y1="260" x2="90" y2="70" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="320" y2="90" stroke="#1f7a6e" stroke-width="3"/><text x="210" y="285" font-size="12" fill="#234b45" text-anchor="middle">电压 U</text><text x="60" y="160" font-size="12" fill="#234b45" text-anchor="middle">电流 I</text><rect x="390" y="70" width="240" height="190" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="390" y1="260" x2="630" y2="260" stroke="#234b45" stroke-width="2"/><line x1="390" y1="260" x2="390" y2="70" stroke="#234b45" stroke-width="2"/><path d="M 390 260 Q 510 250 630 110" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="510" y="285" font-size="12" fill="#234b45" text-anchor="middle">电压 U</text><text x="360" y="160" font-size="12" fill="#234b45" text-anchor="middle">电流 I</text><text x="190" y="58" font-size="12" fill="#1f7a6e">直线：线性元件</text><text x="500" y="58" font-size="12" fill="#4fb3a5">曲线：非线性</text></svg>', caption: '图2　左图为线性元件的伏安特性曲线（过原点直线），右图为非线性元件（如灯丝）的曲线。' },
      { type: 'paragraph', text: '用伏安特性曲线还能比较电阻大小：在同一条直线上，斜率 k = I/U = 1/R，所以斜率越陡（越接近竖直），电阻越小；斜率越平缓，电阻越大。若图像不是直线，则不同电压下对应电阻不同，这时 R = U/I 仍可算出该工作状态下的电阻值。' },
      { type: 'example', label: '例题·从曲线看电阻', text: '某定值电阻的伏安特性曲线上一点：U = 4 V 时 I = 0.2 A。求它的电阻，并判断它是否线性元件。<br><br><strong>解析</strong>：<br>由 R = U / I = 4 / 0.2 = 20 Ω。<br>因为对线性元件，任意一点的 U/I 都相同，且图像为过原点直线，故该电阻为 20 Ω 的线性元件（金属定值电阻）。' },
      { type: 'list', items: ['伏安特性曲线以 U 为横轴、I 为纵轴', '线性元件图像是过原点直线，斜率 = 1/R', '非线性元件（灯丝、二极管）图像是曲线，R 随工作状态变化', 'R = U / I 在任何工作点都可用，用来算该点的电阻值'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">欧姆定律 I = U / R 与电阻无关性</text><rect x="80" y="80" width="220" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="130" font-size="18" fill="#1f7a6e" text-anchor="middle" font-weight="bold">I = U / R</text><text x="190" y="162" font-size="13" fill="#234b45" text-anchor="middle">U 越大 I 越大（R 定）</text><rect x="380" y="80" width="220" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="120" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">R 由导体本身决定</text><text x="490" y="152" font-size="13" fill="#234b45" text-anchor="middle">与 U、I 无关</text><text x="490" y="178" font-size="13" fill="#234b45" text-anchor="middle">U=0 时 R 不变</text></svg>', caption: '图3　左：欧姆定律 I = U/R 表示电流与电压成正比；右：电阻 R 是导体本身性质，不随电压电流改变。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电阻定义式 R = U / I，下列说法正确的是？', options: ['导体两端电压越大，电阻就越大', '通过导体的电流越大，电阻就越小', '电阻由导体本身性质决定，与 U、I 无关', '只有加电压时导体才有电阻'], answer: '电阻由导体本身性质决定，与 U、I 无关', explanation: 'R = U / I 是电阻的"量度式"，用来通过测得的电压、电流算出电阻值。导体的电阻由材料、长度、横截面积和温度等自身因素决定，与是否加电压、加多大电压、电流多大都没有关系。即使不加电压（U=0、I=0），导体的电阻依然存在，不会变成零。' },
      { type: 'choice', question: '对于遵守欧姆定律的线性导体，其伏安特性曲线（U 为横轴，I 为纵轴）是？', options: ['一条不过原点的直线', '一条过原点的直线', '一条向下弯曲的曲线', '一条水平直线'], answer: '一条过原点的直线', explanation: '线性导体满足 I 与 U 成正比，当 U = 0 时 I = 0，所以图像过原点；正比关系在坐标图上表现为一条过原点的直线。直线的斜率 k = I/U = 1/R，斜率越大表示电阻越小。向下弯曲的曲线是非线性元件（如灯丝升温）的特征。' },
      { type: 'choice', question: '一段导体两端电压为 12 伏时电流为 0.4 安，则其电阻为？', options: ['4.8 Ω', '30 Ω', '48 Ω', '3 Ω'], answer: '30 Ω', explanation: '根据电阻定义式 R = U / I，代入 U = 12 V，I = 0.4 A，得 R = 12 / 0.4 = 30 Ω。也可以由欧姆定律 I = U/R 变形得到同样结果。这里直接用总电压除以总电流即可。' },
      { type: 'fill', question: '欧姆定律的内容是：导体中的电流 I 跟它两端的电压 U 成___，跟它的电阻 R 成___（填"正比"或"反比"）；其公式为 I = ___。', answer: '正比|反比|U / R', explanation: '欧姆定律指出，在温度不变时，导体中的电流 I 与导体两端的电压 U 成正比，与导体的电阻 R 成反比，公式为 I = U / R。也可以写成交互形式 U = I × R 和 R = U / I。该定律适用于金属导体和电解液等线性元件，对二极管等非线性元件不适用。' },
      { type: 'fill', question: '在伏安特性曲线（U 为横轴、I 为纵轴）中，线性元件图像的斜率 k = I / U = ___（用 R 表示），所以斜率越大，电阻越___（填"大"或"小"）。', answer: '1 / R|小', explanation: '线性元件的伏安特性曲线是过原点直线，斜率 k = I / U。由欧姆定律 I = U / R 可得 I / U = 1 / R，所以 k = 1 / R。由此可知，斜率越大代表 1/R 越大，即电阻 R 越小；斜率越平缓代表电阻越大。这个关系常用于从图像直观地比较电阻大小。' }
    ]
  });
})();
