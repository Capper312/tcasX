// ===== DATA =====
const FACULTIES = [
  {id:'eng',name:'วิศวกรรมศาสตร์',weights:{academic:35,sports:10,volunteer:15,achievement:25,skill:15}},
  {id:'med',name:'แพทยศาสตร์',weights:{academic:40,sports:10,volunteer:20,achievement:20,skill:10}},
  {id:'comm',name:'นิเทศศาสตร์',weights:{academic:15,sports:10,volunteer:15,achievement:25,skill:35}},
  {id:'biz',name:'บริหารธุรกิจ',weights:{academic:25,sports:10,volunteer:20,achievement:25,skill:20}},
  {id:'arch',name:'สถาปัตยกรรมศาสตร์',weights:{academic:20,sports:5,volunteer:10,achievement:25,skill:40}},
  {id:'sci',name:'วิทยาศาสตร์',weights:{academic:40,sports:10,volunteer:15,achievement:25,skill:10}},
  {id:'law',name:'นิติศาสตร์',weights:{academic:30,sports:10,volunteer:25,achievement:20,skill:15}},
  {id:'edu',name:'ครุศาสตร์/ศึกษาศาสตร์',weights:{academic:25,sports:15,volunteer:25,achievement:15,skill:20}},
  {id:'arts',name:'อักษรศาสตร์/มนุษยศาสตร์',weights:{academic:25,sports:5,volunteer:20,achievement:20,skill:30}},
  {id:'polsci',name:'รัฐศาสตร์',weights:{academic:30,sports:10,volunteer:25,achievement:25,skill:10}},
  {id:'nurse',name:'พยาบาลศาสตร์',weights:{academic:35,sports:10,volunteer:30,achievement:15,skill:10}},
  {id:'dent',name:'ทันตแพทยศาสตร์',weights:{academic:40,sports:5,volunteer:15,achievement:15,skill:25}},
  {id:'pharm',name:'เภสัชศาสตร์',weights:{academic:40,sports:5,volunteer:20,achievement:20,skill:15}},
  {id:'allied',name:'สหเวชศาสตร์',weights:{academic:35,sports:10,volunteer:20,achievement:20,skill:15}},
  {id:'finearts',name:'ศิลปกรรมศาสตร์',weights:{academic:10,sports:5,volunteer:10,achievement:30,skill:45}},
  {id:'agri',name:'เกษตรศาสตร์',weights:{academic:30,sports:10,volunteer:20,achievement:20,skill:20}}
];
const CAT_LABELS = {academic:'📚 วิชาการ',sports:'⚽ กีฬา/สุขภาพ',volunteer:'🤝 จิตอาสา',achievement:'🏆 ผลงาน/รางวัล',skill:'🎨 ทักษะพิเศษ',leadership:'🌟 ภาวะผู้นำ',internship:'💼 ฝึกงาน/ประสบการณ์',online_course:'💻 คอร์สออนไลน์'};
const CAT_KEYS = Object.keys(CAT_LABELS);
const SAMPLE_ACTIVITIES = [
  {name:'ค่ายโอลิมปิกวิชาการ สอวน.',cat:'academic',desc:'ค่ายส่งเสริมวิชาการระดับประเทศ เตรียมพร้อมสำหรับการแข่งขันโอลิมปิกวิชาการ',date:'15 มิ.ย. 2569',level:'ประเทศ'},
  {name:'แข่งขัน Science Project',cat:'academic',desc:'โครงงานวิทยาศาสตร์ ระดับภูมิภาค สร้างผลงานวิจัยที่โดดเด่น',date:'20 ก.ค. 2569',level:'ภาค'},
  {name:'Math Challenge',cat:'academic',desc:'การแข่งขันคณิตศาสตร์ออนไลน์ ฝึกทักษะการคิดวิเคราะห์',date:'1 ส.ค. 2569',level:'ประเทศ'},
  {name:'กีฬาเยาวชนแห่งชาติ',cat:'sports',desc:'การแข่งขันกีฬาระดับชาติสำหรับเยาวชน เสริมสร้างร่างกายและจิตใจ',date:'10 ก.ค. 2569',level:'ประเทศ'},
  {name:'วิ่ง Mini Marathon',cat:'sports',desc:'งานวิ่งการกุศล 10 กม. ได้ทั้งสุขภาพและจิตอาสา',date:'5 มิ.ย. 2569',level:'จังหวัด'},
  {name:'ค่ายอาสาพัฒนาชนบท',cat:'volunteer',desc:'ลงพื้นที่ช่วยเหลือชุมชน สร้างห้องสมุดในถิ่นทุรกันดาร',date:'1 ก.ค. 2569',level:'ภาค'},
  {name:'จิตอาสาสอนน้อง',cat:'volunteer',desc:'สอนหนังสือเด็กด้อยโอกาสในชุมชน ทุกวันเสาร์',date:'ทุกสัปดาห์',level:'โรงเรียน'},
  {name:'ปลูกป่าชายเลน',cat:'volunteer',desc:'กิจกรรมอนุรักษ์สิ่งแวดล้อม ปลูกป่าชายเลนฟื้นฟูระบบนิเวศ',date:'25 มิ.ย. 2569',level:'จังหวัด'},
  {name:'ประกวดสุนทรพจน์',cat:'achievement',desc:'เวทีประกวดพูดสุนทรพจน์ภาษาไทย-อังกฤษ ระดับประเทศ',date:'15 ส.ค. 2569',level:'ประเทศ'},
  {name:'Hackathon ระดับม.ปลาย',cat:'achievement',desc:'แข่งขันพัฒนาโปรเจกต์เทคโนโลยีภายใน 48 ชม.',date:'20 ก.ย. 2569',level:'ประเทศ'},
  {name:'ประกวดวาดภาพ',cat:'achievement',desc:'แข่งขันวาดภาพเนื่องในวันสิ่งแวดล้อมโลก',date:'5 มิ.ย. 2569',level:'ภาค'},
  {name:'ค่ายศิลปะสร้างสรรค์',cat:'skill',desc:'เรียนรู้เทคนิคศิลปะจากศิลปินมืออาชีพ 3 วัน 2 คืน',date:'10 มิ.ย. 2569',level:'ประเทศ'},
  {name:'Workshop ถ่ายภาพ',cat:'skill',desc:'เรียนรู้การถ่ายภาพเชิงสร้างสรรค์และการตัดต่อ',date:'8 ก.ค. 2569',level:'จังหวัด'},
  {name:'เรียนรู้ Coding & AI',cat:'skill',desc:'หลักสูตร Python & AI เบื้องต้นสำหรับม.ปลาย',date:'ตลอดปี',level:'ออนไลน์'},
  {name:'ค่ายดนตรีเยาวชน',cat:'skill',desc:'พัฒนาทักษะดนตรีกับนักดนตรีมืออาชีพ',date:'18 ก.ค. 2569',level:'ภาค'},
  {name:'ประธานสภานักเรียน',cat:'leadership',desc:'เป็นผู้นำขับเคลื่อนนโยบายโรงเรียน จัดสรรงบประมาณและกิจกรรมนักเรียน',date:'ตลอดปี',level:'โรงเรียน'},
  {name:'หัวหน้าชมรมวิชาการ',cat:'leadership',desc:'บริหารจัดการชมรมและจัดกิจกรรมติวหนังสือให้น้องๆ',date:'ตลอดปี',level:'โรงเรียน'},
  {name:'ฝึกงานคลินิกสัตว์',cat:'internship',desc:'เรียนรู้การดูแลสัตว์ป่วยและการทำงานของผู้ช่วยสัตวแพทย์',date:'ต.ค. 2569',level:'จังหวัด'},
  {name:'ฝึกงานบริษัท Tech',cat:'internship',desc:'ดูงานและช่วยโปรเจกต์ด้าน Data Science ช่วงปิดเทอม',date:'เม.ย. 2569',level:'ประเทศ'},
  {name:'CS50x Harvard',cat:'online_course',desc:'คอร์สวิทยาการคอมพิวเตอร์ออนไลน์ชื่อดัง ได้รับประกาศนียบัตร',date:'ส.ค. 2569',level:'ออนไลน์'},
  {name:'CHULA MOOC ภาษาอังกฤษ',cat:'online_course',desc:'เรียนทักษะภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',date:'ม.ค. 2569',level:'ออนไลน์'}
];

