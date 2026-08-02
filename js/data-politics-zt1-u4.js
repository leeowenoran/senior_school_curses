/* 思想政治 · 必修2 · 经济与社会 · 第四课 我国的个人收入分配与社会保障 */
(function () {
  var v = gzGetVolume('politics', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u4',
    name: '第四课 我国的个人收入分配与社会保障',
    chapter: '高三思想政治（必修2 经济与社会）· 第四课 我国的个人收入分配与社会保障',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、我国的个人收入分配制度' },
      { type: 'paragraph', text: '我国坚持按劳分配为主体、多种分配方式并存的分配制度，这是由公有制为主体、多种所有制共同发展的基本经济制度决定的，也是发展市场经济的客观要求。分配制度回答"挣来的钱按什么规则分给谁"，它直接关系到每个人的"钱袋子"，也关系到社会公不公平、有没有干劲。' },
      { type: 'keypoint', label: '重点·按劳分配与按要素分配', text: '<strong>按劳分配存在于公有制经济中，多劳多得、少劳少得，是社会主义的分配原则，有利于调动劳动积极性、消灭剥削。多种分配方式并存，指劳动、资本、土地、知识、技术、管理、数据等生产要素按贡献参与分配，这在非公经济中尤其普遍。二者的存在都根源于我国现阶段的生产力与所有制状况。</strong>' },
      { type: 'table', headers: ['分配方式', '适用范围', '特点'], rows: [['按劳分配', '公有制经济（国有、集体）', '多劳多得，社会主义原则'], ['按劳动要素分配', '非公有制经济中的工资', '由市场供求决定'], ['按资本/技术/管理等要素', '各类经济中的投资、专利、管理贡献', '按贡献大小取得收入']] },
      { type: 'example', label: '例子·同是工资，性质可能不同', text: '小王在国有钢厂上班，每月领的工资属于按劳分配；小李在民营科技公司打工，每月工资属于按劳动要素分配。同样叫"工资"，因为所在单位所有制不同，分配性质就不同。若小李还用自己的一项专利入股拿到分红，那就是按技术要素分配。可见"钱从哪里来"要看清经济成分。' },
      { type: 'warn', label: '易错·把"按劳动要素"当成"按劳分配"', text: '很多同学一见"工资、劳动收入"就写按劳分配。注意：只有在公有制范围内的劳动收入才是按劳分配；私企、外企员工的工资是"按劳动要素分配"，属于多种分配方式，不是按劳分配。判断第一步先看所在单位是公有还是非公，再定性。' },

      { type: 'heading', text: '二、收入分配公平与再分配' },
      { type: 'paragraph', text: '收入分得公不公平，影响社会能不能稳定、经济能不能持续。初次分配（企业发工资、分红）主要由市场决定；再分配由政府通过税收、社会保障、转移支付等手段调节，重点帮扶低收入者；第三次分配则靠慈善公益，是对前两者的有益补充。促进共同富裕，要处理好三者关系，扩大中等收入群体。' },
      { type: 'keypoint', label: '重点·三次分配各管什么', text: '<strong>初次分配：市场机制主导，企业内部分配（工资、利润、利息），重在效率。再分配：政府主导，通过税收、社保、转移支付调节差距，重在公平。第三次分配：社会力量自愿参与，慈善捐赠等，重在互助。我国以初次分配和再分配为主，第三次分配为补充，共同促进共同富裕。</strong>' },
      { type: 'list', items: ['初次分配：在企业内部进行，市场决定，如工资、奖金、利润。', '再分配：政府调节，如个人所得税、养老金、扶贫补贴。', '第三次分配：慈善捐赠、志愿服务等社会互助行为。'] },

      { type: 'heading', text: '三、我国的社会保障' },
      { type: 'paragraph', text: '社会保障是社会的"安全网"和"减震器"，由国家依法建立，通过收入再分配，保障公民在年老、疾病、失业、工伤、生育等情形下的基本生活。它兜住民生底线，让每个人遇到困难时有处可依靠，也是促进社会公平、维护社会稳定的重要制度安排。' },
      { type: 'list', items: ['兜底功能：保障困难群体基本生存，防止陷入绝境。', '调节功能：通过再分配缩小收入差距，促进公平。', '稳定功能：化解社会矛盾，维护社会安定。', '促进功能：解除后顾之忧，释放消费与劳动潜力。'] },
      { type: 'table', headers: ['社会保障形式', '保障对象/情形', '举例'], rows: [['社会保险', '年老、疾病、失业、工伤、生育', '养老保险、医疗保险、失业保险'], ['社会救助', '最困难群体、突发困境', '低保、特困人员供养、救灾'], ['社会福利', '全体成员或特定群体', '儿童福利、残疾人福利'], ['社会优抚', '军人及家属', '抚恤金、优待补助']] },
      { type: 'example', label: '例子·医保属于哪类保障', text: '老张住院花了两万，医保报销了一万三，自己只掏六千多。这属于社会保险中的医疗保险，是社会保障体系里覆盖最广、最核心的一块。若老张突发火灾房屋被毁、生活陷入困境，政府发放临时救助金，那就是社会救助——专门兜底最困难的情形。二者保障层次不同。' },
      { type: 'tip', label: '学习提示', text: '区分社会保障形式看"对象"：保险是面向劳动者的风险共担（缴费型）；救助是兜底最困难群体（无偿）；福利是普惠或面向特殊群体；优抚专给军人军属。考试常给一个生活情境让你判断归属，先想"谁、什么情形"，再对号入座。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">社会保障体系</text><rect x="40" y="70" width="150" height="70" rx="10" fill="#b8334a"/><text x="115" y="105" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">社会保险</text><text x="115" y="128" font-size="11" fill="#fff" text-anchor="middle">核心</text><rect x="200" y="70" width="150" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="275" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">社会救助</text><text x="275" y="128" font-size="11" fill="#3d1f24" text-anchor="middle">兜底</text><rect x="360" y="70" width="150" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="435" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">社会福利</text><text x="435" y="128" font-size="11" fill="#3d1f24" text-anchor="middle">普惠</text><rect x="520" y="70" width="120" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="580" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">社会优抚</text><text x="580" y="128" font-size="11" fill="#3d1f24" text-anchor="middle">军人</text><text x="340" y="200" font-size="12" fill="#3d1f24" text-anchor="middle">社会保障是社会的"安全网"和"减震器"。</text><text x="340" y="235" font-size="12" fill="#3d1f24" text-anchor="middle">以社会保险为主体，社会救助为兜底，共同保障基本生活。</text></svg>', caption: '图1　社会保障体系的四个主要组成部分。' },

      { type: 'heading', text: '四、完善分配与社保，走向共同富裕' },
      { type: 'paragraph', text: '完善个人收入分配，要鼓励勤劳合法致富，保护合法收入，增加低收入者收入，扩大中等收入群体，调节过高收入，取缔非法收入。同时健全多层次社会保障体系，兜住底线、织密网络。分配更合理、保障更牢靠，全体人民才能朝着共同富裕稳步前进。' },
      { type: 'keypoint', label: '重点·促进收入分配公平的措施', text: '<strong>促进公平要"两手"并用：一是制度上坚持按劳分配为主体、多种分配方式并存；二是调节上"提低、扩中、调高、取非"——提高低收入、扩大中等收入、调节过高收入、取缔非法收入，并发挥再分配和第三次分配的调节作用。这既是效率与公平的统一，也是走向共同富裕的必然要求。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">收入分配的层次</text><rect x="50" y="90" width="180" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="140" y="125" font-size="13" fill="#3d1f24" text-anchor="middle">初次分配</text><text x="140" y="146" font-size="11" fill="#3d1f24" text-anchor="middle">效率为主</text><rect x="250" y="90" width="180" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="340" y="125" font-size="13" fill="#3d1f24" text-anchor="middle">再分配</text><text x="340" y="146" font-size="11" fill="#3d1f24" text-anchor="middle">公平为主</text><rect x="450" y="90" width="180" height="60" rx="10" fill="#b8334a"/><text x="540" y="125" font-size="13" fill="#fff" text-anchor="middle">第三次分配</text><text x="540" y="146" font-size="11" fill="#fff" text-anchor="middle">公益互助</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">三者共同促进收入分配公平，推动共同富裕。</text><text x="340" y="250" font-size="12" fill="#3d1f24" text-anchor="middle">社会保障为分配公平提供"兜底"的安全网。</text></svg>', caption: '图2　初次分配、再分配、第三次分配协同促进公平。' },

      { type: 'heading', text: '五、本课与全书的关系' },
      { type: 'paragraph', text: '第四课是《经济与社会》的收尾，把"生产—分配—保障"的链条补齐：前面的课讲所有制、市场经济、经济发展，这一课讲生产出来的财富怎么分、遇到困难怎么兜。它和"以人民为中心""共同富裕""共享发展"一脉相承，是经济制度落实到民生温度的最后一环。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">经济与社会的逻辑闭环</text><rect x="40" y="100" width="150" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="115" y="135" font-size="13" fill="#3d1f24" text-anchor="middle">所有制</text><rect x="200" y="100" width="150" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="275" y="135" font-size="13" fill="#3d1f24" text-anchor="middle">市场体制</text><rect x="360" y="100" width="150" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="435" y="135" font-size="13" fill="#3d1f24" text-anchor="middle">经济发展</text><rect x="520" y="100" width="120" height="60" rx="10" fill="#b8334a"/><text x="580" y="135" font-size="13" fill="#fff" text-anchor="middle">分配社保</text><text x="340" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">从"怎么生产"到"怎么分、怎么兜"，落脚民生与共同富裕。</text></svg>', caption: '图3　《经济与社会》四课构成"生产—分配—保障"的闭环。' }
    ],
    exercises: [
      { type: 'choice', question: '小王在国有钢厂工作，每月领取的工资属于？', options: ['按劳动要素分配', '按劳分配', '按资本要素分配', '社会保障收入'], answer: '按劳分配', explanation: '按劳分配存在于公有制经济中，多劳多得、少劳少得。国有钢厂属于公有制经济，小王在此获得的工资是典型的按劳分配收入。按劳动要素分配出现在非公有制经济（私企、外企）中，按资本要素分配来自投资分红，社会保障收入则是养老、救助等，均不符合"国有单位工资"这一情境。' },
      { type: 'choice', question: '政府通过个人所得税、扶贫补贴调节收入差距，这属于？', options: ['初次分配', '再分配', '第三次分配', '按劳分配'], answer: '再分配', explanation: '再分配是政府主导、通过税收、社会保障、转移支付等手段调节收入差距的分配环节，重在促进公平。个人所得税、扶贫补贴都是政府行为，属于再分配。初次分配在企业内部由市场决定，第三次分配是慈善公益等社会自愿行为，按劳分配是公有制内的分配原则，都不符合题干描述。' },
      { type: 'choice', question: '老张遭遇火灾房屋被毁、生活陷入困境，政府发放临时救助金，这属于社会保障中的？', options: ['社会保险', '社会救助', '社会福利', '社会优抚'], answer: '社会救助', explanation: '社会救助是政府向最困难群体、因突发困境陷入生存危机的人提供的无偿救助，是社会保障体系的"兜底"部分，如低保、特困供养、灾害救助。老张因火灾陷入困境获得临时救助金，正是社会救助。社会保险是缴费型风险共担（如医保），社会福利普惠，社会优抚专给军人军属，均不符。' },
      { type: 'fill', question: '我国个人收入分配制度是___为主体、___并存；其中在公有制经济中实行的是___，在非公有制经济中劳动收入属于___分配。', answer: '按劳分配；多种分配方式；按劳分配；按劳动要素', explanation: '我国坚持按劳分配为主体、多种分配方式并存的分配制度，这由公有制为主体、多种所有制共同发展的基本经济制度决定。公有制范围内（国有、集体）的劳动收入是按劳分配；非公有制经济（私企、外企）中的工资则属于按劳动要素分配。判断分配性质，第一步就是看清所在单位的所有制性质。' },
      { type: 'fill', question: '社会保障体系以___为主体、___为兜底，还包括社会福利和___；它在再分配中发挥着"___"和"___"的作用，是保障基本生活的制度安排。', answer: '社会保险；社会救助；社会优抚；安全网；减震器', explanation: '社会保障由社会保险（核心、覆盖最广）、社会救助（兜底最困难群体）、社会福利、社会优抚四部分构成。它被称为社会的"安全网"和"减震器"，通过收入再分配保障公民在年老、疾病、失业等情形下的基本生活，是维护社会公平与稳定的重要制度。填空要写清四者关系及"安全网、减震器"两个比喻。' }
    ]
  });
})();
