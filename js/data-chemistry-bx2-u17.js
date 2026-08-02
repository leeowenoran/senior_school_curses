/* ============================================================
 * 高一化学 · 必修 第二册 · 第八章 化学与可持续发展
 * 课时17：金属矿物的开发利用
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u17',
    name: '金属矿物的开发利用',
    chapter: '必修 第二册 · 第八章 化学与可持续发展',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么要冶炼金属矿物' },
      { type: 'paragraph', text: '我们日常用的铁锅、铝箔、铜线，原料都不是现成的金属块，而是埋在地下的矿石。矿石是金属元素和氧、硫等结合成的化合物，比如铁和氧化合成了氧化铁。把金属从这些"化合物牢笼"里放出来，变成纯净可用的金属，这个工程就叫金属的冶炼。' },
      { type: 'keypoint', label: '重点·金属的存在形态', text: '<strong>大多数金属在自然界以化合态存在</strong>，只有少数极不活泼的金属（如金 Au、铂 Pt）以游离态单质存在。我们开采矿石，就是要从化合物中把金属"解放"出来，这个过程就是金属的冶炼。' },
      { type: 'paragraph', text: '金属在地球上的储量有限，而且很多矿石品位（含金属的比例）越来越低。所以怎么高效、节约、环保地把金属提炼出来，是人类持续发展必须面对的问题。' },
      { type: 'list', items: ['赤铁矿（主要成分 Fe₂O₃）、磁铁矿（Fe₃O₄）：炼铁的主要原料', '铝土矿（含 Al₂O₃）：提炼铝的最重要矿石', '黄铜矿（含 CuFeS₂）：提炼铜的重要矿石', '合理开采能提高资源利用率，避免过度浪费和生态破坏'] },
      { type: 'heading', text: '二、金属冶炼的本质' },
      { type: 'paragraph', text: '不管用哪种方法，冶炼的核心都是同一件事：让带正电的金属阳离子重新"拿到"电子，变回电中性的金属原子。就像把被关起来的金属离子"赎"出来。' },
      { type: 'keypoint', label: '重点·冶炼原理', text: '<strong>冶炼的本质是让金属阳离子得到电子，被还原成金属单质</strong>：Mⁿ⁺ + ne⁻ → M。金属越活泼，它的阳离子越"舍不得"电子，越难被还原，就需要越强的手段（比如电解）；金属越不活泼，越容易直接脱掉氧跑出来。' },
      { type: 'table', headers: ['金属活动性', '代表金属', '冶炼方法', '原理举例'], rows: [['强 K Ca Na Mg Al', '钠 Na、铝 Al', '电解法', '电解熔融 NaCl 得 Na；电解 Al₂O₃ 得 Al'], ['中 Zn Fe Sn Pb Cu', '铁 Fe、铜 Cu', '热还原法', '用 C、CO、Al 等还原金属氧化物'], ['弱 Hg Ag', '汞 Hg、银 Ag', '热分解法', '加热使氧化物分解为金属'], ['极弱 Au Pt', '金 Au、铂 Pt', '物理富集', '直接富集游离态单质']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">根据金属活动性选择冶炼方法</text><rect x="40" y="58" width="190" height="48" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="87" font-size="14" fill="#4a3724" text-anchor="middle">K Ca Na Mg Al</text><rect x="270" y="58" width="150" height="48" rx="8" fill="#d98e3a"/><text x="345" y="87" font-size="14" fill="#ffffff" text-anchor="middle">电解法</text><line x1="230" y1="82" x2="270" y2="82" stroke="#b5651d" stroke-width="2"/><rect x="40" y="128" width="190" height="48" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="157" font-size="14" fill="#4a3724" text-anchor="middle">Zn Fe Sn Pb Cu</text><rect x="270" y="128" width="150" height="48" rx="8" fill="#d98e3a"/><text x="345" y="157" font-size="14" fill="#ffffff" text-anchor="middle">热还原法</text><line x1="230" y1="152" x2="270" y2="152" stroke="#b5651d" stroke-width="2"/><rect x="40" y="198" width="190" height="48" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="227" font-size="14" fill="#4a3724" text-anchor="middle">Hg Ag</text><rect x="270" y="198" width="150" height="48" rx="8" fill="#d98e3a"/><text x="345" y="227" font-size="14" fill="#ffffff" text-anchor="middle">热分解法</text><line x1="230" y1="222" x2="270" y2="222" stroke="#b5651d" stroke-width="2"/><rect x="40" y="268" width="190" height="48" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="297" font-size="14" fill="#4a3724" text-anchor="middle">Au Pt</text><rect x="270" y="268" width="150" height="48" rx="8" fill="#d98e3a"/><text x="345" y="297" font-size="14" fill="#ffffff" text-anchor="middle">物理富集</text><line x1="230" y1="292" x2="270" y2="292" stroke="#b5651d" stroke-width="2"/><text x="500" y="300" font-size="13" fill="#d98e3a" text-anchor="middle">越靠左越活泼，越需强还原</text></svg>', caption: '图1　金属活动性越靠左（越活泼），越需要强还原手段；越靠右越容易直接分离。' },
      { type: 'heading', text: '三、铝热反应——热还原法的明星' },
      { type: 'paragraph', text: '在热还原法里，有一种特别"火爆"的反应叫铝热反应：把铝粉和氧化铁粉末混在一起，用点燃的镁条引燃，瞬间放出耀眼的光芒和极高的温度，生成的铁水像岩浆一样淌出来。它常被用来在野外焊接断裂的铁轨。' },
      { type: 'example', label: '例题·铝热反应', text: '铝热反应常用于焊接铁轨，其化学方程式为：<br>2Al + Fe₂O₃ → 加热 → 2Fe + Al₂O₃<br><br><strong>解析</strong>：铝 Al 把氧化铁 Fe₂O₃ 中的铁还原出来，自身被氧化成 Al₂O₃。反应放出大量热，温度可达 2000℃ 以上，生成的铁呈熔融状，冷却后就把两段铁轨"焊"在一起。该反应中<strong>铝作还原剂</strong>，Fe₂O₃ 作氧化剂。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">铝热反应装置与产物</text><rect x="250" y="70" width="180" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="108" font-size="13" fill="#4a3724" text-anchor="middle">铝粉 + 氧化铁 Fe₂O₃</text><text x="340" y="132" font-size="13" fill="#4a3724" text-anchor="middle">混合物（上方插镁条）</text><text x="340" y="158" font-size="12" fill="#d98e3a" text-anchor="middle">镁条点燃引发反应</text><line x1="340" y1="190" x2="340" y2="220" stroke="#b5651d" stroke-width="2"/><polygon points="334,214 346,214 340,226" fill="#b5651d"/><rect x="250" y="220" width="180" height="50" rx="10" fill="#d98e3a"/><text x="340" y="250" font-size="13" fill="#ffffff" text-anchor="middle">生成铁水 Fe + Al₂O₃</text><text x="540" y="120" font-size="13" fill="#4a3724" text-anchor="middle">反应放热</text><text x="540" y="145" font-size="13" fill="#4a3724" text-anchor="middle">温度高达</text><text x="540" y="170" font-size="13" fill="#4a3724" text-anchor="middle">2000℃ 以上</text><text x="120" y="120" font-size="13" fill="#4a3724" text-anchor="middle">用于焊接</text><text x="120" y="145" font-size="13" fill="#4a3724" text-anchor="middle">铁轨、冶炼</text><text x="120" y="170" font-size="13" fill="#4a3724" text-anchor="middle">难熔金属</text></svg>', caption: '图2　铝热反应由镁条引燃，放出极高热量，把氧化铁中的铁还原成熔融铁水。' },
      { type: 'warn', label: '易错·铝热反应', text: '铝热反应用的是<strong>氧化铁 Fe₂O₃ 与铝粉的混合物</strong>，不是铝和氧化亚铁。反应中铝被氧化，是还原剂；Fe₂O₃ 被还原，是氧化剂。不要误以为生成的铁是还原剂。另外反应温度极高，必须在坩埚中进行并远离易燃物，绝对不能在家里模仿。' },
      { type: 'heading', text: '四、合理开发与资源保护' },
      { type: 'paragraph', text: '金属矿产是不可再生的，挖一点少一点。今天多浪费一吨矿石，明天就少一吨原料。所以开发了金属资源，更要想着怎么省着用、循环用。' },
      { type: 'list', items: ['提高采矿和冶炼的回收率，减少尾矿和废渣', '回收废旧金属（如废铁、易拉罐），重新冶炼再利用', '杜绝乱采滥挖，保护矿区周围的土壤和水源', '开发低品位矿石的利用技术，延长资源寿命'] },
      { type: 'tip', label: '提示', text: '回收 1 吨废铝，比用铝土矿新炼 1 吨铝能节省大量电能和原料，还减少开采造成的生态破坏。所以平时把易拉罐、废铁分类回收，就是在为"可持续发展"出一份力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">金属资源的合理利用与循环</text><rect x="40" y="90" width="130" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="105" y="120" font-size="13" fill="#4a3724" text-anchor="middle">开采矿石</text><rect x="200" y="90" width="130" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="265" y="120" font-size="13" fill="#4a3724" text-anchor="middle">冶炼金属</text><rect x="360" y="90" width="130" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="425" y="120" font-size="13" fill="#4a3724" text-anchor="middle">制成用品</text><rect x="520" y="90" width="120" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="580" y="120" font-size="13" fill="#4a3724" text-anchor="middle">废旧回收</text><line x1="170" y1="115" x2="200" y2="115" stroke="#b5651d" stroke-width="2"/><line x1="330" y1="115" x2="360" y2="115" stroke="#b5651d" stroke-width="2"/><line x1="490" y1="115" x2="520" y2="115" stroke="#b5651d" stroke-width="2"/><path d="M580,140 Q600,240 425,240 Q200,240 105,150" fill="none" stroke="#d98e3a" stroke-width="2"/><polygon points="101,144 111,144 105,156" fill="#d98e3a"/><text x="340" y="275" font-size="13" fill="#d98e3a" text-anchor="middle">回收废金属可节约能源、减少开采、保护环境</text></svg>', caption: '图3　金属从开采到用品，再通过废旧回收回到冶炼环节，形成资源循环。' }
    ],
    exercises: [
      { type: 'choice', question: '下列金属中，最适合用电解法冶炼的是？', options: ['铁 Fe', '铜 Cu', '钠 Na', '汞 Hg'], answer: '钠 Na', explanation: '电解法用于冶炼最活泼的金属（K、Ca、Na、Mg、Al），因为它们的阳离子极难被普通还原剂还原。钠 Na 非常活泼，只能用电解熔融氯化钠或氯化钙混合物的方法制取。铁和铜用热还原法，汞用热分解法，都不用电解法。' },
      { type: 'choice', question: '铝热反应 2Al + Fe₂O₃ → 加热 → 2Fe + Al₂O₃ 中，作还原剂的是？', options: ['Fe₂O₃', 'Al', 'Fe', 'Al₂O₃'], answer: 'Al', explanation: '还原剂是在反应中失去电子、被氧化的物质。铝热反应中铝 Al 失去电子变成 Al₂O₃（铝从 0 价升到 +3 价），把 Fe₂O₃ 中的铁还原出来，所以 Al 是还原剂；Fe₂O₃ 是氧化剂；Fe 和 Al₂O₃ 是生成物，不是还原剂。' },
      { type: 'choice', question: '下列金属的冶炼适合用热分解法的是？', options: ['铝 Al', '铁 Fe', '银 Ag', '钠 Na'], answer: '银 Ag', explanation: '热分解法适用于最不活泼的金属（Hg、Ag 等），加热其氧化物即可分解出金属单质，例如氧化银加热分解为银和氧气。铝和钠太活泼，必须用电解法；铁用热还原法，都不能用简单的加热分解得到。' },
      { type: 'fill', question: '金属冶炼的本质是金属阳离子___电子，被还原为金属单质。', answer: '得到|得', explanation: '金属在矿石中多以阳离子（化合态）存在，冶炼就是让它重新变成单质。金属阳离子带正电，必须得到电子才能变成电中性的金属原子，这个过程叫还原。因此冶炼的本质是金属阳离子得电子被还原。' },
      { type: 'fill', question: '铝热反应常用于野外焊接铁轨，是因为反应过程中放出大量的___。', answer: '热|热量', explanation: '铝热反应是放热极强的反应，2Al 与 Fe₂O₃ 反应放出大量热，温度可达 2000℃ 以上，足以让生成的铁熔化呈铁水状，冷却后就把两段铁轨焊接在一起。正是利用它放出的大量热，才适合在没有电源的野外焊接。' }
    ]
  });
})();