let currentUser = null;

// ===== MULTI-USER STORAGE =====
function getAllUsers() { return JSON.parse(localStorage.getItem('tcas_users') || '[]'); }
function saveAllUsers(users) { localStorage.setItem('tcas_users', JSON.stringify(users)); }
function updateUserInList(user) {
  const users = getAllUsers();
  const idx = users.findIndex(u => u.email === user.email);
  if(idx >= 0) users[idx] = user; else users.push(user);
  saveAllUsers(users);
}

// ===== DEMO USERS REMOVED =====

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // populate faculty selects
  document.querySelectorAll('#reg-faculty, #edit-faculty').forEach(sel => {
    FACULTIES.forEach(f => { const o=document.createElement('option'); o.value=f.id; o.textContent=f.name; sel.appendChild(o); });
  });
  const savedEmail = localStorage.getItem('tcas_current');
  if(savedEmail) {
    const users = getAllUsers();
    currentUser = users.find(u => u.email === savedEmail);
    if(currentUser) showPage('page-dashboard');
  }
});

// ===== NAVIGATION =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(id);
  if(page) page.classList.add('active');
  // update sidebar active states
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.getAttribute('onclick')?.includes(id));
  });
  if(id==='page-dashboard' && currentUser) renderDashboard();
  if(id==='page-portfolio') renderPortfolio();
  if(id==='page-explore') renderExplore('all');
  if(id==='page-recommend') renderRecommend();
  if(id==='page-roadmap') renderRoadmap();
  if(id==='page-profile') renderProfile();
  if(id==='page-community') renderCommunity();
  if(id==='page-chat') renderChatPage();
  if(id==='page-tcasinfo') initTcasInfo();
  // close mobile menu
  document.querySelectorAll('.sidebar').forEach(s => s.classList.remove('open'));
}
function toggleMobileMenu() { document.querySelectorAll('.sidebar').forEach(s => s.classList.toggle('open')); }

// ===== AUTH =====
function handleRegister(e) {
  e.preventDefault();
  const email = document.getElementById('reg-email').value;
  const users = getAllUsers();
  if(users.find(u => u.email === email)) { toast('อีเมลนี้ถูกใช้แล้ว ลองเข้าสู่ระบบ'); return; }
  currentUser = {
    name: document.getElementById('reg-name').value,
    email: email,
    password: document.getElementById('reg-password').value,
    year: document.getElementById('reg-year').value,
    track: document.getElementById('reg-track').value,
    faculty: document.getElementById('reg-faculty').value,
    bio: '',
    school: '',
    isPublic: false,
    activities: [],
    roadmap: [],
    friends: [],
    friendRequests: []
  };
  updateUserInList(currentUser);
  localStorage.setItem('tcas_current', currentUser.email);
  toast('สมัครสมาชิกสำเร็จ! 🎉');
  showPage('page-dashboard');
}
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const users = getAllUsers();
  const found = users.find(u => u.email === email && u.password === password);
  if(found) {
    currentUser = found;
    localStorage.setItem('tcas_current', currentUser.email);
    toast('เข้าสู่ระบบสำเร็จ! 👋');
    showPage('page-dashboard');
  } else {
    toast('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
  }
}
function handleLogout() { currentUser=null; localStorage.removeItem('tcas_current'); showPage('page-landing'); toast('ออกจากระบบแล้ว'); }

function handleGoogleAuth(type) {
  // Simulate Google Auth
  toast('กำลังเชื่อมต่อกับ Google... ⏳');
  setTimeout(() => {
    const email = 'google_user@gmail.com';
    const name = 'Google User';
    const users = getAllUsers();
    let found = users.find(u => u.email === email);
    
    if (type === 'register') {
      if (found) {
        toast('บัญชี Google นี้ลงทะเบียนแล้ว กำลังเข้าสู่ระบบ...');
      } else {
        found = {
          name: name,
          email: email,
          password: 'google_oauth_dummy',
          year: 'ม.6',
          track: 'วิทย์-คณิต',
          faculty: 'eng',
          bio: 'เชื่อมต่อผ่าน Google',
          school: '',
          isPublic: false,
          activities: [],
          roadmap: [],
          friends: [],
          friendRequests: []
        };
        updateUserInList(found);
        toast('สมัครสมาชิกด้วย Google สำเร็จ! 🎉');
      }
    } else {
      if (!found) {
        toast('ไม่พบบัญชี กรุณาสมัครสมาชิกก่อน');
        return;
      }
      toast('เข้าสู่ระบบด้วย Google สำเร็จ! 👋');
    }
    
    currentUser = found;
    localStorage.setItem('tcas_current', currentUser.email);
    showPage('page-dashboard');
  }, 1000);
}

