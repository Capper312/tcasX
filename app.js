// ===== DATA =====
const FACULTIES = [
  // Health Sciences
  {id:'med',name:'แพทยศาสตร์',weights:{academic:40,volunteer:20,achievement:20,leadership:10,internship:10}},
  {id:'dent',name:'ทันตแพทยศาสตร์',weights:{academic:40,skill:20,volunteer:15,achievement:15,internship:10}},
  {id:'pharm',name:'เภสัชศาสตร์',weights:{academic:40,volunteer:15,achievement:20,skill:15,online_course:10}},
  {id:'vet',name:'สัตวแพทยศาสตร์',weights:{academic:35,volunteer:20,internship:25,achievement:10,skill:10}},
  {id:'nurse',name:'พยาบาลศาสตร์',weights:{academic:30,volunteer:35,leadership:15,achievement:10,internship:10}},
  {id:'allied',name:'สหเวชศาสตร์/เทคนิคการแพทย์',weights:{academic:35,volunteer:20,achievement:20,internship:15,skill:10}},
  {id:'pubhealth',name:'สาธารณสุขศาสตร์',weights:{academic:30,volunteer:30,leadership:20,achievement:10,internship:10}},
  {id:'optom',name:'ทัศนมาตรศาสตร์',weights:{academic:35,skill:20,volunteer:20,achievement:15,internship:10}},
  {id:'medsci',name:'วิทยาศาสตร์การแพทย์',weights:{academic:40,achievement:25,internship:15,volunteer:10,online_course:10}},
  
  // Engineering & Tech
  {id:'eng',name:'วิศวกรรมศาสตร์',weights:{academic:35,achievement:25,skill:20,leadership:10,online_course:10}},
  {id:'it',name:'เทคโนโลยีสารสนเทศ/วิทยาการคอมพิวเตอร์',weights:{academic:25,skill:30,achievement:25,online_course:15,internship:5}},
  {id:'sci',name:'วิทยาศาสตร์',weights:{academic:40,achievement:30,skill:10,volunteer:10,online_course:10}},
  {id:'arch',name:'สถาปัตยกรรมศาสตร์',weights:{academic:15,skill:45,achievement:20,volunteer:10,internship:10}},
  {id:'aviation',name:'สถาบันการบิน',weights:{academic:25,skill:20,leadership:20,sports:20,volunteer:15}},
  
  // Agriculture & Environment
  {id:'agri',name:'เกษตรศาสตร์/วนศาสตร์',weights:{academic:30,volunteer:25,internship:20,achievement:15,skill:10}},
  {id:'agroind',name:'อุตสาหกรรมเกษตร',weights:{academic:35,achievement:20,internship:20,skill:15,volunteer:10}},
  {id:'fish',name:'ประมง',weights:{academic:30,volunteer:25,internship:20,achievement:15,sports:10}},
  
  // Social Sciences & Humanities
  {id:'law',name:'นิติศาสตร์',weights:{academic:35,leadership:20,volunteer:20,achievement:15,skill:10}},
  {id:'polsci',name:'รัฐศาสตร์',weights:{academic:30,leadership:30,volunteer:20,achievement:10,internship:10}},
  {id:'arts',name:'อักษรศาสตร์/ศิลปศาสตร์/มนุษยศาสตร์',weights:{academic:30,skill:25,achievement:20,volunteer:15,leadership:10}},
  {id:'comm',name:'นิเทศศาสตร์/วารสารศาสตร์',weights:{academic:15,skill:35,achievement:25,internship:15,leadership:10}},
  {id:'biz',name:'บริหารธุรกิจ/การบัญชี',weights:{academic:30,leadership:25,achievement:20,internship:15,skill:10}},
  {id:'econ',name:'เศรษฐศาสตร์',weights:{academic:35,achievement:20,leadership:20,online_course:15,internship:10}},
  {id:'edu',name:'ครุศาสตร์/ศึกษาศาสตร์',weights:{academic:25,volunteer:30,leadership:20,skill:15,achievement:10}},
  {id:'socwork',name:'สังคมสงเคราะห์ศาสตร์',weights:{academic:20,volunteer:40,leadership:20,internship:10,skill:10}},
  {id:'psych',name:'จิตวิทยา',weights:{academic:30,volunteer:30,leadership:15,skill:15,internship:10}},
  {id:'archaeo',name:'โบราณคดี',weights:{academic:35,volunteer:20,skill:15,achievement:15,internship:15}},
  
  // Arts & Design & Others
  {id:'finearts',name:'ศิลปกรรมศาสตร์/วิจิตรศิลป์/มัณฑนศิลป์',weights:{academic:10,skill:50,achievement:25,volunteer:5,internship:10}},
  {id:'music',name:'ดุริยางคศิลป์/ดนตรี',weights:{academic:10,skill:50,achievement:30,leadership:5,volunteer:5}},
  {id:'sports_sci',name:'วิทยาศาสตร์การกีฬา/พลศึกษา',weights:{academic:20,sports:50,achievement:15,leadership:10,volunteer:5}},
  {id:'tourism',name:'การท่องเที่ยวและการโรงแรม',weights:{academic:20,skill:25,volunteer:20,internship:20,leadership:15}},
  {id:'logistics',name:'โลจิสติกส์',weights:{academic:30,leadership:20,achievement:20,internship:15,online_course:15}}
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
let _currentExploreFilter = 'all';

// ===== FIRESTORE REALTIME ACTIVITIES =====
let _firestoreActivities = null;  // null = ยังโหลดไม่เสร็จ, [] = Firestore ว่าง → fallback SAMPLE
let _firestoreDb = null;
const ADMIN_EMAILS = ['admin@tcasx.com']; // เพิ่มอีเมล admin ที่นี่

// ===== FIREBASE STORAGE LAYER =====
let _usersCache = [];
let _firebaseReady = false;
let _db = null;

function emailToKey(email) { return email.replace(/\./g, ','); }
function keyToEmail(key)   { return key.replace(/,/g, '.'); }

function initFirebase() {
  try {
    if (typeof firebase === 'undefined' || !firebase.apps.length) throw new Error('not configured');
    _db = firebase.database();
    // Real-time listener: keep _usersCache in sync with /users
    _db.ref('/users').on('value', snap => {
      const data = snap.val() || {};
      _usersCache = Object.values(data).map(u => ({ ...u }));
      _firebaseReady = true;
      // Refresh currentUser if logged in
      const savedEmail = localStorage.getItem('tcas_current');
      if (savedEmail && currentUser) {
        const fresh = _usersCache.find(u => u.email === savedEmail);
        if (fresh) currentUser = fresh;
      }
    }, err => {
      console.warn('Firebase read error, falling back:', err);
      _usersCache = JSON.parse(localStorage.getItem('tcas_users') || '[]');
    });

    // Firebase Auth state listener
    if (typeof firebase.auth === 'function') {
      firebase.auth().onAuthStateChanged(firebaseUser => {
        // Only auto-login if no manual session exists
        if (firebaseUser && !localStorage.getItem('tcas_current')) {
          _processGoogleUser(firebaseUser.email, firebaseUser.displayName, firebaseUser.photoURL);
        }
      });
    }

    // ===== FIRESTORE REALTIME ACTIVITIES =====
    if (typeof firebase.firestore === 'function') {
      try {
        _firestoreDb = firebase.firestore();
        _firestoreDb.collection('activities')
          .orderBy('createdAt', 'desc')
          .onSnapshot(snapshot => {
            _firestoreActivities = snapshot.docs.map(doc => ({
              id: doc.id,
              name:  doc.data().name  || '',
              cat:   doc.data().cat   || 'academic',
              desc:  doc.data().desc  || '',
              date:  doc.data().date  || '',
              level: doc.data().level || 'ประเทศ',
              isNew: doc.data().createdAt && (Date.now() - doc.data().createdAt.toMillis() < 7*24*60*60*1000)
            }));
            // Update live status
            const statusEl = document.getElementById('explore-status-text');
            if (statusEl) {
              statusEl.textContent = `🟢 Live · ${_firestoreActivities.length} กิจกรรม (อัพเดตอัตโนมัติ)`;
            }
            // Re-render if explore page is active
            if (document.getElementById('page-explore')?.classList.contains('active')) {
              renderExplore(_currentExploreFilter);
            }
          }, err => {
            console.warn('Firestore activities error:', err);
            _firestoreActivities = [];
            const statusEl = document.getElementById('explore-status-text');
            if (statusEl) statusEl.textContent = '⚡ ข้อมูลจาก Cache (ออฟไลน์)';
          });
      } catch(e) {
        console.warn('Firestore init error:', e);
        _firestoreActivities = [];
      }
    }
  } catch(e) {
    console.warn('Firebase not available, using localStorage only:', e.message);
    _usersCache = JSON.parse(localStorage.getItem('tcas_users') || '[]');
    _firebaseReady = false;
  }
}

function getAllUsers() { return _usersCache; }

function saveAllUsers(users) {
  // Legacy bulk save — just iterate
  users.forEach(u => updateUserInList(u));
}

function updateUserInList(user) {
  const idx = _usersCache.findIndex(u => u.email === user.email);
  if (idx >= 0) _usersCache[idx] = user; else _usersCache.push(user);
  if (_firebaseReady && _db) {
    _db.ref('/users/' + emailToKey(user.email)).set(user).catch(e => {
      console.warn('Firebase write failed, saving to localStorage:', e);
      localStorage.setItem('tcas_users', JSON.stringify(_usersCache));
    });
  } else {
    localStorage.setItem('tcas_users', JSON.stringify(_usersCache));
  }
}

// ===== DEMO USERS REMOVED =====

// ===== INIT =====
function initApp() {
  initFirebase();
  // populate faculty selects
  document.querySelectorAll('#reg-faculty, #edit-faculty').forEach(sel => {
    FACULTIES.forEach(f => { const o=document.createElement('option'); o.value=f.id; o.textContent=f.name; sel.appendChild(o); });
  });
  const savedEmail = localStorage.getItem('tcas_current');
  if (savedEmail) {
    // Try to restore session — wait a moment for Firebase cache to populate
    const tryRestore = () => {
      const u = _usersCache.find(u => u.email === savedEmail);
      // Try Firebase cache then localStorage
      let found = _usersCache.find(u => u.email === savedEmail);
      if (!found) {
        const lsUsers = JSON.parse(localStorage.getItem('tcas_users') || '[]');
        found = lsUsers.find(u => u.email === savedEmail);
      }
      if (found) {
        currentUser = found;
        showPage('page-dashboard');
        setTimeout(() => listenToFriendRequests(), 500);
      }
    };
    // Give Firebase 800ms to connect, then try restore
    if (_firebaseReady) tryRestore();
    else setTimeout(tryRestore, 800);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

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
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  const submitBtn = e.target.querySelector('button[type="submit"]');

  const doLogin = (users) => {
    const found = users.find(u => u.email && u.email.toLowerCase() === email && u.password === password);
    if (found) {
      currentUser = found;
      localStorage.setItem('tcas_current', currentUser.email);
      toast('เข้าสู่ระบบสำเร็จ! 🎉');
      showPage('page-dashboard');
      setTimeout(() => listenToFriendRequests(), 300);
    } else {
      toast('❌ อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'เข้าสู่ระบบ'; }
    }
  };

  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'กำลังเข้าสู่ระบบ...'; }

  // 1st: try Firebase cache, 2nd: try localStorage, 3rd: fetch from Firebase directly
  if (_firebaseReady && _usersCache.length > 0) {
    doLogin(_usersCache);
  } else {
    const lsUsers = JSON.parse(localStorage.getItem('tcas_users') || '[]');
    if (lsUsers.length > 0) {
      doLogin(lsUsers);
    } else if (_firebaseReady && _db) {
      _db.ref('/users').once('value').then(snap => {
        const fbUsers = Object.values(snap.val() || {});
        _usersCache = fbUsers;
        doLogin(fbUsers);
      }).catch(() => {
        toast('❌ ไม่สามารถเชื่อมต่อได้ กรุณาลองใหม่');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'เข้าสู่ระบบ'; }
      });
    } else {
      // Firebase not ready yet — wait then retry
      setTimeout(() => {
        const retryUsers = _usersCache.length > 0 ? _usersCache : JSON.parse(localStorage.getItem('tcas_users') || '[]');
        doLogin(retryUsers);
      }, 1200);
    }
  }
}

// ===== FORGOT PASSWORD =====
let resetEmailContext = null;

function handleForgotEmail(e) {
  e.preventDefault();
  const email = document.getElementById('forgot-email').value.trim();
  const users = getAllUsers();
  const found = users.find(u => u.email === email);
  
  if (found) {
    if (found.password === 'google_oauth_dummy') {
      toast('บัญชีนี้สมัครด้วย Google กรุณาเข้าสู่ระบบด้วย Google');
      return;
    }
    resetEmailContext = email;
    document.getElementById('forgot-email-form').style.display = 'none';
    document.getElementById('forgot-reset-form').style.display = 'block';
    document.getElementById('forgot-desc').innerText = `พบบัญชี ${email} กรุณาตั้งรหัสผ่านใหม่`;
    toast('พบบัญชีของคุณแล้ว!');
  } else {
    toast('ไม่พบบัญชีที่ใช้อีเมลนี้ในระบบ');
  }
}

function handleResetPassword(e) {
  e.preventDefault();
  if (!resetEmailContext) return;
  
  const newPass = document.getElementById('forgot-new-password').value;
  const confirmPass = document.getElementById('forgot-confirm-password').value;
  
  if (newPass !== confirmPass) {
    toast('รหัสผ่านใหม่ทั้งสองช่องไม่ตรงกัน');
    return;
  }
  
  const users = getAllUsers();
  const idx = users.findIndex(u => u.email === resetEmailContext);
  
  if (idx >= 0) {
    users[idx].password = newPass;
    saveAllUsers(users);
    
    // Reset form for next time
    document.getElementById('forgot-email-form').style.display = 'block';
    document.getElementById('forgot-reset-form').style.display = 'none';
    document.getElementById('forgot-email').value = '';
    document.getElementById('forgot-new-password').value = '';
    document.getElementById('forgot-confirm-password').value = '';
    document.getElementById('forgot-desc').innerText = 'กรุณากรอกอีเมลที่ใช้สมัครบัญชี TcasX ของคุณ';
    resetEmailContext = null;
    
    toast('เปลี่ยนรหัสผ่านสำเร็จ! กรุณาเข้าสู่ระบบใหม่ 🎉');
    showPage('page-login');
  }
}
function handleLogout() { currentUser=null; localStorage.removeItem('tcas_current'); showPage('page-landing'); toast('ออกจากระบบแล้ว'); }

// ===== GOOGLE SIGN-IN (Firebase Auth) =====
function handleGoogleSignIn() {
  if (typeof firebase === 'undefined' || typeof firebase.auth !== 'function') {
    toast('⚠️ Firebase Auth ยังไม่ได้ตั้งค่า กรุณาตั้งค่า Firebase ก่อน');
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

  // Show loading state
  document.querySelectorAll('#login-google-btn, #reg-google-btn').forEach(btn => {
    if (btn) { btn.disabled = true; btn.innerHTML = '<span style="animation:spin 1s linear infinite;display:inline-block">⟳</span> กำลังเข้าสู่ระบบ...'; }
  });

  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      _processGoogleUser(user.email, user.displayName, user.photoURL);
    })
    .catch(err => {
      console.error('Google Sign-In Error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        toast('❌ ปิด Popup ก่อนเสร็จ ลองใหม่อีกครั้ง');
      } else if (err.code === 'auth/popup-blocked') {
        toast('🚫 บราวเซอร์บล็อก Popup กรุณาอนุญาต Popup และลองใหม่');
      } else {
        toast('❌ เข้าสู่ระบบไม่สำเร็จ: ' + (err.message || err.code));
      }
    })
    .finally(() => {
      document.querySelectorAll('#login-google-btn, #reg-google-btn').forEach(btn => {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.1 0 5.8 1.1 8 2.9l6-6C34.2 3.1 29.4 1 24 1 14.8 1 7 6.7 3.9 14.6l7 5.4C12.5 13.6 17.8 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.4c-.5 2.8-2.1 5.1-4.5 6.7l7 5.4c4.1-3.8 6.5-9.4 6.5-16.1z"/><path fill="#FBBC05" d="M10.9 28.6c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-7-5.4C2.5 16.9 1.5 20.4 1.5 24s1 7.1 2.4 10l7-5.4z"/><path fill="#34A853" d="M24 46.5c5.4 0 9.9-1.8 13.2-4.8l-7-5.4c-1.8 1.2-4.1 1.9-6.2 1.9-6.2 0-11.5-4.2-13.4-9.9l-7 5.4C7 41.8 14.8 46.5 24 46.5z"/></svg><span>${btn.id === 'login-google-btn' ? 'เข้าสู่ระบบด้วย Google' : 'สมัครด้วย Google'}</span>`;
        }
      });
    });
}

