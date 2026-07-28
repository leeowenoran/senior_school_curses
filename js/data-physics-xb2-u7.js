/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第二章 电磁感应
 * 课时7：涡流、电磁阻尼和电磁驱动
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u7',
    name: '涡流、电磁阻尼和电磁驱动',
    chapter: '选择性必修第二册 · 第二章 电磁感应',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是涡流' },
      { type: 'paragraph', text: '我们前面学的感应电流，大多出现在线圈导线里。如果一个大块的金属（比如一块铁、一片铝）处在变化的磁场中，金属内部也会产生一圈一圈的感应电流，形状很像水中的漩涡，所以叫做涡流。涡流本质上仍然是感应电流，遵守我们已经学过的电磁感应规律。' },
      { type: 'keypoint', label: '重点·涡流', text: '<strong>涡流是块状金属在变化的磁场中，内部产生的环状感应电流。</strong>它和导线里的感应电流本质相同，只是流动路线在整块金属里绕成一圈一圈的漩涡状。' },
      { type: 'list', items: ['金属块处于变化的磁场中', '或者金属块在磁场中运动使穿过它的磁通量变化', '交变电流产生的磁场最容易引发明显的涡流', '涡流方向同样服从楞次定律'] },
      { type: 'heading', text: '二、涡流的利与弊' },
      { type: 'paragraph', text: '涡流并不都是坏事。工业上利用涡流可以冶炼金属：把金属放在高频交变磁场里，金属内部产生很强的涡流，靠电流发热把金属熔化，这就是高频感应炉。但它的害处也很明显：变压器、电机的铁芯如果是一整块铁，工作时会产生大量涡流而白白发热、浪费能量，甚至烧坏设备。' },
      { type: 'list', items: ['减小涡流：把铁芯做成许多彼此绝缘的薄硅钢片叠起来', '硅钢片之间绝缘，切断了大漩涡电流的回路', '利用涡流：电磁炉、高频感应冶炼炉', '避免涡流：变压器、电机铁芯要尽量减少发热损耗'] },
      { type: 'table', headers: ['方面', '表现', '例子'], rows: [['有利', '涡流发热可熔化金属', '电磁炉、感应炉'], ['有害', '铁芯发热浪费能量', '变压器铁芯损耗'], ['防止', '用绝缘硅钢片叠成铁芯', '电机、变压器'], ['利用', '靠涡流实现制动或驱动', '阻尼、感应电机']] },
      { type: 'example', label: '例题·生活中的涡流', text: '电磁炉为什么能加热锅底，却不太加热桌面？<br><br><strong>解析</strong>：电磁炉内部线圈通交变电流，产生迅速变化的磁场。放在上面的铁锅锅底是金属，变化的磁场在锅底激起很强的<strong>涡流</strong>，涡流发热把锅底加热。桌面一般不是金属，不会产生明显涡流，所以基本不发热。' },
      { type: 'warn', label: '易错', text: '<strong>涡流也是感应电流，同样服从楞次定律。</strong>不要把它当成一种全新的、另类的电流。它只是在"整块金属"这个特殊导体里绕成漩涡状的感应电流，方向、大小规律都和前面学的一致。' },
      { type: 'heading', text: '三、电磁阻尼' },
      { type: 'paragraph', text: '当一块金属在磁场中运动（或者磁场相对金属运动）时，金属里会出现涡流；而这涡流自己又会产生磁场，按照楞次定律，这个磁场总要阻碍引起它的相对运动。于是金属的运动被"拖住"，很快就慢下来甚至停下。这种阻碍运动的现象就叫电磁阻尼。' },
      { type: 'keypoint', label: '重点·电磁阻尼', text: '<strong>电磁阻尼是涡流阻碍导体与磁场之间相对运动的现象。</strong>它把机械能转化为涡流的热能，使运动迅速衰减，常用于需要"减速、缓冲"的场合。' },
      { type: 'list', items: ['电表中的铝制指针，通电后摆动能很快停稳，靠的就是电磁阻尼', '一些防火门、缓降装置利用电磁阻尼实现平稳关闭', '电磁制动器中也有电磁阻尼的身影', '特点：总是"拖后腿"，让相对运动变小'] },
      { type: 'heading', text: '四、电磁驱动' },
      { type: 'paragraph', text: '和阻尼相反，如果磁场本身在转动（或变化），金属里的涡流会和这个磁场相互作用，结果不是阻碍、而是被磁场"带着走"，使金属跟着磁场一起运动。这种让导体跟着磁场动起来的现象，叫做电磁驱动。' },
      { type: 'keypoint', label: '重点·电磁驱动', text: '<strong>电磁驱动是涡流使导体"跟随"磁场运动的现象。</strong>当磁场旋转时，金属中涡流受力，使金属也朝同方向转动起来。感应式异步电动机就是利用这个原理工作的。' },
      { type: 'list', items: ['旋转磁场带动金属盘或金属转子转动', '感应式异步电动机靠电磁驱动运转', '电磁驱动中导体转速总略低于磁场转速（存在"转差"）', '特点：不是阻碍，而是"被带着走"'] },
      { type: 'example', label: '例题·区分阻尼与驱动', text: '下列情形分别属于电磁阻尼还是电磁驱动？<br>① 电流表指针摆动几下就停住。<br>② 电动机通电后转子跟着旋转磁场转起来。<br><br><strong>解析</strong>：<br>① 指针在磁场中摆动时产生涡流，涡流阻碍摆动让它停住，属于<strong>电磁阻尼</strong>。<br>② 旋转磁场使转子中涡流受力，转子被带着同方向转动，属于<strong>电磁驱动</strong>。' },
      { type: 'tip', label: '提示', text: '<strong>电磁阻尼和电磁驱动都来自涡流，区别看"相对运动怎么变"。</strong>阻尼是阻碍相对运动（让运动变小），驱动是跟随磁场运动（让导体动起来）。记住这个对照就不容易混。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">块状金属在变化磁场中产生漩涡状涡流</text><rect x="60" y="90" width="40" height="140" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="90" x2="80" y2="230" stroke="#4fb3a5" stroke-width="4"/><text x="80" y="256" font-size="12" fill="#234b45" text-anchor="middle">变化磁场</text><text x="220" y="172" font-size="30" fill="#4fb3a5" text-anchor="middle">→</text><rect x="360" y="90" width="160" height="140" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="440" cy="160" r="34" fill="none" stroke="#234b45" stroke-width="3"/><polygon points="474,160 460,154 460,166" fill="#234b45"/><circle cx="440" cy="160" r="18" fill="none" stroke="#4fb3a5" stroke-width="3"/><polygon points="458,160 444,154 444,166" fill="#4fb3a5"/><text x="440" y="256" font-size="13" fill="#234b45" text-anchor="middle">金属块内漩涡状感应电流（涡流）</text></svg>', caption: '图1　变化的磁场穿过金属块，在金属内部激起一圈圈漩涡状的涡流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电磁阻尼：金属块在磁场中运动受到阻力</text><rect x="250" y="70" width="60" height="70" fill="#234b45"/><rect x="370" y="70" width="60" height="70" fill="#4fb3a5"/><text x="280" y="112" font-size="16" fill="#e6f4f1" text-anchor="middle">N</text><text x="400" y="112" font-size="16" fill="#234b45" text-anchor="middle">S</text><rect x="320" y="140" width="40" height="90" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="190" font-size="13" fill="#234b45">运动</text><text x="210" y="195" font-size="24" fill="#234b45">→</text><text x="340" y="258" font-size="12" fill="#234b45" text-anchor="middle">金属板穿过磁场，涡流阻碍它运动</text></svg>', caption: '图2　金属板在磁场中向下运动，内部涡流产生的磁场阻碍运动，这就是电磁阻尼。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电磁驱动：旋转磁场带动金属盘跟着转</text><circle cx="250" cy="170" r="60" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="250" y="182" font-size="34" fill="#234b45" text-anchor="middle">↻</text><text x="250" y="258" font-size="12" fill="#234b45" text-anchor="middle">旋转磁场</text><text x="370" y="178" font-size="30" fill="#234b45" text-anchor="middle">→</text><circle cx="470" cy="170" r="60" fill="#d6ece8" stroke="#2e9e8f" stroke-width="3"/><text x="470" y="182" font-size="34" fill="#234b45" text-anchor="middle">↻</text><text x="470" y="258" font-size="12" fill="#234b45" text-anchor="middle">金属盘被带动旋转</text></svg>', caption: '图3　磁场旋转时，金属盘中的涡流使它跟着同方向转动，这就是电磁驱动。' }
    ],
    exercises: [
      { type: 'choice', question: '关于涡流，下列说法正确的是？', options: ['涡流是导体表面的直线电流', '涡流是块状金属中形成的环状感应电流', '涡流是线圈中的恒定电流', '涡流是由电池直接提供的电流'], answer: '涡流是块状金属中形成的环状感应电流', explanation: '涡流是当块状金属处于变化的磁场中（或在磁场中运动使磁通量变化）时，在金属内部产生的环状感应电流，形状像漩涡。它本质上仍然是感应电流，遵守电磁感应规律，并不是由电池提供的恒定电流，也不是只出现在表面的直线电流。' },
      { type: 'choice', question: '电磁阻尼是指？', options: ['涡流使导体跟随磁场运动', '涡流阻碍导体与磁场的相对运动', '涡流增强导体的运动', '涡流与磁场变化无关'], answer: '涡流阻碍导体与磁场的相对运动', explanation: '电磁阻尼是当金属在磁场中运动或磁场相对金属变化时，金属内产生涡流，涡流又产生磁场，按照楞次定律阻碍引起它的相对运动，从而把机械能转化为热能使运动衰减。它起"拖后腿"的作用，而不是带动导体跟随磁场运动，后者属于电磁驱动。' },
      { type: 'choice', question: '下列应用中，利用电磁驱动原理的是？', options: ['电磁炉', '感应式异步电动机', '变压器铁芯', '电流表指针'], answer: '感应式异步电动机', explanation: '电磁驱动是指旋转磁场使金属中涡流受力，带动金属跟着磁场同方向运动。感应式异步电动机的转子正是被旋转磁场带动旋转的，属于电磁驱动。电磁炉和变压器铁芯是利用或防止涡流的发热，电流表指针利用的是电磁阻尼。' },
      { type: 'fill', question: '变压器铁芯用彼此绝缘的薄硅钢片叠成，是为了切断大涡流回路，从而减小___（填"涡流"或"电阻"）。', answer: '涡流', explanation: '如果变压器铁芯是一整块铁，交变磁场会在其中激起很强的涡流，造成大量发热和能量损耗。把铁芯做成许多彼此绝缘的薄硅钢片叠起来，可以切断涡流的回路，显著减小涡流损耗，提高设备效率。' },
      { type: 'fill', question: '电磁炉是利用交变电流产生变化磁场，使锅底金属中产生___来发热加热食物的（填"涡流"或"直流电"）。', answer: '涡流', explanation: '电磁炉内部的线圈通以交变电流，产生迅速变化的磁场。铁质锅底处在变化磁场中，内部产生很强的涡流，涡流因金属电阻而发热，从而把锅底和食物加热。桌面一般不是金属，不会产生明显涡流，所以不会被明显加热。' }
    ]
  });
})();