// ===== DASHBOARD =====
function renderDashboard() {
  if(!currentUser) return;
  const fac = FACULTIES.find(f=>f.id===currentUser.faculty);
  document.getElementById('greeting').textContent = `สวัสดี, ${currentUser.name}! 👋`;
  document.getElementById('faculty-label').textContent = `คณะเป้าหมาย: ${fac?.name||'—'} | ${currentUser.year} | ${currentUser.track}`;
  const scores = calcScores();
  const total = Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/5);
  drawScoreRing(total);
  document.getElementById('score-value').textContent = total+'%';
  document.getElementById('score-label').textContent = total>=80?'พอร์ตแข็งแกร่งมาก! 💪':total>=50?'กำลังไปได้ดี เพิ่มอีกนิด!':'เริ่มเพิ่มกิจกรรมเลย!';
  // Criteria
  const cl = document.getElementById('criteria-list');
  if(fac && cl) {
    cl.innerHTML = '';
    Object.entries(fac.weights).forEach(([k,v]) => {
      cl.innerHTML += `<div class="criteria-item"><span>${CAT_LABELS[k]}</span><span class="tag">น้ำหนัก ${v}%</span></div>`;
    });
  }
  drawRadar(scores);
}

function calcScores() {
  const scores = {}; CAT_KEYS.forEach(k=>scores[k]=0);
  if(!currentUser) return scores;
  const fac = FACULTIES.find(f=>f.id===currentUser.faculty);
  currentUser.activities.forEach(a => {
    const pts = parseInt(a.level)||1;
    scores[a.category] = Math.min(100, (scores[a.category]||0) + pts*20);
  });
  // weight by faculty
  if(fac) { CAT_KEYS.forEach(k => { scores[k] = Math.min(100, Math.round(scores[k] * ((fac.weights[k]||0)/25))); }); }
  return scores;
}

function drawScoreRing(pct) {
  const c = document.getElementById('score-ring'); if(!c) return;
  const ctx=c.getContext('2d'), cx=90, cy=90, r=72, lw=14;
  ctx.clearRect(0,0,180,180);
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.strokeStyle='#FFF0E0'; ctx.lineWidth=lw; ctx.stroke();
  ctx.beginPath(); ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+(Math.PI*2*pct/100));
  const g=ctx.createLinearGradient(0,0,180,180); g.addColorStop(0,'#FF6B35'); g.addColorStop(1,'#FFA556');
  ctx.strokeStyle=g; ctx.lineWidth=lw; ctx.lineCap='round'; ctx.stroke();
}

function drawRadar(scores) {
  const c=document.getElementById('radar-chart'); if(!c) return;
  const ctx=c.getContext('2d'), cx=140, cy=140, r=100, n=5;
  ctx.clearRect(0,0,280,280);
  const angles = CAT_KEYS.map((_,i) => -Math.PI/2 + (Math.PI*2*i/n));
  // grid
  [0.25,0.5,0.75,1].forEach(s => {
    ctx.beginPath();
    angles.forEach((a,i) => { const x=cx+Math.cos(a)*r*s, y=cy+Math.sin(a)*r*s; i===0?ctx.moveTo(x,y):ctx.lineTo(x,y); });
    ctx.closePath(); ctx.strokeStyle='#F0DED0'; ctx.lineWidth=1; ctx.stroke();
  });
  // axes + labels
  const shortLabels = ['วิชาการ','กีฬา','จิตอาสา','ผลงาน','ทักษะ'];
  angles.forEach((a,i) => {
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);
    ctx.strokeStyle='#F0DED0'; ctx.stroke();
    const lx=cx+Math.cos(a)*(r+20), ly=cy+Math.sin(a)*(r+20);
    ctx.fillStyle='#8B6F5E'; ctx.font='500 11px Prompt'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(shortLabels[i],lx,ly);
  });
  // data
  ctx.beginPath();
  angles.forEach((a,i) => {
    const v=scores[CAT_KEYS[i]]/100, x=cx+Math.cos(a)*r*v, y=cy+Math.sin(a)*r*v;
    i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
  });
  ctx.closePath(); ctx.fillStyle='rgba(255,107,53,0.2)'; ctx.fill();
  ctx.strokeStyle='#FF6B35'; ctx.lineWidth=2.5; ctx.stroke();
  // dots
  angles.forEach((a,i) => {
    const v=scores[CAT_KEYS[i]]/100;
    ctx.beginPath(); ctx.arc(cx+Math.cos(a)*r*v,cy+Math.sin(a)*r*v,4,0,Math.PI*2);
    ctx.fillStyle='#FF6B35'; ctx.fill(); ctx.strokeStyle='#fff'; ctx.lineWidth=2; ctx.stroke();
  });
}

// ===== PORTFOLIO =====
function renderPortfolio() {
  if(!currentUser) return;
  const list = document.getElementById('activity-list');
  const cnt = document.getElementById('activity-count');
  const acts = currentUser.activities||[];
  cnt.textContent = acts.length + ' รายการ';
  if(acts.length===0) {
    list.innerHTML = '<div class="empty-state"><span>📋</span><p>ยังไม่มีกิจกรรม<br>เพิ่มกิจกรรมแรกของคุณเลย!</p></div>';
  } else {
    list.innerHTML = acts.map((a,i) => `
      <div class="activity-item">
        <div class="activity-info"><strong>${a.name}</strong><small>${a.desc||''}</small></div>
        <span class="activity-badge badge-${a.category}">${CAT_LABELS[a.category]}</span>
        <button class="delete-btn" onclick="removeActivity(${i})">✕</button>
      </div>`).join('');
  }
  renderScoreBars();
}

function addActivity(e) {
  e.preventDefault();
  if(!currentUser) return;
  const a = {
    name: document.getElementById('act-name').value,
    category: document.getElementById('act-category').value,
    level: document.getElementById('act-level').value,
    desc: document.getElementById('act-desc').value
  };
  currentUser.activities.push(a);
  save(); toast('เพิ่มกิจกรรมสำเร็จ! ✅');
  document.getElementById('activity-form').reset();
  renderPortfolio();
}

function removeActivity(i) {
  if(!currentUser) return;
  currentUser.activities.splice(i,1);
  save(); renderPortfolio(); toast('ลบกิจกรรมแล้ว');
}

function renderScoreBars() {
  const el = document.getElementById('score-bars'); if(!el) return;
  const scores = calcScores();
  el.innerHTML = CAT_KEYS.map(k => `
    <div class="score-bar-item">
      <div class="bar-value">${scores[k]}%</div>
      <div class="bar-container"><div class="bar-fill" style="height:${scores[k]}%"></div></div>
      <div class="bar-label">${CAT_LABELS[k].split(' ')[1]||CAT_LABELS[k]}</div>
    </div>`).join('');
}