function _processGoogleUser(email, name, avatar) {
  const users = getAllUsers();
  let found = users.find(u => u.email === email);
  if (!found) {
    found = {
      name: name || email.split('@')[0],
      email: email,
      avatar: avatar || '',
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
  } else {
    if (avatar && found.avatar !== avatar) {
      found.avatar = avatar;
      updateUserInList(found);
    }
    toast('เข้าสู่ระบบด้วย Google สำเร็จ! 👋');
  }
  currentUser = found;
  localStorage.setItem('tcas_current', currentUser.email);
  showPage('page-dashboard');
}

// Legacy GSI callback (fallback if Firebase Auth is not configured)
function handleGoogleCallback(response) {
  const base64Url = response.credential.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  const payload = JSON.parse(jsonPayload);
  _processGoogleUser(payload.email, payload.name, payload.picture);
}

// ===== DASHBOARD =====
function renderDashboard() {
  if(!currentUser) return;
  initCountdown();
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
    
    // Better text alignment to prevent overlapping
    const offset = 18;
    const lx = cx + Math.cos(a) * (r + offset);
    const ly = cy + Math.sin(a) * (r + offset);
    
    ctx.fillStyle='#8B6F5E'; 
    ctx.font='500 12px Prompt'; 
    
    if (Math.abs(Math.cos(a)) < 0.1) ctx.textAlign = 'center';
    else if (Math.cos(a) > 0) ctx.textAlign = 'left';
    else ctx.textAlign = 'right';
    
    if (Math.abs(Math.sin(a)) < 0.1) ctx.textBaseline = 'middle';
    else if (Math.sin(a) > 0) ctx.textBaseline = 'top';
    else ctx.textBaseline = 'bottom';
    
    ctx.fillText(shortLabels[i], lx, ly);
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

// ===== TCAS COUNTDOWN =====
const TCAS_ROUNDS = [
  {
    id: 'port',
    label: 'รอบ 1 — Portfolio',
    shortLabel: 'รอบ Portfolio',
    open:  new Date('2026-10-01T08:00:00'),
    close: new Date('2026-11-30T23:59:00'),
    cssClass: 'round-port',
    emoji: '📝',
    note: 'TCAS 70 (ปีการศึกษา 2570)'
  },
  {
    id: 'quota',
    label: 'รอบ 2 — Quota',
    shortLabel: 'รอบโควต้า',
    open:  new Date('2027-01-05T08:00:00'),
    close: new Date('2027-02-28T23:59:00'),
    cssClass: 'round-quota',
    emoji: '🏫',
    note: 'TCAS 70 (ปีการศึกษา 2570)'
  },
  {
    id: 'admission',
    label: 'รอบ 3 — Admission',
    shortLabel: 'รอบ Admission',
    open:  new Date('2027-04-01T08:00:00'),
    close: new Date('2027-05-15T23:59:00'),
    cssClass: 'round-admission',
    emoji: '🎯',
    note: 'TCAS 70 (ปีการศึกษา 2570)'
  }
];

let _countdownTimer = null;

function initCountdown() {
  const bar = document.getElementById('tcas-countdown-bar');
  if (!bar) return;
  if (_countdownTimer) clearInterval(_countdownTimer);
  renderCountdown();
  _countdownTimer = setInterval(renderCountdown, 1000);
}

function renderCountdown() {
  const bar = document.getElementById('tcas-countdown-bar');
  if (!bar) { clearInterval(_countdownTimer); return; }
  const now = new Date();
  
  bar.innerHTML = TCAS_ROUNDS.map(r => {
    const isPassed = now > r.close;
    const isOpen   = now >= r.open && now <= r.close;
    const target   = isOpen ? r.close : (now < r.open ? r.open : null);
    
    let statusLabel = '';
    let digitsHTML  = '';

    if (isPassed) {
      statusLabel = 'ปิดรับสมัครแล้ว';
      digitsHTML  = `<div class="countdown-passed-text">✅ ผ่านไปแล้ว</div>`;
    } else {
      statusLabel = isOpen ? '🔴 เปิดรับสมัครอยู่ — ปิดใน' : '⏳ เปิดรับสมัครใน';
      if (target) {
        const diff  = Math.max(0, target - now);
        const days  = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const mins  = Math.floor((diff % 3600000)  / 60000);
        const secs  = Math.floor((diff % 60000)    / 1000);
        digitsHTML = `
          <div class="countdown-digits">
            <div class="countdown-unit"><span class="num">${String(days).padStart(2,'0')}</span><span class="unit-label">วัน</span></div>
            <div class="countdown-unit"><span class="num">${String(hours).padStart(2,'0')}</span><span class="unit-label">ชั่วโมง</span></div>
            <div class="countdown-unit"><span class="num">${String(mins).padStart(2,'0')}</span><span class="unit-label">นาที</span></div>
            <div class="countdown-unit"><span class="num">${String(secs).padStart(2,'0')}</span><span class="unit-label">วินาที</span></div>
          </div>`;
      }
    }

    const openStr  = r.open.toLocaleDateString('th-TH',  { day:'numeric', month:'short', year:'2-digit' });
    const closeStr = r.close.toLocaleDateString('th-TH', { day:'numeric', month:'short', year:'2-digit' });

    return `
      <div class="countdown-card ${r.cssClass} ${isPassed ? 'passed' : ''}">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div class="countdown-label">${r.emoji} ${r.label}</div>
          ${r.note ? `<div style="font-size:0.65rem; opacity:0.75; background:rgba(255,255,255,0.2); padding:2px 8px; border-radius:8px;">${r.note}</div>` : ''}
        </div>
        <div class="countdown-name">${statusLabel}</div>
        <div class="countdown-date">🗓 ${openStr} — ${closeStr}</div>
        ${digitsHTML}
      </div>`;
  }).join('');
}

// ===== PORTFOLIO =====
function renderPortfolio() {
  if(!currentUser) return;
  const list = document.getElementById('activity-list');
  const cnt = document.getElementById('activity-count');
  const acts = currentUser.activities||[];
  cnt.textContent = acts.length + ' รายการ';

  // Build activity list HTML
  if(acts.length===0) {
    list.innerHTML = '<div class="empty-state"><span>📋</span><p>ยังไม่มีกิจกรรม<br>เพิ่มกิจกรรมแรกของคุณเลย!</p></div>';
  } else {
    const LEVEL_LABELS = ['','🏫 โรงเรียน','🏙️ จังหวัด/ภาค','🇹🇭 ประเทศ','🌏 นานาชาติ'];
    const LEVEL_COLORS = ['','#64748B','#2563EB','#059669','#7C3AED'];
    list.innerHTML = acts.map((a,i) => `
      <div class="activity-item">
        <div class="activity-cat-dot" style="background:${LEVEL_COLORS[parseInt(a.level)||1]}"></div>
        <div class="activity-info">
          <strong>${a.name}</strong>
          <small>${a.desc||'&mdash;'}</small>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-shrink:0;">
          <span class="activity-level-badge">${LEVEL_LABELS[parseInt(a.level)||1]||'—'}</span>
          <span class="activity-badge badge-${a.category}">${CAT_LABELS[a.category]}</span>
          <button class="delete-btn" onclick="removeActivity(${i})" title="ลบกิจกรรม">✕</button>
        </div>
      </div>`).join('');
  }

  // Update summary banner
  _updatePortfolioSummaryBanner(acts);
  renderScoreBars();
}

function _updatePortfolioSummaryBanner(acts) {
  const scores = calcScores();
  const total = Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/5);

  // Mini ring
  const c = document.getElementById('psb-ring');
  if (c) {
    const ctx = c.getContext('2d'), cx=45, cy=45, r=36, lw=8;
    ctx.clearRect(0,0,90,90);
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.strokeStyle='rgba(255,255,255,0.2)'; ctx.lineWidth=lw; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+(Math.PI*2*total/100));
    ctx.strokeStyle='#fff'; ctx.lineWidth=lw; ctx.lineCap='round'; ctx.stroke();
  }
  const rv = document.getElementById('psb-ring-val');
  if (rv) rv.textContent = total + '%';
  const sub = document.getElementById('psb-score-sub');
  if (sub) sub.textContent = total>=80?'พอร์ตแข็งแกร่งมาก! 💪':total>=50?'กำลังไปได้ดี!':'เพิ่มกิจกรรมเพื่อเพิ่ม Score';

  // Stats
  const totalEl = document.getElementById('psb-total-acts');
  if (totalEl) totalEl.textContent = acts.length;

  // Top category
  const catCount = {};
  acts.forEach(a => { catCount[a.category] = (catCount[a.category]||0)+1; });
  const topCatKey = Object.entries(catCount).sort((a,b)=>b[1]-a[1])[0]?.[0];
  const topCatEl = document.getElementById('psb-top-cat');
  if (topCatEl) topCatEl.textContent = topCatKey ? CAT_LABELS[topCatKey].split(' ')[0] : '—';

  // Highest level
  const maxLevel = acts.reduce((m,a) => Math.max(m, parseInt(a.level)||0), 0);
  const LEVEL_NAMES = ['—','โรงเรียน','จังหวัด','ประเทศ','นานาชาติ'];
  const hlEl = document.getElementById('psb-highest-level');
  if (hlEl) hlEl.textContent = LEVEL_NAMES[maxLevel] || '—';

  // Faculty match badge
  const fac = FACULTIES.find(f=>f.id===currentUser?.faculty);
  const fm = document.getElementById('port-faculty-match');
  if (fm && fac) fm.textContent = '🎯 ' + fac.name;
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
  const fac = FACULTIES.find(f=>f.id===currentUser?.faculty);

  const CAT_ICONS = {academic:'📚',sports:'⚽',volunteer:'🤝',achievement:'🏆',skill:'🎨',leadership:'🌟',internship:'💼',online_course:'💻'};
  const CAT_SHORT = {academic:'วิชาการ',sports:'กีฬา',volunteer:'จิตอาสา',achievement:'ผลงาน',skill:'ทักษะ',leadership:'ผู้นำ',internship:'ฝึกงาน',online_course:'คอร์ส'};

  el.innerHTML = CAT_KEYS.map(k => {
    const pct = scores[k];
    const weight = fac?.weights[k] || 0;
    const barColor = pct >= 70 ? '#059669' : pct >= 40 ? '#F59E0B' : '#FF6B35';
    const statusIcon = pct >= weight ? '✅' : pct >= weight*0.5 ? '🔶' : '🔴';
    return `
    <div class="score-bar-item">
      <div class="sbi-icon">${CAT_ICONS[k]}</div>
      <div class="sbi-info">
        <div class="sbi-header">
          <span class="sbi-name">${CAT_SHORT[k]}</span>
          <span class="sbi-pct" style="color:${barColor}">${pct}%</span>
        </div>
        <div class="sbi-bar-bg">
          <div class="sbi-bar-fill" style="width:${pct}%;background:${barColor}"></div>
        </div>
        ${weight > 0 ? `<div class="sbi-weight">${statusIcon} น้ำหนัก ${weight}% สำหรับ${fac?.name||'คณะที่เลือก'}</div>` : '<div class="sbi-weight" style="color:var(--border)">ไม่มีน้ำหนักในคณะนี้</div>'}
      </div>
    </div>`;
  }).join('');

  // Category insight section
  const insight = document.getElementById('port-category-insight');
  if (insight && fac) {
    const weak = CAT_KEYS.filter(k => (fac.weights[k]||0) > 0 && scores[k] < (fac.weights[k]||0));
    if (weak.length > 0) {
      insight.innerHTML = `
        <div class="insight-box">
          <div class="insight-title">⚡ จุดที่ควรพัฒนาสำหรับ ${fac.name}</div>
          <div class="insight-chips">${weak.map(k=>`<span class="insight-chip">${CAT_ICONS[k]} ${CAT_SHORT[k]} (ขาด ${(fac.weights[k]||0)-scores[k]}%)</span>`).join('')}</div>
        </div>`;
    } else if (currentUser?.activities?.length > 0) {
      insight.innerHTML = `<div class="insight-box insight-ok"><div class="insight-title">🌟 ยอดเยี่ยม! ทุกหมวดครบตามเกณฑ์ของ ${fac.name} แล้ว</div></div>`;
    } else {
      insight.innerHTML = '';
    }
  }
}

