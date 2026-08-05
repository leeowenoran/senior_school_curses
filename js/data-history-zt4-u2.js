/* ============================================================
 * 高三历史 · 专题史与素养 · 专题二：经济与社会生活
 * ============================================================ */
(function () {
  var v = gzGetVolume('history', 'zt4');
  if (!v) return;
  v.points.push({
    title: '专题二：经济与社会生活',
    desc: '食物生产、生产工具、商业贸易、居住环境、交通运输、医疗公共卫生',
    blocks: [
      { type: 'heading', text: '专题概述' },
      { type: 'paragraph', text: '本专题对应选择性必修2，从<strong>食物生产、生产工具与劳作方式、商业贸易、居住环境、交通运输、医疗与公共卫生</strong>六个维度，揭示人类社会经济活动与日常生活的变迁。' },
      { type: 'paragraph', text: '<strong>核心素养融合</strong>：运用唯物史观理解生产力对经济形态的决定作用；用时空观念定位经济变迁的阶段特征；通过史料实证研究经济生活；以历史解释分析经济变迁的影响；涵养家国情怀，理解中华农耕文明的独特价值。' },

      { type: 'heading', text: '一、食物生产与社会生活' },
      { type: 'paragraph', text: '<strong>1. 农业革命</strong>' },
      { type: 'list', items: [
        '约1万年前，人类从食物采集者转变为食物生产者',
        '原始农业的出现：西亚（小麦、大麦）、东亚（水稻、粟）、中南美洲（玉米、甘薯）'
      ]},
      { type: 'paragraph', text: '<strong>2. 新航路开辟后的食物物种交流</strong>' },
      { type: 'list', items: [
        '美洲作物外传：玉米、甘薯、马铃薯、番茄、辣椒等传入欧亚',
        '欧亚作物传入美洲：小麦、水稻、甘蔗等',
        '影响：丰富食物种类，改善饮食结构，促进人口增长'
      ]},
      { type: 'paragraph', text: '<strong>3. 现代农业与食品安全</strong>' },
      { type: 'list', items: [
        '农业机械化、科技革命（优良品种、化肥农药、灌溉技术）',
        '食物储备技术进步：冷藏、冷冻、干燥、罐藏技术',
        '食品安全问题：农药残留、食品添加剂、转基因食品'
      ]},

      { type: 'heading', text: '二、生产工具与劳作方式' },
      { type: 'paragraph', text: '<strong>1. 古代生产工具演变</strong>' },
      { type: 'list', items: [
        '石器→青铜器→铁器（铁犁牛耕是生产力飞跃的标志）',
        '耕作方式：刀耕火种→牛耕',
        '手工业工具：纺织工具、陶瓷制作、金属冶炼'
      ]},
      { type: 'paragraph', text: '<strong>2. 工业革命与工厂制度</strong>' },
      { type: 'list', items: [
        '第一次工业革命：蒸汽机广泛使用，工厂制度建立',
        '第二次工业革命：电力广泛应用，内燃机发明，垄断组织出现',
        '现代科技进步：自动化、信息技术、知识经济'
      ]},
      { type: 'svg', content: '<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="150" height="40" fill="#fef3c7" stroke="#d97706" rx="4"/><text x="85" y="35" font-size="14" text-anchor="middle" fill="#78350f">手工劳动</text><rect x="200" y="10" width="150" height="40" fill="#dcfce7" stroke="#16a34a" rx="4"/><text x="275" y="35" font-size="14" text-anchor="middle" fill="#14532d">手工工场</text><rect x="390" y="10" width="150" height="40" fill="#dbeafe" stroke="#2563eb" rx="4"/><text x="465" y="35" font-size="14" text-anchor="middle" fill="#1e3a8a">工厂制度</text><rect x="580" y="10" width="150" height="40" fill="#ede9fe" stroke="#7c3aed" rx="4"/><text x="655" y="35" font-size="14" text-anchor="middle" fill="#4c1d95">自动化信息化</text><line x1="160" y1="30" x2="200" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#arrow2)"/><line x1="350" y1="30" x2="390" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#arrow2)"/><line x1="540" y1="30" x2="580" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#arrow2)"/><defs><marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#64748b"/></marker></defs><text x="400" y="80" font-size="16" text-anchor="middle" fill="#1e293b" font-weight="bold">生产组织形式演变</text><text x="400" y="110" font-size="14" text-anchor="middle" fill="#64748b">从分散到集中，从手工到机器</text></svg>' },

      { type: 'heading', text: '三、商业贸易与日常生活' },
      { type: 'paragraph', text: '<strong>1. 古代商业贸易</strong>' },
      { type: 'list', items: [
        '货币、信贷与商业契约的起源与发展',
        '丝绸之路与海上丝绸之路',
        '古代商业城市与商帮（徽商、晋商）'
      ]},
      { type: 'paragraph', text: '<strong>2. 近代以来世界贸易</strong>' },
      { type: 'list', items: [
        '新航路开辟后世界市场开始形成',
        '工业革命后世界市场进一步扩大',
        '19世纪末20世纪初资本主义世界市场最终形成'
      ]},

      { type: 'heading', text: '四、村落、城镇与居住环境' },
      { type: 'paragraph', text: '<strong>1. 古代村落与城市</strong>' },
      { type: 'list', items: [
        '村落的产生：农业革命后人类开始定居',
        '城市的产生：政治、经济、文化中心',
        '古代城市功能：防御（城墙）、宗教（神庙）、商业（市场）'
      ]},
      { type: 'paragraph', text: '<strong>2. 近代城市化</strong>' },
      { type: 'list', items: [
        '工业革命推动城市化进程',
        '大量农村人口涌入城市',
        '城市化带来的问题：住房紧张、交通拥堵、环境污染'
      ]},

      { type: 'heading', text: '五、交通与社会变迁' },
      { type: 'paragraph', text: '<strong>1. 古代交通</strong>' },
      { type: 'list', items: [
        '陆路：秦驰道、罗马道路系统、丝绸之路',
        '水路：中国大运河（古代最长运河）、大河流域航运'
      ]},
      { type: 'paragraph', text: '<strong>2. 现代交通</strong>' },
      { type: 'list', items: [
        '铁路：蒸汽机车（19世纪初）',
        '公路：汽车的发明和普及',
        '航空：飞机的发明',
        '影响：促进人口流动、城市化、经济一体化'
      ]},

      { type: 'heading', text: '六、医疗与公共卫生' },
      { type: 'paragraph', text: '<strong>1. 古代医学成就</strong>' },
      { type: 'list', items: [
        '中国：中医理论（《黄帝内经》《伤寒杂病论》）、药物学（《本草纲目》）',
        '古希腊：希波克拉底（"医学之父"）',
        '古罗马：盖伦的医学理论'
      ]},
      { type: 'paragraph', text: '<strong>2. 现代医疗卫生体系</strong>' },
      { type: 'list', items: [
        '现代医学进步：消毒法、麻醉法、抗生素',
        '公共卫生体系：疾病预防、卫生监督',
        '医疗保障制度',
        '影响：延长人类寿命，改善健康状况，促进人口增长'
      ]},

      { type: 'heading', text: '核心素养应用' },
      { type: 'paragraph', text: '<strong>唯物史观</strong>：理解生产力对生产工具、经济形态的决定作用（如铁犁牛耕推动封建生产关系确立）' },
      { type: 'paragraph', text: '<strong>时空观念</strong>：将经济活动置于特定历史阶段和地理空间理解（如经济重心南移的过程）' },
      { type: 'paragraph', text: '<strong>史料实证</strong>：运用考古材料、图像史料研究经济生活（如《清明上河图》反映宋代商业）' },
      { type: 'paragraph', text: '<strong>历史解释</strong>：解释经济变迁对社会生活的影响（如工业革命改变生活方式）' },
      { type: 'paragraph', text: '<strong>家国情怀</strong>：理解中华农耕文明的独特价值（如精耕细作的农业传统）' },

      { type: 'heading', text: '课后练习' },
      { type: 'exercise', items: [
        {
          question: '世界上最早的纸币"交子"出现于（  ）',
          options: ['A. 唐朝', 'B. 北宋', 'C. 南宋', 'D. 明朝'],
          answer: 1,
          explanation: '北宋时期，四川地区出现了世界上最早的纸币"交子"。这是因为宋代商业繁荣，金属货币携带不便，加上四川地区使用铁钱，重量大、价值低，于是出现了纸币。'
        },
        {
          question: '第一次工业革命的核心标志是（  ）',
          options: ['A. 电力的广泛应用', 'B. 蒸汽机的广泛使用', 'C. 内燃机的发明', 'D. 计算机的应用'],
          answer: 1,
          explanation: '第一次工业革命（18世纪中后期—19世纪中期）的核心标志是蒸汽机的广泛使用，人类进入"蒸汽时代"。A项电力的广泛应用是第二次工业革命的标志；C项内燃机也是第二次工业革命的成果；D项计算机是第三次科技革命的成果。'
        },
        {
          question: '新航路开辟后，从美洲传入欧亚大陆的作物不包括（  ）',
          options: ['A. 玉米', 'B. 甘薯', 'C. 小麦', 'D. 马铃薯'],
          answer: 2,
          explanation: '玉米、甘薯、马铃薯、番茄、辣椒等都是美洲作物，新航路开辟后传入欧亚。小麦原产于西亚，是从欧亚传入美洲的作物，不是从美洲传入的。'
        },
        {
          question: '中国古代经济重心南移完成于（  ）',
          options: ['A. 魏晋南北朝', 'B. 唐朝', 'C. 南宋', 'D. 明朝'],
          answer: 2,
          explanation: '经济重心南移是一个长期过程：魏晋南北朝时期江南得到开发；唐中后期南方经济逐渐超过北方；南宋时期经济重心南移完成。此后，南方一直是中国经济最发达的地区。'
        },
        {
          question: '下列哪项不是工业革命的影响（  ）',
          options: ['A. 极大地提高了社会生产力', 'B. 推动了城市化进程', 'C. 导致了环境污染', 'D. 消除了贫富差距'],
          answer: 3,
          explanation: '工业革命极大地提高了社会生产力，推动了城市化进程，但也带来了环境污染、贫富分化等社会问题。D项"消除了贫富差距"错误，工业革命实际上加剧了贫富差距，工业资产阶级和无产阶级的矛盾日益尖锐。'
        }
      ]}
    ]
  });
})();