// ===== EXPLORE =====
function renderExplore(cat) {
  const grid = document.getElementById('explore-grid'); if(!grid) return;
  const items = cat==='all' ? SAMPLE_ACTIVITIES : SAMPLE_ACTIVITIES.filter(a=>a.cat===cat);
  grid.innerHTML = items.map(a => `
    <div class="explore-card">
      <div class="card-cat">${CAT_LABELS[a.cat]}</div>
      <h4>${a.name}</h4>
      <p>${a.desc}</p>
      <div class="card-meta">
        <span>📅 ${a.date}</span>
        <span>📍 ${a.level}</span>
      </div>
      <div style="margin-top:14px;display:flex;gap:8px">
        <button class="btn btn-primary btn-sm" onclick="addToRoadmap('${a.name}','${a.cat}','${a.date}')">+ Roadmap</button>
        <button class="btn btn-outline btn-sm" onclick="quickAdd('${a.name}','${a.cat}')">+ พอร์ต</button>
      </div>
    </div>`).join('');
}
function filterActivities(cat, btn) {
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  if(btn) btn.classList.add('active');
  renderExplore(cat);
}
function quickAdd(name, cat) {
  if(!currentUser) return;
  currentUser.activities.push({name,category:cat,level:'2',desc:''});
  save(); toast(`เพิ่ม "${name}" ลงพอร์ตแล้ว! ✅`);
}

// ===== RECOMMEND =====
function renderRecommend() {
  const el = document.getElementById('recommend-list'); if(!el||!currentUser) return;
  const scores = calcScores();
  const sorted = CAT_KEYS.map(k=>({key:k,score:scores[k]})).sort((a,b)=>a.score-b.score);
  const weakest = sorted.slice(0,3);
  let html = '';
  weakest.forEach((w,i) => {
    const recs = SAMPLE_ACTIVITIES.filter(a=>a.cat===w.key).slice(0,2);
    recs.forEach(a => {
      html += `
      <div class="recommend-card">
        <span class="priority">${i===0?'⚡ สำคัญมาก':i===1?'📌 แนะนำ':'💡 เสริม'}</span>
        <h4>${a.name}</h4>
        <p>${a.desc}</p>
        <div class="reason">💬 หมวด "${CAT_LABELS[w.key]}" ของคุณยังอยู่ที่ ${w.score}% — กิจกรรมนี้จะช่วยเพิ่มคะแนนได้</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-primary btn-sm" onclick="addToRoadmap('${a.name}','${a.cat}','${a.date}')">+ เพิ่มลง Roadmap</button>
          <button class="btn btn-outline btn-sm" onclick="quickAdd('${a.name}','${a.cat}')">+ เพิ่มลงพอร์ต</button>
        </div>
      </div>`;
    });
  });
  el.innerHTML = html || '<div class="card"><p>ยังไม่มีข้อมูลเพียงพอ กรุณาเพิ่มกิจกรรมก่อน</p></div>';
}

// ===== ROADMAP =====
function addToRoadmap(name, cat, date) {
  if(!currentUser) return;
  if(!currentUser.roadmap) currentUser.roadmap = [];
  if(currentUser.roadmap.find(r=>r.name===name)) { toast('มีในRoadmapแล้ว'); return; }
  currentUser.roadmap.push({name, cat, date, done:false});
  save(); toast(`เพิ่ม "${name}" ลง Roadmap แล้ว! 🗺️`);
}

function renderRoadmap() {
  if(!currentUser) return;
  const rm = currentUser.roadmap || [];
  const tl = document.getElementById('roadmap-timeline');
  const doneCount = rm.filter(r=>r.done).length;
  const pct = rm.length ? Math.round(doneCount/rm.length*100) : 0;
  document.getElementById('roadmap-percent').textContent = pct+'%';
  setTimeout(()=>{ document.getElementById('roadmap-bar').style.width = pct+'%'; }, 100);

  if(rm.length===0) {
    tl.innerHTML = '<div class="card" style="text-align:center;padding:40px"><span style="font-size:3rem">🗺️</span><p style="margin-top:12px;color:#8B6F5E">ยังไม่มีกิจกรรมใน Roadmap<br>ไปเพิ่มจากหน้า "ค้นหากิจกรรม" หรือ "แนะนำ"</p></div>';
  } else {
    tl.innerHTML = rm.map((r,i) => `
      <div class="timeline-item">
        <div class="timeline-dot ${r.done?'done':''}"></div>
        <div class="timeline-content">
          <div class="t-date">📅 ${r.date||'ไม่ระบุ'}</div>
          <h4>${r.name}</h4>
          <p>${CAT_LABELS[r.cat]||''}</p>
          <div class="timeline-actions">
            ${r.done
              ? '<button class="btn btn-ghost btn-sm" disabled>✅ เสร็จแล้ว</button>'
              : `<button class="btn btn-primary btn-sm" onclick="markDone(${i})">✓ เสร็จแล้ว</button>`
            }
            <button class="btn btn-outline btn-sm" onclick="removeRoadmap(${i})">ลบ</button>
          </div>
        </div>
      </div>`).join('');
  }
  // Show complete card if 100%
  const cc = document.getElementById('portfolio-complete');
  if(cc) cc.style.display = (pct>=100 && rm.length>0) ? 'block' : 'none';
}

function markDone(i) {
  if(!currentUser) return;
  currentUser.roadmap[i].done = true;
  // Also add to portfolio
  const r = currentUser.roadmap[i];
  if(!currentUser.activities.find(a=>a.name===r.name)) {
    currentUser.activities.push({name:r.name, category:r.cat, level:'2', desc:'จาก Roadmap'});
  }
  save(); renderRoadmap(); toast('ทำเสร็จแล้ว! 🎉');
}

function removeRoadmap(i) {
  if(!currentUser) return;
  currentUser.roadmap.splice(i,1);
  save(); renderRoadmap(); toast('ลบออกจาก Roadmap แล้ว');
}

// ===== PROFILE =====
function renderProfile() {
  if(!currentUser) return;
  const fac = FACULTIES.find(f=>f.id===currentUser.faculty);
  const scores = calcScores();
  const total = Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/5);
  document.getElementById('profile-avatar').textContent = currentUser.name.charAt(0);
  document.getElementById('profile-name').textContent = currentUser.name;
  document.getElementById('profile-email').textContent = currentUser.email;
  document.getElementById('profile-year').textContent = currentUser.year;
  document.getElementById('profile-track').textContent = currentUser.track;
  document.getElementById('profile-faculty').textContent = fac?.name || '—';
  document.getElementById('profile-total-score').textContent = total + '%';
  document.getElementById('profile-activity-count').textContent = (currentUser.activities||[]).length;
  document.getElementById('profile-roadmap-count').textContent = (currentUser.roadmap||[]).length;
  document.getElementById('profile-public').checked = !!currentUser.isPublic;
  // Fill edit form
  document.getElementById('edit-name').value = currentUser.name;
  document.getElementById('edit-bio').value = currentUser.bio || '';
  document.getElementById('edit-year').value = currentUser.year;
  document.getElementById('edit-track').value = currentUser.track;
  document.getElementById('edit-faculty').value = currentUser.faculty;
  document.getElementById('edit-school').value = currentUser.school || '';
  // Activities list
  const actList = document.getElementById('profile-activities-list');
  const acts = currentUser.activities || [];
  if(acts.length === 0) {
    actList.innerHTML = '<div class="empty-state"><span>📋</span><p>ยังไม่มีกิจกรรม</p></div>';
  } else {
    actList.innerHTML = acts.slice(0,8).map(a => `
      <div class="profile-act-item">
        <span class="act-icon">${CAT_LABELS[a.category]?.split(' ')[0] || '📌'}</span>
        <div class="act-detail"><strong>${a.name}</strong><small>${CAT_LABELS[a.category] || ''}</small></div>
        <span class="activity-badge badge-${a.category}">${['โรงเรียน','จังหวัด','ประเทศ','นานาชาติ'][parseInt(a.level)-1] || ''}</span>
      </div>`).join('');
  }
}
function saveProfile(e) {
  e.preventDefault();
  if(!currentUser) return;
  currentUser.name = document.getElementById('edit-name').value;
  currentUser.bio = document.getElementById('edit-bio').value;
  currentUser.year = document.getElementById('edit-year').value;
  currentUser.track = document.getElementById('edit-track').value;
  currentUser.faculty = document.getElementById('edit-faculty').value;
  currentUser.school = document.getElementById('edit-school').value;
  save(); renderProfile(); toast('บันทึกข้อมูลสำเร็จ! ✅');
}
function togglePublicProfile() {
  if(!currentUser) return;
  currentUser.isPublic = document.getElementById('profile-public').checked;
  save(); toast(currentUser.isPublic ? 'เปิดโปรไฟล์สาธารณะแล้ว 🌐' : 'ปิดโปรไฟล์สาธารณะแล้ว 🔒');
}