// ===== EXPLORE =====
function renderExplore(cat) {
  _currentExploreFilter = cat || 'all';
  const grid = document.getElementById('explore-grid');
  if (!grid) return;

  // Use Firestore data if loaded, else fallback to SAMPLE_ACTIVITIES
  const source = (_firestoreActivities && _firestoreActivities.length > 0)
    ? _firestoreActivities
    : SAMPLE_ACTIVITIES;

  // Get search query
  const searchQuery = (document.getElementById('explore-search')?.value || '').trim().toLowerCase();

  let items = _currentExploreFilter === 'all' ? source : source.filter(a => a.cat === _currentExploreFilter);
  if (searchQuery) {
    items = items.filter(a =>
      a.name.toLowerCase().includes(searchQuery) ||
      (a.desc || '').toLowerCase().includes(searchQuery)
    );
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <span>🔍</span>
        <p>ไม่พบกิจกรรมที่ตรงกับการค้นหา<br><small>ลองเปลี่ยนคำค้นหาหรือหมวดอื่น</small></p>
      </div>`;
    return;
  }

  const LEVEL_BADGE = {
    'โรงเรียน': { cls: 'lvl-school',  icon: '🏫' },
    'จังหวัด':  { cls: 'lvl-prov',    icon: '🏙️' },
    'ภาค':      { cls: 'lvl-region',   icon: '🗺️' },
    'ประเทศ':   { cls: 'lvl-national', icon: '🇹🇭' },
    'นานาชาติ': { cls: 'lvl-inter',    icon: '🌏' },
    'ออนไลน์':  { cls: 'lvl-online',   icon: '💻' }
  };

  grid.innerHTML = items.map(a => {
    const lvl = LEVEL_BADGE[a.level] || { cls: 'lvl-school', icon: '📍' };
    const isNew = a.isNew ? '<span class="new-badge">🆕 ใหม่</span>' : '';
    const isLive = (_firestoreActivities && _firestoreActivities.length > 0)
      ? '<span class="live-tag">🔴 Live</span>' : '';
    const safeName = (a.name||'').replace(/'/g, "\\'");
    const safeCat  = (a.cat||'').replace(/'/g, "\\'");
    const safeDate = (a.date||'').replace(/'/g, "\\'");
    const safeId   = a.id || '';
    return `
    <div class="explore-card">
      <div class="explore-card-top">
        <span class="card-cat">${CAT_LABELS[a.cat] || a.cat}</span>
        <div style="display:flex;gap:6px;align-items:center">${isNew}${isLive}</div>
      </div>
      <h4 class="explore-card-title">${a.name}</h4>
      <p class="explore-card-desc">${a.desc || '—'}</p>
      <div class="explore-card-meta">
        <span>📅 ${a.date || '—'}</span>
        <span class="level-badge ${lvl.cls}">${lvl.icon} ${a.level}</span>
      </div>
      <div class="explore-card-actions">
        <button class="btn btn-primary btn-sm" onclick="addToRoadmap('${safeName}','${safeCat}','${safeDate}')">+ Roadmap</button>
        <button class="btn btn-outline btn-sm" onclick="quickAdd('${safeName}','${safeCat}')">+ พอร์ต</button>
        ${safeId ? `<button class="btn btn-ghost btn-sm admin-del-btn" id="del-${safeId}" onclick="adminDeleteActivity('${safeId}')" style="display:none">🗑️</button>` : ''}
      </div>
    </div>`;
  }).join('');

  // Show delete buttons for admins
  if (currentUser && ADMIN_EMAILS.includes(currentUser.email)) {
    document.querySelectorAll('.admin-del-btn').forEach(b => b.style.display = '');
    const panel = document.getElementById('admin-panel');
    if (panel) panel.style.display = 'block';
  }

  // Update status if still using sample data
  if (!_firestoreActivities || _firestoreActivities.length === 0) {
    const statusEl = document.getElementById('explore-status-text');
    if (statusEl) statusEl.textContent = `⚡ ข้อมูล Sample · ${items.length} กิจกรรม (เชื่อมต่อ Firestore เพื่อ Realtime)`;
  }
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
function calculateFacultyFit(userActivities, faculty) {
  const catScores = {};
  CAT_KEYS.forEach(k => catScores[k] = 0);
  
  userActivities.forEach(act => {
    const cat = act.category || act.cat;
    if (cat && catScores[cat] !== undefined) {
      catScores[cat] += 10;
    }
  });

  let totalFit = 0;
  const breakdown = [];
  
  CAT_KEYS.forEach(k => {
    const weight = faculty.weights[k] || 0;
    if (weight > 0) {
      const maxScore = weight;
      const actualScore = Math.min(catScores[k], maxScore);
      totalFit += actualScore;
      breakdown.push({
        cat: k,
        label: CAT_LABELS[k],
        score: actualScore,
        max: maxScore
      });
    }
  });
  
  return {
    facultyId: faculty.id,
    facultyName: faculty.name,
    totalFit: totalFit,
    breakdown: breakdown.sort((a,b) => b.max - a.max)
  };
}

function renderRecommend() {
  const container = document.getElementById('faculty-recommend-list');
  const recList = document.getElementById('recommend-list');
  if (!container || !recList || !currentUser) return;
  
  const acts = currentUser.activities || [];
  
  if (acts.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <span>🎯</span>
        <p>ระบบยังไม่สามารถแนะนำคณะได้<br>โปรดเพิ่มกิจกรรมในเมนู "ตรวจสอบพอร์ต" ก่อนครับ</p>
      </div>
    `;
    recList.innerHTML = '';
    return;
  }

  // 1. Calculate fits for all faculties
  const fits = FACULTIES.map(f => calculateFacultyFit(acts, f));
  fits.sort((a, b) => b.totalFit - a.totalFit);
  
  const topMatches = fits.slice(0, 3);
  
  // Render top 3 faculties
  container.innerHTML = topMatches.map((fit, idx) => {
    const rankColors = ['#FFD700', '#C0C0C0', '#CD7F32'];
    const rankColor = rankColors[idx] || 'var(--primary)';
    
    const breakdownHTML = fit.breakdown.map(b => {
      const pct = (b.score / b.max) * 100;
      return `
        <div style="margin-bottom:8px;">
          <div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:4px;color:var(--text-secondary)">
            <span>${b.label}</span>
            <span>${b.score}/${b.max}%</span>
          </div>
          <div class="progress-bg" style="height:6px;border-radius:3px;background:var(--bg-dark);overflow:hidden;">
            <div class="progress-fill" style="width:${pct}%;height:100%;background:var(--primary);border-radius:3px;"></div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="card recommend-card" style="border-top: 4px solid ${rankColor}; padding:20px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
          <h3 style="margin:0; font-size:1.1rem; color:var(--primary-dark);">${fit.facultyName}</h3>
          <div style="background:${rankColor}; color:#fff; font-size:0.75rem; padding:4px 8px; border-radius:12px; font-weight:bold;">
            อันดับ ${idx+1}
          </div>
        </div>
        <div style="font-size:2rem; font-weight:800; color:var(--text); margin-bottom:16px;">
          ${fit.totalFit}<span style="font-size:1rem;color:var(--text-secondary)">/100%</span>
        </div>
        <div>
          <strong style="font-size:0.85rem; color:var(--text); display:block; margin-bottom:8px;">วิเคราะห์ความเหมาะสม:</strong>
          ${breakdownHTML}
        </div>
      </div>
    `;
  }).join('');
  
  // 2. Recommend activities based on top match
  const bestMatch = topMatches[0];
  const missingCategories = bestMatch.breakdown.filter(b => b.score < b.max);
  
  if (missingCategories.length === 0) {
    recList.innerHTML = `
      <div class="card" style="text-align:center; padding:32px;">
        <span style="font-size:3rem;display:block;margin-bottom:16px;">🌟</span>
        <h3>พอร์ตโฟลิโอของคุณสมบูรณ์แบบมากสำหรับ ${bestMatch.facultyName}!</h3>
        <p style="color:var(--text-secondary);">ผลงานในทุกด้านครบถ้วนตามเกณฑ์แล้ว เตรียมตัวได้เลยครับ</p>
      </div>
    `;
  } else {
    let recHTML = missingCategories.map(cat => {
      const existingNames = acts.map(a => a.name);
      const suggestions = SAMPLE_ACTIVITIES.filter(s => s.cat === cat.cat && !existingNames.includes(s.name));
      const suggestion = suggestions.length > 0 ? suggestions[0] : null;
      
      return `
        <div class="card" style="display:flex; align-items:center; gap:16px; margin-bottom:12px; padding:16px 20px;">
          <div style="font-size:2rem;">${cat.label.split(' ')[0]}</div>
          <div style="flex:1;">
            <h4 style="margin:0 0 4px 0; color:var(--primary-dark);">ควรเพิ่มผลงานด้าน ${cat.label.substring(2)}</h4>
            <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">คณะนี้ให้ความสำคัญถึง ${cat.max}% แต่คุณมีผลงานเพียง ${cat.score}%</p>
            ${suggestion ? `<div style="margin-top:8px; padding:8px 12px; background:var(--bg); border-radius:6px; font-size:0.8rem; border:1px dashed var(--border);">
              <strong>💡 ไอเดียกิจกรรม:</strong> ${suggestion.name} (${suggestion.level}) - ${suggestion.desc}
            </div>` : ''}
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <button class="btn btn-outline btn-sm" onclick="showPage('page-explore')">ค้นหาค่าย</button>
            ${suggestion ? `<button class="btn btn-primary btn-sm" onclick="addToRoadmap('${suggestion.name}','${suggestion.cat}','${suggestion.date}')">+ Roadmap</button>` : ''}
          </div>
        </div>
      `;
    }).join('');
    recList.innerHTML = recHTML;
  }
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
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT3 (วิศวะ)',type:'tpat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'}],criteria:[['TGAT','20%'],['TPAT3','30%'],['A-Level คณิต 1','25%'],['A-Level ฟิสิกส์','25%']],note:'เน้นรับภูมิภาค หรือโครงการเรียนดี'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT3 (วิศวะ)',type:'tpat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','20%'],['TPAT3','30%'],['A-Level คณิต 1','20%'],['A-Level ฟิสิกส์','15%'],['A-Level เคมี','5%'],['A-Level อังกฤษ','10%']],note:'ส่วนใหญ่กำหนดขั้นต่ำภาษาอังกฤษ 20% ขึ้นไป'}
  },
  med: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1 (แพทย์)',type:'tpat'},{name:'A-Level 7 วิชา',type:'alevel'}],criteria:[['กสพท (วิชาเฉพาะ)','30%'],['A-Level วิทย์รวม','40%'],['TGAT/TPAT1','30%']],note:'โควตาผลิตแพทย์เพิ่มเพื่อชาวชนบท (CPIRD) โครงการโอลิมปิกวิชาการ'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TPAT1 (กสพท)',type:'tpat'},{name:'A-Level 7 วิชา',type:'alevel'}],criteria:[['กสพท วิชาเฉพาะ','30%'],['A-Level 7 วิชา','70%']],note:'กสพท. รับรวมทั่วประเทศ ทุกคณะแพทยศาสตร์ใช้เกณฑ์เดียวกัน'}
  },
  dent: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1 (แพทย์)',type:'tpat'},{name:'A-Level 7 วิชา',type:'alevel'}],criteria:[['กสพท','30%'],['A-Level วิทย์รวม','40%'],['TGAT','30%']],note:'เน้นทดสอบความถนัดทางทันตแพทย์ในรอบโควตาสถาบัน'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TPAT1 (กสพท)',type:'tpat'},{name:'A-Level 7 วิชา',type:'alevel'}],criteria:[['กสพท วิชาเฉพาะ','30%'],['A-Level 7 วิชา','70%']],note:'เข้าร่วม กสพท. ต้องทำคะแนนแต่ละวิชาไม่ต่ำกว่า 30%'}
  },
  pharm: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1',type:'tpat'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['A-Level วิทย์','40%'],['กสพท/TGAT','30%'],['A-Level คณิต 1','30%']],note:'โครงการโควตาพื้นที่ และลูกหลานผู้ประกอบวิชาชีพร้านยา'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TPAT1 (กสพท)',type:'tpat'},{name:'A-Level 7 วิชา',type:'alevel'}],criteria:[['กสพท วิชาเฉพาะ','30%'],['A-Level 7 วิชา','70%']],note:'เข้าร่วม กสพท. แบ่งเป็นสาขาการบริบาล และอุตสาหการ'}
  },
  vet: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT1',type:'tpat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['A-Level ชีววิทยา','40%'],['TGAT','30%'],['A-Level อังกฤษ','30%']],note:'โควตาสัตว์แพทย์ส่วนใหญ่รับนักเรียนพื้นที่ หรือมี MOU'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TPAT1 (กสพท)',type:'tpat'},{name:'A-Level 7 วิชา',type:'alevel'}],criteria:[['กสพท วิชาเฉพาะ','30%'],['A-Level 7 วิชา','70%']],note:'เข้าร่วม กสพท. คะแนนขั้นต่ำ กสพท แต่ละปีค่อนข้างเสถียร'}
  },
  nurse: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['A-Level ชีววิทยา','30%'],['A-Level อังกฤษ','30%'],['A-Level เคมี','20%'],['TGAT','20%']],note:'โควตาบุตรหลาน อสม. หรือโควตาสาธารณสุขจังหวัด'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['A-Level ชีววิทยา','30%'],['A-Level อังกฤษ','20%'],['A-Level เคมี','20%'],['TGAT','20%'],['A-Level ฟิสิกส์','10%']],note:'ต้องเป็นสายวิทย์-คณิตเท่านั้น สุขภาพกายต้องสมบูรณ์ตามเกณฑ์วิชาชีพ'}
  },
  allied: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['A-Level ชีววิทยา','30%'],['A-Level เคมี','30%'],['TGAT','20%'],['A-Level คณิต 1','20%']],note:'เทคนิคการแพทย์, กายภาพบำบัด, รังสีเทคนิค ฯลฯ'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['A-Level วิทย์ 3 วิชา','60%'],['A-Level คณิต 1','20%'],['TGAT','20%']],note:'รับเฉพาะแผนการเรียนวิทย์-คณิต'}
  },
  pubhealth: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'}],criteria:[['A-Level ชีววิทยา','40%'],['A-Level เคมี','30%'],['TGAT','30%']],note:'สาธารณสุขศาสตร์ สุขาภิบาล อาชีวอนามัย โควตาภูมิภาคเยอะ'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level ชีววิทยา','25%'],['A-Level เคมี','20%'],['A-Level อังกฤษ','15%'],['A-Level คณิต 1','10%']],note:'บางที่รับศิลป์-คำนวณ ในสาขาบริหารสาธารณสุข'}
  },
  optom: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'}],criteria:[['A-Level ฟิสิกส์','40%'],['A-Level ชีววิทยา','30%'],['TGAT','30%']],note:'ทัศนมาตรศาสตร์ เน้นฟิสิกส์เรื่องแสง และชีววิทยาเรื่องตา'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['A-Level ฟิสิกส์','25%'],['A-Level ชีววิทยา','25%'],['A-Level อังกฤษ','20%'],['TGAT','20%'],['A-Level คณิต 1','10%']],note:'ต้องไม่มีตาบอดสีรุนแรง และสุขภาพตาผ่านเกณฑ์'}
  },
  medsci: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'}],criteria:[['A-Level ชีววิทยา','40%'],['A-Level เคมี','40%'],['TGAT','20%']],note:'วิทยาศาสตร์การแพทย์ พื้นฐานคล้ายการแพทย์'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['A-Level ชีววิทยา','35%'],['A-Level เคมี','35%'],['A-Level คณิต 1','15%'],['TGAT','15%']],note:'ต่อยอดปริญญาโท-เอก งานวิจัยทางการแพทย์ได้ดี'}
  },
  it: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['A-Level คณิต 1','40%'],['TGAT','30%'],['A-Level อังกฤษ','30%']],note:'วิทยาการคอมพิวเตอร์ / เทคโนโลยีสารสนเทศ'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level ฟิสิกส์',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['A-Level คณิต 1','40%'],['TGAT','20%'],['A-Level อังกฤษ','20%'],['A-Level ฟิสิกส์ (เฉพาะสายวิทย์)','20%']],note:'บางมหาวิทยาลัยมีสาขา IT ที่รับศิลป์ภาษาด้วย (ใช้คณิต 2)'}
  },
  sci: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level ฟิสิกส์/เคมี/ชีววิทยา',type:'alevel'}],criteria:[['A-Level วิทย์ (ตามเอก)','40%'],['A-Level คณิต 1','30%'],['TGAT','30%']],note:'วิทยาศาสตร์ (เคมี, ฟิสิกส์, ชีววิทยา, แมท, สถิติ)'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level คณิต 1',type:'alevel'},{name:'A-Level 3 วิทย์',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['A-Level 3 วิทย์','40%'],['A-Level คณิต 1','30%'],['TGAT','20%'],['A-Level อังกฤษ','10%']],note:'คะแนนค่อนข้างแกว่งตามสาขาวิชา'}
  },
  finearts: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT2 (ศิลปกรรม)',type:'tpat'}],criteria:[['TPAT2','70%'],['TGAT','30%']],note:'ผลงาน Portfolio (รูปวาด/ผลงานศิลปะ) มีน้ำหนักมากที่สุดในทุกรอบ'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT2 (ศิลปกรรม)',type:'tpat'},{name:'A-Level ภาษาไทย',type:'alevel'}],criteria:[['TPAT2','60%'],['TGAT','20%'],['A-Level ภาษาไทย','20%']],note:'ทักษะทางศิลปะ ดนตรี หรือการแสดง เป็นตัวชี้วัดหลักในการสอบเข้า'}
  },
  agri: {
    quota: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT3 (วิทย์)',type:'tpat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'}],criteria:[['A-Level ชีววิทยา','30%'],['A-Level เคมี','30%'],['TGAT','20%'],['TPAT3','20%']],note:'เกษตรศาสตร์, วนศาสตร์, ประมง มีโครงการโควตาทายาทเกษตรกร'},
    admission: {tracks:['วิทย์-คณิต'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ชีววิทยา',type:'alevel'},{name:'A-Level เคมี',type:'alevel'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['A-Level ชีววิทยา','30%'],['A-Level เคมี','30%'],['TGAT','20%'],['A-Level คณิต 1','20%']],note:'บางคณะในกลุ่มเกษตรเปิดรับศิลป์-คำนวณ ในสาขาเศรษฐศาสตร์เกษตร'}
  },
  comm: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level ภาษาไทย','25%'],['A-Level สังคม','25%'],['A-Level อังกฤษ','20%']],note:'นิเทศศาสตร์ วารสารศาสตร์ สื่อสารมวลชน บางที่ต้องมีแฟ้มผลงานแนบ'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'},{name:'A-Level คณิต 2 (เลือกสอบ)',type:'alevel'}],criteria:[['TGAT','40%'],['A-Level ภาษาไทย','20%'],['A-Level สังคม','20%'],['A-Level อังกฤษ (หรือ คณิต 2/ภาษาต่างประเทศ)','20%']],note:'ส่วนใหญ่เลือกยื่นแพทเทิร์นได้ 3 แบบ: คณิต 2 / ฝรั่งเศส-เยอรมัน / ภาษาเอเชีย'}
  },
  biz: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level คณิต 1/คณิต 2',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'},{name:'A-Level สังคม',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level คณิต','30%'],['A-Level อังกฤษ','25%'],['A-Level สังคม','15%']],note:'บริหารธุรกิจ บัญชี เศรษฐศาสตร์ สายศิลป์-ภาษาสามารถสมัครบริหารบางสาขาได้'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level คณิต 1/คณิต 2',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['A-Level คณิต','40%'],['TGAT','30%'],['A-Level อังกฤษ','30%']],note:'คณะบัญชี-บริหาร (หลักสูตรนานาชาติ หรือ BBA) จะใช้คะแนน SAT/IELTS เป็นหลัก'}
  },
  arch: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT4 (สถาปัตย์)',type:'tpat'},{name:'A-Level คณิต 1',type:'alevel'}],criteria:[['TPAT4','50%'],['A-Level คณิต 1','30%'],['TGAT','20%']],note:'สถาปัตยกรรมศาสตร์ (สถ.บ.) รอบโควตาภูมิภาคมักจะมีสอบ Drawing เพิ่ม'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT4 (สถาปัตย์)',type:'tpat'},{name:'A-Level คณิต 1/2',type:'alevel'},{name:'A-Level ฟิสิกส์ (เลือก)',type:'alevel'}],criteria:[['TPAT4','40%'],['A-Level คณิต 1','25%'],['A-Level ฟิสิกส์/วิทย์/ภาษา','20%'],['TGAT','15%']],note:'รูปแบบวิทย์ใช้คณิต 1 + ฟิสิกส์ / รูปแบบศิลป์ใช้คณิต 2 + ภาษาไทย/สังคม'}
  },
  law: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level ภาษาไทย','25%'],['A-Level สังคม','25%'],['A-Level อังกฤษ','20%']],note:'นิติศาสตร์ โควตาบางมหาวิทยาลัยมีจัดสอบวิชาเฉพาะความรู้เบื้องต้นทางกฎหมาย'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'},{name:'A-Level อังกฤษ',type:'alevel'}],criteria:[['TGAT','30%'],['A-Level ภาษาไทย','25%'],['A-Level สังคม','25%'],['A-Level อังกฤษ/คณิต 2/ภาษาต่างประเทศ','20%']],note:'ผู้เข้าสอบสามารถเลือกยื่นคะแนนภาษาที่ 3 (เช่น จีน ญี่ปุ่น ฝรั่งเศส) ได้'}
  },
  edu: {
    quota: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT5 (ครุศาสตร์)',type:'tpat'},{name:'A-Level ภาษาไทย',type:'alevel'},{name:'A-Level สังคม',type:'alevel'}],criteria:[['TPAT5','40%'],['TGAT','20%'],['A-Level ตามวิชาเอก','40%']],note:'ครุศาสตร์ / ศึกษาศาสตร์ มีการตรวจบุคลิกภาพและการสัมภาษณ์เข้มข้น'},
    admission: {tracks:['วิทย์-คณิต','ศิลป์-คำนวณ','ศิลป์-ภาษา','ศิลป์-สังคม'],exams:[{name:'TGAT',type:'tgat'},{name:'TPAT5 (ครุศาสตร์)',type:'tpat'},{name:'A-Level ตามวิชาเอก',type:'alevel'}],criteria:[['TPAT5','40%'],['A-Level ตามวิชาเอก','40%'],['TGAT','20%']],note:'วิชา A-Level ที่ใช้ขึ้นอยู่กับสาขาวิชาเอก (เช่น เอกคณิตใช้ คณิต 1, เอกอิ้งใช้อังกฤษ)'}
  }
};

