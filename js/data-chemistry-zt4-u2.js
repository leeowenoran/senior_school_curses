/* 化学 · 高三复习 · 化学实验 · 专题四 · 课时：常见气体的制备 */
(function () {
  var v = gzGetVolume('chemistry', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u2',
    name: '常见气体的制备',
    chapter: '化学实验 · 专题四 常见气体的制备',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、气体制备实验的基本思路' },
      { type: 'paragraph', text: '气体制备是高考实验题的<strong>核心内容</strong>之一。高考要求掌握约<strong>14种气体</strong>的实验室制法。完整的气体制备实验包括五个步骤：' },
      { type: 'svg', svg: '<svg viewBox="0 0 800 150" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="150" fill="#f0f8ff"/><rect x="20" y="50" width="120" height="50" fill="#3498db" rx="5"/><text x="80" y="80" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">发生装置</text><polygon points="150,75 170,65 170,85" fill="#e74c3c"/><rect x="180" y="50" width="120" height="50" fill="#3498db" rx="5"/><text x="240" y="80" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">净化装置</text><polygon points="310,75 330,65 330,85" fill="#e74c3c"/><rect x="340" y="50" width="120" height="50" fill="#3498db" rx="5"/><text x="400" y="80" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">干燥装置</text><polygon points="470,75 490,65 490,85" fill="#e74c3c"/><rect x="500" y="50" width="120" height="50" fill="#3498db" rx="5"/><text x="560" y="80" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">收集装置</text><polygon points="630,75 650,65 650,85" fill="#e74c3c"/><rect x="660" y="50" width="120" height="50" fill="#3498db" rx="5"/><text x="720" y="80" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">尾气处理</text></svg>', caption: '图1 气体制备实验的完整流程' },
      { type: 'heading', text: '二、常见气体的发生装置' },
      { type: 'paragraph', text: '根据反应物的状态和反应条件,气体发生装置分为三种类型：' },
      { type: 'table', headers: ['装置类型', '适用气体', '反应物状态', '是否加热'], rows: [
        ['固+固→气', 'O₂、NH₃、CH₄', '固体+固体', '加热'],
        ['固+液→气(不加热)', 'H₂、CO₂、SO₂、H₂S、C₂H₂、NO₂', '固体+液体', '不加热'],
        ['固+液→气(加热)', 'Cl₂、HCl、CO、C₂H₄', '固体+液体', '加热']
      ]},
      { type: 'keypoint', label: '重点·启普发生器', text: '<strong>启普发生器</strong>：适用于<strong>块状固体+液体</strong>、<strong>不加热</strong>制气(H₂、CO₂、H₂S)。优点是随开随用、随关随停。' },
      { type: 'svg', svg: '<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="400" fill="#f0f8ff"/><text x="400" y="30" font-size="20" font-weight="bold" fill="#2c3e50" text-anchor="middle">三种气体发生装置</text><g transform="translate(50,60)"><rect x="0" y="0" width="200" height="280" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="100" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">固+固加热装置</text><rect x="60" y="60" width="80" height="100" fill="none" stroke="#3498db" stroke-width="2"/><line x1="60" y1="80" x2="140" y2="80" stroke="#3498db" stroke-width="1" stroke-dasharray="3,3"/><text x="100" y="180" font-size="11" fill="#7f8c8d" text-anchor="middle">试管口略向下倾斜</text><text x="100" y="200" font-size="11" fill="#7f8c8d" text-anchor="middle">防止冷凝水倒流</text><text x="100" y="230" font-size="11" fill="#e74c3c" text-anchor="middle">适用：O₂、NH₃</text></g><g transform="translate(300,60)"><rect x="0" y="0" width="200" height="280" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="100" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">固+液不加热装置</text><rect x="50" y="60" width="100" height="80" fill="none" stroke="#3498db" stroke-width="2"/><line x1="50" y1="100" x2="150" y2="100" stroke="#3498db" stroke-width="1" stroke-dasharray="3,3"/><text x="100" y="180" font-size="11" fill="#7f8c8d" text-anchor="middle">长颈漏斗下端</text><text x="100" y="200" font-size="11" fill="#7f8c8d" text-anchor="middle">浸入液面以下</text><text x="100" y="230" font-size="11" fill="#e74c3c" text-anchor="middle">适用：H₂、CO₂</text></g><g transform="translate(550,60)"><rect x="0" y="0" width="200" height="280" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="100" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">固+液加热装置</text><rect x="50" y="60" width="100" height="80" fill="none" stroke="#3498db" stroke-width="2"/><line x1="50" y1="100" x2="150" y2="100" stroke="#3498db" stroke-width="1" stroke-dasharray="3,3"/><text x="100" y="180" font-size="11" fill="#7f8c8d" text-anchor="middle">需垫石棉网</text><text x="100" y="200" font-size="11" fill="#7f8c8d" text-anchor="middle">均匀加热</text><text x="100" y="230" font-size="11" fill="#e74c3c" text-anchor="middle">适用：Cl₂、HCl</text></g></svg>', caption: '图2 三种气体发生装置对比' },
      { type: 'heading', text: '三、气体的净化与干燥' },
      { type: 'subheading', text: '1. 干燥剂的选择' },
      { type: 'paragraph', text: '根据气体的酸碱性选择合适的干燥剂,原则是<strong>干燥剂不能与气体反应</strong>。' },
      { type: 'table', headers: ['干燥剂类型', '常见试剂', '能干燥', '不能干燥'], rows: [
        ['酸性', '浓硫酸、P₂O₅', 'Cl₂、CO₂、CH₄', 'NH₃等碱性气体'],
        ['碱性', '碱石灰、NaOH、CaO', 'NH₃、CH₄、H₂、O₂', 'CO₂、Cl₂、HCl等酸性气体'],
        ['中性', '无水CaCl₂', 'H₂、O₂、Cl₂、CO₂', 'NH₃']
      ]},
      { type: 'keypoint', label: '重点·干燥剂选择原则', text: '<strong>干燥剂选择原则</strong>：酸性气体用酸性干燥剂,碱性气体用碱性干燥剂,中性气体可用中性或酸性干燥剂。特别注意：浓硫酸不能干燥NH₃(会反应生成(NH₄)₂SO₄);无水CaCl₂不能干燥NH₃(会生成CaCl₂·8NH₃)。' },
      { type: 'subheading', text: '2. 净化原则' },
      { type: 'list', items: [
        '① <strong>不损失主体气体</strong>：净化剂不能与要收集的气体反应',
        '② <strong>不引入新的杂质气体</strong>：净化过程不能产生新的杂质',
        '③ <strong>在密闭装置内进行</strong>：防止气体逸出污染环境',
        '④ <strong>先除易除的杂质</strong>：优先除去容易除去的杂质气体'
      ]},
      { type: 'heading', text: '四、气体的收集方法' },
      { type: 'paragraph', text: '根据气体的性质选择合适的收集方法：' },
      { type: 'table', headers: ['方法', '适用条件', '典型气体'], rows: [
        ['排水法', '难溶于水且不与水反应', 'O₂、H₂、NO、CO、CH₄'],
        ['排饱和食盐水法', 'Cl₂', 'Cl₂'],
        ['向上排空气法', '密度>空气,不与空气反应', 'Cl₂、CO₂、NO₂'],
        ['向下排空气法', '密度<空气,不与空气反应', 'H₂、NH₃、CH₄']
      ]},
      { type: 'keypoint', label: '重点·NO的收集', text: '<strong>特别注意</strong>：NO<strong>不能</strong>用排空气法收集,因为NO会与空气中的O₂反应生成NO₂。NO只能用排水法收集。' },
      { type: 'svg', svg: '<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="350" fill="#f0f8ff"/><text x="400" y="30" font-size="20" font-weight="bold" fill="#2c3e50" text-anchor="middle">气体收集方法对比</text><g transform="translate(50,60)"><rect x="0" y="0" width="200" height="240" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="100" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">排水法</text><rect x="40" y="50" width="120" height="150" fill="#e3f2fd" stroke="#3498db" stroke-width="2"/><line x1="40" y1="100" x2="160" y2="100" stroke="#3498db" stroke-width="1" stroke-dasharray="3,3"/><text x="100" y="220" font-size="11" fill="#7f8c8d" text-anchor="middle">适用于难溶于水的气体</text></g><g transform="translate(300,60)"><rect x="0" y="0" width="200" height="240" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="100" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">向上排空气法</text><rect x="40" y="50" width="120" height="150" fill="#fff3e0" stroke="#3498db" stroke-width="2"/><polygon points="100,200 90,180 110,180" fill="#e74c3c"/><text x="100" y="220" font-size="11" fill="#7f8c8d" text-anchor="middle">密度大于空气的气体</text></g><g transform="translate(550,60)"><rect x="0" y="0" width="200" height="240" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="100" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">向下排空气法</text><rect x="40" y="50" width="120" height="150" fill="#f3e5f5" stroke="#3498db" stroke-width="2"/><polygon points="100,50 90,70 110,70" fill="#e74c3c"/><text x="100" y="220" font-size="11" fill="#7f8c8d" text-anchor="middle">密度小于空气的气体</text></g></svg>', caption: '图3 三种气体收集方法对比' },
      { type: 'heading', text: '五、尾气处理' },
      { type: 'paragraph', text: '有毒气体不能直接排放到空气中,必须进行尾气处理。' },
      { type: 'table', headers: ['尾气类型', '处理方法'], rows: [
        ['酸性有毒气体(Cl₂、SO₂、HCl)', '用<strong>碱液</strong>吸收'],
        ['碱性气体(NH₃)', '用<strong>水或酸</strong>吸收'],
        ['可燃性气体(CO、H₂)', '<strong>点燃</strong>处理'],
        ['NO、NO₂', '用<strong>NaOH溶液</strong>吸收']
      ]},
      { type: 'keypoint', label: '重点·防倒吸装置', text: '<strong>防倒吸装置</strong>：当气体易溶于吸收液时,需要在吸收装置前加装防倒吸装置,如<strong>倒扣漏斗</strong>、<strong>安全瓶</strong>等,防止液体倒吸进入热的反应装置。' }
    ],
    exercises: [
      { type: 'choice', question: '实验室制取CO₂时,应选用的发生装置是(  )', options: ['固+固加热装置', '固+液不加热装置', '固+液加热装置', '液+液加热装置'], answer: '固+液不加热装置', explanation: '实验室制取CO₂通常用大理石(CaCO₃)和稀盐酸反应,反应物是块状固体和液体,反应不需要加热,所以选用固+液不加热装置。这种装置可以使用启普发生器,具有随开随用、随关随停的优点。' },
      { type: 'choice', question: '下列气体中,不能用浓硫酸干燥的是(  )', options: ['Cl₂', 'CO₂', 'NH₃', 'H₂'], answer: 'NH₃', explanation: '浓硫酸是酸性干燥剂,不能干燥碱性气体。NH₃是碱性气体,会与浓硫酸反应生成(NH₄)₂SO₄,所以不能用浓硫酸干燥。Cl₂、CO₂是酸性气体,H₂是中性气体,都可以用浓硫酸干燥。干燥NH₃应该用碱性干燥剂,如碱石灰。' },
      { type: 'choice', question: '收集NO气体时,应采用的方法是(  )', options: ['向上排空气法', '向下排空气法', '排水法', '排饱和食盐水法'], answer: '排水法', explanation: 'NO会与空气中的O₂反应生成NO₂(2NO+O₂=2NO₂),所以不能用排空气法收集。NO难溶于水且不与水反应,只能用排水法收集。排饱和食盐水法主要用于收集Cl₂,因为Cl₂在饱和食盐水中的溶解度较小。' },
      { type: 'choice', question: '实验室制取Cl₂时,尾气处理应选用的试剂是(  )', options: ['稀盐酸', '水', 'NaOH溶液', '浓硫酸'], answer: 'NaOH溶液', explanation: 'Cl₂是有毒的酸性气体,需要用碱液吸收。NaOH溶液是强碱,可以与Cl₂反应生成NaCl和NaClO(Cl₂+2NaOH=NaCl+NaClO+H₂O),所以用NaOH溶液吸收Cl₂尾气。稀盐酸不能吸收Cl₂;水虽然能溶解少量Cl₂,但效果不好;浓硫酸不能吸收Cl₂。' },
      { type: 'choice', question: '下列关于气体制备实验的说法,错误的是(  )', options: ['制取气体前必须先检查装置气密性', '加热试管时应先均匀加热后局部加热', '排水法收集气体完毕后,应先撤酒精灯后拿出导管', '尾气处理前应先停止加热,继续通入气体排尽装置内残留气体'], answer: '排水法收集气体完毕后,应先撤酒精灯后拿出导管', explanation: '排水法收集气体完毕后,应先把导管拿出水面,再撤酒精灯。如果先撤酒精灯,试管内温度下降,气压减小,水槽中的水会倒吸入热的试管,导致试管破裂。A正确,制气前必须检查气密性;B正确,加热试管先预热后集中加热;D正确,尾气处理时先停止加热,继续通入气体排尽装置内残留气体,防止倒吸。' }
    ]
  });
})();
