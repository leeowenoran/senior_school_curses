/* 思想政治 · 选择性必修2 · 法律与生活 · 第十课 诉讼实现公平正义 */
(function () {
  var v = gzGetVolume('politics', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u10',
    name: '第十课 诉讼实现公平正义',
    chapter: '高二思想政治（选择性必修2 法律与生活）· 第十课 诉讼实现公平正义',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、诉讼是把"理"交给法官' },
      { type: 'paragraph', text: '诉讼就是"打官司"，是公民、法人或其他组织认为自己的合法权益被侵害，依法向法院起诉、由法官居中裁判的活动。它是解决纠纷最权威、最具强制力的方式，也是守护公平正义的最后一道防线。' },
      { type: 'keypoint', label: '重点·诉讼的基本特点', text: '<strong>诉讼具有三个鲜明特点：一是国家强制性，法院的裁判以国家强制力为后盾；二是公开审判（法定不公开情形除外），过程接受监督；三是以事实为根据、以法律为准绳，程序严格规范。正因如此，诉讼被称为"最后一道防线"。</strong>' },
      { type: 'list', items: ['原告：认为权益受侵害、向法院起诉的一方。', '被告：被起诉、应诉的一方。', '法院：依法独立行使审判权的国家机关。'] },

      { type: 'heading', text: '二、起诉与管辖：去哪个法院告' },
      { type: 'paragraph', text: '想打官司，第一步是起诉，但要先解决"去哪级、哪个法院"的问题，这在法律上叫管辖。告错了法院，案件可能不被受理。' },
      { type: 'table', headers: ['概念', '含义'], rows: [['级别管辖', '上下级法院之间受理第一审案件的分工（基层、中级、高级、最高）'], ['地域管辖', '同级法院之间受理案件的分工，一般"原告就被告"'], ['专属管辖', '因不动产等纠纷由特定法院管辖']] },
      { type: 'keypoint', label: '重点·"原告就被告"原则', text: '<strong>民事诉讼的一般地域管辖实行"原告就被告"，即由被告住所地法院管辖，方便法院查清事实、也防止原告滥用诉权。但有例外：对下落不明、被采取强制措施的人等，可由原告住所地法院管辖。记住"一般去被告地，例外去原告地"。</strong>' },
      { type: 'warn', label: '易错·级别管辖不是"越大越好"', text: '很多同学以为"大案子去最高法院"。其实绝大多数第一审民事案件由基层人民法院管辖，中级法院管重大涉外、本辖区有重大影响的案件，高级和最高法院管的更少。所以起诉一般先去基层法院，别一上来就找高级别法院，否则可能不予受理。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">法院的级别管辖</text><rect x="120" y="70" width="200" height="55" rx="10" fill="#b8334a"/><text x="220" y="102" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">基层人民法院</text><rect x="360" y="70" width="200" height="55" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="460" y="102" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">中级法院</text><rect x="120" y="150" width="200" height="55" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="220" y="182" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">高级法院</text><rect x="360" y="150" width="200" height="55" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="460" y="182" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">最高法院</text><text x="340" y="250" font-size="12" fill="#3d1f24" text-anchor="middle">绝大多数一审民事案件由基层法院管辖。</text><text x="340" y="280" font-size="12" fill="#3d1f24" text-anchor="middle">级别越高管得越少、案件影响越大。</text></svg>', caption: '图1　四级法院的级别管辖分工。' },

      { type: 'heading', text: '三、举证责任：谁主张，谁举证' },
      { type: 'paragraph', text: '打官司靠证据。法律对举证责任作了基本安排：一般实行"谁主张，谁举证"，但在特殊侵权等情形下适用举证责任倒置。' },
      { type: 'table', headers: ['情形', '举证规则'], rows: [['一般民事', '谁主张谁举证，当事人对自己提出的主张提供证据'], ['特殊侵权', '举证责任倒置，由被告证明自己无过错或无关'], ['行政诉讼', '主要由被告（行政机关）举证']] },
      { type: 'keypoint', label: '重点·证据的种类', text: '<strong>民事诉讼法规定的证据包括：当事人的陈述、书证、物证、视听资料、电子数据、证人证言、鉴定意见、勘验笔录八大类。打官司要有证据意识，平时注意留存合同、聊天记录、票据、录音等，关键时刻才能证明自己的主张。</strong>' },
      { type: 'warn', label: '易错·"我有理"不等于"我能赢"', text: '不少当事人说"我明明有理，法院凭什么不判我赢"。因为诉讼讲证据，有理但拿不出证据，法院难以支持。所以"谁主张谁举证"提醒我们：维权要留痕。另外行政诉讼中主要由行政机关举证证明其行政行为合法，这是倒置的体现，和民事诉讼不同。' },

      { type: 'heading', text: '四、诉讼权利与程序保障' },
      { type: 'paragraph', text: '为保障当事人打得起、打得明白的官司，法律赋予当事人广泛的诉讼权利，并设置代理、法律援助等救济。' },
      { type: 'list', items: ['委托诉讼代理人：可委托律师、基层法律服务工作者等代理民事、行政诉讼。', '委托辩护人：刑事被告人可委托辩护人，保障辩护权。', '申请回避：认为审判人员与案件有利害关系，可申请其退出。', '法律援助：经济困难或特定案件当事人可获无偿法律帮助。'] },
      { type: 'keypoint', label: '重点·两审终审制', text: '<strong>我国诉讼实行两审终审制：一个案件经过两级法院审判即告终结。当事人对一审判决、裁定不服，可在法定期限内向上一级法院上诉；二审法院作出的判决、裁定是终审的，立即生效。但最高法一审的案件一审即终审。小额诉讼等也有一审终审的特殊规定。</strong>' },
      { type: 'example', label: '例子·请不起律师怎么办', text: '老张被拖欠工资又无力支付律师费，他可以向法律援助机构申请法律援助，符合条件的由指派的律师免费帮他打官司。这体现了"法律面前人人平等"不只是口号——通过法律援助，经济困难的人也能平等地行使诉讼权利，不让"没钱"成为寻求正义的障碍。' },
      { type: 'tip', label: '学习提示', text: '本课主线：起诉管辖（去哪告）→举证责任（拿什么证明）→诉讼权利（怎么保障）。硬知识点：级别管辖四级、一般"原告就被告"、谁主张谁举证、特殊侵权与行政诉讼倒置、两审终审、法律援助。把这些串成一条线，诉讼流程就清楚了。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">民事诉讼的一般流程</text><rect x="40" y="90" width="130" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="105" y="125" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">起诉</text><line x1="170" y1="120" x2="200" y2="120" stroke="#d4485a" stroke-width="2"/><polygon points="200,113 214,120 200,127" fill="#d4485a"/><rect x="210" y="90" width="130" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="275" y="125" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">受理审理</text><line x1="340" y1="120" x2="370" y2="120" stroke="#d4485a" stroke-width="2"/><polygon points="370,113 384,120 370,127" fill="#d4485a"/><rect x="380" y="90" width="130" height="60" rx="10" fill="#b8334a"/><text x="445" y="125" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">一审判决</text><line x1="510" y1="120" x2="540" y2="120" stroke="#d4485a" stroke-width="2"/><polygon points="540,113 554,120 540,127" fill="#d4485a"/><rect x="550" y="90" width="100" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="600" y="125" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">上诉二审</text><text x="340" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">两审终审：经两级法院审判即终结，二审为终审。</text></svg>', caption: '图2　民事诉讼一般经起诉、审理、一审、二审。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">举证责任的三种安排</text><rect x="40" y="80" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="130" y="115" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">一般民事</text><text x="130" y="140" font-size="12" fill="#3d1f24" text-anchor="middle">谁主张谁举证</text><rect x="250" y="80" width="180" height="70" rx="10" fill="#b8334a"/><text x="340" y="115" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">特殊侵权</text><text x="340" y="140" font-size="12" fill="#fff" text-anchor="middle">举证责任倒置</text><rect x="460" y="80" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="550" y="115" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">行政诉讼</text><text x="550" y="140" font-size="12" fill="#3d1f24" text-anchor="middle">被告举证</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">打官司靠证据，有理还要有证，维权要留痕。</text></svg>', caption: '图3　不同情形举证责任分配不同。' }
    ],
    exercises: [
      { type: 'choice', question: '关于民事诉讼管辖，下列说法正确的是？', options: ['一律去原告住所地', '一般实行"原告就被告"', '大案子都去最高法院', '不动产纠纷无专属管辖'], answer: '一般实行"原告就被告"', explanation: '民事诉讼的一般地域管辖实行"原告就被告"，即由被告住所地法院管辖，以便查清事实、防止滥诉；仅在被告下落不明等法定例外时可由原告住所地管辖。绝大多数一审民事案件由基层法院而非最高法院管辖；因不动产纠纷提起的诉讼由不动产所在地法院专属管辖。所以"一般原告就被告"正确。' },
      { type: 'choice', question: '关于举证责任，下列说法正确的是？', options: ['一律谁主张谁举证', '行政诉讼主要由被告举证', '有理无需证据也能赢', '特殊侵权也由受害人全举证'], answer: '行政诉讼主要由被告举证', explanation: '一般民事纠纷实行"谁主张谁举证"，但存在例外：特殊侵权（如环境污染、产品缺陷）适用举证责任倒置，由被告证明自己无过错；行政诉讼中主要由被告行政机关举证证明其行政行为合法。有理没有证据法院难以支持，"有理就能赢"是误区。所以只有"行政诉讼主要由被告举证"正确。' },
      { type: 'choice', question: '我国诉讼实行的审级制度是？', options: ['一审终审', '两审终审', '三审终审', '四级三审'], answer: '两审终审', explanation: '我国诉讼实行两审终审制：案件经两级法院审判即告终结，当事人对一审裁判不服可在法定期限内上诉，二审裁判为终审立即生效。最高法一审的案件一审即终审，小额诉讼等也有一审终审特例，但基本原则是两审终审。所以应选"两审终审"。' },
      { type: 'fill', question: '诉讼具有___性、___审判、以___为根据以___为准绳的特点，是纠纷解决的最后一道防线。', answer: '国家强制；公开；事实；法律', explanation: '诉讼的三个鲜明特点：一是国家强制性，裁判以国家强制力为后盾；二是公开审判（法定不公开情形除外）；三是坚持以事实为根据、以法律为准绳。正因其权威和强制，诉讼被称为解决纠纷、维护公平正义的最后一道防线。填空要写全这三个特征的关键词。' },
      { type: 'fill', question: '民事诉讼法规定的证据包括当事人陈述、___、___、视听资料、___、证人证言、鉴定意见、勘验笔录八大类；经济困难者可通过___获得无偿法律帮助。', answer: '书证；物证；电子数据；法律援助', explanation: '民事诉讼证据有八大类：当事人陈述、书证、物证、视听资料、电子数据、证人证言、鉴定意见、勘验笔录。维权要有证据意识，平时注意留存合同、票据、聊天记录等。对于经济困难或特定案件当事人，国家提供法律援助，指派律师免费代理，保障其平等行使诉讼权利。填空覆盖证据种类与法律援助两项考点。' }
    ]
  });
})();
