const projects = [
  {
    "id": 1,
    "student": "גולן חפץ",
    "title": "עולם בעלי החיים",
    "category": "אתרי ידע",
    "description": "מסע אינטראקטיבי בעולם הטבע, ספרים דיגיטליים וחידוני ידע.",
    "url": "projects/project-01.html",
    "emoji": "🐾",
    "color": "#10b981",
    "thumbnail": "assets/thumbnails/01.webp"
  },
  {
    "id": 2,
    "student": "דגן הורביץ",
    "title": "לומדים את הדרך",
    "category": "אפליקציות",
    "description": "פלטפורמת למידה עם תרגול, רמזים וקהילה ללמידה משותפת.",
    "url": "projects/project-02.html",
    "emoji": "🎓",
    "color": "#60a5fa",
    "thumbnail": "assets/thumbnails/02.webp"
  },
  {
    "id": 3,
    "student": "דגן הורביץ",
    "title": "חונים! סימולטור חנייה",
    "category": "סימולטורים",
    "description": "אתגרי חנייה תלת־ממדיים עם שליטה ברכב וחיישני חנייה.",
    "url": "projects/project-03.html",
    "emoji": "🚘",
    "color": "#fbbf24",
    "thumbnail": "assets/thumbnails/03.webp"
  },
  {
    "id": 4,
    "student": "יגל ברודר",
    "title": "הקופה שלי",
    "category": "אפליקציות",
    "description": "מנהל תקציב אישי: הכנסות, הוצאות, גרפים ומעקב אחר הכסף.",
    "url": "projects/project-04.html",
    "emoji": "💰",
    "color": "#a78bfa",
    "thumbnail": "assets/thumbnails/04.webp"
  },
  {
    "id": 5,
    "student": "נועם אך",
    "title": "ברצלונה נגד ריאל מדריד",
    "category": "משחקים",
    "description": "משחק כדורגל לשני שחקנים עם לוח תוצאות ומגרש פעיל.",
    "url": "projects/project-05.html",
    "emoji": "⚽",
    "color": "#38bdf8",
    "thumbnail": "assets/thumbnails/05.webp"
  },
  {
    "id": 6,
    "student": "ניתאי אמסלם",
    "title": "Neon Runner 3D",
    "category": "משחקים",
    "description": "מרוץ עתידני בצבעי ניאון, עם ניקוד, מטבעות ושדרוגים.",
    "url": "projects/project-06.html",
    "emoji": "🏎️",
    "color": "#f472b6",
    "thumbnail": "assets/thumbnails/06.webp"
  },
  {
    "id": 7,
    "student": "נריה תנעמי",
    "title": "עולם הפוקימונים",
    "category": "אתרי ידע",
    "description": "מדריך אינטראקטיבי לעולם הפוקימונים ולדורות המשחקים.",
    "url": "projects/project-07.html",
    "emoji": "⚡",
    "color": "#facc15",
    "thumbnail": "assets/thumbnails/07.webp"
  },
  {
    "id": 8,
    "student": "עתיר קופ",
    "title": "דני אבדיה — מרכז האוהדים",
    "category": "אתרי ידע",
    "description": "סטטיסטיקות, עובדות וחידון אינטראקטיבי על שחקן ה-NBA.",
    "url": "projects/project-08.html",
    "emoji": "🏀",
    "color": "#fb7185",
    "thumbnail": "assets/thumbnails/08.webp"
  },
  {
    "id": 9,
    "student": "רועי זיו",
    "title": "GameMaster",
    "category": "אתרי ידע",
    "description": "מדריכי משחקים, כללים וטיפים לאסטרטגיה ולחשיבה.",
    "url": "projects/project-09.html",
    "emoji": "♟️",
    "color": "#818cf8",
    "thumbnail": "assets/thumbnails/09.webp"
  },
  {
    "id": 10,
    "student": "שגיא קליין",
    "title": "לבזבז את הכסף",
    "category": "משחקים",
    "description": "משחק כלכלי משעשע המשלב קניות ואתגרי חשבון.",
    "url": "projects/project-10.html",
    "emoji": "💸",
    "color": "#34d399",
    "thumbnail": "assets/thumbnails/10.webp"
  },
  {
    "id": 11,
    "student": "שילה תורגמן",
    "title": "דעת — מרכז הידע",
    "category": "אתרי ידע",
    "description": "פורטל מידע, מאמרים וכלים בנושאי טכנולוגיה ומדע.",
    "url": "projects/project-11.html",
    "emoji": "📚",
    "color": "#7dd3fc",
    "thumbnail": "assets/thumbnails/11.webp"
  },
  {
    "id": 12,
    "student": "נחשון שילה",
    "title": "סטודיו לאדריכלות",
    "category": "סימולטורים",
    "description": "תכנון בית והדמיה תלת־ממדית עם התאמות ותקציב.",
    "url": "projects/project-12.html",
    "emoji": "🏠",
    "color": "#2dd4bf",
    "thumbnail": "assets/thumbnails/12.webp"
  },
  {
    "id": 13,
    "student": "נעם פיין",
    "title": "בישול ממה שיש",
    "category": "אפליקציות",
    "description": "מוסיפים מצרכים מהמקרר ומגלים מה אפשר להכין.",
    "url": "projects/project-13.html",
    "emoji": "🍳",
    "color": "#fb923c",
    "thumbnail": "assets/thumbnails/13.webp"
  },
  {
    "id": 14,
    "student": "אביחי הדרי",
    "title": "Anime Explorer",
    "category": "אתרי ידע",
    "description": "פורטל אנימה הכולל חיפוש סדרות, המלצות ותוכן לצפייה.",
    "url": "projects/project-14.html",
    "emoji": "⛩️",
    "color": "#e879f9",
    "thumbnail": "assets/thumbnails/14.webp"
  },
  {
    "id": 15,
    "student": "איתן אש",
    "title": "Cheats Vault",
    "category": "אתרי ידע",
    "description": "מאגר קודים, טיפים וסודות למשחקי מחשב וקונסולות.",
    "url": "projects/project-15.html",
    "emoji": "🎮",
    "color": "#c084fc",
    "thumbnail": "assets/thumbnails/15.webp"
  },
  {
    "id": 16,
    "student": "בניהו פינחסוב",
    "title": "ממלכת החיות",
    "category": "משחקים",
    "description": "משחקי טריוויה, ניחושים וזיהוי בעלי חיים.",
    "url": "projects/project-16.html",
    "emoji": "🦁",
    "color": "#4ade80",
    "thumbnail": "assets/thumbnails/16.webp"
  }
];
const grid=document.getElementById('projectsGrid');const input=document.getElementById('search');const count=document.getElementById('shownCount');const filters=document.getElementById('filters');let cat='הכל';const norm=s=>(s||'').toLowerCase().replace(/[\u0591-\u05C7]/g,'').trim();function render(){const q=norm(input.value);const matches=projects.filter(p=>(cat==='הכל'||p.category===cat)&&norm([p.title,p.student,p.description,p.category].join(' ')).includes(q));count.textContent=matches.length+' פרויקטים';document.getElementById('noResults').hidden=matches.length>0;grid.innerHTML=matches.map(p=>`<a class="project-card" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="פתיחת ${p.title} של ${p.student}"><div class="thumb" style="--accent:${p.color}"><div class="thumb-placeholder">${p.emoji}</div><img src="${p.thumbnail}" loading="lazy" alt="תמונת שער מעוצבת עבור ${p.title}" onerror="this.style.display='none'"><span class="category-label">${p.category}</span></div><div class="project-body"><div class="project-student">מאת ${p.student}</div><h3 class="project-title">${p.title}</h3><p class="project-desc">${p.description}</p><div class="project-bottom"><span class="open-project">לפתיחת הפרויקט <span class="arrow">↗</span></span><span class="project-number">${String(p.id).padStart(2,'0')} / 16</span></div></div></a>`).join('')}filters.addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(!b)return;cat=b.dataset.cat;filters.querySelectorAll('.filter').forEach(el=>el.classList.toggle('active',el===b));render()});input.addEventListener('input',render);document.getElementById('resetFilters').addEventListener('click',()=>{cat='הכל';input.value='';filters.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.cat==='הכל'));render()});document.getElementById('studentChips').innerHTML=[...new Set(projects.map(p=>p.student))].sort((a,b)=>a.localeCompare(b,'he')).map(name=>`<button type="button" data-name="${name}">${name}</button>`).join('');document.getElementById('studentChips').addEventListener('click',e=>{const b=e.target.closest('[data-name]');if(!b)return;cat='הכל';input.value=b.dataset.name;filters.querySelectorAll('.filter').forEach(el=>el.classList.toggle('active',el.dataset.cat==='הכל'));render();document.getElementById('gallery').scrollIntoView({behavior:'smooth'})});render();
