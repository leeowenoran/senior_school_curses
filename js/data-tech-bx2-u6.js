/* 通用技术 · 必修 技术与设计2 · 第二章 流程及其设计 · 第二节 流程的设计 */
(function () {
  var v = gzGetVolume('tech', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u6',
    name: '第二节 流程的设计',
    chapter: '第二章 流程及其设计',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、会看流程，还要会设计流程' },
      { type: 'paragraph', text: '上一节我们学会了看懂流程：找出环节、理清时序、分清串行并行。这一节要往前走一步——自己动手设计一个流程。比如班里要办一场元旦联欢会，从定节目到布置教室再到正式演出，谁先干、谁后干、几件事能不能同时干，全靠你把流程排明白。' },
      { type: 'paragraph', text: '设计流程和设计结构一样，也有要考虑的因素和要遵循的步骤，还有明确要达到的目标。这三样正是本节的全部内容。' },
      { type: 'heading', text: '二、流程设计要考虑的基本因素' },
      { type: 'paragraph', text: '设计一个流程，绝不是拍脑袋排顺序。教材列出了六类基本因素：材料、工艺、设备、人员、资金、环境等。这六个词看着抽象，套到具体事情上马上就明白了。' },
      { type: 'table', headers: ['基本因素', '要想清楚什么', '以“班级办联欢会”为例'], rows: [
        ['材料', '需要哪些东西，够不够用，什么时候到位', '气球、彩带、道具、奖品，提前几天买齐'],
        ['工艺', '每个环节用什么方法做，先后有没有讲究', '节目怎么排练，音响怎么调试，布置用什么手法'],
        ['设备', '需要哪些工具和器材，能不能借到', '音响、话筒、投影仪、梯子'],
        ['人员', '有多少人可以出力，各人负责什么', '主持组、节目组、布置组、后勤组分工'],
        ['资金', '一共有多少经费，各项怎么分配', '班费预算多少，装饰和奖品各占多少'],
        ['环境', '在什么场地什么条件下进行，有什么限制', '在教室还是报告厅，有没有用电和安全限制']
      ] },
      { type: 'keypoint', label: '重点·六个基本因素', text: '<strong>流程设计要考虑的基本因素有：材料、工艺、设备、人员、资金、环境等。</strong>可以按“物、法、机、人、钱、境”来记：<strong>物</strong>是材料，<strong>法</strong>是工艺，<strong>机</strong>是设备，<strong>人</strong>是人员，<strong>钱</strong>是资金，<strong>境</strong>是环境。答题时把这六个字过一遍，很难漏项。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#e8f3ee"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">流程设计要考虑的基本因素</text><text x="340" y="54" font-size="12" fill="#1e3a2b" text-anchor="middle">物、法、机、人、钱、境，六个方面都要盘一遍</text><rect x="24" y="72" width="204" height="94" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="126" y="100" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">材料（物）</text><text x="126" y="126" font-size="11" fill="#1e3a2b" text-anchor="middle">要用到哪些东西</text><text x="126" y="148" font-size="11" fill="#1e3a2b" text-anchor="middle">数量够不够、何时到位</text><rect x="238" y="72" width="204" height="94" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="340" y="100" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">工艺（法）</text><text x="340" y="126" font-size="11" fill="#1e3a2b" text-anchor="middle">每一步用什么方法做</text><text x="340" y="148" font-size="11" fill="#1e3a2b" text-anchor="middle">加工顺序有没有讲究</text><rect x="452" y="72" width="204" height="94" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="554" y="100" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">设备（机）</text><text x="554" y="126" font-size="11" fill="#1e3a2b" text-anchor="middle">需要哪些工具器材</text><text x="554" y="148" font-size="11" fill="#1e3a2b" text-anchor="middle">能不能配齐、会不会用</text><rect x="24" y="180" width="204" height="94" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="126" y="208" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">人员（人）</text><text x="126" y="234" font-size="11" fill="#1e3a2b" text-anchor="middle">有多少人手可以安排</text><text x="126" y="256" font-size="11" fill="#1e3a2b" text-anchor="middle">怎么分工、谁负责什么</text><rect x="238" y="180" width="204" height="94" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="340" y="208" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">资金（钱）</text><text x="340" y="234" font-size="11" fill="#1e3a2b" text-anchor="middle">一共有多少经费</text><text x="340" y="256" font-size="11" fill="#1e3a2b" text-anchor="middle">各个环节怎么分配</text><rect x="452" y="180" width="204" height="94" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="554" y="208" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">环境（境）</text><text x="554" y="234" font-size="11" fill="#1e3a2b" text-anchor="middle">在什么场地条件下进行</text><text x="554" y="256" font-size="11" fill="#1e3a2b" text-anchor="middle">有哪些限制和安全要求</text></svg>', caption: '图1　流程设计的六类基本因素：材料、工艺、设备、人员、资金、环境。' },
      { type: 'heading', text: '三、流程设计的基本步骤' },
      { type: 'paragraph', text: '因素盘完，就该按步骤动手了。流程设计的基本步骤一共五步，顺序不能乱。' },
      { type: 'list', items: [
        '第一步，确定目标，明确任务：先弄清楚这件事到底要达到什么结果。比如“在十二月三十一日下午两点到四点，在本班教室举办一场三十人参加的元旦联欢会”，目标越具体越好',
        '第二步，分析基本因素：把材料、工艺、设备、人员、资金、环境这六方面逐一摸清楚，有多少家底心里要有数',
        '第三步，明确主要注意事项：想清楚哪些地方最容易出问题、哪些环节必须严格把关。比如用电安全、场地借用时间、节目单要提前审核',
        '第四步，确定时序，划分环节，合理安排：这是最核心的一步。把整件事拆成若干环节，排好先后顺序，能并行的尽量并行，把人员和时间分配到每个环节上',
        '第五步，确定表达方式：选择用文字、表格还是图示把流程呈现出来，让所有参与的人都能看懂并照着执行'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#e8f3ee"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">流程设计的五个基本步骤</text><text x="340" y="54" font-size="12" fill="#1e3a2b" text-anchor="middle">从定目标到定表达方式，一步接一步往下走</text><rect x="24" y="74" width="196" height="72" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="122" y="104" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">① 确定目标，明确任务</text><text x="122" y="128" font-size="11" fill="#1e3a2b" text-anchor="middle">要达到什么结果</text><line x1="220" y1="110" x2="238" y2="110" stroke="#2f6b4f" stroke-width="2"/><polygon points="248,110 236,104 236,116" fill="#2f6b4f"/><rect x="250" y="74" width="196" height="72" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="348" y="104" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">② 分析基本因素</text><text x="348" y="128" font-size="11" fill="#1e3a2b" text-anchor="middle">材料工艺设备人员资金环境</text><line x1="446" y1="110" x2="464" y2="110" stroke="#2f6b4f" stroke-width="2"/><polygon points="474,110 462,104 462,116" fill="#2f6b4f"/><rect x="476" y="74" width="180" height="72" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="566" y="104" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">③ 明确注意事项</text><text x="566" y="128" font-size="11" fill="#1e3a2b" text-anchor="middle">哪些地方要严格把关</text><line x1="566" y1="146" x2="566" y2="166" stroke="#2f6b4f" stroke-width="2"/><polygon points="566,176 560,164 572,164" fill="#2f6b4f"/><rect x="250" y="182" width="406" height="72" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="453" y="212" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">④ 确定时序，划分环节，合理安排</text><text x="453" y="236" font-size="11" fill="#1e3a2b" text-anchor="middle">拆环节、排先后、能并行的尽量并行，分配人员与时间</text><line x1="250" y1="218" x2="238" y2="218" stroke="#2f6b4f" stroke-width="2"/><polygon points="228,218 240,212 240,224" fill="#2f6b4f"/><rect x="24" y="182" width="196" height="72" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="122" y="212" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">⑤ 确定表达方式</text><text x="122" y="236" font-size="11" fill="#1e3a2b" text-anchor="middle">文字、表格还是图示</text></svg>', caption: '图2　流程设计的五个基本步骤，按箭头方向依次完成。' },
      { type: 'tip', label: '提示·第四步是重头戏', text: '五个步骤里，<strong>“确定时序，划分环节，合理安排”是最核心也是最容易失分的一步</strong>。安排时抓两个要点：<strong>一是有依赖关系的必须串行</strong>（比如节目没排好就不能彩排）；<strong>二是没有依赖关系的尽量并行</strong>（比如布置教室和排练节目可以同时干）。把能并行的都并行起来，总时间自然缩短，这就是流程优化的入门功夫。' },
      { type: 'heading', text: '四、流程设计的目标' },
      { type: 'paragraph', text: '折腾这一大圈，究竟为了什么？流程设计的目标可以概括成一串：提高效率、提高质量、提高工作效益、提高经济效益、提高管理水平、安全生产、节约资源、降低生产成本等。' },
      { type: 'paragraph', text: '这些目标之间是互相关联的。流程理顺了，工人不用来回跑，效率就上去了；每道工序有明确标准，质量就稳定了；材料按需领用，浪费少了，资源就节约了、成本就降下来了；每一步都有人负责，管理水平自然提高，安全也更有保障。所以一个好流程，往往是同时朝好几个目标使劲的。' },
      { type: 'list', items: [
        '效率类目标：提高效率、提高工作效益',
        '质量类目标：提高质量',
        '经济类目标：提高经济效益、降低生产成本、节约资源',
        '管理与安全类目标：提高管理水平、安全生产'
      ] },
      { type: 'example', label: '例题·设计“班级元旦联欢会”的筹备流程', text: '题目：请按流程设计的基本步骤，简要设计班级元旦联欢会的筹备流程。<br>解析：<strong>第一步确定目标、明确任务</strong>：十二月三十一日下午在本班教室举办一场全班参加、时长两小时的元旦联欢会。<strong>第二步分析基本因素</strong>：材料方面要准备气球彩带和小奖品；工艺方面要确定节目排练和场地布置的做法；设备方面需要音响、话筒和投影仪；人员方面把全班分成节目、布置、后勤、主持四个小组；资金方面按班费预算分配；环境方面确认教室用电安全和课后可用时间。<strong>第三步明确主要注意事项</strong>：用电安全、节目内容审核、活动结束后的教室清洁。<strong>第四步确定时序、划分环节、合理安排</strong>：环节依次为报名选节目、分组排练、借用设备、布置教室、彩排、正式演出、场地清理；其中“分组排练”和“借用设备、布置教室”之间没有依赖关系，可以并行开展，而“彩排”必须在排练和布置都完成之后进行，属于串行。<strong>第五步确定表达方式</strong>：画一张流程图贴在教室后墙，让每个小组都能看清自己在哪一步该做什么。' },
      { type: 'warn', label: '易错·三个高频扣分点', text: '<strong>第一，把“流程设计的基本因素”和“结构设计要考虑的因素”弄混。</strong>流程设计考虑的是材料、工艺、设备、人员、资金、环境；结构设计考虑的是稳定性强度、安全、审美、个性化、成本、寿命，两组不能张冠李戴。<strong>第二，步骤顺序记反。</strong>一定是先定目标、再析因素、再明确注意事项，然后才排环节时序，最后定表达方式。<strong>第三，答“目标”时只写一句“提高效率”。</strong>目标是一串，效率、质量、效益、管理水平、安全生产、节约资源、降低成本都要能想起来。' }
    ],
    exercises: [
      { type: 'choice', question: '下列各项中，属于流程设计要考虑的基本因素的一组是？', options: ['稳定性、强度、审美、寿命', '材料、工艺、设备、人员、资金、环境', '环节、时序、串行、并行', '效率、质量、成本、安全'], answer: '材料、工艺、设备、人员、资金、环境', explanation: '流程设计要考虑的基本因素是材料、工艺、设备、人员、资金、环境等。第一项是结构设计要考虑的因素；第三项中环节与时序是流程的基本要素、串行与并行是工序的作业方式；第四项属于流程设计要达到的目标，都不是基本因素。' },
      { type: 'choice', question: '流程设计的基本步骤中，紧接在“分析基本因素”之后的一步是？', options: ['确定目标，明确任务', '明确主要注意事项', '确定表达方式', '确定时序，划分环节，合理安排'], answer: '明确主要注意事项', explanation: '流程设计的基本步骤依次为：确定目标明确任务、分析基本因素、明确主要注意事项、确定时序划分环节合理安排、确定表达方式。分析完材料工艺设备人员资金环境这些基本因素之后，接下来就是明确哪些地方最容易出问题、必须严格把关，即明确主要注意事项。' },
      { type: 'choice', question: '某工厂重新设计了车间的加工流程，工人不必再来回搬运半成品，每道工序有了明确的检验标准，材料按需领用也减少了浪费。这次流程设计主要实现了哪些目标？', options: ['只实现了提高效率这一个目标', '提高效率、提高质量、节约资源、降低生产成本等多个目标', '只实现了安全生产这一个目标', '没有实现任何目标，只是改变了车间布局'], answer: '提高效率、提高质量、节约资源、降低生产成本等多个目标', explanation: '不必来回搬运半成品对应提高效率，每道工序有明确检验标准对应提高质量，材料按需领用减少浪费对应节约资源和降低生产成本。流程设计的目标包括提高效率、提高质量、提高工作效益、提高经济效益、提高管理水平、安全生产、节约资源、降低生产成本等，一个好流程往往同时朝多个目标使劲。' },
      { type: 'fill', question: '流程设计的基本步骤是：确定___，明确任务；分析基本___；明确主要注意事项；确定___，划分环节，合理安排；确定表达方式。', answer: '目标；因素；时序', explanation: '流程设计的五个基本步骤依次为：确定目标、明确任务；分析基本因素；明确主要注意事项；确定时序、划分环节、合理安排；确定表达方式。其中第四步是核心，要把有依赖关系的环节安排成串行，把没有依赖关系的环节尽量安排成并行。' },
      { type: 'fill', question: '流程设计要考虑的基本因素包括材料、___、设备、___、资金、环境等；流程设计的目标包括提高效率、提高质量、___生产、节约资源、降低生产成本等。', answer: '工艺；人员；安全', explanation: '流程设计要考虑的基本因素是材料、工艺、设备、人员、资金、环境等六个方面。流程设计的目标则包括提高效率、提高质量、提高工作效益、提高经济效益、提高管理水平、安全生产、节约资源、降低生产成本等，因素回答“靠什么条件去设计”，目标回答“设计出来要达到什么效果”。' }
    ]
  });
})();