// ===== COMMUNITY =====
function renderCommunity() {
  const grid = document.getElementById('community-grid'); if(!grid) return;
  const search = (document.getElementById('community-search')?.value || '').toLowerCase();
  const users = getAllUsers().filter(u => u.isPublic && u.email !== currentUser?.email);
  const filtered = search ? users.filter(u => {
    const fac = FACULTIES.find(f=>f.id===u.faculty);
    return u.name.toLowerCase().includes(search) || (fac?.name||'').includes(search) || (u.school||'').toLowerCase().includes(search);
  }) : users;
  if(filtered.length === 0) {
    grid.innerHTML = '<div class="card" style="text-align:center;padding:40px;grid-column:1/-1"><span style="font-size:3rem">🔍</span><p style="margin-top:12px;color:#8B6F5E">ไม่พบสมาชิกที่เปิดโปรไฟล์สาธารณะ</p></div>';
    return;
  }
  grid.innerHTML = filtered.map((u, i) => {
    const fac = FACULTIES.find(f=>f.id===u.faculty);
    const scores = calcScoresFor(u);
    const total = Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/5);
    return `
    <div class="user-card" onclick="openProfileModal(${i})" data-idx="${i}">
      <div class="user-avatar">${u.name.charAt(0)}</div>
      <h4>${u.name}</h4>
      <div class="user-faculty">${fac?.name || '—'} · ${u.year}</div>
      <div class="user-bio">${u.bio || 'ยังไม่มีคำแนะนำตัว'}</div>
      <span class="user-score">Score ${total}%</span>
    </div>`;
  }).join('');
  // store filtered list for modal
  window._communityFiltered = filtered;
}
function calcScoresFor(user) {
  const scores = {}; CAT_KEYS.forEach(k=>scores[k]=0);
  const fac = FACULTIES.find(f=>f.id===user.faculty);
  (user.activities||[]).forEach(a => {
    const pts = parseInt(a.level)||1;
    scores[a.category] = Math.min(100, (scores[a.category]||0) + pts*20);
  });
  if(fac) { CAT_KEYS.forEach(k => { scores[k] = Math.min(100, Math.round(scores[k] * ((fac.weights[k]||0)/25))); }); }
  return scores;
}
function openProfileModal(idx) {
  const users = window._communityFiltered || [];
  const u = users[idx]; if(!u) return;
  const fac = FACULTIES.find(f=>f.id===u.faculty);
  const scores = calcScoresFor(u);
  const total = Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/5);
  const mc = document.getElementById('modal-content');
  mc.innerHTML = `
    <div class="modal-profile-header">
      <div class="modal-avatar">${u.name.charAt(0)}</div>
      <h2>${u.name}</h2>
      <p>${fac?.name || '—'} · ${u.year} · ${u.track}</p>
      ${u.school ? `<p style="font-size:.8rem;color:#8B6F5E;margin-top:4px">🏫 ${u.school}</p>` : ''}
    </div>
    <div class="modal-stats">
      <div class="modal-stat"><strong>${total}%</strong><span>Score</span></div>
      <div class="modal-stat"><strong>${(u.activities||[]).length}</strong><span>กิจกรรม</span></div>
      <div class="modal-stat"><strong>${(u.roadmap||[]).length}</strong><span>Roadmap</span></div>
    </div>
    ${u.bio ? `<div class="modal-section"><h4>📝 แนะนำตัว</h4><div class="modal-bio">${u.bio}</div></div>` : ''}
    <div class="modal-section">
      <h4>🏆 กิจกรรม (${(u.activities||[]).length} รายการ)</h4>
      ${(u.activities||[]).map(a => `
        <div class="profile-act-item">
          <span class="act-icon">${CAT_LABELS[a.category]?.split(' ')[0] || '📌'}</span>
          <div class="act-detail"><strong>${a.name}</strong><small>${CAT_LABELS[a.category] || ''}</small></div>
        </div>`).join('')}
    </div>`;

  // Friend actions logic
  initUserSocials(currentUser);
  initUserSocials(u);
  const actionsEl = document.getElementById('modal-actions');
  
  if (currentUser.friends.includes(u.email)) {
    actionsEl.innerHTML = `<button class="btn btn-primary btn-full" onclick="startChat('${u.email}')">💬 ส่งข้อความแชท</button>`;
  } else if (u.friendRequests.includes(currentUser.email)) {
    actionsEl.innerHTML = `<button class="btn btn-outline btn-full" disabled>⏳ รอการตอบรับ...</button>`;
  } else if (currentUser.friendRequests.includes(u.email)) {
    actionsEl.innerHTML = `<button class="btn btn-primary btn-full" onclick="acceptFriendRequest('${u.email}')">✔️ ตอบรับคำขอเป็นเพื่อน</button>`;
  } else {
    actionsEl.innerHTML = `<button class="btn btn-outline btn-full" onclick="sendFriendRequest('${u.email}')">➕ เพิ่มเพื่อน</button>`;
  }

  document.getElementById('profile-modal').style.display = 'flex';
}
function closeModal(e) { if(e.target.classList.contains('modal-overlay')) e.target.style.display = 'none'; }

// ===== UTILS =====
function save() { if(currentUser) updateUserInList(currentUser); }
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2500);
}

