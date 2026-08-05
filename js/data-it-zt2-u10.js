/* 信息技术 · 高三复习 · 信息系统与安全 · 第10节 复习提示与高频考点 */
(function () {
  var v = gzGetVolume('it', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u10',
    name: '第10节 复习提示与高频考点',
    chapter: '七、高频考点与复习提示',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、高频考点速查' },
      { type: 'paragraph', text: '本专题围绕"信息系统与安全"展开，高考和学业考多以选择题、情境题形式考查。下面把最常考的点整理成一张速查表，复习时优先把它记牢。' },
      { type: 'table', headers: ['考点', '考查形式'], rows: [['信息系统五大组成要素', '选择题'], ['信息系统六大功能', '选择题'], ['信息安全五大核心目标', '选择题'], ['常见安全威胁类型识别与区分', '选择题'], ['个人信息泄露渠道与防护', '选择题+情境题'], ['防火墙/数据加密/身份认证等技术', '选择题'], ['信息安全法律法规', '选择题'], ['信息社会四大特征', '选择题']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">信息系统与安全 知识框架</text><rect x="270" y="55" width="140" height="50" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="85" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="middle">信息系统</text><rect x="30" y="140" width="150" height="110" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="105" y="170" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">组成要素</text><text x="105" y="198" font-size="12" fill="#2a3454" text-anchor="middle">五大要素</text><text x="105" y="222" font-size="12" fill="#2a3454" text-anchor="middle">六大功能</text><rect x="265" y="140" width="150" height="110" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="170" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">安全防护</text><text x="340" y="198" font-size="12" fill="#2a3454" text-anchor="middle">威胁识别</text><text x="340" y="222" font-size="12" fill="#2a3454" text-anchor="middle">防护技术</text><rect x="500" y="140" width="150" height="110" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="575" y="170" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">责任法规</text><text x="575" y="198" font-size="12" fill="#2a3454" text-anchor="middle">法律法规</text><text x="575" y="222" font-size="12" fill="#2a3454" text-anchor="middle">社会责任</text><line x1="340" y1="105" x2="105" y2="140" stroke="#6266d9" stroke-width="1.5"/><line x1="340" y1="105" x2="340" y2="140" stroke="#6266d9" stroke-width="1.5"/><line x1="340" y1="105" x2="575" y2="140" stroke="#6266d9" stroke-width="1.5"/></svg>', caption: '图1　"信息系统—安全防护—责任法规"三位一体的知识框架。' },
      { type: 'heading', text: '二、易混淆概念辨析' },
      { type: 'paragraph', text: '考试中很多题是在"长得像"的概念之间挖坑。下面把最容易混的四组对比整理成表，考前看一遍能少踩很多坑。' },
      { type: 'table', headers: ['易混淆概念', '区分要点'], rows: [['病毒 vs 木马', '病毒需依附宿主程序传播；木马伪装成合法程序窃取信息'], ['对称加密 vs 非对称加密', '对称加密用同一把密钥；非对称加密用公钥和私钥配对'], ['钓鱼攻击 vs DDoS攻击', '钓鱼诱骗用户主动泄露信息；DDoS用大量请求耗尽资源'], ['RAM vs ROM', 'RAM可读写、断电数据丢失；ROM只读、断电不丢']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">易混淆概念对比</text><rect x="30" y="55" width="290" height="95" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="83" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">病毒 vs 木马</text><text x="175" y="110" font-size="11" fill="#2a3454" text-anchor="middle">病毒依附宿主</text><text x="175" y="132" font-size="11" fill="#2a3454" text-anchor="middle">木马伪装窃取</text><rect x="360" y="55" width="290" height="95" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="83" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">对称 vs 非对称</text><text x="505" y="110" font-size="11" fill="#2a3454" text-anchor="middle">对称同密钥</text><text x="505" y="132" font-size="11" fill="#2a3454" text-anchor="middle">非对称公私钥</text><rect x="30" y="165" width="290" height="95" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="193" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">钓鱼 vs DDoS</text><text x="175" y="220" font-size="11" fill="#2a3454" text-anchor="middle">钓鱼诱骗泄露</text><text x="175" y="242" font-size="11" fill="#2a3454" text-anchor="middle">DDoS耗尽资源</text><rect x="360" y="165" width="290" height="95" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="193" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">RAM vs ROM</text><text x="505" y="220" font-size="11" fill="#2a3454" text-anchor="middle">RAM可写断电丢</text><text x="505" y="242" font-size="11" fill="#2a3454" text-anchor="middle">ROM只读不丢</text></svg>', caption: '图2　四组高频易混淆概念的关键区别。' },
      { type: 'keypoint', label: '重点·记忆锚点', text: '<strong>病毒"寄生于宿主"、木马"伪装窃密"；对称"一把钥匙开一把锁"、非对称"公钥锁私钥开"；钓鱼"骗你交密码"、DDoS"洪水冲垮服务器"；RAM"运行内存会丢失"、ROM"只读固化不丢"。</strong>用生活比喻记，比死背定义更牢。' },
      { type: 'heading', text: '三、复习策略' },
      { type: 'paragraph', text: '最后，给大家五条实用的复习建议。把它们融入日常复习，效果会比临时抱佛脚好得多。' },
      { type: 'list', items: ['构建知识框架：按"风险识别→防护方法→意识树立→规范践行"串成一条线', '区分概念层次：弄清信息安全与信息系统安全、个人信息保护与数据安全的不同', '联系实际案例：用扫码点餐、连Wi-Fi、APP授权等生活场景理解知识点', '关注法律法规：重点掌握《网络安全法》《个人信息保护法》', '重视情境辨析题：练会"判断行为是否安全、是否合规"'] },
      { type: 'tip', label: '提示·框架复习法', text: '<strong>把零散知识点挂到"风险→防护→意识→规范"四步框架上，考场上能快速定位答案。</strong>例如"连陌生Wi-Fi"属于风险识别，"不连"属于防护方法，"提升意识"对应规范践行。' },
      { type: 'warn', label: '易错·概念层次不清', text: '注意"信息安全"范围大于"信息系统安全"；"个人信息保护"侧重个人数据，"数据安全"侧重数据的整体安全（含企业、国家）。做题时看清题干问的是哪一层，别张冠李戴。' },
      { type: 'example', label: '例题·综合运用', text: '题目：小明在商场连了免费Wi-Fi并登录网银，随后收到盗刷短信。这涉及哪些知识点？<br>解析：涉及风险识别（连陌生Wi-Fi有泄露风险）、防护方法（应避免连陌生Wi-Fi、用流量）、个人安全意识（第6节规范）、以及威胁类型（可能遭遇钓鱼或中间人攻击）。复习时这类情境题要把"风险—防护—意识—规范"四步串联起来分析。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于病毒和木马的说法，正确的是？', options: ['病毒伪装合法程序窃取信息', '木马需依附宿主程序传播', '病毒需依附宿主程序传播，木马伪装合法程序窃取信息', '两者完全相同'], answer: '病毒需依附宿主程序传播，木马伪装合法程序窃取信息', explanation: '病毒需要依附在宿主程序中才能传播，木马则伪装成合法程序来窃取用户信息。两者传播和危害方式不同，不能混为一谈。' },
      { type: 'choice', question: '对称加密与非对称加密的主要区别是？', options: ['对称用一把密钥，非对称用公钥私钥配对', '对称更安全', '非对称只用一把密钥', '两者没有区别'], answer: '对称用一把密钥，非对称用公钥私钥配对', explanation: '对称加密加密和解密使用同一把密钥；非对称加密使用公钥和私钥配对，公钥加密、私钥解密，安全性更高但速度较慢。' },
      { type: 'choice', question: '下列最可能是钓鱼攻击的是？', options: ['向服务器发送大量请求使其瘫痪', '伪装成银行网站诱骗用户输入账号密码', '在内存中写入数据', '断电后数据丢失'], answer: '伪装成银行网站诱骗用户输入账号密码', explanation: '钓鱼攻击通过伪装成可信网站或服务，诱骗用户主动泄露账号密码等信息；DDoS才是用大量请求耗尽资源使服务器瘫痪。' },
      { type: 'fill', question: 'RAM的特点是可读写、___丢失；ROM的特点是___、断电不丢。', answer: '断电数据；只读', explanation: 'RAM（内存）可读写但断电后数据丢失；ROM（只读存储器）只能读取、断电后数据不丢失。这是两者最本质的区别。' },
      { type: 'fill', question: '复习本专题的五个策略中，知识框架可按"风险识别→___→意识树立→___"四步构建。', answer: '防护方法；规范践行', explanation: '复习策略建议构建"风险识别→防护方法→意识树立→规范践行"的知识框架，把零散考点串联起来，便于考场上快速定位。' }
    ]
  });
})();
