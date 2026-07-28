/* ============================================================
 * 高二物理 · 必修 第三册 · 第十二章 电能 能量守恒定律
 * 课时18：能源与可持续发展
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u18',
    name: '能源与可持续发展',
    chapter: '必修第三册 · 第十二章 电能 能量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、能量守恒定律——能量不会凭空消失' },
      { type: 'paragraph', text: '你一定有这样的生活经验：手搓一搓会发热，是因为机械能变成了内能；电池点亮灯泡，是因为化学能变成了电能再变成光能。古时候有人幻想造出"永动机"——不消耗能量却能一直对外做功。然而几百年来无数尝试都失败了，原因正是大自然有一条铁律：能量既不会凭空产生，也不会凭空消失。' },
      { type: 'keypoint', label: '重点·能量守恒定律', text: '<strong>能量既不会凭空产生，也不会凭空消失，它只能从一种形式转化为别的形式，或者从一个物体转移到别的物体；在转化或转移的过程中，能量的总量保持不变。</strong>也就是说，能量只会"改头换面"或"搬家"，总数永远不变。' },
      { type: 'paragraph', text: '这条定律是物理学最重要的基石之一。我们在第十一章、第十二章学过的机械能守恒、电能守恒，其实都是能量守恒定律的"特例"。只要把参与转化和转移的所有能量都算上，总能量一定守恒。比如电动机工作时，输入的电能 = 输出的机械能 + 发热损失的内能，一分钱都不会少。' },
      { type: 'list', items: ['能量只能转化（如电能变光能）或转移（如热量从高温处传到低温处），不能凭空产生或消失', '自然界一切过程都遵守能量守恒定律，永动机不可能实现', '它把力学、热学、电学、光学等各个领域的能量统一在了一张"账本"上', '应用时要把所有形式的能量都列全，才能做到"收支平衡"'] },
      { type: 'heading', text: '二、能源的分类：可再生与不可再生' },
      { type: 'paragraph', text: '能源就是能为人类提供能量的资源。按"能不能在短期内自然补充"，能源分成两大类。区分它们，对理解能源危机和环保非常关键。' },
      { type: 'keypoint', label: '重点·可再生与不可再生', text: '<strong>可再生能源</strong>：在自然界可以不断再生、取之不尽的能源，如太阳能、风能、水能、生物质能、地热能。<br><strong>不可再生能源</strong>：经过漫长地质年代形成、用一点少一点、短期内无法再生的能源，如煤、石油、天然气、核燃料（铀等）。' },
      { type: 'example', label: '例题·判断能源类型', text: '下面哪些是可再生能源？① 煤　② 太阳能　③ 风能　④ 天然气<br><br><strong>解析</strong>：<br>煤和天然气是远古生物遗体经漫长地质年代形成的，用掉就不能在短时间内再生，属于不可再生能源；太阳能和风能来自太阳和大气运动，可以源源不断地得到，属于可再生能源。<br>所以可再生的是②太阳能、③风能。' },
      { type: 'table', headers: ['对比项', '可再生能源', '不可再生能源'], rows: [['典型代表', '太阳能、风能、水能、生物质能', '煤、石油、天然气、核燃料'], ['能否短期再生', '能，可源源不断补充', '不能，用一点少一点'], ['储量特点', '近乎无限（相对人类时间）', '有限，终将枯竭'], ['环境问题', '一般较清洁，污染小', '燃烧常排放二氧化碳、硫化物等']] },
      { type: 'warn', label: '易错', text: '<strong>别把"清洁"和"可再生"混为一谈。</strong>核能（核电站用的铀）几乎不排放二氧化碳，很"清洁"，但它属于不可再生能源；而水能虽可再生，修建大坝也可能影响生态。判断可再生与否，看的是"能否短期自然再生"，不是看"干不干净"。' },
      { type: 'heading', text: '三、一次能源与二次能源' },
      { type: 'paragraph', text: '按"是否经过加工转换"，能源还有另一种分法。这个分类和上面"可再生/不可再生"是两套不同的标准，一个能源可以同时被两个标准描述。比如太阳能既是一次能源、又是可再生能源。' },
      { type: 'keypoint', label: '重点·一次与二次能源', text: '<strong>一次能源</strong>：直接从自然界取得、没有经过加工转换的能源，如煤、石油、天然气、太阳能、风能、水能、柴草。<br><strong>二次能源</strong>：由一次能源加工转换得到的能源，如电能、汽油、柴油、煤气、蒸汽。我们日常使用方便的电，其实是典型的二次能源。' },
      { type: 'list', items: ['一次能源：直接取自自然，如原煤、原油、太阳光、风', '二次能源：由一次能源转化而来，如电能、汽油、煤气', '电能是最常用的二次能源，本身不是"原始资源"', '同一能源可同时归属两类：如风能=一次能源+可再生能源'] },
      { type: 'tip', label: '提示', text: '<strong>做题小窍门：</strong>看到"煤、石油、天然气、太阳、风、水、柴草"这类"原装"的自然资源，基本就是一次能源；看到"电、汽油、柴油、煤气、蒸汽"这类"加工品"，就是二次能源。两套分类标准独立，要分别判断。' },
      { type: 'heading', text: '四、能量转化的效率' },
      { type: 'paragraph', text: '我们烧煤发电、用电动机做功，输入的能源往往只有一部分真正变成我们想要的有用能量，其余变成了散失的内能（废热）。为了衡量"有用程度"，物理学引入效率这个概念。' },
      { type: 'keypoint', label: '重点·效率公式', text: '<strong>效率 η = W有用 / W总 × 100%</strong>。其中 W总 是总共消耗（输入）的能量，W有用 是真正被利用、做有用功的那部分能量。效率一定小于 100%，因为总有能量以废热等形式损耗掉。' },
      { type: 'example', label: '例题·计算效率', text: '一台电动机接入电路，输入电能 W总 = 1000 J，输出机械能（有用功）W有用 = 800 J，求它的效率。<br><br><strong>解析</strong>：<br>由 η = W有用 / W总 × 100% 得：<br>η = 800 / 1000 × 100% = 80%。<br>所以这台电动机的效率为 80%，另有 20%（200 J）变成了线圈发热等损耗。' },
      { type: 'warn', label: '易错', text: '<strong>效率永远是"有用除以总输入"，别写反了，也别超过 100%。</strong>有些人误写成 W总 / W有用，结果大于 1，这是错的。因为损耗不可避免，W有用 一定小于 W总，所以效率一定在 0 到 100% 之间。提高能源利用率，本质就是想办法减少废热损耗、把效率往上提。' },
      { type: 'heading', text: '五、能源危机与可持续发展' },
      { type: 'paragraph', text: '煤、石油、天然气这些不可再生能源储量有限，按现在消耗速度终会用尽；而且大量燃烧会排放二氧化碳，加剧全球变暖，还会产生酸雨、雾霾。人类既要发展，又要让子孙后代还有资源可用，于是提出"可持续发展"的理念：既满足当代人的需要，又不损害后代满足其需要的能力。' },
      { type: 'keypoint', label: '重点·可持续发展的方向', text: '<strong>可持续发展要求：节约和高效利用能源、大力发展可再生能源、减少污染排放、研发清洁能源技术。</strong>它不是不要发展，而是让发展能一直持续下去，不把后代的"家底"提前掏空。' },
      { type: 'list', items: ['提高能源利用效率，减少浪费（如节能家电、工业余热回收）', '大力发展太阳能、风能、水能等可再生能源，替代化石燃料', '开发和推广清洁能源，降低二氧化碳和污染物排放', '倡导绿色生活方式，如公共交通、节约用电', '依靠科技进步，研制更安全高效的新型能源（如核聚变）'] },
      { type: 'tip', label: '提示', text: '<strong>记住一句话：能量守恒不等于"能源用不完"。</strong>能量总量虽然不变，但可用、方便、低污染的"高品质能源"却在不断被消耗、降级成难以利用的废热。所以我们既要懂守恒，也要珍惜能源、追求可持续。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">能量守恒：能量只转化或转移，总量不变</text><rect x="40" y="70" width="180" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">输入能量</text><rect x="74" y="120" width="112" height="34" rx="6" fill="#4fb3a5"/><text x="130" y="142" font-size="12" fill="#234b45" text-anchor="middle">电能</text><rect x="74" y="166" width="112" height="34" rx="6" fill="#4fb3a5"/><text x="130" y="188" font-size="12" fill="#234b45" text-anchor="middle">化学能</text><rect x="270" y="120" width="140" height="80" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">转化装置</text><text x="340" y="176" font-size="12" fill="#234b45" text-anchor="middle">电动机/电池</text><rect x="460" y="70" width="180" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="550" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">输出能量</text><rect x="494" y="120" width="112" height="34" rx="6" fill="#4fb3a5"/><text x="550" y="142" font-size="12" fill="#234b45" text-anchor="middle">机械能</text><rect x="494" y="166" width="112" height="34" rx="6" fill="#4fb3a5"/><text x="550" y="188" font-size="12" fill="#234b45" text-anchor="middle">内能(损耗)</text><line x1="220" y1="160" x2="268" y2="160" stroke="#234b45" stroke-width="3"/><polygon points="268,154 280,160 268,166" fill="#234b45"/><line x1="410" y1="160" x2="458" y2="160" stroke="#234b45" stroke-width="3"/><polygon points="458,154 470,160 458,166" fill="#234b45"/><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">输入总能量 = 输出机械能 + 损耗内能（总量不变）</text></svg>', caption: '图1　能量在装置中转化或转移，输入的总能量始终等于各部分输出能量之和，这就是能量守恒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">能源的分类：两套标准独立判断</text><rect x="40" y="60" width="280" height="230" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">按可否再生分</text><rect x="70" y="104" width="220" height="80" rx="8" fill="#4fb3a5"/><text x="180" y="130" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">可再生能源</text><text x="180" y="156" font-size="12" fill="#234b45" text-anchor="middle">太阳能 风能 水能</text><rect x="70" y="200" width="220" height="80" rx="8" fill="#4fb3a5"/><text x="180" y="226" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">不可再生能源</text><text x="180" y="252" font-size="12" fill="#234b45" text-anchor="middle">煤 石油 天然气</text><rect x="360" y="60" width="280" height="230" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">按是否加工分</text><rect x="390" y="104" width="220" height="80" rx="8" fill="#4fb3a5"/><text x="500" y="130" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">一次能源</text><text x="500" y="156" font-size="12" fill="#234b45" text-anchor="middle">直接取自自然</text><rect x="390" y="200" width="220" height="80" rx="8" fill="#4fb3a5"/><text x="500" y="226" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">二次能源</text><text x="500" y="252" font-size="12" fill="#234b45" text-anchor="middle">电能 汽油 煤气</text></svg>', caption: '图2　左边按"能否再生"分，右边按"是否加工"分，两套标准互不影响，同一能源可同时归属两类。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">效率：总输入中只有一部分是有用的</text><rect x="60" y="70" width="220" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">总输入 W总</text><rect x="90" y="120" width="160" height="100" rx="4" fill="#4fb3a5"/><text x="170" y="158" font-size="13" fill="#234b45" text-anchor="middle">1000 J</text><rect x="170" y="206" width="80" height="14" fill="#234b45"/><rect x="380" y="70" width="240" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">能量去向</text><rect x="410" y="116" width="180" height="64" rx="4" fill="#4fb3a5"/><text x="500" y="154" font-size="13" fill="#234b45" text-anchor="middle">有用 800 J (80%)</text><rect x="410" y="192" width="180" height="44" rx="4" fill="#234b45"/><text x="500" y="219" font-size="13" fill="#e6f4f1" text-anchor="middle">损耗 200 J (20%)</text><text x="340" y="296" font-size="13" fill="#234b45" text-anchor="middle">效率 η = W有用 / W总 × 100% = 80%</text></svg>', caption: '图3　输入的总能量里，只有绿色部分是"有用输出"，其余变成损耗；效率就是有用部分占总输入的比例。' }
    ],
    exercises: [
      { type: 'choice', question: '关于能量守恒定律，下列说法正确的是？', options: ['能量可以在一定条件下凭空产生', '能量既不会凭空产生，也不会凭空消失，总量保持不变', '永动机只要技术足够高就能造出来', '能量只能消失不能转化'], answer: '能量既不会凭空产生，也不会凭空消失，总量保持不变', explanation: '能量守恒定律指出：能量既不会凭空产生，也不会凭空消失，它只能从一种形式转化为别的形式，或从一个物体转移到别的物体，在转化或转移过程中总能量保持不变。正因为总能量守恒，不消耗能量却一直对外做功的永动机是不可能实现的，故其余选项均错误。' },
      { type: 'choice', question: '下列能源中，属于可再生能源的是？', options: ['煤', '石油', '天然气', '风能'], answer: '风能', explanation: '可再生能源是指在自然界中可以不断再生、取之不尽的能源，如太阳能、风能、水能、生物质能等。而煤、石油、天然气是远古生物遗体经漫长地质年代形成的，用一点少一点，属于不可再生能源，所以本题只有风能符合可再生特征。' },
      { type: 'choice', question: '关于一次能源和二次能源，下列说法正确的是？', options: ['电能是一次能源', '汽油是由石油加工得到的，属于二次能源', '太阳能是二次能源', '柴草属于二次能源'], answer: '汽油是由石油加工得到的，属于二次能源', explanation: '一次能源是直接从自然界取得、未经加工转换的能源，如煤、石油、天然气、太阳能、风能、水能、柴草；二次能源是由一次能源加工转换得到的，如电能、汽油、柴油、煤气。因此汽油由石油加工而来属于二次能源，而电能、太阳能、柴草都属于一次能源，其余选项均错。' },
      { type: 'fill', question: '一台电热水器输入电能 W总 = 2000 J，其中真正用来加热水的有用能量 W有用 = 1600 J，则它的效率 η = ___%（用数字填写）。', answer: '80', explanation: '效率的定义是有用能量占总输入能量的百分比，公式 η = W有用 / W总 × 100%。代入本题数据：η = 1600 / 2000 × 100% = 0.8 × 100% = 80%。说明这台热水器有 80% 的输入电能用于加热水，其余 20% 以散热等形式损耗掉了。' },
      { type: 'fill', question: '可持续发展要求在满足当代人需要的同时，不损害___满足其需要的能力（填"后代"或"祖先"）。', answer: '后代', explanation: '可持续发展的核心定义是：既满足当代人的需要，又不损害后代满足其需要的能力。它强调不能为了眼前发展把资源耗尽、把环境破坏掉，要给子孙后代留下继续发展的空间，因此应填"后代"而非"祖先"。' }
    ]
  });
})();