// ===== AVATAR UPLOAD =====
function uploadAvatar(e) {
  const file = e.target.files[0]; if(!file||!currentUser) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    currentUser.avatar = ev.target.result;
    save(); renderProfile(); toast('เปลี่ยนรูปโปรไฟล์แล้ว! 📷');
  };
  reader.readAsDataURL(file);
}
function setAvatarDisplay(el, user) {
  if(user.avatar) {
    el.style.backgroundImage = `url(${user.avatar})`;
    el.classList.add('has-img'); el.textContent = '';
  } else {
    el.style.backgroundImage = ''; el.classList.remove('has-img');
    el.textContent = user.name.charAt(0);
  }
}

// Override renderProfile to use avatar
const _origRenderProfile = renderProfile;
renderProfile = function() {
  _origRenderProfile();
  if(!currentUser) return;
  const av = document.getElementById('profile-avatar');
  if(av) setAvatarDisplay(av, currentUser);
};

// ===== TCAS ROUNDS 2 & 3 DATA =====
let currentTcasTab = 'quota';
const TCAS_DATA = {
  eng: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT3 (วิศวะ)',type:'tpat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'}],criteria:[['TGAT','≥ 30%'],['TPAT3','≥ 25%'],['A-Level คณิต 1','≥ 25%'],['A-Level ฟิสิกส์','≥ 20%']],note:'บางมหาวิทยาลัยใช้โควตาภูมิภาค เช่น พื้นที่ภาคเหนือ/อีสาน ต้องมีทะเบียนบ้านในพื้นที่'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT3 (วิศวะ)',type:'tpat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','20%'],['TPAT3','30%'],['A-Level คณิต 1','20%'],['A-Level ฟิสิกส์','15%'],['A-Level เคมี','5%'],['A-Level อังกฤษ','10%']],note:'คะแนนรวมขั้นต่ำแตกต่างตามมหาวิทยาลัย เช่น จุฬาฯ ~20,000 คะแนน, มธ. ~18,000'}
  },
  med: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1 (แพทย์)',type:'tpat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['กสพท (วิชาเฉพาะ)','30%'],['A-Level วิทย์รวม','40%'],['TGAT/TPAT1','30%']],note:'ต้องผ่านเกณฑ์ กสพท ก่อน และมีคะแนนขั้นต่ำแต่ละวิชา ≥ 30%'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1 (กสพท)',type:'tpat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['กสพท วิชาเฉพาะ','30%'],['A-Level 7 วิชา','70%']],note:'แพทย์ใช้ระบบ กสพท (กลุ่มสถาบันแพทย์) ไม่ได้ใช้ระบบ Admission ตรง'}
  },
  comm: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'},{name:'A-Level สังคม',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level ภาษาไทย','25%'],['A-Level อังกฤษ','25%'],['A-Level สังคม','20%']],note:'บางสาขาอาจมีสอบปฏิบัติเพิ่มเติม เช่น สาขาวารสารศาสตร์ สาขาภาพยนตร์'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','40%'],['A-Level ภาษาไทย','20%'],['A-Level สังคม','20%'],['A-Level อังกฤษ','20%']],note:'ทุกสายสามารถสมัครได้ เน้นทักษะภาษาและสังคม'}
  },
  biz: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'},{name:'A-Level สังคม',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level คณิต 1','30%'],['A-Level อังกฤษ','25%'],['A-Level สังคม','15%']],note:'สาย ศิลป์-ภาษา สมัครได้บางสาขา เช่น การจัดการทั่วไป'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level คณิต 1','40%'],['A-Level อังกฤษ','30%']],note:'เน้นคณิตศาสตร์และภาษาอังกฤษ บางหลักสูตร Inter ใช้ SAT/IELTS'}
  },
  arch: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT4 (สถาปัตย์)',type:'tpat'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['TGAT','20%'],['TPAT4','50%'],['A-Level คณิต 1','30%']],note:'TPAT4 เน้นทดสอบทักษะการออกแบบ ความคิดสร้างสรรค์ และทักษะเชิงช่าง'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT4 (สถาปัตย์)',type:'tpat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'}],criteria:[['TGAT','15%'],['TPAT4','40%'],['A-Level คณิต 1','25%'],['A-Level ฟิสิกส์','20%']],note:'TPAT4 คือวิชาสำคัญที่สุด ฝึกวาดภาพ สเกตช์ และออกแบบให้มาก'}
  },
  sci: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT3 (วิทย์)',type:'tpat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ชีววิทยา',type:'alevel'}],criteria:[['TGAT','20%'],['TPAT3','20%'],['A-Level คณิต 1','20%'],['A-Level วิทย์ 3 วิชา','40%']],note:'บางสาขาเน้นวิชาเฉพาะ เช่น วิทยาการคอมฯ เน้นคณิต, ชีววิทยาเน้นชีวะ'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','20%'],['A-Level คณิต 1','20%'],['A-Level วิทย์ 3 วิชา','50%'],['A-Level อังกฤษ','10%']],note:'ต้องเป็นสายวิทย์-คณิตเท่านั้น คะแนนขั้นต่ำ ≥ 25% ทุกวิชา'}
  },
  law: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level ภาษาไทย','25%'],['A-Level สังคม','25%'],['A-Level อังกฤษ','20%']],note:'ทุกสายสมัครได้ เน้นทักษะการอ่าน วิเคราะห์ และตีความ'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level ภาษาไทย','25%'],['A-Level สังคม','25%'],['A-Level อังกฤษ','20%']],note:'บางมหาวิทยาลัยมีสอบข้อเขียนเพิ่มเติม เช่น ม.ธรรมศาสตร์'}
  },
  edu: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT5 (ครู)',type:'tpat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','20%'],['TPAT5','40%'],['A-Level ภาษาไทย','20%'],['A-Level อังกฤษ','20%']],note:'TPAT5 วัดความถนัดทางวิชาชีพครู รวมทัศนคติและจิตวิทยาการศึกษา'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT5 (ครู)',type:'tpat'},{name:'A-Level ตามสาขา',type:'alevel'}],criteria:[['TGAT','20%'],['TPAT5','30%'],['A-Level ตามสาขา','50%']],note:'สาขาวิชาที่สอน เช่น ครูคณิต ใช้ A-Level คณิต, ครูอังกฤษ ใช้ A-Level อังกฤษ'}
  },
  arts: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'},{name:'A-Level สังคม',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level ภาษาไทย','25%'],['A-Level อังกฤษ','25%'],['A-Level สังคม','20%']],note:'เน้นภาษาที่ 3 ด้วยสำหรับบางสาขา'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','20%'],['A-Level ภาษาไทย','30%'],['A-Level สังคม','20%'],['A-Level อังกฤษ','30%']],note:'คะแนนภาษาอังกฤษมีความสำคัญมาก'}
  },
  polsci: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'},{name:'A-Level สังคม',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level ภาษาไทย','20%'],['A-Level อังกฤษ','20%'],['A-Level สังคม','30%']],note:'บางที่มีสอบข้อเขียนความรู้ทั่วไปทางการเมือง'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','25%'],['A-Level ภาษาไทย','25%'],['A-Level สังคม','30%'],['A-Level อังกฤษ','20%']],note:'การอ่านข่าวสารบ้านเมืองช่วยในการสอบสัมภาษณ์ได้'}
  },
  nurse: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','20%'],['A-Level ชีววิทยา','30%'],['A-Level เคมี','20%'],['A-Level อังกฤษ','30%']],note:'เน้นความรับผิดชอบและจิตอาสาในการพยาบาล'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','20%'],['A-Level ชีววิทยา','30%'],['A-Level เคมี','20%'],['A-Level วิทย์อื่นๆ','10%'],['A-Level อังกฤษ','20%']],note:'ต้องเป็นสายวิทย์-คณิตเท่านั้น'}
  },
  dent: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1 (กสพท)',type:'tpat'},{name:'A-Level วิทย์รวม',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['กสพท','30%'],['A-Level วิทย์','40%'],['TGAT','30%']],note:'คล้ายแพทยศาสตร์ แต่จะเน้นทักษะหัตถการเพิ่มเติม'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1 (กสพท)',type:'tpat'},{name:'A-Level 7 วิชา',type:'alevel'}],criteria:[['กสพท','30%'],['A-Level 7 วิชา','70%']],note:'ใช้ระบบ กสพท'}
  },
  pharm: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1 (กสพท)',type:'tpat'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['กสพท','30%'],['A-Level วิทย์','40%'],['TGAT','30%']],note:'เคมีคือวิชาที่สำคัญที่สุด'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1 (กสพท)',type:'tpat'},{name:'A-Level 7 วิชา',type:'alevel'}],criteria:[['กสพท','30%'],['A-Level 7 วิชา','70%']],note:'ใช้ระบบ กสพท'}
  },
  allied: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','20%'],['A-Level ชีววิทยา','30%'],['A-Level เคมี','30%'],['A-Level อังกฤษ','20%']],note:'เหมาะสำหรับผู้ที่สนใจการแพทย์แต่ไม่ได้เรียนแพทย์โดยตรง'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['TGAT','20%'],['A-Level วิทย์ 3 วิชา','60%'],['A-Level คณิต 1','20%']],note:'สายวิทย์-คณิตเท่านั้น'}
  },
  finearts: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT2 (ศิลปกรรม)',type:'tpat'}],criteria:[['TGAT','30%'],['TPAT2','70%']],note:'ผลงาน Portfolio (รูปวาด/ผลงานศิลปะ) มีน้ำหนักมากที่สุดในทุกรอบ'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT2 (ศิลปกรรม)',type:'tpat'},{name:'A-Level ภาษาไทย',type:'alevel'}],criteria:[['TGAT','20%'],['TPAT2','60%'],['A-Level ภาษาไทย','20%']],note:'ทักษะทางศิลปะเป็นตัวชี้วัดหลักในการสอบเข้า'}
  },
  agri: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT3 (วิทย์)',type:'tpat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'}],criteria:[['TGAT','20%'],['TPAT3','20%'],['A-Level ชีววิทยา','30%'],['A-Level เคมี','30%']],note:'มีความมุ่งมั่นในการพัฒนาการเกษตร'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['TGAT','20%'],['A-Level ชีววิทยา','30%'],['A-Level เคมี','30%'],['A-Level คณิต 1','20%']],note:'สายวิทย์-คณิตเท่านั้น'}
  }
};
const ALL_TRACKS = ['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'];

