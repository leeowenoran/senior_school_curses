/* 地理 · 高三总复习 · 专题二 人文地理 · 第1章 人口 · 第2节 人口增长与人口问题 */
(function () {
  var v = gzGetVolume('geography', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u3',
    name: '第2节 人口增长与人口问题',
    chapter: '高三地理复习 · 专题二 人文地理 · 第1章 人口',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、人口增长的历史轨迹' },
      { type: 'paragraph', text: '世界人口增长在不同时期速度差异巨大。农业革命前增长极慢；农业革命后由于粮食增产，增速加快但仍缓慢；工业革命后，生产力飞跃、医疗改善、死亡率大幅下降，人口开始爆炸性增长；20 世纪后半叶，多数发展中国家人口迅猛增加，发达国家则转入低增长。总体呈「先慢后快再趋稳」的「J」形轨迹。' },
      { type: 'list', items: ['农业革命前：极其缓慢，受制于采集狩猎', '农业革命后：有所加快，粮食增产支撑', '工业革命后：快速增长，死亡率下降', '现代：发展中国家快、发达国家慢甚至负增长'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">世界人口增长轨迹（J 形）</text><line x1="80" y1="280" x2="620" y2="280" stroke="#1f3a4d" stroke-width="2"/><line x1="80" y1="60" x2="80" y2="280" stroke="#1f3a4d" stroke-width="2"/><text x="60" y="290" font-size="12" fill="#1f3a4d">时间→</text><text x="40" y="90" font-size="12" fill="#1f3a4d">人口</text><path d="M80 278 Q200 276 320 250 Q420 220 500 160 Q560 110 600 70" fill="none" stroke="#2a6fa8" stroke-width="3"/><circle cx="200" cy="270" r="4" fill="#c1583b"/><text x="150" y="262" font-size="11" fill="#c1583b">农业革命</text><circle cx="360" cy="232" r="4" fill="#c1583b"/><text x="370" y="225" font-size="11" fill="#c1583b">工业革命</text><text x="430" y="200" font-size="12" fill="#1f3a4d">增长加速</text><text x="340" y="315" font-size="13" fill="#1f3a4d" text-anchor="middle">先极慢，工业革命后加速，呈现「J」形爆炸性增长</text></svg>', caption: '图1　世界人口在农业、工业革命后增速显著加快，呈 J 形轨迹。' },
      { type: 'keypoint', label: '重点·人口自然增长', text: '<strong>人口自然增长由出生率和死亡率共同决定，自然增长率 = 出生率 − 死亡率。</strong>出生率高于死亡率时人口增加，反之减少。分析人口增长快慢，要看自然增长率高低；而增长率变化往往源于死亡率先降（医疗进步）还是出生率后降（观念转变），这是判断人口阶段的关键。' },
      { type: 'heading', text: '二、人口增长模式（人口转变）' },
      { type: 'paragraph', text: '人口学家把人口增长分为原始型、传统型、现代型三类，也可表述为「高高低—高低高—低低低」的过渡。原始型高出生高死亡低增长；传统型高出生低死亡高增长；现代型低出生低死亡低增长。发达国家多已进入现代型，部分发展中国家仍处传统型向现代型过渡阶段。' },
      { type: 'list', items: ['原始型：高出生、高死亡、低增长', '传统型：高出生、低死亡、高增长', '现代型：低出生、低死亡、低增长', '转变动力：工业化、城市化、教育水平提高'] },
      { type: 'table', headers: ['模式', '出生率', '死亡率', '自然增长'], rows: [['原始型', '高', '高', '低'], ['传统型', '高', '低', '高'], ['现代型', '低', '低', '低']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">人口增长模式的「三低」转变</text><rect x="70" y="70" width="170" height="90" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="155" y="100" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">原始型</text><text x="155" y="125" font-size="12" fill="#1f3a4d" text-anchor="middle">高高低</text><text x="155" y="148" font-size="11" fill="#1f3a4d" text-anchor="middle">低增长</text><rect x="255" y="70" width="170" height="90" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="100" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">传统型</text><text x="340" y="125" font-size="12" fill="#1f3a4d" text-anchor="middle">高低高</text><text x="340" y="148" font-size="11" fill="#1f3a4d" text-anchor="middle">高增长</text><rect x="440" y="70" width="170" height="90" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="525" y="100" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">现代型</text><text x="525" y="125" font-size="12" fill="#1f3a4d" text-anchor="middle">低低低</text><text x="525" y="148" font-size="11" fill="#1f3a4d" text-anchor="middle">低增长</text><line x1="240" y1="115" x2="255" y2="115" stroke="#2a6fa8" stroke-width="2"/><line x1="425" y1="115" x2="440" y2="115" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="210" font-size="13" fill="#1f3a4d" text-anchor="middle">转变方向：出生率与死亡率先后下降</text><rect x="120" y="240" width="440" height="55" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="265" font-size="13" fill="#1f3a4d" text-anchor="middle">发达国家多现代型，发展中国家多数处于过渡阶段</text><text x="340" y="285" font-size="13" fill="#1f3a4d" text-anchor="middle">死亡率先降、出生率后降是判断关键</text></svg>', caption: '图2　人口转变由高高低经高低高走向低低低，出生与死亡率依次下降。' },
      { type: 'warn', label: '易错·增长率与模式', text: '① 自然增长率高不等于人口总量一定大，还要看基数；② 死亡率下降往往先于出生率下降，所以传统型会出现高增长；③ 「低低低」现代型也可能自然增长率为负（出生低于死亡），如日本、德国出现人口减少；④ 不能把「发展中国家都高增长」绝对化，中国已转入现代型。' },
      { type: 'heading', text: '三、人口问题与对策' },
      { type: 'paragraph', text: '不同增长模式带来不同问题。高增长传统型国家面临就业、教育、资源压力，对策是控制人口、提高素质；低增长现代型国家则遭遇老龄化、劳动力不足、养老负担重，对策是鼓励生育、吸纳移民、延迟退休。我国过去控制人口，现在面临老龄化，政策转向鼓励生育和积极应对。' },
      { type: 'example', label: '例题·人口增长模式判断', text: '题目：某国出生率 1.2%、死亡率 1.0%，属于哪种模式？<br>解析：出生率和死亡率都低，自然增长率仅 0.2%，属于现代型（低低低）。若出生高死亡低则为传统型。判断时先看两率高低，再算自然增长率，结合国家发展阶段的典型特征即可归类。注意自然增长率虽低但仍为正，人口缓慢增加。' },
      { type: 'tip', label: '提示·答题对策配对', text: '答人口问题对策题，先判断是「增长过快」还是「增长过慢（老龄化）」：增长快则控制数量、提高质量、发展经济；增长慢则鼓励生育、推迟退休、引进移民、完善养老。对策要针对问题，不能颠倒，否则会失分。' },
      { type: 'heading', text: '四、人口老龄化' },
      { type: 'paragraph', text: '老龄化指 60 岁及以上人口占比超过 10%，或 65 岁及以上超过 7%。它伴随寿命延长和出生率下降而来，会带来劳动力短缺、社保压力、消费结构变化等影响。应对老龄化既要放开生育，也要发展银发经济、健全养老体系，是人类共同挑战。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">老龄化带来的主要挑战</text><rect x="70" y="70" width="140" height="55" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="140" y="103" font-size="13" fill="#1f3a4d" text-anchor="middle">劳动力不足</text><rect x="270" y="70" width="140" height="55" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="103" font-size="13" fill="#1f3a4d" text-anchor="middle">养老负担重</text><rect x="470" y="70" width="140" height="55" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="540" y="103" font-size="13" fill="#1f3a4d" text-anchor="middle">社保压力</text><line x1="140" y1="125" x2="340" y2="180" stroke="#2a6fa8" stroke-width="1.5"/><line x1="340" y1="125" x2="340" y2="180" stroke="#2a6fa8" stroke-width="1.5"/><line x1="540" y1="125" x2="340" y2="180" stroke="#2a6fa8" stroke-width="1.5"/><rect x="200" y="180" width="280" height="55" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="212" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">应对：鼓励生育 延迟退休 引进移民</text><text x="340" y="265" font-size="13" fill="#1f3a4d" text-anchor="middle">标准：65岁及以上＞7%，或60岁及以上＞10%</text></svg>', caption: '图3　老龄化引发劳动力与养老压力，需多策并举应对。' },
      { type: 'heading', text: '五、我国的人口政策演变' },
      { type: 'paragraph', text: '我国人口政策随发展阶段调整：20 世纪后期推行计划生育控制过快增长；进入 21 世纪后，人口老龄化加剧、劳动力结构变化，逐步放宽至「全面二孩」「三孩」并配套支持措施。政策始终围绕人口与经济社会协调发展这一目标，理解政策要放在当时的国情背景下。' },
      { type: 'list', items: ['过去：计划生育控制人口过快增长', '现在：放开二孩三孩应对老龄化', '方向：提升人口质量、改善结构', '目标：人口与资源环境协调发展'] }
    ],
    exercises: [
      { type: 'choice', question: '人口自然增长率的计算公式是？', options: ['出生率+死亡率', '出生率−死亡率', '死亡率−出生率', '出生率×死亡率'], answer: '出生率−死亡率', explanation: '人口自然增长由出生和死亡两方面决定，自然增长率等于出生率减去死亡率。当出生率高于死亡率时人口增加，反之减少。其余运算均无地理意义，不能用于衡量自然增长快慢。' },
      { type: 'choice', question: '下列符合「现代型」人口模式特征的是？', options: ['高出生高死亡低增长', '高出生低死亡高增长', '低出生低死亡低增长', '低出生高死亡负增长'], answer: '低出生低死亡低增长', explanation: '现代型又称「低低低」模式，出生率和死亡率都低，自然增长低，常见于发达国家。高高低是原始型，高低高是传统型。低出生高死亡可能出现负增长，但现代型典型表述是低低低。' },
      { type: 'choice', question: '人口老龄化通常带来的问题是？', options: ['劳动力过剩', '劳动力不足和养老压力增大', '出生率自动升高', '粮食严重过剩'], answer: '劳动力不足和养老压力增大', explanation: '老龄化意味着老年人口比重上升，劳动年龄人口相对减少，会出现劳动力不足、养老金和医疗负担加重等问题。它不会让出生率自动升高，也不会造成劳动力过剩或粮食过剩，故只有劳动力不足和养老压力正确。' },
      { type: 'fill', question: '国际上通常把 65 岁及以上人口占总人口比重超过___% 视为进入老龄化社会；若用 60 岁及以上口径，则超过___%。', answer: '7；10', explanation: '老龄化有两个常用标准：65岁及以上人口占比超过7%，或60岁及以上超过10%，即视为老龄化社会。我国两个口径都已超过，面临深度老龄化挑战。答题时要根据题目给的年龄口径选择对应数值。' },
      { type: 'fill', question: '人口增长模式从传统型转向现代型，通常是___率率先下降（医疗进步），随后___率逐渐下降（观念转变）。', answer: '死亡；出生', explanation: '人口转变中，医疗和粮食改善使死亡率先下降，形成高出生低死亡的高增长传统型；之后随教育、城市化和生育观念变化，出生率才逐步下降，最终进入低低低的现代型。抓住「死亡先降、出生后降」的顺序有助于判断人口阶段。' }
    ]
  });
})();
