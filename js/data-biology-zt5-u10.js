/* 生物学 · 高三复习 · 实验与探究 · 第4章 · 课时：提取与分离 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u10',
    name: '第2节 提取与分离',
    chapter: '实验与探究 · 第4章 鉴定与提取类实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第2节 提取与分离' },
      { type: 'paragraph', text: '提取与分离类实验把混合物中的成分分开或提纯。本节包含两大实验：绿叶中色素的提取和分离（纸层析法），以及 DNA 的粗提取与鉴定。' },
      { type: 'keypoint', text: '色素提取原理：色素易溶于有机溶剂无水乙醇，用无水乙醇提取；分离原理：不同色素在层析液中溶解度不同，随层析液在滤纸条上扩散速度不同，即纸层析法。' },
      { type: 'list', items: ['称取绿叶剪碎，加无水乙醇、二氧化硅、碳酸钙。', '研磨：二氧化硅助研磨，碳酸钙保护叶绿素。', '过滤得到含色素的滤液。', '制备滤纸条，画滤液细线，重复几次使线细而齐。', '插入层析液，静置待色素带分离。'] },
      { type: 'table', caption: '四种色素的颜色与位置', headers: ['色素', '颜色', '溶解度', '在滤纸条位置'], rows: [['胡萝卜素', '橙黄色', '最高', '最上端'], ['叶黄素', '黄色', '较高', '上端'], ['叶绿素a', '蓝绿色', '较低', '下端'], ['叶绿素b', '黄绿色', '最低', '最下端']] },
      { type: 'svg', caption: '纸层析色素带结果', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">纸层析色素带结果</text><rect x="280" y="60" width="120" height="260" rx="4" fill="#d6eac4" stroke="#3f7d1e"/><rect x="280" y="70" width="120" height="40" fill="#e8a33d"/><text x="340" y="94" text-anchor="middle" font-size="12" fill="#2e3a22">胡萝卜素</text><rect x="280" y="110" width="120" height="40" fill="#f2d23d"/><text x="340" y="134" text-anchor="middle" font-size="12" fill="#2e3a22">叶黄素</text><rect x="280" y="150" width="120" height="60" fill="#2e7d32"/><text x="340" y="184" text-anchor="middle" font-size="12" fill="#eef6e4">叶绿素a</text><rect x="280" y="210" width="120" height="50" fill="#5aa832"/><text x="340" y="238" text-anchor="middle" font-size="12" fill="#2e3a22">叶绿素b</text><polygon points="430,190 430,206 448,198" fill="#3f7d1e"/><text x="460" y="200" font-size="13" fill="#2e3a22">扩散快在上</text></svg>' },
      { type: 'tip', text: '二氧化硅帮助研磨更充分，碳酸钙防止叶绿素被酸性物质破坏；画滤液细线时层析液不能没及细线，否则色素会直接溶解在层析液中无法分离。' },
      { type: 'paragraph', text: '纸层析后滤纸条上出现四条色素带，从上到下依次是胡萝卜素（橙黄）、叶黄素（黄）、叶绿素a（蓝绿）、叶绿素b（黄绿）。叶绿素a 含量最多、色素带最宽。' },
      { type: 'warn', text: '易错：碳酸钙保护的是叶绿素而不是类胡萝卜素；滤液细线不能触及层析液，否则色素溶解在层析液里而不随纸条扩散，实验失败。' },
      { type: 'example', text: '例题：纸层析结果显示某色素带最宽，它最可能是什么？解析：色素带宽度代表含量多少，叶绿素a 在叶片中含量最多，因此最宽的带通常是蓝绿色的叶绿素a。' },
      { type: 'keypoint', text: 'DNA 粗提取原理：DNA 在不同浓度 NaCl 溶液中溶解度不同；DNA 不溶于酒精，而某些蛋白质溶于酒精，利用体积分数 95% 的冷酒精可使 DNA 析出。' },
      { type: 'list', items: ['破碎细胞：加洗涤剂和食盐，使细胞膜瓦解、DNA 溶解。', '溶解：加入一定浓度 NaCl 溶液使 DNA 充分溶解。', '析出：加入体积分数 95% 的冷酒精，DNA 析出成丝状。', '鉴定：析出物溶于适当浓度 NaCl，加二苯胺沸水浴显蓝色。'] },
      { type: 'svg', caption: 'DNA粗提取与鉴定流程', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">DNA粗提取与鉴定流程</text><rect x="14" y="150" width="120" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="74" y="183" text-anchor="middle" font-size="12" fill="#2e3a22">破碎细胞</text><polygon points="138,170 138,186 154,178" fill="#3f7d1e"/><rect x="156" y="150" width="120" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="216" y="183" text-anchor="middle" font-size="12" fill="#2e3a22">NaCl溶解</text><polygon points="280,170 280,186 296,178" fill="#3f7d1e"/><rect x="298" y="150" width="120" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="358" y="183" text-anchor="middle" font-size="12" fill="#2e3a22">加冷酒精</text><polygon points="422,170 422,186 438,178" fill="#3f7d1e"/><rect x="440" y="150" width="120" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="183" text-anchor="middle" font-size="12" fill="#2e3a22">析出丝状</text><polygon points="564,170 564,186 580,178" fill="#3f7d1e"/><rect x="582" y="150" width="80" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="622" y="183" text-anchor="middle" font-size="12" fill="#2e3a22">鉴定</text><text x="340" y="250" text-anchor="middle" font-size="13" fill="#5aa832">DNA不溶于冷酒精，二苯胺沸水浴显蓝</text></svg>' },
      { type: 'tip', text: '提取植物 DNA 时可加洗涤剂瓦解细胞膜，加食盐溶解 DNA，还可加嫩肉粉（含木瓜蛋白酶）分解蛋白质；析出时用冷却的体积分数 95% 酒精效果更好。' },
      { type: 'paragraph', text: '鉴定时把析出的白色丝状物溶于物质的量浓度 0.015 mol/L 的 NaCl 溶液，加入二苯胺试剂，在沸水浴中加热冷却后溶液呈蓝色，证明提取物含 DNA。' },
      { type: 'warn', text: '易错：DNA 析出用冷却的体积分数 95% 酒精，不是大量无水乙醇；二苯胺鉴定必须沸水浴，直接加热或常温都不出现蓝色。' },
      { type: 'example', text: '例题：DNA 粗提取中两次用到不同浓度 NaCl 溶液，其作用分别是什么？解析：第一次用较高浓度 NaCl 使 DNA 溶解，利用 DNA 在其中的高溶解度；后续通过改变浓度或加酒精使 DNA 析出，体现其在不同盐浓度下溶解度变化的特性。' },
      { type: 'keypoint', text: '酒精在不同实验中浓度与作用不同：无水乙醇提取色素，体积分数 50% 酒精洗去脂肪浮色，体积分数 95% 冷酒精析出 DNA，体积分数 15% 酒精与盐酸混合用于根尖解离。' },
      { type: 'svg', caption: '酒精在不同实验中的作用', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">酒精在不同实验中的作用</text><rect x="40" y="80" width="280" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="110" text-anchor="middle" font-size="13" fill="#2e3a22">无水乙醇：提取色素</text><text x="180" y="134" text-anchor="middle" font-size="12" fill="#5aa832">色素溶于有机溶剂</text><rect x="360" y="80" width="280" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="110" text-anchor="middle" font-size="13" fill="#2e3a22">体积分数50%：洗浮色</text><text x="500" y="134" text-anchor="middle" font-size="12" fill="#5aa832">脂肪鉴定洗去染液</text><rect x="40" y="170" width="280" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="200" text-anchor="middle" font-size="13" fill="#2e3a22">体积分数95%冷：析DNA</text><text x="180" y="224" text-anchor="middle" font-size="12" fill="#5aa832">DNA不溶于冷酒精</text><rect x="360" y="170" width="280" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="200" text-anchor="middle" font-size="13" fill="#2e3a22">体积分数15%：解离</text><text x="500" y="224" text-anchor="middle" font-size="12" fill="#5aa832">与盐酸混合解离根尖</text><polygon points="340,260 340,276 358,268" fill="#3f7d1e"/><text x="340" y="308" text-anchor="middle" font-size="13" fill="#2e3a22">同一试剂不同浓度作用不同</text></svg>' },
      { type: 'tip', text: '实验中用玻璃棒沿同一方向轻缓搅拌，可卷起丝状 DNA；设置对照（如不加二苯胺的空白管）能保证鉴定结果可靠，避免误判。' }
    ],
    exercises: [
      { type: 'choice', question: '提取绿叶中色素所用的试剂是', options: ['A. 蒸馏水', 'B. 无水乙醇', 'C. 层析液', 'D. 体积分数 50% 酒精'], answer: 'B. 无水乙醇', explanation: '色素易溶于有机溶剂，提取绿叶色素用无水乙醇；蒸馏水中色素不溶，层析液用于分离而不是提取，50% 酒精用于脂肪鉴定洗浮色。' },
      { type: 'choice', question: '用纸层析法分离色素时，在滤纸条上扩散最快、位于最上端的色素是', options: ['A. 叶绿素a', 'B. 叶绿素b', 'C. 胡萝卜素', 'D. 叶黄素'], answer: 'C. 胡萝卜素', explanation: '胡萝卜素在层析液中溶解度最高，随层析液扩散速度最快，因此位于滤纸条最上端；叶绿素b 溶解度最低位于最下端。' },
      { type: 'choice', question: 'DNA 粗提取中，使 DNA 析出所用的试剂是', options: ['A. 无水乙醇', 'B. 体积分数 95% 的冷酒精', 'C. 层析液', 'D. 斐林试剂'], answer: 'B. 体积分数 95% 的冷酒精', explanation: 'DNA 不溶于体积分数 95% 的冷酒精，而蛋白质等可溶，因此加冷酒精可使 DNA 析出成丝状；无水乙醇不常用于析出，层析液与斐林试剂不相关。' },
      { type: 'fill', question: '研磨绿叶提取色素时加入少许碳酸钙，目的是防止____在研磨中被破坏。', answer: '叶绿素', explanation: '研磨时细胞破碎会释放有机酸，碳酸钙可中和酸性物质，保护叶绿素不被破坏，从而保证提取到的色素完整、层析带清晰。' },
      { type: 'fill', question: '纸层析时，层析液不能没及滤纸条上的____，否则色素会直接溶解在层析液中。', answer: '滤液细线', explanation: '若层析液没及滤液细线，色素会直接溶入层析液而无法随滤纸扩散分离，导致实验失败，因此细线必须位于层析液液面之上。' }
    ]
  });
})();
