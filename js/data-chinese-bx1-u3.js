/* ============================================================
 * 高一语文 · 必修 上册 · 第三单元 生命的诗意（古代诗歌）
 * 8 课时：短歌行 / 归园田居（其一）/ 梦游天姥吟留别 / 登高 / 琵琶行并序 / 念奴娇·赤壁怀古 / 永遇乐·京口北固亭怀古 / 声声慢
 * 数据注入：chinese.bx1.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list+keypoint+poem
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx1');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 短歌行 ==================== */
    {
      id: 'bx1-u3-l1',
      name: '短歌行',
      author: '曹操',
      chapter: '第三单元 生命的诗意（古代诗歌）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与时代背景' },
        { type: 'paragraph', text: '曹操（155—220），字孟德，小名阿瞒，东汉末年杰出的政治家、军事家、文学家。他挟天子以令诸侯，统一北方，为曹魏政权奠基；在文学上与其子曹丕、曹植并称「三曹」，开创「建安风骨」，诗风慷慨苍凉、刚健有力。' },
        { type: 'paragraph', text: '本诗约作于建安十三年（208）赤壁之战前夕。时曹操已据有北方，然统一大业未竟，且深感人才不足。诗中借宴饮放歌，既叹人生苦短，更抒招揽英才、共建功业之志，是其求贤思想的集中体现。' },
        { type: 'keypoint', label: '文体常识', text: '「短歌行」是<strong>汉乐府旧题</strong>，属《相和歌·平调曲》。「行」为乐府歌辞的<strong>体裁之一</strong>，音节短促，多写感时伤事、宴饮抒怀。曹操借旧题写新意，尽显建安诗歌<strong>慷慨悲凉</strong>之骨力。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbf3e6"/><circle cx="560" cy="62" r="34" fill="#f4d35e"/><g fill="#f4d35e" opacity="0.85"><circle cx="120" cy="50" r="3"/><circle cx="180" cy="38" r="2.5"/><circle cx="240" cy="55" r="2"/><circle cx="80" cy="70" r="2"/><circle cx="300" cy="44" r="2.5"/></g><rect x="290" y="172" width="100" height="14" rx="4" fill="#a9711a"/><path d="M300 172 q-22 -42 40 -52 q62 10 40 52 z" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><ellipse cx="340" cy="204" rx="62" ry="14" fill="#7a5a2e" opacity="0.3"/><text x="340" y="150" font-size="20" fill="#5b3b12" text-anchor="middle">对酒当歌</text><text x="340" y="262" font-size="14" fill="#7a5a1e" text-anchor="middle">明月星汉之下，横槊赋诗，思接千古</text></svg>', caption: '开篇「对酒当歌，人生几何」以宴饮起兴，于明月星汉间生发求贤之思。' },
        { type: 'heading', text: '二、原诗通读' },
        { type: 'poem', text: '对酒当歌，人生几何！譬如朝露，去日苦多。\n慨当以慷，忧思难忘。何以解忧？唯有杜康。\n青青子衿，悠悠我心。但为君故，沉吟至今。\n呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。\n明明如月，何时可掇？忧从中来，不可断绝。\n越陌度阡，枉用相存。契阔谈讌，心念旧恩。\n月明星稀，乌鹊南飞。绕树三匝，何枝可依？\n山不厌高，海不厌深。周公吐哺，天下归心。' },
        { type: 'keypoint', label: '题解', text: '全诗以<strong>「忧」字为眼</strong>贯穿始终，却绝非消沉之音：表面叹人生几何，实则盼贤才来归。末句<strong>「周公吐哺，天下归心」</strong>为全诗归宿，将个人之忧升华为一统天下之壮志。' },
        { type: 'heading', text: '三、逐句研读' },
        { type: 'keypoint', label: '意象分析', text: '诗中核心意象简净而情深：<strong>朝露</strong>喻人生短促，<strong>杜康</strong>代酒以消忧，<strong>明月</strong>喻贤才之难得，<strong>乌鹊</strong>喻乱世中流离无依之士。意象虽少，却层层托出求贤若渴之心。' },
        { type: 'keypoint', label: '用典炼字', text: '「<strong>青青子衿</strong>」「<strong>呦呦鹿鸣</strong>」直引《诗经》以表思贤；「<strong>掇</strong>」本为拾取，状求才之急切；「<strong>厌</strong>」通「餍」，言山不嫌高、海不嫌深，比喻渴贤之心永无满足。用典不露痕迹，自然浑成。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「月明星稀，乌鹊南飞。绕树三匝，何枝可依」。<br><br><strong>解析</strong>：这四句写秋夜星稀、乌鹊绕树难栖之景，<strong>暗喻天下贤士在乱世中辗转流离、无处依托</strong>。乌鹊「何枝可依」的惶惑，正是诗人对人才处境的体察，亦隐含招揽之意——贤才如乌鹊，正盼「良木」可栖。以景结情，把自然之象与求贤之思巧妙融合，余味深长。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="50" y="50" width="160" height="140" rx="8" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="130" y="112" font-size="15" fill="#33485a" text-anchor="middle">忧·人生</text><text x="130" y="138" font-size="13" fill="#33485a" text-anchor="middle">朝露苦多</text><rect x="260" y="50" width="160" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="340" y="112" font-size="15" fill="#3e6b2e" text-anchor="middle">思·贤才</text><text x="340" y="138" font-size="13" fill="#3e6b2e" text-anchor="middle">子衿鹿鸣</text><rect x="470" y="50" width="160" height="140" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="550" y="112" font-size="15" fill="#fff" text-anchor="middle">志·天下</text><text x="550" y="138" font-size="13" fill="#fff" text-anchor="middle">周公吐哺</text><path d="M210 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l1m2)"/><path d="M420 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l1m2)"/><defs><marker id="l1m2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">情感脉络：忧人生 → 思贤才 → 志天下</text></svg>', caption: '全诗以「忧」贯串，却越转越壮，终于「天下归心」。' },
        { type: 'keypoint', label: '章法名句', text: '全诗四句为一节，<strong>回环往复</strong>：忧人生→思贤才→叙欢宴→盼归心，层层递进。结尾「山不厌高，海不厌深。周公吐哺，天下归心」如洪钟收束，气象宏阔，将个人忧思化为王者之志。' },
        { type: 'warn', label: '易错·典故', text: '「<strong>青青子衿，悠悠我心</strong>」原出《诗经·郑风》写男女恋慕，曹操<strong>借以表达对贤才的思恋</strong>，属典故的创造性化用，不可仅作爱情诗解；「<strong>杜康</strong>」是传说中周代造酒者之名，此处<strong>代指酒</strong>，并非实写某次饮酒。' },
        { type: 'heading', text: '四、艺术特色与情感主旨' },
        { type: 'keypoint', label: '主旨', text: '诗歌抒发<strong>人生短暂的深沉忧思</strong>与<strong>渴慕贤才、建功立业</strong>的宏大抱负，于悲凉中见慷慨，展现建安诗歌<strong>「慷慨以任气，磊落以使才」</strong>的风骨。' },
        { type: 'table', headers: ['手法', '例句', '作用'], rows: [['比兴', '譬如朝露，去日苦多', '以朝露喻人生短促，触景生情'], ['用典', '青青子衿 / 呦呦鹿鸣', '化用诗经，表达对贤才的思慕'], ['用典', '周公吐哺，天下归心', '以周公自比，明一统天下之志'], ['叠词', '慨当以慷 / 悠悠我心', '回环往复，一唱三叹，情韵悠长']] },
        { type: 'list', items: ['借乐府旧题抒写求贤新意，古题新声', '比兴开篇：以朝露起兴，叹人生苦短', '用典自然：引诗经、周公，浑化无迹', '意象简净：朝露、明月、乌鹊各有寄托', '情感跌宕：由忧到思、由思到志，终显壮怀', '风格慷慨苍凉，开建安风骨一派'] },
        { type: 'tip', label: '拓展·建安风骨', text: '「<strong>建安风骨</strong>」指汉末建安时期诗歌共有的美学特征：内容<strong>反映社会离乱与建功理想</strong>，风格<strong>慷慨悲凉、刚健有力</strong>。代表除曹操外，还有曹丕、曹植及「建安七子」。其「风」指思想感情的风力（感染力），「骨」指语言辞气的骨力（刚健），对后世盛唐诗风影响深远。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#5b3b12" text-anchor="middle"><circle cx="100" cy="100" r="42" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="100" y="96">对酒当歌</text><text x="100" y="114">（起·忧）</text><circle cx="260" cy="100" r="42" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="260" y="96">青青子衿</text><text x="260" y="114">（承·思）</text><circle cx="420" cy="100" r="42" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="420" y="96">契阔谈讌</text><text x="420" y="114">（转·宴）</text><circle cx="580" cy="100" r="42" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="580" y="96">天下归心</text><text x="580" y="114">（合·志）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="142" y1="100" x2="218" y2="100" marker-end="url(#l1m3)"/><line x1="302" y1="100" x2="378" y2="100" marker-end="url(#l1m3)"/><line x1="462" y1="100" x2="538" y2="100" marker-end="url(#l1m3)"/></g><defs><marker id="l1m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b3b12" text-anchor="middle">四节回环：忧己 → 思贤 → 叙欢 → 归心，气脉贯通</text></svg>', caption: '全诗四节回环往复，由忧己到归心，终显一统天下之壮志。' },
        { type: 'list', items: ['曹操，建安文学代表，「短歌行」为乐府旧题', '以「忧」贯穿，层层递进至「天下归心」', '比兴与用典交融：朝露起兴、引诗经与周公', '核心意象：朝露、明月、乌鹊各有深意', '「青青子衿」借爱情诗语写思贤，不可误读', '主旨：人生苦短之慨与渴贤建业之志'] }
      ],
      exercises: [
        { type: 'choice', question: '「短歌行」中「行」指的是？', options: ['行走的动作', '乐府歌辞的一种体裁', '行书书法', '旅途经历'], answer: '乐府歌辞的一种体裁', explanation: '「行」是汉魏乐府诗的一种体裁类别（如「歌行体」），「短歌行」即音节短促的歌辞。它本为配乐演唱的乐府旧题，曹操借以抒写情怀，而非指实际行走或书法。' },
        { type: 'choice', question: '「周公吐哺，天下归心」用典的用意是？', options: ['表达思乡之情', '以周公自比，表明渴求贤才、一统天下', '描写农耕生活', '感叹时光流逝'], answer: '以周公自比，表明渴求贤才、一统天下', explanation: '「周公吐哺」典出周公「一沐三握发，一饭三吐哺」礼待贤士。曹操以此自比，表示愿像周公那样渴慕并优待人才，从而达到「天下归心」、成就大业的目的。' },
        { type: 'fill', question: '「青青子衿，悠悠我心」「呦呦鹿鸣，食野之苹」都化用了______（书名）中的诗句，曹操借以表达思慕贤才。', answer: '诗经', explanation: '这两句分别出自《诗经·郑风·子衿》与《诗经·小雅·鹿鸣》。曹操在诗中直接袭用其句，把原本写恋情、写宴宾的内容巧转为对贤才的思念与欢迎，是用典表情的典型手法。' },
        { type: 'choice', question: '本诗的情感基调最准确的是？', options: ['颓废消沉', '哀而不伤、悲而能壮，终显壮志', '轻松戏谑', '愤世嫉俗'], answer: '哀而不伤、悲而能壮，终显壮志', explanation: '诗虽有「人生几何」「忧思难忘」的慨叹，但始终围绕求贤建业展开，并以「天下归心」的宏愿收束，整体慷慨苍凉而不堕消沉，体现建安风骨的壮美。' },
        { type: 'fill', question: '「山不厌高，海不厌深」中，「厌」通「餍」，意思是______（满足 / 讨厌），比喻渴贤之心永不满足。', answer: '满足', explanation: '「厌」此处通「餍」，意为满足。山不嫌其高、海不嫌其深，比喻曹操渴慕贤才的心永无满足。它与「周公吐哺」呼应，突出礼贤下士、广纳人才的胸襟。' }
      ]
    },

    /* ==================== 第2课 归园田居（其一） ==================== */
    {
      id: 'bx1-u3-l2',
      name: '归园田居（其一）',
      author: '陶渊明',
      chapter: '第三单元 生命的诗意（古代诗歌）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与时代背景' },
        { type: 'paragraph', text: '陶渊明（365—427），名潜，字元亮，东晋诗人，世称「靖节先生」。他曾任江州祭酒、彭泽令等职，因不满官场污浊、不愿屈身事人，仅八十余日便辞官归隐，从此躬耕终身，成为中国士大夫「归隐」精神的重要代表。' },
        { type: 'paragraph', text: '《归园田居》共五首，约作于辞彭泽令归隐次年（406）。本诗（其一）写归田后的居处与心境，于平淡田园中见真淳天性，是陶渊明田园诗的代表作，也奠定其「平淡自然」的诗风。' },
        { type: 'keypoint', label: '核心对立', text: '本诗的核心对立是<strong>「尘网（樊笼）」与「自然」</strong>：官场如罗网束缚人的本性，田园才是心灵的归宿。「<strong>归</strong>」字是全诗的诗眼，写挣脱束缚、复返本真。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6ea"/><rect x="0" y="220" width="680" height="80" fill="#9bbf6a"/><rect x="260" y="150" width="120" height="70" rx="4" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><path d="M260 150 l60 -34 60 34 z" fill="#8a5a2e"/><g fill="#5a8f3c"><circle cx="200" cy="170" r="22"/><circle cx="470" cy="170" r="22"/></g><g fill="#7a9b3e"><path d="M188 170 l-14 -26 28 0 z"/><path d="M458 170 l-14 -26 28 0 z"/></g><g fill="#e85d3d"><circle cx="320" cy="118" r="8"/><circle cx="350" cy="118" r="8"/></g><g fill="#f0a58c"><circle cx="300" cy="135" r="6"/><circle cx="380" cy="135" r="6"/></g><text x="340" y="285" font-size="14" fill="#3e6b2e" text-anchor="middle">方宅草屋、榆柳桃李：恬淡温馨的农家院落</text></svg>', caption: '「榆柳荫后檐，桃李罗堂前」勾勒出朴素而温馨的田园之居。' },
        { type: 'heading', text: '二、原诗通读' },
        { type: 'poem', text: '少无适俗韵，性本爱丘山。误落尘网中，一去三十年。\n羁鸟恋旧林，池鱼思故渊。开荒南野际，守拙归园田。\n方宅十余亩，草屋八九间。榆柳荫后檐，桃李罗堂前。\n暧暧远人村，依依墟里烟。狗吠深巷中，鸡鸣桑树颠。\n户庭无尘杂，虚室有余闲。久在樊笼里，复得返自然。' },
        { type: 'keypoint', label: '题解', text: '题名「归园田居」，直点<strong>归隐田园</strong>之意。诗中先叙「性本爱丘山」的天性，再写挣脱「尘网」的欣喜，最后以「复得返自然」收束，首尾呼应，结构圆融。' },
        { type: 'heading', text: '三、逐句研读' },
        { type: 'keypoint', label: '意象分析', text: '诗中意象分两类：<strong>束缚类</strong>——尘网、樊笼、误落；<strong>自由类</strong>——旧林、故渊、榆柳、桃李、狗吠、鸡鸣。两类意象对照，凸显诗人由「困」到「归」的精神解放。' },
        { type: 'keypoint', label: '比喻双关', text: '「<strong>羁鸟恋旧林，池鱼思故渊</strong>」以鸟、鱼自比，写摆脱官场、回归本性的欣喜；「<strong>樊笼</strong>」喻污浊官场，「<strong>自然</strong>」既指田园之景，又双关人的<strong>自然本性</strong>。一语双关，含蓄深厚。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「暧暧远人村，依依墟里烟。狗吠深巷中，鸡鸣桑树颠」的画面与手法。<br><br><strong>解析</strong>：这四句以<strong>白描</strong>手法勾勒田园暮景：远处村落依稀朦胧（暧暧），炊烟轻柔缠绵（依依），深巷犬吠、桑颠鸡鸣，以<strong>动衬静</strong>，写出山村的宁静与生机。语言平淡如话，却意境淳厚，于寻常景物中见出诗人归田后的安适与喜悦，是田园诗「诗中有画」的典范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="50" y="50" width="160" height="140" rx="8" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="130" y="112" font-size="15" fill="#33485a" text-anchor="middle">尘网·樊笼</text><text x="130" y="138" font-size="13" fill="#33485a" text-anchor="middle">官场束缚</text><path d="M210 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l2m2)"/><rect x="270" y="50" width="160" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="350" y="112" font-size="15" fill="#3e6b2e" text-anchor="middle">自然·园田</text><text x="350" y="138" font-size="13" fill="#3e6b2e" text-anchor="middle">本性归宿</text><path d="M430 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l2m2)"/><rect x="490" y="50" width="160" height="140" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="570" y="112" font-size="15" fill="#fff" text-anchor="middle">返·本真</text><text x="570" y="138" font-size="13" fill="#fff" text-anchor="middle">复得自然</text><defs><marker id="l2m2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">转折在「归」：尘网 → 园田 → 复返自然</text></svg>', caption: '全诗以「尘网—自然」的对比结构展开，转折在「归」。' },
        { type: 'keypoint', label: '炼字', text: '「<strong>守拙</strong>」二字极妙：「拙」指不善逢迎的笨拙本性，诗人以「守拙」明志，宁守田园之拙，不取官场之巧。一词写尽返璞归真、固穷守节的人生态度。' },
        { type: 'warn', label: '易错·异文', text: '「一去三十年」一说当作「<strong>十三年</strong>」（陶渊明出仕约十三年），「三十」或取整数、或传抄之异，阅读古诗<strong>须存疑辨异</strong>，不可盲信。另外「樊笼」喻官场而非鸟笼，「自然」兼指景物与本真，均不可望文生义。' },
        { type: 'heading', text: '四、艺术特色与情感主旨' },
        { type: 'keypoint', label: '主旨', text: '诗人以<strong>白描</strong>描绘田园的宁静淳美，抒发<strong>厌弃官场、热爱自然、固守本真</strong>的情怀，语言<strong>平淡自然却余味深长</strong>，体现陶渊明独有的冲淡诗风。' },
        { type: 'table', headers: ['手法', '例句', '效果'], rows: [['比喻', '羁鸟恋旧林，池鱼思故渊', '以鸟鱼自比，写归田之喜'], ['对比', '尘网 / 自然、樊笼 / 园田', '强化厌弃官场、向往自然'], ['白描', '方宅十余亩，草屋八九间', '平易如话，淡而有味'], ['双关', '复得返自然（景兼本性）', '自然兼指田园与人的本真']] },
        { type: 'list', items: ['核心对立：尘网（樊笼） versus 自然（园田）', '比喻双关：羁鸟池鱼自比，自然兼指本真', '白描手法：榆柳、狗吠、鸡鸣如画在目', '语言平淡自然，于寻常中见真淳', '炼字精到：「守拙」明固穷守节之志', '诗眼在「归」：由困到归的精神解放'] },
        { type: 'tip', label: '拓展·田园诗派', text: '陶渊明被尊为<strong>「隐逸诗人之宗」</strong>，其田园诗将农家劳作、自然景色与人生哲理融为一体，开创了中国诗歌史上的田园诗派。唐代王维、孟浩然的山水田园诗，宋代苏轼、辛弃疾对陶渊明的推重，皆受其影响。读陶诗宜品其「质而实绮，癯而实腴」的淡远之味。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#3e6b2e" text-anchor="middle"><circle cx="100" cy="100" r="42" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="100" y="96">误落尘网</text><text x="100" y="114">（困）</text><circle cx="260" cy="100" r="42" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="260" y="96">开荒守拙</text><text x="260" y="114">（归）</text><circle cx="420" cy="100" r="42" fill="#9bbf6a" stroke="#3e6b2e" stroke-width="2"/><text x="420" y="96">榆柳桃李</text><text x="420" y="114">（居）</text><circle cx="580" cy="100" r="42" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="580" y="96">复返自然</text><text x="580" y="114">（悟）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="142" y1="100" x2="218" y2="100" marker-end="url(#l2m3)"/><line x1="302" y1="100" x2="378" y2="100" marker-end="url(#l2m3)"/><line x1="462" y1="100" x2="538" y2="100" marker-end="url(#l2m3)"/></g><defs><marker id="l2m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b3b12" text-anchor="middle">情感脉络：困于尘网 → 归于园田 → 悟返自然</text></svg>', caption: '全诗由「困」到「归」再到「悟」，完成精神的解放与回归。' },
        { type: 'list', items: ['陶渊明，辞官归隐，田园诗派之宗', '核心对立：尘网（樊笼） versus 自然（园田）', '羁鸟池鱼自比，双关「自然」兼指本性', '白描如画：方宅、榆柳、狗吠、鸡鸣', '「守拙」明志：宁守拙不取巧', '主旨：厌弃官场、热爱自然、固守本真'] }
      ],
      exercises: [
        { type: 'choice', question: '陶渊明辞官归隐的直接原因是？', options: ['家境贫寒无力做官', '不愿「为五斗米折腰」向乡里小人低头', '身体多病', '被皇帝罢免'], answer: '不愿「为五斗米折腰」向乡里小人低头', explanation: '陶潜任彭泽令时，郡里督邮来巡视，下属劝他束带恭迎，他叹「吾不能为五斗米折腰，拳拳事乡里小人」，遂解印辞官。这一事件集中体现他不慕荣利、保持尊严的品格。' },
        { type: 'choice', question: '「羁鸟恋旧林，池鱼思故渊」运用的手法与含义是？', options: ['比喻，以鸟鱼自比表达对官场的留恋', '比喻，以鸟鱼自比表达挣脱束缚、回归本性的欣喜', '夸张，描写鸟鱼数量多', '对偶，纯写景物'], answer: '比喻，以鸟鱼自比表达挣脱束缚、回归本性的欣喜', explanation: '诗人以被关的鸟、被养的鱼自比，写自己如鸟鱼思念旧林故渊一般渴望摆脱官场、回归田园，生动传达出脱离「尘网」后的轻松与对本真生活的向往。' },
        { type: 'fill', question: '诗中「久在樊笼里，复得返自然」中，「樊笼」比喻______（官场 / 鸟笼），「自然」兼指田园与本真。', answer: '官场', explanation: '「樊笼」本指关鸟兽的笼子，诗中比喻污浊、束缚本性的官场；与之相对，「自然」既指田园风光，也指人的自然本性。两句写诗人脱离官场、重获身心自由的解脱感。' },
        { type: 'choice', question: '本诗的语言风格特点是？', options: ['华丽雕琢、堆砌典故', '平淡自然、白描如话', '诘屈聱牙、晦涩难懂', '慷慨悲凉、气势磅礴'], answer: '平淡自然、白描如话', explanation: '陶诗不事雕琢，多用白描直写田园寻常景物（草屋、榆柳、狗吠、鸡鸣），语似平淡而意境淳厚、韵味悠长，开创「平淡自然」一脉诗风，与谢灵运的繁丽、建安的慷慨均不同。' },
        { type: 'fill', question: '「守拙归园田」中「拙」指诗人______（不善逢迎的笨拙本性 / 愚笨无能），他宁守此「拙」也不取官场之巧。', answer: '不善逢迎的笨拙本性', explanation: '「拙」指诗人不擅逢迎、不会钻营的「笨拙」天性。陶渊明以「守拙」明志：宁可守住这份本真之拙，也不肯屈身官场取巧媚人，集中体现其固穷守节、返璞归真的人生态度。' }
      ]
    },

    /* ==================== 第3课 梦游天姥吟留别 ==================== */
    {
      id: 'bx1-u3-l3',
      name: '梦游天姥吟留别',
      author: '李白',
      chapter: '第三单元 生命的诗意（古代诗歌）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与时代背景' },
        { type: 'paragraph', text: '李白（701—762），字太白，号青莲居士，盛唐浪漫主义诗人，被誉「诗仙」，与杜甫并称「李杜」。其诗想象瑰丽、气势奔放，熔铸庄骚与道家气象，是盛唐浪漫主义的巅峰。' },
        { type: 'paragraph', text: '本诗一名《别东鲁诸公》，作于唐玄宗天宝四载（745）李白被「赐金放还」、离开长安漫游齐鲁之际。政治抱负落空，他借梦游仙境抒发对自由的热望与不肯屈事权贵的傲骨，以此向东鲁友人告别。' },
        { type: 'keypoint', label: '诗体', text: '「<strong>吟</strong>」是<strong>歌行体诗的一种</strong>，句式长短自由、便于抒情；「留别」意为留赠告别。全诗<strong>以梦写志</strong>，由现实入梦境、由梦境返现实，结构大开大合，是李白浪漫主义的代表作。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#1f2a44"/><path d="M100 280 L230 120 L340 220 L460 90 L600 280 Z" fill="#33406a"/><path d="M100 280 L200 180 L300 240 L420 150 L540 240 L600 280 Z" fill="#28325a"/><circle cx="520" cy="70" r="30" fill="#f4d35e"/><g fill="#7fd4ff" opacity="0.85"><path d="M0 210 q60 18 120 0 t120 0 t120 0 t120 0 t120 0" fill="none" stroke="#7fd4ff" stroke-width="2"/></g><g fill="#fff" opacity="0.7"><circle cx="200" cy="120" r="2.5"/><circle cx="300" cy="90" r="2"/><circle cx="420" cy="140" r="2.5"/></g><text x="340" y="285" font-size="14" fill="#cfe0ff" text-anchor="middle">天姥连天向天横：雄奇瑰丽的梦境山岳</text></svg>', caption: '「天姥连天向天横，势拔五岳掩赤城」极写山势之高峻奇绝。' },
        { type: 'heading', text: '二、原诗通读（完整篇）' },
        { type: 'poem', text: '海客谈瀛洲，烟涛微茫信难求；越人语天姥，云霞明灭或可睹。\n天姥连天向天横，势拔五岳掩赤城。天台四万八千丈，对此欲倒东南倾。\n我欲因之梦吴越，一夜飞度镜湖月。湖月照我影，送我至剡溪。\n谢公宿处今尚在，渌水荡漾清猿啼。脚著谢公屐，身登青云梯。\n半壁见海日，空中闻天鸡。千岩万转路不定，迷花倚石忽已暝。\n熊咆龙吟殷岩泉，栗深林兮惊层巅。云青青兮欲雨，水澹澹兮生烟。\n列缺霹雳，丘峦崩摧。洞天石扉，訇然中开。\n青冥浩荡不见底，日月照耀金银台。霓为衣兮风为马，云之君兮纷纷而来下。\n虎鼓瑟兮鸾回车，仙之人兮列如麻。忽魂悸以魄动，恍惊起而长嗟。\n惟觉时之枕席，失向来之烟霞。\n世间行乐亦如此，古来万事东流水。别君去兮何时还？\n且放白鹿青崖间，须行即骑访名山。安能摧眉折腰事权贵，使我不得开心颜！' },
        { type: 'keypoint', label: '题解', text: '诗以「梦游」为名，实以梦喻志。前半极力铺写天姥仙境的壮丽奇绝，后半梦醒陡转，以<strong>「安能摧眉折腰事权贵」</strong>一语道尽不肯同流合污的傲骨，是借幻境写真性情。' },
        { type: 'heading', text: '三、逐句研读' },
        { type: 'keypoint', label: '意象分析', text: '梦境意象分两层：<strong>奇景层</strong>——云霞、海日、天鸡、青云梯，明亮瑰丽；<strong>幻境层</strong>——洞天石扉、金银台、霓衣风马、云君仙众，绚烂迷离。意象的奇伟，正映射诗人对自由精神世界的向往。' },
        { type: 'keypoint', label: '炼字用典', text: '「<strong>飞度</strong>」写梦行之轻捷，「<strong>訇然</strong>」拟洞门骤开之巨响，「<strong>列如麻</strong>」状仙人之众。又暗用<strong>谢灵运</strong>（谢公屐、谢公宿处）游山之典，既切吴越之地，又衬诗人襟怀之旷放。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析结尾「安能摧眉折腰事权贵，使我不得开心颜」。<br><br><strong>解析</strong>：这两句是全诗的<strong>主旨句与文眼</strong>。梦醒之后，诗人由瑰丽幻境跌回现实，却不以失意为念，反而以反诘语气宣示：岂能低头弯腰去侍奉权贵，让我本真之心难得舒展？「摧眉折腰」与「开心颜」对比鲜明，将前面铺陈的仙境收束为人格宣言，集中体现李白<strong>蔑视权贵、追求个性解放</strong>的傲岸精神。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="50" y="50" width="160" height="140" rx="8" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="130" y="112" font-size="15" fill="#33485a" text-anchor="middle">现实·入梦</text><text x="130" y="138" font-size="13" fill="#33485a" text-anchor="middle">瀛洲天姥</text><rect x="260" y="50" width="160" height="140" rx="8" fill="#9b8ad0" stroke="#5b4a9e" stroke-width="2"/><text x="340" y="112" font-size="15" fill="#fff" text-anchor="middle">梦境·奇景</text><text x="340" y="138" font-size="13" fill="#fff" text-anchor="middle">仙之人列</text><rect x="470" y="50" width="160" height="140" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="550" y="112" font-size="15" fill="#fff" text-anchor="middle">梦醒·明志</text><text x="550" y="138" font-size="13" fill="#fff" text-anchor="middle">不事权贵</text><path d="M210 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l3m2)"/><path d="M420 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l3m2)"/><defs><marker id="l3m2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">三段式结构：现实入梦 → 梦中狂欢 → 梦醒傲啸</text></svg>', caption: '三段式结构：由现实入梦、梦中狂欢、梦醒傲啸。' },
        { type: 'keypoint', label: '章法', text: '全诗以「<strong>梦</strong>」为线索：起笔闻谈天姥（现实）→「我欲因之梦吴越」入梦 → 铺陈仙境狂欢 →「忽魂悸以魄动」梦醒 → 由梦及理、傲然明志。收放自如，如行云流水。' },
        { type: 'warn', label: '易错·词义', text: '「<strong>摧眉折腰</strong>」意为<strong>低头弯腰、卑躬屈膝</strong>，「开心颜」即开心舒展的容颜。切勿望文生义成「摧毁眉毛」或「折断腰身」；「<strong>向来</strong>」在此指「刚才、方才」（失向来之烟霞＝失去刚才的云霞奇景），非「一向」。' },
        { type: 'heading', text: '四、艺术特色与情感主旨' },
        { type: 'keypoint', label: '主旨', text: '诗人借<strong>瑰丽奇绝的梦境</strong>表达对自由仙境的向往，结尾点明<strong>蔑视权贵、追求个性解放</strong>的铮铮傲骨，充分体现李白<strong>雄奇豪放、想象瑰丽</strong>的浪漫风格。' },
        { type: 'table', headers: ['层次', '内容', '情感'], rows: [['起·入梦', '海客谈瀛洲 → 梦吴越', '神往仙境'], ['承·梦境', '洞天石扉，仙之人列', '瑰丽狂欢'], ['转·梦醒', '忽魂悸以魄动', '惊觉幻灭'], ['合·明志', '安能摧眉折腰事权贵', '傲岸不羁']] },
        { type: 'list', items: ['以梦写志：借幻境寄托对自由精神的向往', '想象瑰丽：洞天、金银台、霓衣风马，奇伟迷离', '结构大开大合：现实—梦境—梦醒三段流转', '暗用谢灵运典，切合吴越、衬旷放襟怀', '语言奔放：反诘收束，气势如虹', '诗眼在尾：不事权贵的傲骨宣言'] },
        { type: 'tip', label: '拓展·浪漫主义', text: '李白被誉为<strong>「诗仙」</strong>，其浪漫精神上承庄子、楚辞，表现为<strong>超凡想象、强烈抒情、傲岸个性</strong>。与杜甫的「诗史」写实相对，李白多以主观情感统摄万物，将自然人格化。读此诗宜体会其「笔落惊风雨，诗成泣鬼神」的浪漫气势，并与《蜀道难》并读。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#33485a" text-anchor="middle"><circle cx="100" cy="100" r="42" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="100" y="96">闻谈天姥</text><text x="100" y="114">（现实）</text><circle cx="260" cy="100" r="42" fill="#9b8ad0" stroke="#5b4a9e" stroke-width="2"/><text x="260" y="96">梦游仙境</text><text x="260" y="114">（幻境）</text><circle cx="420" cy="100" r="42" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="420" y="96">魂悸惊起</text><text x="420" y="114">（梦醒）</text><circle cx="580" cy="100" r="42" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="580" y="96">不事权贵</text><text x="580" y="114">（明志）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="142" y1="100" x2="218" y2="100" marker-end="url(#l3m3)"/><line x1="302" y1="100" x2="378" y2="100" marker-end="url(#l3m3)"/><line x1="462" y1="100" x2="538" y2="100" marker-end="url(#l3m3)"/></g><defs><marker id="l3m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b3b12" text-anchor="middle">脉络：现实起笔 → 幻境铺展 → 梦醒傲啸</text></svg>', caption: '全诗由现实起笔，经幻境铺展，终于梦醒后的傲然明志。' },
        { type: 'list', items: ['李白，盛唐浪漫主义，「诗仙」，号青莲居士', '诗体为「吟」（歌行），以梦写志、大开大合', '完整铺写梦游天姥的奇景与洞天幻境', '暗用谢灵运典，切合吴越之地', '「摧眉折腰」不可望文生义为摧毁', '主旨：蔑视权贵、追求个性解放的傲骨'] }
      ],
      exercises: [
        { type: 'choice', question: '「梦游天姥吟留别」中「吟」指的是？', options: ['叹息声', '歌行体诗的一种，自由抒写', '吟诗读书', '哭泣之声'], answer: '歌行体诗的一种，自由抒写', explanation: '「吟」是古代诗歌体裁之一，属歌行类，句式长短不拘、便于自由抒情。题中「留别」意为留赠告别，诗是李白离开长安前向东鲁友人告别之作，借梦游抒怀。' },
        { type: 'choice', question: '全诗的主旨句、最能体现李白傲骨的是？', options: ['海客谈瀛洲', '安能摧眉折腰事权贵，使我不得开心颜', '湖月照我影', '云霞明灭或可睹'], answer: '安能摧眉折腰事权贵，使我不得开心颜', explanation: '这句在梦醒之后直抒胸臆：怎能让本真之心去卑躬屈膝侍奉权贵？它把前面瑰丽梦境收束为人格宣言，集中体现李白蔑视权贵、追求自由傲岸的精神，是全诗文眼。' },
        { type: 'fill', question: '「且放白鹿青崖间，须行即骑访名山」中，「白鹿」在李白诗中常象征______（自由 / 富贵）的隐逸生活。', answer: '自由', explanation: '白鹿是道教与隐逸文化中的祥兽，李白常借「骑白鹿」表达对无拘无束、访仙求道的自由生活的向往。这里紧承「不事权贵」，表明宁可纵情山水也不与权贵同流合污的人生态度。' },
        { type: 'choice', question: '本诗在结构上的突出特点是？', options: ['四句一绝、工整对仗', '以梦为线索，现实—梦境—梦醒三段大开大合', '通篇议论说理', '一韵到底不换'], answer: '以梦为线索，现实—梦境—梦醒三段大开大合', explanation: '诗从现实听闻天姥起笔，继而「我欲因之梦吴越」入梦，梦中铺陈神仙洞府的奇景，最后「忽魂悸以魄动」梦醒，由梦境引出不事权贵的誓言，结构如行云流水、收放自如。' },
        { type: 'fill', question: '「失向来之烟霞」中，「向来」意为______（刚才 / 一向），指刚才梦中绚烂的云霞奇景已消逝。', answer: '刚才', explanation: '「向来」在古汉语中常指「刚才、方才」。梦醒之后，枕席依旧而烟霞消逝，诗人用「失向来之烟霞」写梦境的虚幻易逝，为后文「世间行乐亦如此」的感慨作铺垫。' }
      ]
    },

    /* ==================== 第4课 登高 ==================== */
    {
      id: 'bx1-u3-l4',
      name: '登高',
      author: '杜甫',
      chapter: '第三单元 生命的诗意（古代诗歌）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与时代背景' },
        { type: 'paragraph', text: '杜甫（712—770），字子美，号少陵野老，盛唐转中唐的伟大现实主义诗人，被尊「诗圣」，其诗因广泛反映社会离乱而称「诗史」。他一生坎坷，晚年漂泊西南，忧国忧民。' },
        { type: 'paragraph', text: '本诗作于唐代宗大历二年（767）重阳节，时杜甫流寓夔州（今重庆奉节）。他年老多病、孤身登高，面对苍凉秋江，百感交集，遂成此篇。明代胡应麟誉之为「古今七言律诗第一」。' },
        { type: 'keypoint', label: '诗体', text: '《登高》是一首<strong>七言律诗</strong>：八句、每句七字，中间两联（颔联、颈联）<strong>必须对仗</strong>。本诗前四句<strong>写景</strong>、后四句<strong>抒情</strong>，情景交融，被推为律诗典范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#dfeaf2"/><path d="M0 230 L120 180 L240 210 L360 150 L480 200 L600 150 L680 190 L680 300 L0 300 Z" fill="#7a93a8"/><g fill="#5b7a8a"><path d="M340 230 q-12 -50 0 -80 q12 30 0 80 z"/></g><g fill="#c0392b"><ellipse cx="200" cy="170" rx="8" ry="4"/><ellipse cx="500" cy="160" rx="8" ry="4"/></g><path d="M0 120 q170 -10 340 0 t340 0" stroke="#9bbfcf" stroke-width="2" fill="none" opacity="0.7"/><text x="340" y="285" font-size="14" fill="#33485a" text-anchor="middle">风急天高、落木长江：夔州秋景之苍凉</text></svg>', caption: '「无边落木萧萧下，不尽长江滚滚来」气象宏阔，千古名句。' },
        { type: 'heading', text: '二、原诗通读' },
        { type: 'poem', text: '风急天高猿啸哀，渚清沙白鸟飞回。\n无边落木萧萧下，不尽长江滚滚来。\n万里悲秋常作客，百年多病独登台。\n艰难苦恨繁霜鬓，潦倒新停浊酒杯。' },
        { type: 'keypoint', label: '题解', text: '题仅「登高」二字，却涵括全诗：登高所见之景、所感之秋、所伤之身世。八句皆对，一气流转，将个人悲愁与天地壮阔熔为一炉，是杜诗「沉郁顿挫」的集中体现。' },
        { type: 'heading', text: '三、逐联研读' },
        { type: 'keypoint', label: '意象分析', text: '诗中意象极具张力：<strong>风急、天高、猿哀、渚清、沙白、鸟回</strong>写远景近景、听觉视觉交织；<strong>落木、长江</strong>以「无边」「不尽」极写空间之广、时间之长，构成雄阔而悲凉的底色。' },
        { type: 'keypoint', label: '炼字', text: '颔联「<strong>无边、不尽</strong>」极写天地宏阔；「<strong>萧萧、滚滚</strong>」叠词拟声拟态，既摹落叶之声、江水之势，又暗含<strong>韶华易逝、壮志难酬</strong>的悲凉。一字一词，皆见老杜锤炼之功。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「万里悲秋常作客，百年多病独登台」。<br><br><strong>解析</strong>：这一联将身世之悲写得层层叠加：<strong>「万里」</strong>言漂泊之远，<strong>「悲秋」</strong>点节令之哀，<strong>「常作客」</strong>写羁旅之久，<strong>「百年」</strong>叹一生将尽，<strong>「多病」</strong>状身躯之衰，<strong>「独」</strong>字更显孤孑无依。六重悲愁凝于十四字，对仗工稳而情感沉痛，是古典诗歌中写羁旅孤愁的绝唱。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="50" y="50" width="260" height="140" rx="8" fill="#9bbfcf" stroke="#5b7a8a" stroke-width="2"/><text x="180" y="112" font-size="15" fill="#1f3b4a" text-anchor="middle">前两联·景</text><text x="180" y="138" font-size="13" fill="#1f3b4a" text-anchor="middle">风急落木 雄阔</text><rect x="370" y="50" width="260" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="500" y="112" font-size="15" fill="#5b1a12" text-anchor="middle">后两联·情</text><text x="500" y="138" font-size="13" fill="#5b1a12" text-anchor="middle">悲秋多病 孤愁</text><path d="M310 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l4m2)"/><defs><marker id="l4m2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">景为情设：以天地之阔反衬身世之悲</text></svg>', caption: '景愈壮阔，情愈悲苦——情景反差成就沉郁顿挫。' },
        { type: 'keypoint', label: '对仗', text: '全诗<strong>八句皆对</strong>：首联「风急」对「渚清」、颔联「无边」对「不尽」、颈联「万里」对「百年」、尾联「艰难」对「潦倒」，对仗精工而变化生姿，是七律对仗的极致。' },
        { type: 'warn', label: '易错·词义', text: '「<strong>百年</strong>」指<strong>一生、晚年</strong>（犹言「一生多病」），并非实指一百岁；「<strong>潦倒新停浊酒杯</strong>」写穷愁中连借酒消愁亦不可得（因病停杯），「新停」即「刚停下」，不可解为「刚刚倒满」。' },
        { type: 'heading', text: '四、艺术特色与情感主旨' },
        { type: 'keypoint', label: '主旨', text: '诗人借<strong>夔州秋江的苍凉景象</strong>，抒发了<strong>漂泊孤愁、老病多艰、忧国伤时</strong>的沉郁情怀，体现杜诗<strong>「沉郁顿挫」</strong>的典型风格。' },
        { type: 'table', headers: ['联', '内容', '手法 / 特点'], rows: [['首联', '风急天高猿啸哀，渚清沙白鸟飞回', '动静、声色、上下结合'], ['颔联', '无边落木萧萧下，不尽长江滚滚来', '叠词、空间时间宏阔'], ['颈联', '万里悲秋常作客，百年多病独登台', '俯仰身世，悲愁凝重'], ['尾联', '艰难苦恨繁霜鬓，潦倒新停浊酒杯', '收束孤愁，沉郁顿挫']] },
        { type: 'list', items: ['八句皆对，对仗精工而富于变化', '前两联写景：风急、落木、长江，雄阔悲凉', '后两联抒情：悲秋、多病、孤登，沉郁凝重', '炼字极工：「无边」「不尽」「萧萧」「滚滚」', '景为情设：以天地之阔反衬身世之悲', '被誉为「古今七言律诗第一」'] },
        { type: 'tip', label: '拓展·沉郁顿挫', text: '「<strong>沉郁顿挫</strong>」是杜诗美学风格的概括：「沉郁」指情感深沉凝重、内容厚实；「顿挫」指感情表达波澜起伏、含蓄有力。它源于杜甫忧国忧民的深情与坎坷遭际。读杜诗宜慢品其「语不惊人死不休」的锤炼，并与李白的豪放飘逸对照，可见盛唐诗歌的两座高峰。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#33485a" text-anchor="middle"><circle cx="100" cy="100" r="42" fill="#9bbfcf" stroke="#5b7a8a" stroke-width="2"/><text x="100" y="96">风急天高</text><text x="100" y="114">（起·景）</text><circle cx="260" cy="100" r="42" fill="#7a93a8" stroke="#33485a" stroke-width="2"/><text x="260" y="96">落木长江</text><text x="260" y="114">（承·阔）</text><circle cx="420" cy="100" r="42" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="420" y="96">悲秋多病</text><text x="420" y="114">（转·情）</text><circle cx="580" cy="100" r="42" fill="#c0392b" stroke="#9c2a1e" stroke-width="2"/><text x="580" y="96">新停浊杯</text><text x="580" y="114">（合·愁）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="142" y1="100" x2="218" y2="100" marker-end="url(#l4m3)"/><line x1="302" y1="100" x2="378" y2="100" marker-end="url(#l4m3)"/><line x1="462" y1="100" x2="538" y2="100" marker-end="url(#l4m3)"/></g><defs><marker id="l4m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b3b12" text-anchor="middle">脉络：起景 → 承阔 → 转情 → 合愁，景情相生</text></svg>', caption: '全诗由景入情，景愈阔而情愈悲，终以孤愁收束。' },
        { type: 'list', items: ['杜甫，诗圣、诗史，现实主义巨匠', '七言律诗，八句皆对，情景交融', '前两联写夔州秋景，雄阔而悲凉', '后两联写身世孤愁，沉郁而凝重', '「百年」指一生晚年，非一百岁', '主旨：漂泊孤愁、老病忧国的沉郁情怀'] }
      ],
      exercises: [
        { type: 'choice', question: '杜甫被称为「诗圣」，其诗被称为？', options: ['诗史', '诗品', '诗话', '诗余'], answer: '诗史', explanation: '杜甫生活于唐由盛转衰的动荡年代，其诗广泛深刻地反映社会离乱与民生疾苦，被誉为「诗史」；他本人因崇高的现实主义成就与人格被尊为「诗圣」。' },
        { type: 'choice', question: '「无边落木萧萧下，不尽长江滚滚来」的妙处在于？', options: ['仅写落叶与江水', '以「无边」「不尽」写天地宏阔，寓韶华易逝之悲', '描写夏日景象', '突出欢快情绪'], answer: '以「无边」「不尽」写天地宏阔，寓韶华易逝之悲', explanation: '「无边」「不尽」极言空间之广与时间之长，「萧萧」「滚滚」以叠词摹落叶之声、江水之势。壮阔之景中暗含诗人对生命流逝、壮志未酬的深沉悲慨，景中寓情、气象浑成。' },
        { type: 'fill', question: '本诗前四句侧重写______，后四句侧重写______（景 / 情），被誉为「古今七言律诗第一」。', answer: '景|情', explanation: '《登高》章法严谨：首联、颔联铺写夔州秋景（风急、落木、长江），颈联、尾联转入身世之悲（作客、多病、繁霜、潦倒），景情分明又交融，对仗精工，故获「七律第一」之誉。' },
        { type: 'choice', question: '「万里悲秋常作客，百年多病独登台」中「百年」指？', options: ['刚好一百岁', '一生、晚年', '一百年前', '百岁老人'], answer: '一生、晚年', explanation: '古诗文中「百年」常泛指一生或晚年，此处与「万里」「多病」「独」呼应，写诗人漂泊一生、老病孤身登高，极言身世之悲，并非实指年龄满百。' },
        { type: 'fill', question: '「潦倒新停浊酒杯」中，「新停」意为______（刚停下 / 刚倒满），写诗人因病再也借不得酒来消愁。', answer: '刚停下', explanation: '「新停」即刚刚停下。杜甫晚年贫病交加，连平日借以浇愁的浊酒也因生病而不得不停下不喝，更添孤愁。理解「新停」为「刚倒满」是常见误读，须辨明。' }
      ]
    },

    /* ==================== 第5课 琵琶行（并序） ==================== */
    {
      id: 'bx1-u3-l5',
      name: '琵琶行（并序）',
      author: '白居易',
      chapter: '第三单元 生命的诗意（古代诗歌）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与时代背景' },
        { type: 'paragraph', text: '白居易（772—846），字乐天，号香山居士，中唐现实主义诗人，新乐府运动倡导者，主张「文章合为时而著，歌诗合为事而作」。其诗语言通俗、意到笔随，老妪能解。' },
        { type: 'paragraph', text: '本诗作于唐宪宗元和十一年（816），白居易被贬为江州司马期间。秋夜送客湓浦口，偶遇长安沦落之琵琶女，闻其技艺与身世，联想到自身贬谪之悲，遂作此长篇叙事诗，并自序其因由。' },
        { type: 'keypoint', label: '诗前小序', text: '诗前有小<strong>序</strong>，交代时间、地点、人物与作诗缘由，并点明主旨句<strong>「同是天涯沦落人，相逢何必曾相识」</strong>。序与诗相得益彰，是理解全篇的钥匙。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e9f0f5"/><rect x="0" y="220" width="680" height="80" fill="#9bbfcf"/><path d="M0 220 q170 -30 340 -10 t340 0" stroke="#5b7a8a" stroke-width="2" fill="none" opacity="0.6"/><ellipse cx="340" cy="150" rx="40" ry="56" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><line x1="340" y1="100" x2="340" y2="200" stroke="#7a5a2e" stroke-width="3"/><path d="M320 120 q20 -8 40 0" stroke="#3b2410" stroke-width="2" fill="none"/><circle cx="300" cy="150" r="5" fill="#3b2410"/><circle cx="380" cy="150" r="5" fill="#3b2410"/><path d="M300 90 q40 -30 80 0" stroke="#e85d8a" stroke-width="2" fill="none" opacity="0.7"/><text x="340" y="285" font-size="14" fill="#33485a" text-anchor="middle">浔阳江头：犹抱琵琶半遮面的琵琶女</text></svg>', caption: '「千呼万唤始出来，犹抱琵琶半遮面」写尽琵琶女的矜持与迟疑。' },
        { type: 'heading', text: '二、原诗通读（并序·完整）' },
        { type: 'poem', text: '【序】元和十年，予左迁九江郡司马。明年秋，送客湓浦口，闻舟中夜弹琵琶者，听其音，铮铮然有京都声。问其人，本长安倡女，尝学琵琶于穆、曹二善才，年长色衰，委身为贾人妇。遂命酒，使快弹数曲。曲罢悯默，自叙少小时欢乐事，今漂沦憔悴，转徙于江湖间。予出官二年，恬然自安，感斯人言，是夕始觉有迁谪意。因为长句，歌以赠之，凡六百一十六言，命曰《琵琶行》。\n【正文】浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。\n醉不成欢惨将别，别时茫茫江浸月。忽闻水上琵琶声，主人忘归客不发。\n寻声暗问弹者谁，琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴。\n千呼万唤始出来，犹抱琵琶半遮面。转轴拨弦三两声，未成曲调先有情。\n弦弦掩抑声声思，似诉平生不得志。低眉信手续续弹，说尽心中无限事。\n轻拢慢捻抹复挑，初为《霓裳》后《六幺》。大弦嘈嘈如急雨，小弦切切如私语。\n嘈嘈切切错杂弹，大珠小珠落玉盘。间关莺语花底滑，幽咽泉流冰下难。\n冰泉冷涩弦凝绝，凝绝不通声暂歇。别有幽愁暗恨生，此时无声胜有声。\n银瓶乍破水浆迸，铁骑突出刀枪鸣。曲终收拨当心画，四弦一声如裂帛。\n东船西舫悄无言，唯见江心秋月白。\n沉吟放拨插弦中，整顿衣裳起敛容。自言本是京城女，家在虾蟆陵下住。\n十三学得琵琶成，名属教坊第一部。曲罢曾教善才服，妆成每被秋娘妒。\n五陵年少争缠头，一曲红绡不知数。钿头银篦击节碎，血色罗裙翻酒污。\n今年欢笑复明年，秋月春风等闲度。弟走从军阿姨死，暮去朝来颜色故。\n门前冷落鞍马稀，老大嫁作商人妇。商人重利轻别离，前月浮梁买茶去。\n去来江口守空船，绕船月明江水寒。夜深忽梦少年事，梦啼妆泪红阑干。\n我闻琵琶已叹息，又闻此语重唧唧。同是天涯沦落人，相逢何必曾相识！\n我从去年辞帝京，谪居卧病浔阳城。浔阳地僻无音乐，终岁不闻丝竹声。\n住近湓江地低湿，黄芦苦竹绕宅生。其间旦暮闻何物？杜鹃啼血猿哀鸣。\n春江花朝秋月夜，往往取酒还独倾。岂无山歌与村笛？呕哑嘲哳难为听。\n今夜闻君琵琶语，如听仙乐耳暂明。莫辞更坐弹一曲，为君翻作《琵琶行》。\n感我此言良久立，却坐促弦弦转急。凄凄不似向前声，满座重闻皆掩泣。\n座中泣下谁最多？江州司马青衫湿。' },
        { type: 'keypoint', label: '题解', text: '「行」即歌行体，便于铺叙长篇故事。全诗以<strong>琵琶女的演奏与身世</strong>为主线，以<strong>诗人的贬谪之悲</strong>为暗线，双线交汇于「同是天涯沦落人」，叙事、抒情、写乐三者交融。' },
        { type: 'heading', text: '三、逐段研读' },
        { type: 'keypoint', label: '音乐描写', text: '诗人以<strong>比喻</strong>写琴声：急雨、私语、珠落玉盘、莺语泉流、银瓶迸裂、铁骑刀枪，<strong>以声写声、以形写声</strong>，把抽象音乐化为具体画面；更以「无声胜有声」写留白之妙，堪称古典音乐描写的巅峰。' },
        { type: 'keypoint', label: '双线结构', text: '明线写<strong>琵琶女</strong>：昔为京城名妓、今漂沦商人妇；暗线写<strong>诗人自己</strong>：昔居帝京、今谪居湓城。二人身份迥异却同遭沦落，形成「<strong>同是天涯沦落人</strong>」的强烈共鸣。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘」。<br><br><strong>解析</strong>：这四句写琵琶初弹之声。诗人用<strong>比喻（以声写声、以形写声）</strong>：大弦声浊如「急雨」，小弦声细如「私语」，两弦交错则如「大珠小珠落玉盘」，以可见可闻的物象状难摹的乐音，化听觉为视觉。摹声之外更见节奏，由舒缓到繁密，层次井然，使读者如临其境、如闻其声，是音乐描写的千古绝唱。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="50" y="50" width="160" height="140" rx="8" fill="#9bbfcf" stroke="#5b7a8a" stroke-width="2"/><text x="130" y="112" font-size="14" fill="#1f3b4a" text-anchor="middle">声·急雨</text><text x="130" y="138" font-size="13" fill="#1f3b4a" text-anchor="middle">珠落玉盘</text><rect x="260" y="50" width="160" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="340" y="112" font-size="14" fill="#3e6b2e" text-anchor="middle">情·幽恨</text><text x="340" y="138" font-size="13" fill="#3e6b2e" text-anchor="middle">无声胜声</text><rect x="470" y="50" width="160" height="140" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="550" y="112" font-size="14" fill="#fff" text-anchor="middle">共鸣·沦落</text><text x="550" y="138" font-size="13" fill="#fff" text-anchor="middle">青衫泪湿</text><path d="M210 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l5m2)"/><path d="M420 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l5m2)"/><defs><marker id="l5m2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">由乐及情：以琵琶声串起双线共鸣</text></svg>', caption: '音乐描写服务于抒情：琵琶女的「幽恨」唤醒诗人的贬谪之悲。' },
        { type: 'keypoint', label: '章法名句', text: '全诗三处高潮：一在<strong>「未成曲调先有情」</strong>（写乐之魂），二在<strong>「此时无声胜有声」</strong>（写乐之境），三在<strong>「同是天涯沦落人」</strong>（写情之核）。由声入情，水到渠成。' },
        { type: 'warn', label: '易错·名物', text: '「<strong>青衫</strong>」是<strong>唐代八、九品文官的服色</strong>，代指诗人被贬的低微官职（江州司马），不是「青色的衣衫」泛称；「<strong>左迁</strong>」指贬官（古以右为尊），而非升迁；「<strong>善才</strong>」是对琵琶艺人的称呼，非「善良之才」。' },
        { type: 'heading', text: '四、艺术特色与情感主旨' },
        { type: 'keypoint', label: '主旨', text: '诗人借<strong>琵琶女的身世</strong>与<strong>精妙的音乐描写</strong>，抒写自己<strong>被贬江州的孤寂不平</strong>，发出了「<strong>同是天涯沦落人</strong>」的深沉共鸣，也暗含对不公世道的委婉批判。' },
        { type: 'table', headers: ['层次', '内容', '作用'], rows: [['送客', '浔阳江头夜送客', '交代背景，渲染悲凉'], ['闻声', '忽闻水上琵琶声', '引出主人公'], ['描声', '大珠小珠落玉盘', '以形写声，曲尽其妙'], ['诉身世', '同是天涯沦落人', '双线交汇，点明主旨'], ['泣下', '江州司马青衫湿', '以泪收束，余味悠长']] },
        { type: 'list', items: ['歌行体长篇叙事，双线（琵琶女、诗人）交汇', '音乐描写登峰造极：以声写声、以形写声', '「无声胜有声」写艺术留白之妙', '以「同是天涯沦落人」收束双线共鸣', '语言通俗流畅，叙事抒情浑然一体', '主旨：借商妇身世自伤贬谪漂泊之悲'] },
        { type: 'tip', label: '拓展·新乐府', text: '白居易与元稹等倡导<strong>「新乐府运动」</strong>，主张诗歌「为事而作」、补察时政、泄导人情，反对雕琢绮靡。其《新乐府》《秦中吟》及长篇《长恨歌》《琵琶行》皆体现此种精神。中唐元白诗派语言平易，与韩孟诗派的奇险并立，影响后世极深。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#33485a" text-anchor="middle"><circle cx="100" cy="100" r="42" fill="#9bbfcf" stroke="#5b7a8a" stroke-width="2"/><text x="100" y="96">江头送客</text><text x="100" y="114">（起）</text><circle cx="260" cy="100" r="42" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="260" y="96">琵琶诉情</text><text x="260" y="114">（承）</text><circle cx="420" cy="100" r="42" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="420" y="96">沦落共鸣</text><text x="420" y="114">（转）</text><circle cx="580" cy="100" r="42" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="580" y="96">青衫泪湿</text><text x="580" y="114">（合）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="142" y1="100" x2="218" y2="100" marker-end="url(#l5m3)"/><line x1="302" y1="100" x2="378" y2="100" marker-end="url(#l5m3)"/><line x1="462" y1="100" x2="538" y2="100" marker-end="url(#l5m3)"/></g><defs><marker id="l5m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b3b12" text-anchor="middle">脉络：送客 → 闻乐 → 共鸣 → 泪湿，双线归一</text></svg>', caption: '全诗由江头送客起，经琵琶诉情，终于沦落共鸣、青衫泪湿。' },
        { type: 'list', items: ['白居易，新乐府倡导者，号香山居士', '诗前小序点明「同是天涯沦落人」', '音乐描写以声写声、以形写声，登峰造极', '双线结构：琵琶女身世与诗人贬谪', '「青衫」代指低微官职，非青色衣衫', '主旨：借商妇身世自伤贬谪漂泊之悲'] }
      ],
      exercises: [
        { type: 'choice', question: '《琵琶行》小序中点明主旨的诗句是？', options: ['枫叶荻花秋瑟瑟', '同是天涯沦落人，相逢何必曾相识', '大珠小珠落玉盘', '唯见江心秋月白'], answer: '同是天涯沦落人，相逢何必曾相识', explanation: '诗前小序明言作诗缘起，并以「同是天涯沦落人，相逢何必曾相识」收束，点出全诗核心：诗人由琵琶女的飘零身世照见自身贬谪之悲，二者命运相通，不需旧交而共鸣。' },
        { type: 'choice', question: '「大弦嘈嘈如急雨，小弦切切如私语」的描写手法是？', options: ['以静写动', '比喻（以声写声、以形写声）', '白描', '借代'], answer: '比喻（以声写声、以形写声）', explanation: '诗人用「急雨」「私语」「珠落玉盘」等喻体把听觉上的琴声转化为读者可感的声音与形象，是音乐描写的经典手法，使抽象旋律具象可触，极具画面感。' },
        { type: 'fill', question: '「此时无声胜有声」一句，写音乐在「凝绝不通」的停顿中，反而生出更深的______（幽愁暗恨 / 欢快）。', answer: '幽愁暗恨', explanation: '当琴声暂歇、似断非断之时，那份潜藏的哀怨反而更加动人，所谓「别有幽愁暗恨生，此时无声胜有声」。它说明艺术感染力不只在发声，也在留白与停顿之中。' },
        { type: 'choice', question: '「座中泣下谁最多？江州司马青衫湿」中「青衫」指？', options: ['青色的普通衣衫', '唐代低品文官服色，代指被贬的江州司马', '孝服', '舞衣'], answer: '唐代低品文官服色，代指被贬的江州司马', explanation: '唐制官员服色按品级：八、九品着青衫。白居易时任江州司马，属低级官职，故以「青衫」自指。「青衫湿」写他听曲伤怀、泪湿官服，足见贬谪之悲之深。' },
        { type: 'fill', question: '序中「予左迁九江郡司马」的「左迁」意为______（贬官 / 升官），古以右为尊，左迁即降职远调。', answer: '贬官', explanation: '「左迁」指贬官降职。古人以右为尊、以左为卑，故「左迁」即降职外放。白居易因直言获罪，由京官贬为江州司马，此「迁谪之意」正是《琵琶行》的情感根源。' }
      ]
    },

    /* ==================== 第6课 念奴娇·赤壁怀古 ==================== */
    {
      id: 'bx1-u3-l6',
      name: '念奴娇·赤壁怀古',
      author: '苏轼',
      chapter: '第三单元 生命的诗意（古代诗歌）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与词牌' },
        { type: 'paragraph', text: '苏轼（1037—1101），字子瞻，号东坡居士，北宋文学家、书画家，「唐宋八大家」之一。他一生屡遭贬谪，却旷达超脱，诗词文书画俱臻一流，是宋词豪放派的开创者之一。' },
        { type: 'paragraph', text: '本词作于宋神宗元丰五年（1082），苏轼因「乌台诗案」被贬黄州（今湖北黄冈）期间。他游览当地赤壁，借怀古抒写对英雄业绩的向往与自身壮志未酬的感慨。' },
        { type: 'keypoint', label: '词体', text: '「<strong>念奴娇</strong>」是<strong>词牌</strong>（规定字数、句式、押韵等格律），「<strong>赤壁怀古</strong>」是<strong>题目</strong>。词上片写<strong>赤壁壮景</strong>，下片写<strong>周瑜风流与自身感慨</strong>，是豪放怀古词的名篇。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e9f1f6"/><path d="M0 240 L120 170 L240 210 L360 130 L480 190 L600 140 L680 200 L680 300 L0 300 Z" fill="#8aa0b0"/><path d="M0 260 q170 -20 340 0 t340 0" stroke="#5b7a8a" stroke-width="3" fill="none" opacity="0.7"/><g fill="#fff"><path d="M150 150 q-6 -10 0 -18 q6 8 0 18 z"/></g><text x="340" y="285" font-size="14" fill="#33485a" text-anchor="middle">乱石穿空、惊涛拍岸：赤壁江山的雄奇</text></svg>', caption: '「江山如画，一时多少豪杰」由上阕写景自然转入怀古。' },
        { type: 'heading', text: '二、原词通读' },
        { type: 'poem', text: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。\n乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。\n遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。\n故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。' },
        { type: 'keypoint', label: '题解', text: '题名「赤壁怀古」，以江山之壮起笔，以周郎之英承接，终以自身之慨收束。怀古而不滞于古，旷达中见苍凉，是苏词「以诗为词」、拓宽词境的典范。' },
        { type: 'heading', text: '三、逐片研读' },
        { type: 'keypoint', label: '意象分析', text: '上片意象雄阔：<strong>大江、浪淘、乱石、惊涛、千堆雪</strong>，以奔涌之水与嶙峋之石写天地伟力；「<strong>江山如画</strong>」为承上启下之句，由景自然转入怀古。' },
        { type: 'keypoint', label: '用典对比', text: '下片以<strong>周瑜（公瑾）</strong>为典：少年得志、小乔初嫁、谈笑破敌，英姿勃发；与词人<strong>「早生华发」「壮志未酬」</strong>形成鲜明反衬，怀古实为自伤。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「羽扇纶巾，谈笑间，樯橹灰飞烟灭」。<br><br><strong>解析</strong>：这几句写周瑜指挥若定、从容破敌之态。「<strong>羽扇纶巾</strong>」以儒将装束写其风度潇洒，「<strong>谈笑间</strong>」极言决胜之轻而易举，「<strong>樯橹灰飞烟灭</strong>」以夸张写曹军战船倾覆之速。词人未写刀光血影，而于从容闲雅中见摧枯拉朽之势，既塑周郎少年英雄之姿，亦暗含对自身功业无成的怅惘。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="60" y="50" width="220" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="170" y="112" font-size="15" fill="#3e6b2e" text-anchor="middle">周瑜·公瑾</text><text x="170" y="138" font-size="13" fill="#3e6b2e" text-anchor="middle">雄姿英发 功成</text><rect x="400" y="50" width="220" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="510" y="112" font-size="15" fill="#5b1a12" text-anchor="middle">苏轼·自我</text><text x="510" y="138" font-size="13" fill="#5b1a12" text-anchor="middle">早生华发 壮志未酬</text><path d="M280 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l6m2)"/><path d="M360 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l6m2)"/><defs><marker id="l6m2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">以古衬今：周郎建功 vs 自身落寞</text></svg>', caption: '怀古词的常见章法——借古人酒杯，浇自己块垒。' },
        { type: 'keypoint', label: '章法', text: '上片<strong>写景怀古</strong>（江山→豪杰），下片<strong>叙事抒情</strong>（遥想周郎→自叹华发）。结句「<strong>人生如梦，一尊还酹江月</strong>」以酒祭月，将万古愁绪化为旷达一笑，余韵悠长。' },
        { type: 'warn', label: '易错·地望', text: '苏轼所游<strong>黄州赤壁并非三国古战场</strong>（真正的赤壁之战在今湖北赤壁市）。词人<strong>借地怀古、虚实相生</strong>，重在借周郎抒怀，而非考据地理，阅读怀古词须明此「地望之误」与「借托」之妙。' },
        { type: 'heading', text: '四、艺术特色与情感主旨' },
        { type: 'keypoint', label: '主旨', text: '词借<strong>赤壁雄奇之景与周瑜英雄之事</strong>，抒写<strong>对英雄的向往与自身功业无成、年华老去</strong>的感慨，于旷达中见悲凉，体现苏轼<strong>豪放旷达</strong>的词风。' },
        { type: 'table', headers: ['片', '内容', '特点'], rows: [['上片', '大江东去，乱石穿空', '写赤壁壮景，气势磅礴'], ['过片', '江山如画，一时多少豪杰', '由景入怀，过渡自然'], ['下片', '遥想公瑾当年', '写周瑜功业，英姿飒爽'], ['收束', '人生如梦，一尊还酹江月', '旷达自解，悲凉暗含']] },
        { type: 'list', items: ['豪放怀古：以江山宏景开篇，气象磅礴', '上景下情：景为怀古之资，情为自伤之慨', '用周瑜典反衬自身壮志未酬', '「江山如画」承上启下，自然转接', '借地怀古：黄州赤壁非真古战场', '风格豪放旷达，悲而能超'] },
        { type: 'tip', label: '拓展·豪放词', text: '苏轼与辛弃疾并称<strong>「苏辛」</strong>，为宋词<strong>豪放派</strong>双璧。苏词旷达超迈，突破晚唐五代「艳科」藩篱，以诗为词、无事不可入词。然其豪放中常含旷达与悲凉交织的复杂心绪，与辛弃疾的沉郁悲愤各有千秋，读之可见宋代文人的精神境界。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#33485a" text-anchor="middle"><circle cx="100" cy="100" r="42" fill="#9bbfcf" stroke="#5b7a8a" stroke-width="2"/><text x="100" y="96">大江东去</text><text x="100" y="114">（景）</text><circle cx="260" cy="100" r="42" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="260" y="96">遥想周郎</text><text x="260" y="114">（古）</text><circle cx="420" cy="100" r="42" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="420" y="96">早生华发</text><text x="420" y="114">（今）</text><circle cx="580" cy="100" r="42" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="580" y="96">酹月旷达</text><text x="580" y="114">（解）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="142" y1="100" x2="218" y2="100" marker-end="url(#l6m3)"/><line x1="302" y1="100" x2="378" y2="100" marker-end="url(#l6m3)"/><line x1="462" y1="100" x2="538" y2="100" marker-end="url(#l6m3)"/></g><defs><marker id="l6m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b3b12" text-anchor="middle">脉络：写景 → 怀古 → 自伤 → 旷达，悲而能超</text></svg>', caption: '全词由写景怀古到自伤，终以酹月旷达收束，悲而能超。' },
        { type: 'list', items: ['苏轼，北宋文豪，豪放派开创者，号东坡居士', '「念奴娇」是词牌，「赤壁怀古」是题目', '上片写赤壁壮景，下片怀周瑜、伤自身', '周瑜功成反衬词人壮志未酬', '黄州赤壁非真古战场，属借地怀古', '主旨：向往英雄、慨叹华发、旷达自解'] }
      ],
      exercises: [
        { type: 'choice', question: '「念奴娇」与「赤壁怀古」的关系是？', options: ['都是词牌', '「念奴娇」是词牌，「赤壁怀古」是题目', '都是题目', '二者无别'], answer: '「念奴娇」是词牌，「赤壁怀古」是题目', explanation: '词牌规定字数、句式、押韵等格律，「念奴娇」即其牌名；题目「赤壁怀古」点明凭吊赤壁、追怀古人的内容与主旨，二者一为格式一为内容，不可混淆。' },
        { type: 'choice', question: '下片「羽扇纶巾，谈笑间，樯橹灰飞烟灭」写的是哪位人物？', options: ['诸葛亮', '周瑜（公瑾）', '曹操', '孙权'], answer: '周瑜（公瑾）', explanation: '这几句紧承「遥想公瑾当年」，写周瑜身为主将却儒雅从容（羽扇纶巾），于谈笑之间便使曹军战船化为灰烬，凸显其少年英俊、指挥若定的英雄风采。' },
        { type: 'fill', question: '「故国神游，多情应笑我，早生华发」中，「华发」指______（白发 / 黑发），暗含壮志未酬的感慨。', answer: '白发', explanation: '「华发」即花白头发。苏轼此时年约四十七，却自叹「早生华发」，以周瑜三十余岁便建功立业反衬自己鬓已斑白而功业未成，流露出岁月蹉跎、抱负难展的怅惘。' },
        { type: 'choice', question: '本词结尾「人生如梦，一尊还酹江月」表现了苏轼怎样的情怀？', options: ['消极厌世', '旷达超脱中略带悲凉的自我排遣', '醉生梦死', '狂喜激动'], answer: '旷达超脱中略带悲凉的自我排遣', explanation: '面对英雄不再、自身落寞，词人把酒祭江月，既有看破得失的旷达，也有壮志难酬的无奈。这种「悲而能旷」的复杂心绪，正是苏词豪放中含沉郁的典型体现。' },
        { type: 'fill', question: '苏轼所游黄州赤壁并非三国古战场，本词属于______（借地怀古 / 写实纪实），重在借周郎抒怀。', answer: '借地怀古', explanation: '三国赤壁之战发生在今湖北赤壁市（旧蒲圻），而苏轼被贬黄州所游赤壁在今湖北黄冈，两地并非一处。词人借黄州赤壁之名怀古抒怀，属「地望借托、虚实相生」，意在借周郎抒发自身感慨。' }
      ]
    },

    /* ==================== 第7课 永遇乐·京口北固亭怀古 ==================== */
    {
      id: 'bx1-u3-l7',
      name: '永遇乐·京口北固亭怀古',
      author: '辛弃疾',
      chapter: '第三单元 生命的诗意（古代诗歌）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与时代背景' },
        { type: 'paragraph', text: '辛弃疾（1140—1207），字幼安，号稼轩，南宋豪放派词人，一生以恢复中原为志。他少年抗金、南归报国，却屡遭猜忌闲置，壮志难伸，词风沉郁苍凉、雄深雅健。' },
        { type: 'paragraph', text: '本词作于宋宁宗开禧元年（1205）辛弃疾任镇江知府时。他登北固亭，借京口（今镇江）历史风云，既赞英雄、又戒冒进，更抒自己老而弥坚、报国无门之痛，是晚年怀古名作。' },
        { type: 'keypoint', label: '艺术特色', text: '全词<strong>连续用典</strong>：孙权（孙仲谋）、刘裕（寄奴）、刘义隆（元嘉）、拓跋焘（佛狸）、廉颇。用典密集而贴切，典中有议、典中有情，是辛词「以文为词、好用典」的典型。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#efe9dd"/><rect x="0" y="230" width="680" height="70" fill="#b9a37a"/><path d="M80 230 l20 -70 20 70 z" fill="#8a6a3e"/><path d="M560 230 l20 -80 20 80 z" fill="#8a6a3e"/><rect x="320" y="120" width="40" height="110" fill="#9a7a4e"/><path d="M300 120 l40 -30 40 30 z" fill="#6a4a2e"/><g fill="#c0392b"><path d="M340 100 q-8 -14 0 -24 q8 10 0 24 z"/></g><text x="340" y="285" font-size="14" fill="#5b4636" text-anchor="middle">北固亭：词人登临怀古、连用五典之地</text></svg>', caption: '京口（今镇江）为孙权、刘裕起事之地，最宜怀古。' },
        { type: 'heading', text: '二、原词通读' },
        { type: 'poem', text: '千古江山，英雄无觅，孙仲谋处。舞榭歌台，风流总被，雨打风吹去。\n斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。\n元嘉草草，封狼居胥，赢得仓皇北顾。四十三年，望中犹记，烽火扬州路。\n可堪回首，佛狸祠下，一片神鸦社鼓。凭谁问：廉颇老矣，尚能饭否？' },
        { type: 'keypoint', label: '题解', text: '题名「京口北固亭怀古」，怀古实为<strong>讽今、伤今</strong>。上片追慕孙刘英雄功业，下片借刘义隆之败戒执政冒进，末以廉颇自况，将历史、时局与身世拧为一体。' },
        { type: 'heading', text: '三、逐典研读' },
        { type: 'keypoint', label: '用典分析', text: '上片两典：<strong>孙权</strong>（孙仲谋）据京口御敌，<strong>刘裕</strong>（寄奴）起兵北伐，皆京口英雄，词人借以颂功业、寄恢复之望；景中寓「英雄无觅」的今昔之慨。' },
        { type: 'keypoint', label: '借古讽今', text: '下片<strong>「元嘉草草」</strong>借刘义隆冒进惨败，劝谏朝廷<strong>不可轻启战端</strong>；<strong>「佛狸祠下」</strong>写敌占区香火鼎盛，暗忧中原沦陷、人心渐忘；<strong>「廉颇老矣」</strong>以廉颇自比，叹报国无门。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「凭谁问：廉颇老矣，尚能饭否？」。<br><br><strong>解析</strong>：战国老将廉颇曾以「尚能饭否」自证可用。辛弃疾以此<strong>自况</strong>：自己虽年老，仍壮心不已，却<strong>无人过问、报国无门</strong>。全句以反诘收束，于豪迈中泄尽英雄末路的悲愤。前面连用四典铺垫恢宏历史，至此陡然收束为个人之问，典与情、古与今浑然一体，是辛词沉郁苍凉的巅峰之笔。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="130" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="105" y="112" font-size="14" fill="#3e6b2e" text-anchor="middle">孙权</text><text x="105" y="138" font-size="12" fill="#3e6b2e" text-anchor="middle">寄奴功业</text><rect x="190" y="50" width="130" height="140" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="255" y="112" font-size="14" fill="#5b3b12" text-anchor="middle">元嘉</text><text x="255" y="138" font-size="12" fill="#5b3b12" text-anchor="middle">草草败北</text><rect x="340" y="50" width="130" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="405" y="112" font-size="14" fill="#5b1a12" text-anchor="middle">佛狸祠</text><text x="405" y="138" font-size="12" fill="#5b1a12" text-anchor="middle">偏安之痛</text><rect x="490" y="50" width="150" height="140" rx="8" fill="#9b8ad0" stroke="#5b4a9e" stroke-width="2"/><text x="565" y="112" font-size="14" fill="#fff" text-anchor="middle">廉颇</text><text x="565" y="138" font-size="12" fill="#fff" text-anchor="middle">自况老矣</text><path d="M170 120 h20" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l7m2)"/><path d="M320 120 h20" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l7m2)"/><path d="M470 120 h20" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#l7m2)"/><defs><marker id="l7m2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="220" font-size="12" fill="#3e5b6b" text-anchor="middle">五典一线：借古谏今 + 自伤报国无门</text></svg>', caption: '五个典故各有指向，或颂或戒或自伤，浑成一体。' },
        { type: 'keypoint', label: '章法', text: '全词<strong>上片颂古、下片讽今</strong>：由孙权刘裕之盛，转至元嘉之败、佛狸之痛，终以廉颇之问收束。典故如珠串相连，情感由追慕渐入沉痛，结构密而气脉贯。' },
        { type: 'warn', label: '易错·名物', text: '「<strong>佛狸</strong>」是<strong>北魏太武帝拓跋焘</strong>的小名，祠在敌占区却已香火鼎盛，暗写中原沦陷、人们渐忘仇恨的隐痛，<strong>非佛教神灵</strong>；「<strong>封狼居胥</strong>」典出霍去病，指立功受封，此处反用写刘义隆「草草」未能竟功。' },
        { type: 'heading', text: '四、艺术特色与情感主旨' },
        { type: 'keypoint', label: '主旨', text: '词借<strong>京口怀古连用典故</strong>，既<strong>赞扬英雄、警示轻敌冒进</strong>，又<strong>抒发自己老而弥坚、渴望北伐却报国无门</strong>的悲愤，风格沉郁苍凉。' },
        { type: 'table', headers: ['典故', '人物', '用意'], rows: [['孙仲谋处', '孙权', '赞英雄业绩，寄恢复之望'], ['寄奴曾住', '刘裕', '颂北伐功业，气吞万里'], ['元嘉草草', '刘义隆', '戒轻启战端，草草致败'], ['廉颇老矣', '廉颇', '自况老矣，报国无门']] },
        { type: 'list', items: ['连续用典：孙刘、元嘉、佛狸、廉颇，密集贴切', '上片颂古英雄，下片讽今时局', '借元嘉之败劝谏朝廷不可冒进', '以廉颇自况，抒报国无门之愤', '「佛狸祠」暗写中原沦陷之痛', '风格沉郁苍凉，典中有议有情'] },
        { type: 'tip', label: '拓展·辛词', text: '辛弃疾是<strong>豪放词集大成者</strong>，与苏轼并称「苏辛」，然苏词旷达、辛词沉郁。辛词好<strong>以文为词、融化经史</strong>，典故繁密，气势雄健，将爱国激情与身世悲慨融为一体。南宋偏安，志士空老，其词因而沉郁悲凉，与陆游、陈亮等同属抗战词派。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#33485a" text-anchor="middle"><circle cx="100" cy="100" r="42" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="100" y="96">孙刘功业</text><text x="100" y="114">（颂古）</text><circle cx="260" cy="100" r="42" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="260" y="96">元嘉草草</text><text x="260" y="114">（戒今）</text><circle cx="420" cy="100" r="42" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="420" y="96">佛狸之痛</text><text x="420" y="114">（忧时）</text><circle cx="580" cy="100" r="42" fill="#9b8ad0" stroke="#5b4a9e" stroke-width="2"/><text x="580" y="96">廉颇自况</text><text x="580" y="114">（伤己）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="142" y1="100" x2="218" y2="100" marker-end="url(#l7m3)"/><line x1="302" y1="100" x2="378" y2="100" marker-end="url(#l7m3)"/><line x1="462" y1="100" x2="538" y2="100" marker-end="url(#l7m3)"/></g><defs><marker id="l7m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b3b12" text-anchor="middle">脉络：颂古 → 戒今 → 忧时 → 伤己，典尽而情深</text></svg>', caption: '全词借五典由颂古到伤己，沉郁苍凉，报国无门之痛淋漓。' },
        { type: 'list', items: ['辛弃疾，南宋豪放派，号稼轩，志在恢复', '全词连续用典，密集而贴切', '上片颂孙权刘裕功业，下片讽今', '元嘉草草戒冒进，佛狸祠忧沦陷', '「佛狸」是拓跋焘小名，非神佛', '以廉颇自况，抒老而报国无门之愤'] }
      ],
      exercises: [
        { type: 'choice', question: '本词最大的艺术特色是？', options: ['白描写景', '连续用典，贴切而密集', '通篇口语', '以词为诗'], answer: '连续用典，贴切而密集', explanation: '全词连用孙权、刘裕、刘义隆、拓跋焘、廉颇五则典故，或颂英雄、或戒冒进、或伤时局、或自况，典故与抒情议论紧密结合，是辛词「以文为词、好用典」的典型代表。' },
        { type: 'choice', question: '「元嘉草草，封狼居胥，赢得仓皇北顾」的用意是？', options: ['歌颂刘义隆北伐成功', '借刘义隆冒进惨败劝谏南宋勿轻启战端', '描写打猎场景', '赞美拓跋焘'], answer: '借刘义隆冒进惨败劝谏南宋勿轻启战端', explanation: '「元嘉」是刘义隆年号，他急于北伐、草率出兵，结果大败而归「仓皇北顾」。辛弃疾借古讽今，提醒南宋朝廷汲取教训，不可恃勇轻进，须有万全准备。' },
        { type: 'fill', question: '「凭谁问：廉颇老矣，尚能饭否？」中，辛弃疾以______（人名）自比，表达虽老仍渴望报国。', answer: '廉颇', explanation: '廉颇是战国赵国老将，曾以「尚能饭否」自证可用。辛弃疾以此自况：自己虽年老，仍壮心不已，却无人询问、报国无门，于反问中泄尽英雄末路的悲愤。' },
        { type: 'choice', question: '「佛狸祠下，一片神鸦社鼓」隐含的痛心是？', options: ['人们热衷拜佛祈求平安', '中原沦陷区百姓已渐忘国仇，香火供奉敌酋祠堂', '描写乡村庙会热闹', '赞美拓跋焘功德'], answer: '中原沦陷区百姓已渐忘国仇，香火供奉敌酋祠堂', explanation: '「佛狸」是北魏太武帝拓跋焘小名，其祠在曾被侵占的地区。如今祠前神鸦社鼓、香火旺盛，说明人们淡忘了亡国之痛与收复之志，词人由此深忧偏安苟安、人心麻木。' },
        { type: 'fill', question: '「想当年，金戈铁马，气吞万里如虎」写的是______（刘裕 / 孙权）北伐时的豪迈气势。', answer: '刘裕', explanation: '此句紧承「人道寄奴曾住」，「寄奴」即南朝宋武帝刘裕的小名。他起兵京口、北伐中原，气势如虎。词人借颂刘裕功业，寄托自己对收复失地的渴望，与下文元嘉败绩形成对照。' }
      ]
    },

    /* ==================== 第8课 声声慢 ==================== */
    {
      id: 'bx1-u3-l8',
      name: '声声慢',
      author: '李清照',
      chapter: '第三单元 生命的诗意（古代诗歌）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与词风' },
        { type: 'paragraph', text: '李清照（1084—约1155），号易安居士，宋代女词人。其词以靖康之变为界分前后两期：前期清丽明快、多写闺情；后期南渡飘零，词风转悲凉，抒写国破家亡之痛，为婉约派巅峰。' },
        { type: 'paragraph', text: '《声声慢》作于南渡之后，时词人夫亡家破、只身漂泊。一个秋日黄昏，她独对梧桐细雨，万般愁绪涌上心头，遂成此篇。全词以叠字开篇，愁绪如网，是婉约词中写「愁」的绝唱。' },
        { type: 'keypoint', label: '开篇奇绝', text: '开篇<strong>七组叠字</strong>「寻寻觅觅，冷冷清清，凄凄惨惨戚戚」为千古绝唱，由<strong>动作到环境到心境</strong>层层递进，声调凄切，把无形之愁写得可感可闻。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e7e3ec"/><rect x="0" y="220" width="680" height="80" fill="#b9b0c4"/><g fill="#e85d8a"><circle cx="160" cy="170" r="14"/><circle cx="190" cy="170" r="14"/><circle cx="220" cy="170" r="14"/></g><g fill="#8a7aa0"><path d="M420 170 q-4 -10 0 -18 q4 8 0 18 z"/><path d="M450 170 q-4 -10 0 -18 q4 8 0 18 z"/></g><path d="M0 110 q170 -10 340 0 t340 0" stroke="#9b8ad0" stroke-width="2" fill="none" opacity="0.6"/><g fill="#9b8ad0"><path d="M250 200 l4 30 6 0 -4 -30 z"/><path d="M270 200 l4 30 6 0 -4 -30 z"/></g><text x="340" y="285" font-size="14" fill="#4a3a5a" text-anchor="middle">梧桐更兼细雨，到黄昏、点点滴滴</text></svg>', caption: '「梧桐细雨」是古典诗词中典型的愁苦意象组合。' },
        { type: 'heading', text: '二、原词通读' },
        { type: 'poem', text: '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。\n三杯两盏淡酒，怎敌他、晚来风急！雁过也，正伤心，却是旧时相识。\n满地黄花堆积，憔悴损，如今有谁堪摘？守着窗儿，独自怎生得黑！\n梧桐更兼细雨，到黄昏、点点滴滴。这次第，怎一个愁字了得！' },
        { type: 'keypoint', label: '题解', text: '「声声慢」是词牌，节奏舒缓低回，宜写愁情。全词无一「泪」字而泪痕满纸，以<strong>意象叠加</strong>写愁，将个人飘零之悲与时代离乱之痛融为一体。' },
        { type: 'heading', text: '三、逐层研读' },
        { type: 'keypoint', label: '意象分析', text: '词中<strong>淡酒、急风、过雁、黄花、梧桐、细雨</strong>等意象层层叠加，共同织成一张<strong>凄冷愁网</strong>：酒难御寒、风更添冷、雁引乡思、花喻凋零、梧桐细雨滴碎黄昏。' },
        { type: 'keypoint', label: '叠字与修辞', text: '七组叠字之外，又用<strong>「点点滴滴」</strong>叠词摹雨声，前后呼应。修辞上善用<strong>设问</strong>（怎敌他、怎生得黑、怎一个愁字了得），以反问蓄势，愁绪愈转愈浓。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「梧桐更兼细雨，到黄昏、点点滴滴。这次第，怎一个愁字了得」。<br><br><strong>解析</strong>：梧桐本就是古典诗词中的愁苦之树，再加以「细雨」「黄昏」，更添凄迷。雨声「点点滴滴」既是<strong>听觉</strong>，更敲在词人心上，以声写愁、以景结情。末句「这次第，怎一个愁字了得」以<strong>反问</strong>收束：面对淡酒、急风、过雁、黄花、梧桐、细雨交织的凄凉光景，岂是一个「愁」字所能包容？将悲愁之深广推到极致，余味无穷。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="14" fill="#4a3a5a" text-anchor="middle"><text x="90" y="60">淡酒</text><text x="200" y="60">急风</text><text x="310" y="60">过雁</text><text x="420" y="60">黄花</text><text x="530" y="60">梧桐</text><text x="620" y="60">细雨</text></g><g fill="#e8b0c4"><circle cx="90" cy="115" r="20"/><circle cx="200" cy="115" r="20"/><circle cx="310" cy="115" r="20"/><circle cx="420" cy="115" r="20"/><circle cx="530" cy="115" r="20"/><circle cx="620" cy="115" r="20"/></g><path d="M110 115 q90 40 180 0 q90 -40 180 0 q90 40 180 0" stroke="#c0392b" stroke-width="2" fill="none"/><text x="355" y="200" font-size="13" fill="#4a3a5a" text-anchor="middle">六重意象叠加 → 一个「愁」字了得</text></svg>', caption: '意象如珠串，环环相扣，愁绪愈织愈浓。' },
        { type: 'keypoint', label: '章法', text: '全词以<strong>「寻寻觅觅」起，以「愁字了得」收</strong>：由动作（寻）→环境（冷清）→心境（凄惨）→景物铺排（酒、风、雁、花、梧桐、雨）→总括（愁）。由外而内、由浅入深，愁网愈收愈紧。' },
        { type: 'warn', label: '易错·词义', text: '「<strong>这次第</strong>」意为<strong>「这情形、这光景」</strong>，不是「这次的秩序」；「<strong>怎生得黑</strong>」即「怎么挨到天黑」；「<strong>将息</strong>」指调养、歇息，非「休息」之泛称。读婉约词须细辨此类宋人口语。' },
        { type: 'heading', text: '四、艺术特色与情感主旨' },
        { type: 'keypoint', label: '主旨', text: '词以<strong>叠字开篇、意象层叠</strong>，抒写词人<strong>晚年孤苦无依、国破家亡</strong>的深哀巨痛，将个人之愁与时代之悲融为一体，是婉约词写愁的巅峰。' },
        { type: 'table', headers: ['意象', '含义', '情感'], rows: [['淡酒急风', '借酒难御晚来风', '孤寒凄冷'], ['过雁', '传书旧识', '故国之思'], ['黄花', '菊花凋零', '容颜憔悴'], ['梧桐细雨', '夜雨滴愁', '哀怨无尽']] },
        { type: 'list', items: ['七组叠字开篇，动作—环境—心境递进', '意象叠加：酒、风、雁、花、梧桐、雨', '善用反问蓄势：怎敌、怎生、怎一个愁', '以声写愁：点点滴滴敲碎黄昏', '语言浅近而情致深婉', '个人之愁与时代离乱之悲相融'] },
        { type: 'tip', label: '拓展·婉约派', text: '李清照是<strong>婉约派</strong>的代表词人，与豪放派相对，婉约词多写<strong>儿女情长、离愁别绪</strong>，语言柔美含蓄、音律谐婉。李词前清丽后悲凉，善用白描与口语，被誉为「易安体」。其与苏轼、辛弃疾的豪放并立，构成宋词两大基本风格。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#4a3a5a" text-anchor="middle"><circle cx="100" cy="100" r="42" fill="#e8b0c4" stroke="#c0392b" stroke-width="2"/><text x="100" y="96">寻寻觅觅</text><text x="100" y="114">（起·动作）</text><circle cx="260" cy="100" r="42" fill="#cdb0d0" stroke="#8a5a9e" stroke-width="2"/><text x="260" y="96">冷清凄惨</text><text x="260" y="114">（承·心境）</text><circle cx="420" cy="100" r="42" fill="#a890c0" stroke="#5b4a9e" stroke-width="2"/><text x="420" y="96">意象叠加</text><text x="420" y="114">（转·铺景）</text><circle cx="580" cy="100" r="42" fill="#7b4fa0" stroke="#3a1a5e" stroke-width="2"/><text x="580" y="96">愁字了得</text><text x="580" y="114">（合·总愁）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="142" y1="100" x2="218" y2="100" marker-end="url(#l8m3)"/><line x1="302" y1="100" x2="378" y2="100" marker-end="url(#l8m3)"/><line x1="462" y1="100" x2="538" y2="100" marker-end="url(#l8m3)"/></g><defs><marker id="l8m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#4a3a5a" text-anchor="middle">脉络：动作 → 心境 → 铺景 → 总愁，愁网愈收愈紧</text></svg>', caption: '全词由寻觅起笔，经心境、铺景，终于「愁字了得」，愁绪层层加码。' },
        { type: 'list', items: ['李清照，宋代女词人，号易安居士，婉约派', '七组叠字开篇，千古绝唱', '意象叠加：酒、风、雁、花、梧桐、雨', '「这次第」指这情形，非「次序」', '善用反问蓄势，以声写愁', '主旨：晚年孤苦、国破家亡的深哀巨痛'] }
      ],
      exercises: [
        { type: 'choice', question: '《声声慢》开篇「寻寻觅觅，冷冷清清，凄凄惨惨戚戚」的妙处是？', options: ['随意堆砌形容词', '七组叠字由动作到环境到心境层层递进，音韵凄切', '描写欢快心情', '模仿乐府'], answer: '七组叠字由动作到环境到心境层层递进，音韵凄切', explanation: '「寻寻觅觅」写若有所失的动作，「冷冷清清」写孤寂环境，「凄凄惨惨戚戚」写悲苦心境，三层递转、声情并茂，创造性地以叠字开篇，把无形之愁写得可感可闻，是千古绝唱。' },
        { type: 'choice', question: '「雁过也，正伤心，却是旧时相识」中「雁」的意蕴是？', options: ['报春的喜讯', '传书之雁引发对亡夫与故国的思念', '单纯写景', '象征丰收'], answer: '传书之雁引发对亡夫与故国的思念', explanation: '古人以雁传书。李清照南渡后丈夫已逝、故乡遥隔，见北雁南飞，想起往昔「云中谁寄锦书来」的期盼，更添物是人非之痛，「旧时相识」反成伤心之源。' },
        { type: 'fill', question: '「满地黄花堆积，憔悴损」中，「黄花」指______（菊花 / 桂花），暗喻词人自身的凋零衰老。', answer: '菊花', explanation: '「黄花」即菊花，重阳前后盛开。此处菊花凋零堆积、憔悴不堪，正是词人晚年孤苦憔悴的自我写照，以花喻人，情景交融，哀婉深沉。' },
        { type: 'choice', question: '「这次第，怎一个愁字了得」中「这次第」意为？', options: ['这次的秩序', '这情形、这光景', '第二次', '次序排列'], answer: '这情形、这光景', explanation: '「次第」在诗词中多指情形、光景。「这次第」即「这种种情景」，词人言面对淡酒、急风、过雁、黄花、梧桐、细雨交织的凄凉光景，岂是一个「愁」字所能包容，极言悲愁之深广。' },
        { type: 'fill', question: '《声声慢》与《念奴娇·赤壁怀古》的风格差异是：李词属______派（婉约 / 豪放），苏词属______派（豪放 / 婉约）。', answer: '婉约|豪放', explanation: '李清照属婉约派，以细密意象写幽微哀愁，凄切深婉；苏轼属豪放派，以江山宏景写旷达胸襟，气象恢宏。二者一柔一刚、一悲婉一旷达，代表宋词两大基本风格。' }
      ]
    }
  );
})();
