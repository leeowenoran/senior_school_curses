/* 通用技术 · 必修 技术与设计2 · 第二章 流程及其设计 · 第一节 流程的探析 */
(function () {
  var v = gzGetVolume('tech', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u5',
    name: '第一节 流程的探析',
    chapter: '第二章 流程及其设计',
    difficulty: '重点',
    content: [
      { type: 'heading', text: '一、每天早上你都在“走流程”' },
      { type: 'paragraph', text: '闹钟一响，你起床、刷牙洗脸、换衣服、吃早饭、背书包出门。这一串动作有先有后，谁也不会先吃早饭再刷牙，更不会穿好鞋子才想起来换校服。这种“一件事接着一件事、按一定顺序做下来”的安排，在通用技术里就叫流程。' },
      { type: 'paragraph', text: '流程听起来是个挺“大”的词，其实小到泡一杯茶，大到造一辆汽车，都离不开它。这一节要弄清楚五件事：流程是什么、它由哪两个要素组成、它有什么用、工序有哪几种作业方式、以及怎么把流程表达出来。' },
      { type: 'heading', text: '二、流程的定义' },
      { type: 'paragraph', text: '流程是一项活动或一系列连续有规律的事项或行为进行的程序。这个定义里有几个词值得咬一咬：“一系列”说明不止一件事；“连续”说明它们是接着来的；“有规律”说明先后顺序不是随便定的；“程序”说明整体上是一套固定的走法。' },
      { type: 'paragraph', text: '定义之外还要记住一句更要紧的话：流程包含环节与时序这两个基本要素。这两个词是这一章的钥匙，几乎每道题都要用到。' },
      { type: 'table', headers: ['要素', '含义'], rows: [
        ['环节', '事项的各个阶段'],
        ['时序', '各环节按一定时间顺序先后出现、完成的时间顺序关系']
      ] },
      { type: 'keypoint', label: '重点·两个基本要素', text: '<strong>流程包含环节与时序两个基本要素。环节是指事项的各个阶段，回答“分成哪几步”；时序是指各环节按一定的时间顺序先后出现、完成的时间顺序关系，回答“谁先谁后”。</strong>缺了环节，事情不知道怎么拆；缺了时序，几件事挤在一起就乱套。分析任何一个流程，都要把这两样先找出来。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#e8f3ee"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">流程的两个基本要素：环节与时序</text><text x="340" y="54" font-size="12" fill="#1e3a2b" text-anchor="middle">以“洗一件衣服”为例：方框是环节，箭头方向是时序</text><rect x="26" y="78" width="112" height="66" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="82" y="108" font-size="13" font-weight="bold" fill="#2f6b4f" text-anchor="middle">① 浸泡</text><text x="82" y="130" font-size="11" fill="#1e3a2b" text-anchor="middle">让污渍变松</text><line x1="138" y1="111" x2="156" y2="111" stroke="#2f6b4f" stroke-width="2"/><polygon points="166,111 154,105 154,117" fill="#2f6b4f"/><rect x="168" y="78" width="112" height="66" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="224" y="108" font-size="13" font-weight="bold" fill="#2f6b4f" text-anchor="middle">② 搓洗</text><text x="224" y="130" font-size="11" fill="#1e3a2b" text-anchor="middle">除去脏东西</text><line x1="280" y1="111" x2="298" y2="111" stroke="#2f6b4f" stroke-width="2"/><polygon points="308,111 296,105 296,117" fill="#2f6b4f"/><rect x="310" y="78" width="112" height="66" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="366" y="108" font-size="13" font-weight="bold" fill="#2f6b4f" text-anchor="middle">③ 漂洗</text><text x="366" y="130" font-size="11" fill="#1e3a2b" text-anchor="middle">洗掉洗衣液</text><line x1="422" y1="111" x2="440" y2="111" stroke="#2f6b4f" stroke-width="2"/><polygon points="450,111 438,105 438,117" fill="#2f6b4f"/><rect x="452" y="78" width="100" height="66" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="502" y="108" font-size="13" font-weight="bold" fill="#2f6b4f" text-anchor="middle">④ 拧干</text><text x="502" y="130" font-size="11" fill="#1e3a2b" text-anchor="middle">挤出多余水</text><line x1="552" y1="111" x2="566" y2="111" stroke="#2f6b4f" stroke-width="2"/><polygon points="576,111 564,105 564,117" fill="#2f6b4f"/><rect x="578" y="78" width="80" height="66" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="618" y="108" font-size="13" font-weight="bold" fill="#2f6b4f" text-anchor="middle">⑤ 晾晒</text><text x="618" y="130" font-size="11" fill="#1e3a2b" text-anchor="middle">吹干水分</text><rect x="26" y="176" width="300" height="80" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="176" y="204" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">环节：事项的各个阶段</text><text x="176" y="230" font-size="11" fill="#1e3a2b" text-anchor="middle">上图中的五个方框就是五个环节</text><rect x="354" y="176" width="300" height="80" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="504" y="204" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">时序：先后完成的顺序关系</text><text x="504" y="230" font-size="11" fill="#1e3a2b" text-anchor="middle">箭头指明谁先做、谁后做，不能颠倒</text></svg>', caption: '图1　以洗衣服为例说明流程的两个基本要素：环节与时序。' },
      { type: 'warn', label: '易错·环节能改，时序常常不能乱改', text: '有些环节可以合并或简化，比如用洗衣机洗衣服，浸泡和搓洗就合成了一个“洗涤”环节。<strong>但时序往往有客观依据，随便颠倒就会出事。</strong>先漂洗再搓洗，衣服洗不干净；先晾晒再拧干，水滴一地；煮饭时先掀锅盖再关火，还可能烫伤。判断时序能不能调整，要看后一个环节是否必须以前一个环节的结果为前提。' },
      { type: 'heading', text: '三、流程的意义' },
      { type: 'paragraph', text: '为什么要专门研究流程？因为流程安排得好不好，直接影响效率、质量和安全。教材从生活工作和生产两个层面来讲它的意义。' },
      { type: 'paragraph', text: '先看对生活和工作的意义。合理的流程能够提高效率，能使生活变得有序、合理，还能为安全提供保障。举个再熟悉不过的例子：晚上要洗衣服、煮饭、烧菜。如果一件件排着做——先把衣服洗完晾好，再淘米煮饭，饭熟了才开始炒菜——起码要一个多小时。可要是先把衣服丢进洗衣机、按下启动，再去淘米插上电饭煲，趁着这两台机器干活的工夫洗菜切菜炒菜，四十分钟就能吃上饭。事情一件没少做，只是流程安排变了，时间就省下来了。' },
      { type: 'paragraph', text: '再看对生产的意义。合理的流程能够有效地组织生产、提高效率、保证质量、保证安全、保护环境。汽车厂的自动流水生产线就是最典型的例子：车身沿着传送带走，每个工位只干一道固定的活，工人和机器人分工明确，一分钟就能下线一辆车。如果没有流程，所有人围着一辆车抢工具，效率反而更低，质量也难以统一。' },
      { type: 'list', items: [
        '对生活工作：提高效率、使生活有序合理、为安全提供保障（如洗衣煮饭烧菜的先后安排）',
        '对生产：有效组织生产、提高效率、保证质量、保证安全、保护环境（如自动流水生产线）'
      ] },
      { type: 'heading', text: '四、工序的作业方式：串行与并行' },
      { type: 'paragraph', text: '刚才洗衣做饭的例子，其实已经悄悄用到了本节的另一个知识点——工序的作业方式。它分成两种：串行和并行。' },
      { type: 'list', items: [
        '串行：上一道工序完成之后，才能进入下一道工序。特点是一环扣一环，前面不结束后面就动不了。洗衣服的浸泡、搓洗、漂洗就是串行，因为不搓洗干净就没法漂洗',
        '并行：几项工作同时进行。特点是互不干扰，可以齐头并进。洗衣机在洗衣服的同时电饭煲在煮饭、人在炒菜，这三件事就是并行'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f3ee"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">串行与并行：同样的活，时间差很多</text><text x="340" y="54" font-size="12" fill="#1e3a2b" text-anchor="middle">横向长度代表花费的时间</text><rect x="24" y="74" width="632" height="94" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="96" y="126" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">串行方式</text><rect x="168" y="96" width="140" height="30" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><text x="238" y="116" font-size="12" fill="#1e3a2b" text-anchor="middle">洗衣服</text><rect x="316" y="96" width="140" height="30" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><text x="386" y="116" font-size="12" fill="#1e3a2b" text-anchor="middle">煮饭</text><rect x="464" y="96" width="140" height="30" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><text x="534" y="116" font-size="12" fill="#1e3a2b" text-anchor="middle">烧菜</text><text x="386" y="152" font-size="11" fill="#2f6b4f" text-anchor="middle">上一件干完才干下一件，总时间是三段相加</text><rect x="24" y="182" width="632" height="98" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="96" y="236" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">并行方式</text><rect x="168" y="196" width="140" height="24" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><text x="238" y="213" font-size="12" fill="#1e3a2b" text-anchor="middle">洗衣机洗衣服</text><rect x="168" y="224" width="140" height="24" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><text x="238" y="241" font-size="12" fill="#1e3a2b" text-anchor="middle">电饭煲煮饭</text><rect x="168" y="252" width="140" height="24" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><text x="238" y="269" font-size="12" fill="#1e3a2b" text-anchor="middle">自己动手烧菜</text><line x1="316" y1="196" x2="316" y2="276" stroke="#2f9e6b" stroke-width="2" stroke-dasharray="5 3"/><text x="490" y="228" font-size="12" fill="#2f6b4f" text-anchor="middle">三件事同时进行，总时间只算最长的那一件</text><text x="490" y="256" font-size="12" fill="#1e3a2b" text-anchor="middle">活没少干，时间却省下一大截</text></svg>', caption: '图2　串行与并行两种作业方式的时间对比，并行能明显缩短总时间。' },
      { type: 'tip', label: '提示·并行不是万能的', text: '<strong>能不能改成并行，关键看两件事之间有没有先后依赖。</strong>洗衣和煮饭互不相干，可以并行；但“淘米”和“煮饭”有依赖，米没淘好锅就开不了火，只能串行。做题时先判断依赖关系，再决定哪些环节可以挪到一起同时做，这也是后面流程优化的基本思路。' },
      { type: 'heading', text: '五、流程的表达方式' },
      { type: 'paragraph', text: '想清楚的流程还要让别人看懂，这就需要表达出来。常用的表达方式有三种：文字表达、表格表达、图示表达。其中图示表达是一般形式，也是考试中最常出现的形式。' },
      { type: 'table', headers: ['表达方式', '怎么表达', '优点和不足'], rows: [
        ['文字表达', '用一段话把各环节和先后顺序写清楚', '写起来方便，但环节一多就显得啰嗦，先后关系不直观'],
        ['表格表达', '用表格分列出环节、内容、时间、负责人等', '信息全、便于查对，但看不出并行与分支关系'],
        ['图示表达', '用方框表示环节、箭头表示时序，画成流程图', '一目了然，能清楚显示串行、并行和分支，是一般形式']
      ] },
      { type: 'example', label: '例题·分析“到银行取号办业务”的流程', text: '题目：请指出“到银行办理业务”这一流程的主要环节和时序，并说明其中哪些环节属于串行。<br>解析：<strong>主要环节</strong>依次是：进入营业厅、在取号机上取号、在等候区等待叫号、到柜台办理业务、离开。<strong>时序</strong>是这五个环节按上述先后顺序依次完成，不能颠倒。<strong>这五个环节全部属于串行</strong>，因为每一步都必须以上一步的结果为前提：没取号就无法排进叫号队列，没被叫到号就不能到柜台办理。如果把等待时填单据这件事插进来，那么“等待叫号”与“填写单据”之间就构成了并行，可以节省整体时间。' },
      { type: 'keypoint', label: '重点·本节知识清单', text: '<strong>一、定义：</strong>流程是一项活动或一系列连续有规律的事项或行为进行的程序。<strong>二、两个基本要素：</strong>环节（事项的各个阶段）和时序（各环节先后出现、完成的时间顺序关系）。<strong>三、意义：</strong>对生活工作能提高效率、使生活有序合理、为安全提供保障；对生产能有效组织生产、提高效率、保证质量、保证安全、保护环境。<strong>四、作业方式：</strong>串行（上一道完成才进入下一道）与并行（几项工作同时进行）。<strong>五、表达方式：</strong>文字表达、表格表达、图示表达，其中图示表达是一般形式。' }
    ],
    exercises: [
      { type: 'choice', question: '流程的两个基本要素是？', options: ['材料与设备', '环节与时序', '效率与质量', '串行与并行'], answer: '环节与时序', explanation: '流程包含环节与时序两个基本要素。环节是指事项的各个阶段，解决“分成哪几步”的问题；时序是指各环节按一定时间顺序先后出现、完成的时间顺序关系，解决“谁先谁后”的问题。材料与设备是流程设计要考虑的因素，效率与质量是流程设计的目标，串行与并行是工序的作业方式，都不是流程的基本要素。' },
      { type: 'choice', question: '晚饭前，小李先把衣服放进洗衣机启动，再插上电饭煲煮饭，然后自己动手炒菜，三件事同时进行。这种工序的作业方式属于？', options: ['串行', '并行', '倒序', '循环'], answer: '并行', explanation: '并行是指几项工作同时进行，串行是指上一道工序完成之后才能进入下一道工序。洗衣机洗衣、电饭煲煮饭、人工炒菜三者互不依赖，可以在同一时间段内同时开展，属于并行方式。采用并行可以把总时间压缩到最长的那一项，从而明显提高效率。' },
      { type: 'choice', question: '关于流程的表达方式，下列说法正确的是？', options: ['流程只能用文字来表达', '表格表达能够最清楚地显示并行与分支关系', '图示表达用方框表示环节、箭头表示时序，是流程表达的一般形式', '图示表达因为不写文字，所以信息量最少'], answer: '图示表达用方框表示环节、箭头表示时序，是流程表达的一般形式', explanation: '流程的表达方式有文字表达、表格表达和图示表达三种，其中图示表达用方框表示环节、用箭头表示时序，能够直观地显示串行、并行和分支关系，是流程表达的一般形式。表格表达便于查对信息，但不容易看出并行与分支；图示表达框内同样要写文字说明，信息并不少。' },
      { type: 'fill', question: '流程是一项活动或一系列连续有规律的事项或行为进行的___，它包含___与___两个基本要素。', answer: '程序；环节；时序', explanation: '流程的定义是：一项活动或一系列连续有规律的事项或行为进行的程序。它的两个基本要素是环节和时序，环节指事项的各个阶段，时序指各环节按一定时间顺序先后出现、完成的时间顺序关系。' },
      { type: 'fill', question: '上一道工序完成后才能进入下一道工序，这种作业方式叫___；几项工作同时进行，这种作业方式叫___。汽车厂的自动流水生产线体现了合理流程对生产的意义，如有效组织生产、提高效率、保证___和保证安全等。', answer: '串行；并行；质量', explanation: '串行是上一道工序完成之后才能进入下一道工序，并行是几项工作同时进行。合理的流程对生产的意义包括有效地组织生产、提高效率、保证质量、保证安全、保护环境，自动流水生产线正是这些意义的集中体现。' }
    ]
  });
})();