// ===== FRIENDS & CHAT SYSTEM (Firebase Realtime) =====
function initUserSocials(user) {
  if(!user.friends) user.friends = [];
  if(!user.friendRequests) user.friendRequests = [];
}

// Email <-> Firebase key (replace . with ,)
function emailToKey(e) { return e.replace(/\./g,'__dot__').replace(/@/g,'__at__'); }
function keyToEmail(k) { return k.replace(/__dot__/g,'.').replace(/__at__/g,'@'); }

function sendFriendRequest(targetEmail) {
  const users = getAllUsers();
  const targetUser = users.find(u => u.email === targetEmail);
  if(!targetUser) { toast('ไม่พบผู้ใช้งาน'); return; }
  initUserSocials(currentUser); initUserSocials(targetUser);
  if(currentUser.friends.includes(targetEmail)) { toast('เป็นเพื่อนกันอยู่แล้ว'); return; }
  const done = () => {
    if(!targetUser.friendRequests.includes(currentUser.email))
      targetUser.friendRequests.push(currentUser.email);
    updateUserInList(targetUser);
    toast('ส่งคำขอเป็นเพื่อนแล้ว 📨');
    if(typeof liveSearchFriend==='function') liveSearchFriend();
    const idx=(window._communityFiltered||[]).findIndex(u=>u.email===targetEmail);
    if(idx>=0 && document.getElementById('profile-modal')?.style.display==='flex') openProfileModal(idx);
  };
  if(_firebaseReady && _db) {
    _db.ref('/friendRequests/'+emailToKey(targetEmail)+'/'+emailToKey(currentUser.email)).set(true).then(done).catch(done);
  } else { done(); }
}

