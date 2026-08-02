/* 地理 · 高三总复习 · 专题二 人文地理 · 第1章 人口 · 第3节 人口迁移 */
(function () {
  var v = gzGetVolume('geography', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u4',
    name: '第3节 人口迁移',
    chapter: '高三地理复习 · 专题二 人文地理 · 第1章 人口',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是人口迁移' },
      { type: 'paragraph', text: '人口迁移指人们变更定居地的空间流动行为，需同时满足三个条件：跨越一定行政界线、居住地发生永久性或长期变更、移动距离较长。短期旅游、出差、游牧不算迁移。按范围分国际迁移（跨国）和国内迁移（一国之内，如我国从农村到城市）。人口迁移改变人口分布，也是城市化的重要推力。' },
      { type: 'list', items: ['跨越行政界线（国际或国内）', '居住地长期或永久变更', '移动距离达到一定规模', '区别于旅游、出差等短期流动'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">人口迁移的两大类型</text><rect x="70" y="80" width="250" height="90" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="195" y="115" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">国际迁移</text><text x="195" y="142" font-size="12" fill="#1f3a4d" text-anchor="middle">跨越国界，改变国籍或长期居留</text><rect x="360" y="80" width="250" height="90" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="485" y="115" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">国内迁移</text><text x="485" y="142" font-size="12" fill="#1f3a4d" text-anchor="middle">一国之内，如农村迁往城市</text><text x="340" y="210" font-size="13" fill="#1f3a4d" text-anchor="middle">共同条件：跨界线、居住地长期变更、距离较长</text><rect x="120" y="235" width="440" height="55" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="260" font-size="13" fill="#1f3a4d" text-anchor="middle">短期旅游、出差、通勤不属于迁移</text><text x="340" y="282" font-size="13" fill="#1f3a4d" text-anchor="middle">迁移改变人口分布，也是城市化推力</text></svg>', caption: '图1　人口迁移按范围分国际与国内两类，须满足三条件。' },
      { type: 'keypoint', label: '重点·影响迁移的因素', text: '<strong>影响人口迁移的主要因素是经济（追求更好就业和收入），此外还有自然、社会、政治、个人因素。</strong>现代社会中经济因素是主导，但战争、灾害、政策、婚姻、教育也会触发迁移。分析迁移原因要坚持「推拉理论」：原住地的推力（如贫困、灾害）和迁入地的拉力（如就业、机会）共同作用。' },
      { type: 'heading', text: '二、推力与拉力理论' },
      { type: 'paragraph', text: '推拉理论把迁移原因拆为「推力」和「拉力」。推力是促使人们离开原住地的消极因素，如自然灾害、战乱、失业、环境污染；拉力是吸引人们迁入的积极因素，如更多就业、更高收入、更好教育医疗、气候宜人。当拉力大于推力，迁移就会发生。该理论是分析迁移最实用的框架。' },
      { type: 'list', items: ['推力：灾害、战乱、贫困、失业、环境恶化', '拉力：就业、高收入、优质教育医疗', '中介障碍：距离、制度、成本影响迁移难度', '个人因素：年龄、家庭、观念也起作用'] },
      { type: 'table', headers: ['因素类别', '具体例子', '作用方向'], rows: [['经济', '城市务工收入高', '拉力'], ['自然', '家乡干旱缺水', '推力'], ['政治', '政策鼓励移民', '拉力/推力'], ['社会', '子女教育机会', '拉力']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">推拉理论解释迁移</text><rect x="70" y="80" width="180" height="90" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="160" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">原住地 推力</text><text x="160" y="135" font-size="12" fill="#1f3a4d" text-anchor="middle">灾害 失业 贫困</text><rect x="430" y="80" width="180" height="90" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="520" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">迁入地 拉力</text><text x="520" y="135" font-size="12" fill="#1f3a4d" text-anchor="middle">就业 收入 教育</text><line x1="250" y1="125" x2="430" y2="125" stroke="#c1583b" stroke-width="3"/><text x="340" y="118" font-size="12" fill="#c1583b" text-anchor="middle">人口迁移</text><rect x="200" y="210" width="280" height="60" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="235" font-size="13" fill="#1f3a4d" text-anchor="middle">拉力 大于 推力 时，迁移发生</text><text x="340" y="258" font-size="13" fill="#1f3a4d" text-anchor="middle">经济因素是现代迁移主导</text></svg>', caption: '图2　原住地推力与迁入地拉力共同作用，拉力大于推力时迁移发生。' },
      { type: 'warn', label: '易错·迁移判断', text: '① 人口流动不等于人口迁移，短期打工春节返乡属流动而非迁移；② 城市化过程中的「民工潮」多为暂住，若未变更定居地不算严格迁移；③ 经济因素虽主导，但灾害、政策等也可能成为主因，不能一概而论；④ 迁入地拉力大不代表所有人都会迁，还受成本和制度限制。' },
      { type: 'heading', text: '三、人口迁移的影响' },
      { type: 'paragraph', text: '迁移对迁入地和迁出地影响不同。对迁入地：补充劳动力、促进经济，但可能增加住房、交通、治安压力；对迁出地：缓解人地矛盾、增加汇款收入，但可能流失青壮年和人才。对国家整体，合理迁移优化资源配置。分析影响要坚持「一分为二」，既看利也看弊。' },
      { type: 'example', label: '例题·迁移影响分析', text: '题目：大量农村青壮年迁入城市，对农村有什么影响？<br>解析：有利方面缓解农村人地矛盾、外出者寄回收入改善生活；不利方面是农村劳动力尤其青壮年流失，出现留守老人儿童、耕地撂荒。答题要辩证，不能只说「劳动力流失」一面，也要提到汇款和矛盾缓解，体现一分为二。' },
      { type: 'tip', label: '提示·影响题两面写', text: '答迁移影响题，分别写「对迁入地」和「对迁出地」，每地都写利与弊。常见利：补劳动力、促交流；常见弊：公共资源紧张、人才流失。套用「有利加不利」结构，答案更完整，高考评分常按两面给分。' },
      { type: 'heading', text: '四、我国的人口迁移特点' },
      { type: 'paragraph', text: '我国人口迁移经历了几个阶段：改革开放前受户籍限制，迁移少且多为国家有计划搬迁；改革开放后，大量中西部农村人口向东南沿海城市迁移，形成世界最大规模乡城迁移。近年出现城市群内部迁移、部分人返乡创业等新特点。总体方向是从内陆到沿海、从乡村到城市、从欠发达区到发达区。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">我国人口迁移主要方向</text><rect x="80" y="80" width="180" height="70" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="170" y="115" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">中西部农村</text><text x="170" y="138" font-size="12" fill="#1f3a4d" text-anchor="middle">迁出地</text><rect x="420" y="80" width="180" height="70" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="510" y="115" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">东南沿海城市</text><text x="510" y="138" font-size="12" fill="#1f3a4d" text-anchor="middle">迁入地</text><path d="M260 115 Q350 70 420 115" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="340" y="65" font-size="12" fill="#2a6fa8" text-anchor="middle">乡→城 内陆→沿海</text><text x="340" y="210" font-size="13" fill="#1f3a4d" text-anchor="middle">总体方向：从内陆到沿海、从乡村到城市、从欠发达区到发达区</text><rect x="120" y="235" width="440" height="45" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="263" font-size="13" fill="#1f3a4d" text-anchor="middle">改革开放后形成世界最大规模乡城迁移</text></svg>', caption: '图3　我国人口从中西部农村大量迁往东南沿海城市，规模居世界首位。' },
      { type: 'heading', text: '五、国际人口迁移' },
      { type: 'paragraph', text: '国际迁移历史上曾因殖民、奴隶贸易、务工等发生。现代国际迁移多从发展中国家流向发达国家，或战乱国流向稳定国，动因是经济差距与和平环境。移民带来文化交流，也引发接收国的就业与社会融合议题。理解国际迁移同样可用推拉理论。' },
      { type: 'list', items: ['历史：殖民、贸易、务工带动', '现代：发展中→发达、战乱→稳定', '动因：经济差距与和平环境', '影响：文化交融与社会融合议题'] }
    ],
    exercises: [
      { type: 'choice', question: '下列属于人口迁移的是？', options: ['周末到周边城市旅游', '农村人口到城市定居务工', '节假日返乡探亲', '每天通勤上下班'], answer: '农村人口到城市定居务工', explanation: '人口迁移需满足跨越行政界线、居住地长期或永久变更、距离较长三条件。农村人口到城市定居符合；旅游、探亲、通勤都是短期流动，居住地未长期变更，不属于迁移。' },
      { type: 'choice', question: '推拉理论中的「拉力」是指？', options: ['促使离开原住地的消极因素', '吸引迁入的积极因素', '两地间的地理距离', '政府强制搬迁命令'], answer: '吸引迁入的积极因素', explanation: '推拉理论中，推力是促使离开原住地的消极因素（如灾害、失业），拉力是吸引人们迁入的积极因素（如就业、高收入、好教育）。距离和强制命令不属于拉力的定义，拉力强调对迁移者的吸引。' },
      { type: 'choice', question: '关于人口迁移影响的叙述，正确的是？', options: ['对迁入地只有利没有弊', '对迁出地只有弊没有利', '应一分为二看迁入地与迁出地', '迁移不会影响人口分布'], answer: '应一分为二看迁入地与迁出地', explanation: '迁移对迁入地既补劳动力促经济（利），也可能加重住房交通压力（弊）；对迁出地既缓解人地矛盾又有汇款（利），也流失人才（弊）。因此要辩证看待，且迁移本身会改变人口分布，故只有「一分为二」正确。' },
      { type: 'fill', question: '判断人口迁移需同时满足三个条件：跨越行政界线、居住地发生___变更、移动距离达到一定规模。', answer: '长期或永久', explanation: '人口迁移的三个必要条件是跨越行政界线、居住地长期或永久性变更、移动距离较长。短期旅游、出差、通勤只改变位置不改变定居地，不算迁移。答题时三条缺一不可，尤其注意「长期或永久」这一时间要件。' },
      { type: 'fill', question: '我国改革开放后，人口主要从中西部农村迁往___沿海城市，形成世界最大规模的乡城迁移。', answer: '东南', explanation: '改革开放后，我国人口迁移总体方向是从内陆到沿海、从乡村到城市、从欠发达区到发达区，大量中西部农村人口涌入东南沿海城市务工定居。这一乡城迁移规模居世界首位，是理解我国城镇化的重要背景。' }
    ]
  });
})();
