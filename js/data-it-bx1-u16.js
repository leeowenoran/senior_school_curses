/* 信息技术 · 必修1 · 数据与计算 · 第3节 利用智能工具解决问题 */
(function () {
  var v = gzGetVolume('it', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u16',
    name: '第3节 利用智能工具解决问题',
    chapter: '高一信息技术（必修1·数据与计算）· 第四章 走进智能时代',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、智能工具为什么"聪明"' },
      { type: 'paragraph', text: '我们常说某个AI工具很"聪明"，其实它的聪明来自三个要素，缺一不可。记住这个口诀：<strong>数据 + 算法 + 算力</strong>。' },
      { type: 'list', items: ['数据：AI学习的"原材料"。比如要让AI认猫，就得先给它看成千上万张猫的照片', '算法：AI思考的"方法步骤"。它告诉计算机怎么从数据里找规律，就像做菜的菜谱', '算力：AI运行的"体力"。再好的算法，没有足够快的计算机（芯片）也跑不动'] },
      { type: 'keypoint', label: '重点·三要素', text: '<strong>智能工具的工作原理 = 数据（原料） + 算法（方法） + 算力（体力）。</strong>数据越多越全，算法越合理，算力越强，AI工具就表现越好。三者像"做饭"一样：数据是食材，算法是菜谱，算力是灶火。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">智能工具的工作原理</text><rect x="30" y="110" width="140" height="80" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="100" y="142" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="middle">数据输入</text><text x="100" y="164" font-size="11" fill="#2a3454" text-anchor="middle">图片/语音/文字</text><rect x="200" y="110" width="140" height="80" rx="12" fill="#6266d9"/><text x="270" y="142" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">算法处理</text><text x="270" y="164" font-size="11" fill="#ffffff" text-anchor="middle">从数据找规律</text><rect x="370" y="110" width="140" height="80" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="440" y="142" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="middle">结果输出</text><text x="440" y="164" font-size="11" fill="#2a3454" text-anchor="middle">识别/回答</text><rect x="200" y="210" width="140" height="60" rx="12" fill="#ffffff" stroke="#6266d9" stroke-width="1.5"/><text x="270" y="234" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">算力支撑</text><text x="270" y="254" font-size="11" fill="#2a3454" text-anchor="middle">芯片快速运算</text><line x1="170" y1="150" x2="198" y2="150" stroke="#6266d9" stroke-width="2"/><line x1="340" y1="150" x2="368" y2="150" stroke="#6266d9" stroke-width="2"/><line x1="270" y1="190" x2="270" y2="208" stroke="#6266d9" stroke-width="2" stroke-dasharray="4 4"/><text x="100" y="80" font-size="11" fill="#2a3454" text-anchor="middle">↑数据</text><text x="440" y="80" font-size="11" fill="#2a3454" text-anchor="middle">结果↓</text></svg>', caption: '图1　智能工具的工作流程：先输入数据，再用算法处理（靠算力支撑），最后输出结果。' },
      { type: 'heading', text: '二、三种常见的智能工具' },
      { type: 'paragraph', text: '中学生最常用的智能工具主要有三类。它们"看家本领"不同，但底层都离不开上面的三要素。' },
      { type: 'list', items: ['语音识别：把人说的话变成文字。比如语音输入法、会议记录转写、对音箱说话', '图像识别：让计算机"看"懂图片，识别里面的物体或人脸。比如扫码支付、相册自动分类、刷脸进门', '自然语言处理（NLP）：让计算机理解和生成人类语言。比如智能客服回答问题、AI帮你写作文提纲、翻译外文'] },
      { type: 'keypoint', label: '重点·三类工具的区别', text: '<strong>语音识别 = 听声音转文字；图像识别 = 看图片认东西；自然语言处理 = 理解和生成语言。</strong>可以这样记：语音识别管"耳朵"，图像识别管"眼睛"，自然语言处理管"大脑里的语言"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">三种智能工具的流程对比</text><rect x="30" y="50" width="190" height="45" rx="10" fill="#6266d9"/><text x="125" y="78" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">语音识别</text><rect x="30" y="105" width="190" height="45" rx="10" fill="#6266d9"/><text x="125" y="133" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">图像识别</text><rect x="30" y="160" width="190" height="45" rx="10" fill="#6266d9"/><text x="125" y="188" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">自然语言处理</text><rect x="245" y="50" width="410" height="45" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="450" y="78" font-size="12" fill="#2a3454" text-anchor="middle">输入：声音 → 转写 → 输出：文字</text><rect x="245" y="105" width="410" height="45" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="450" y="133" font-size="12" fill="#2a3454" text-anchor="middle">输入：图片 → 分析 → 输出：物体/人脸标签</text><rect x="245" y="160" width="410" height="45" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="450" y="188" font-size="12" fill="#2a3454" text-anchor="middle">输入：语言 → 理解生成 → 输出：回答/文章</text><line x1="220" y1="72" x2="244" y2="72" stroke="#6266d9" stroke-width="1.5"/><line x1="220" y1="127" x2="244" y2="127" stroke="#6266d9" stroke-width="1.5"/><line x1="220" y1="182" x2="244" y2="182" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="245" font-size="13" fill="#2a3454" text-anchor="middle">共同点：输入某种数据 → AI处理 → 输出有用结果</text><text x="340" y="268" font-size="12" fill="#2a3454" text-anchor="middle">不同点：输入和输出的"样子"不一样（声音/图片/语言）</text></svg>', caption: '图2　语音识别、图像识别、自然语言处理三种工具，流程结构相同，处理的对象不同。' },
      { type: 'heading', text: '三、用智能工具解决问题的四步法' },
      { type: 'paragraph', text: '遇到问题时，不要盲目打开AI工具。按照以下步骤来，才能用得对、用得好：' },
      { type: 'list', items: ['第一步 明确问题：先想清楚自己到底要解决什么。比如"把这段会议录音变成文字稿"', '第二步 选择工具：根据问题选合适的工具。转录音 → 用语音识别；认植物 → 用图像识别；写作文 → 用自然语言处理', '第三步 输入数据：把材料（录音、照片、问题）清楚地交给工具', '第四步 获取结果：得到答案后，还要自己检查对不对，必要时修改'] },
      { type: 'keypoint', label: '重点·四步法', text: '<strong>用智能工具解决问题 = 明确问题 → 选择工具 → 输入数据 → 获取结果。</strong>最关键的是第一步和第四步：问题没想清，工具就选错；结果不检查，可能出错还发现不了。' },
      { type: 'tip', label: '提示·AI的结果要"过一遍脑子"', text: '智能工具不是万能的，它也会"说错话"（业界叫"幻觉"）。比如让AI写作文，它可能编造一个并不存在的名言。所以第四步"获取结果"之后，一定要用自己的知识核对一下，重要的内容更不能照抄。' },
      { type: 'example', label: '例题·四步法实战', text: '题目：小明去公园拍到一种不认识的植物，想查出它叫什么、有什么特点。请用四步法说明他该怎么用智能工具。<br>解析：第一步<strong>明确问题</strong>——想知道植物的名称和特点；第二步<strong>选择工具</strong>——用图像识别类工具（如识图APP）；第三步<strong>输入数据</strong>——把拍好的植物照片上传；第四步<strong>获取结果</strong>——得到植物名称后，再核对一下特征是否相符，确认无误后记录。' }
    ],
    exercises: [
      { type: 'choice', question: '智能工具"聪明"的三大要素是？', options: ['数据 + 算法 + 算力', '网络 + 屏幕 + 电池', '键盘 + 鼠标 + 主机', '文字 + 图片 + 声音'], answer: '数据 + 算法 + 算力', explanation: '智能工具依靠数据（原材料）、算法（方法步骤）、算力（芯片运算能力）三大要素协同工作。其他选项中，网络电池、键鼠主机、文字图片声音都不是"为什么聪明"的根本原因。' },
      { type: 'choice', question: '把会议录音自动转成文字稿，主要用到了哪种智能工具？', options: ['图像识别', '自然语言处理', '语音识别', '智能导航'], answer: '语音识别', explanation: '语音识别的作用就是把声音（语音）转换成文字。会议录音转文字正是语音识别的典型应用。图像识别管图片，自然语言处理管理解和生成语言，导航属于智能交通。' },
      { type: 'choice', question: '用AI客服机器人回答问题，主要依赖哪种技术？', options: ['语音识别', '图像识别', '自然语言处理', '智能仓储'], answer: '自然语言处理', explanation: 'AI客服需要"理解"用户问的话、并"生成"回答，这正是自然语言处理（NLP）的本领。语音识别只管声音转文字，图像识别管图片，智能仓储属物流领域。' },
      { type: 'fill', question: '用智能工具解决问题的四个步骤是：明确问题 → ___ → 输入数据 → ___。', answer: '选择工具；获取结果', explanation: '四步法为：明确问题 → 选择工具 → 输入数据 → 获取结果。先想清问题、选对工具，再提供数据，最后拿结果并核对。' },
      { type: 'fill', question: '让AI认猫，需要先给它看成千上万张猫的照片，这属于三要素中的___；告诉计算机怎么从照片里找规律的方法叫___；让这一切快速跑起来的计算机芯片提供的是___。', answer: '数据；算法；算力', explanation: '大量猫的照片是学习的"原材料"即数据；从数据找规律的方法步骤是算法；芯片提供的高速运算能力是算力。三者共同支撑智能工具工作。' }
    ]
  });
})();
