/* 生物学 · 高三复习 · 生物与环境 · 第2章 · 课时：群落的结构（二）空间结构 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u7',
    name: '第1节 群落的结构（二）空间结构',
    chapter: '生物与环境 · 第2章 群落及其演替',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、群落的垂直结构' },
      { type: 'paragraph', text: '垂直结构是指群落中的不同物种在垂直方向上出现分层现象。可以想象一栋公寓楼：不同楼层住着不同住户，各占一层互不干扰，却共同利用了整栋楼的空间。群落的分层也是这样，不同生物占据不同高度。' },
      { type: 'list', items: ['森林群落：自上而下分为乔木层、灌木层、草本层，有时还有地被层。', '水域群落：自上而下分为上层、中层、底层，不同水层光照和氧气不同。'] },
      { type: 'list', items: ['分层的主要决定因素：森林中光照是根本原因，不同植物对光照需求不同。', '动物分层往往与食物和栖息空间有关，例如鸟类在树冠层觅食、鼠类在地面活动。'] },
      { type: 'paragraph', text: '垂直结构的意义在于显著提高群落利用阳光、空间等环境资源的能力。分层让更多物种在同一区域共存，好比把同一块地盖成高楼，能住下更多人家。' },
      { type: 'keypoint', text: '核心概念：垂直结构是群落的空间特征之一，指不同物种在垂直方向上的分层分布。其生物学意义是提高群落对阳光和环境资源的利用效率，是群落结构复杂程度的重要体现。' },
      { type: 'heading', text: '二、群落的水平结构' },
      { type: 'paragraph', text: '水平结构是指群落在水平方向上常呈镶嵌分布。由于地形起伏、光照强弱、土壤湿度、盐碱度等环境因子不均匀，不同地段往往分布着不同的种群，同一地段种群密度也有差别，使平面上看上去像拼图一样斑块状。' },
      { type: 'table', caption: '垂直结构与水平结构对比表', headers: ['比较项目', '垂直结构', '水平结构'], rows: [['方向', '垂直方向（上下分层）', '水平方向（平面镶嵌）'], ['主要原因', '光照、温度等垂直差异', '地形、土壤湿度等水平差异'], ['表现', '乔木、灌木、草本分层', '不同地段种群斑块状分布'], ['意义', '提高资源利用效率', '充分利用异质环境']] },
      { type: 'warn', text: '易错辨析：垂直结构不是种群内部的个体高低，而是不同物种在垂直方向的分层。一片玉米地里的玉米高低不齐，那只是种群内个体差异，不属于群落的垂直结构，因为玉米是同一个物种。' },
      { type: 'tip', text: '高频考点：垂直结构的意义（提高利用阳光等资源能力）几乎年年考。判断小题常给森林分层图或湖泊分层图，要能识别这是垂直结构；给地形导致的斑块分布则属于水平结构。' },
      { type: 'example', text: '例题（高考风格）：某森林中自上而下生活着啄木鸟、松鼠、野兔等动物，植物分为乔木、灌木、草本三层。这种现象主要体现了群落的：A. 水平结构 B. 垂直结构 C. 物种丰富度 D. 群落演替。答案：B。解析思路见练习。' },
      { type: 'paragraph', text: '需要提醒，垂直结构和水平结构往往同时存在于一个群落中。森林既有明显的上下分层，林下不同位置又因光照和湿度不同而分布着不同的草本和真菌，两者并不矛盾。' },
      { type: 'heading', text: '三、本课时小结' },
      { type: 'paragraph', text: '群落的空间结构包括垂直结构和水平结构。垂直方向分层、水平方向镶嵌，都是长期自然选择形成的，目的都是更充分地利用环境资源，提高群落维持更多物种的能力。' },
      { type: 'svg', caption: '森林群落垂直分层结构', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">森林群落垂直分层结构</text><rect x="120" y="60" width="440" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="92" text-anchor="middle" fill="#2e3a22" font-size="16">乔木层（高层）</text><rect x="120" y="125" width="440" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="157" text-anchor="middle" fill="#2e3a22" font-size="16">灌木层（中层）</text><rect x="120" y="190" width="440" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="222" text-anchor="middle" fill="#2e3a22" font-size="16">草本层（底层）</text><polygon points="340,280 322,262 358,262" fill="#3f7d1e"/><text x="340" y="320" text-anchor="middle" fill="#5aa832" font-size="15">分层可提高群落利用阳光等环境资源的能力</text></svg>' },
      { type: 'svg', caption: '水域群落垂直分层结构', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">水域群落垂直分层结构</text><rect x="180" y="60" width="320" height="60" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="98" text-anchor="middle" fill="#2e3a22" font-size="16">上层：浮游植物、游动动物</text><rect x="180" y="140" width="320" height="60" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="178" text-anchor="middle" fill="#2e3a22" font-size="16">中层：鱼类等</text><rect x="180" y="220" width="320" height="60" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="258" text-anchor="middle" fill="#2e3a22" font-size="16">底层：底栖生物</text><polygon points="340,300 322,282 358,282" fill="#3f7d1e"/><text x="340" y="335" text-anchor="middle" fill="#5aa832" font-size="15">不同水层光照与氧气不同，生物分布随之分层</text></svg>' },
      { type: 'svg', caption: '群落水平结构镶嵌分布', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">群落水平结构镶嵌分布</text><rect x="80" y="70" width="150" height="90" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="155" y="120" text-anchor="middle" fill="#2e3a22" font-size="15">斑块甲</text><rect x="270" y="70" width="150" height="90" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="345" y="120" text-anchor="middle" fill="#2e3a22" font-size="15">斑块乙</text><rect x="460" y="70" width="150" height="90" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="535" y="120" text-anchor="middle" fill="#2e3a22" font-size="15">斑块丙</text><polygon points="400,220 382,202 418,202" fill="#3f7d1e"/><text x="340" y="300" text-anchor="middle" fill="#5aa832" font-size="15">地形、光照差异使水平方向呈镶嵌分布</text><text x="340" y="330" text-anchor="middle" fill="#2e3a22" font-size="14">同一水平位置生物种类常不均匀</text></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '森林中乔木、灌木、草本分层现象属于群落的', options: ['A. 水平结构', 'B. 垂直结构', 'C. 物种组成', 'D. 群落演替'], answer: 'B. 垂直结构', explanation: '森林中乔木、灌木、草本在不同高度上分层分布，是群落在垂直方向上的结构，称为垂直结构。水平结构指水平方向的镶嵌分布，物种组成指物种种类，群落演替指群落替代过程。故正确选项为垂直结构。' },
      { type: 'choice', question: '湖泊中鱼类常分布在不同水层，这主要体现了群落的', options: ['A. 垂直结构', 'B. 水平结构', 'C. 物种丰富度', 'D. 互利共生'], answer: 'A. 垂直结构', explanation: '湖泊中不同鱼类分布在不同水层，是群落在垂直方向上的分层现象，体现垂直结构。水平结构指水平方向，物种丰富度指物种数目，互利共生指种间关系。故正确选项为垂直结构。' },
      { type: 'choice', question: '由于地形起伏导致群落水平方向呈镶嵌分布，这称为', options: ['A. 垂直结构', 'B. 水平结构', 'C. 初生演替', 'D. 次生演替'], answer: 'B. 水平结构', explanation: '由于地形、光照、土壤湿度差异，群落在水平方向上常呈镶嵌分布，称为水平结构。垂直结构指垂直分层，初生演替与次生演替指群落替代过程。故正确选项为水平结构。' },
      { type: 'fill', question: '群落中不同种群在垂直方向上分层的现象称为______。', answer: '垂直结构', explanation: '垂直结构是群落的重要空间特征，指不同物种在垂直方向上的分层分布，其意义在于提高群落对阳光、空间等环境资源的利用效率。' },
      { type: 'fill', question: '群落水平方向上常呈______分布。', answer: '镶嵌', explanation: '由于地形、光照、土壤湿度等环境因子不均匀，群落在水平方向上不同地段分布着不同种群，呈斑块状的镶嵌分布，这是群落水平结构的典型表现。' }
    ]
  });
})();
