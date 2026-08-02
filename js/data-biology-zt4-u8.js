/* 生物学 · 高三复习 · 生物与环境 · 第2章 · 课时：群落的主要类型 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u8',
    name: '第2节 群落的主要类型',
    chapter: '生物与环境 · 第2章 群落及其演替',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、群落主要类型概述' },
      { type: 'paragraph', text: '地球上的群落根据生活环境不同，主要分为陆地群落和水域群落两大类。陆地群落分布在陆地上，受水分和温度影响最大；水域群落生活在淡水或海洋中，受光照和溶氧影响明显。' },
      { type: 'list', items: ['陆地群落：森林、草原、荒漠、苔原等，主要差别在于水热条件和物种丰富度。', '水域群落：淡水群落（湖泊、河流、池塘）和海洋群落（浅海、深海、珊瑚礁）等。'] },
      { type: 'list', items: ['判断群落类型先看生境是陆地还是水域。', '同一生境内再依据优势植物和气候特点细分，例如湿润区多森林、干旱区多荒漠。'] },
      { type: 'heading', text: '二、陆地群落' },
      { type: 'paragraph', text: '森林群落：分布在湿润或较湿润地区，物种丰富度最高，层次结构明显，有乔木、灌木、草本多层。热带雨林是物种最丰富的森林类型。' },
      { type: 'paragraph', text: '草原群落：降水较少、气候较干旱，以草本植物为主，动物多为奔跑型（如羚羊）和穴居型（如田鼠），物种丰富度低于森林。' },
      { type: 'paragraph', text: '荒漠群落：极端干旱，年降水量很少，植被稀疏，植物多具发达根系、叶退化成刺以保水，动物多夜间活动避开高温。' },
      { type: 'paragraph', text: '苔原群落：分布在极地或高山寒冷地带，温度低、生长季短，以地衣、苔藓和小灌木为主，物种稀少，结构简单。' },
      { type: 'heading', text: '三、水域群落' },
      { type: 'paragraph', text: '淡水群落：包括湖泊、河流、池塘等，生物有浮游植物、鱼类、底栖动物等。湖泊中常有明显垂直分层，上层光照足、浮游植物多。' },
      { type: 'paragraph', text: '海洋群落：覆盖面积最大，从浅海到深海环境差异巨大。浅海珊瑚礁物种极丰富，深海则黑暗、高压、物种稀少，很多生物靠化能合成维持。' },
      { type: 'table', caption: '常见群落类型对比表', headers: ['群落类型', '环境特点', '代表生物', '物种丰富度'], rows: [['森林', '湿润、温暖', '乔木、灌木、鸟类', '高'], ['草原', '较干旱', '草本、食草动物', '中'], ['荒漠', '极端干旱', '耐旱灌木、爬行动物', '低'], ['苔原', '寒冷、短生长季', '地衣、苔藓', '低'], ['淡水', '湖泊河流', '浮游生物、鱼类', '中'], ['海洋', '咸水、光照分层', '藻类、鱼类、珊瑚', '高（浅海）']] },
      { type: 'keypoint', text: '核心概念：群落类型由环境决定，环境的水热条件越优越，物种丰富度通常越高。森林和浅海珊瑚礁是物种最丰富的群落，荒漠和深海物种稀少。理解群落类型要先看生境再看生物组成。' },
      { type: 'warn', text: '易错辨析：常绿阔叶林与落叶阔叶林都属森林群落，区别在气候而非群落大类。不要把群落类型（森林、草原、荒漠、苔原）与群落结构（垂直、水平）混淆，前者按生境划分，后者按空间分布划分。' },
      { type: 'tip', text: '高频考点：不同群落类型物种丰富度的比较是常考内容，一般规律是森林高于草原高于荒漠，浅海珊瑚礁高于深海。题目若给降水或温度数据，据此推断群落类型即可。' },
      { type: 'example', text: '例题（高考风格）：某地区终年高温多雨、植被茂密、物种极多。该地区的群落类型最可能是：A. 荒漠 B. 苔原 C. 森林 D. 草原。答案：C。解析思路见练习。' },
      { type: 'svg', caption: '陆地群落类型对比', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">陆地群落类型对比</text><rect x="40" y="70" width="140" height="70" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="110" y="110" text-anchor="middle" fill="#2e3a22" font-size="15">森林</text><rect x="200" y="70" width="140" height="70" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="270" y="110" text-anchor="middle" fill="#2e3a22" font-size="15">草原</text><rect x="360" y="70" width="140" height="70" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="430" y="110" text-anchor="middle" fill="#2e3a22" font-size="15">荒漠</text><rect x="520" y="70" width="140" height="70" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="590" y="110" text-anchor="middle" fill="#2e3a22" font-size="15">苔原</text><polygon points="110,170 92,152 128,152" fill="#3f7d1e"/><text x="340" y="240" text-anchor="middle" fill="#5aa832" font-size="15">水热条件越好，物种丰富度越高</text><text x="340" y="275" text-anchor="middle" fill="#2e3a22" font-size="14">森林丰富度最高，荒漠与苔原最低</text></svg>' },
      { type: 'svg', caption: '森林群落剖面示意', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">森林群落剖面示意</text><rect x="100" y="80" width="480" height="40" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="108" text-anchor="middle" fill="#2e3a22" font-size="15">乔木层（鸟类、猿猴）</text><rect x="100" y="140" width="480" height="40" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="168" text-anchor="middle" fill="#2e3a22" font-size="15">灌木层（小型兽类）</text><rect x="100" y="200" width="480" height="40" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="228" text-anchor="middle" fill="#2e3a22" font-size="15">草本层（昆虫、鼠类）</text><polygon points="340,290 322,272 358,272" fill="#3f7d1e"/><text x="340" y="325" text-anchor="middle" fill="#5aa832" font-size="15">森林层次多，能容纳更多物种</text></svg>' },
      { type: 'svg', caption: '水域群落分类', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">水域群落分类</text><rect x="120" y="80" width="200" height="80" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="220" y="128" text-anchor="middle" fill="#2e3a22" font-size="16">淡水群落</text><rect x="360" y="80" width="200" height="80" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="460" y="128" text-anchor="middle" fill="#2e3a22" font-size="16">海洋群落</text><polygon points="340,200 322,182 358,182" fill="#3f7d1e"/><text x="220" y="250" text-anchor="middle" fill="#2e3a22" font-size="14">湖泊、河流、池塘</text><text x="460" y="250" text-anchor="middle" fill="#2e3a22" font-size="14">浅海、深海、珊瑚礁</text><text x="340" y="310" text-anchor="middle" fill="#5aa832" font-size="15">浅海珊瑚礁物种丰富度极高</text></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '下列陆地群落中，物种丰富度通常最高的是', options: ['A. 荒漠', 'B. 苔原', 'C. 森林', 'D. 草原'], answer: 'C. 森林', explanation: '森林群落水热条件充足、空间层次多，能容纳更多物种生存，物种丰富度通常最高。荒漠与苔原因干旱寒冷物种稀少，草原物种数也少于森林。故正确选项为森林。' },
      { type: 'choice', question: '下列属于水域群落的是', options: ['A. 热带雨林', 'B. 海洋群落', 'C. 草原', 'D. 荒漠'], answer: 'B. 海洋群落', explanation: '海洋群落生活在海洋水域中，属于水域群落。热带雨林、草原、荒漠均分布在陆地，属于陆地群落。故正确选项为海洋群落。' },
      { type: 'choice', question: '荒漠群落植物种类少、根系发达，主要是为了适应', options: ['A. 高温多雨', 'B. 干旱缺水', 'C. 寒冷漫长', 'D. 土壤肥沃'], answer: 'B. 干旱缺水', explanation: '荒漠地区降水稀少、气候干旱，植物为获取深层水分演化出发达根系、叶退化等特征以适应干旱缺水环境。故正确选项为干旱缺水。' },
      { type: 'fill', question: '森林、草原、荒漠、苔原等属于______群落。', answer: '陆地', explanation: '根据生活环境不同，群落分为陆地群落和水域群落。森林、草原、荒漠、苔原均分布在陆地上，受水分和温度影响，属于陆地群落。' },
      { type: 'fill', question: '淡水群落和海洋群落属于______群落。', answer: '水域', explanation: '生活在淡水（湖泊、河流）或海洋中的群落统称水域群落。水域群落与陆地群落的划分依据是生境类型，而非物种组成。' }
    ]
  });
})();