function acceptFriendRequest(targetEmail) {
  const users = getAllUsers();
  const targetUser = users.find(u => u.email === targetEmail);
  if(!targetUser) return;
  initUserSocials(currentUser); initUserSocials(targetUser);
  currentUser.friendRequests = currentUser.friendRequests.filter(e => e !== targetEmail);
  if(!currentUser.friends.includes(targetEmail)) currentUser.friends.push(targetEmail);
  if(!targetUser.friends.includes(currentUser.email)) targetUser.friends.push(currentUser.email);
  const done = () => {
    updateUserInList(currentUser); updateUserInList(targetUser);
    toast('เพิ่มเพื่อนสำเร็จแล้ว! 🎉');
    if(document.getElementById('page-chat').classList.contains('active')) renderChatPage();
    else if(document.getElementById('profile-modal')?.style.display==='flex') {
      const idx=(window._communityFiltered||[]).findIndex(u=>u.email===targetEmail);
      if(idx>=0) openProfileModal(idx);
    }
    _updateFriendRequestBadge();
  };
  if(_firebaseReady && _db) {
    const u={}, ck=emailToKey(currentUser.email), tk=emailToKey(targetEmail);
    u['/friendRequests/'+ck+'/'+tk]=null; u['/friendRequests/'+tk+'/'+ck]=null;
    _db.ref().update(u).then(done).catch(done);
  } else { done(); }
}

