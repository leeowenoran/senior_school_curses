/* 生物学 · 高三复习 · 生物与环境 · 第2章 · 课时：群落的演替 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u9',
    name: '第3节 群落的演替',
    chapter: '生物与环境 · 第2章 群落及其演替',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、群落演替的概念' },
      { type: 'paragraph', text: '群落演替是指随着时间的推移，一个群落被另一个群落代替的过程。可以把它想象成小区改造：原来一片荒地，先长杂草，后来灌木扎根，最后树木成林，居民（物种）一批批更替，这就是演替。演替是群落动态变化的重要形式。' },
      { type: 'keypoint', text: '核心概念：群落演替是群落组成和结构的顺序性变化过程，本质是优势种的更替。判断演替要看是否出现一个群落逐步替代另一个群落的系列变化，而不是短期的数量波动。' },
      { type: 'heading', text: '二、初生演替' },
      { type: 'list', items: ['起点：从来没有植被覆盖，或原有植被被彻底消灭的地方，如裸岩、沙丘、火山岩。', '特点：起始几乎没有任何土壤和植物繁殖体，所以速度慢、经历阶段多。', '典型序列：裸岩 → 地衣 → 苔藓 → 草本植物 → 灌木 → 森林。'] },
      { type: 'paragraph', text: '初生演替中，地衣最先定居，它能分泌有机酸风化岩石形成初步土壤；随后苔藓、草本接力，土壤逐渐加厚，最终灌木和乔木入驻形成森林。整个过程像从无到有的搭建，耗时很长。' },
      { type: 'heading', text: '三、次生演替' },
      { type: 'list', items: ['起点：原有植被已不存在，但土壤条件基本保留，甚至还保留植物种子或繁殖体。', '特点：因为有土壤基础，所以速度较快、经历阶段较少。', '典型序列：弃耕农田 → 杂草 → 灌木 → 森林。'] },
      { type: 'paragraph', text: '次生演替常见于火灾后的森林、弃耕的农田、砍伐后的林地。由于土壤里还留着草根、种子，演替很快就能启动，几年内就可能恢复成灌木丛甚至树林。' },
      { type: 'table', caption: '初生演替与次生演替对比表', headers: ['比较项目', '初生演替', '次生演替'], rows: [['起点', '无植被或彻底消灭，无土壤', '土壤条件基本保留'], ['速度', '慢', '快'], ['经历阶段', '多', '较少'], ['实例', '裸岩、沙丘、火山岩', '弃耕农田、火灾后森林'], ['序列', '裸岩→地衣→苔藓→草本→灌木→森林', '弃耕农田→杂草→灌木→森林']] },
      { type: 'warn', text: '易错辨析：初生演替不等于次生演替，关键看起点有没有土壤条件。有土壤、有繁殖体残留的是次生演替（快）；完全没有土壤的是初生演替（慢）。不要仅凭快慢判断，要从起点本质区分。' },
      { type: 'tip', text: '高频考点：初生演替与次生演替的区别是必考内容，答题时先判断起点：裸岩、火山岩、沙丘→初生；弃耕农田、火灾后、砍伐后→次生。另外要记住初生演替第一个定居的生物通常是地衣。' },
      { type: 'example', text: '例题（高考风格）：一块弃耕多年的农田逐渐长出杂草、灌木，若干年后出现小乔木。该过程属于：A. 初生演替 B. 次生演替 C. 水平结构 D. 垂直结构。答案：B。解析思路见练习。' },
      { type: 'heading', text: '四、演替的规律与顶极群落' },
      { type: 'paragraph', text: '顶极群落是演替最终达到的相对稳定状态。此时群落结构最复杂、物种组成最稳定，与当地的气候和土壤条件高度适应。例如温带湿润区顶极常为森林，干旱区顶极可能为草原或荒漠。' },
      { type: 'paragraph', text: '演替的规律是：它是长期变化累积的结果，一般趋向于物种丰富度增加、结构变复杂，最终形成与当地环境相适应的稳定顶极群落。但演替并非永远进行，到顶极后就相对稳定，除非遭受外力干扰。' },
      { type: 'svg', caption: '初生演替序列示意', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">初生演替序列示意</text><rect x="30" y="80" width="100" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="112" text-anchor="middle" fill="#2e3a22" font-size="14">裸岩</text><rect x="150" y="80" width="100" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="200" y="112" text-anchor="middle" fill="#2e3a22" font-size="14">地衣</text><rect x="270" y="80" width="100" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="320" y="112" text-anchor="middle" fill="#2e3a22" font-size="14">苔藓</text><rect x="390" y="80" width="100" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="440" y="112" text-anchor="middle" fill="#2e3a22" font-size="14">草本</text><rect x="510" y="80" width="100" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="560" y="112" text-anchor="middle" fill="#2e3a22" font-size="14">森林</text><polygon points="135,105 122,100 128,112" fill="#3f7d1e"/><polygon points="255,105 242,100 248,112" fill="#3f7d1e"/><polygon points="375,105 362,100 368,112" fill="#3f7d1e"/><polygon points="495,105 482,100 488,112" fill="#3f7d1e"/><text x="340" y="220" text-anchor="middle" fill="#5aa832" font-size="15">起点无土壤，速度慢、阶段多</text><text x="340" y="255" text-anchor="middle" fill="#2e3a22" font-size="14">裸岩 → 地衣 → 苔藓 → 草本 → 灌木 → 森林</text></svg>' },
      { type: 'svg', caption: '次生演替序列示意', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">次生演替序列示意</text><rect x="60" y="80" width="120" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="120" y="112" text-anchor="middle" fill="#2e3a22" font-size="14">弃耕农田</text><rect x="230" y="80" width="120" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="290" y="112" text-anchor="middle" fill="#2e3a22" font-size="14">杂草</text><rect x="400" y="80" width="120" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="460" y="112" text-anchor="middle" fill="#2e3a22" font-size="14">灌木</text><rect x="560" y="80" width="100" height="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="610" y="112" text-anchor="middle" fill="#2e3a22" font-size="14">森林</text><polygon points="195,105 182,100 188,112" fill="#3f7d1e"/><polygon points="365,105 352,100 358,112" fill="#3f7d1e"/><polygon points="525,105 512,100 518,112" fill="#3f7d1e"/><text x="340" y="220" text-anchor="middle" fill="#5aa832" font-size="15">起点有土壤，速度快、阶段少</text><text x="340" y="255" text-anchor="middle" fill="#2e3a22" font-size="14">弃耕农田 → 杂草 → 灌木 → 森林</text></svg>' },
      { type: 'svg', caption: '演替过程中物种丰富度变化', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">演替过程中物种丰富度变化</text><rect x="80" y="70" width="520" height="220" fill="#ffffff" stroke="#3f7d1e" stroke-width="2"/><polyline points="100,260 180,220 260,170 340,140 420,120 500,110 560,108" fill="none" stroke="#3f7d1e" stroke-width="3"/><polygon points="560,108 546,110 554,122" fill="#3f7d1e"/><text x="100" y="320" fill="#2e3a22" font-size="14">时间轴</text><text x="560" y="135" fill="#5aa832" font-size="14">趋于稳定顶极</text><text x="340" y="345" text-anchor="middle" fill="#5aa832" font-size="15">物种丰富度随演替上升，最终趋于稳定</text></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '在裸岩上开始的演替属于', options: ['A. 次生演替', 'B. 初生演替', 'C. 水平结构', 'D. 垂直结构'], answer: 'B. 初生演替', explanation: '初生演替的起点是从来没有植被覆盖或植被被彻底消灭的地方，如裸岩、沙丘、火山岩。裸岩上没有任何土壤和植物繁殖体，因此属于初生演替。故正确选项为初生演替。' },
      { type: 'choice', question: '弃耕农田上进行的演替，其起点是', options: ['A. 没有任何生物', 'B. 土壤条件基本保留', 'C. 已有森林', 'D. 完全积水'], answer: 'B. 土壤条件基本保留', explanation: '次生演替的起点是原有植被虽已不存在，但土壤条件基本保留，甚至还保留植物种子或繁殖体，如弃耕农田。故正确选项为土壤条件基本保留。' },
      { type: 'choice', question: '群落演替一般趋向于', options: ['A. 物种减少', 'B. 结构简化', 'C. 与当地气候适应的稳定顶极群落', 'D. 永久不变'], answer: 'C. 与当地气候适应的稳定顶极群落', explanation: '群落演替是长期变化累积的过程，一般趋向于结构复杂、物种增多，最终形成与当地气候和土壤条件相适应的稳定顶极群落。故正确选项为与当地气候适应的稳定顶极群落。' },
      { type: 'fill', question: '裸岩→地衣→苔藓→草本→灌木→森林，这一过程属于______演替。', answer: '初生', explanation: '该序列起点是裸岩，没有任何土壤和植物繁殖体，属于初生演替。初生演替速度慢、阶段多，地衣是最早定居的先锋物种，逐步风化岩石形成土壤。' },
      { type: 'fill', question: '弃耕农田上很快长出杂草，这种演替属于______演替。', answer: '次生', explanation: '弃耕农田原有植被消失，但土壤条件基本保留且留有植物种子，因此属于次生演替。次生演替因为有土壤基础，所以启动快、经历阶段较少。' }
    ]
  });
})();