function initTcasInfo() {
  const sel = document.getElementById('tcas-faculty-select');
  if(sel && sel.options.length <= 1) {
    FACULTIES.forEach(f => { const o=document.createElement('option'); o.value=f.id; o.textContent=f.name; sel.appendChild(o); });
  }
  renderTcasInfo();
}
function switchTcasTab(tab, btn) {
  currentTcasTab = tab;
  document.querySelectorAll('.tcas-tab').forEach(t=>t.classList.remove('active'));
  if(btn) btn.classList.add('active');
  renderTcasInfo();
}
function renderTcasInfo() {
  const el = document.getElementById('tcas-info-content'); if(!el) return;
  const facFilter = document.getElementById('tcas-faculty-select')?.value || 'all';
  const facList = facFilter==='all' ? FACULTIES : FACULTIES.filter(f=>f.id===facFilter);
  el.innerHTML = facList.map(f => {
    const data = TCAS_DATA[f.id]?.[currentTcasTab];
    if(!data) return '';
    return `
    <div class="tcas-faculty-card">
      <h3>${f.name}</h3>
      <div class="tcas-faculty-sub">${currentTcasTab==='quota'?'📌 รอบ 2 โควตา':'📝 รอบ 3 Admission'}</div>
      <div class="tcas-section">
        <h4>📚 วิชาที่ใช้สอบ</h4>
        <div class="tcas-exam-tags">${data.exams.map(e=>`<span class="exam-tag ${e.type}">${e.name}</span>`).join('')}</div>
      </div>
      <div class="tcas-section">
        <h4>📊 สัดส่วนคะแนน</h4>
        <table class="tcas-criteria-table"><thead><tr><th>วิชา/เกณฑ์</th><th>น้ำหนัก</th></tr></thead><tbody>${data.criteria.map(c=>`<tr><td>${c[0]}</td><td><strong>${c[1]}</strong></td></tr>`).join('')}</tbody></table>
      </div>
      <div class="tcas-section">
        <h4>🎓 สายที่สมัครได้</h4>
        <div class="tcas-track-list">${ALL_TRACKS.map(t=>`<span class="track-chip ${data.tracks.includes(t)?'allowed':'not-allowed'}">${t}</span>`).join('')}</div>
      </div>
      <div class="tcas-note">💡 ${data.note}</div>
    </div>`;
  }).join('');
}

// ===== FRIENDS & CHAT SYSTEM =====
function initUserSocials(user) {
  if(!user.friends) user.friends = [];
  if(!user.friendRequests) user.friendRequests = [];
}

function sendFriendRequest(targetEmail) {
  const users = getAllUsers();
  const targetUser = users.find(u => u.email === targetEmail);
  if(!targetUser) return;
  initUserSocials(targetUser);
  if(!targetUser.friendRequests.includes(currentUser.email)) {
    targetUser.friendRequests.push(currentUser.email);
    updateUserInList(targetUser);
    toast('ส่งคำขอเป็นเพื่อนแล้ว 📨');
    // Refresh modal if open
    const modalContent = document.getElementById('modal-content').innerHTML;
    if(modalContent) openProfileModal(window._communityFiltered.findIndex(u=>u.email===targetEmail));
  }
}