function declineFriendRequest(targetEmail) {
  if(!currentUser) return;
  currentUser.friendRequests = currentUser.friendRequests.filter(e => e !== targetEmail);
  updateUserInList(currentUser);
  if(_firebaseReady && _db)
    _db.ref('/friendRequests/'+emailToKey(currentUser.email)+'/'+emailToKey(targetEmail)).remove();
  renderChatPage(); toast('ปฏิเสธคำขอแล้ว');
}

let _friendRequestsListener=null;
function listenToFriendRequests() {
  if(!_firebaseReady||!_db||!currentUser) return;
  if(_friendRequestsListener) _friendRequestsListener.off();
  _friendRequestsListener = _db.ref('/friendRequests/'+emailToKey(currentUser.email));
  _friendRequestsListener.on('value', snap => {
    const data=snap.val()||{};
    const senders=Object.keys(data).filter(k=>data[k]).map(keyToEmail);
    let changed=false;
    senders.forEach(email => {
      if(!currentUser.friendRequests.includes(email)) { currentUser.friendRequests.push(email); changed=true; }
    });
    if(changed) {
      save();
      if(document.getElementById('page-chat')?.classList.contains('active')) renderChatPage();
      _updateFriendRequestBadge();
      toast('📨 มีคำขอเป็นเพื่อนใหม่!');
    }
  });
}
function _updateFriendRequestBadge() {
  if(!currentUser) return;
  initUserSocials(currentUser);
  const count=currentUser.friendRequests.length;
  document.querySelectorAll('.nav-item').forEach(el=>{
    if(el.textContent.includes('แชท')||el.textContent.includes('เพื่อน')) {
      let b=el.querySelector('.req-badge');
      if(count>0) { if(!b){b=document.createElement('span');b.className='req-badge';el.appendChild(b);}b.textContent=count; }
      else if(b) b.remove();
    }
  });
}

