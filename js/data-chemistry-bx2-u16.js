/* ============================================================
 * 高一化学 · 必修 第二册 · 第七章 有机化合物
 * 课时16：基本营养物质
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u16',
    name: '基本营养物质',
    chapter: '必修 第二册 · 第七章 有机化合物',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、人体三大营养物质' },
      { type: 'paragraph', text: '我们每天吃进肚子里的食物，真正用来维持生命的"干货"主要是三类：糖类、油脂、蛋白质。它们都含碳，属于有机物，也是这一章"有机化合物"大家庭里和我们身体最贴近的成员。米饭、馒头提供糖类，油肉提供油脂，蛋奶鱼肉提供蛋白质。' },
      { type: 'keypoint', label: '重点·三大营养物质', text: '<strong>糖类、油脂、蛋白质是人类的基本营养物质。</strong>它们都能在体内被氧化释放能量，其中糖类是主要供能物质，油脂是高效储能物质，蛋白质既是结构材料也能供能，还参与生命活动调节。' },
      { type: 'paragraph', text: '这三类物质还有一个共同点：大多由碳、氢、氧三种元素组成（蛋白质还含氮，有的含硫），分子都比较大，进入身体后要先被消化、拆解成小分子，才能被吸收利用。' },
      { type: 'list', items: ['糖类：主要来自米、面、薯类，是首选能量来源', '油脂：来自植物油和动物脂肪，储能效率高', '蛋白质：来自肉、蛋、奶、豆，是身体的"建筑材料"'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">人体三大基本营养物质</text><rect x="40" y="80" width="180" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="130" y="125" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">糖类</text><text x="130" y="155" font-size="12" fill="#d98e3a" text-anchor="middle">葡萄糖、淀粉</text><rect x="250" y="80" width="180" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="125" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">油脂</text><text x="340" y="155" font-size="12" fill="#d98e3a" text-anchor="middle">植物油、脂肪</text><rect x="460" y="80" width="180" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="550" y="125" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">蛋白质</text><text x="550" y="155" font-size="12" fill="#d98e3a" text-anchor="middle">肉、蛋、奶</text><text x="340" y="245" font-size="13" fill="#4a3724" text-anchor="middle">三者都含 C、H、O，蛋白质还含 N，都能氧化释放能量</text></svg>', caption: '图1　糖类、油脂、蛋白质是人体三大基本营养物质，都含碳、氢、氧，都能提供能量。' },
      { type: 'heading', text: '二、糖类——能量的主力' },
      { type: 'paragraph', text: '糖类也叫碳水化合物，多数由碳、氢、氧组成，许多式子能写成 Cₘ(H₂O)ₙ 的样子。葡萄糖是最常见、最重要的单糖，化学式 C₆H₁₂O₆，吃起来甜、能直接被细胞拿去"燃烧"供能。我们吃的白糖（蔗糖）、体内的淀粉，最终大多要变成葡萄糖才能被利用。' },
      { type: 'warn', label: '易错·糖不都甜，也不都符合通式', text: '别以为"甜"才是糖：<strong>淀粉、纤维素并不甜，但也是糖（多糖）</strong>；反过来，糖精甜却不是糖。另外，多数糖可写成 Cₘ(H₂O)ₙ，但也有例外（如脱氧核糖 C₅H₁₀O₄），所以"碳水化合物"只是习惯叫法，不能当成严格定义。' },
      { type: 'table', headers: ['类别', '举例', '化学式/通式', '特点'], rows: [['单糖', '葡萄糖、果糖', 'C₆H₁₂O₆', '不能水解，直接供能'], ['二糖', '蔗糖、麦芽糖', 'C₁₂H₂₂O₁₁', '水解成两分子单糖'], ['多糖', '淀粉、纤维素', '(C₆H₁₀O₅)ₙ', '高分子，水解最终成葡萄糖']] },
      { type: 'keypoint', label: '重点·葡萄糖的特征', text: '<strong>葡萄糖 C₆H₁₂O₆ 分子里既有多个羟基 —OH，又含一个醛基 —CHO。</strong>醛基让它能发生特征反应：与新制的氢氧化铜反应生成砖红色沉淀，或在碱性条件下发生银镜反应。这两类现象常用来检验葡萄糖（也就是检验醛基）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">糖的分类：从单糖到多糖</text><rect x="40" y="80" width="180" height="110" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="130" y="120" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">单糖</text><text x="130" y="150" font-size="12" fill="#d98e3a" text-anchor="middle">葡萄糖 C₆H₁₂O₆</text><rect x="250" y="80" width="180" height="110" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="120" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">二糖</text><text x="340" y="150" font-size="12" fill="#d98e3a" text-anchor="middle">蔗糖、麦芽糖</text><rect x="460" y="80" width="180" height="110" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="550" y="120" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">多糖</text><text x="550" y="150" font-size="12" fill="#d98e3a" text-anchor="middle">淀粉 (C₆H₁₀O₅)ₙ</text><text x="340" y="240" font-size="13" fill="#4a3724" text-anchor="middle">多糖和二糖在体内可水解，最终都变成葡萄糖被利用</text></svg>', caption: '图2　糖按能否水解分为单糖、二糖、多糖；多糖如淀粉的通式为 (C₆H₁₀O₅)ₙ，最终水解成葡萄糖。' },
      { type: 'heading', text: '三、淀粉与纤维素——多糖' },
      { type: 'paragraph', text: '淀粉是米饭、馒头、土豆里的主要糖类，化学式可写成 (C₆H₁₀O₅)ₙ，它由许多葡萄糖单元连成，吃下去后会被消化逐步拆解回葡萄糖。淀粉有个绝妙的特征：遇到碘会变成深蓝色，实验室常靠这个颜色变化来检验淀粉。纤维素则是植物细胞壁的"骨架"，人类没法消化它，但它是重要的膳食纤维。' },
      { type: 'example', label: '例题·淀粉检验', text: '要检验某食物中含有淀粉，最简便的方法是加入下列哪种试剂观察颜色？<br>A. 碘<br>B. 石蕊<br>C. 酚酞<br>D. 硫酸铜<br><br><strong>解析</strong>：淀粉遇到碘会形成深蓝色复合物，这是淀粉的<strong>特征反应</strong>，现象明显、操作简便，是检验淀粉最常用的方法。石蕊、酚酞检验酸碱性，硫酸铜用于检验蛋白质（如双缩脲），都不用于检淀粉。因此选 A。' },
      { type: 'heading', text: '四、油脂——高效的储能物质' },
      { type: 'paragraph', text: '油脂是高级脂肪酸和甘油形成的酯，广义也属酯类。同样质量下，油脂在体内氧化放出的能量比糖类还多，所以是身体里高效的"能量仓库"。植物油（如花生油）通常含不饱和键、常温下是液体；动物脂肪（如猪油）含饱和键多、常温下是固体。' },
      { type: 'tip', label: '提示', text: '油脂在体内先被水解成甘油和脂肪酸，再进一步氧化供能；它还能帮助溶解脂溶性维生素（如维生素 A、D、E、K）。但油脂热量高，吃太多容易发胖，所以饮食要均衡，别只盯着油炸食品。' },
      { type: 'heading', text: '五、蛋白质与氨基酸——生命物质' },
      { type: 'paragraph', text: '蛋白质是肌肉、头发、酶、抗体的主要成分，是一切生命活动的"执行者"。它由更小的基本单位——氨基酸连接而成。每个氨基酸分子至少同时带一个氨基 —NH₂ 和一个羧基 —COOH，像两头都能"扣"的小零件；许多氨基酸通过肽键 —NH—CO— 首尾相连，盘绕折叠成蛋白质。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">氨基酸通过肽键连成蛋白质长链</text><rect x="40" y="100" width="120" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="100" y="135" font-size="12" fill="#4a3724" text-anchor="middle" font-weight="bold">氨基酸</text><text x="175" y="135" font-size="16" fill="#b5651d" text-anchor="middle" font-weight="bold">—NH—CO—</text><rect x="290" y="100" width="120" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="350" y="135" font-size="12" fill="#4a3724" text-anchor="middle" font-weight="bold">氨基酸</text><text x="425" y="135" font-size="16" fill="#b5651d" text-anchor="middle" font-weight="bold">—NH—CO—</text><rect x="540" y="100" width="100" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="590" y="135" font-size="12" fill="#4a3724" text-anchor="middle" font-weight="bold">…</text><text x="340" y="225" font-size="13" fill="#4a3724" text-anchor="middle">许多氨基酸靠肽键 —NH—CO— 串成多肽链，再折叠成蛋白质</text></svg>', caption: '图3　蛋白质由氨基酸经肽键 —NH—CO— 连接而成；氨基酸同时含有氨基 —NH₂ 和羧基 —COOH。' },
      { type: 'list', items: ['蛋白质由氨基酸通过肽键 —NH—CO— 连接而成', '氨基酸至少含一个氨基 —NH₂ 和一个羧基 —COOH', '蛋白质是肌肉、酶、抗体的主要成分，参与几乎所有生命活动'] },
      { type: 'example', label: '例题·蛋白质构成', text: '蛋白质的基本组成单位是？<br>A. 葡萄糖<br>B. 氨基酸<br>C. 甘油<br>D. 核苷酸<br><br><strong>解析</strong>：蛋白质是高分子，由许多<strong>氨基酸</strong>通过肽键 —NH—CO— 首尾相连、再折叠而成，所以氨基酸是蛋白质的基本单位。葡萄糖是糖的单位、甘油是油脂的组分、核苷酸是核酸的单位，都不是蛋白质单位。因此选 B。' },
      { type: 'warn', label: '易错·蛋白质变性不可逆', text: '加热、加酸、加重金属盐（如铅离子、铜离子）都会让蛋白质<strong>变性</strong>——空间结构被破坏、凝固沉淀，这个过程一般<strong>不可逆</strong>。所以高温能消毒、重金属中毒危险，都是因为蛋白质变了性。但加盐水析出的蛋白质（盐析）是可逆的，别和变性混为一谈。' }
    ],
    exercises: [
      { type: 'choice', question: '人类的基本营养物质不包括下列哪一类？', options: ['糖类', '油脂', '蛋白质', '氯化钠'], answer: '氯化钠', explanation: '糖类、油脂、蛋白质是人类的三大基本营养物质，都能在体内氧化供能，且都属有机物。氯化钠 NaCl 是无机盐，虽是必需的营养成分，但不属于这三类基本有机营养物质，所以选氯化钠。' },
      { type: 'choice', question: '检验淀粉最简便的特征反应是加入下列哪种试剂出现深蓝色？', options: ['碘', '石蕊', '酚酞', '盐酸'], answer: '碘', explanation: '淀粉遇碘会形成深蓝色的复合物，这是淀粉特有的显色反应，现象明显、操作简便，是检验淀粉最常用的方法。石蕊和酚酞用于检验酸碱性，盐酸不能检验淀粉，因此选碘。' },
      { type: 'choice', question: '蛋白质是由下列哪种基本单位通过肽键连接而成的？', options: ['葡萄糖', '氨基酸', '甘油', '脂肪酸'], answer: '氨基酸', explanation: '蛋白质由许多氨基酸分子通过肽键 —NH—CO— 首尾相连，再盘绕折叠而成，所以氨基酸是蛋白质的基本组成单位。葡萄糖是糖的单位、甘油和脂肪酸是油脂的组分，都不构成蛋白质，因此选氨基酸。' },
      { type: 'fill', question: '葡萄糖的化学式是___，它分子里含有醛基 —CHO，能发生银镜反应或与新制氢氧化铜生成砖红色沉淀。', answer: 'C₆H₁₂O₆', explanation: '葡萄糖是最重要、最常见的单糖，化学式为 C₆H₁₂O₆。它的分子里既有多个羟基 —OH，又含一个醛基 —CHO，醛基能发生银镜反应，也能把新制的氢氧化铜还原成砖红色的氧化亚铜沉淀，这正是检验葡萄糖（检验醛基）的方法。' },
      { type: 'fill', question: '米饭、馒头中的主要多糖淀粉，其化学式可表示为___（n 为葡萄糖单元的个数）。', answer: '(C₆H₁₀O₅)ₙ', explanation: '淀粉是一种多糖，由许多葡萄糖单元脱水缩合连接而成，化学式写成 (C₆H₁₀O₅)ₙ，其中 n 表示重复单元的个数，所以淀粉也是混合物、没有固定单一分子量。它在体内消化时会逐步水解，最终变成葡萄糖被吸收利用。' }
    ]
  });
})();
