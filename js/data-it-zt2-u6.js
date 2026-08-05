/* 信息技术 · 高三复习 · 信息系统与安全 · 第6节 个人信息保护 */
(function () {
  var v = gzGetVolume('it', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u6',
    name: '第6节 个人信息保护',
    chapter: '五、信息系统安全防护技术',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是个人信息' },
      { type: 'paragraph', text: '个人信息就是能识别你这个人的各种信息。比如你的姓名、身份证号、手机号、家庭住址，甚至你的上网记录、购物习惯。在日常生活中，我们在手机APP、网页、快递单上留下的痕迹，都属于个人信息。保护个人信息，就是保护我们自己的隐私和安全。' },
      { type: 'paragraph', text: '个人信息可以分为两大类：个人敏感信息和个人一般信息。敏感信息一旦泄露，很可能直接危害你的人身和财产安全，所以要特别小心。' },
      { type: 'list', items: ['个人敏感信息：身份证号、手机号、政治观点、基因、指纹、人脸、银行账号等，泄露后危害大', '个人一般信息：除敏感信息以外的普通信息，如姓名、性别、大致年龄段、所在城市等', '判断小窍门：能直接定位到"具体的你"或涉及私密的内容，多半是敏感信息'] },
      { type: 'keypoint', label: '重点·两类信息的区别', text: '<strong>个人敏感信息 = 泄露后危害大的信息（身份证号、手机号、指纹、基因等）；个人一般信息 = 其他普通信息。</strong>考试常考"下列属于个人敏感信息的是"，记住敏感信息多和身份、财产、身体、私密相关。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">个人信息分类</text><rect x="40" y="60" width="290" height="200" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="185" y="90" font-size="16" font-weight="bold" fill="#3d4f8a" text-anchor="middle">个人敏感信息</text><text x="185" y="120" font-size="12" fill="#2a3454" text-anchor="middle">泄露后危害大</text><text x="185" y="148" font-size="12" fill="#2a3454" text-anchor="middle">身份证号 手机号</text><text x="185" y="172" font-size="12" fill="#2a3454" text-anchor="middle">政治观点 基因</text><text x="185" y="196" font-size="12" fill="#2a3454" text-anchor="middle">指纹 人脸 账号</text><text x="185" y="228" font-size="12" fill="#6266d9" text-anchor="middle">重点保护</text><rect x="350" y="60" width="290" height="200" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="495" y="90" font-size="16" font-weight="bold" fill="#3d4f8a" text-anchor="middle">个人一般信息</text><text x="495" y="120" font-size="12" fill="#2a3454" text-anchor="middle">其他普通信息</text><text x="495" y="148" font-size="12" fill="#2a3454" text-anchor="middle">姓名 性别</text><text x="495" y="172" font-size="12" fill="#2a3454" text-anchor="middle">年龄段 城市</text><text x="495" y="196" font-size="12" fill="#2a3454" text-anchor="middle">普通偏好等</text><text x="495" y="228" font-size="12" fill="#6266d9" text-anchor="middle">常规保护</text></svg>', caption: '图1　个人信息分为敏感信息和一般信息两大类。' },
      { type: 'heading', text: '二、保护个人信息的三层措施' },
      { type: 'paragraph', text: '保护个人信息不是某一个人单独的事，需要国家、行业、个人一起努力，形成三道防线。' },
      { type: 'list', items: ['国家立法：通过法律（如《个人信息保护法》）确立隐私权保护，从制度上保护公民', '行业自律：相关行业制定并遵守行业规范和标准，企业自觉保护用户数据', '个人安全意识：自己提升警惕，不随意泄露，做好日常防护，这是最贴近我们的防线'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">个人信息保护三层措施</text><rect x="160" y="55" width="360" height="60" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="80" font-size="15" font-weight="bold" fill="#3d4f8a" text-anchor="middle">第一层 国家立法</text><text x="340" y="103" font-size="12" fill="#2a3454" text-anchor="middle">法律确立隐私权保护</text><rect x="130" y="125" width="420" height="60" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="150" font-size="15" font-weight="bold" fill="#3d4f8a" text-anchor="middle">第二层 行业自律</text><text x="340" y="173" font-size="12" fill="#2a3454" text-anchor="middle">制定并遵循行业规范标准</text><rect x="100" y="195" width="480" height="60" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="220" font-size="15" font-weight="bold" fill="#3d4f8a" text-anchor="middle">第三层 个人安全意识</text><text x="340" y="243" font-size="12" fill="#2a3454" text-anchor="middle">提升警惕，警惕泄露</text></svg>', caption: '图2　国家立法、行业自律、个人意识三层防护，越往下越贴近我们自己。' },
      { type: 'keypoint', label: '重点·三层措施', text: '<strong>三层措施 = 国家立法 + 行业自律 + 个人安全意识。</strong>选择题常问"下列属于保护个人信息的措施"，注意这三层都要选；其中"个人安全意识"是我们中学生能立刻行动的部分。' },
      { type: 'heading', text: '三、个人信息安全行为规范' },
      { type: 'paragraph', text: '作为普通用户，我们可以养成下面这些好习惯，把个人信息保护好。' },
      { type: 'list', items: ['经常修改信息系统口令（密码），不长期使用同一个', '不随意提供自己或亲属的个人信息', '不随意连接陌生的免费Wi-Fi，避免被窃取数据', '定期备份重要数据，防止丢失', '对重要数据进行加密，增加安全性'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">个人信息安全行为规范</text><rect x="40" y="60" width="290" height="70" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="55" y="88" font-size="13" fill="#2a3454">① 经常修改口令</text><text x="55" y="112" font-size="12" fill="#6266d9">密码定期换</text><rect x="350" y="60" width="290" height="70" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="365" y="88" font-size="13" fill="#2a3454">② 不随意提供信息</text><text x="365" y="112" font-size="12" fill="#6266d9">自己和亲属都保护</text><rect x="40" y="145" width="290" height="70" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="55" y="173" font-size="13" fill="#2a3454">③ 不连陌生Wi-Fi</text><text x="55" y="197" font-size="12" fill="#6266d9">防被窃取</text><rect x="350" y="145" width="290" height="70" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="365" y="173" font-size="13" fill="#2a3454">④ 定期备份数据</text><text x="365" y="197" font-size="12" fill="#6266d9">防止丢失</text><rect x="195" y="230" width="290" height="55" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="258" font-size="13" fill="#2a3454" text-anchor="middle">⑤ 数据进行加密</text></svg>', caption: '图3　五条个人信息安全行为规范，考试常考情境题。' },
      { type: 'tip', label: '提示·口诀记忆', text: '<strong>改口令、不提供、不连Wi-Fi、勤备份、做加密。</strong>遇到"小明在咖啡店连了陌生免费Wi-Fi还登录了网银"这类情境题，通常判断为"存在风险"，正确做法是改密、不连陌生Wi-Fi、用流量或可靠网络。' },
      { type: 'warn', label: '易错·敏感与一般混淆', text: '有同学以为"姓名"也是敏感信息。其实姓名属于一般信息；像身份证号、手机号、指纹、基因、人脸这些能精准定位或涉及私密的，才是敏感信息。做题时先想"泄露了会不会直接危害人身财产安全"。' },
      { type: 'example', label: '例题·信息分类判断', text: '题目：下列信息中，属于个人敏感信息的是？<br>解析：个人敏感信息指泄露后危害较大的信息，如身份证号、手机号、指纹、基因、人脸、政治观点等。一般的姓名、性别、所在城市属于个人一般信息。因此选项中出现身份证号、手机号、指纹等即可判定为敏感信息。' }
    ],
    exercises: [
      { type: 'choice', question: '下列属于个人敏感信息的是？', options: ['姓名', '所在城市', '身份证号', '年龄段'], answer: '身份证号', explanation: '个人敏感信息指泄露后危害较大的信息，包括身份证号、手机号、指纹、基因、人脸、政治观点等。姓名、所在城市、年龄段属于个人一般信息。' },
      { type: 'choice', question: '保护个人信息的三层措施不包括以下哪项？', options: ['国家立法', '行业自律', '个人安全意识', '个人随意公开信息'], answer: '个人随意公开信息', explanation: '三层措施是：国家立法（法律保护）、行业自律（行业规范）、个人安全意识（提升警惕）。"个人随意公开信息"恰恰违背了个人信息保护，不属于防护措施的范畴。' },
      { type: 'choice', question: '下列关于个人信息安全行为规范的说法，正确的是？', options: ['可以随意连接陌生免费Wi-Fi', '不需要定期备份数据', '应经常修改信息系统口令', '可以随意提供亲属信息'], answer: '应经常修改信息系统口令', explanation: '规范要求经常修改口令、不随意提供个人及亲属信息、不随意连陌生Wi-Fi、定期备份、数据加密。选项A、B、D均违背规范，只有"应经常修改口令"正确。' },
      { type: 'fill', question: '个人信息分为___信息和___信息两大类，其中泄露后危害较大的是___信息。', answer: '个人敏感；个人一般；个人敏感', explanation: '个人信息按敏感度分为个人敏感信息和个人一般信息。敏感信息（如身份证号、手机号、指纹等）一旦泄露危害较大，需要重点保护。' },
      { type: 'fill', question: '保护个人信息的三层措施分别是：国家___、行业___、个人___。', answer: '立法；自律；安全意识', explanation: '三层措施为：国家立法（通过法律保护隐私权）、行业自律（行业规范标准）、个人安全意识（提升警惕防泄露）。三者共同构成防护体系。' }
    ]
  });
})();
