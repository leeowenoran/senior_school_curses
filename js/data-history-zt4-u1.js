/* ============================================================
 * 高三历史 · 专题史与素养 · 专题一：国家制度与社会治理
 * ============================================================ */
(function () {
  var v = gzGetVolume('history', 'zt4');
  if (!v) return;
  v.points = [
    {
      title: '专题一：国家制度与社会治理',
      desc: '政治制度、官员选拔、法律教化、民族关系、货币赋税、基层治理',
      blocks: [
        { type: 'heading', text: '专题概述' },
        { type: 'paragraph', text: '本专题对应选择性必修1，从<strong>政治制度、官员选拔与管理、法律与教化、民族关系与国家关系、货币与赋税制度、基层治理与社会保障</strong>六个维度，系统梳理中外国家治理的演变脉络。' },
        { type: 'paragraph', text: '<strong>核心素养融合</strong>：运用唯物史观分析制度变革的根源；用时空观念定位制度演变的阶段特征；通过史料实证解读制度文献；以历史解释评价制度影响；涵养家国情怀，理解中国制度特色。' },

        { type: 'heading', text: '一、政治制度的演变' },
        { type: 'paragraph', text: '<strong>1. 中国古代政治制度</strong>' },
        { type: 'list', items: [
          '<strong>先秦</strong>：世袭制（夏）、内外服制（商）、分封制与宗法制（西周）——"家国一体"，尚未实现中央集权',
          '<strong>秦朝</strong>：皇帝制度（皇权至上）、三公九卿制（中央）、郡县制（地方）——官僚政治取代贵族政治',
          '<strong>汉至明清</strong>：中央行政制度演变（三公九卿→三省六部→二府三司→内阁→军机处）；地方行政制度演变（郡县制→州郡县→道州县→行省制）',
          '<strong>演变趋势</strong>：君权不断加强，相权不断削弱；中央集权不断加强，地方权力不断削弱'
        ]},
        { type: 'svg', content: '<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="40" fill="#e0f2fe" stroke="#0284c7" rx="4"/><text x="70" y="35" font-size="14" text-anchor="middle" fill="#0c4a6e">先秦：分封宗法</text><rect x="150" y="10" width="120" height="40" fill="#dcfce7" stroke="#16a34a" rx="4"/><text x="210" y="35" font-size="14" text-anchor="middle" fill="#14532d">秦：皇帝郡县</text><rect x="290" y="10" width="120" height="40" fill="#fef3c7" stroke="#d97706" rx="4"/><text x="350" y="35" font-size="14" text-anchor="middle" fill="#78350f">隋唐：三省六部</text><rect x="430" y="10" width="120" height="40" fill="#fce7f3" stroke="#db2777" rx="4"/><text x="490" y="35" font-size="14" text-anchor="middle" fill="#831843">宋：二府三司</text><rect x="570" y="10" width="120" height="40" fill="#ede9fe" stroke="#7c3aed" rx="4"/><text x="630" y="35" font-size="14" text-anchor="middle" fill="#4c1d95">明清：内阁军机</text><line x1="130" y1="30" x2="150" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/><line x1="270" y1="30" x2="290" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/><line x1="410" y1="30" x2="430" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/><line x1="550" y1="30" x2="570" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#64748b"/></marker></defs><text x="400" y="80" font-size="16" text-anchor="middle" fill="#1e293b" font-weight="bold">中央行政制度演变趋势</text><text x="400" y="110" font-size="14" text-anchor="middle" fill="#64748b">君权不断加强，相权不断削弱</text></svg>' },

        { type: 'paragraph', text: '<strong>2. 西方政治制度</strong>' },
        { type: 'list', items: [
          '<strong>古希腊</strong>：雅典民主政治（公民大会、议事会、陪审法庭）——奴隶制民主，少数人的民主',
          '<strong>古罗马</strong>：共和制度（元老院、执政官、公民大会）→帝国制度；罗马法体系',
          '<strong>近代西方</strong>：英国君主立宪制（1689年《权利法案》）；美国总统制共和制（1787年宪法）；法国共和制（1875年宪法）'
        ]},

        { type: 'heading', text: '二、官员的选拔与管理' },
        { type: 'paragraph', text: '<strong>1. 中国古代选官制度演变</strong>' },
        { type: 'table', headers: ['时期', '选官制度', '选官标准'], rows: [
          ['西周至春秋', '世官制', '血缘'],
          ['汉代', '察举制', '德行与才能'],
          ['魏晋南北朝', '九品中正制', '门第族望'],
          ['隋唐至明清', '科举制', '才学（考试）']
        ]},
        { type: 'paragraph', text: '<strong>科举制的意义</strong>：选官权收归中央，加强中央集权；打破门阀垄断，扩大统治基础；促进社会阶层流动。' },

        { type: 'paragraph', text: '<strong>2. 西方文官制度</strong>' },
        { type: 'list', items: [
          '英国率先建立（19世纪中期）；美国《彭德尔顿法》（1883年）',
          '特点：公开考试、择优录用；政治中立、职务常任；按劳付酬、论功晋升'
        ]},

        { type: 'heading', text: '三、法律与教化' },
        { type: 'paragraph', text: '<strong>1. 中国古代法治与教化</strong>' },
        { type: 'list', items: [
          '先秦：法家（商鞅、韩非子）主张以法治国；儒家（孔子、孟子）主张德治',
          '《唐律疏议》：中国现存最早、最完整的封建法典',
          '礼法结合："德礼为政教之本，刑罚为政教之用"'
        ]},

        { type: 'paragraph', text: '<strong>2. 近代西方法律</strong>' },
        { type: 'list', items: [
          '罗马法传统：《十二铜表法》《查士丁尼法典》',
          '英美法系（判例法）与大陆法系（成文法）'
        ]},

        { type: 'heading', text: '四、民族关系与国家关系' },
        { type: 'paragraph', text: '<strong>1. 中国古代民族政策</strong>' },
        { type: 'list', items: [
          '秦汉：设立郡县、和亲、羁縻政策',
          '隋唐：开明民族政策、册封、都护府',
          '元朝：四等人制',
          '清朝：改土归流、册封达赖班禅、设驻藏大臣'
        ]},

        { type: 'paragraph', text: '<strong>2. 当代中国民族政策</strong>' },
        { type: 'list', items: [
          '民族区域自治制度：基本政治制度',
          '处理民族关系的方针：民族平等、民族团结、各民族共同繁荣'
        ]},

        { type: 'heading', text: '五、货币与赋税制度' },
        { type: 'paragraph', text: '<strong>1. 中国货币演变</strong>' },
        { type: 'list', items: [
          '秦统一货币（圆形方孔半两钱）→北宋交子（世界上最早的纸币）→明清白银→人民币'
        ]},

        { type: 'paragraph', text: '<strong>2. 中国赋税制度演变</strong>' },
        { type: 'list', items: [
          '租调制→租庸调制→两税法（780年，以土地和财产为主）→一条鞭法（明）→摊丁入亩（清）',
          '<strong>演变趋势</strong>：从人丁为主到土地/财产为主'
        ]},

        { type: 'heading', text: '六、基层治理与社会保障' },
        { type: 'paragraph', text: '<strong>1. 中国古代户籍与基层治理</strong>' },
        { type: 'list', items: [
          '编户齐民、乡里制度、保甲制度',
          '乡约：宋代《吕氏乡约》、明代王阳明《南赣乡约》'
        ]},

        { type: 'paragraph', text: '<strong>2. 世界主要国家的基层治理与社会保障</strong>' },
        { type: 'list', items: [
          '德国率先建立社会保障体系（1883—1889年）',
          '英国"福利国家"（1948年）',
          '新中国社会保障体系'
        ]},

        { type: 'heading', text: '核心素养应用' },
        { type: 'paragraph', text: '<strong>唯物史观</strong>：分析制度变革的生产力根源（如铁犁牛耕推动分封制瓦解）' },
        { type: 'paragraph', text: '<strong>时空观念</strong>：将制度演变置于特定时空背景下理解（如隋唐三省六部制与科举制的关系）' },
        { type: 'paragraph', text: '<strong>史料实证</strong>：运用文献史料分析制度内容（如《唐律疏议》反映的礼法结合）' },
        { type: 'paragraph', text: '<strong>历史解释</strong>：评价制度的利弊（如科举制的积极意义与局限性）' },
        { type: 'paragraph', text: '<strong>家国情怀</strong>：理解中国政治制度的特色与优势（如民族区域自治制度）' },

        { type: 'heading', text: '课后练习' },
        { type: 'exercise', items: [
          {
            question: '秦朝推行郡县制的主要作用是（  ）',
            options: ['A. 加强了贵族政治', 'B. 实现了中央对地方的直接控制', 'C. 导致了地方割据', 'D. 削弱了皇权'],
            answer: 1,
            explanation: '郡县制下，郡守和县令由皇帝直接任免，不得世袭，实现了中央对地方的直接控制，加强了中央集权。A项错误，郡县制是官僚政治取代贵族政治的标志；C项错误，郡县制有利于加强中央集权，防止地方割据；D项错误，郡县制加强了皇权。'
          },
          {
            question: '科举制创立于（  ）',
            options: ['A. 汉朝', 'B. 魏晋南北朝', 'C. 隋朝', 'D. 唐朝'],
            answer: 2,
            explanation: '隋炀帝设立进士科，标志着科举制的正式创立。唐朝进一步完善科举制，增加考试科目，扩大应试人数。'
          },
          {
            question: '下列哪一制度标志着中国古代君主专制达到顶峰（  ）',
            options: ['A. 三省六部制', 'B. 内阁制', 'C. 军机处', 'D. 二府三司制'],
            answer: 2,
            explanation: '雍正帝设立军机处，军机大臣完全听命于皇帝，跪受笔录，君主专制达到顶峰。A项三省六部制分割相权，加强皇权，但未达到顶峰；B项内阁制是皇帝的内侍咨询机构；D项二府三司制是宋代的中央行政制度。'
          },
          {
            question: '英国《权利法案》的核心内容是（  ）',
            options: ['A. 确立共和制', 'B. 限制王权，确立议会主权', 'C. 建立联邦制', 'D. 实行总统制'],
            answer: 1,
            explanation: '1689年《权利法案》规定，国王未经议会同意不能停止法律、征收赋税等，限制了王权，确立了议会主权，标志着英国君主立宪制的确立。A项错误，英国确立的是君主立宪制，不是共和制；C项错误，联邦制是美国的特点；D项错误，总统制是美国的特点。'
          },
          {
            question: '中国古代赋税制度演变的趋势是（  ）',
            options: ['A. 从土地为主到人丁为主', 'B. 从人丁为主到土地财产为主', 'C. 从实物税到货币税', 'D. 从单一税到复合税'],
            answer: 1,
            explanation: '唐代两税法"唯以资产为宗，不以丁身为本"，明代一条鞭法、清代摊丁入亩，赋税标准从人丁逐渐转向土地和财产。这一演变反映了国家对农民人身控制的放松，有利于商品经济发展。'
          }
        ]}
      ]
    }
  ];
})();