function acceptFriendRequest(targetEmail) {
  const users = getAllUsers();
  const targetUser = users.find(u => u.email === targetEmail);
  if(!targetUser) return;
  
  initUserSocials(currentUser);
  initUserSocials(targetUser);
  
  // Remove request
  currentUser.friendRequests = currentUser.friendRequests.filter(e => e !== targetEmail);
  
  // Add to friends
  if(!currentUser.friends.includes(targetEmail)) currentUser.friends.push(targetEmail);
  if(!targetUser.friends.includes(currentUser.email)) targetUser.friends.push(currentUser.email);
  
  updateUserInList(currentUser);
  updateUserInList(targetUser);
  toast('เพิ่มเพื่อนสำเร็จแล้ว! 🎉');
  
  // Refresh UI
  if(document.getElementById('page-chat').classList.contains('active')) {
    renderChatPage();
  } else if(document.getElementById('profile-modal').style.display === 'flex') {
    openProfileModal(window._communityFiltered.findIndex(u=>u.email===targetEmail));
  }
}

let activeChatFriend = null;

function startChat(targetEmail) {
  document.getElementById('profile-modal').style.display = 'none';
  showPage('page-chat');
  selectFriendToChat(targetEmail);
}

function renderChatPage() {
  initUserSocials(currentUser);
  const users = getAllUsers();
  
  // Render Friends
  const friendsList = document.getElementById('friends-list');
  if(currentUser.friends.length === 0) {
    friendsList.innerHTML = '<p style="color:var(--text-secondary);font-size:.85rem;padding:10px;">ยังไม่มีเพื่อน</p>';
  } else {
    friendsList.innerHTML = currentUser.friends.map(email => {
      const f = users.find(u=>u.email===email);
      if(!f) return '';
      const isAct = activeChatFriend === email ? 'active' : '';
      return `
        <div class="friend-item ${isAct}" onclick="selectFriendToChat('${f.email}')">
          <div class="friend-avatar" style="${f.avatar ? `background-image:url(${f.avatar})` : ''}">${f.avatar ? '' : f.name.charAt(0)}</div>
          <div class="friend-info">
            <div class="friend-name">${f.name}</div>
          </div>
        </div>`;
    }).join('');
  }
  
  // Render Friend Requests
  const requestsList = document.getElementById('friend-requests-list');
  if(currentUser.friendRequests.length === 0) {
    requestsList.innerHTML = '<p style="color:var(--text-secondary);font-size:.85rem;padding:10px;">ไม่มีคำขอใหม่</p>';
  } else {
    requestsList.innerHTML = currentUser.friendRequests.map(email => {
      const f = users.find(u=>u.email===email);
      if(!f) return '';
      return `
        <div class="friend-item" style="cursor:default;">
          <div class="friend-avatar" style="${f.avatar ? `background-image:url(${f.avatar})` : ''}">${f.avatar ? '' : f.name.charAt(0)}</div>
          <div class="friend-info">
            <div class="friend-name">${f.name}</div>
            <div class="friend-request-actions">
              <button class="btn btn-primary btn-sm" style="padding:4px 8px;font-size:.7rem;" onclick="acceptFriendRequest('${f.email}')">ยอมรับ</button>
            </div>
          </div>
        </div>`;
    }).join('');
  }
}

function getChatId(email1, email2) {
  return [email1, email2].sort().join('_');
}

function getAllChats() {
  return JSON.parse(localStorage.getItem('tcas_chats') || '{}');
}

function selectFriendToChat(email) {
  activeChatFriend = email;
  renderChatPage(); // Update active state in sidebar
  
  const users = getAllUsers();
  const f = users.find(u=>u.email===email);
  if(!f) return;
  
  document.getElementById('chat-header').innerHTML = `
    <div class="friend-avatar" style="${f.avatar ? `background-image:url(${f.avatar})` : ''}">${f.avatar ? '' : f.name.charAt(0)}</div>
    <div><strong>${f.name}</strong><br><small style="color:var(--text-secondary)">${FACULTIES.find(fac=>fac.id===f.faculty)?.name || ''}</small></div>
  `;
  
  document.getElementById('chat-input-area').style.display = 'flex';
  renderChatMessages();
}

function renderChatMessages() {
  if(!activeChatFriend) return;
  const chatId = getChatId(currentUser.email, activeChatFriend);
  const chats = getAllChats();
  const msgs = chats[chatId] || [];
  
  const msgContainer = document.getElementById('chat-messages');
  if(msgs.length === 0) {
    msgContainer.innerHTML = `<div class="chat-empty-state">เริ่มการสนทนากับเพื่อนของคุณเลย! 👋</div>`;
  } else {
    msgContainer.innerHTML = msgs.map(m => {
      const isMe = m.sender === currentUser.email;
      const time = new Date(m.time).toLocaleTimeString('th-TH', {hour:'2-digit', minute:'2-digit'});
      return `
        <div class="chat-bubble ${isMe ? 'sent' : 'received'}">
          ${m.text}
          <div class="chat-time">${time}</div>
        </div>
      `;
    }).join('');
  }
  msgContainer.scrollTop = msgContainer.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if(!text || !activeChatFriend) return;
  
  const chatId = getChatId(currentUser.email, activeChatFriend);
  const chats = getAllChats();
  if(!chats[chatId]) chats[chatId] = [];
  
  chats[chatId].push({
    sender: currentUser.email,
    text: text,
    time: new Date().getTime()
  });
  
  localStorage.setItem('tcas_chats', JSON.stringify(chats));
  input.value = '';
  renderChatMessages();
}

function searchAndAddFriend() {
  const input = document.getElementById('friend-search-input');
  if(!input || !currentUser) return;
  const targetStr = input.value.trim().toLowerCase();
  if(!targetStr) { toast('กรุณากรอกชื่อหรืออีเมลเพื่อน'); return; }
  if(targetStr === currentUser.email.toLowerCase() || targetStr === currentUser.name.toLowerCase()) {
    toast('ไม่สามารถเพิ่มตัวเองได้'); return;
  }
  const users = getAllUsers();
  const targetUser = users.find(u => u.email.toLowerCase() === targetStr || u.name.toLowerCase() === targetStr);
  if(!targetUser) {
    toast('ไม่พบผู้ใช้งานชื่อหรืออีเมลนี้ 😢'); return;
  }
  
  initUserSocials(currentUser);
  initUserSocials(targetUser);
  if(currentUser.friends.includes(targetUser.email)) {
    toast('เป็นเพื่อนกันอยู่แล้ว ✅'); return;
  }
  if(targetUser.friendRequests.includes(currentUser.email)) {
    toast('ส่งคำขอไปแล้ว รอการตอบรับ... ⏳'); return;
  }
  if(currentUser.friendRequests.includes(targetUser.email)) {
    acceptFriendRequest(targetUser.email);
    input.value = '';
    return;
  }
  
  sendFriendRequest(targetUser.email);
  input.value = '';
}
