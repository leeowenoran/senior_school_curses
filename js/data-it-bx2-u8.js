/* 信息技术 · 必修2 · 信息系统与社会 · 第5节 信息系统的优势与局限性 */
(function () {
  var v = gzGetVolume('it', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u8',
    name: '第5节 信息系统的优势与局限性',
    chapter: '高一信息技术（必修2·信息系统与社会）· 第二章 信息系统概述',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、信息系统给我们带来了什么' },
      { type: 'paragraph', text: '早上用手机扫码坐公交，中午在食堂刷脸吃饭，晚上在网上买书、查成绩——这些事情背后都有信息系统在工作。信息系统之所以被广泛使用，是因为它在处理信息这件事上，比人工方式强得多。但同时，它也不是万能的，它有自己的“软肋”。这一节我们就来把信息系统的优势和局限性看清楚。' },
      { type: 'paragraph', text: '学习这一节，重要的不是背下几条优点缺点，而是学会用辩证的眼光看待信息系统：既能用好它，又不盲目依赖它。' },

      { type: 'heading', text: '二、信息系统的四大优势' },
      { type: 'paragraph', text: '信息系统的优势主要体现在处理效率、计算精度、存储能力和共享能力四个方面。' },
      { type: 'list', items: [
        '① 提高效率：信息系统能自动、连续、高速地处理业务，把人从重复劳动中解放出来。例如超市收银员扫一下条码，商品名称、单价、库存扣减、销售统计同时完成；12306在春运高峰每秒可处理数以万计的购票请求，靠人工售票窗口是不可能做到的。',
        '② 精确性高：信息系统严格按照程序运行，只要程序和数据没有问题，计算结果就不会因为疲劳、马虎而出错。例如银行的转账、计息、对账，全校几千名学生的总分与排名统计，几秒钟就能算完，而且不会算错。',
        '③ 存储量大：信息系统可以把海量数据长期、稳定地保存下来，而且占用的物理空间极小、查找极快。例如一所学校几十年的学籍档案，纸质文件要堆满好几间屋子，存进数据库后只需一台服务器，输入姓名就能立刻找到。',
        '④ 信息共享便捷：借助网络，信息系统突破了时间和空间的限制，不同地点的人可以同时使用同一份数据。例如医保异地结算、多人同时编辑一份在线文档、老师发布的通知全班瞬间收到。'
      ] },
      { type: 'keypoint', label: '重点·信息系统的四大优势', text: '<strong>提高效率、精确性高、存储量大、信息共享便捷</strong>，是信息系统最核心的四条优势。可以这样记忆：<strong>快（效率高）、准（精确性高）、多（存储量大）、通（共享便捷）</strong>。这四条优势的共同来源，是计算机能够自动执行程序、网络能够快速传递数据。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">信息系统：优势与局限性对照</text><rect x="25" y="46" width="300" height="32" rx="8" fill="#6266d9"/><text x="175" y="68" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">四大优势（用得好）</text><rect x="355" y="46" width="300" height="32" rx="8" fill="#6266d9"/><text x="505" y="68" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">四大局限（要防备）</text><rect x="25" y="86" width="300" height="46" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="106" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">① 提高效率</text><text x="175" y="124" font-size="11" fill="#2a3454" text-anchor="middle">自动高速处理，超市扫码秒结算</text><rect x="355" y="86" width="300" height="46" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="106" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">① 开发成本高</text><text x="505" y="124" font-size="11" fill="#2a3454" text-anchor="middle">资金、人力、时间投入都很大</text><rect x="25" y="140" width="300" height="46" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="160" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">② 精确性高</text><text x="175" y="178" font-size="11" fill="#2a3454" text-anchor="middle">按程序计算，不会疲劳出错</text><rect x="355" y="140" width="300" height="46" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="160" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">② 存在安全风险</text><text x="505" y="178" font-size="11" fill="#2a3454" text-anchor="middle">病毒、黑客、数据泄露</text><rect x="25" y="194" width="300" height="46" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="214" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">③ 存储量大</text><text x="175" y="232" font-size="11" fill="#2a3454" text-anchor="middle">海量数据长期保存，检索极快</text><rect x="355" y="194" width="300" height="46" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="214" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">③ 依赖基础设施</text><text x="505" y="232" font-size="11" fill="#2a3454" text-anchor="middle">停电、断网就无法工作</text><rect x="25" y="248" width="300" height="46" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="268" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">④ 信息共享便捷</text><text x="175" y="286" font-size="11" fill="#2a3454" text-anchor="middle">跨越时空，多人多地同时使用</text><rect x="355" y="248" width="300" height="46" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="268" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">④ 更新维护复杂</text><text x="505" y="286" font-size="11" fill="#2a3454" text-anchor="middle">需求变、技术变，牵一发动全身</text></svg>', caption: '图1　信息系统的四大优势与四大局限性双栏对照，左边是它的长处，右边是它的短板。' },

      { type: 'heading', text: '三、信息系统的四大局限性' },
      { type: 'paragraph', text: '信息系统再强大，也是人设计、人建造、人维护的产物，它离不开钱、离不开电、离不开网，也躲不开安全威胁。' },
      { type: 'list', items: [
        '① 开发成本高：建设一个信息系统需要调研需求、设计方案、编写程序、购买服务器和软件、组织测试和培训，需要投入大量资金、人力和时间。系统上线以后，每年还要支付服务器、带宽、运维人员等费用。',
        '② 安全风险：信息系统里存放着大量重要数据，容易成为攻击目标。计算机病毒、木马、黑客入侵、内部人员违规操作，都可能造成数据被窃取、被篡改甚至被删除，损失往往难以挽回。',
        '③ 依赖基础设施：信息系统运行在电力、通信网络和硬件设备之上。一旦停电、断网或服务器故障，系统立刻无法使用——收银台刷不了卡，医院挂不了号，学校查不了成绩。',
        '④ 更新维护复杂：现实需求在不断变化，法规在调整，技术在升级，系统就必须跟着改。而系统各部分互相关联，改动一处可能影响多处，还要处理数据迁移、版本兼容、用户重新培训等问题，工作量很大。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">信息系统依赖基础设施：停电断网即瘫痪</text><line x1="340" y1="42" x2="340" y2="212" stroke="#6266d9" stroke-width="1.5" stroke-dasharray="6 5"/><text x="172" y="58" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="middle">基础设施正常</text><rect x="40" y="68" width="120" height="34" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="100" y="90" font-size="12" fill="#2a3454" text-anchor="middle">电力供应正常</text><rect x="184" y="68" width="120" height="34" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="244" y="90" font-size="12" fill="#2a3454" text-anchor="middle">通信网络畅通</text><line x1="172" y1="104" x2="172" y2="126" stroke="#6266d9" stroke-width="2"/><polygon points="172,134 166,124 178,124" fill="#6266d9"/><rect x="62" y="136" width="220" height="38" rx="9" fill="#6266d9"/><text x="172" y="160" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">信息系统正常运行</text><text x="172" y="194" font-size="12" fill="#2a3454" text-anchor="middle">能登录、能查询、能办业务</text><text x="508" y="58" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="middle">基础设施中断</text><rect x="376" y="68" width="120" height="34" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="436" y="90" font-size="12" fill="#2a3454" text-anchor="middle">突然停电</text><rect x="520" y="68" width="120" height="34" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="580" y="90" font-size="12" fill="#2a3454" text-anchor="middle">网络中断</text><line x1="508" y1="104" x2="508" y2="126" stroke="#6266d9" stroke-width="2"/><polygon points="508,134 502,124 514,124" fill="#6266d9"/><rect x="398" y="136" width="220" height="38" rx="9" fill="#6266d9"/><text x="508" y="160" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">信息系统立即瘫痪</text><text x="508" y="194" font-size="12" fill="#2a3454" text-anchor="middle">进不去、查不到、办不了</text><rect x="40" y="224" width="600" height="58" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="248" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">结论：信息系统建在电力、网络、硬件这些基础设施之上</text><text x="340" y="270" font-size="12" fill="#2a3454" text-anchor="middle">基础设施一旦中断，系统功能随之全部丧失，所以必须准备备用电源和应急预案</text></svg>', caption: '图2　同一个信息系统，在基础设施正常与中断两种情况下的表现对比，说明它对基础设施的高度依赖。' },

      { type: 'heading', text: '四、优势与局限的对照小结' },
      { type: 'table', headers: ['比较角度', '优势的表现', '局限的表现'], rows: [
        ['处理速度', '自动高速处理，效率远超人工', '一旦系统卡顿或宕机，业务全部停摆'],
        ['计算准确', '按程序执行，不会疲劳出错', '若程序有缺陷或数据录错，会一错到底'],
        ['数据存储', '海量数据长期保存，检索方便', '数据集中存放，泄露或损坏损失巨大'],
        ['共享使用', '跨越时空，多人同时使用', '完全依赖网络，断网即无法共享'],
        ['建设投入', '一次建成，长期反复使用', '开发成本高，后期更新维护复杂']
      ] },
      { type: 'warn', label: '易错·不要走两个极端', text: '第一个极端是<strong>盲目崇拜</strong>：认为信息系统绝对可靠、算出来的一定对。其实系统只是忠实执行程序，如果程序有漏洞或者录入的数据本身就是错的，系统只会把错误放大。第二个极端是<strong>因噎废食</strong>：因为存在安全风险和成本问题，就否定信息系统的价值。正确的态度是<strong>辩证看待：发挥优势、防范局限</strong>。' },
      { type: 'tip', label: '提示·如何弥补局限性', text: '针对四条局限，现实中都有对应的办法：开发成本高——可以租用现成的云服务，不必样样自建；安全风险——安装防火墙杀毒软件、数据加密、权限管理；依赖基础设施——配备<strong>不间断电源（UPS）、备用线路、异地容灾备份</strong>，并准备好停电断网时的人工应急预案；更新维护复杂——设计时就采用模块化结构，改一个模块不影响其他模块。' },
      { type: 'example', label: '例题·分析实际场景', text: '题目：某超市使用信息系统收银，某天下午突然停电，收银台无法结账，顾客排起长队。请指出这一现象反映了信息系统的哪条局限性，并说出超市可以采取哪些措施。<br>解析：这一现象反映的是信息系统<strong>依赖基础设施</strong>这条局限性。信息系统必须在电力、网络、硬件正常的前提下才能运行，停电导致收银机和服务器全部停止工作，系统功能随之丧失。超市可采取的措施包括：为收银系统和服务器配备不间断电源（UPS）或备用发电机，保证短时间断电仍能结账；准备纸质单据等人工应急流程，停电时先手工记账、恢复供电后补录入系统；对交易数据做定期备份，避免断电造成数据丢失。' }
    ],
    exercises: [
      { type: 'choice', question: '下列各项中，不属于信息系统优势的是？', options: ['处理效率高', '计算精确性高', '开发成本高', '信息共享便捷'], answer: '开发成本高', explanation: '信息系统的四大优势是提高效率、精确性高、存储量大、信息共享便捷。开发成本高是信息系统的局限性，因为建设系统需要投入大量资金、人力和时间，上线后还要持续支付运维费用，属于短板而不是长处。' },
      { type: 'choice', question: '某医院信息系统因机房停电导致挂号、缴费全部中断。这最能说明信息系统？', options: ['计算精确性不足', '存储容量太小', '依赖基础设施', '信息共享不便'], answer: '依赖基础设施', explanation: '信息系统运行在电力、通信网络和硬件设备等基础设施之上，停电使服务器和终端全部停止工作，系统随之瘫痪。这正是“依赖基础设施”这条局限性的典型表现，与计算精度、存储容量、共享能力都没有直接关系。' },
      { type: 'choice', question: '学校用信息系统统计全校3000名学生的考试总分和排名，几秒钟就完成且结果无误。这主要体现了信息系统的？', options: ['提高效率和精确性高', '开发成本高', '更新维护复杂', '存在安全风险'], answer: '提高效率和精确性高', explanation: '几秒钟完成3000人的统计，体现的是处理效率高；结果无误、不会因疲劳马虎而算错，体现的是精确性高。这两条都是信息系统的优势，而其他三个选项都属于局限性。' },
      { type: 'fill', question: '信息系统的四大优势可以概括为：提高___、精确性高、___大、信息共享便捷。', answer: '效率；存储量', explanation: '信息系统的四大优势是提高效率、精确性高、存储量大、信息共享便捷，可以简记为“快、准、多、通”。它们分别对应自动高速处理、按程序精确计算、海量数据长期保存、跨越时空共享数据。' },
      { type: 'fill', question: '信息系统的局限性包括开发成本高、___、依赖基础设施和更新维护复杂。为了应对停电造成的瘫痪，机房通常会配备___（简称UPS）。', answer: '安全风险；不间断电源', explanation: '信息系统的四大局限性是开发成本高、安全风险、依赖基础设施、更新维护复杂。针对停电导致系统瘫痪的问题，机房一般配备不间断电源（UPS）或备用发电机，保证突然断电时系统仍能维持运行或安全关机，同时还应准备人工应急预案。' }
    ]
  });
})();
