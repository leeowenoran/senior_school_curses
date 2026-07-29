/* 生物学 · 选择性必修2 生物与环境 · 第2章 · 课时：第2节 群落的主要类型 */
(function () {
  var v = gzGetVolume('biology', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u5',
    name: '第2节 群落的主要类型',
    chapter: '选择性必修2 生物与环境 · 第2章 群落及其演替',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是群落' },
      { type: 'paragraph', text: '在同一时间内，聚集在一定区域中的<strong>各种生物种群</strong>的集合，叫作群落。换句话说，一片森林里不只有树木，还有草、灌木、蘑菇、昆虫、鸟、细菌等，这些所有生物的种群共同生活在一起，就构成了一个群落。群落研究的不是某一种生物，而是许多种生物的集合以及它们之间的相互关系。' },
      { type: 'list', items: ['种群：一定区域内同种生物的所有个体，例如一片草地上的所有蒲公英', '群落：一定区域内所有种群的集合，例如这片草地上的全部植物、动物和微生物'] },
      { type: 'keypoint', label: '重点·群落概念', text: '<strong>群落</strong>是同一时间内聚集在一定区域中各种生物种群的集合。判断一个群体是不是群落，关键看两点：一是「一定时间、一定区域」，二是「全部生物」，包括植物、动物和微生物，缺一不可。' },
      { type: 'heading', text: '二、陆地生物群落的主要类型' },
      { type: 'paragraph', text: '陆地群落的类型并不是随机出现的，而是深受当地<strong>气候</strong>的影响，尤其是降水量和温度。降水多、温度适宜的地方往往草木茂盛，形成森林；降水较少的地方草本植物占优势，形成草原；降水极少、气候干旱的地方则发育出荒漠群落。因此，从森林到草原再到荒漠，本质上反映了水热条件由好到差的变化。' },
      { type: 'list', items: ['森林群落：分布在湿润或较湿润地区，乔木占据优势，动植物种类最丰富', '草原群落：分布在半干旱地区，草本植物为主，动物多善奔跑或穴居', '荒漠群落：分布在极度干旱地区，物种稀少，生物都具有极强的耐旱本领'] },
      { type: 'paragraph', text: '<strong>森林群落</strong>还能进一步细分。在终年高温多雨的热带地区，形成热带雨林，物种极其丰富；在亚热带湿润地区，形成常绿阔叶林；在温带四季分明地区，形成落叶阔叶林，冬天树木落叶；在寒温带，形成针叶林，以松、柏等针叶树为主。' },
      { type: 'paragraph', text: '<strong>草原群落</strong>可分为热带草原和温带草原。这里的植物以多年生草本为主，风力作用强，很多动物如瞪羚、野兔善于奔跑，地下穴居的小动物也很多。草原上降雨集中在雨季，旱季时草木枯黄。' },
      { type: 'paragraph', text: '<strong>荒漠群落</strong>的极端环境塑造了独特的生物。仙人掌的叶变成刺以减少水分散失，骆驼刺的根可深入地下十几米吸水；动物多在夜间活动，避开白天的酷热。荒漠生物的共同特点是耐旱、耐饥、耐渴。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">陆地群落的主要类型（随水分和温度而变化）</text><rect x="40" y="70" width="180" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">森林群落</text><text x="130" y="138" font-size="13" fill="#2e3a22" text-anchor="middle">湿润、乔木为主</text><rect x="250" y="70" width="180" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">草原群落</text><text x="340" y="138" font-size="13" fill="#2e3a22" text-anchor="middle">较干、草本为主</text><rect x="460" y="70" width="180" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">荒漠群落</text><text x="550" y="138" font-size="13" fill="#2e3a22" text-anchor="middle">极干、稀疏耐旱</text><polygon points="221,135 258,123 258,147" fill="#3f7d1e"/><polygon points="431,135 468,123 468,147" fill="#3f7d1e"/><text x="340" y="248" font-size="13" fill="#2e3a22" text-anchor="middle">降水量由多到少：森林 → 草原 → 荒漠</text><text x="340" y="300" font-size="13" fill="#5aa832" text-anchor="middle">气候（水热条件）决定陆地群落的类型</text></svg>', caption: '图1　陆地群落随降水量减少依次为森林、草原、荒漠。' },
      { type: 'tip', label: '提示·记忆陆地群落', text: '记忆小窍门：把陆地群落想象成「水多到水少」的连续谱。水最多→森林（乔木高），水中等→草原（草矮），水最少→荒漠（几乎不长）。考试问某地区是什么群落，先想它降水多不多、温度够不够。' },
      { type: 'heading', text: '三、水域生物群落' },
      { type: 'paragraph', text: '<strong>淡水群落</strong>分布在江河、湖泊、池塘、沼泽等淡水环境中。依据水的深浅和底部性质，可分为沿岸带、表水层和深水层等。沿岸带水浅、光照足，芦苇等挺水植物和鱼类丰富；表水层有浮游藻类和浮游动物；深水层光照弱，生物较少。' },
      { type: 'paragraph', text: '<strong>海洋群落</strong>是地球上最大的生物群落。从浅到深可分为潮间带、浅海地带和深海地带。浅海阳光充足，有海带、紫菜等大型藻类和珊瑚礁生物；远洋表层有随波漂流的浮游生物，是很多鱼类的食物基础；深海黑暗高压，生物靠化能合成或沉积的有机物生存，如发光鱼、管栖蠕虫。' },
      { type: 'list', items: ['淡水群落：盐度低，包括河流、湖泊、池塘等，生物多适应低盐环境', '海洋群落：盐度高、面积大，从潮间带到深海生物种类差异显著'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">水域生物群落的两大类型</text><rect x="60" y="70" width="260" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">淡水群落</text><text x="190" y="138" font-size="13" fill="#2e3a22" text-anchor="middle">河流、湖泊、池塘</text><polygon points="321,132 358,120 358,144" fill="#3f7d1e"/><rect x="360" y="70" width="260" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">海洋群落</text><text x="490" y="138" font-size="13" fill="#2e3a22" text-anchor="middle">潮间带、浅海、深海</text><text x="340" y="250" font-size="13" fill="#5aa832" text-anchor="middle">二者都由水环境决定，差异主要在盐度和水深</text></svg>', caption: '图2　水域群落分为淡水群落和海洋群落，差异主要在盐度与深度。' },
      { type: 'table', headers: ['群落类型', '主要分布', '优势植物', '特点'], rows: [['森林群落', '湿润地区', '乔木', '物种最丰富，结构最复杂'], ['草原群落', '半干旱地区', '草本植物', '动物多善奔跑或穴居'], ['荒漠群落', '极度干旱地区', '耐旱灌木、肉质植物', '物种稀少，耐旱性强'], ['淡水群落', '河流湖泊', '芦苇等水生植物', '盐度低'], ['海洋群落', '海洋', '藻类', '面积最大，分带明显']] },
      { type: 'warn', label: '易错·群落类型与气候', text: '易错点：群落类型不是由「纬度」或「海拔」直接决定的，而是由当地的<strong>水热条件</strong>决定。纬度高、海拔高通常温度低，但归根结底是温度、降水塑造了群落。另外，荒漠不等于「没有生物」，荒漠群落物种虽少，但特有耐旱生物依然存在，不能把荒漠群落说成空无一物。' },
      { type: 'heading', text: '四、群落类型的分布规律' },
      { type: 'paragraph', text: '在地球表面，群落类型呈现出明显的水平地带性：从赤道向两极，随温度降低，依次出现热带雨林、常绿阔叶林、落叶阔叶林、针叶林、苔原；从沿海向内陆，随降水减少，依次出现森林、草原、荒漠。在山地，随海拔升高、温度下降，也会类似地从森林过渡到高山草甸、苔原，这叫垂直地带性。' },
      { type: 'example', label: '例题·判断群落类型', text: '题目：我国西北内陆降水稀少、气候干旱，该地区的典型群落类型是？<br>A. 森林群落　B. 草原群落　C. 荒漠群落　D. 苔原群落<br>解析：群落类型由水热条件决定。西北内陆降水极少、蒸发强烈，属于极度干旱环境，对应荒漠群落，其生物具有极强的耐旱本领。森林需要充沛降水，草原降水较中等，苔原出现在高纬严寒地区，均不符合西北内陆的干旱特征，因此选 C。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">群落类型随水热条件的水平变化</text><rect x="40" y="80" width="130" height="100" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="105" y="125" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">森林</text><rect x="190" y="80" width="130" height="100" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="255" y="125" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">草原</text><rect x="340" y="80" width="130" height="100" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="405" y="125" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">荒漠</text><rect x="490" y="80" width="130" height="100" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="555" y="125" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">苔原</text><polygon points="171,132 208,120 208,144" fill="#3f7d1e"/><polygon points="321,132 358,120 358,144" fill="#3f7d1e"/><polygon points="471,132 508,120 508,144" fill="#3f7d1e"/><text x="340" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">从沿海到内陆：降水减少</text><text x="340" y="280" font-size="13" fill="#5aa832" text-anchor="middle">水热条件决定分布，呈地带性规律</text></svg>', caption: '图3　从沿海到内陆，随降水减少群落由森林过渡到苔原。' },
      { type: 'paragraph', text: '总结：群落的主要类型分为陆地群落和水域群落两大类。陆地群落包括森林、草原、荒漠、苔原等，受水分和温度支配；水域群落包括淡水群落和海洋群落，受盐度、水深和光照支配。认识群落类型，有助于我们理解生物与环境的相互关系，也是进一步学习群落演替和生态系统的基础。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于群落的叙述，正确的是？', options: ['群落是同一时间内聚集在一定区域中各种生物种群的集合', '群落只包括植物和动物', '一个池塘里的所有鱼构成一个群落', '群落中的物种之间没有任何联系'], answer: '群落是同一时间内聚集在一定区域中各种生物种群的集合', explanation: '群落强调的是一定区域中全部生物的集合，既包含植物、动物，也包含微生物，而不是仅指某几类。一个池塘里的所有鱼只是多个种群，不是全部生物，不能算群落。群落内部物种之间存在着捕食、竞争、共生等错综复杂的联系，并非没有联系。因此正确选项为群落是各种生物种群的集合。' },
      { type: 'choice', question: '下列群落类型中，主要分布在湿润、降水量丰富地区的是？', options: ['荒漠群落', '草原群落', '森林群落', '苔原群落'], answer: '森林群落', explanation: '森林群落分布在降水充沛、气候较湿润的地区，乔木占据优势，动植物种类最为丰富。荒漠群落分布在极度干旱地区，草原群落在半干旱地区，苔原出现在高纬严寒、生长季短的地区。所以降水丰富地区对应的典型群落是森林群落。' },
      { type: 'choice', question: '关于水域群落的叙述，正确的是？', options: ['海洋群落不含生产者', '淡水群落和海洋群落都属于水域群落', '水域群落没有分解者', '水域群落不受光照影响'], answer: '淡水群落和海洋群落都属于水域群落', explanation: '水域群落按环境可分为淡水群落（河流、湖泊等）和海洋群落（潮间带、浅海、深海等），二者都属于水域群落。海洋群落中有大量藻类作为生产者，水域中也有细菌等分解者，且光照强弱直接影响表水层藻类的分布。因此正确的叙述是淡水群落和海洋群落都属于水域群落。' },
      { type: 'fill', question: '陆地群落的类型主要由当地的___和温度等气候条件决定，从森林到荒漠反映了水分的减少。', answer: '水分', explanation: '陆地群落的类型主要受气候中的水热条件控制。在温度适宜的前提下，降水量的多少决定了群落的面貌：降水丰富处为森林，降水中等处为草原，降水极少处为荒漠。所以填空应为水分，它和温度共同决定了陆地群落的分布。' },
      { type: 'fill', question: '在从沿海向内陆的水平方向上，随着降水减少，陆地群落依次由森林变为草原，再变为___。', answer: '荒漠', explanation: '受海洋湿润气流影响，沿海地区降水多，发育森林群落；向内陆推进，降水逐渐减少，依次出现草原群落和荒漠群落。这是群落水平地带性的典型表现，因此降水最少处对应的群落类型是荒漠。' }
    ]
  });
})();
