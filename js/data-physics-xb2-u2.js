/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第一章 安培力与洛伦兹力
 * 课时2：安培力的应用
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u2',
    name: '安培力的应用',
    chapter: '选择性必修第二册 · 第一章 安培力与洛伦兹力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、磁电式电流表的工作原理' },
      { type: 'paragraph', text: '实验室里常见的指针式电流表，靠的就是安培力。它内部有一块强磁体，在两磁极之间装着一个可以转动的线圈，线圈两端连着指针和弹簧。当有电流通过线圈时，线圈的每一边都会受到安培力，两边受力方向相反，形成一个让线圈转动的力矩，指针就被带着偏转。' },
      { type: 'keypoint', label: '重点·磁电式电流表', text: '<strong>磁电式电流表利用通电线圈在磁场中受安培力而转动来指示电流大小。</strong>电流越大，线圈受到的力矩越大，指针偏转角度也越大，所以刻度可以直接标成电流值。' },
      { type: 'paragraph', text: '线圈转动时，连着的螺旋弹簧被扭紧，产生一个反向的恢复力矩。当安培力产生的转动力矩和弹簧的恢复力矩平衡时，线圈停在某个角度，指针就稳定地指向一个读数。电流断开后，弹簧把线圈和指针拉回零位。这种表只能测直流，而且电流方向接反了指针会反向偏转。' },
      { type: 'list', items: ['内部有强磁体，提供均匀辐射状的磁场', '可转动的通电线圈放在磁场中，受安培力而偏转', '指针和线圈相连，偏转角度反映电流大小', '弹簧提供恢复力矩，断电后指针回到零位'] },
      { type: 'heading', text: '二、电动机的原理' },
      { type: 'paragraph', text: '电动机是把电能变成机械能的装置，核心原理还是安培力。把通电的线圈放在磁场里，线圈两边受到方向相反的安培力，就形成一个转矩，推动线圈转动起来。为了让线圈能一直朝一个方向转，电动机里还有一个叫"换向器"的部件，它在线圈转过平衡位置时自动切换电流方向，使转矩方向不变，线圈就能连续旋转。' },
      { type: 'keypoint', label: '重点·电动机原理', text: '<strong>电动机利用通电线圈在磁场中受到安培力而产生转矩，从而转动做功。</strong>换向器不断改变线圈中的电流方向，保证线圈持续朝同一方向旋转，把电能转化为机械能。' },
      { type: 'example', label: '例题·判断电动机转动', text: '一台直流电动机，通电后线圈在磁场中受到安培力而转动。下列对电动机能量转化的说法，正确的是？<br>A. 把机械能转化为电能<br>B. 把电能转化为机械能<br>C. 把电能转化为内能<br>D. 不产生能量转化<br><br><strong>答</strong>：B。电动机通电后线圈在磁场中受力转动，对外输出机械运动，本质是电能转化为机械能。发电机才是把机械能转化为电能。' },
      { type: 'warn', label: '易错', text: '<strong>电动机和发电机能量转化方向相反，别弄混。</strong>电动机是通电受力转动，电能变机械能；发电机是线圈在外力下转动切割磁感线生电，机械能变电能。一个是"电生动"，一个是"动生电"。' },
      { type: 'table', headers: ['装置', '核心原理', '能量转化', '关键部件'], rows: [['磁电式电流表', '通电线圈受安培力偏转', '电能→指针偏转（显示）', '线圈、弹簧、磁体'], ['直流电动机', '通电线圈受安培力转动', '电能→机械能', '线圈、磁体、换向器'], ['发电机（对比）', '线圈转动切割磁感线生电', '机械能→电能', '线圈、磁体、电刷']] },
      { type: 'heading', text: '三、磁场对通电线圈的力矩（定性）' },
      { type: 'paragraph', text: '把矩形线圈放进匀强磁场，线圈的两条对边如果和磁场平行，就不受力；另外两条边和磁场垂直，各自受到大小相等、方向相反的安培力。这两个力不在同一条直线上，就组成一对"力偶"，使线圈发生转动，这种使物体转动的效果就叫力矩（这里只做定性了解，不要求计算）。' },
      { type: 'keypoint', label: '重点·磁力矩（定性）', text: '<strong>通电线圈在磁场中受到一对方向相反的安培力，形成使线圈转动的力矩，称为磁力矩。</strong>电流越大、磁场越强，磁力矩越大，线圈越容易转起来。' },
      { type: 'list', items: ['线圈中垂直于磁场的两条边各受安培力，方向相反', '两力不在同一直线上，形成使线圈转动的力矩', '电流越大、磁感应强度越大，磁力矩越大', '当线圈平面与磁场平行时，磁力矩最大'] },
      { type: 'warn', label: '易错', text: '磁力矩大小随线圈位置变化：<strong>当线圈平面与磁场平行时力矩最大，当线圈平面与磁场垂直（线圈平面法线沿磁场方向）时力矩为零</strong>。很多同学误以为线圈转得越快力矩越大，其实力矩只和电流、磁场及线圈位置有关，和转速无关。' },
      { type: 'tip', label: '提示', text: '<strong>安培力"既能测电流，又能驱动机器"。</strong>从小到大，磁电式电流表用安培力显示电流，电动机用安培力带动设备旋转。理解"通电导体在磁场中受力"这一条，就能串起这一节所有应用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">磁电式电流表：通电线圈受安培力偏转</text><rect x="120" y="70" width="200" height="180" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="220" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">磁场</text><rect x="180" y="120" width="80" height="60" fill="none" stroke="#234b45" stroke-width="3"/><text x="220" y="156" font-size="12" fill="#234b45" text-anchor="middle">线圈</text><line x1="220" y1="120" x2="220" y2="80" stroke="#2e9e8f" stroke-width="4"/><polygon points="220,70 211,88 229,88" fill="#2e9e8f"/><text x="220" y="265" font-size="12" fill="#234b45" text-anchor="middle">安培力使线圈偏转</text><line x1="430" y1="160" x2="500" y2="160" stroke="#234b45" stroke-width="4"/><polygon points="512,160 492,151 492,169" fill="#234b45"/><line x1="500" y1="160" x2="500" y2="90" stroke="#4fb3a5" stroke-width="4"/><polygon points="500,80 491,98 509,98" fill="#4fb3a5"/><text x="465" y="200" font-size="13" fill="#234b45" text-anchor="middle">指针</text><text x="465" y="265" font-size="12" fill="#234b45" text-anchor="middle">指针随线圈转动</text></svg>', caption: '图1　磁电式电流表中，通电线圈受安培力偏转，带动指针指示电流大小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电动机：通电线圈在磁场中受力转动</text><rect x="80" y="90" width="190" height="150" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">磁场</text><rect x="135" y="140" width="80" height="50" fill="none" stroke="#234b45" stroke-width="3"/><line x1="135" y1="165" x2="95" y2="165" stroke="#2e9e8f" stroke-width="4"/><polygon points="85,165 105,156 105,174" fill="#2e9e8f"/><line x1="215" y1="165" x2="255" y2="165" stroke="#2e9e8f" stroke-width="4"/><polygon points="265,165 245,156 245,174" fill="#2e9e8f"/><text x="175" y="220" font-size="12" fill="#234b45" text-anchor="middle">两边受力相反→转动</text><path d="M 420 200 A 60 60 0 0 1 480 140" fill="none" stroke="#4fb3a5" stroke-width="4"/><text x="500" y="150" font-size="22" fill="#234b45">↻</text><text x="460" y="265" font-size="12" fill="#234b45" text-anchor="middle">换向器让线圈持续同向转</text></svg>', caption: '图2　电动机中，线圈两边受反向安培力形成转矩而转动，换向器保证持续旋转。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">通电线圈受力形成磁力矩</text><rect x="200" y="90" width="120" height="120" fill="none" stroke="#234b45" stroke-width="3"/><text x="260" y="158" font-size="13" fill="#234b45" text-anchor="middle">线圈</text><line x1="200" y1="120" x2="160" y2="120" stroke="#2e9e8f" stroke-width="4"/><polygon points="150,120 170,111 170,129" fill="#2e9e8f"/><line x1="320" y1="180" x2="360" y2="180" stroke="#2e9e8f" stroke-width="4"/><polygon points="370,180 350,171 350,189" fill="#2e9e8f"/><text x="120" y="100" font-size="12" fill="#2e9e8f" text-anchor="middle">F</text><text x="395" y="172" font-size="12" fill="#2e9e8f" text-anchor="middle">F</text><line x1="500" y1="70" x2="500" y2="250" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="515" y="160" font-size="13" fill="#234b45">磁场 B</text><text x="260" y="280" font-size="13" fill="#234b45" text-anchor="middle">两边受力相反不在一直线→产生磁力矩</text></svg>', caption: '图3　矩形线圈在磁场中，两边受反向安培力不在同一直线上，形成使线圈转动的磁力矩。' }
    ],
    exercises: [
      { type: 'choice', question: '磁电式电流表能够指示电流大小，利用的是？', options: ['通电线圈在磁场中受安培力而偏转', '线圈切割磁感线产生感应电流', '电荷在电场中受力', '磁铁吸引铁质指针'], answer: '通电线圈在磁场中受安培力而偏转', explanation: '磁电式电流表内部有强磁体和可转动的通电线圈。电流通过线圈时，线圈受安培力而偏转，电流越大偏转角度越大，指针指示的电流值就越大。它不是靠感应电流或电场力工作，也不是靠磁铁直接吸引铁指针。' },
      { type: 'choice', question: '关于电动机，下列说法正确的是？', options: ['电动机把机械能转化为电能', '电动机利用通电线圈受安培力转动', '电动机不需要磁场也能工作', '电动机和发电机原理完全相同'], answer: '电动机利用通电线圈受安培力转动', explanation: '电动机通电后，线圈在磁场中受到安培力而形成转矩，从而转动并对外做功，是把电能转化为机械能。发电机才把机械能转化为电能，二者能量转化方向相反。电动机必须放在磁场中才能受力转动，离了磁场无法工作。' },
      { type: 'choice', question: '关于通电线圈在匀强磁场中的磁力矩，下列说法正确的是？', options: ['线圈平面与磁场平行时力矩最大', '线圈平面与磁场垂直时力矩最大', '力矩大小与电流无关', '力矩大小与磁感应强度无关'], answer: '线圈平面与磁场平行时力矩最大', explanation: '通电线圈在磁场中，垂直于磁场的两条边受反向安培力形成力矩。当线圈平面与磁场平行时，这两条边受的力产生的力臂最大，磁力矩最大；当线圈平面与磁场垂直时力矩为零。力矩大小与电流、磁感应强度都有关，电流和磁场越强，力矩越大。' },
      { type: 'fill', question: '电动机中，为了让线圈能持续朝同一方向转动，装有一个在线圈转过平衡位置时自动改变电流方向的部件，叫做___。', answer: '换向器', explanation: '直流电动机里的换向器由彼此绝缘的两个半铜环组成，它在线圈刚转过平衡位置时自动切换线圈中的电流方向，使线圈两边受到的安培力方向不变，从而保证线圈能持续朝同一方向旋转。没有换向器，线圈会在平衡位置附近来回摆动而无法连续转动。' },
      { type: 'fill', question: '磁电式电流表和直流电动机，本质上都是利用___力来工作的；其中把电能转化为机械能的是___。', answer: '安培|电动机', explanation: '磁电式电流表和直流电动机的核心都是通电导体在磁场中受到安培力。电流表利用安培力使线圈偏转来显示电流；电动机利用安培力使线圈转动，把电能转化为机械能对外做功。两者工作原理都基于安培力，但能量转化目的不同。' }
    ]
  });
})();
