/* 思想政治 · 选择性必修2 · 法律与生活 · 第二课 依法有效保护财产权 */
(function () {
  var v = gzGetVolume('politics', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u2',
    name: '第二课 依法有效保护财产权',
    chapter: '高二思想政治（选择性必修2 法律与生活）· 第二课 依法有效保护财产权',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、财产权：你的"东西"受保护' },
      { type: 'paragraph', text: '财产权是民事主体对某一财产享有占有、使用、收益、处分的权利。法律保护财产权，目的是定分止争、鼓励创造。从你手里的手机，到你家住的房子，再到作家写的小说，背后都是财产权在起作用。民法典物权编、合同编和知识产权相关规则，共同织起一张保护网。' },
      { type: 'keypoint', label: '重点·财产权的意义', text: '<strong>国家依法保护国有财产、集体财产和私人的合法财产，禁止任何组织或者个人侵占、哄抢、私分、截留、破坏。保护财产权，既是维护社会公平正义的需要，也是激发人们创造财富、发展经济的基础。没有稳定的产权保护，就没有人愿意投资和劳动。</strong>' },
      { type: 'list', items: ['物权：直接支配特定物并排除他人干涉的权利，是最典型的财产权。', '债权：基于合同、侵权等产生的请求他人为或不为一定行为的权利。', '知识产权：对智力成果依法享有的专有权利。'] },

      { type: 'heading', text: '二、物权：对"物"的直接支配' },
      { type: 'paragraph', text: '物权编把物权分成所有权和他物权两大类。所有权是你对物"完整"的权利；他物权是在别人所有之物上设立的权利，比如你租来的房子你只有使用权。' },
      { type: 'table', headers: ['类别', '含义', '常见形式'], rows: [['所有权', '权利人对自己的物依法享有占有、使用、收益、处分的完整权利', '国家所有、集体所有、私人所有'], ['他物权', '在他人所有之物上设立的物权', '用益物权、担保物权']] },
      { type: 'keypoint', label: '重点·所有权的取得方式', text: '<strong>动产所有权一般自交付时转移（比如一手交钱一手交货）；不动产所有权（房屋、土地）须经登记才发生效力，光签合同不够，必须到登记机关过户。这是考试高频点：买二手房只签合同没过户，房子在法律上还不是你的。</strong>' },
      { type: 'warn', label: '易错·他物权不是"没有权利"', text: '有同学把"他物权"理解成"别人的权利、与我无关"。其实他物权是"在他人所有物上设立的对自己有利的权利"。比如土地承包经营权，地是集体的，但农户依法享有占有、使用、收益的权利，这是受法律保护的用益物权，不是空架子。' },

      { type: 'heading', text: '三、用益物权与担保物权' },
      { type: 'paragraph', text: '他物权进一步分为用益物权和担保物权。两者一个为了"用"，一个为了"债"，功能不同。' },
      { type: 'list', items: ['用益物权：以使用、收益为目的，在他人之物上设立的物权，如土地承包经营权、建设用地使用权、宅基地使用权、居住权。', '担保物权：为确保债权实现而设立的物权，如抵押权（不转移占有）、质权（转移占有）、留置权。', '区别：用益物权解决"怎么用别人的物"，担保物权解决"怎么保住自己的债"。'] },
      { type: 'example', label: '例子·房贷里的抵押权', text: '你贷款买房，银行借给你钱，房子抵押给银行。这就是抵押权：你不把房子交给银行住，但银行对房子享有担保物权，若你断供，银行可依法就房子优先受偿。这里房子所有权仍归你，银行只是享有担保物权。这就是用益物权与担保物权最生活化的对照。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">物权的分类结构</text><rect x="240" y="60" width="200" height="55" rx="10" fill="#b8334a"/><text x="340" y="92" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">物权</text><line x1="340" y1="115" x2="180" y2="160" stroke="#d4485a" stroke-width="2"/><line x1="340" y1="115" x2="500" y2="160" stroke="#d4485a" stroke-width="2"/><rect x="80" y="160" width="200" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="180" y="195" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">所有权</text><rect x="400" y="160" width="200" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="500" y="195" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">他物权</text><line x1="500" y1="220" x2="420" y2="255" stroke="#d4485a" stroke-width="1.5"/><line x1="500" y1="220" x2="580" y2="255" stroke="#d4485a" stroke-width="1.5"/><text x="380" y="280" font-size="12" fill="#3d1f24" text-anchor="middle">用益物权</text><text x="600" y="280" font-size="12" fill="#3d1f24" text-anchor="middle">担保物权</text></svg>', caption: '图1　物权分为所有权与他物权，他物权再分用益与担保。' },

      { type: 'heading', text: '四、知识产权：保护"脑子里的创造"' },
      { type: 'paragraph', text: '知识也能当财产。知识产权是对人类智力成果依法享有的专有权利，主要包括著作权、专利权、商标权。它鼓励创新：你辛苦写的文章、发明的技术、设计的品牌，法律都替你"护着"。' },
      { type: 'table', headers: ['类型', '保护对象', '典型例子'], rows: [['著作权', '文学、艺术、科学领域内具有独创性的作品', '小说、画作、软件代码'], ['专利权', '发明创造（发明、实用新型、外观设计）', '新机器、新配方'], ['商标权', '能够区分商品来源的标识', '品牌名称、logo']] },
      { type: 'keypoint', label: '重点·著作权自创作完成即产生', text: '<strong>著作权不需要登记就自动产生：作品一经创作完成，作者就享有著作权。发表权、署名权、修改权、保护作品完整权是人身权；复制、发行、改编等是财产权。注意：抄袭他人文章即便"改了几个字"，只要实质性相似，仍构成侵权。</strong>' },
      { type: 'warn', label: '易错·商标不是"谁先想出来归谁"', text: '商标权的取得通常实行"注册原则"：谁先申请注册，权利归谁，而不是谁先使用或谁先想出名字。所以你设计了一个很棒的名字却没注册，别人抢先注册了，法律一般保护注册人。这提醒创业者：好名字要尽早注册商标。' },

      { type: 'heading', text: '五、侵害财产权的责任' },
      { type: 'paragraph', text: '当财产权被侵害，法律提供了多种救济。物权受到妨害时，权利人可以请求返还原物、排除妨害、消除危险、恢复原状、赔偿损失等。' },
      { type: 'list', items: ['返还原物：东西被别人非法占有的，可请求返还。', '恢复原状：财物被损坏的，可请求修复。', '赔偿损失：无法返还或修复的，可请求金钱赔偿。', '停止侵害、排除妨碍：正在发生的侵害可要求立刻停止。'] },
      { type: 'example', label: '例子·邻居砍了你的树', text: '邻居未经同意砍掉你家院子里属于你的树，侵害了你的所有权。你可以要求他赔偿损失，若树苗还能补种也可要求恢复原状。这体现"物权请求权+损害赔偿"的双重保护：既要"停止和返还"，也要"赔钱"。' },
      { type: 'tip', label: '学习提示', text: '本课名词多，建议画一棵"财产权树"：树干是财产权，一枝是物权（再分所有权、他物权→用益、担保），一枝是债权，一枝是知识产权（著作、专利、商标）。把树画出来，体系就清楚了。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">知识产权三大支柱</text><rect x="40" y="80" width="180" height="160" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="130" y="120" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">著作权</text><text x="130" y="150" font-size="12" fill="#3d1f24" text-anchor="middle">作品自动保护</text><text x="130" y="175" font-size="12" fill="#3d1f24" text-anchor="middle">小说·画作·软件</text><rect x="250" y="80" width="180" height="160" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="340" y="120" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">专利权</text><text x="340" y="150" font-size="12" fill="#3d1f24" text-anchor="middle">需申请授权</text><text x="340" y="175" font-size="12" fill="#3d1f24" text-anchor="middle">发明·实用新型</text><rect x="460" y="80" width="180" height="160" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="550" y="120" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">商标权</text><text x="550" y="150" font-size="12" fill="#3d1f24" text-anchor="middle">注册取得</text><text x="550" y="175" font-size="12" fill="#3d1f24" text-anchor="middle">品牌·标识</text><text x="340" y="290" font-size="12" fill="#3d1f24" text-anchor="middle">三者都是对智力成果的专有保护，但取得方式与对象不同。</text></svg>', caption: '图2　知识产权包括著作权、专利权、商标权。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">物权取得的关键区别</text><rect x="60" y="70" width="250" height="90" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="185" y="105" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">动产（如手机）</text><text x="185" y="135" font-size="13" fill="#3d1f24" text-anchor="middle">交付即转移所有权</text><rect x="370" y="70" width="250" height="90" rx="10" fill="#b8334a"/><text x="495" y="105" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">不动产（如房屋）</text><text x="495" y="135" font-size="13" fill="#fff" text-anchor="middle">登记才转移所有权</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">只签合同不过户，房子在法律上仍不属于你。</text><text x="340" y="245" font-size="12" fill="#3d1f24" text-anchor="middle">记住：动—交付，不动—登记。</text></svg>', caption: '图3　动产与不动产的所有权转移规则不同。' }
    ],
    exercises: [
      { type: 'choice', question: '关于不动产所有权转移，下列说法正确的是？', options: ['签了买卖合同就取得所有权', '自交付时转移', '须经登记才发生效力', '自付款时转移'], answer: '须经登记才发生效力', explanation: '根据民法典，不动产物权的设立、变更、转让和消灭，经依法登记发生效力；未经登记不发生效力。所以买房屋只签合同、付了款但没办过户登记，所有权在法律上还没有转移。动产才是交付时转移。因此"须经登记才发生效力"是正确的。' },
      { type: 'choice', question: '下列权利中，属于用益物权的是？', options: ['抵押权', '质权', '土地承包经营权', '留置权'], answer: '土地承包经营权', explanation: '他物权分为用益物权和担保物权。用益物权以使用、收益为目的，包括土地承包经营权、建设用地使用权、宅基地使用权、居住权等。抵押权、质权、留置权都属于担保物权，目的是保障债权实现，而不是使用他人之物。所以只有土地承包经营权是用益物权。' },
      { type: 'choice', question: '关于著作权，下列说法正确的是？', options: ['必须登记才产生', '作品创作完成即自动产生', '只保护发表后的作品', '抄袭改几个字不算侵权'], answer: '作品创作完成即自动产生', explanation: '著作权自作品创作完成之日起自动产生，不需要登记或发表。作者对其作品享有包括人身权（署名、修改等）和财产权（复制、发行等）在内的权利。即便只改了几个字，只要对他人作品构成实质性相似，仍然属于抄袭侵权。因此"创作完成即自动产生"是唯一正确的表述。' },
      { type: 'fill', question: '物权分为___和___；他物权又可分为___物权和___物权。', answer: '所有权；他物权；用益；担保', explanation: '物权体系是：最上层是物权，分为所有权（对自己的物享有完整权利）和他物权（在他人之物上设立的权利）。他物权再分为用益物权（为使用收益而设，如土地承包经营权）和担保物权（为保障债权而设，如抵押权、质权、留置权）。填空要厘清这一层级，别把"所有权"和"他物权"写反。' },
      { type: 'fill', question: '知识产权保护的三类主要权利是___、___和___；其中商标权一般实行___原则取得。', answer: '著作权；专利权；商标权；注册', explanation: '知识产权主要包括著作权、专利权、商标权三大类，分别保护作品、发明创造和商品标识。与著作权"自动产生"不同，商标权一般实行注册原则：谁先申请注册，权利通常归谁，而不是谁先使用或先构思。记住这一差别，有助于区分三类知识产权的取得方式。' }
    ]
  });
})();
