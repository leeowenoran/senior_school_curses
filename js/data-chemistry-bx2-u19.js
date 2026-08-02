/* ============================================================
 * 高一化学 · 必修 第二册 · 第八章 化学与可持续发展
 * 课时19：化学品的合理使用
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u19',
    name: '化学品的合理使用',
    chapter: '必修 第二册 · 第八章 化学与可持续发展',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、化学品让生活更美好，也需慎用' },
      { type: 'paragraph', text: '化肥让庄稼增产，农药赶走害虫，药物帮人治病，洗衣粉、消毒剂让生活更干净。化学品早已融入每天的生活。但用得不对，化肥会污染河流，农药会毒死益虫，药物滥用会损害身体。学会"合理使用"，是每个人的必修课。' },
      { type: 'keypoint', label: '重点·合理使用原则', text: '<strong>化学品要"用对、用够、不滥用"：按说明的剂量和对象使用，既不无效浪费，也不超量伤身伤环境。</strong>任何化学品都是"剂量决定毒性"，在合适范围内是帮手，超出范围就可能变成危害。' },
      { type: 'heading', text: '二、化肥与农药' },
      { type: 'paragraph', text: '庄稼生长需要氮、磷、钾等营养元素，土壤里不够时就靠化肥补充。氮肥（如尿素 CO(NH₂)₂、碳酸氢铵 NH₄HCO₃）促叶子生长；磷肥促根和果实；钾肥让茎秆更壮、抗倒伏。农药则保护庄稼免受害虫、病菌、杂草的破坏。' },
      { type: 'table', headers: ['类别', '常见例子', '作用', '注意'], rows: [['氮肥', '尿素 CO(NH₂)₂、NH₄HCO₃', '促进茎叶生长', '过量会烧苗、污染水体'], ['磷肥', '过磷酸钙', '促根、促果', '过量使土壤板结'], ['钾肥', '氯化钾 KCl', '壮茎秆、抗倒伏', '按作物需要施用'], ['农药', '除虫菊酯、波尔多液', '杀灭病虫杂草', '勿超量、注意安全期']] },
      { type: 'list', items: ['化肥要测土配方，缺什么补什么，避免盲目多施', '农药尽量选用低毒、易降解的品种', '严格遵守收获前"安全间隔期"，让残留降下来', '推广生物防治，减少化学农药用量'] },
      { type: 'example', label: '例题·化肥辨识', text: '下列化肥中，属于氮肥的是？<br>A. 氯化钾 KCl　B. 尿素 CO(NH₂)₂　C. 过磷酸钙　D. 草木灰<br><br><strong>解析</strong>：氮肥是含有氮元素、能供给作物氮营养的肥料。尿素 CO(NH₂)₂ 含氮，是典型的氮肥。氯化钾 KCl 含钾，是钾肥；过磷酸钙含磷，是磷肥；草木灰主要含钾。因此选尿素。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">化肥三要素：氮、磷、钾的作用</text><rect x="40" y="80" width="180" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="130" y="120" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">氮肥（N）</text><text x="130" y="150" font-size="13" fill="#4a3724" text-anchor="middle">如尿素</text><text x="130" y="175" font-size="13" fill="#4a3724" text-anchor="middle">长叶、促生长</text><rect x="250" y="80" width="180" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="120" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">磷肥（P）</text><text x="340" y="150" font-size="13" fill="#4a3724" text-anchor="middle">如过磷酸钙</text><text x="340" y="175" font-size="13" fill="#4a3724" text-anchor="middle">生根、促果实</text><rect x="460" y="80" width="180" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="550" y="120" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">钾肥（K）</text><text x="550" y="150" font-size="13" fill="#4a3724" text-anchor="middle">如氯化钾</text><text x="550" y="175" font-size="13" fill="#4a3724" text-anchor="middle">壮秆、抗倒伏</text><line x1="220" y1="140" x2="250" y2="140" stroke="#b5651d" stroke-width="2"/><line x1="430" y1="140" x2="460" y2="140" stroke="#b5651d" stroke-width="2"/><text x="340" y="260" font-size="13" fill="#d98e3a" text-anchor="middle">测土配方：缺什么补什么，避免浪费和污染</text></svg>', caption: '图1　氮、磷、钾是作物最需要的三大营养元素，各有分工，应科学配比施用。' },
      { type: 'heading', text: '三、药物——治病也要讲科学' },
      { type: 'paragraph', text: '从感冒药到抗生素，药物帮人类战胜了无数疾病。但药不是糖：抗生素只对细菌有效，对病毒感冒没用；不按疗程吃药，细菌会产生耐药性，以后真需要时反而没药可用。' },
      { type: 'keypoint', label: '重点·合理用药', text: '<strong>药物必须对症、按剂量和疗程服用，抗生素不能滥用。</strong>滥用抗生素会筛选出"超级细菌"，使原本有效的药失效；自行增减剂量还可能伤肝伤肾。任何处方药都应遵医嘱，非处方药也要看说明书。' },
      { type: 'list', items: ['对症下药，不把抗生素当"万能药"', '按说明书或医生处方的剂量与疗程服用', '不与他人共用处方药，不凭经验乱吃药', '注意保质期与禁忌，过期药不可服用'] },
      { type: 'tip', label: '提示', text: '家里常备的小药箱要放在阴凉干燥、儿童拿不到的地方。过期药品不要随手扔进垃圾桶或冲进下水道，最好送到社区的"过期药品回收点"，避免有效成分进入土壤和水体造成污染。' },
      { type: 'heading', text: '四、安全使用与滥用危害' },
      { type: 'paragraph', text: '化学品的危害往往来自"用错"和"过量"。洗衣粉、消毒液要稀释后使用；杀虫剂要避开食物和小孩；农家用的百草枯等高毒农药更要严格保管。一旦滥用，轻则中毒，重则危及生命，还会通过土壤、河流扩散。' },
      { type: 'warn', label: '易错·滥用危害', text: '不要以为"多加点效果更好"。<strong>化肥过量会"烧苗"并使土壤板结，雨水冲进河里还会引起水华（藻类疯长、鱼缺氧死亡）；农药滥用会杀死蜜蜂等益虫，并通过食物链累积。</strong>化学品的害处常常不是来自它本身，而是来自不正确的使用方式。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">化学品误用带来的污染链条</text><rect x="40" y="80" width="170" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="125" y="110" font-size="13" fill="#4a3724" text-anchor="middle">过量化肥农药</text><rect x="250" y="80" width="170" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="335" y="110" font-size="13" fill="#4a3724" text-anchor="middle">随雨水流入河流</text><rect x="460" y="80" width="170" height="50" rx="8" fill="#d98e3a"/><text x="545" y="110" font-size="13" fill="#ffffff" text-anchor="middle">水体富营养化</text><line x1="210" y1="105" x2="250" y2="105" stroke="#b5651d" stroke-width="2"/><line x1="420" y1="105" x2="460" y2="105" stroke="#b5651d" stroke-width="2"/><rect x="250" y="180" width="170" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="335" y="210" font-size="13" fill="#4a3724" text-anchor="middle">藻类疯长耗氧</text><rect x="460" y="180" width="170" height="50" rx="8" fill="#d98e3a"/><text x="545" y="210" font-size="13" fill="#ffffff" text-anchor="middle">鱼虾缺氧死亡</text><line x1="420" y1="205" x2="460" y2="205" stroke="#b5651d" stroke-width="2"/><line x1="335" y1="130" x2="335" y2="180" stroke="#b5651d" stroke-width="2"/><rect x="40" y="270" width="600" height="50" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="300" font-size="13" fill="#4a3724" text-anchor="middle">合理使用：测土配方、低毒农药、遵守安全期，切断污染链条</text></svg>', caption: '图2　化肥农药滥用经雨水进入水体，引发富营养化和鱼虾死亡；合理使用能切断这条污染链。' },
      { type: 'example', label: '例题·药物安全', text: '关于抗生素的使用，下列说法正确的是？<br>A. 感冒发烧就立刻吃抗生素<br>B. 症状消失就马上停药<br>C. 应遵医嘱按疗程足量使用<br>D. 抗生素对所有病都有效<br><br><strong>解析</strong>：抗生素只针对细菌感染，对病毒性感冒无效，所以 A、D 错。提前停药会让没被杀尽的细菌产生耐药，以后更难治，所以 B 错。正确做法是<strong>遵医嘱按疗程、足量使用</strong>，既保证杀净病菌，又减少耐药菌产生，故选 C。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">化学品合理使用的四个要点</text><rect x="40" y="80" width="140" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="110" y="116" font-size="13" fill="#4a3724" text-anchor="middle">对症选用</text><rect x="190" y="80" width="140" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="260" y="116" font-size="13" fill="#4a3724" text-anchor="middle">按量按程</text><rect x="340" y="80" width="140" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="410" y="116" font-size="13" fill="#4a3724" text-anchor="middle">安全存放</text><rect x="490" y="80" width="140" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="560" y="116" font-size="13" fill="#4a3724" text-anchor="middle">妥善回收</text><line x1="180" y1="110" x2="190" y2="110" stroke="#b5651d" stroke-width="2"/><line x1="330" y1="110" x2="340" y2="110" stroke="#b5651d" stroke-width="2"/><line x1="480" y1="110" x2="490" y2="110" stroke="#b5651d" stroke-width="2"/><rect x="40" y="190" width="600" height="60" rx="10" fill="#d98e3a"/><text x="340" y="220" font-size="13" fill="#ffffff" text-anchor="middle">核心：剂量决定毒性——用对用够不滥用</text><text x="340" y="244" font-size="12" fill="#ffffff" text-anchor="middle">化肥农药按说明，药物遵医嘱，过期药回收</text></svg>', caption: '图3　化学品合理使用的四个要点：对症选用、按量按程、安全存放、妥善回收。' }
    ],
    exercises: [
      { type: 'choice', question: '下列化肥中，属于氮肥的是？', options: ['氯化钾 KCl', '尿素 CO(NH₂)₂', '过磷酸钙', '草木灰'], answer: '尿素 CO(NH₂)₂', explanation: '氮肥是含氮元素、能供给作物氮营养的肥料。尿素 CO(NH₂)₂ 含有氮，是典型氮肥。氯化钾 KCl 含钾属于钾肥；过磷酸钙含磷属于磷肥；草木灰主要成分是碳酸钾，属于钾肥。因此选尿素。' },
      { type: 'choice', question: '关于抗生素的使用，正确的做法是？', options: ['感冒就立刻吃抗生素', '症状消失马上停药', '遵医嘱按疗程足量使用', '抗生素对所有病都有效'], answer: '遵医嘱按疗程足量使用', explanation: '抗生素只对细菌感染有效，对病毒性感冒无效，所以感冒就吃、对所有病有效都是错的。症状一消失就停药，会留下耐药菌，以后更难治。正确做法是遵医嘱按疗程、足量使用，既杀净病菌又减少耐药，因此选"遵医嘱按疗程足量使用"。' },
      { type: 'choice', question: '化肥施用到地里后，若雨水把多余的养分冲进河流，最容易引起的环境问题是？', options: ['臭氧层破坏', '水体富营养化', '温室效应', '酸雨'], answer: '水体富营养化', explanation: '氮、磷等养分进入河流湖泊后，会促使藻类等水生植物疯狂生长，消耗水中氧气，导致鱼虾缺氧死亡，这种现象叫水体富营养化。它与臭氧层破坏、温室效应、酸雨的成因不同，是由氮磷营养过剩直接引起的。' },
      { type: 'fill', question: '化肥中促进作物茎叶生长、长叶子的主要是___肥（填氮、磷或钾）。', answer: '氮', explanation: '作物三大营养元素各有分工：氮肥促进茎叶生长、让叶子更绿更大；磷肥促进根系和果实发育；钾肥让茎秆粗壮、抗倒伏。题目中"促进茎叶生长、长叶子"对应的就是氮肥，所以填"氮"。' },
      { type: 'fill', question: '过期的家用药品不要随意丢弃，应送到社区的___点进行回收处理。', answer: '过期药品回收|药品回收', explanation: '过期药品中的有效成分和辅料若随意扔进垃圾桶或冲入下水道，会进入土壤和水体造成污染。正确做法是送到社区设立的过期药品回收点统一处理，既安全又环保。因此填"过期药品回收（点）"。' }
    ]
  });
})();
