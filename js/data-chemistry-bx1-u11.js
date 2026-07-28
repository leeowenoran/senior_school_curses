/* ============================================================
 * 高一化学 · 必修 第一册 · 第二章 海水中的重要元素——钠和氯
 * 课时11：气体摩尔体积与物质的量浓度
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u11',
    name: '气体摩尔体积与物质的量浓度',
    chapter: '必修 第一册 · 第二章 海水中的重要元素——钠和氯',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、气体体积由什么决定' },
      { type: 'paragraph', text: '同样 1 mol 的铁、水、氧气，质量差别很大，体积差别更大：1 mol 铁只有一小块，1 mol 水约 18 毫升，1 mol 氧气在标准状况下却有 22.4 升。为什么气体体积这么"虚胖"？原因在于决定固体、液体体积和决定气体体积的因素不一样。' },
      { type: 'keypoint', label: '重点·影响体积的三因素', text: '<strong>影响物质体积的因素：粒子数目、粒子本身的大小、粒子之间的平均距离。</strong>对固体和液体，粒子间距很小，体积主要由"粒子数 + 粒子大小"决定；对气体，粒子间距远大于粒子本身，体积主要由"粒子数 + 粒子间距"决定。' },
      { type: 'list', items: ['因素一：粒子的数目（相同物质的量粒子数相同）', '因素二：粒子自身的大小（固体液体明显，气体可忽略）', '因素三：粒子间的平均距离（气体体积的主导因素）', '同温同压下，气体粒子间距几乎相同，体积只取决于粒子数'] },
      { type: 'heading', text: '二、气体摩尔体积与 22.4 L/mol' },
      { type: 'paragraph', text: '既然同温同压下气体体积只由粒子数决定，那 1 mol（即相同粒子数）的任何气体，在相同条件下体积就应该差不多大。我们把"单位物质的量的气体所占的体积"叫做气体摩尔体积，符号 V_m，单位 L/mol。' },
      { type: 'keypoint', label: '重点·气体摩尔体积', text: '<strong>气体摩尔体积 V_m = V / n，单位 L/mol。</strong><br><strong>换算：V = n × V_m。</strong><br>在<strong>标准状况（0℃、101 kPa）</strong>下，任何气体的 V_m ≈ 22.4 L/mol。即标准状况下 1 mol 气体体积约为 22.4 L。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">同温同压同体积的不同气体，含相同数目的粒子</text><rect x="60" y="70" width="180" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="150" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">H₂（气体）</text><text x="150" y="140" font-size="13" fill="#4a3724" text-anchor="middle">相同体积 V</text><text x="150" y="168" font-size="13" fill="#d98e3a" text-anchor="middle">粒子数相同</text><rect x="260" y="70" width="180" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="350" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">O₂（气体）</text><text x="350" y="140" font-size="13" fill="#4a3724" text-anchor="middle">相同体积 V</text><text x="350" y="168" font-size="13" fill="#d98e3a" text-anchor="middle">粒子数相同</text><rect x="460" y="70" width="180" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="550" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">CO₂（气体）</text><text x="550" y="140" font-size="13" fill="#4a3724" text-anchor="middle">相同体积 V</text><text x="550" y="168" font-size="13" fill="#d98e3a" text-anchor="middle">粒子数相同</text><text x="340" y="272" font-size="13" fill="#d98e3a" text-anchor="middle">同温同压下，气体体积比 = 粒子数（物质的量）比</text></svg>', caption: '图1　在同温同压下，体积相同的不同气体含有相同数目的分子，这正是阿伏伽德罗定律的通俗表述。' },
      { type: 'table', headers: ['物质状态', '体积主导因素', '1 mol 体积大小'], rows: [['固体', '粒子数 + 粒子本身大小', '较小（如 Fe 约 7 cm³）'], ['液体', '粒子数 + 粒子本身大小', '较小（如 H₂O 约 18 mL）'], ['气体', '粒子数 + 粒子间距（主导）', '很大（标况约 22.4 L）']] },
      { type: 'heading', text: '三、标准状况下的 22.4 L/mol' },
      { type: 'paragraph', text: '"标准状况"指的是 0℃、101 kPa（常写作 S.T.P.）。在这个特定条件下，1 mol 任何气体体积都约为 22.4 L。要特别记住：这个 22.4 L/mol 只对气体成立，对液体和固体完全不适用。' },
      { type: 'keypoint', label: '重点·标准状况计算', text: '<strong>标准状况下：V = n × 22.4 L/mol。</strong><br>例如 2 mol O₂ 在标况下体积 = 2 × 22.4 = 44.8 L。<strong>前提必须同时满足：标准状况 + 该物质是气体。</strong>若不是标况，或物质不是气体，就不能直接用 22.4。' },
      { type: 'example', label: '例题·标况求体积', text: '在标准状况下，5.6 L 氧气 O₂ 的物质的量是多少mol？（已知标况 V_m = 22.4 L/mol）<br><br><strong>解析</strong>：标准状况下气体摩尔体积 V_m = 22.4 L/mol，根据 V = n × V_m，得 n = V / V_m = 5.6 / 22.4 = 0.25 mol。所以 5.6 L 氧气在标况下是 0.25 mol。关键是确认"标况 + 气体"两个条件都满足，才能用 22.4 这个数值。' },
      { type: 'list', items: ['22.4 L/mol 只适用于气体，不适用于液体、固体', '必须是"标准状况"（0℃、101 kPa）', '混合气体也适用，只要是气态', '非标况下气体摩尔体积不是 22.4，需用实际 V_m'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">标准状况下：1 mol 任何气体都约占 22.4 L</text><rect x="60" y="70" width="180" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="150" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">1 mol H₂</text><text x="150" y="140" font-size="13" fill="#4a3724" text-anchor="middle">标况 ≈ 22.4 L</text><text x="150" y="168" font-size="13" fill="#d98e3a" text-anchor="middle">气体</text><rect x="260" y="70" width="180" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="350" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">1 mol CO₂</text><text x="350" y="140" font-size="13" fill="#4a3724" text-anchor="middle">标况 ≈ 22.4 L</text><text x="350" y="168" font-size="13" fill="#d98e3a" text-anchor="middle">气体</text><rect x="460" y="70" width="180" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="550" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">1 mol H₂O</text><text x="550" y="140" font-size="13" fill="#4a3724" text-anchor="middle">≈ 18 mL（≠22.4L）</text><text x="550" y="168" font-size="13" fill="#d98e3a" text-anchor="middle">液体，不适用</text><text x="340" y="272" font-size="13" fill="#d98e3a" text-anchor="middle">22.4 L/mol 只对"标况下的气体"有效</text></svg>', caption: '图2　标准状况下 1 mol 的氢气、二氧化碳都约占 22.4 L，但同样是 1 mol 的水是液体，体积只有约 18 mL，不能用 22.4。' },
      { type: 'heading', text: '四、物质的量浓度 c' },
      { type: 'paragraph', text: '前面学的物质的量 n，描述的是"纯物质里有多少粒子堆"。但实验室配溶液时，我们更关心"每一升溶液里溶了多少 mol 溶质"，这就是物质的量浓度，它是溶液浓度的一种标准表示方法。' },
      { type: 'keypoint', label: '重点·物质的量浓度', text: '<strong>物质的量浓度 c = n（溶质） / V（溶液），单位 mol·L⁻¹（或 mol/L）。</strong><br>表示每 1 升溶液中所含溶质的物质的量。<strong>配制步骤</strong>：计算 → 称量（或量取）→ 溶解（冷却）→ 转移 → 洗涤 → 定容 → 摇匀。' },
      { type: 'list', items: ['计算：按目标浓度和体积算出所需溶质质量或体积', '称量/量取：固体用天平，液体用量筒', '溶解：加水溶解并冷却到室温', '转移与洗涤：全部转入容量瓶并洗涤烧杯', '定容：加水至刻度线，摇匀即得'] },
      { type: 'warn', label: '易错·两个"V"别混淆', text: '<strong>第一，c = n / V 中的 V 是溶液的体积，不是溶剂水的体积</strong>，也不是溶质的体量。配 100 mL 溶液是加水到总体积 100 mL，不是加 100 mL 水。<strong>第二，22.4 L/mol 只用于标况气体</strong>，不能拿来计算溶液体积或物质的量浓度。<strong>第三，容量瓶有固定规格</strong>（如 100 mL、250 mL），定容时液面最低处要正好切刻度线。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">用容量瓶配制一定物质的量浓度的溶液（定容）</text><rect x="280" y="70" width="120" height="180" rx="14" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="296" y="150" width="88" height="92" rx="6" fill="#d98e3a"/><line x1="280" y1="150" x2="400" y2="150" stroke="#b5651d" stroke-width="2"/><text x="340" y="135" font-size="11" fill="#4a3724" text-anchor="middle">刻度线</text><text x="340" y="60" font-size="12" fill="#4a3724" text-anchor="middle" font-weight="bold">容量瓶</text><text x="150" y="170" font-size="13" fill="#4a3724" text-anchor="middle">①溶解冷却</text><text x="150" y="195" font-size="13" fill="#4a3724" text-anchor="middle">②转移洗涤</text><text x="540" y="170" font-size="13" fill="#4a3724" text-anchor="middle">③加水定容</text><text x="540" y="195" font-size="13" fill="#4a3724" text-anchor="middle">④摇匀</text><text x="340" y="278" font-size="13" fill="#d98e3a" text-anchor="middle">定容时视线与刻度线平齐，凹液面最低处切刻度</text></svg>', caption: '图3　配制一定物质的量浓度溶液的关键一步是定容：向容量瓶加水至液面最低处恰好与刻度线相切，再摇匀。' },
      { type: 'tip', label: '提示·定容的视线', text: '定容时眼睛要平视容量瓶的刻度线，让液体"<strong>凹液面的最低处</strong>"恰好与刻度线相切。俯视会让加的水偏少、浓度偏高；仰视会让加的水偏多、浓度偏低。另外溶质溶解时若放热，必须<strong>冷却到室温</strong>再转入容量瓶，否则热胀冷缩会使最终体积不准。' },
      { type: 'example', label: '例题·求浓度', text: '将 0.1 mol 的 NaCl 溶于水，配成 200 mL 的溶液，求该溶液的物质的量浓度？<br><br><strong>解析</strong>：物质的量浓度 c = n / V。注意 V 要用升：200 mL = 0.2 L，n = 0.1 mol。代入得 c = 0.1 / 0.2 = 0.5 mol·L⁻¹。所以该溶液浓度为 0.5 mol·L⁻¹。易错点是忘记把毫升换算成升，若直接用 200 会得到错误的 0.0005，务必统一单位到 L。' }
    ],
    exercises: [
      { type: 'choice', question: '在标准状况下，1 mol 任何气体的体积约为多少？', options: ['22.4 L', '22.4 mL', '11.2 L', '取决于气体种类'], answer: '22.4 L', explanation: '标准状况（0℃、101 kPa）下，气体摩尔体积 V_m 约为 22.4 L/mol，因此 1 mol 任何气体的体积 V = n × V_m = 1 × 22.4 = 22.4 L。注意这个数值只对标况下的气体成立，与气体种类无关，但不适于液体或固体。所以选 22.4 L。' },
      { type: 'choice', question: '物质的量浓度的单位是？', options: ['mol', 'g/L', 'mol·L⁻¹', 'L/mol'], answer: 'mol·L⁻¹', explanation: '物质的量浓度表示每升溶液中所含溶质的物质的量，定义式为 c = n / V，所以单位是 mol 除以 L，即 mol·L⁻¹（也可写作 mol/L）。mol 是物质的量的单位，L/mol 是气体摩尔体积的单位，g/L 是另一种浓度表达。因此选 mol·L⁻¹。' },
      { type: 'choice', question: '在标准状况下，下列物质中体积约为 22.4 L 的是（均为 1 mol）？', options: ['1 mol H₂O（液态）', '1 mol O₂（气态）', '1 mol Fe（固态）', '1 mol NaCl（固态）'], answer: '1 mol O₂（气态）', explanation: '标准状况下 22.4 L/mol 只适用于气体。1 mol O₂ 在标况下是气体，体积约为 22.4 L。而 1 mol H₂O 在标况下是液体（约 18 mL），1 mol Fe 和 1 mol NaCl 都是固体，它们的体积远小于 22.4 L，不能用该数值。故选 1 mol O₂（气态）。' },
      { type: 'fill', question: '在标准状况下，2 mol 氧气 O₂ 的体积 V = n × 22.4 = ___ L。', answer: '44.8', explanation: '标准状况下气体摩尔体积约为 22.4 L/mol，体积公式 V = n × V_m。代入 n = 2 mol、V_m = 22.4 L/mol，得 V = 2 × 22.4 = 44.8 L。所以 2 mol 氧气在标况下体积约为 44.8 升。注意前提是标况且为气体。' },
      { type: 'fill', question: '物质的量浓度的定义式 c = n / ___，其中分母代表溶液的体积（单位 L）。', answer: 'V', explanation: '物质的量浓度 c 等于溶质的物质的量 n 除以溶液的体积 V，即 c = n / V，常用单位 mol·L⁻¹。这里的 V 是溶液的总体积，不是溶剂水的体积，使用时要以升（L）为单位。因此定义式分母应填 V（溶液体积）。' }
    ]
  });
})();
