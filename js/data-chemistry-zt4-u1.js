/* 化学 · 高三复习 · 化学实验 · 专题四 · 课时：实验基础知识与技能 */
(function () {
  var v = gzGetVolume('chemistry', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u1',
    name: '实验基础知识与技能',
    chapter: '化学实验 · 专题四 实验基础知识与技能',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、常用化学仪器' },
      { type: 'paragraph', text: '化学实验离不开各种仪器。根据用途不同,仪器可以分为<strong>可加热仪器</strong>、<strong>计量仪器</strong>和<strong>分离仪器</strong>三大类。掌握每种仪器的用途和使用注意事项,是做好实验的基础。' },
      { type: 'subheading', text: '1. 可加热的仪器' },
      { type: 'paragraph', text: '可加热的仪器又分为<strong>可直接加热</strong>和<strong>需垫石棉网加热</strong>两类。' },
      { type: 'list', items: [
        '<strong>可直接加热的仪器</strong>：试管、蒸发皿、坩埚、燃烧匙',
        '<strong>需垫石棉网加热的仪器</strong>：烧杯、烧瓶(圆底/蒸馏)、锥形瓶'
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="400" fill="#f0f8ff"/><text x="400" y="30" font-size="20" font-weight="bold" fill="#2c3e50" text-anchor="middle">常见可加热仪器</text><g transform="translate(50,60)"><rect x="0" y="0" width="150" height="120" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="75" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">试管</text><rect x="60" y="40" width="30" height="70" fill="none" stroke="#3498db" stroke-width="2" rx="3"/><text x="75" y="140" font-size="11" fill="#7f8c8d" text-anchor="middle">少量试剂反应</text></g><g transform="translate(230,60)"><rect x="0" y="0" width="150" height="120" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="75" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">蒸发皿</text><ellipse cx="75" cy="70" rx="50" ry="20" fill="none" stroke="#3498db" stroke-width="2"/><text x="75" y="140" font-size="11" fill="#7f8c8d" text-anchor="middle">蒸发溶剂</text></g><g transform="translate(410,60)"><rect x="0" y="0" width="150" height="120" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="75" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">烧杯</text><rect x="35" y="40" width="80" height="60" fill="none" stroke="#3498db" stroke-width="2" rx="3"/><text x="75" y="140" font-size="11" fill="#7f8c8d" text-anchor="middle">需垫石棉网</text></g><g transform="translate(590,60)"><rect x="0" y="0" width="150" height="120" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="75" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">锥形瓶</text><polygon points="75,40 50,100 100,100" fill="none" stroke="#3498db" stroke-width="2"/><text x="75" y="140" font-size="11" fill="#7f8c8d" text-anchor="middle">需垫石棉网</text></g><text x="400" y="250" font-size="13" fill="#e74c3c" text-anchor="middle">⚠️ 试管加热时液体不超过1/3,试管口不对人</text><text x="400" y="280" font-size="13" fill="#e74c3c" text-anchor="middle">⚠️ 蒸发皿中液体不超过2/3,加热时用玻璃棒搅拌</text><text x="400" y="310" font-size="13" fill="#e74c3c" text-anchor="middle">⚠️ 坩埚放在泥三角上加热,取放用坩埚钳</text><text x="400" y="340" font-size="13" fill="#e74c3c" text-anchor="middle">⚠️ 烧杯、烧瓶、锥形瓶加热时必须垫石棉网</text></svg>', caption: '图1 常见可加热仪器及其使用注意事项' },
      { type: 'keypoint', label: '重点·坩埚的选择', text: '<strong>特别提醒</strong>：熔融NaOH、Na₂CO₃等强碱性物质<strong>不能</strong>在瓷坩埚中灼烧,应使用<strong>铁坩埚</strong>。因为瓷坩埚含有SiO₂,会与强碱反应。' },
      { type: 'subheading', text: '2. 计量仪器' },
      { type: 'paragraph', text: '计量仪器用于精确测量物质的质量、体积、温度等物理量。不同仪器的精确度不同,使用时也有各自的特殊要求。' },
      { type: 'table', headers: ['仪器', '精确度', '特殊注意事项'], rows: [
        ['托盘天平', '0.1 g', '"左物右码",使用前调零'],
        ['量筒', '0.1 mL', '无"0"刻度;读数时视线与凹液面最低处相平'],
        ['滴定管', '0.01 mL', '"0"刻度在<strong>上部</strong>;使用前<strong>检漏</strong>;酸式滴定管装酸性/氧化性溶液,碱式滴定管装碱性溶液'],
        ['容量瓶', '—', '只有<strong>一条</strong>刻度线;使用前<strong>检漏</strong>;在<strong>20℃</strong>时标定'],
        ['温度计', '—', '水银球位置因实验而异:制乙烯时浸入反应液,石油分馏时放在<strong>支管口处</strong>'],
        ['pH计', '0.01', '用于<strong>精确</strong>测定溶液pH']
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="350" fill="#f0f8ff"/><text x="400" y="30" font-size="20" font-weight="bold" fill="#2c3e50" text-anchor="middle">常见计量仪器</text><g transform="translate(80,60)"><rect x="0" y="0" width="140" height="140" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="70" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">量筒</text><rect x="50" y="40" width="40" height="80" fill="none" stroke="#3498db" stroke-width="2"/><line x1="50" y1="60" x2="90" y2="60" stroke="#3498db" stroke-width="1"/><line x1="50" y1="80" x2="90" y2="80" stroke="#3498db" stroke-width="1"/><line x1="50" y1="100" x2="90" y2="100" stroke="#3498db" stroke-width="1"/><text x="70" y="160" font-size="11" fill="#7f8c8d" text-anchor="middle">精确度0.1mL</text></g><g transform="translate(260,60)"><rect x="0" y="0" width="140" height="140" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="70" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">滴定管</text><rect x="55" y="40" width="30" height="90" fill="none" stroke="#3498db" stroke-width="2"/><text x="70" y="55" font-size="10" fill="#e74c3c" text-anchor="middle">0</text><line x1="55" y1="70" x2="85" y2="70" stroke="#3498db" stroke-width="1"/><line x1="55" y1="90" x2="85" y2="90" stroke="#3498db" stroke-width="1"/><line x1="55" y1="110" x2="85" y2="110" stroke="#3498db" stroke-width="1"/><text x="70" y="160" font-size="11" fill="#7f8c8d" text-anchor="middle">精确度0.01mL</text></g><g transform="translate(440,60)"><rect x="0" y="0" width="140" height="140" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="70" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">容量瓶</text><rect x="45" y="50" width="50" height="70" fill="none" stroke="#3498db" stroke-width="2"/><line x1="45" y1="80" x2="95" y2="80" stroke="#e74c3c" stroke-width="2"/><text x="70" y="160" font-size="11" fill="#7f8c8d" text-anchor="middle">只有一条刻度线</text></g><g transform="translate(620,60)"><rect x="0" y="0" width="140" height="140" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="70" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">托盘天平</text><rect x="30" y="60" width="80" height="10" fill="none" stroke="#3498db" stroke-width="2"/><rect x="60" y="40" width="20" height="20" fill="none" stroke="#3498db" stroke-width="2"/><text x="70" y="160" font-size="11" fill="#7f8c8d" text-anchor="middle">左物右码</text></g><text x="400" y="250" font-size="13" fill="#e74c3c" text-anchor="middle">⚠️ 量筒读数时视线与凹液面最低处相平</text><text x="400" y="280" font-size="13" fill="#e74c3c" text-anchor="middle">⚠️ 滴定管"0"刻度在上部,使用前必须检漏</text><text x="400" y="310" font-size="13" fill="#e74c3c" text-anchor="middle">⚠️ 容量瓶使用前必须检漏,在20℃时标定</text></svg>', caption: '图2 常见计量仪器及其使用要点' },
      { type: 'subheading', text: '3. 分离仪器' },
      { type: 'paragraph', text: '分离仪器用于混合物的分离和提纯。根据分离方法的不同,需要选择不同的仪器。' },
      { type: 'table', headers: ['仪器', '用途', '注意事项'], rows: [
        ['普通漏斗', '过滤、转移液体', '"一贴二低三靠"'],
        ['长颈漏斗', '向反应器中加液体', '下端必须<strong>浸入液面以下</strong>(防气体逸出)'],
        ['分液漏斗', '分液、滴加液体', '使用前<strong>检漏</strong>;下层液体从下口放出,上层液体从上口倒出'],
        ['蒸馏烧瓶', '蒸馏', '加<strong>沸石/碎瓷片</strong>防暴沸;温度计水银球在<strong>支管口处</strong>'],
        ['冷凝管', '冷凝蒸气', '<strong>下口进水、上口出水</strong>(逆流冷却效果好)']
      ]},
      { type: 'heading', text: '二、化学实验基本操作' },
      { type: 'subheading', text: '1. 药品的取用与存放' },
      { type: 'list', items: [
        '<strong>固体药品</strong>：粉末用<strong>药匙</strong>或<strong>纸槽</strong>,块状用<strong>镊子</strong>',
        '<strong>液体药品</strong>：瓶塞<strong>倒放</strong>,标签<strong>向手心</strong>',
        '<strong>易变质试剂</strong>：不能长时间露置在空气中',
        '<strong>见光易分解试剂</strong>：存放在<strong>棕色瓶</strong>中,置于冷暗处',
        '<strong>能与玻璃反应的试剂</strong>(NaOH、Na₂CO₃等)：不宜放在<strong>磨口玻璃试剂瓶</strong>中'
      ]},
      { type: 'subheading', text: '2. 试纸的使用' },
      { type: 'list', items: [
        '<strong>pH试纸</strong>：用玻璃棒蘸取待测液点在试纸上,与标准比色卡对比(<strong>不能润湿</strong>)',
        '<strong>红色石蕊试纸</strong>：检验<strong>碱性</strong>气体(变蓝)',
        '<strong>蓝色石蕊试纸</strong>：检验<strong>酸性</strong>气体(变红)',
        '<strong>淀粉-KI试纸</strong>：检验<strong>氧化性</strong>气体(变蓝)'
      ]},
      { type: 'subheading', text: '3. 实验操作的先后顺序' },
      { type: 'table', headers: ['操作', '先后顺序'], rows: [
        ['加热试管', '先<strong>均匀加热</strong>后<strong>局部加热</strong>'],
        ['排水法收集气体', '先<strong>拿出导管</strong>后<strong>撤酒精灯</strong>'],
        ['制取气体', '先<strong>检验气密性</strong>后<strong>装药品</strong>'],
        ['装置拆除', '先把导气管<strong>撤出液面</strong>,后熄灭酒精灯'],
        ['气体制备需加热', '先加热气体发生装置,待排尽空气后再加热其他装置']
      ]},
      { type: 'keypoint', label: '重点·操作顺序口诀', text: '<strong>操作顺序口诀</strong>：制气先检气密性,加热先匀后集中;排水收气先撤管,停止加热后灭灯。' },
      { type: 'subheading', text: '4. 仪器的装配原则' },
      { type: 'paragraph', text: '装配仪器时遵循<strong>"从下往上"</strong>原则：铁架台→酒精灯→铁圈→石棉网→反应容器。' },
      { type: 'subheading', text: '5. 装置气密性的检验' },
      { type: 'paragraph', text: '检查装置气密性是制取气体前的必要步骤。常用方法有两种：' },
      { type: 'list', items: [
        '<strong>方法一</strong>：导管一端浸入水中,用手捂住容器外壁,导管口有气泡冒出→松手后形成一段水柱',
        '<strong>方法二</strong>(启普发生器)：关闭活塞后从漏斗加水,漏斗中液面与容器中液面保持恒定'
      ]},
      { type: 'heading', text: '三、化学实验安全' },
      { type: 'subheading', text: '1. 常见危险化学品标识' },
      { type: 'paragraph', text: '实验室常见的危险化学品标识包括：<strong>易燃</strong>、<strong>易爆</strong>、<strong>腐蚀</strong>、<strong>有毒</strong>等。实验前必须识别这些标识,了解药品的危险性。' },
      { type: 'subheading', text: '2. 意外事故的处理' },
      { type: 'table', headers: ['事故类型', '处理方法'], rows: [
        ['浓硫酸沾到皮肤', '先用大量水冲洗,再涂<strong>3%—5% NaHCO₃溶液</strong>'],
        ['碱液沾到皮肤', '用大量水冲洗,再涂<strong>硼酸溶液</strong>'],
        ['酒精灯着火', '用<strong>湿抹布</strong>盖灭'],
        ['汞洒落', '撒<strong>硫粉</strong>处理']
      ]},
      { type: 'keypoint', label: '重点·安全原则', text: '<strong>安全原则</strong>：实验前了解药品性质和操作规程,实验中严格遵守操作规范,实验后正确处理废弃物。遇到意外事故要冷静处理,必要时立即就医。' }
    ],
    exercises: [
      { type: 'choice', question: '下列仪器中,可以直接加热的是(  )', options: ['烧杯', '试管', '锥形瓶', '烧瓶'], answer: '试管', explanation: '试管、蒸发皿、坩埚、燃烧匙可以直接加热;烧杯、烧瓶、锥形瓶需要垫石棉网才能加热。烧杯、烧瓶、锥形瓶底部面积较大,直接加热容易受热不均而破裂,所以必须垫石棉网使受热均匀。' },
      { type: 'choice', question: '使用容量瓶前必须进行的操作是(  )', options: ['干燥', '检漏', '洗涤后直接使用的', '加热'], answer: '检漏', explanation: '容量瓶使用前必须检漏,因为容量瓶只有一个刻度线,如果漏液就无法准确配制溶液。检漏方法是：加水至刻度线附近,盖好瓶塞,用食指按住瓶塞,另一只手托住瓶底,把瓶倒立观察,看是否有水渗出。干燥不是必须的,因为配制溶液时需要加水;容量瓶不能加热。' },
      { type: 'choice', question: '下列实验操作中,先后顺序正确的是(  )', options: ['制取气体时,先装药品后检查气密性', '排水法收集气体时,先撤酒精灯后拿出导管', '加热试管时,先均匀加热后局部加热', '拆除装置时,先熄灭酒精灯后撤出导管'], answer: '加热试管时,先均匀加热后局部加热', explanation: 'A错误,制取气体时应先检查气密性再装药品,否则装置漏气需要重新装配;B错误,排水法收集气体时应先拿出导管后撤酒精灯,防止水倒吸进入热的试管导致试管破裂;C正确,加热试管时先均匀加热(预热)后局部加热,防止试管受热不均而破裂;D错误,拆除装置时应先撤出导管后熄灭酒精灯,防止水倒吸。' },
      { type: 'choice', question: '浓硫酸沾到皮肤上,正确的处理方法是(  )', options: ['立即用NaOH溶液中和', '先用大量水冲洗,再涂3%-5%的NaHCO₃溶液', '直接用干布擦去', '用稀盐酸冲洗'], answer: '先用大量水冲洗,再涂3%-5%的NaHCO₃溶液', explanation: '浓硫酸沾到皮肤上,应先用大量水冲洗稀释,再涂3%-5%的NaHCO₃溶液中和残留的酸。A错误,NaOH是强碱,有腐蚀性,不能用于皮肤;C错误,直接擦去会扩大污染面积;D错误,稀盐酸也是酸,不能中和硫酸。处理酸液沾到皮肤的原则是：先大量水冲洗稀释,再用弱碱性溶液中和。' },
      { type: 'choice', question: '读取量筒中液体体积时,视线应该(  )', options: ['俯视液面', '仰视液面', '与凹液面最低处相平', '与凹液面最高处相平'], answer: '与凹液面最低处相平', explanation: '读取量筒中液体体积时,视线应与凹液面最低处相平。俯视会使读数偏大(实际体积偏小);仰视会使读数偏小(实际体积偏大)。这是因为液体在量筒中形成凹液面,最低处才是液体的真实体积。读数时量筒应放在水平桌面上,待液面稳定后再读数。' }
    ]
  });
})();
