/* ============================================================
 * 高三数学 · 总复习专题四 立体几何 · 第5单元 平行关系与垂直关系
 * 第1课时：平行关系（线面平行、面面平行）
 * 第2课时：垂直关系（线面垂直、面面垂直）
 * 数据注入：math.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume("math", "zt4");
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 平行关系（线面平行、面面平行） ---------------- */
    {
      id: "zt4-u5-l1",
      name: "平行关系（线面平行、面面平行）",
      chapter: "立体几何复习 · 六 平行关系",
      difficulty: "中等",
      content: [
        { type: "heading", text: "一、线面平行（直线与平面平行）" },
        { type: "paragraph", text: "直线与平面平行是立体几何中最基本的平行关系之一。日常生活中，墙面与地面交线所在的直线与另一墙面平行，就是典型的线面平行。研究线面平行，核心在于把空间中的平行转化为平面内的平行。" },
        { type: "keypoint", label: "重点·判定", text: "<strong>线面平行判定定理</strong>：如果<strong>平面外一条直线</strong>与此<strong>平面内的一条直线平行</strong>，那么该直线与此平面平行。符号表示：a ⊄ α，b ⊂ α，a ∥ b ⇒ a ∥ α。<br>关键：在平面 α 内<strong>找到一条与 a 平行的直线 b</strong>，这是证明线面平行的突破口。" },
        { type: "svg", svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><polygon points="150,150 470,110 600,200 280,240" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="320" y="98" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">平面 α</text><line x1="285" y1="178" x2="505" y2="151" stroke="#2b5b9e" stroke-width="3"/><text x="525" y="156" font-size="16" fill="#2b5b9e">b</text><line x1="285" y1="82" x2="505" y2="55" stroke="#2b5b9e" stroke-width="3"/><text x="525" y="60" font-size="16" fill="#2b5b9e">a</text><text x="380" y="30" font-size="16" fill="#33536e" text-anchor="middle">a ∥ b 且 a 不在 α 内 ⇒ a ∥ α</text></svg>`, caption: "图1　线面平行判定：平面 α 外的直线 a 平行于平面 α 内的直线 b，则 a ∥ α。" },
        { type: "keypoint", label: "重点·性质", text: "<strong>线面平行性质定理</strong>：如果一条直线和一个平面平行，经过这条直线的<strong>平面</strong>和这个平面<strong>相交</strong>，那么这条直线就和<strong>交线平行</strong>。符号表示：a ∥ α，a ⊂ β，α ∩ β = b ⇒ a ∥ b。" },
        { type: "svg", svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="120,170 470,130 560,220 210,260" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="300" y="118" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">平面 α</text><polygon points="120,170 470,130 470,40 120,80" fill="#dce8f7" stroke="#7a5aa0" stroke-width="2" opacity="0.85"/><text x="300" y="60" font-size="17" fill="#7a5aa0" text-anchor="middle" font-weight="bold">平面 β</text><line x1="120" y1="170" x2="470" y2="130" stroke="#c0392b" stroke-width="3"/><text x="488" y="134" font-size="16" fill="#c0392b">b</text><line x1="120" y1="120" x2="470" y2="80" stroke="#2b5b9e" stroke-width="3"/><text x="488" y="84" font-size="16" fill="#2b5b9e">a</text><text x="340" y="255" font-size="16" fill="#33536e" text-anchor="middle">a ∥ α，a ⊂ β，α ∩ β = b ⇒ a ∥ b</text></svg>`, caption: "图2　线面平行性质：过直线 a 的平面 β 与 α 的交线 b 必与 a 平行。" },
        { type: "paragraph", text: "性质定理告诉我们：线面平行可以传递为线线平行。它常用于两种情形：一是已知线面平行，证明某条线线平行；二是通过构造过已知直线的辅助平面，把空间平行关系拉回到同一平面内处理。" },
        { type: "heading", text: "二、面面平行（平面与平面平行）" },
        { type: "paragraph", text: "两个平面平行意味着它们没有公共点。判定面面平行，常用的方法是在一个平面内找到两条相交直线分别平行于另一个平面，这样就把面面问题转化为更简单的线面问题。" },
        { type: "keypoint", label: "重点·判定1", text: "<strong>面面平行判定1</strong>：如果一个平面内有<strong>两条相交直线</strong>都平行于另一个平面，那么这两个平面平行。符号表示：a ⊂ α，b ⊂ α，a ∩ b = P，a ∥ β，b ∥ β ⇒ α ∥ β。" },
        { type: "keypoint", label: "重点·判定2", text: "<strong>面面平行判定2</strong>：垂直于<strong>同一条直线</strong>的两个平面平行。符号表示：l ⊥ α，l ⊥ β ⇒ α ∥ β。" },
        { type: "svg", svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="360,150 620,110 660,210 400,250" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="510" y="100" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">平面 β</text><polygon points="60,120 320,80 360,180 100,220" fill="#dce8f7" stroke="#7a5aa0" stroke-width="2.5"/><text x="200" y="70" font-size="17" fill="#7a5aa0" text-anchor="middle" font-weight="bold">平面 α</text><line x1="120" y1="150" x2="300" y2="120" stroke="#2b5b9e" stroke-width="3"/><text x="312" y="124" font-size="16" fill="#2b5b9e">a</text><line x1="150" y1="200" x2="250" y2="110" stroke="#c0392b" stroke-width="3"/><text x="262" y="108" font-size="16" fill="#c0392b">b</text><line x1="300" y1="120" x2="600" y2="130" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 5"/><line x1="250" y1="110" x2="560" y2="120" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 5"/><text x="340" y="255" font-size="16" fill="#33536e" text-anchor="middle">a ∥ β，b ∥ β，a ∩ b = P ⇒ α ∥ β</text></svg>`, caption: "图3　面面平行判定：平面 α 内两条相交直线 a、b 都平行于 β，则 α ∥ β。" },
        { type: "keypoint", label: "重点·性质", text: "<strong>面面平行性质</strong>：① 若 α ∥ β，则 α 内的<strong>任意一条直线</strong>都平行于 β；② 若两个平行平面同时被第三个平面所截，那么它们的<strong>交线平行</strong>。即 α ∥ β，α ∩ γ = a，β ∩ γ = b ⇒ a ∥ b。" },
        { type: "list", items: ["判定线面平行：在平面内找一条与已知直线平行的直线", "判定面面平行：在一个面内找两条相交直线分别平行于另一面", "证明平行时，常构造辅助平面，把空间关系转化为平面内的关系", "运用性质定理求线段比时，注意平行带来的相似或比例关系"] },
        { type: "example", label: "例题1", text: "在正方体 ABCD-A₁B₁C₁D₁ 中，证明：A₁C₁ ∥ 平面 ABCD。<br><br><strong>分析</strong>：要证线面平行，只需在平面 ABCD 内找一条与 A₁C₁ 平行的直线。<br><strong>证明</strong>：在正方体中，上底面 A₁B₁C₁D₁ 与下底面 ABCD 平行，且对应边互相平行，故 A₁C₁ ∥ AC。又 AC ⊂ 平面 ABCD，且 A₁C₁ 不在平面 ABCD 内，由线面平行判定定理得 A₁C₁ ∥ 平面 ABCD。" },
        { type: "warn", label: "易错", text: "使用<strong>线面平行性质定理</strong>时，必须先<strong>构造（或过已知直线作）一个平面</strong>与已知平面相交，得到交线后才能用 a ∥ b。常见错误是：只由 a ∥ α 直接断言 a 与 α 内某条任意直线平行——这是错误的，a 只与那条特定的交线平行，与面内其他直线可能异面。" },
        { type: "example", label: "例题2", text: "在正方体 ABCD-A₁B₁C₁D₁ 中，证明：平面 A₁BD ∥ 平面 B₁CD₁。<br><br><strong>分析</strong>：在一个平面内找两条相交直线，分别平行于另一个平面。<br><strong>证明</strong>：在正方体中，A₁D ∥ B₁C 且 A₁D = B₁C，故 A₁D ∥ 平面 B₁CD₁（线面平行判定）；同理 A₁B ∥ D₁C，故 A₁B ∥ 平面 B₁CD₁。又 A₁D 与 A₁B 相交于点 A₁，且都在平面 A₁BD 内，由面面平行判定1得平面 A₁BD ∥ 平面 B₁CD₁。" },
        { type: "tip", label: "提示", text: "抓“交线”是证平行的利器。无论是线面平行性质还是面面平行性质，最终都落到<strong>交线平行</strong>上。解题时先想清楚要找哪条交线，再构造相应的辅助平面，思路会清晰很多。" },
        { type: "table", headers: ["关系", "判定", "性质"], rows: [["线面平行", "平面外一条直线与面内一条直线平行", "线面平行 ⇒ 过该直线的平面与已知平面的交线与之平行"], ["面面平行", "一个平面内两条相交直线都平行于另一平面（或同垂直于一直线）", "面面平行 ⇒ 面内任一直线平行于另一面；第三平面所截交线平行"]] },
        { type: "paragraph", text: "平行关系的证明遵循由线线平行推线面平行、由线面平行推面面平行的升级路径；反过来，性质定理又允许我们由面面平行推出线面平行、由线面平行推出线线平行降级使用。掌握这条双向通道，大部分平行证明题都能找到突破口。" },
        { type: "list", items: ["线面平行判定：平面外一条直线与面内一条直线平行", "线面平行性质：过该直线的平面与已知平面的交线与之平行", "面面平行判定：面内两相交直线分别平行另一面，或同垂直一直线", "面面平行性质：面内任一直线平行另一面，截得交线平行", "证明关键：在平面内（或构造辅助平面）找平行线、找交线"] }
      ],
      exercises: [
        { type: "choice", question: "下列可作为直线与平面平行判定定理的是？", options: ["平面外一条直线与平面内一条直线平行", "平面外一条直线与平面内一条直线垂直", "直线 a 平行于平面 α 内无数条直线", "直线 a 与平面 α 没有公共点"], answer: "平面外一条直线与平面内一条直线平行", explanation: "线面平行判定定理要求：直线必须在平面外，且与平面内的一条直线平行，才能推出线面平行。选项“垂直”不能推出平行；“无数条平行”可能只是与平面内某一直线平行的一组平行线，不能保证线面平行；“没有公共点”是线面平行的定义而非判定定理。因此正确表述是平面外一条直线与平面内一条直线平行。" },
        { type: "choice", question: "下列命题中正确的是？", options: ["一个平面内两条平行直线都平行于另一平面，则两面平行", "一个平面内两条相交直线都平行于另一平面，则两面平行", "分别在两个平面内的两条直线平行，则两平面平行", "两个平面都平行于同一条直线，则两平面平行"], answer: "一个平面内两条相交直线都平行于另一平面，则两面平行", explanation: "面面平行判定定理要求在一个平面内有两条相交直线分别平行于另一个平面。若只是两条平行直线，则另一平面可能只与这两条直线平行而整体与该平面相交，不能保证平行。分别在两平面内的两条直线平行，无法约束两平面关系；两平面都平行同一条直线时也可能相交。故只有相交直线的表述正确。" },
        { type: "choice", question: "若直线 a ∥ 平面 α，且 a ⊂ 平面 β，α 与 β 相交于直线 b，则 a 与 b 的关系为？", options: ["相交", "平行", "垂直", "异面"], answer: "平行", explanation: "由线面平行的性质定理：若直线 a 平行于平面 α，且过 a 的平面 β 与 α 相交于直线 b，则 a 与交线 b 平行。这是性质定理的直接结论，因此 a 与 b 平行而非相交、垂直或异面。" },
        { type: "fill", question: "线面平行性质定理：若直线 a ∥ 平面 α，过 a 的平面 β 与 α 相交于直线 b，则 a ____ b。（填平行符号或“平行”）", answer: "∥|平行", explanation: "这是线面平行性质定理的结论：线面平行可传递为线线平行，即过该直线的平面与已知平面的交线必与原直线平行。因此应填平行符号“∥”或文字“平行”。解题时常用它把空间中的平行关系转化为同一平面内的平行线关系。" },
        { type: "fill", question: "垂直于同一条直线的____个平面互相平行。（填数字）", answer: "两|2", explanation: "面面平行的判定方法之一：垂直于同一条直线的两个平面互相平行。这是将线线垂直转化为面面平行的简洁途径，常见应用是证明两个平面平行时，只需找到同时垂直于它们的一条直线即可。" }
      ]
    },

    /* ---------------- 第2课时 垂直关系（线面垂直、面面垂直） ---------------- */
    {
      id: "zt4-u5-l2",
      name: "垂直关系（线面垂直、面面垂直）",
      chapter: "立体几何复习 · 六 垂直关系",
      difficulty: "中等",
      content: [
        { type: "heading", text: "一、线面垂直（直线与平面垂直）" },
        { type: "paragraph", text: "直线与平面垂直是立体几何中最重要的垂直关系。旗杆与地面垂直、墙角线与地面垂直，都是线面垂直的直观模型。判定线面垂直，关键是抓住两条相交直线。" },
        { type: "keypoint", label: "重点·判定", text: "<strong>线面垂直判定定理</strong>：如果一条直线和一个平面内的<strong>两条相交直线</strong>都垂直，那么这条直线垂直于这个平面。符号表示：m ⊂ α，n ⊂ α，m ∩ n = P，l ⊥ m，l ⊥ n ⇒ l ⊥ α。<br>关键：必须是<strong>两条相交</strong>直线，仅垂直于两条平行直线不能推出线面垂直。" },
        { type: "svg", svg: `<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#eef4fc"/><polygon points="120,200 440,150 600,210 280,260" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="330" y="140" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">平面 α</text><line x1="250" y1="230" x2="470" y2="178" stroke="#2b5b9e" stroke-width="3"/><text x="482" y="182" font-size="16" fill="#2b5b9e">m</text><line x1="300" y1="180" x2="400" y2="240" stroke="#c0392b" stroke-width="3"/><text x="410" y="248" font-size="16" fill="#c0392b">n</text><line x1="350" y1="205" x2="350" y2="70" stroke="#2b5b9e" stroke-width="3.5"/><text x="362" y="80" font-size="16" fill="#2b5b9e">l</text><polyline points="350,205 365,205 365,190" fill="none" stroke="#5a7a2a" stroke-width="2"/><text x="350" y="280" font-size="16" fill="#33536e" text-anchor="middle">l ⊥ m 且 l ⊥ n，m ∩ n = P ⇒ l ⊥ α</text></svg>`, caption: "图1　线面垂直判定：直线 l 垂直于平面 α 内两条相交直线 m、n，则 l ⊥ α。" },
        { type: "keypoint", label: "重点·性质1", text: "<strong>线面垂直性质1</strong>：如果一条直线垂直于一个平面，那么它<strong>垂直于平面内任意一条直线</strong>。即 l ⊥ α，a ⊂ α ⇒ l ⊥ a。" },
        { type: "keypoint", label: "重点·性质2", text: "<strong>线面垂直性质2</strong>：垂直于<strong>同一个平面</strong>的两条直线<strong>平行</strong>。即 a ⊥ α，b ⊥ α ⇒ a ∥ b。" },
        { type: "svg", svg: `<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#eef4fc"/><polygon points="120,180 460,130 600,200 260,250" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="330" y="120" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">平面 α</text><line x1="350" y1="190" x2="350" y2="60" stroke="#2b5b9e" stroke-width="3.5"/><text x="362" y="70" font-size="16" fill="#2b5b9e">l</text><line x1="240" y1="215" x2="460" y2="165" stroke="#5a7a2a" stroke-width="2.5"/><line x1="270" y1="170" x2="430" y2="220" stroke="#5a7a2a" stroke-width="2.5"/><line x1="200" y1="200" x2="500" y2="190" stroke="#5a7a2a" stroke-width="2.5"/><text x="350" y="255" font-size="16" fill="#33536e" text-anchor="middle">l ⊥ α ⇒ l ⊥ α 内的任意一条直线</text></svg>`, caption: "图2　线面垂直性质：l ⊥ α 时，l 垂直于平面 α 内的任意一条直线。" },
        { type: "paragraph", text: "线面垂直的性质2常被用来证明线线平行：只要两条直线都垂直于同一平面，它们就互相平行。这一结论在作图与计算中非常实用。" },
        { type: "heading", text: "二、面面垂直（平面与平面垂直）" },
        { type: "paragraph", text: "两个平面相交成直二面角时，称这两个平面互相垂直。房间相邻的两面墙、墙面与地面，都构成面面垂直。" },
        { type: "keypoint", label: "重点·判定", text: "<strong>面面垂直判定定理</strong>：如果一个平面<strong>经过</strong>另一个平面的一条<strong>垂线</strong>，那么这两个平面互相垂直。符号表示：l ⊥ β，l ⊂ α ⇒ α ⊥ β。" },
        { type: "keypoint", label: "重点·性质", text: "<strong>面面垂直性质定理</strong>：若两个平面垂直，则一个平面内<strong>垂直于交线</strong>的直线垂直于另一个平面。符号表示：α ⊥ β，α ∩ β = l，a ⊂ α，a ⊥ l ⇒ a ⊥ β。<br>这条性质是由面面垂直推出线面垂直的桥梁，是高考高频考点。" },
        { type: "svg", svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="80,160 420,120 480,200 140,240" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="250" y="110" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">平面 α</text><polygon points="80,160 420,120 420,40 80,80" fill="#dce8f7" stroke="#7a5aa0" stroke-width="2.5"/><text x="250" y="60" font-size="17" fill="#7a5aa0" text-anchor="middle" font-weight="bold">平面 β</text><line x1="80" y1="160" x2="420" y2="120" stroke="#c0392b" stroke-width="3"/><text x="432" y="124" font-size="16" fill="#c0392b">l（交线）</text><line x1="250" y1="140" x2="250" y2="60" stroke="#2b5b9e" stroke-width="3"/><text x="262" y="70" font-size="16" fill="#2b5b9e">m</text><polyline points="250,140 268,140 268,122" fill="none" stroke="#5a7a2a" stroke-width="2"/><text x="350" y="262" font-size="16" fill="#33536e" text-anchor="middle">α ⊥ β，m ⊂ β，m ⊥ l ⇒ m ⊥ α</text></svg>`, caption: "图3　面面垂直性质：在 β 内作交线 l 的垂线 m，则 m ⊥ α。" },
        { type: "list", items: ["判定线面垂直：证直线垂直于面内两条相交直线", "判定面面垂直：证一个面经过另一个面的一条垂线", "由面面垂直证线面垂直：在面内作交线的垂线", "性质2（同垂直一平面则线线平行）常用于证平行、求距离"] },
        { type: "example", label: "例题1", text: "在正方体 ABCD-A₁B₁C₁D₁ 中，证明：A₁C ⊥ 平面 BDC₁。<br><br><strong>分析</strong>：只需证 A₁C 垂直于平面 BDC₁ 内两条相交直线。<br><strong>证明</strong>：连接 A₁C。在正方体中，A₁C ⊥ BD（可用向量法验证：体对角线与底面对角线垂直）；又 A₁C ⊥ BC₁（同理）。而 BD 与 BC₁ 相交于点 B，且都在平面 BDC₁ 内，故由线面垂直判定定理得 A₁C ⊥ 平面 BDC₁。" },
        { type: "warn", label: "易错", text: "线面垂直判定定理中“两条相交直线”的<strong>相交</strong>二字绝不可省。若只证得直线垂直于平面内两条<strong>平行</strong>直线，则该直线未必垂直于平面，它可能与平面斜交。书写证明时必须明确指出这两条直线相交。" },
        { type: "example", label: "例题2", text: "在正方体 ABCD-A₁B₁C₁D₁ 中，证明：平面 A₁ACC₁ ⊥ 平面 BDC₁。<br><br><strong>分析</strong>：证一个平面经过另一个平面的一条垂线。<br><strong>证明</strong>：由例题1 知 A₁C ⊥ 平面 BDC₁。而 A₁C ⊂ 平面 A₁ACC₁（A₁、C 均在该对角面内，连线 A₁C 即其对角线）。于是平面 A₁ACC₁ 经过平面 BDC₁ 的一条垂线 A₁C，由面面垂直判定定理得平面 A₁ACC₁ ⊥ 平面 BDC₁。" },
        { type: "tip", label: "提示", text: "由面面垂直证线面垂直是高频套路：已知 α ⊥ β 且交线为 l，要在 α 内证某直线 a ⊥ β，只需在 α 内证 a ⊥ l，再用性质定理即可。记住先找交线，再作交线的垂线。" },
        { type: "example", label: "例题3", text: "如图，平面 α ⊥ 平面 β，α ∩ β = l，点 A ∈ α，AB ⊥ l 于 B，且 AB = 3，点 C ∈ β 满足 BC = 4 且 BC ⊥ l。求点 A 到平面 β 的距离。<br><br><strong>解</strong>：因为 α ⊥ β，AB ⊂ α，AB ⊥ l，由面面垂直性质定理得 AB ⊥ β。因此线段 AB 的长就是点 A 到平面 β 的距离。已知 AB = 3，故点 A 到平面 β 的距离为 3。（BC 用于确定点 C 的位置，与所求距离无关。）" },
        { type: "table", headers: ["关系", "判定", "性质"], rows: [["线面垂直", "直线垂直于面内两条相交直线", "垂直于面内任意直线；同垂直一平面的两直线平行"], ["面面垂直", "一个平面经过另一个平面的一条垂线", "面内垂直于交线的直线垂直于另一个平面"]] },
        { type: "paragraph", text: "垂直关系与平行关系类似，也遵循线线垂直 → 线面垂直 → 面面垂直的升级，以及性质定理的降级使用。其中由面面垂直结合交线垂线得线面垂直，是连接两类关系、也是连接垂直与距离计算的枢纽，务必熟练掌握。" },
        { type: "list", items: ["线面垂直判定：直线垂直于面内两条相交直线（相交不可省）", "线面垂直性质：垂直于面内任一直线；同垂直一平面则线线平行", "面面垂直判定：一个面经过另一个面的一条垂线", "面面垂直性质：面内垂直于交线的直线垂直于另一面", "常用：由面面垂直找交线垂线，得线面垂直并求距离"] }
      ],
      exercises: [
        { type: "choice", question: "要由直线 l 垂直于平面 α 内的一组直线推出 l ⊥ α，这组直线必须满足的条件是？", options: ["两条平行直线", "两条相交直线", "无数条平行直线", "一条直线"], answer: "两条相交直线", explanation: "线面垂直判定定理要求直线垂直于平面内两条相交直线，相交条件缺一不可。若只垂直于两条平行直线，该直线可能倾斜于平面而不垂直；仅垂直于一条直线更不充分。只有两条相交直线才能张成整个平面，从而确定垂直关系。" },
        { type: "choice", question: "平面 α ⊥ 平面 β 的一个充分条件是？", options: ["α 内有一条直线平行于 β", "α 内有一条直线垂直于 β", "α 与 β 都垂直于同一平面", "α 与 β 的交线垂直于某直线"], answer: "α 内有一条直线垂直于 β", explanation: "面面垂直判定定理：若一个平面经过另一个平面的一条垂线，则两平面垂直。即只要 α 内有一条直线垂直于 β，这条直线就在 α 内且垂直于 β，于是 α 经过 β 的垂线，从而 α ⊥ β。其余选项均不能保证两平面垂直。" },
        { type: "choice", question: "已知平面 α ⊥ 平面 β，α ∩ β = l，直线 m ⊂ β 且 m ⊥ l，则 m 与 α 的关系是？", options: ["m ∥ α", "m ⊥ α", "m 与 α 相交但不垂直", "m ⊂ α"], answer: "m ⊥ α", explanation: "由面面垂直性质定理：若两平面垂直，则一个平面内垂直于交线的直线垂直于另一个平面。已知 m 在 β 内且垂直于交线 l，直接推出 m ⊥ α。这正是由面面垂直证线面垂直的标准用法。" },
        { type: "fill", question: "线面垂直性质2：垂直于同一个平面的两条直线互相____。（填“平行”或“垂直”）", answer: "平行", explanation: "垂直于同一平面的两条直线互相平行，这是线面垂直的重要性质，常用于由垂直关系证明线线平行。例如两根都垂直于地面的旗杆彼此平行，就是这个性质的现实体现。" },
        { type: "fill", question: "由面面垂直证线面垂直时，关键是：在一个平面内作____的垂线。（填“交线”或“平行线”）", answer: "交线", explanation: "面面垂直性质定理指出：在两平面垂直的前提下，一个平面内垂直于交线的直线垂直于另一个平面。因此要证线面垂直，必须先确定两平面的交线，再在其中一个平面内作交线的垂线，这条垂线即垂直于另一平面。" }
      ]
    }

  );
})();
