/* 思想政治 · 选择性必修2 · 法律与生活 · 第九课 纠纷的多元解决方式 */
(function () {
  var v = gzGetVolume('politics', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u9',
    name: '第九课 纠纷的多元解决方式',
    chapter: '高二思想政治（选择性必修2 法律与生活）· 第九课 纠纷的多元解决方式',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、纠纷不是只能"打官司"' },
      { type: 'paragraph', text: '邻里吵架、买卖纠纷、合同扯皮——社会生活难免有矛盾。解决纠纷不一定都要上法庭，我国建立了和解、调解、仲裁、诉讼等多种方式，被称为"多元纠纷解决机制"。选对方式，省钱省时又省心。' },
      { type: 'keypoint', label: '重点·多元解决机制的意义', text: '<strong>多元纠纷解决机制，是在诉讼之外提供和解、调解、仲裁等途径，分流法院压力、降低维权成本、修复社会关系。它体现了"把非诉讼纠纷解决机制挺在前面"的现代治理理念，既高效又柔性。</strong>' },
      { type: 'list', items: ['和解：当事人私下协商、自行解决，最便捷但无强制力。', '调解：中立第三方促成协议，其中有法律效力的人民调解协议可司法确认。', '仲裁：依协议提交仲裁机构，一裁终局、高效保密。', '诉讼：向法院起诉，最权威但程序较繁。'] },

      { type: 'heading', text: '二、调解：第三方来"劝和"' },
      { type: 'paragraph', text: '调解是通过中立第三方疏导、说服，促使双方自愿达成协议。我国调解种类多，性质不同，效力也不同。' },
      { type: 'table', headers: ['调解类型', '主持者', '效力'], rows: [['人民调解', '人民调解委员会（群众性组织）', '协议经司法确认后具强制执行力'], ['行政调解', '行政机关', '一般无强制力'], ['仲裁调解 / 诉讼调解', '仲裁机构 / 法院', '调解书与裁决书、判决书同等效力']] },
      { type: 'keypoint', label: '重点·人民调解协议可司法确认', text: '<strong>人民调解达成的协议，本身靠当事人自觉履行；但双方可自协议生效之日起30日内共同向法院申请司法确认，确认后若一方拒绝履行，另一方可直接申请强制执行。这把"软协议"变成了"硬执行"，是人民调解的一大优势。</strong>' },
      { type: 'warn', label: '易错·人民调解不是"官办"', text: '人民调解委员会是依法设立的群众性组织，不是政府部门、也不是法院，调解不收费、不强制。别把它和行政调解、法院调解混为一谈。只有经法院司法确认的人民调解协议，才具有强制执行力，普通调解协议靠自觉履行。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">调解的三种类型</text><rect x="40" y="80" width="180" height="70" rx="10" fill="#b8334a"/><text x="130" y="115" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">人民调解</text><text x="130" y="140" font-size="11" fill="#fff" text-anchor="middle">可司法确认</text><rect x="250" y="80" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="340" y="115" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">行政调解</text><text x="340" y="140" font-size="11" fill="#3d1f24" text-anchor="middle">一般无强制</text><rect x="460" y="80" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="550" y="115" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">仲裁/诉讼调解</text><text x="550" y="140" font-size="11" fill="#3d1f24" text-anchor="middle">等同裁决/判决</text><text x="340" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">人民调解协议经司法确认后，可向法院申请强制执行。</text></svg>', caption: '图1　三类调解主持者与效力不同。' },

      { type: 'heading', text: '三、仲裁：一裁终局的高效路径' },
      { type: 'paragraph', text: '仲裁是当事人根据事先或事后达成的协议，把争议提交仲裁机构裁决。它和诉讼"二选一"，选了仲裁一般就不能再起诉。' },
      { type: 'list', items: ['协议前提：必须有双方自愿达成的仲裁协议，没有协议不能仲裁。', '一裁终局：裁决作出即发生法律效力，一方不履行另一方可申请法院执行。', '排除范围：婚姻、收养、监护等身份关系纠纷和行政争议不能仲裁。', '特点：不公开审理、专家断案、省时高效。'] },
      { type: 'keypoint', label: '重点·或裁或审、一裁终局', text: '<strong>仲裁实行"或裁或审"：当事人在仲裁和诉讼间只能选一种，达成有效仲裁协议就排除法院管辖；裁决实行一裁终局，不像诉讼有二审。这使它高效，但也意味着要慎重选择。注意劳动争议仲裁是诉讼前置，和这里的民商事仲裁不是一回事。</strong>' },
      { type: 'warn', label: '易错·民商事仲裁 ≠ 劳动争议仲裁', text: '本课讲的"仲裁"是民商事仲裁（仲裁委员会受理合同和财产权益纠纷），它或裁或审、一裁终局。而劳动仲裁是处理劳动争议的专门程序，是诉讼的前置环节、非一裁终局。二者名称都有"仲裁"但性质、管辖、程序都不同，别张冠李戴。' },

      { type: 'heading', text: '四、诉讼：最后的"公断"' },
      { type: 'paragraph', text: '诉讼即"打官司"，是向法院提起、由法官依法裁判的纠纷解决方式，最具权威性和强制力，是维护公平正义的最后一道防线。' },
      { type: 'list', items: ['民事诉讼：解决平等主体间的人身、财产纠纷。', '行政诉讼：解决"民告官"，审查行政行为是否合法。', '刑事诉讼：追究犯罪嫌疑人刑事责任，由检察院或自诉人提起。'] },
      { type: 'example', label: '例子·邻里排水纠纷怎么选', text: '楼上漏水泡了楼下天花板，双方先可自行和解；谈不拢可请社区人民调解委员会调解，达成协议后还能司法确认；若事先合同有仲裁条款也可仲裁；都不行再向法院提起民事诉讼。可见同一纠纷可以"先柔后刚、层层递进"地解决，不一定一开始就去法院。' },
      { type: 'tip', label: '学习提示', text: '本课记一张"纠纷解决地图"：和解（自愿）→调解（第三方，人民调解可确认）→仲裁（协议前提、一裁终局）→诉讼（最后防线、三大诉讼）。辨清民商事仲裁与劳动仲裁的区别，是考试高频易错点。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">纠纷解决的递进路径</text><rect x="40" y="90" width="130" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="105" y="125" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">和解</text><line x1="170" y1="120" x2="200" y2="120" stroke="#d4485a" stroke-width="2"/><polygon points="200,113 214,120 200,127" fill="#d4485a"/><rect x="210" y="90" width="130" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="275" y="125" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">调解</text><line x1="340" y1="120" x2="370" y2="120" stroke="#d4485a" stroke-width="2"/><polygon points="370,113 384,120 370,127" fill="#d4485a"/><rect x="380" y="90" width="130" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="445" y="125" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">仲裁</text><line x1="510" y1="120" x2="540" y2="120" stroke="#d4485a" stroke-width="2"/><polygon points="540,113 554,120 540,127" fill="#d4485a"/><rect x="550" y="90" width="100" height="60" rx="10" fill="#b8334a"/><text x="600" y="125" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">诉讼</text><text x="340" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">从自愿协商到国家裁判，刚柔递进、各有适用。</text></svg>', caption: '图2　纠纷解决由柔到刚层层递进。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">三大诉讼各管什么</text><rect x="50" y="80" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="140" y="115" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">民事诉讼</text><text x="140" y="140" font-size="11" fill="#3d1f24" text-anchor="middle">平等主体纠纷</text><rect x="250" y="80" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="340" y="115" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">行政诉讼</text><text x="340" y="140" font-size="11" fill="#3d1f24" text-anchor="middle">民告官</text><rect x="450" y="80" width="180" height="70" rx="10" fill="#b8334a"/><text x="540" y="115" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">刑事诉讼</text><text x="540" y="140" font-size="11" fill="#fff" text-anchor="middle">追究刑责</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">诉讼是纠纷解决的最后防线，最具强制力。</text></svg>', caption: '图3　诉讼分民事、行政、刑事三类。' }
    ],
    exercises: [
      { type: 'choice', question: '关于人民调解，下列说法正确的是？', options: ['由政府部门主持', '调解协议收费', '经司法确认后可申请强制执行', '等同于法院判决'], answer: '经司法确认后可申请强制执行', explanation: '人民调解委员会是群众性组织而非政府部门，调解不收费；达成的调解协议靠当事人自觉履行，但双方可自协议生效30日内共同向法院申请司法确认，确认后一方拒绝履行的，另一方可直接申请强制执行。它不等同于法院判决，只有经司法确认才具强制执行力。所以"经司法确认后可申请强制执行"正确。' },
      { type: 'choice', question: '关于民商事仲裁，下列说法正确的是？', options: ['无需协议即可仲裁', '裁决可上诉二审', '一裁终局', '婚姻纠纷可仲裁'], answer: '一裁终局', explanation: '民商事仲裁以双方自愿达成的仲裁协议为前提，没有协议不能仲裁；它实行一裁终局，裁决作出即生效，不能像诉讼那样上诉二审；婚姻、收养、监护等身份关系纠纷不属于仲裁范围。所以只有"一裁终局"正确，其余都错。' },
      { type: 'choice', question: '下列纠纷中，属于"民告官"的是？', options: ['甲和乙的借款纠纷', '消费者告商家', '公民告某行政机关违法', '盗窃罪被公诉'], answer: '公民告某行政机关违法', explanation: '行政诉讼解决"民告官"争议，审查行政机关的具体行政行为是否合法，因此公民控告某行政机关违法属于行政诉讼。甲乙借款、消费者告商家是民事诉讼；盗窃罪被公诉是刑事诉讼。三种诉讼性质不同，要准确区分。' },
      { type: 'fill', question: '我国多元纠纷解决方式包括___、___、___和___。', answer: '和解；调解；仲裁；诉讼', explanation: '我国社会纠纷的多元解决机制包括四类：和解（当事人自行协商）、调解（第三方促成）、仲裁（依协议提交仲裁机构、一裁终局）、诉讼（向法院起诉）。它们由柔到刚、层层递进，构成"把非诉讼纠纷解决机制挺在前面"的治理格局。填空要完整写出这四种方式。' },
      { type: 'fill', question: '民商事仲裁实行"___或___"和"___终局"；而劳动争议仲裁是诉讼的___程序，二者性质不同。', answer: '或裁；或审；一裁；前置', explanation: '民商事仲裁与诉讼只能择一，当事人达成有效仲裁协议即排除法院管辖，且裁决一裁终局；而劳动仲裁是处理劳动争议的专门程序，是向法院提起诉讼的前置环节，并非一裁终局。二者虽都称"仲裁"但管辖、程序、效力均不同，做题时要看清是哪一种仲裁，避免混淆。' }
    ]
  });
})();
