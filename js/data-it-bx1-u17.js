/* 信息技术 · 必修1 · 数据与计算 · 第4节 人工智能的影响 */
(function () {
  var v = gzGetVolume('it', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u17',
    name: '第4节 人工智能的影响',
    chapter: '高一信息技术（必修1·数据与计算）· 第四章 走进智能时代',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、人工智能带来的积极影响' },
      { type: 'paragraph', text: '人工智能像一台"加速器"，在很多方面给我们带来了实实在在的好处。主要体现在三个方面：' },
      { type: 'list', items: ['提高效率：工厂里机器人自动生产，24小时不停工，比人工更快更稳（如汽车自动装配线）', '改善生活：智能家居、导航、语音助手让日常起居和出行更方便、更舒适', '推动创新：AI帮科学家研发新药、分析海量科研数据，加速科学发现（如用AI预测蛋白质结构）'] },
      { type: 'keypoint', label: '重点·积极影响三点', text: '<strong>人工智能的积极影响可以记成三个词：提效率、便生活、促创新。</strong>它把人从重复、危险的体力劳动中解放出来，让我们把精力放在更有创造性的事情上。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">人工智能的影响：积极 vs 挑战</text><rect x="30" y="50" width="300" height="220" rx="14" fill="#d5dcf5" stroke="#6266d9" stroke-width="2"/><text x="180" y="80" font-size="15" font-weight="bold" fill="#3d4f8a" text-anchor="middle">✓ 积极影响</text><text x="50" y="115" font-size="13" fill="#2a3454">• 提高效率：工厂自动化</text><text x="50" y="145" font-size="13" fill="#2a3454">• 改善生活：智能家居</text><text x="50" y="175" font-size="13" fill="#2a3454">• 推动创新：新药研发</text><text x="50" y="205" font-size="13" fill="#2a3454">• 解放人力做创造活</text><text x="50" y="235" font-size="13" fill="#2a3454">• 辅助看病更及时</text><rect x="350" y="50" width="300" height="220" rx="14" fill="#ffffff" stroke="#6266d9" stroke-width="2"/><text x="500" y="80" font-size="15" font-weight="bold" fill="#3d4f8a" text-anchor="middle">⚠ 挑战与风险</text><text x="370" y="115" font-size="13" fill="#2a3454">• 就业替代：岗位被取代</text><text x="370" y="145" font-size="13" fill="#2a3454">• 隐私安全：人脸泄露</text><text x="370" y="175" font-size="13" fill="#2a3454">• 伦理问题：责任谁担</text><text x="370" y="205" font-size="13" fill="#2a3454">• 算法偏见：不公平</text><text x="370" y="235" font-size="13" fill="#2a3454">• 依赖过度：变懒惰</text></svg>', caption: '图1　人工智能的影响有"好"有"忧"，我们要一分为二地看。' },
      { type: 'heading', text: '二、人工智能带来的挑战与风险' },
      { type: 'paragraph', text: '任何技术都有两面性，人工智能也不例外。我们在享受便利的同时，也要警惕它带来的问题：' },
      { type: 'list', items: ['就业替代：一些重复性强、规则固定的工作（如流水线工人、简单客服）可能被AI取代，需要人们学习新技能', '隐私安全：刷脸、智能摄像头会采集大量个人数据，一旦保管不善，人脸信息等隐私就可能泄露', '伦理问题：AI做决策出错时，责任算谁的？比如自动驾驶出事故；另外算法也可能带"偏见"，对某些群体不公平'] },
      { type: 'keypoint', label: '重点·三类风险', text: '<strong>人工智能的风险集中在三点：就业被替代、隐私会泄露、伦理责任难划分。</strong>其中"算法偏见"指AI因为训练数据不全面，可能对某类人做出不公平判断，这需要特别警惕。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">人工智能：一把双刃剑</text><line x1="340" y1="60" x2="340" y2="250" stroke="#6266d9" stroke-width="3"/><circle cx="340" cy="55" r="10" fill="#6266d9"/><rect x="150" y="150" width="150" height="22" rx="6" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="225" y="166" font-size="12" font-weight="bold" fill="#3d4f8a" text-anchor="middle">好处（机遇）</text><rect x="380" y="150" width="150" height="22" rx="6" fill="#ffffff" stroke="#6266d9" stroke-width="1.5"/><text x="455" y="166" font-size="12" font-weight="bold" fill="#3d4f8a" text-anchor="middle">风险（挑战）</text><text x="225" y="195" font-size="11" fill="#2a3454" text-anchor="middle">提效率·便生活·促创新</text><text x="455" y="195" font-size="11" fill="#2a3454" text-anchor="middle">替代岗·泄隐私·伦理难</text><polygon points="300,150 340,135 340,165" fill="#6266d9"/><polygon points="380,150 340,165 340,135" fill="#6266d9"/><text x="340" y="280" font-size="12" fill="#2a3454" text-anchor="middle">天平两端：用好是利器，滥用是隐忧</text></svg>', caption: '图2　用天平比喻：AI既是机遇也是挑战，关键是让"好处"那端更重。' },
      { type: 'heading', text: '三、我们该抱什么态度' },
      { type: 'paragraph', text: '面对人工智能，既不用害怕，也不能盲目崇拜。正确的态度是：<strong>拥抱技术，同时加强监管，让AI造福人类。</strong>' },
      { type: 'list', items: ['主动学习：了解AI、会用AI工具，把它当帮手而不是对手', '保持警惕：注意保护个人隐私，不随便上传人脸、证件等敏感信息', '遵守规则：国家要完善法律法规，企业要加强自律，让AI在安全的轨道上发展', '守住底线：重要决定（如医疗、司法）不能完全交给AI，人要对结果负责'] },
      { type: 'keypoint', label: '重点·正确态度', text: '<strong>对待人工智能要做到八个字：拥抱技术，加强监管。</strong>对个人来说，学AI、用AI、护隐私；对社会来说，立法规、强监管，确保AI始终为人服务、造福人类。' },
      { type: 'warn', label: '易错·"AI会取代所有人"', text: '很多同学担心"以后工作全被AI抢走"。其实AI主要替代的是重复、机械的活儿，而需要创意、情感、复杂判断的工作（如艺术创作、心理咨询、科研攻关）短期内很难被取代。所以与其害怕，不如提升自己不会被轻易替代的能力。' },
      { type: 'tip', label: '提示·保护隐私从小事做起', text: '在手机APP里，尽量少授权"人脸""位置"等敏感权限；不明来源的刷脸游戏别随便玩；快递单、车票上的姓名电话记得涂抹再扔。这些小事就是在守住自己的隐私安全。' },
      { type: 'example', label: '例题·双刃剑分析', text: '题目：某小区装了AI摄像头，能自动识别陌生人并报警，居民更安全了；但也被发现把居民的人脸数据卖给了广告公司。请用"双刃剑"的观点分析这件事。<br>解析：这件事既有<strong>好处</strong>——AI安防提升了小区安全（积极影响）；也有<strong>风险</strong>——人脸数据被私自卖给第三方，侵犯居民隐私（隐私安全风险）。这说明AI是双刃剑，需要在使用的同时加强监管，比如立法禁止倒卖人脸数据、要求物业说明数据用途，才能让技术真正造福大家。' }
    ],
    exercises: [
      { type: 'choice', question: '下列哪一项属于人工智能的"积极影响"？', options: ['部分岗位被AI取代', '人脸数据被泄露', '工厂自动化提高生产效率', 'AI决策出错责任难定'], answer: '工厂自动化提高生产效率', explanation: '工厂自动化提高效率是人工智能的积极影响。岗位被取代、隐私泄露、责任难定都属于挑战与风险（消极面）。' },
      { type: 'choice', question: '"算法偏见"指的是什么问题？', options: ['算法运行速度太慢', 'AI训练数据不全面，可能对某些群体不公平', '计算机没有电', '用户不会用软件'], answer: 'AI训练数据不全面，可能对某些群体不公平', explanation: '算法偏见是指AI因训练数据不全面或有偏差，在做判断时对某一群体不公平。它属于人工智能带来的伦理风险之一，不是速度或用电问题。' },
      { type: 'choice', question: '面对人工智能，我们应该抱什么样的态度？', options: ['完全拒绝使用', '盲目崇拜、全交给AI', '拥抱技术，同时加强监管', '不管不问随它去'], answer: '拥抱技术，同时加强监管', explanation: '正确态度是拥抱技术、加强监管，让AI造福人类。既不害怕拒绝，也不盲目崇拜；重要决定仍需人来负责，社会要通过法规保障安全。' },
      { type: 'fill', question: '人工智能的积极影响主要有三点：提高效率、___和___；对应的挑战与风险主要有三点：就业替代、___和伦理问题。', answer: '改善生活；推动创新；隐私安全', explanation: '积极影响：提效率、便生活、促创新；挑战风险：就业被替代、隐私安全（如人脸泄露）、伦理责任难划分。答题时抓住"积极三词、风险三词"。' },
      { type: 'fill', question: '面对AI这把"双刃剑"，我们既要主动___、学会使用智能工具，也要注意保护___，不随便上传人脸等敏感信息，同时社会要完善___来加强监管。', answer: '学习；隐私；法律法规', explanation: '正确态度：个人主动学习并用好AI、保护好个人隐私；社会层面通过完善法律法规、企业自律来加强监管，确保AI造福人类。' }
    ]
  });
})();
