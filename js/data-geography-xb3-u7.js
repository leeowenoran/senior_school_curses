/* 地理 · 选择性必修3 · 第2章 · 课时：海洋空间资源开发与国家安全 */
(function () {
  var v = gzGetVolume('geography', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u7',
    name: '海洋空间资源开发与国家安全',
    chapter: '选择性必修3 · 第2章 资源安全与国家安全',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是海洋空间资源' },
      { type: 'paragraph', text: '海洋空间资源是指海洋水体、海面、海床和底土所提供的人类可利用空间，包括航运、养殖、油气开采、旅游、倾废、军事活动等多种用途。随着陆域资源趋紧，海洋成为世界竞相开发的新空间。合理开发海洋空间，对拓展生存发展空间、保障资源安全意义重大。' },
      { type: 'list', items: ['海面空间：航运、旅游、风力发电', '水体空间：海水养殖、渔业', '海床空间：油气、矿产开采', '海底空间：光缆、管线、仓储', '近海与远海空间的战略价值'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">海洋空间的立体分层利用</text><rect x="60" y="60" width="560" height="55" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="92" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">海面：航运、旅游、风电</text><rect x="60" y="125" width="560" height="55" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="157" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">水体：养殖、渔业</text><rect x="60" y="190" width="560" height="55" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="222" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">海床：油气、矿产</text><rect x="60" y="255" width="560" height="45" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="284" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">海底：光缆、管线、仓储</text></svg>', caption: '图1　海洋空间可立体分层利用：海面、水体、海床、海底各有所用。' },
      { type: 'keypoint', label: '重点·海洋空间的立体性', text: '<strong>海洋是"三维"空间：</strong>从海面到海底，不同层位可同时安排不同用途——海面跑船、水体育鱼、海床采油、海底铺缆。这种立体开发提高了空间利用率，但也带来用海冲突和管控难题，需要统筹规划。' },
      { type: 'heading', text: '二、海洋空间开发的主要领域' },
      { type: 'paragraph', text: '海洋空间开发涵盖多个领域：港口与航运是传统核心；海水增养殖提供食物；海上风电利用海面风能；海底油气和可燃冰是重要能源；跨海大桥、海底隧道、人工岛拓展交通与建设空间；滨海旅游带来经济收益。各领域共同构成蓝色经济的重要部分。' },
      { type: 'list', items: ['交通运输：港口、航道、跨海通道', '资源开发：油气、矿产、风电', '食物生产：海水养殖、海洋渔业', '空间建设：人工岛、海底仓储', '社会服务：滨海旅游、科研'] },
      { type: 'table', headers: ['开发领域', '利用空间', '主要价值'], rows: [['航运港口', '海面', '物流通道'], ['海水养殖', '水体', '食物供给'], ['油气开采', '海床', '能源保障'], ['滨海旅游', '海岸', '经济收益']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">海洋空间开发的主要领域</text><rect x="60" y="65" width="170" height="70" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="145" y="105" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">航运</text><text x="145" y="132" font-size="12" fill="#1f3a4d" text-anchor="middle">港口航道</text><rect x="255" y="65" width="170" height="70" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="105" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">能源</text><text x="340" y="132" font-size="12" fill="#1f3a4d" text-anchor="middle">油气风电</text><rect x="450" y="65" width="170" height="70" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="535" y="105" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">渔业</text><text x="535" y="132" font-size="12" fill="#1f3a4d" text-anchor="middle">养殖捕捞</text><rect x="255" y="185" width="170" height="70" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="225" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">旅游建设</text><text x="340" y="252" font-size="12" fill="#1f3a4d" text-anchor="middle">滨海人工岛</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">多领域协同，构成蓝色经济。</text></svg>', caption: '图2　海洋空间开发涵盖航运、能源、渔业、旅游建设等领域。' },
      { type: 'example', label: '例题·海洋空间利用', text: '题目：在海洋"水体"层位进行的开发活动主要是？<br>A. 铺设海底光缆　B. 海水养殖<br>C. 开采海底石油　D. 建设跨海大桥<br>解析：海洋水体指海水本身所在的空间层位，适合开展海水养殖和海洋渔业。海底光缆铺在海底，海底石油位于海床及以下，跨海大桥主要利用海面与上部空间。因此属于水体层位的是海水养殖，选 B。' },
      { type: 'heading', text: '三、海洋开发与国家安全的联系' },
      { type: 'paragraph', text: '海洋空间关乎国家领土主权、海洋权益和资源安全。广阔海疆蕴藏丰富资源，是战略缓冲区，也是国际贸易主通道。维护海洋权益、保护海上通道安全，对保障能源与贸易命脉意义重大。同时，海域划界争端、岛礁主权争议也直接关系到国家安全。' },
      { type: 'warn', label: '易错·海洋权益不等于"想用就用"', text: '海洋空间利用受国际法和海洋法公约约束，不同海域（领海、专属经济区、公海）权利不同。在他人专属经济区内未经同意开采资源属侵权。不能把"海洋空间广阔"简单等同于"可任意开发"，必须依法依约、统筹权属与生态。' },
      { type: 'tip', label: '提示·海洋安全关键词', text: '答题把握三词：① 权益——依法主张领海、专属经济区权利；② 通道——保护海上航运与能源运输线；③ 生态——开发同时守住海洋环境。权益、通道、生态三位一体，就是海洋空间开发的国安视角。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">海洋空间开发的国家安全视角</text><rect x="50" y="70" width="170" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="135" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">权益</text><text x="135" y="138" font-size="12" fill="#1f3a4d" text-anchor="middle">依法主张</text><rect x="250" y="70" width="170" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="335" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">通道</text><text x="335" y="138" font-size="12" fill="#1f3a4d" text-anchor="middle">航运能源线</text><rect x="450" y="70" width="180" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="540" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">生态</text><text x="540" y="138" font-size="12" fill="#1f3a4d" text-anchor="middle">环境守住</text><rect x="200" y="200" width="280" height="70" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="235" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">海洋安全 = 权益+通道+生态</text><text x="340" y="262" font-size="12" fill="#1f3a4d" text-anchor="middle">保障资源与贸易命脉，维护主权。</text></svg>', caption: '图3　海洋安全由权益、通道、生态三支柱支撑。' },
      { type: 'heading', text: '四、走向可持续的海洋开发' },
      { type: 'paragraph', text: '海洋空间虽广，但生态脆弱、自净有限。开发应遵循陆海统筹、节约优先、保护优先、自然恢复为主的方针，控制污染、养护渔业资源、保护典型生态系统。只有在开发中保护、在保护中开发，才能保障海洋空间资源持续服务国家安全。' },
      { type: 'list', items: ['陆海统筹，整体谋划空间布局', '保护优先，守住生态红线', '依法治海，明晰权属与边界', '科技兴海，提高开发与管护能力'] },
      { type: 'example', label: '例题·可持续海洋开发', text: '题目：实现海洋空间可持续开发，应当？<br>A. 无限度捕捞增产　B. 保护优先、在保护中开发<br>C. 随意占用海岸空间　D. 忽视海洋污染<br>解析：海洋生态脆弱、自净能力有限，无限捕捞、随意占用、忽视污染都会破坏系统、危及长远安全。正确做法是坚持保护优先、在保护中开发，落实陆海统筹和依法治海，使海洋资源持续服务国计民生。故选 B。' }
    ],
    exercises: [
      { type: 'choice', question: '在海洋"水体"层位主要进行的开发活动是？', options: ['铺设海底光缆', '海水养殖', '开采海底石油', '建设跨海大桥'], answer: '海水养殖', explanation: '海洋空间可分为海面、水体、海床、海底等层位。水体指海水本身所在空间，适合开展海水养殖和海洋渔业；海底光缆位于海底，海底石油位于海床及之下，跨海大桥主要用海面与上部空间。因此属于水体层位的是海水养殖。' },
      { type: 'choice', question: '海洋空间开发关乎国家安全，主要体现在？', options: ['仅供旅游休闲', '保障资源与贸易通道安全', '与主权无关', '只对渔业有意义'], answer: '保障资源与贸易通道安全', explanation: '海洋蕴藏油气、矿产、生物等资源，又是国际贸易和能源运输的主通道，同时涉及领海、专属经济区等海洋权益与岛礁主权。维护海洋权益、保护海上通道，对保障资源安全和经济安全意义重大，因此核心体现在保障资源与贸易通道安全。' },
      { type: 'choice', question: '关于海洋空间利用，正确的态度是？', options: ['想用就用、任意开发', '依法依约、统筹权属与生态', '专属经济区可随意进入开采', '公海不属于任何管理范围'], answer: '依法依约、统筹权属与生态', explanation: '海洋空间利用受国际法与海洋法公约约束，领海、专属经济区、公海权利各异，在他人专属经济区擅自开采属侵权。因此不能任意开发，必须依法依约、统筹权属与生态保护，实现可持续利用。其余三项均违背海洋法治与可持续原则。' },
      { type: 'fill', question: '海洋是"三维"空间，从海面到海底可___分层安排不同用途。', answer: '立体', explanation: '与陆地主要在平面上利用不同，海洋从海面、水体、海床到海底可以在垂直方向上同时安排航运、养殖、采油、铺缆等不同活动，这种特性称为海洋空间的立体性。立体开发提高了空间利用率，但也带来用海冲突，需要统筹规划。' },
      { type: 'fill', question: '海洋安全可从权益、通道和___三个支柱来理解，三者共同保障国家海洋利益。', answer: '生态', explanation: '从国家安全视角看海洋空间开发，关键在三点：权益即依法主张领海与专属经济区权利，通道即保护海上航运与能源运输线，生态即开发同时守住海洋环境。权益、通道、生态三位一体，构成海洋安全的支撑框架。' }
    ]
  });
})();
