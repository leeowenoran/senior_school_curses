/* ============================================================
 * 高一语文 · 必修 下册 · 第六单元 观察与批判（小说）
 * 5 课时：祝福 / 林教头风雪山神庙 / 装在套子里的人 / 促织 / 变形记
 * 数据注入：chinese.bx2.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list+keypoint+poem
 * 小说经典段落放入 poem 块，须准确；SVG 内部只用中文标注
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx2');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 祝福 ==================== */
    {
      id: 'bx2-u6-l1',
      name: '《祝福》',
      author: '鲁迅',
      chapter: '第六单元 观察与批判（小说）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近鲁迅与《祝福》的创作' },
        { type: 'paragraph', text: '鲁迅（1881—1936），原名周树人，字豫才，浙江绍兴人，中国现代文学的奠基人。他的小说集有《呐喊》《彷徨》《故事新编》，散文集《朝花夕拾》，杂文集《坟》《华盖集》等，以犀利冷峻的笔触揭示国民性，被誉为「民族魂」。' },
        { type: 'paragraph', text: '《祝福》写于 1924 年 2 月，最初发表于《东方杂志》，后收入小说集《彷徨》。其时新文化运动退潮，鲁迅在苦闷中更加关注底层妇女的悲惨命运，借一个农村妇女的一生，控诉封建礼教「吃人」的本质。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>短篇小说</strong>，采用<strong>「我」的限制性第一人称叙事</strong>与<strong>倒叙</strong>结构。小说以「祝福」这一鲁镇年终大典为环境与背景，把人物悲剧置于热闹喜庆的反差之中，形成强烈的<strong>以乐写哀</strong>效果。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3e9e2"/><rect x="40" y="60" width="280" height="190" rx="8" fill="#e8c9b0" stroke="#9c5a3a" stroke-width="2"/><text x="180" y="100" font-size="15" fill="#5b2e1a" text-anchor="middle">鲁镇·祝福</text><text x="180" y="130" font-size="13" fill="#7a4a2e" text-anchor="middle">爆竹声声·祭礼隆重</text><text x="180" y="160" font-size="13" fill="#7a4a2e" text-anchor="middle">阖家团圆·喜庆祥和</text><rect x="360" y="60" width="280" height="190" rx="8" fill="#cfd6da" stroke="#5b7a8a" stroke-width="2"/><text x="500" y="100" font-size="15" fill="#33485a" text-anchor="middle">祥林嫂</text><text x="500" y="130" font-size="13" fill="#33485a" text-anchor="middle">破碗空篮·形容枯槁</text><text x="500" y="160" font-size="13" fill="#33485a" text-anchor="middle">风雪夜·冻饿而死</text><path d="M320 150 L360 150" stroke="#c0392b" stroke-width="3" marker-end="url(#zx1)"/><text x="340" y="290" font-size="13" fill="#9c5a3a" text-anchor="middle">喜庆的「祝福」与冰冷的死亡，构成强烈反差</text><defs><marker id="zx1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '鲁镇人家在祝福中祈福，祥林嫂却在风雪里寂然死去。' },
        { type: 'heading', text: '二、情节梳理与倒叙结构' },
        { type: 'poem', text: '我给那些因为在近旁而极响的爆竹声惊醒，看见豆一般大的黄色的灯火光，接着又听得毕毕剥剥的鞭炮，是四叔家正在「祝福」了；知道已是五更将近时候。我在蒙胧中，又隐约听到远处的爆竹声联绵不断，似乎合成一天音响的浓云，夹着团团飞舞的雪花，拥抱了全市镇。我在这繁响的拥抱中，也懒散而且舒适，从白天以至初夜的疑虑，全给祝福空气一扫而空了，只觉得天地圣众歆享了牲醴和香烟，都醉醺醺的在空中蹒跚，豫备给鲁镇的人们以无限的幸福。' },
        { type: 'keypoint', label: '倒叙手法', text: '小说<strong>先写祥林嫂之死</strong>，再回叙她半生悲惨遭遇，结尾又回到祝福之夜。这种<strong>倒叙</strong>制造悬念，使「死亡」成为统领全篇的沉重基调；更让热闹的「祝福」与冰冷的死亡首尾呼应，深化批判。' },
        { type: 'keypoint', label: '「我」的叙事视角', text: '故事由<strong>返乡知识分子「我」</strong>的所见所闻所感展开。「我」对祥林嫂的死充满不安与负疚，却又无能为力，这一视角既增强真实感，也折射出启蒙者面对民众苦难时的<strong>彷徨与无力</strong>。' },
        { type: 'example', label: '分析示范', text: '小说为何要以鲁镇「祝福」的热闹景象收束全篇？<br><br><strong>解析</strong>：结尾写爆竹声声、天地圣众「豫备给鲁镇的人们以无限的幸福」，是<strong>以乐写哀、反差强化</strong>的笔法。在全镇沉浸于祝福喜庆之时，祥林嫂却已在祝福前夜凄然死去——<strong>众人的「幸福」正建立在弱者被吞噬的沉默之上</strong>。这 happy ending 式的祝福表象，反将封建礼教「吃人」而不自知的残酷推向极致，令读者在「舒适」中感到刺骨的悲凉。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf3ec"/><g font-size="13" text-anchor="middle"><rect x="30" y="50" width="170" height="120" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="115" y="95" fill="#5b1a12">结局·死亡</text><text x="115" y="120" fill="#5b1a12" font-size="12">（倒叙起点）</text><text x="115" y="145" fill="#5b1a12" font-size="12">风雪夜寂然死去</text><rect x="255" y="50" width="170" height="120" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="95" fill="#5b3b12">回叙·半生</text><text x="340" y="120" fill="#5b3b12" font-size="12">丧夫·改嫁·失子</text><text x="340" y="145" fill="#5b3b12" font-size="12">被厌弃·乞讨</text><rect x="480" y="50" width="170" height="120" rx="8" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="565" y="95" fill="#33485a">照应·祝福</text><text x="565" y="120" fill="#33485a" font-size="12">全镇喜庆</text><text x="565" y="145" fill="#33485a" font-size="12">死被无声淹没</text></g><path d="M200 110 h55 M425 110 h55" stroke="#c0392b" stroke-width="2.5" marker-end="url(#zx2)"/><text x="340" y="210" font-size="13" fill="#9c5a3a" text-anchor="middle">倒叙脉络：死 → 生 → 死，首尾以祝福闭合</text><defs><marker id="zx2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '倒叙从「死亡」起笔，回叙半生苦难，再归于祝福的冷漠。' },
        { type: 'heading', text: '三、人物形象分析' },
        { type: 'keypoint', label: '祥林嫂', text: '祥林嫂是旧中国下层劳动妇女的典型：她<strong>勤劳、善良、安分</strong>，却一再被命运抛入绝境——丧夫、被卖改嫁、丧子，最终被鲁镇社会当作「不洁」而排斥。她反复诉说阿毛的故事、向「我」追问灵魂有无，显出其<strong>麻木中的挣扎与对生存的最后眷恋</strong>。' },
        { type: 'warn', label: '易错·肖像与标题', text: '祥林嫂的<strong>四次肖像变化</strong>（初到鲁镇——再到鲁镇——沦为乞丐——死前）是解读其命运的关键，须抓住「脸色」「眼神」的递变。标题「<strong>祝福</strong>」绝非喜庆的点缀，而是<strong>反讽</strong>：祝福的礼俗本身正是逼死她的封建秩序的一部分，读时不可望文生义。' },
        { type: 'table', headers: ['人物', '身份', '对祥林嫂的态度', '形象意义'], rows: [['祥林嫂', '底层劳动妇女', '任人宰割、无力反抗', '封建礼教下的牺牲品'], ['鲁四老爷', '地主乡绅', '鄙弃、斥为「谬种」', '封建卫道者的冷酷'], ['柳妈', '善女人', '以迷信加重其精神重压', '麻木群众的无形戕害'], ['「我」', '知识分子', '同情却无力拯救', '启蒙者的彷徨与负疚']] },
        { type: 'keypoint', label: '鲁四老爷与柳妈', text: '鲁四老爷是<strong>封建礼教的化身</strong>，开口「谬种」、闭口「事理」，以「饿死事小，失节事大」的观念将祥林嫂逐出祝福；柳妈虽非恶意，却用「阴司锯刑」吓唬她，体现<strong>被礼教浸透的群众对同类的无形戕害</strong>。' },
        { type: 'list', items: ['倒叙结构：先写死亡再回叙，悬念与反差兼具', '以乐写哀：用祝福的喜庆反衬死亡的悲凉', '白描肖像：四次外貌变化勾勒命运轨迹', '对比烘托：鲁镇热闹与祥林嫂孤寂强烈对照', '限制性叙事：「我」的视角增强真实与无力感', '环境即人物：封建礼俗本身就是「凶手」'] },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '小说通过祥林嫂的悲惨一生，深刻揭露<strong>封建礼教与迷信思想「吃人」的本质</strong>，控诉旧社会对底层妇女肉体与精神的双重摧残，也表现了启蒙者在民众苦难面前的彷徨与反思。' },
        { type: 'tip', label: '拓展', text: '「礼教吃人」是鲁迅一以贯之的主题：从《狂人日记》「救救孩子」的呐喊，到《祝福》祥林嫂的寂灭，他不断揭示那套看似温良的伦理秩序如何吞噬鲜活生命。阅读时可联系《故乡》《阿 Q 正传》，体会鲁迅对国民性「哀其不幸，怒其不争」的复杂情感。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f3e9e2"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="150" height="90" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="105" y="90" fill="#5b3b12">祥林嫂之死</text><text x="105" y="115" fill="#5b4636" font-size="12">（倒叙起笔）</text><rect x="200" y="55" width="150" height="90" rx="8" fill="#e8893b" stroke="#c0392b" stroke-width="2"/><text x="275" y="90" fill="#fff">半生苦难</text><text x="275" y="115" fill="#fff" font-size="12">丧夫失子被弃</text><rect x="370" y="55" width="150" height="90" rx="8" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="445" y="90" fill="#33485a">祝福闭合</text><text x="445" y="115" fill="#33485a" font-size="12">以乐写哀</text><rect x="540" y="50" width="140" height="100" rx="8" fill="#9c5a3a" stroke="#7a3a1a" stroke-width="2"/><text x="610" y="85" fill="#fff">礼教吃人</text><text x="610" y="110" fill="#fff" font-size="12">批判主旨</text></g><path d="M180 100 h20 M350 100 h20 M520 100 h20" stroke="#9c5a3a" stroke-width="2.5" marker-end="url(#zx3)"/><text x="340" y="190" font-size="13" fill="#9c5a3a" text-anchor="middle">结构脉络：死 → 生 → 死，归于「礼教吃人」的控诉</text><defs><marker id="zx3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#9c5a3a"/></marker></defs></svg>', caption: '全篇以祥林嫂之死贯穿，最终指向对封建礼教「吃人」的批判。' },
        { type: 'list', items: ['鲁迅《祝福》，《彷徨》名篇，1924 年所作', '倒叙结构：先写死亡，回叙半生，再归祝福', '「我」的限制性叙事，折射启蒙者的无力', '祥林嫂：勤劳善良却被礼教吞噬的底层妇女', '鲁四老爷、柳妈皆体现礼教与迷信的戕害', '主旨：揭露封建礼教「吃人」的本质'] }
      ],
      exercises: [
        { type: 'choice', question: '《祝福》在叙事上最突出的特点是？', options: ['顺叙从头写起', '倒叙：先写祥林嫂之死，再回叙其半生', '第三人称全知视角', '以梦境贯穿全文'], answer: '倒叙：先写祥林嫂之死，再回叙其半生', explanation: '小说开篇即写祥林嫂在祝福前夜凄然死去，随后才回叙她丧夫、改嫁、失子、被弃的半生遭遇，结尾又回到祝福之夜。这种倒叙制造悬念、奠定悲凉基调，并让喜庆的「祝福」与冰冷的死亡首尾呼应，强化批判。' },
        { type: 'choice', question: '小说结尾描写鲁镇「祝福」的热闹景象，其作用是？', options: ['单纯交代节日习俗', '以乐写哀，用全镇喜庆反衬祥林嫂之死的悲凉', '说明祥林嫂也参加了祝福', '赞美鲁镇生活安乐'], answer: '以乐写哀，用全镇喜庆反衬祥林嫂之死的悲凉', explanation: '结尾写爆竹声声、天地圣众「豫备给鲁镇的人们以无限的幸福」，恰与祥林嫂在祝福前夜寂然死去的命运形成强烈反差。热闹的「幸福」表象反将封建秩序「吃人」而不自知的残酷推向极致，是以乐写哀的典范。' },
        { type: 'fill', question: '祥林嫂反复向「我」追问「______」（有没有灵魂 / 死后的事），表现她在麻木中对生存的最后眷恋。', answer: '灵魂|有没有灵魂|死后的事', explanation: '祥林嫂临死前向返乡的「我」追问人死后究竟有没有灵魂、有没有地狱，能否与死去的儿子相见。这一问既显其精神已被迷信折磨得惶惑不安，也透露出她对亲情与人世最后的眷恋，是人物麻木中挣扎的动人一笔。' },
        { type: 'choice', question: '下列对鲁四老爷形象的理解，正确的是？', options: ['同情祥林嫂的善人', '封建礼教的卫道者，冷酷鄙弃祥林嫂', '帮助祥林嫂的人', '小说中的喜剧角色'], answer: '封建礼教的卫道者，冷酷鄙弃祥林嫂', explanation: '鲁四老爷开口便斥祥林嫂为「谬种」，以「饿死事小，失节事大」的礼教观念将再嫁的她排斥于祝福之外，是封建秩序与礼教的化身。他的冷酷并非个人恶意，而是制度性「吃人」的体现。' },
        { type: 'choice', question: '《祝福》的主旨可以概括为？', options: ['赞美鲁镇风俗', '揭露封建礼教与迷信「吃人」的本质', '讲述一个爱情故事', '歌颂知识分子的成功'], answer: '揭露封建礼教与迷信「吃人」的本质', explanation: '祥林嫂的死，表面是穷病而死，实质是被封建礼教、族权、夫权与迷信思想层层绞杀。鲁迅借这一个体的悲剧，深刻揭露旧伦理秩序吞噬底层生命的本质，并寄寓启蒙者的反思，这是全文的核心主旨。' }
      ]
    },

    /* ==================== 第2课 林教头风雪山神庙 ==================== */
    {
      id: 'bx2-u6-l2',
      name: '《林教头风雪山神庙》',
      author: '施耐庵',
      chapter: '第六单元 观察与批判（小说）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近《水浒传》与作者' },
        { type: 'paragraph', text: '施耐庵（约 1296—约 1370），元末明初小说家，一般认为是长篇小说《水浒传》的主要作者。《水浒传》是我国第一部以农民起义为题材的长篇章回体小说，描写北宋末年一百零八位好汉聚义梁山的故事。' },
        { type: 'paragraph', text: '本文节选自《水浒传》第十回（七十一回本），是林冲故事的高潮。林冲本是东京八十万禁军枪棒教头，因高俅养子高衙内垂涎其妻，屡遭陷害，最终被逼上梁山。本回写他发配沧州后看守草料场、雪夜复仇的关键转折。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>古典白话小说</strong>（章回体）。其语言<strong>半文半白、通俗生动</strong>，叙事<strong>环环相扣、张弛有度</strong>，善于在矛盾冲突中刻画人物，并通过<strong>环境描写推动情节</strong>，代表了明代白话小说的典型风貌。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2f6"/><rect x="280" y="120" width="120" height="70" rx="8" fill="#e85d3d" stroke="#c0392b" stroke-width="2"/><text x="340" y="162" font-size="15" fill="#fff" text-anchor="middle">草料场</text><g fill="#7a9b3e"><circle cx="150" cy="110" r="30"/><text x="150" y="115" font-size="13" fill="#fff" text-anchor="middle">林冲</text></g><g fill="#4a7de0"><circle cx="530" cy="110" r="30"/><text x="530" y="115" font-size="13" fill="#fff" text-anchor="middle">陆谦</text></g><g fill="#888"><circle cx="150" cy="220" r="22"/><text x="150" y="225" font-size="12" fill="#fff" text-anchor="middle">风雪</text></g><g fill="#888"><circle cx="530" cy="220" r="22"/><text x="530" y="225" font-size="12" fill="#fff" text-anchor="middle">山神庙</text></g><text x="340" y="285" font-size="13" fill="#33485a" text-anchor="middle">风雪推动：草厅被雪压塌 → 林冲夜宿山神庙 → 听到阴谋</text></svg>', caption: '一场风雪，把林冲从「隐忍苟安」逼向「奋起反抗」。' },
        { type: 'heading', text: '二、情节梳理与风雪环境' },
        { type: 'poem', text: '正是严冬天气，彤云密布，朔风渐起，却早纷纷扬扬卷下一天大雪来。\n那雪正下得紧。\n……\n林冲听那三个人时，一个是差拨，一个是陆虞候，一个是富安。\n差拨道：「……便逃得性命时，烧了大军草料场，也得个死罪。」\n陆虞候道：「如今才知公 pil 的好处……林冲今番直吃我们对付了！」\n……\n林冲轻轻把石头掇开，挺着花枪，左手拽开庙门，大喝一声：「泼贼那里去！」' },
        { type: 'keypoint', label: '情节脉络', text: '情节围绕「<strong>逼</strong>」字展开：<strong>接管草料场</strong>（暂得苟安）→ <strong>雪夜沽酒</strong>（草厅被雪压塌）→ <strong>夜宿山神庙</strong>（避雪）→ <strong>隔墙听阴谋</strong>（得知被害真相）→ <strong>杀敌复仇</strong>（手刃陆谦）。风雪是贯穿其中的隐形推手。' },
        { type: 'keypoint', label: '风雪的作用', text: '风雪环境描写<strong>推动情节</strong>：正因为雪大，草厅倒塌，林冲才去山神庙安身，从而<strong>巧合地听到陆谦等人的阴谋</strong>；又<strong>烘托人物</strong>：漫天风雪映衬林冲孤愤寒凉的心境，也为复仇的痛快渲染气氛。' },
        { type: 'example', label: '分析示范', text: '文中写「那雪正下得紧」，一个「紧」字好在哪里？<br><br><strong>解析</strong>：这是古典小说炼字的范例。「紧」字既写<strong>雪势又大又急</strong>，渲染出天寒地冻、危机四伏的氛围；又暗含<strong>情节之「紧」</strong>——矛盾即将爆发、杀机步步逼近，一字双关。相比「大」「猛」等泛词，「紧」更见凝练与张力，足见白话小说语言之妙。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="13" text-anchor="middle"><rect x="30" y="50" width="150" height="120" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="105" y="90" fill="#5b3b12">接管草料场</text><text x="105" y="115" fill="#5b4636" font-size="12">暂得苟安</text><text x="105" y="138" fill="#5b4636" font-size="12">隐忍</text><rect x="210" y="50" width="150" height="120" rx="8" fill="#e8893b" stroke="#c0392b" stroke-width="2"/><text x="285" y="90" fill="#fff">雪压草厅</text><text x="285" y="115" fill="#fff" font-size="12">被迫离舍</text><rect x="390" y="50" width="150" height="120" rx="8" fill="#e85d8d" stroke="#c0392b" stroke-width="2"/><text x="465" y="90" fill="#fff">山神庙听谋</text><text x="465" y="115" fill="#fff" font-size="12">知被害真相</text><rect x="570" y="45" width="110" height="130" rx="8" fill="#9c1a2e" stroke="#7a0f1a" stroke-width="2"/><text x="625" y="90" fill="#fff">复仇</text><text x="625" y="115" fill="#fff" font-size="12">手刃陆谦</text><text x="625" y="138" fill="#fff" font-size="12">逼上梁山</text></g><path d="M180 110 h28 M360 110 h28 M540 110 h28" stroke="#c0392b" stroke-width="2.5" marker-end="url(#lf1)"/><text x="340" y="210" font-size="13" fill="#33485a" text-anchor="middle">风雪推动：苟安 → 离舍 → 听谋 → 反抗</text><defs><marker id="lf1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '风雪一步步把林冲推向「逼上梁山」的绝路。' },
        { type: 'heading', text: '三、人物性格与转变' },
        { type: 'keypoint', label: '林冲的性格转变', text: '林冲的性格经历从<strong>「忍」到「反」</strong>的根本转变：起初逆来顺受、委曲求全（发配路上不让杀公差、野猪林被救后仍不愿反抗）；直到<strong>风雪山神庙亲耳听见陆谦必欲置其死地</strong>，幻想彻底破灭，才果断杀敌、走上反抗之路。' },
        { type: 'warn', label: '易错·性格辨析', text: '林冲并非一开始就「官逼民反」的斗士，其<strong>前期「忍」不等于懦弱无能</strong>——他武艺高强、有血性，只是受制于「教头」身份与对体制的幻想。转变的关键节点是<strong>「幻想破灭」</strong>，而非单纯被人欺负。读时须把握其性格发展的合理性。' },
        { type: 'table', headers: ['阶段', '表现', '性格侧面'], rows: [['发配前', '遭高衙内欺凌、误入白虎堂', '安分守己、心存幻想'], ['发配中', '野猪林险遭害、仍劝鲁智深', '逆来顺受、委曲求全'], ['看守草料场', '修屋、沽酒、安度残冬', '随遇而安、暂求苟活'], ['山神庙', '听阴谋、杀陆谦、投梁山', '忍无可忍、奋起反抗']] },
        { type: 'keypoint', label: '语言特点', text: '作为<strong>古典白话小说</strong>，本文语言<strong>通俗晓畅又精炼传神</strong>：对话符合身份（陆谦狡诈、差拨势利），动作描写干净利落（「掇开」「拽开」「挺着花枪」），环境白描如画。这种「文不甚深、言不甚俗」的语体，正是明代白话小说的魅力所在。' },
        { type: 'list', items: ['情节围绕「逼」字：草料场—风雪—山神庙—复仇', '风雪环境：推动情节、烘托人物、渲染气氛', '林冲性格：由隐忍苟安到奋起反抗的转变', '炼字范例：「紧」字双关雪势与危机', '古典白话：通俗生动、对话传神、白描如画', '主题：官逼民反、逼上梁山的社会根源'] },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '本回通过林冲从「忍」到「反」的悲剧性转折，揭示<strong>「官逼民反、逼上梁山」</strong>的深刻主题：在腐朽黑暗的封建统治下，即便是安分守己的良民，也终将被逼走上反抗之路。' },
        { type: 'tip', label: '拓展', text: '林冲是《水浒传》中「逼上梁山」最典型的代表。与鲁智深「主动反抗」、武松「快意复仇」不同，林冲的「反」是<strong>长期压抑后的总爆发</strong>，更具悲剧厚度。金圣叹评点《水浒传》极重林冲故事，称其「算得到、熬得住、把得牢、做得彻」，可借以体会古典小说评点之法。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef2f6"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="150" height="90" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="105" y="90" fill="#5b3b12">忍·苟安</text><text x="105" y="115" fill="#5b4636" font-size="12">幻想体制</text><rect x="200" y="55" width="150" height="90" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="275" y="90" fill="#5b3b12">雪夜离舍</text><text x="275" y="115" fill="#5b4636" font-size="12">风雪推动</text><rect x="370" y="55" width="150" height="90" rx="8" fill="#e8893b" stroke="#c0392b" stroke-width="2"/><text x="445" y="90" fill="#fff">幻想破灭</text><text x="445" y="115" fill="#fff" font-size="12">闻阴谋</text><rect x="540" y="50" width="140" height="100" rx="8" fill="#9c1a2e" stroke="#7a0f1a" stroke-width="2"/><text x="610" y="85" fill="#fff">反·上山</text><text x="610" y="110" fill="#fff" font-size="12">逼上梁山</text></g><path d="M180 100 h20 M350 100 h20 M520 100 h20" stroke="#c0392b" stroke-width="2.5" marker-end="url(#lf2)"/><text x="340" y="190" font-size="13" fill="#33485a" text-anchor="middle">性格脉络：忍 → 疑 → 破 → 反，官逼民反</text><defs><marker id="lf2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '林冲由「忍」到「反」的转折，正是「官逼民反」的生动写照。' },
        { type: 'list', items: ['施耐庵《水浒传》第十回，古典白话章回小说', '情节：草料场—风雪—山神庙—复仇，环环相扣', '风雪既是自然环境，更是推动情节的隐形之手', '林冲：从隐忍苟安到奋起反抗的性格转变', '炼字：「紧」字双关雪势与危机，凝练传神', '主旨：官逼民反、逼上梁山的社会批判'] }
      ],
      exercises: [
        { type: 'choice', question: '《林教头风雪山神庙》中「风雪」的主要作用是？', options: ['单纯描写自然景色', '推动情节（草厅倒塌、夜宿庙中听阴谋）并烘托人物', '交代故事发生在夏天', '与主题无关'], answer: '推动情节（草厅倒塌、夜宿庙中听阴谋）并烘托人物', explanation: '风雪并非闲笔：雪大压塌草厅，迫使林冲夜宿山神庙，从而巧合听到陆谦等人「火烧草料场」的阴谋，直接触发复仇。同时风雪渲染天寒地冻、危机四伏的氛围，烘托林冲孤愤心境，是情节与人物的重要推手。' },
        { type: 'choice', question: '林冲性格转变的关键触发点是？', options: ['主动想造反', '在山神庙亲耳听见陆谦必欲置其死地的阴谋，幻想破灭', '鲁智深强迫他反抗', '高俅向他道歉'], answer: '在山神庙亲耳听见陆谦必欲置其死地的阴谋，幻想破灭', explanation: '林冲前期一再忍让，仍对体制心存幻想。直到风雪山神庙中隔墙听见陆谦等人非杀他不可的密谋，才彻底认清「容不得我」的真相，幻想破灭，于是果断杀敌、投奔梁山。这是其性格由忍到反的转折点。' },
        { type: 'fill', question: '文中写「那雪正下得______」（紧 / 大），一字双关雪势之疾与危机之迫。', answer: '紧', explanation: '「紧」字既形容雪又大又急，渲染天寒地冻、杀机逼近的氛围，又暗指情节之「紧」——矛盾即将爆发。相比「大」「猛」等泛词更凝练传神，是古典白话小说炼字的典范，金圣叹评点亦极赏此字。' },
        { type: 'choice', question: '本文所属的文体及语言特点是？', options: ['文言散文，艰深古奥', '古典白话章回小说，通俗生动、白描传神', '现代诗歌', '外国翻译小说'], answer: '古典白话章回小说，通俗生动、白描传神', explanation: '本文节选自《水浒传》，属古典白话章回体小说。其语言半文半白、通俗晓畅，对话符合身份、动作干净利落、环境白描如画，体现了明代白话小说「文不甚深、言不甚俗」的典型风貌。' },
        { type: 'choice', question: '《林教头风雪山神庙》的主旨可概括为？', options: ['歌颂高俅的公正', '揭示「官逼民反、逼上梁山」的主题', '讲述林冲的家庭生活', '宣扬安分守己'], answer: '揭示「官逼民反、逼上梁山」的主题', explanation: '林冲本是安分守己的禁军教头，却在腐朽统治的层层逼迫下走投无路、愤而反抗。小说借其从忍到反的悲剧转折，深刻揭示「官逼民反、逼上梁山」的社会根源，是对黑暗封建统治的沉痛控诉。' }
      ]
    },

    /* ==================== 第3课 装在套子里的人 ==================== */
    {
      id: 'bx2-u6-l3',
      name: '《装在套子里的人》',
      author: '契诃夫',
      chapter: '第六单元 观察与批判（小说）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与创作背景' },
        { type: 'paragraph', text: '安东·巴甫洛维奇·契诃夫（1860—1904），俄国批判现实主义作家、戏剧家，与法国的莫泊桑、美国的欧·亨利并称为「世界三大短篇小说巨匠」。代表作有《变色龙》《小公务员之死》《第六病室》及戏剧《樱桃园》等。' },
        { type: 'paragraph', text: '《装在套子里的人》写于 1898 年。当时俄国正处于沙皇专制统治之下，社会气氛压抑，保守势力顽固，人们害怕任何变动。契诃夫以夸张讽刺的笔法，塑造了「套中人」别里科夫这一象征性形象，批判僵化保守的社会心理。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>短篇小说</strong>，采用<strong>夸张与讽刺</strong>手法。契诃夫善于从<strong>日常生活细节</strong>中提炼典型，以看似平淡的叙事包裹尖锐的社会批判，是批判现实主义「以小见大」的典范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef0f3"/><circle cx="340" cy="150" r="70" fill="#cfd6da" stroke="#5b7a8a" stroke-width="3"/><circle cx="340" cy="150" r="46" fill="#e8c9b0" stroke="#9c5a3a" stroke-width="2"/><circle cx="340" cy="150" r="14" fill="#5b7a8a"/><text x="340" y="60" font-size="14" fill="#33485a" text-anchor="middle">伞套·雨鞋·棉大衣</text><text x="340" y="250" font-size="14" fill="#33485a" text-anchor="middle">别里科夫：把自己装在层层「套子」里</text><g fill="#9c5a3a" font-size="12" text-anchor="middle"><text x="200" y="150">雨鞋</text><text x="480" y="150">雨伞</text><text x="340" y="238">棉大衣</text></g></svg>', caption: '别里科夫连雨鞋、雨伞、棉大衣都要套起来，更别提思想。' },
        { type: 'heading', text: '二、人物形象与「套子」' },
        { type: 'poem', text: '他也真怪，即使在最晴朗的日子，也穿上雨鞋，带着雨伞，而且一定穿着暖和的棉大衣。\n他总是把雨伞装在套子里，把表装在灰色的鹿皮套子里；就连那削铅笔的小刀也是装在套子里的。\n他的脸也好像蒙着套子，因为他老是把它藏在竖起的衣领里。\n他戴黑眼镜，穿羊毛衫，用棉花堵住耳朵眼。\n总之，这人总想把自己包在壳子里，仿佛要为自己制造一个套子，好隔绝人世，不受外界影响。' },
        { type: 'keypoint', label: '「套子」的象征', text: '别里科夫的「套子」有多重含义：<strong>实物之套</strong>（雨鞋、雨伞、棉大衣、表套）——<strong>行为之套</strong>（总想与世隔绝）——<strong>思想之套</strong>（害怕一切新事物、惟官府法令是从）。「套子」象征<strong>保守、僵化、恐惧变革</strong>的奴隶心理。' },
        { type: 'keypoint', label: '典型意义', text: '别里科夫是<strong>「套中人」的典型</strong>：他并非大恶之人，却以「千万别出乱子」为人生信条，用陈规旧律束缚自己、也无形中压制周围的人。这一形象超越了时代与国界，成为<strong>因循守旧、害怕进步</strong>者的代名词。' },
        { type: 'example', label: '分析示范', text: '作者为何要用极度夸张的手法写别里科夫的穿戴？<br><br><strong>解析</strong>：契诃夫写别里科夫「最晴朗的日子也穿雨鞋、带雨伞、穿棉大衣」，乃至「削铅笔的小刀也装在套子里」，是<strong>漫画式的夸张</strong>。这种看似荒诞的描写，把一种抽象的「恐惧变革、自我封闭」的心理<strong>外化为可触可感的滑稽形象</strong>，既令人发笑，又令人深思——笑过之后，读者看到的是被专制土壤孕育出的畸形人格，讽刺效果由此而生。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="270" height="130" rx="8" fill="#cfd6da" stroke="#5b7a8a" stroke-width="2"/><text x="175" y="90" fill="#33485a">套子之内·别里科夫</text><text x="175" y="118" fill="#33485a" font-size="12">恐惧新事物</text><text x="175" y="142" fill="#33485a" font-size="12">惟旧律是从</text><text x="175" y="166" fill="#33485a" font-size="12">窒息而僵化</text><rect x="370" y="50" width="270" height="130" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="505" y="90" fill="#3e6b2e">套子之外·新生活</text><text x="505" y="118" fill="#3e6b2e" font-size="12">华连卡姐弟</text><text x="505" y="142" fill="#3e6b2e" font-size="12">活泼·自由·求变</text><text x="505" y="166" fill="#3e6b2e" font-size="12">生机与希望</text></g><path d="M310 115 h60" stroke="#c0392b" stroke-width="3" marker-end="url(#tb1)"/><text x="340" y="210" font-size="13" fill="#33485a" text-anchor="middle">保守僵化 vs 活泼求变：两种人生的对照</text><defs><marker id="tb1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '「套子」内外：一边窒息僵化，一边自由生机。' },
        { type: 'heading', text: '三、艺术手法与对照' },
        { type: 'keypoint', label: '夸张与讽刺', text: '小说以<strong>夸张</strong>凸现人物的荒谬（晴天穿雨鞋），以<strong>讽刺</strong>揭示其滑稽背后的可悲。讽刺不靠尖刻谩骂，而靠<strong>平静叙述中的反差</strong>——越是郑重地写套子，越显其荒唐，这是契诃夫式讽刺的精髓。' },
        { type: 'warn', label: '易错·死因辨析', text: '别里科夫的死，<strong>并非被谁杀害</strong>，而是因看到华连卡姐弟骑车这种「不合礼法」的新鲜事受到刺激，又在冲突中出乖露丑，最终在羞惧交加中病死。他的死说明<strong>「套子」本身足以扼杀生命</strong>，也暗示旧势力虽可笑却仍有统治力。' },
        { type: 'table', headers: ['对照项', '别里科夫（套子内）', '华连卡姐弟（套子外）'], rows: [['对人生态度', '恐惧变革、墨守成规', '活泼开朗、热爱新事物'], ['行为方式', '自我封闭、隔绝人世', '骑车游玩、自由率真'], ['结局', '在羞惧中病死', '继续拥抱鲜活的生活'], ['象征意义', '保守僵化的旧势力', '生机勃勃的新力量']] },
        { type: 'keypoint', label: '叙事特色', text: '小说采用<strong>「故事中套故事」</strong>的框架：由中学教师布尔金讲述别里科夫的故事，再由兽医伊万内奇议论收束。这种<strong>旁观者转述</strong>的视角，使批判更显客观冷峻，也暗示「套中人」现象并非个别。' },
        { type: 'list', items: ['夸张讽刺：以漫画式穿戴写抽象的保守心理', '象征手法：「套子」= 恐惧变革、自我封闭的奴隶性', '典型形象：别里科夫成为因循守旧者的代名词', '对照烘托：套子内外两种人生形成强烈反差', '框架叙事：教师转述+兽医议论，冷峻客观', '批判指向：沙皇专制下僵化保守的社会心理'] },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '小说通过「套中人」别里科夫，批判<strong>沙皇专制时代保守、僵化、害怕一切变革</strong>的社会心理，揭示旧势力对人的扭曲与扼杀，呼唤打破精神「套子」、拥抱自由与进步。' },
        { type: 'tip', label: '拓展', text: '「套中人」作为一种精神症候，并不只属于十九世纪的俄国。今天，当人固守成见、拒绝新知、害怕走出舒适区时，仍未完全走出「套子」。契诃夫的讽刺提醒我们：<strong>真正的危险往往不是某个人，而是那套让人不敢越雷池一步的陈旧秩序与心理惯性</strong>。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef0f3"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="170" height="90" rx="8" fill="#cfd6da" stroke="#5b7a8a" stroke-width="2"/><text x="115" y="90" fill="#33485a">实物之套</text><text x="115" y="115" fill="#33485a" font-size="12">雨鞋雨伞</text><rect x="220" y="55" width="170" height="90" rx="8" fill="#a9bcc4" stroke="#5b7a8a" stroke-width="2"/><text x="305" y="90" fill="#33485a">行为之套</text><text x="305" y="115" fill="#33485a" font-size="12">隔绝人世</text><rect x="410" y="55" width="170" height="90" rx="8" fill="#7e939c" stroke="#33485a" stroke-width="2"/><text x="495" y="90" fill="#fff">思想之套</text><text x="495" y="115" fill="#fff" font-size="12">恐惧变革</text><rect x="600" y="50" width="80" height="100" rx="8" fill="#9c1a2e" stroke="#7a0f1a" stroke-width="2"/><text x="640" y="90" fill="#fff">批判</text><text x="640" y="115" fill="#fff" font-size="12">守旧</text></g><path d="M200 100 h20 M390 100 h20 M580 100 h20" stroke="#c0392b" stroke-width="2.5" marker-end="url(#tb2)"/><text x="340" y="190" font-size="13" fill="#33485a" text-anchor="middle">三层「套子」递进：由物及心，终成批判</text><defs><marker id="tb2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '「套子」由实物到思想层层包裹，最终指向对守旧心理的批判。' },
        { type: 'list', items: ['契诃夫，俄国批判现实主义，世界短篇小说巨匠', '别里科夫：把自己装在「套子」里的保守典型', '套子象征：恐惧变革、自我封闭、僵化守旧', '手法：夸张讽刺，以小见大，平静中见荒唐', '对照：套子内外两种人生，新旧力量交锋', '主旨：批判专制下保守心理，呼唤打破精神套子'] }
      ],
      exercises: [
        { type: 'choice', question: '《装在套子里的人》中「套子」最主要的象征意义是？', options: ['雨具和衣物', '保守、僵化、恐惧变革的奴隶心理', '一种流行时装', '政府的奖赏'], answer: '保守、僵化、恐惧变革的奴隶心理', explanation: '别里科夫的雨鞋、雨伞、棉大衣等实物之套，外化为他对新事物的恐惧与对旧律的盲从，象征一种自我封闭、因循守旧的精神状态。「套子」早已超越衣物，成为僵化保守社会心理的代名词。' },
        { type: 'choice', question: '作者用「晴天也穿雨鞋、带雨伞」的写法，属于什么手法？', options: ['写实白描', '夸张与讽刺', '浪漫主义抒情', '意识流'], answer: '夸张与讽刺', explanation: '契诃夫以漫画式夸张写别里科夫即使在最晴朗的日子也全副「套子」武装，把抽象的保守心理外化为滑稽形象。这种平静叙述中的反差，令人发笑又引人深思，是典型的契诃夫式夸张讽刺，而非纯写实。' },
        { type: 'fill', question: '与别里科夫形成对照的「套子之外」人物是______（华连卡 / 鲁四老爷）姐弟，代表活泼求变的新生活。', answer: '华连卡', explanation: '华连卡姐弟骑车、唱歌、自由率真，与别里科夫的自我封闭形成鲜明对照，象征着生机勃勃、敢于接受新事物的力量。正是他们带来的「新鲜事」刺激了别里科夫，成为情节转折的触媒。' },
        { type: 'choice', question: '别里科夫最终的结局是？', options: ['被人杀害', '在羞惧交加中病死', '升官发财', '远走他乡'], answer: '在羞惧交加中病死', explanation: '别里科夫并非被谁杀死，而是因看到华连卡姐弟骑车等「不合礼法」的新鲜事受刺激，又在冲突中出乖露丑，最终在羞愤恐惧中病死。他的死说明「套子」本身足以扼杀生命，旧势力虽可笑却仍有压迫力。' },
        { type: 'choice', question: '《装在套子里的人》的主旨是？', options: ['赞美沙皇专制', '批判保守僵化、恐惧变革的社会心理', '提倡人人都穿雨鞋', '描写一场婚礼'], answer: '批判保守僵化、恐惧变革的社会心理', explanation: '小说借「套中人」别里科夫这一典型，揭示沙皇专制时代人们因恐惧而自我封闭、墨守成规的精神病态，批判旧秩序对人的扭曲，并呼唤打破精神套子、拥抱自由与进步，具有超越时代的意义。' }
      ]
    },

    /* ==================== 第4课 促织 ==================== */
    {
      id: 'bx2-u6-l4',
      name: '《促织》',
      author: '蒲松龄',
      chapter: '第六单元 观察与批判（小说）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近蒲松龄与《聊斋志异》' },
        { type: 'paragraph', text: '蒲松龄（1640—1715），字留仙，一字剑臣，号柳泉居士，山东淄川人。清代文学家。他屡试不第，长期做塾师，倾毕生精力写成文言短篇小说集《聊斋志异》，借狐鬼花妖寄托孤愤，讽刺现实。' },
        { type: 'paragraph', text: '《聊斋志异》共近五百篇，多写狐鬼奇异故事，表面志怪，实则「寄托之笔」。《促织》是其中著名的一篇，借一只蟋蟀的生死浮沉，写尽封建剥削下小民的辛酸，是文言小说中「讽喻现实」的杰作。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>文言小说（笔记体志怪）</strong>：用<strong>简练的文言</strong>叙事，情节曲折离奇却细节逼真。它继承了史传与唐传奇的叙事传统，又融入民间说书式的起伏，是<strong>「以异写常、以幻写真」</strong>的典范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3eee2"/><rect x="40" y="70" width="240" height="170" rx="8" fill="#e8c9b0" stroke="#9c5a3a" stroke-width="2"/><text x="160" y="120" font-size="14" fill="#5b2e1a" text-anchor="middle">成名一家</text><text x="160" y="150" font-size="13" fill="#7a4a2e" text-anchor="middle">征虫破家</text><text x="160" y="180" font-size="13" fill="#7a4a2e" text-anchor="middle">子化蟋蟀</text><rect x="400" y="70" width="240" height="170" rx="8" fill="#cfd6da" stroke="#5b7a8a" stroke-width="2"/><text x="520" y="120" font-size="14" fill="#33485a" text-anchor="middle">宫廷·官府</text><text x="520" y="150" font-size="13" fill="#33485a" text-anchor="middle">岁征促织</text><text x="520" y="180" font-size="13" fill="#33485a" text-anchor="middle">层层盘剥</text><path d="M280 155 L400 155" stroke="#c0392b" stroke-width="3" marker-end="url(#cz1)"/><text x="340" y="285" font-size="13" fill="#9c5a3a" text-anchor="middle">一只蟋蟀，牵动一家生死与官府荣辱</text><defs><marker id="cz1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '成名一家的命运，全系于一只被迫进贡的促织。' },
        { type: 'heading', text: '二、原文通读（核心段落）' },
        { type: 'poem', text: '宣德间，宫中尚促织之戏，岁征民间。此物故非西产；有华阴令欲媚上官，以一头进，试使斗而才，因责常供。令以责之里正。市中游侠儿得佳者笼养之，昂其直，居为奇货。里胥猾黠，假此科敛丁口，每责一头，辄倾数家之产。\n……\n成反复自念，得无教我猎虫所耶？细瞻景状，与村东大佛阁逼似。乃强起扶杖，执图诣寺后，有古陵蔚起。循陵而走，见蹲石鳞鳞，俨然类画。遂于蒿莱中侧听徐行，似寻针芥。而心目耳力俱穷，绝无踪响。冥搜未已，一癞头蟆猝然跃去。成益愕，急逐趁之，蟆入草间。蹑迹披求，见有虫伏棘根。遽扑之，入石穴中。掭以尖草，不出；以筒水灌之，始出，状极俊健。逐而得之。审视，巨身修尾，青项金翅。大喜，笼归。' },
        { type: 'keypoint', label: '情节之「奇」', text: '小说情节大起大落：<strong>征虫—失虫—得虫—化虫—献虫—荣身</strong>。最奇处在于成子误毙促织后投井，魂化俊健小虫，助父解脱，最终「田百顷、楼阁万椽」。以<strong>子化虫</strong>的荒诞写<strong>真实的血泪</strong>，是「以幻写真」的高明。' },
        { type: 'keypoint', label: '叙事特点', text: '文言小说叙事<strong>简净而跌宕</strong>：写寻虫一段，由「图」而「寺」而「陵」而「蟆」而「虫」，层层铺垫、悬念迭生；写斗虫则尺水兴波、惊心动魄。文字极省却极有张力，可见唐传奇以来文言叙事的功力。' },
        { type: 'example', label: '分析示范', text: '「里胥猾黠，假此科敛丁口，每责一头，辄倾数家之产」一句揭示了什么？<br><br><strong>解析</strong>：这句写<strong>官府借「征促织」之名横征暴敛</strong>。「假此」点明是借题发挥，「辄倾数家之产」极言盘剥之重——为凑一只蟋蟀，竟能逼垮好几户人家。它揭示了悲剧的根源不在虫、而在<strong>封建统治者的荒嬉与胥吏的贪暴</strong>，为全文批判定下基调，这正是「以小虫写大患」的笔法。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf3ec"/><g font-size="13" text-anchor="middle"><rect x="20" y="50" width="110" height="120" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="75" y="90" fill="#5b3b12">岁征</text><text x="75" y="115" fill="#5b4636" font-size="12">宫中尚戏</text><rect x="145" y="50" width="110" height="120" rx="8" fill="#e8893b" stroke="#c0392b" stroke-width="2"/><text x="200" y="90" fill="#fff">失虫</text><text x="200" y="115" fill="#fff" font-size="12">子惧投井</text><rect x="270" y="50" width="110" height="120" rx="8" fill="#7a9b3e" stroke="#3e6b2e" stroke-width="2"/><text x="325" y="90" fill="#fff">得虫</text><text x="325" y="115" fill="#fff" font-size="12">魂化俊虫</text><rect x="395" y="50" width="110" height="120" rx="8" fill="#4a7de0" stroke="#2e6fae" stroke-width="2"/><text x="450" y="90" fill="#fff">献虫</text><text x="450" y="115" fill="#fff" font-size="12">大悦上官</text><rect x="520" y="45" width="130" height="130" rx="8" fill="#9c1a2e" stroke="#7a0f1a" stroke-width="2"/><text x="585" y="90" fill="#fff">荣身</text><text x="585" y="115" fill="#fff" font-size="12">田产累万</text><text x="585" y="138" fill="#fff" font-size="12">荒诞结局</text></g><path d="M130 110 h15 M255 110 h15 M380 110 h15 M505 110 h15" stroke="#c0392b" stroke-width="2.5" marker-end="url(#cz2)"/><text x="340" y="210" font-size="13" fill="#9c5a3a" text-anchor="middle">情节起伏：征 → 失 → 化 → 献 → 荣，以幻写真</text><defs><marker id="cz2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '一波三折的情节，以「子化蟋蟀」的荒诞写尽现实血泪。' },
        { type: 'heading', text: '三、文言知识与手法' },
        { type: 'keypoint', label: '文言实词', text: '本文实词须细辨：<strong>直</strong>——通「值」，价值（「昂其直」＝抬高它的价钱）；<strong>售</strong>——古义指「买」（今义「卖」，「亦无售者」＝也没有买的人）；<strong>造</strong>——到……去、拜访（「径造庐访成」＝直接登门拜访成名）。一词多义与古今异义最易误读。' },
        { type: 'warn', label: '易错·词类活用与通假', text: '「昂其直」的「昂」是<strong>形容词的使动用法</strong>（使……抬高）；「成然之」的「然」是<strong>意动用法</strong>（以……为然，认为对）；「而高其直」的「高」同样是使动。又「裁」通「才」（「手裁举」），读时须识破。这些活用与通假是文言阅读的拦路虎。' },
        { type: 'table', headers: ['词语', '文中义', '例句/辨析'], rows: [['直', '通「值」，价值', '昂其直（抬高价钱）'], ['售', '古义：买（今义：卖）', '亦无售者（无人买）'], ['造', '到……去、拜访', '径造庐访成（登门拜访）'], ['昂/高', '使动：使……抬高', '昂其直、高其直'], ['然', '意动：以……为然', '成然之（认为对）'], ['裁', '通「才」', '手裁举（手刚举起）']] },
        { type: 'keypoint', label: '讽刺笔法', text: '小说结尾写成名因献虫「入邑庠」「田百顷、楼阁万椽」，最后一句「<strong>故天子一跬步，皆关民命，不可忽也</strong>」是全文的<strong>点睛之笔</strong>——看似劝谏帝王谨慎，实则以反语式沉痛，点明百姓命运竟系于帝王一念娱乐，讽刺入骨。' },
        { type: 'list', items: ['文言小说：简净跌宕，以幻写真、以异写常', '情节：征虫—失虫—得虫—化虫—献虫—荣身', '实词：直=值、售=买、造=到……去', '活用：昂/高（使动）、然（意动）；通假：裁=才', '结尾点睛：「天子一跬步，皆关民命」', '主旨：借小虫讽刺封建统治者的荒嬉与盘剥'] },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '小说借一只促织的征敛，揭露<strong>封建统治者荒嬉误国、官府胥吏横征暴敛</strong>的黑暗现实，写尽小民「因一虫而家破，因一虫而荣身」的荒诞与辛酸，寄托了作者对底层百姓的深切同情与对时政的尖锐讽刺。' },
        { type: 'tip', label: '拓展', text: '《促织》与《聊斋》中许多篇章一样，遵循「<strong>异史氏曰</strong>」的史传评语传统——文末以「异史氏」口吻发议论（如「天子一跬步，皆关民命」）。这仿《史记》「太史公曰」之体，使志怪小说兼具<strong>史识与批判</strong>，是蒲松龄「孤愤之书」的精神所系。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f3eee2"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="160" height="90" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="110" y="90" fill="#5b3b12">征敛之祸</text><text x="110" y="115" fill="#5b4636" font-size="12">岁征·盘剥</text><rect x="210" y="55" width="160" height="90" rx="8" fill="#7a9b3e" stroke="#3e6b2e" stroke-width="2"/><text x="290" y="90" fill="#fff">子化虫</text><text x="290" y="115" fill="#fff" font-size="12">以幻写真</text><rect x="390" y="55" width="160" height="90" rx="8" fill="#4a7de0" stroke="#2e6fae" stroke-width="2"/><text x="470" y="90" fill="#fff">献虫得荣</text><text x="470" y="115" fill="#fff" font-size="12">荒诞反讽</text><rect x="570" y="50" width="100" height="100" rx="8" fill="#9c1a2e" stroke="#7a0f1a" stroke-width="2"/><text x="620" y="90" fill="#fff">刺时政</text><text x="620" y="115" fill="#fff" font-size="12">关民命</text></g><path d="M190 100 h20 M370 100 h20 M550 100 h20" stroke="#c0392b" stroke-width="2.5" marker-end="url(#cz3)"/><text x="340" y="190" font-size="13" fill="#9c5a3a" text-anchor="middle">由小虫到大患：荒嬉误国，民命系于帝王一念</text><defs><marker id="cz3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '全文借促织之微，写出封建盘剥之巨与民生之艰。' },
        { type: 'list', items: ['蒲松龄《聊斋志异》，《促织》为讽喻名篇', '文体：文言小说，以幻写真、以异写常', '情节起伏：征—失—化—献—荣，子化蟋蟀最奇', '实词：直=值、售=买、造=到……去', '活用：昂/高使动、然意动；通假：裁=才', '主旨：讽刺封建统治者荒嬉与官府横征暴敛'] }
      ],
      exercises: [
        { type: 'choice', question: '《促织》中「昂其直」的「直」意思是？', options: ['直接', '通「值」，价值', '直立', '正直'], answer: '通「值」，价值', explanation: '「直」在此是通假字，通「值」，意为价值、价钱。「昂其直」即「抬高它的价值（价钱）」，指游侠儿把良种蟋蟀养起来待价而沽。读文言文须识破通假，不能按「直接、正直」等常义理解。' },
        { type: 'choice', question: '「亦无售者」中「售」的古义是？', options: ['卖出', '买（与今义相反）', '售货', '收藏'], answer: '买（与今义相反）', explanation: '文言中「售」常指「买」（今义才多指「卖」）。文中「欲居之以为利，而高其直，亦无售者」意为：想囤积居奇抬高价，却也没有（人）来买。此处「售」恰是「买」义，与今人语感相反，最易误读。' },
        { type: 'fill', question: '「径造庐访成」的「造」意为______（到……去 / 制造），「庐」指成名家。', answer: '到……去|拜访', explanation: '「造」在文言中常作「到……去、拜访」解（如「登峰造极」之「造」亦有「至」意）。「径造庐访成」即直接登门拜访成名。这是文言常用实词，须与现代「制造」义区分。' },
        { type: 'choice', question: '小说结尾「故天子一跬步，皆关民命，不可忽也」的作用是？', options: ['劝帝王谨慎娱乐，实则讽刺时政', '歌颂皇帝英明', '与主题无关', '交代蟋蟀品种'], answer: '劝帝王谨慎娱乐，实则讽刺时政', explanation: '这句话表面劝谏帝王一举一动都关系百姓性命、不可轻忽，实则是沉痛的反语式讽刺——百姓的生死荣枯竟取决于帝王斗蟋蟀的癖好。它以「异史氏曰」的笔调点明主旨，讽刺入骨而不露声色。' },
        { type: 'choice', question: '《促织》最突出的艺术特色是？', options: ['以幻写真、借小虫写大患', '纯粹写实记录', '只写爱情', '神话史诗'], answer: '以幻写真、借小虫写大患', explanation: '小说写子化蟋蟀、魂助父脱等荒诞情节，却处处映射真实的赋税之毒与民生之艰，是「以异写常、以幻写真」的典范；借一只促织牵动一家生死与官府荣辱，以小见大、讽刺深刻，正是《聊斋》志怪的现实精神。' }
      ]
    },

    /* ==================== 第5课 变形记 ==================== */
    {
      id: 'bx2-u6-l5',
      name: '《变形记》',
      author: '卡夫卡',
      chapter: '第六单元 观察与批判（小说）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近卡夫卡与现代主义' },
        { type: 'paragraph', text: '弗朗茨·卡夫卡（1883—1924），奥地利小说家，现代主义文学的先驱之一。代表作有《变形记》《审判》《城堡》等。他的作品常以荒诞的情节、冷漠的笔调表现现代人的孤独、焦虑与无力，对 20 世纪文学影响深远。' },
        { type: 'paragraph', text: '《变形记》写于 1912 年，是卡夫卡最著名的中篇小说。小说开篇即宣告推销员格里高尔·萨姆沙变成甲虫，由此展开对「人如何在异化的世界中失去价值与尊严」的深刻追问，是现代主义文学的里程碑。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>现代主义小说</strong>，核心特征是<strong>「荒诞与现实交织」</strong>：设定（人变甲虫）极度荒诞，叙述却<strong>冷静、细致、近乎纪实</strong>。这种「荒诞的写实」正是现代主义区别于传统现实主义的关键——以反常写本质的真实。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2f6"/><rect x="250" y="120" width="180" height="110" rx="10" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><ellipse cx="340" cy="130" rx="34" ry="20" fill="#7a5a2e"/><line x1="300" y1="175" x2="295" y2="225" stroke="#7a5a2e" stroke-width="3"/><line x1="340" y1="178" x2="340" y2="228" stroke="#7a5a2e" stroke-width="3"/><line x1="380" y1="175" x2="385" y2="225" stroke="#7a5a2e" stroke-width="3"/><text x="340" y="270" font-size="14" fill="#33485a" text-anchor="middle">格里高尔·萨姆沙变成了甲虫</text><text x="120" y="90" font-size="13" fill="#5b7a8a" text-anchor="middle">荒诞设定</text><text x="560" y="90" font-size="13" fill="#5b7a8a" text-anchor="middle">写实笔法</text><path d="M150 95 Q250 110 255 130" stroke="#c0392b" stroke-width="2" fill="none" marker-end="url(#bx5a)"/><path d="M530 95 Q430 110 425 130" stroke="#c0392b" stroke-width="2" fill="none" marker-end="url(#bx5a)"/><defs><marker id="bx5a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '「人变甲虫」是荒诞的，卡夫卡却用最冷静的笔去写。' },
        { type: 'heading', text: '二、经典开头与「异化」主题' },
        { type: 'poem', text: '一天早晨，格里高尔·萨姆沙从不安的睡梦中醒来，发现自己躺在床上变成了一只巨大的甲虫。\n他仰卧着，那坚硬的像铁甲一般的背贴着床，他稍稍抬了抬头，便看见了自己那穹顶似的棕色肚子分成了好多块弧形的硬片，被子几乎盖不住肚子尖，眼看就要完全滑落下来。\n比起偌大的身躯来，他那许多只腿真是细得可怜，都在他眼前无可奈何地舞动着。' },
        { type: 'keypoint', label: '「异化」主题', text: '格里高尔的变形，象征<strong>人在现代社会中的「异化」</strong>：他本是家庭的<strong>经济支柱</strong>（推销员），一旦失去劳动能力与「用处」，便被亲人厌弃、最终被遗忘。小说揭示：在功利关系里，人的<strong>价值等同于其功用</strong>，丧失功用即丧失被爱与被承认的资格。' },
        { type: 'keypoint', label: '荒诞与真实', text: '「人变甲虫」当然是<strong>不可能发生的荒诞</strong>，但卡夫卡用<strong>极度写实的细节</strong>（甲虫的背、肚子、腿，格里高尔担心误了火车）去叙述，使读者忘记荒诞而感受真实——这正是现代主义的魔力：用反常 illuminated 本质的真实，即现代人的孤独与被抛弃感。' },
        { type: 'example', label: '分析示范', text: '格里高尔变成甲虫后，第一反应竟是「担心赶不上火车、耽误公司的差事」，这说明了什么？<br><br><strong>解析</strong>：这是极具反讽的<strong>细节真实</strong>。一个人已变成甲虫，最紧迫的却仍是<strong>上班与生计</strong>——可见现代职场的压迫已内化为他的本能。卡夫卡以荒诞设定包裹真切体验：人被工作与责任异化到何种程度，连「变成虫」都赶不上对迟到的恐惧。这一笔，把「异化」写得惊心动魄。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="13" text-anchor="middle"><rect x="30" y="50" width="180" height="130" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="120" y="95" fill="#5b3b12">变形前</text><text x="120" y="122" fill="#5b4636" font-size="12">养家支柱</text><text x="120" y="146" fill="#5b4636" font-size="12">被需要·被依靠</text><rect x="250" y="50" width="180" height="130" rx="8" fill="#e8893b" stroke="#c0392b" stroke-width="2"/><text x="340" y="95" fill="#fff">变甲虫</text><text x="340" y="122" fill="#fff" font-size="12">丧失劳动能力</text><rect x="470" y="50" width="180" height="130" rx="8" fill="#9c1a2e" stroke="#7a0f1a" stroke-width="2"/><text x="560" y="95" fill="#fff">被厌弃</text><text x="560" y="122" fill="#fff" font-size="12">家人疏远</text><text x="560" y="146" fill="#fff" font-size="12">孤独死去</text></g><path d="M210 115 h40 M430 115 h40" stroke="#c0392b" stroke-width="2.5" marker-end="url(#bx5b)"/><text x="340" y="210" font-size="13" fill="#33485a" text-anchor="middle">价值链条：有用→无用→被弃，异化之痛</text><defs><marker id="bx5b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '格里高尔的价值随「功用」起落，失去功用便被弃如敝履。' },
        { type: 'heading', text: '三、艺术特色与手法' },
        { type: 'keypoint', label: '艺术特色', text: '《变形记》的艺术特色：①<strong>荒诞与写实交织</strong>（设定荒诞、叙述冷静）；②<strong>细节真实</strong>（甲虫的生理、家人的反应都极具体）；③<strong>象征隐喻</strong>（甲虫＝异化的人）；④<strong>冷静克制</strong>的语调——越不动声色，悲凉越深。' },
        { type: 'warn', label: '易错·主题辨析', text: '《变形记》<strong>不是科幻小说，也不是童话</strong>。「变形」只是隐喻的壳，内核是现代人的生存困境。切勿把阅读重点放在「怎么变回去」上，而应思考<strong>「人为何会像虫一样被对待」</strong>——这才是现代主义要追问的命题。' },
        { type: 'table', headers: ['维度', '传统现实主义', '《变形记》（现代主义）'], rows: [['情节', '合乎逻辑、可解释', '荒诞设定（人变甲虫）'], ['叙述', '全知或限知，重外部', '冷静写实，重内心真实'], ['真实观', '生活表象之真', '本质/心理之真（以幻写真）'], ['目的', '再现社会', '追问人的异化与困境']] },
        { type: 'keypoint', label: '家人的转变', text: '家人的态度变化最见冷暖：起初<strong>惊惧、照料</strong>，后为负担而<strong>厌恶、隔离</strong>，最终<strong>盼其早死、如释重负</strong>。妹妹从关爱到厌弃的转折，尤为刺心——它写出亲情在「无用」面前的脆弱，呼应「异化」主题。' },
        { type: 'list', items: ['现代主义：荒诞设定 + 冷静写实的叙述', '异化主题：人的价值被等同于其功用', '细节反讽：变虫仍忧迟到，显职场压迫之深', '象征隐喻：甲虫即被异化、被抛弃的人', '语调克制：不动声色处更见悲凉', '对照传统：以幻写真，追问生存困境而非再现社会'] },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '小说通过格里高尔的变形与毁灭，揭示<strong>现代社会中人的异化</strong>：当人仅被视为「有用工具」，一旦丧失功用便遭遗弃，亲情与尊严也随之崩塌。卡夫卡以荒诞之笔，写出现代人最深的无奈与孤独。' },
        { type: 'tip', label: '拓展', text: '「异化」是近现代哲学（如马克思、存在主义）的核心命题，指人创造的东西反过来支配、压抑人。《变形记》把它<strong>形象化</strong>为「变成甲虫」。今天，当人被算法、绩效、消费裹挟而迷失自我时，卡夫卡的「虫」依然在叩问我们：<strong>你还是你自己吗？</strong>' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef2f6"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="160" height="90" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="110" y="90" fill="#5b3b12">荒诞设定</text><text x="110" y="115" fill="#5b4636" font-size="12">人变甲虫</text><rect x="210" y="55" width="160" height="90" rx="8" fill="#7a9b3e" stroke="#3e6b2e" stroke-width="2"/><text x="290" y="90" fill="#fff">写实叙述</text><text x="290" y="115" fill="#fff" font-size="12">冷静细节</text><rect x="390" y="55" width="160" height="90" rx="8" fill="#e8893b" stroke="#c0392b" stroke-width="2"/><text x="470" y="90" fill="#fff">异化主题</text><text x="470" y="115" fill="#fff" font-size="12">功用即价值</text><rect x="570" y="50" width="100" height="100" rx="8" fill="#9c1a2e" stroke="#7a0f1a" stroke-width="2"/><text x="620" y="90" fill="#fff">生存</text><text x="620" y="115" fill="#fff" font-size="12">困境</text></g><path d="M190 100 h20 M370 100 h20 M550 100 h20" stroke="#c0392b" stroke-width="2.5" marker-end="url(#bx5c)"/><text x="340" y="190" font-size="13" fill="#33485a" text-anchor="middle">荒诞 → 写实 → 异化 → 困境：现代主义的追问</text><defs><marker id="bx5c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '以荒诞写真实，卡夫卡追问的是现代人的「异化」困境。' },
        { type: 'list', items: ['卡夫卡，奥地利，现代主义文学先驱', '开篇经典：格里高尔变成甲虫', '核心：荒诞与现实交织的叙事风格', '主题：现代社会中人的「异化」', '隐喻：甲虫=丧失功用便被抛弃的人', '主旨：揭示异化的孤独，叩问人的尊严与自我'] }
      ],
      exercises: [
        { type: 'choice', question: '《变形记》最鲜明的叙事风格是？', options: ['荒诞设定配冷静写实的叙述', '轻松幽默的童话口吻', '客观纪实的新闻体', '押韵的诗歌体'], answer: '荒诞设定配冷静写实的叙述', explanation: '小说以「人变甲虫」这一不可能发生的荒诞设定开篇，却用极其冷静、细致、近乎纪实的笔触描写甲虫的生理与家人的反应。这种「荒诞的写实」是现代主义的核心特征，以反常写本质的真实，而非童话或新闻。' },
        { type: 'choice', question: '格里高尔变成甲虫后，第一反应竟是担心误了火车、耽误公司差事，这意在表现？', options: ['他喜欢上班', '职场压迫已内化为本能，凸显人的异化', '他急于变回去', '甲虫也会坐火车'], answer: '职场压迫已内化为本能，凸显人的异化', explanation: '一个人已变成甲虫，最紧迫的却仍是上班生计，可见现代职场的重压已深入其本能。卡夫卡以反讽细节写出人被工作异化之深——连「变虫」都敌不过对迟到的恐惧，把异化主题写得惊心动魄。' },
        { type: 'fill', question: '《变形记》的核心主题是「______」（异化 / 科幻），即人丧失功用时便被社会与亲人抛弃。', answer: '异化', explanation: '「异化」指人创造的制度与关系反过来压抑、支配人。格里高尔本是养家支柱，一旦丧失劳动能力便被厌弃遗忘，正说明在功利关系中人的价值被等同于「功用」。这不是科幻题材，而是对现代人处境的隐喻式追问。' },
        { type: 'choice', question: '下列对《变形记》文体的判断，正确的是？', options: ['科幻小说，研究怎么变回去', '现代主义小说，以荒诞写真实', '民间童话', '历史传记'], answer: '现代主义小说，以荒诞写真实', explanation: '《变形记》属现代主义文学，「变形」只是隐喻外壳，目的是以荒诞设定揭示现代人异化的生存困境，而非探讨变形机制或讲述童话。它用反常写本质真实，与传统现实主义「再现社会」有所不同。' },
        { type: 'choice', question: '小说中家人的态度变化，主要为了表现？', options: ['亲情的坚固', '亲情在「无用」面前的脆弱，呼应异化主题', '甲虫很可爱', '家庭富裕'], answer: '亲情在「无用」面前的脆弱，呼应异化主题', explanation: '家人从惊惧照料，到厌恶隔离，再到盼其早死、如释重负，态度随格里高尔「功用」的丧失而逆转。妹妹由爱到弃的转折尤为刺心，写出亲情在功利考量前的脆弱，深刻呼应「人因无用而被抛弃」的异化主题。' }
      ]
    }
  );
})();
