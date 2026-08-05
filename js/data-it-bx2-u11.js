/* 信息技术 · 必修2 · 信息系统与社会 · 第3节 物联网与信息系统 */
(function () {
  var v = gzGetVolume('it', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u11',
    name: '第3节 物联网与信息系统',
    chapter: '高一信息技术（必修2·信息系统与社会）· 第三章 信息系统的基础设施',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是物联网' },
      { type: 'paragraph', text: '互联网把人和人连了起来，物联网则把物和物、物和人连了起来。共享单车扫码开锁、家里的空调用手机远程打开、快递包裹全程可查、农田里的传感器自动浇水——这些都是物联网在发挥作用。' },
      { type: 'keypoint', label: '重点·物联网的定义', text: '<strong>物联网（Internet of Things，简称IoT），是指通过射频识别、红外感应器、全球定位系统、激光扫描器等信息传感设备，按约定的协议，把任何物体与互联网连接起来，进行信息交换和通信，以实现对物体的智能化识别、定位、跟踪、监控和管理的一种网络。</strong>定义中有三个关键点：<strong>信息传感设备（怎么感知）、约定的协议（按什么规矩通信）、与互联网连接（连到哪里去）</strong>。' },
      { type: 'list', items: [
        '核心思想：物物相连。把原本“不会说话”的桌椅、路灯、汽车、农田装上传感设备，让它们能够被感知、被识别、被控制。',
        '与互联网的关系：物联网是在互联网基础上延伸和扩展出来的网络，它的用户端从人扩展到了任何物品。',
        '两个基本能力：一是“感知”，把物理世界的状态变成数据；二是“控制”，根据数据对物体发出动作指令。'
      ] },

      { type: 'heading', text: '二、传感器——物联网的“感觉器官”' },
      { type: 'paragraph', text: '物联网要感知物理世界，靠的就是传感器。传感器是能够感受被测量的物理量（如温度、湿度、光照、压力、位置），并按一定规律把它转换成电信号或数字信号输出的器件，是物联网实现信息获取的核心设备。' },
      { type: 'list', items: [
        '温度传感器：测量环境或设备温度，用于空调控制、冷链运输、发热监测。',
        '湿度传感器：测量空气或土壤湿度，用于智能农业、粮仓管理、加湿器控制。',
        '光敏传感器：感知光照强弱，用于路灯天黑自动亮、手机屏幕亮度自动调节。',
        '红外/人体感应传感器：感知有没有人经过，用于楼道灯、自动门、防盗报警。',
        '压力传感器、加速度传感器、GPS定位模块：分别用于称重、计步与跌倒检测、位置跟踪。',
        'RFID标签与二维码：用于物品的身份识别，如图书馆借还书、超市防盗、快递分拣。'
      ] },
      { type: 'tip', label: '提示·传感器就是机器的五官', text: '人靠眼睛、耳朵、皮肤感知世界，机器靠传感器感知世界：<strong>摄像头相当于眼睛，麦克风相当于耳朵，温湿度传感器相当于皮肤</strong>。没有传感器，物联网就成了“瞎子”和“聋子”，后面的传输、分析、控制都无从谈起。所以说传感器是物联网实现信息获取的核心设备。' },

      { type: 'heading', text: '三、控制机制——从“看得见”到“管得住”' },
      { type: 'paragraph', text: '光能感知还不够，物联网更重要的价值是能对设备实施远程控制和自动化管理。' },
      { type: 'list', items: [
        '远程控制：人在远处通过手机或电脑发出指令，设备接收后执行动作。例如下班路上先打开家里的空调，出差时远程查看并关闭家中的电源。',
        '自动化管理：系统根据传感器采集的数据，按照预先设定的规则自动做出反应，全过程不需要人操作。例如土壤湿度低于设定值就自动开启灌溉，室温超过28℃就自动开启制冷，天黑就自动点亮路灯。',
        '闭环控制：感知—传输—决策—执行—再感知，形成一个不断循环的闭环，使系统能够持续保持在理想状态。'
      ] },

      { type: 'heading', text: '四、物联网的三层架构' },
      { type: 'paragraph', text: '物联网通常划分为感知层、网络层和应用层三层。数据自下而上流动：感知层把物理世界变成数据，网络层把数据送出去，应用层把数据变成有用的服务。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="24" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">物联网三层架构</text><rect x="60" y="38" width="560" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="72" y="47" width="110" height="38" rx="8" fill="#6266d9"/><text x="127" y="71" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">③ 应用层</text><text x="200" y="64" font-size="12" fill="#2a3454" text-anchor="start">对数据进行分析处理，提供各种智能服务</text><text x="200" y="84" font-size="11" fill="#2a3454" text-anchor="start">智能家居APP、智慧农业平台、智慧交通调度、智能物流</text><rect x="60" y="114" width="560" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="72" y="123" width="110" height="38" rx="8" fill="#6266d9"/><text x="127" y="147" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">② 网络层</text><text x="200" y="140" font-size="12" fill="#2a3454" text-anchor="start">把感知到的数据可靠、及时地传输出去</text><text x="200" y="160" font-size="11" fill="#2a3454" text-anchor="start">Wi-Fi、蓝牙、4G / 5G移动网络、有线网络、互联网</text><rect x="60" y="190" width="560" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="72" y="199" width="110" height="38" rx="8" fill="#6266d9"/><text x="127" y="223" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">① 感知层</text><text x="200" y="216" font-size="12" fill="#2a3454" text-anchor="start">采集物体信息、识别物体，是物联网的基础</text><text x="200" y="236" font-size="11" fill="#2a3454" text-anchor="start">温湿度传感器、摄像头、RFID标签、二维码、GPS模块</text><line x1="650" y1="240" x2="650" y2="70" stroke="#6266d9" stroke-width="2"/><polygon points="650,60 644,72 656,72" fill="#6266d9"/><text x="634" y="155" font-size="11" fill="#3d4f8a" text-anchor="middle" transform="rotate(-90 634 155)">数据自下而上流动</text><rect x="60" y="256" width="560" height="34" rx="8" fill="#6266d9"/><text x="340" y="278" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">感知层负责“看到”，网络层负责“传走”，应用层负责“用好”</text></svg>', caption: '图1　物联网三层架构：感知层采集数据，网络层传输数据，应用层分析数据并提供服务。' },

      { type: 'heading', text: '五、物联网的典型应用：智能家居' },
      { type: 'paragraph', text: '下面用一个智能家居的例子，把感知、传输、决策、控制这条链路完整走一遍。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">智能家居中的物联网：从感知到控制</text><rect x="30" y="56" width="150" height="58" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="105" y="80" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">温湿度传感器</text><text x="105" y="100" font-size="10" fill="#2a3454" text-anchor="middle">测得室温 28℃</text><rect x="265" y="112" width="150" height="66" rx="10" fill="#6266d9"/><text x="340" y="138" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">网络与云平台</text><text x="340" y="160" font-size="10" fill="#ffffff" text-anchor="middle">接收 / 转发 / 处理数据</text><rect x="500" y="112" width="150" height="66" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="575" y="138" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">手机 APP</text><text x="575" y="160" font-size="10" fill="#2a3454" text-anchor="middle">查看数据、发出指令</text><rect x="30" y="176" width="150" height="58" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="105" y="200" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">空调（被控设备）</text><text x="105" y="220" font-size="10" fill="#2a3454" text-anchor="middle">自动制冷到 26℃</text><path d="M180 85 L222 85 L222 130 L257 130" stroke="#6266d9" stroke-width="2" fill="none"/><polygon points="265,130 253,124 253,136" fill="#6266d9"/><text x="228" y="104" font-size="10" fill="#2a3454" text-anchor="start">上传数据</text><line x1="415" y1="132" x2="488" y2="132" stroke="#6266d9" stroke-width="2"/><polygon points="496,132 484,126 484,138" fill="#6266d9"/><text x="454" y="124" font-size="10" fill="#2a3454" text-anchor="middle">显示</text><line x1="496" y1="158" x2="423" y2="158" stroke="#6266d9" stroke-width="2"/><polygon points="415,158 427,152 427,164" fill="#6266d9"/><text x="454" y="174" font-size="10" fill="#2a3454" text-anchor="middle">下达指令</text><path d="M265 160 L222 160 L222 205 L188 205" stroke="#6266d9" stroke-width="2" fill="none"/><polygon points="180,205 192,199 192,211" fill="#6266d9"/><text x="228" y="196" font-size="10" fill="#2a3454" text-anchor="start">下发控制</text><rect x="30" y="246" width="620" height="46" rx="9" fill="#6266d9"/><text x="340" y="266" font-size="11" fill="#ffffff" text-anchor="middle">① 传感器采集室温28℃　→　② 经网络上传到云平台　→　③ 手机APP显示当前温度</text><text x="340" y="284" font-size="11" fill="#ffffff" text-anchor="middle">④ 用户点击“制冷到26℃”　→　⑤ 指令经网络下发　→　⑥ 空调自动启动制冷</text></svg>', caption: '图2　智能家居物联网应用：温湿度传感器采集数据上传云平台，用户通过手机APP远程控制空调。' },

      { type: 'heading', text: '六、物联网与信息系统的关系' },
      { type: 'paragraph', text: '物联网不是独立于信息系统之外的东西。它可以看作信息系统在物理世界这一端的延伸：原来信息系统的数据主要靠人工录入，有了物联网，数据可以由设备自动采集；原来信息系统的输出主要是报表和屏幕显示，有了物联网，输出可以直接变成对设备的控制动作。' },
      { type: 'keypoint', label: '重点·两者的关系', text: '<strong>物联网是信息系统感知和控制物理世界的延伸。</strong>具体表现为两点：一是<strong>在输入端</strong>，物联网通过传感器自动采集数据，为信息系统提供了海量、实时、准确的数据来源，代替了人工录入；二是<strong>在输出端</strong>，信息系统处理后的决策可以通过物联网直接控制物理设备，让“信息世界”的判断变成“物理世界”的动作。二者合在一起，形成了“感知—传输—处理—控制”的完整闭环。' },
      { type: 'table', headers: ['环节', '传统信息系统', '加入物联网之后'], rows: [
        ['数据来源', '主要靠人工录入、扫描录入', '传感器自动采集，实时、连续、量大'],
        ['数据实时性', '有滞后，录入之后才能看到', '几乎实时，状态一变马上上报'],
        ['处理结果的去向', '生成报表、在屏幕上显示给人看', '除了给人看，还能直接控制设备动作'],
        ['管理方式', '人看数据再去人工处理', '可按规则自动判断、自动执行']
      ] },
      { type: 'warn', label: '易错·物联网≠互联网，也≠单个传感器', text: '第一，<strong>物联网不等于互联网</strong>：互联网连接的是人和信息，物联网连接的是物与物、物与人，物联网是在互联网基础上的延伸和扩展。第二，<strong>一个孤立的传感器不构成物联网</strong>：只有当传感设备按约定协议接入网络、能够进行信息交换和通信时，才叫物联网。家里那支不联网的电子温度计只是一个测量工具，不是物联网。' },
      { type: 'example', label: '例题·分析物联网应用', text: '题目：某智慧农业大棚安装了土壤湿度传感器，湿度低于设定值时系统自动打开滴灌阀门浇水，农户也可以用手机随时查看和手动浇水。请指出：①哪些设备属于感知层？②手机APP属于哪一层？③这个例子体现了物联网的哪两项基本能力？<br>解析：①<strong>土壤湿度传感器属于感知层</strong>，它负责采集土壤湿度数据，把物理世界的状态变成数据；②<strong>手机APP属于应用层</strong>，它对数据进行展示、分析并向用户提供查看和控制服务；数据在两者之间的传递则依靠<strong>网络层</strong>（Wi-Fi或4G/5G）。③这个例子体现了物联网的两项基本能力：一是<strong>感知能力</strong>——通过传感器获取土壤湿度信息；二是<strong>控制能力</strong>——根据数据自动打开滴灌阀门，或由用户远程手动控制，实现了对物理设备的自动化管理和远程控制。' }
    ],
    exercises: [
      { type: 'choice', question: '物联网的英文缩写是？', options: ['IoT', 'IPO', 'ICT', 'IDC'], answer: 'IoT', explanation: '物联网的英文是 Internet of Things，缩写为 IoT，意思是“物的互联网”。它通过各种信息传感设备，按约定的协议把任何物体与互联网连接起来进行信息交换和通信，实现对物体的智能化识别、定位、跟踪、监控和管理。' },
      { type: 'choice', question: '在物联网三层架构中，摄像头、温湿度传感器、RFID标签属于？', options: ['感知层', '网络层', '应用层', '决策层'], answer: '感知层', explanation: '物联网分为感知层、网络层、应用层三层。感知层负责采集物体信息和识别物体，包括各类传感器、摄像头、RFID标签、二维码、GPS模块等；网络层负责数据传输，如Wi-Fi、4G/5G；应用层负责数据分析处理并提供智能服务，如智能家居APP。' },
      { type: 'choice', question: '下列关于物联网与信息系统关系的说法，正确的是？', options: ['物联网可以完全取代信息系统', '物联网是信息系统感知和控制物理世界的延伸', '物联网与信息系统毫无关系', '有了物联网就不再需要传感器'], answer: '物联网是信息系统感知和控制物理世界的延伸', explanation: '物联网在输入端通过传感器为信息系统自动采集实时数据，在输出端把信息系统的处理结果转化为对物理设备的控制动作，形成“感知—传输—处理—控制”的完整闭环。因此物联网不是取代信息系统，而是信息系统向物理世界的延伸；传感器正是物联网实现信息获取的核心设备，不可缺少。' },
      { type: 'fill', question: '物联网三层架构由下到上依次是___层、___层和___层。', answer: '感知；网络；应用', explanation: '物联网三层架构由下到上依次是感知层（采集数据、识别物体）、网络层（可靠传输数据）、应用层（分析处理数据并提供智能服务）。数据自下而上流动：感知层负责“看到”，网络层负责“传走”，应用层负责“用好”。' },
      { type: 'fill', question: '物联网中实现信息获取的核心设备是___；根据采集到的数据按预设规则自动做出反应、不需要人操作，这种管理方式叫___管理。', answer: '传感器；自动化', explanation: '传感器能感受温度、湿度、光照、压力、位置等物理量并转换成电信号或数字信号输出，是物联网获取信息的核心设备，相当于机器的“感觉器官”。系统依据传感器数据按预先设定的规则自动执行动作（如湿度过低自动浇水、室温过高自动制冷），这种不需要人工干预的方式称为自动化管理。' }
    ]
  });
})();