let activeChatFriend=null, _chatListener=null;

function startChat(targetEmail) {
  document.getElementById('profile-modal').style.display='none';
  showPage('page-chat');
  selectFriendToChat(targetEmail);
}

function renderChatPage() {
  initUserSocials(currentUser);
  const users=getAllUsers();
  const friendsList=document.getElementById('friends-list');
  if(!friendsList) return;
  if(currentUser.friends.length===0) {
    friendsList.innerHTML='<p style="color:var(--text-secondary);font-size:.85rem;padding:10px 4px;">ยังไม่มีเพื่อน<br><small>ค้นหาเพื่อนด้านบน</small></p>';
  } else {
    friendsList.innerHTML=currentUser.friends.map(email=>{
      const f=users.find(u=>u.email===email); if(!f) return '';
      const isAct=activeChatFriend===email?'active':'';
      const avSt=f.avatar?`background-image:url(${f.avatar});background-size:cover;background-position:center;`:'';
      return `<div class="friend-item ${isAct}" onclick="selectFriendToChat('${f.email}')">
        <div class="friend-avatar" style="${avSt}">${f.avatar?'':f.name.charAt(0)}</div>
        <div class="friend-info"><div class="friend-name">${f.name}</div>
        <div style="font-size:.72rem;color:var(--text-secondary)">${FACULTIES.find(fc=>fc.id===f.faculty)?.name||''}</div></div>
      </div>`;
    }).join('');
  }
  const reqList=document.getElementById('friend-requests-list');
  if(!reqList) return;
  if(currentUser.friendRequests.length===0) {
    reqList.innerHTML='<p style="color:var(--text-secondary);font-size:.85rem;padding:10px 4px;">ไม่มีคำขอใหม่</p>';
  } else {
    reqList.innerHTML=currentUser.friendRequests.map(email=>{
      const f=users.find(u=>u.email===email);
      if(!f) return `<div style="font-size:.8rem;padding:8px;color:var(--text-secondary)">${email}</div>`;
      const avSt=f.avatar?`background-image:url(${f.avatar});background-size:cover;`:'';
      return `<div class="friend-item" style="cursor:default;">
        <div class="friend-avatar" style="${avSt}">${f.avatar?'':f.name.charAt(0)}</div>
        <div class="friend-info"><div class="friend-name">${f.name}</div>
          <div class="friend-request-actions">
            <button class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:.72rem;" onclick="acceptFriendRequest('${f.email}')">✔ ยอมรับ</button>
            <button class="btn btn-sm" style="padding:4px 8px;font-size:.72rem;background:var(--bg);border:1px solid var(--border);" onclick="declineFriendRequest('${f.email}')">✕</button>
          </div>
        </div>
      </div>`;
    }).join('');
  }
  _updateFriendRequestBadge();
}

function getChatId(email1, email2) {
  return [email1, email2].sort().join('_');
}

function getAllChats() {
  return JSON.parse(localStorage.getItem('tcas_chats') || '{}');
}

function selectFriendToChat(email) {
  activeChatFriend = email;
  renderChatPage();
  
  const users = getAllUsers();
  const f = users.find(u=>u.email===email);
  if(!f) return;
  
  const chatId = getChatId(currentUser.email, activeChatFriend);
  const avSt = f.avatar ? `background-image:url(${f.avatar});background-size:cover;background-position:center;` : '';
  
  document.getElementById('chat-header').innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="friend-avatar" style="${avSt}">${f.avatar ? '' : f.name.charAt(0)}</div>
      <div>
        <strong>${f.name}</strong><br>
        <small style="color:var(--text-secondary)">${FACULTIES.find(fac=>fac.id===f.faculty)?.name || ''}</small>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:6px;">
      <span class="status-dot"></span>
      <span id="chat-typing-status" style="font-size:.8rem;color:#22c55e;">Online</span>
    </div>
  `;
  
  document.getElementById('chat-input-area').style.display = 'flex';
  
  // Setup typing listener
  if(_firebaseReady && _db) {
    if(_typingListener) { _typingListener.off(); _typingListener = null; }
    _typingListener = _db.ref('/typing/'+chatId+'/'+emailToKey(activeChatFriend));
    _typingListener.on('value', snap => {
      const t = snap.val();
      const isTyping = t && (Date.now() - t < 3500);
      const el = document.getElementById('chat-typing-status');
      if(el) {
        if(isTyping) {
          el.innerHTML = 'กำลังพิมพ์<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>';
          el.style.color = 'var(--primary)';
        } else {
          el.innerHTML = 'Online';
          el.style.color = '#22c55e';
        }
      }
    });
  }
  
  renderChatMessages();
}

function renderChatMessages(msgs = null) {
  if(!activeChatFriend) return;
  const chatId = getChatId(currentUser.email, activeChatFriend);
  
  // If msgs is null, we need to set up the listener
  if (msgs === null) {
    listenToChat(chatId, (newMsgs) => {
      // Re-render when new messages arrive
      renderChatMessages(newMsgs);
    });
    return; // Wait for callback
  }

  const msgContainer = document.getElementById('chat-messages');
  if(!msgs || msgs.length === 0) {
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
  const msg = {
    sender: currentUser.email,
    text: text,
    time: new Date().getTime()
  };
  
  saveChatMessage(chatId, msg);
  input.value = '';
}

function liveSearchFriend() {
  const input = document.getElementById('friend-search-input');
  const resultsBox = document.getElementById('friend-search-results');
  if (!input || !resultsBox || !currentUser) return;
  
  const q = input.value.trim().toLowerCase();
  if (!q || q.length < 2) { resultsBox.style.display = 'none'; return; }
  
  const users = getAllUsers();
  const matches = users.filter(u =>
    u.email !== currentUser.email &&
    (u.email.toLowerCase().includes(q) || u.name.toLowerCase().includes(q))
  ).slice(0, 8);

  if (matches.length === 0) {
    resultsBox.style.display = 'block';
    resultsBox.innerHTML = `<div style="padding:12px 16px; color:var(--text-secondary); font-size:.9rem;">😢 ไม่พบผู้ใช้งานที่ตรงกัน<br><small>ลองกรอก Gmail ให้ครบถ้วน</small></div>`;
    return;
  }

  initUserSocials(currentUser);
  resultsBox.style.display = 'block';
  resultsBox.innerHTML = matches.map(u => {
    const isFriend = currentUser.friends.includes(u.email);
    const pendingSent = (u.friendRequests || []).includes(currentUser.email);
    const pendingReceived = (currentUser.friendRequests || []).includes(u.email);
    const facName = FACULTIES.find(f => f.id === u.faculty)?.name || '';
    const avatarHTML = u.avatar
      ? `<img src="${u.avatar}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;flex-shrink:0;">`
      : `<div style="width:36px;height:36px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">${u.name.charAt(0)}</div>`;
    
    let actionBtn = '';
    if (isFriend) {
      actionBtn = `<span style="font-size:.75rem;color:var(--success);font-weight:600;">✅ เพื่อนแล้ว</span>`;
    } else if (pendingSent) {
      actionBtn = `<span style="font-size:.75rem;color:var(--text-secondary);">⏳ รออนุมัติ</span>`;
    } else if (pendingReceived) {
      actionBtn = `<button class="btn btn-primary btn-sm" onclick="acceptFriendRequest('${u.email}'); document.getElementById('friend-search-results').style.display='none'; document.getElementById('friend-search-input').value='';">✅ ยืนยัน</button>`;
    } else {
      actionBtn = `<button class="btn btn-primary btn-sm" onclick="sendFriendRequest('${u.email}'); liveSearchFriend();">➕ เพิ่ม</button>`;
    }
    return `
      <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--border);">
        ${avatarHTML}
        <div style="flex:1;min-width:0;">
          <div style="font-weight:600;font-size:.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${u.name}</div>
          <div style="font-size:.75rem;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${u.email}</div>
          ${facName ? `<div style="font-size:.72rem;color:var(--primary);">${facName}</div>` : ''}
        </div>
        ${actionBtn}
      </div>`;
  }).join('');
}

function searchAndAddFriend() {
  const input = document.getElementById('friend-search-input');
  const resultsBox = document.getElementById('friend-search-results');
  if (!input || !currentUser) return;
  const q = input.value.trim().toLowerCase();
  if (!q) { toast('กรุณากรอกชื่อหรืออีเมลเพื่อน'); return; }
  
  const users = getAllUsers();
  // exact email match first, else partial
  const targetUser = users.find(u => u.email.toLowerCase() === q)
    || users.find(u => u.email.toLowerCase().includes(q) || u.name.toLowerCase().includes(q));

  if (!targetUser) { toast('ไม่พบผู้ใช้งานที่ตรงกัน 😢 ลองกรอก Gmail ให้ครบถ้วน'); return; }
  if (targetUser.email === currentUser.email) { toast('ไม่สามารถเพิ่มตัวเองได้'); return; }

  initUserSocials(currentUser);
  initUserSocials(targetUser);
  if (currentUser.friends.includes(targetUser.email)) { toast('เป็นเพื่อนกันอยู่แล้ว ✅'); return; }
  if ((targetUser.friendRequests || []).includes(currentUser.email)) { toast('ส่งคำขอไปแล้ว รอการตอบรับ... ⏳'); return; }
  if ((currentUser.friendRequests || []).includes(targetUser.email)) {
    acceptFriendRequest(targetUser.email);
    input.value = '';
    if (resultsBox) resultsBox.style.display = 'none';
    return;
  }

  sendFriendRequest(targetUser.email);
  input.value = '';
  if (resultsBox) resultsBox.style.display = 'none';
}

// ===== FEEDBACK / REPORT MODAL =====
// ===== DISCORD WEBHOOK FOR FEEDBACK =====
// Note: To prevent GitHub from automatically revoking the Discord webhook, we split the URL.
// Please generate a NEW webhook URL in your Discord server and replace the IDs below!
const WH_ID = '1503038397881647156'; // <--- เปลี่ยน ID ตรงนี้
const WH_TOKEN = '6J00mg_32OAbe-wF8hJq0ctPdfzcBwhglDCiuVCJEfMVVfIEcscp4-ZQiQnCxpjAq8-F'; // <--- เปลี่ยน Token ตรงนี้
const DISCORD_WEBHOOK = `https://discord.com/api/webhooks/${WH_ID}/${WH_TOKEN}`;
let _feedbackType = '🐛 พบบัก';

function openFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  if (!modal) return;

  // Pre-fill sender name from logged-in user
  const nameInput = document.getElementById('feedback-name');
  if (nameInput && currentUser?.name && !nameInput.value) {
    nameInput.value = currentUser.name;
  }

  // Reset textarea & char count
  const textarea = document.getElementById('feedback-text');
  const charEl = document.getElementById('feedback-char');
  if (textarea) {
    textarea.value = '';
    textarea.oninput = () => {
      if (charEl) charEl.textContent = textarea.value.length;
    };
  }
  if (charEl) charEl.textContent = '0';

  // Reset type chips to first
  document.querySelectorAll('.ftype-chip').forEach((c, i) => {
    c.classList.toggle('active', i === 0);
  });
  _feedbackType = '🐛 พบบัก';

  // Reset submit button
  const btn = document.getElementById('feedback-submit-btn');
  if (btn) { btn.disabled = false; btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> ส่ง Feedback'; }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  setTimeout(() => { if (textarea) textarea.focus(); }, 100);
}

function closeFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

function closeFeedbackOnBg(e) {
  if (e.target === document.getElementById('feedback-modal')) closeFeedbackModal();
}

function setFeedbackType(btn, type) {
  _feedbackType = type;
  document.querySelectorAll('.ftype-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
}

async function submitFeedback() {
  const nameEl = document.getElementById('feedback-name');
  const textEl = document.getElementById('feedback-text');
  const submitBtn = document.getElementById('feedback-submit-btn');

  const senderName = (nameEl?.value.trim()) || (currentUser?.name) || 'ผู้ใช้ไม่ระบุชื่อ';
  const message = textEl?.value.trim();

  if (!message) {
    // Shake textarea
    if (textEl) {
      textEl.style.borderColor = '#e53935';
      textEl.focus();
      setTimeout(() => { textEl.style.borderColor = ''; }, 2000);
    }
    toast('⚠️ กรุณาพิมพ์รายละเอียดก่อนส่ง');
    return;
  }

  // Loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="animation:spin 1s linear infinite;display:inline-block">⟳</span> กำลังส่ง...';
  }

  // Build Discord embed payload
  const now = new Date().toLocaleString('th-TH', {
    timeZone: 'Asia/Bangkok',
    dateStyle: 'short',
    timeStyle: 'short'
  });

  const colorMap = {
    '🐛 พบบัก': 0xE53935,
    '💡 ข้อเสนอแนะ': 0x1E88E5,
    '🎨 UI/UX': 0x8E24AA,
    '🙏 อื่น ๆ': 0x43A047
  };
  const embedColor = colorMap[_feedbackType] ?? 0xFF6B35;

  const payload = {
    username: 'TcasX Feedback',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    embeds: [{
      title: `${_feedbackType}`,
      description: message,
      color: embedColor,
      fields: [
        { name: '👤 ผู้ส่ง', value: senderName, inline: true },
        { name: '📧 อีเมล', value: currentUser?.email || '—', inline: true },
        { name: '🕐 เวลา', value: now, inline: false }
      ],
      footer: { text: 'TcasX Feedback System' },
      thumbnail: { url: 'https://cdn-icons-png.flaticon.com/512/1039/1039233.png' }
    }]
  };

  try {
    const res = await fetch(DISCORD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok || res.status === 204) {
      closeFeedbackModal();
      toast('✅ ส่ง Feedback เรียบร้อยแล้ว ขอบคุณมากครับ! 🙏');
    } else {
      throw new Error('HTTP ' + res.status);
    }
  } catch (err) {
    console.error('Feedback send error:', err);
    toast('❌ ส่งไม่สำเร็จ กรุณาลองใหม่อีกครั้ง');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> ลองใหม่';
    }
  }
}


// ==========================================
// TCAS INFO PAGE LOGIC
// ==========================================
function initTcasInfo() {
  const sel = document.getElementById('tcas-faculty-select');
  if (sel && sel.options.length <= 1) {
    sel.innerHTML = '<option value="all">ทุกคณะ</option>';
    FACULTIES.forEach(f => {
      const o = document.createElement('option');
      o.value = f.id;
      o.textContent = f.name;
      sel.appendChild(o);
    });
  }
  renderTcasInfo();
}

function switchTcasTab(tabId, btn) {
  currentTcasTab = tabId;
  document.querySelectorAll('.tcas-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderTcasInfo();
}

function renderTcasInfo() {
  const container = document.getElementById('tcas-info-content');
  if (!container) return;
  const sel = document.getElementById('tcas-faculty-select');
  const filterId = sel ? sel.value : 'all';
  
  let html = '';
  
  // Find which faculties to render
  let renderList = [];
  if (filterId === 'all') {
    renderList = Object.keys(TCAS_DATA).map(id => ({ id, data: TCAS_DATA[id][currentTcasTab] }));
  } else {
    if (TCAS_DATA[filterId] && TCAS_DATA[filterId][currentTcasTab]) {
      renderList = [{ id: filterId, data: TCAS_DATA[filterId][currentTcasTab] }];
    }
  }

  if (renderList.length === 0) {
    container.innerHTML = '<div class="tcas-empty-state">ไม่พบข้อมูลเกณฑ์รับสมัครของคณะที่เลือกในรอบนี้</div>';
    return;
  }

  renderList.forEach(item => {
    const fName = FACULTIES.find(f => f.id === item.id)?.name || item.id;
    const d = item.data;
    if (!d) return;

    const tracksHtml = d.tracks.map(t => `<span class="track-chip allowed">${t}</span>`).join('');
    const examsHtml = d.exams.map(e => `<span class="exam-tag ${e.type}">${e.name}</span>`).join('');
    const criteriaHtml = d.criteria.map(c => `<tr><td>${c[0]}</td><td><strong>${c[1]}</strong></td></tr>`).join('');

    html += `
      <div class="tcas-faculty-card">
        <h3>${fName}</h3>
        <div class="tcas-faculty-sub">${currentTcasTab === 'quota' ? '📌 รอบ 2 โควตา' : '📝 รอบ 3 Admission'}</div>
        
        <div class="tcas-section">
          <h4>🎓 แผนการเรียนที่สมัครได้</h4>
          <div class="tcas-track-list">${tracksHtml}</div>
        </div>

        <div class="tcas-section">
          <h4>📚 วิชาที่ใช้สอบ</h4>
          <div class="tcas-exam-tags">${examsHtml}</div>
        </div>

        <div class="tcas-section">
          <h4>📊 สัดส่วนคะแนน</h4>
          <table class="tcas-criteria-table">
            <thead><tr><th>วิชา/เกณฑ์</th><th>น้ำหนัก</th></tr></thead>
            <tbody>${criteriaHtml}</tbody>
          </table>
        </div>

        <div class="tcas-note">💡 <strong>ข้อควรรู้:</strong> ${d.note}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}
