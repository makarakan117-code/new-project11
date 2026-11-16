/* =========================================================
   KHMER INNOVATION WEDDING INVITATION — script.js
   ========================================================= */

/* ---------------------------------------------------------
   ★ EDIT EVERYTHING YOU NEED HERE ★
   The date, weekday, Khmer date text, calendar, countdown and
   "Save the Date" file are all generated from weddingDateISO.
   --------------------------------------------------------- */
const CONFIG = {
  // ----- Couple -----
  groomName: "ង៉ូវ​ ណុប",                 // Khmer name shown under "កូនប្រុសនាម"
  brideName: "កាន​ គឹមនា",               // Khmer name shown under "កូនស្រីនាម"
  groomLatin: "Ngov Nop",               // Big script name (line 1)
  brideLatin: "Kan Kimnea",            // Big script name (line 2)
  monogramText: ["N", "N"],          // Letters in the monogram
  monogramImage: "",                 // Optional: path to your own logo, e.g. "assets/images/monogram.png"

  // ----- Parents -----
  groomParents: { father: "ង៉ូវ​ គឹមអូន", mother: "អ៊ំុ ង៉ែត" },
  brideParents: { father: "ហ៊ឹម​ គា", mother: "ព្រំ ស៊ីណា" },

  // ----- Date & time (Cambodia time, UTC+7). Format: YYYY-MM-DDTHH:MM:SS+07:00 -----
  weddingDateISO: "2027-01-17T17:00:00+07:00",
  lunarDateText: "",                 // Optional Khmer lunar date text, e.g. "ថ្ងៃសៅរ៍ ១៥កើត ខែមាឃ ..."; leave "" to skip

  // ----- Location -----
  venueTitle: "គេហដ្ឋានខាងស្រី",
  address: ["ភូមិ........ ឃុំ........", "ស្រុក........ ខេត្ត........"],
  addressEn: "AT THE BRIDE'S HOME, VILLAGE ........, COMMUNE ........, DISTRICT ........, PROVINCE ........ THANK YOU!",
  googleMapsUrl: "https://maps.google.com/?q=Phnom+Penh",
  mapImage: "assets/images/location-map.svg",
  mapQrImage: "assets/images/map-qr.png",
  phones: ["093 000 000", "093 111 111"],

  // ----- Schedule (icons: baly, monk, dinner, guests, tray, trays, rings, scissors, arch, incense, couple, toast) -----
  schedule: [
    { title: "កម្មវិធីថ្ងៃទី១", date: "2027-01-16", items: [
      { time: "០២:០០ រសៀល", text: "ពិធីសែនក្រុងពាលី", icon: "baly" },
      { time: "០៣:៣០ រសៀល", text: "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត", icon: "monk" },
      { time: "០៥:០០ ល្ងាច", text: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច", icon: "dinner" }
    ]},
    { title: "កម្មវិធីថ្ងៃទី២", date: "2027-01-17", items: [
      { time: "០៦:០០ ព្រឹក", text: "ជួបជុំភ្ញៀវកិត្តិយសរៀបចំពិធីហែជំនូន", icon: "guests" },
      { time: "០៧:០០ ព្រឹក", text: "ពិធីហែជំនូន (កំណត់) ចូលរោងជ័យ និងអញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលព្រឹក", icon: "tray" },
      { time: "០៨:០០ ព្រឹក", text: "ពិធីចៅមហានិយាយជីងការ រាប់ផ្លែឈើ", icon: "trays" },
      { time: "០៨:៣០ ព្រឹក", text: "ពិធីបំពាក់ចិញ្ចៀន", icon: "rings" },
      { time: "០៩:៣០ ព្រឹក", text: "ពិធីកាត់សក់បង្កក់សិរី កូនប្រុស - កូនស្រី", icon: "scissors" },
      { time: "១០:១០ ព្រឹក", text: "ពិធីចុះសំបុត្រអាពាហ៍ពិពាហ៍", icon: "arch" },
      { time: "១០:៣០ ព្រឹក", text: "ពិធីសែនព្រេនដូនតា", icon: "incense" },
      { time: "១១:០០ ព្រឹក", text: "ពិធីសំពះផ្ទឹម បង្វិលពពិល និងចងដៃ", icon: "couple" },
      { time: "១២:០០ ថ្ងៃត្រង់", text: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់", icon: "dinner" },
      { time: "០៥:០០ ល្ងាច", text: "ទទួលបដិសណ្ឋារកិច្ចភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច សូមអរគុណ!", icon: "toast" }
    ]}
  ],

  // ----- Images (replace the files or change the paths) -----
  coupleImage: "assets/images/couple.jpg",
  qrImage: "assets/images/qr-code.png",
  qrAccountName: "ឈ្មោះគណនី ABA / Bakong",
  gallery: [
    "assets/images/gallery/photo-1.jpg", "assets/images/gallery/photo-2.jpg",
    "assets/images/gallery/photo-3.jpg", "assets/images/gallery/photo-4.jpg",
    "assets/images/gallery/photo-5.jpg", "assets/images/gallery/photo-6.jpg",
    "assets/images/gallery/photo-7.jpg", "assets/images/gallery/photo-8.jpg"
  ],

  // ----- Music -----
  music: "assets/music/wedding-music.mp3",
  musicVolume: 0.5
};

/* ---------------------------------------------------------
   Helpers
   --------------------------------------------------------- */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
const KH_DIGITS = ["០","១","២","៣","៤","៥","៦","៧","៨","៩"];
const toKh = n => String(n).replace(/\d/g, d => KH_DIGITS[d]);
const pad2 = n => String(Math.max(0, n)).padStart(2, "0");
const KH_WEEK = ["អាទិត្យ","ច័ន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"];
const KH_MONTH = ["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"];
const EN_WEEK = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
const EN_MONTH = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const KH_DOW_SHORT = ["ច","អ","ព","ព្រ","សុ","ស","អា"]; // Monday-first

/* Date parts in Cambodia time (UTC+7) */
function ppParts(iso) {
  const dt = new Date(iso);
  const f = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Phnom_Penh", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", hour12: false, weekday: "short" });
  const o = {}; f.formatToParts(dt).forEach(p => { o[p.type] = p.value; });
  const dowMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { y: +o.year, m: +o.month, d: +o.day, h: (+o.hour) % 24, min: +o.minute, dow: dowMap[o.weekday] };
}
function dayParts(ymd) { // "YYYY-MM-DD" (no time)
  const [y, m, d] = ymd.split("-").map(Number);
  return { y, m, d, dow: new Date(Date.UTC(y, m - 1, d)).getUTCDay() };
}
const khDate = p => "ថ្ងៃ" + KH_WEEK[p.dow] + " ទី" + toKh(p.d) + " ខែ" + KH_MONTH[p.m - 1] + " ឆ្នាំ" + toKh(p.y);
function khPeriod(h) { return h < 12 ? "ព្រឹក" : h === 12 ? "ថ្ងៃត្រង់" : h < 17 ? "រសៀល" : h < 20 ? "ល្ងាច" : "យប់"; }
function khTime(p) { const h12 = p.h % 12 || 12; return toKh(h12) + (p.min ? ":" + toKh(pad2(p.min)) : "") + " " + khPeriod(p.h); }
function enTime(p) { const h12 = p.h % 12 || 12; return "AT " + h12 + (p.min ? ":" + pad2(p.min) : "") + " " + (p.h < 12 ? "AM" : "PM"); }

/* ---------------------------------------------------------
   Icons for the timeline (48x48 line icons)
   --------------------------------------------------------- */
const ICONS = {
  baly: '<path d="M24 4L38 30H10z"/><path d="M17 17h14M13 24h22"/><path d="M8 30h32v4H8zM12 34v8M36 34v8M12 42h24"/>',
  monk: '<circle cx="24" cy="12" r="6"/><path d="M10 41c0-10 6-16 14-16s14 6 14 16zM18 31c3 3 9 3 12 0"/>',
  dinner: '<circle cx="24" cy="25" r="11"/><circle cx="24" cy="25" r="6"/><path d="M7 8v14M4 8v7c0 2 1.500 3 3 3s3-1 3-3V8M41 8c-3 3-4 8-4 14h4zM41 22v18M7 22v18"/>',
  guests: '<circle cx="24" cy="12" r="5"/><path d="M14 38v-9c0-5 4-8 10-8s10 3 10 8v9z"/><circle cx="9" cy="17" r="4"/><path d="M2 36v-6c0-4 3-6 7-6"/><circle cx="39" cy="17" r="4"/><path d="M46 36v-6c0-4-3-6-7-6"/>',
  tray: '<path d="M8 23c0-8 7-12 16-12s16 4 16 12z"/><path d="M6 23h36M12 23v5c0 6 5 9 12 9s12-3 12-9v-5M24 37v5M15 42h18"/><circle cx="24" cy="8" r="2.500"/>',
  trays: '<path d="M3 38h42M7 38v-9h12v9M29 38v-9h12v9"/><circle cx="13" cy="22" r="4"/><circle cx="35" cy="22" r="4"/><path d="M21 38l3-11 3 11"/>',
  rings: '<circle cx="17" cy="31" r="11"/><circle cx="31" cy="31" r="11"/><path d="M13 12l4-6 4 6-4 5zM17 17v3"/>',
  scissors: '<circle cx="10" cy="12" r="5"/><circle cx="10" cy="36" r="5"/><path d="M14 15l27 18M14 33l27-18"/><path d="M30 6h14v7H30zM33 13v6M37 13v6M41 13v6"/>',
  arch: '<path d="M6 44V22c0-10 8-16 18-16s18 6 18 16v22"/><path d="M12 44V24c0-7 5-11 12-11s12 4 12 11v20"/><path d="M24 33c-5-3-5-8-1.500-8 1 0 1.500.7 1.500 1.500 0-.8.500-1.500 1.500-1.500 3.500 0 3.500 5-1.500 8z"/>',
  incense: '<path d="M6 30h36v6H6zM11 36v8M37 36v8"/><path d="M15 30V12M24 30V6M33 30V12"/><path d="M15 12c-1-2 1-3 0-5M33 12c-1-2 1-3 0-5" />',
  couple: '<circle cx="15" cy="14" r="5"/><circle cx="33" cy="14" r="5"/><path d="M4 41c0-9 4-15 11-15s11 6 11 15zM22 41c0-9 4-15 11-15s11 6 11 15z"/>',
  toast: '<path d="M6 8h15l-3 14c-.5 2-2 3-4.500 3S9.500 24 9 22z"/><path d="M13.500 25v14M8 39h11"/><path d="M27 12h15l-2.500 14c-.5 2-2.500 3-5 3s-4.500-1-5-3z" transform="rotate(10 34 22)"/><path d="M33 31v10M28 41h11" transform="rotate(10 34 22)"/>'
};
const NODE = '<svg viewBox="0 0 24 24"><path d="M12 2c3 3 3 7 0 10-3-3-3-7 0-10zM12 22c-3-3-3-7 0-10 3 3 3 7 0 10zM2 12c3-3 7-3 10 0-3 3-7 3-10 0zM22 12c-3 3-7 3-10 0 3-3 7-3 10 0z"/><circle cx="12" cy="12" r="2" fill="#1b2a6b"/></svg>';

/* ---------------------------------------------------------
   Fill the page from CONFIG
   --------------------------------------------------------- */
const W = ppParts(CONFIG.weddingDateISO);

function renderMonograms() {
  $$("[data-monogram]").forEach(el => {
    if (CONFIG.monogramImage) { el.innerHTML = '<img src="' + CONFIG.monogramImage + '" alt="Monogram">'; return; }
    const [a, b] = CONFIG.monogramText;
    el.innerHTML =
      '<svg viewBox="0 0 200 200" fill="none" stroke="#1b2a6b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<ellipse cx="100" cy="108" rx="84" ry="78" stroke-width="3.2"/><ellipse cx="100" cy="108" rx="74" ry="68" stroke-width="1.2"/>' +
      '<path d="M100 14c8 8 8 20 0 28-8-8-8-20 0-28z" fill="#E8B84F" stroke="#1b2a6b"/><path d="M78 30c10-8 16-6 22 4M122 30c-10-8-16-6-22 4"/>' +
      '<path d="M64 168c14 10 58 10 72 0" stroke="#D4AF37" stroke-width="3"/>' +
      '<g font-family="Great Vibes, cursive" fill="#1b2a6b" stroke="#fff" stroke-width="5" paint-order="stroke" text-anchor="middle">' +
      '<text x="70" y="128" font-size="86" stroke-linejoin="round">' + a + '</text><text x="132" y="140" font-size="86" stroke-linejoin="round">' + b + '</text></g></svg>';
  });
}

function parentLines(p) {
  return '<div><span class="lbl">លោក</span><span>' + p.father + '</span></div>' +
         '<div><span class="lbl">លោកស្រី</span><span>' + p.mother + '</span></div>';
}

function populate() {
  $("#groomName").textContent = CONFIG.groomName;
  $("#brideName").textContent = CONFIG.brideName;
  $("#groomLatin").textContent = CONFIG.groomLatin;
  $("#brideLatin").textContent = CONFIG.brideLatin;
  $("#polaroidCaption").textContent = CONFIG.groomLatin + " & " + CONFIG.brideLatin;
  $("#groomParentsCol").innerHTML = parentLines(CONFIG.groomParents);
  $("#brideParentsCol").innerHTML = parentLines(CONFIG.brideParents);

  const dateKh = khDate(W), timeKh = khTime(W);
  const lunar = CONFIG.lunarDateText ? CONFIG.lunarDateText + " ត្រូវនឹង" : "";
  $("#datePara").textContent = "ប្រព្រឹត្តទៅនៅ " + lunar + dateKh + " វេលាម៉ោង " + timeKh + " នៅ" + CONFIG.venueTitle + " ស្ថិតនៅ " + CONFIG.address.join(" ") + " ដោយមេត្រីភាពៗ សូមអរគុណ!";
  $("#dbMonth").textContent = EN_MONTH[W.m - 1];
  $("#dbDay").textContent = EN_WEEK[W.dow];
  $("#dbNum").textContent = W.d;
  $("#dbTime").textContent = enTime(W);
  $("#addressEn").textContent = CONFIG.addressEn;

  $("#monthTitle").textContent = "ខែ" + KH_MONTH[W.m - 1] + " " + toKh(W.y);
  $("#dateLine").textContent = "ត្រូវនឹង" + dateKh + " វេលាម៉ោង " + timeKh;

  $("#venueTitle").textContent = CONFIG.venueTitle;
  $("#venueAddress").innerHTML = CONFIG.address.join("<br>");
  $("#mapImg").src = CONFIG.mapImage;
  $("#mapQr").src = CONFIG.mapQrImage;
  $("#mapBtn").href = CONFIG.googleMapsUrl;
  $("#phoneText").innerHTML = CONFIG.phones.map(p => "<div>" + p + "</div>").join("");
  $("#phoneBtns").innerHTML = CONFIG.phones.map(p =>
    '<a href="tel:' + p.replace(/\s/g, "") + '"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>' + p + "</a>").join("");

  $("#coupleImg").src = CONFIG.coupleImage;
  $("#qrImg").src = CONFIG.qrImage;
  $("#qrName").textContent = CONFIG.qrAccountName;
  document.title = CONFIG.groomLatin + " & " + CONFIG.brideLatin + " | Wedding Invitation";

  const audio = $("#bgMusic"); audio.src = CONFIG.music; audio.volume = CONFIG.musicVolume;
  renderMonograms(); buildCalendar(); buildSchedule();
}

/* ---------------------------------------------------------
   Calendar (Monday-first)
   --------------------------------------------------------- */
function buildCalendar() {
  const grid = $("#calGrid"); let html = "";
  KH_DOW_SHORT.forEach(d => { html += '<div class="dow">' + d + "</div>"; });
  const first = new Date(Date.UTC(W.y, W.m - 1, 1)).getUTCDay();
  const offset = (first + 6) % 7;
  const days = new Date(Date.UTC(W.y, W.m, 0)).getUTCDate();
  for (let i = 0; i < offset; i++) html += "<div></div>";
  for (let d = 1; d <= days; d++) html += '<div class="day' + (d === W.d ? " wed" : "") + '">' + d + "</div>";
  grid.innerHTML = html;
}

/* ---------------------------------------------------------
   Schedule timeline
   --------------------------------------------------------- */
function buildSchedule() {
  $("#scheduleList").innerHTML = CONFIG.schedule.map(day => {
    const rows = day.items.map(it =>
      '<div class="tl-row"><div class="tl-ic"><svg viewBox="0 0 48 48">' + (ICONS[it.icon] || ICONS.dinner) + '</svg></div>' +
      '<div class="tl-node">' + NODE + '</div>' +
      '<div class="tl-txt"><span class="tm">ម៉ោង ' + it.time + "</span>" + it.text + "</div></div>").join("");
    return '<div class="tl-day reveal"><p class="tl-title">' + day.title + " " + khDate(dayParts(day.date)) + '</p><div class="tl">' + rows + "</div></div>";
  }).join("");
}

/* ---------------------------------------------------------
   Countdown (Khmer numerals)
   --------------------------------------------------------- */
let countdownTimer = null;
function startCountdown() {
  const target = new Date(CONFIG.weddingDateISO).getTime();
  const box = $("#countdown"), done = $("#cdDone");
  function tick() {
    if (isNaN(target)) { box.hidden = true; return; }
    const diff = target - Date.now();
    if (diff <= 0) { box.style.display = "none"; done.hidden = false; clearInterval(countdownTimer); return; }
    const s = Math.floor(diff / 1000);
    $("#cdDays").textContent = toKh(pad2(Math.floor(s / 86400)));
    $("#cdHours").textContent = toKh(pad2(Math.floor((s % 86400) / 3600)));
    $("#cdMins").textContent = toKh(pad2(Math.floor((s % 3600) / 60)));
    $("#cdSecs").textContent = toKh(pad2(s % 60));
  }
  tick(); countdownTimer = setInterval(tick, 1000);
}

/* "Save the date" -> downloads an .ics calendar file */
$("#saveDateBtn").addEventListener("click", () => {
  const start = new Date(CONFIG.weddingDateISO), end = new Date(start.getTime() + 4 * 3600e3);
  const f = d => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const esc = s => String(s).replace(/([,;])/g, "\\$1");
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Khmer Wedding//EN", "BEGIN:VEVENT",
    "UID:" + start.getTime() + "@wedding", "DTSTAMP:" + f(new Date()), "DTSTART:" + f(start), "DTEND:" + f(end),
    "SUMMARY:" + esc("Wedding of " + CONFIG.groomLatin + " & " + CONFIG.brideLatin),
    "LOCATION:" + esc(CONFIG.venueTitle + " " + CONFIG.address.join(" ")), "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  a.download = "wedding-invitation.ics"; document.body.appendChild(a); a.click(); a.remove();
});

/* ---------------------------------------------------------
   Floating butterflies + gold petals
   --------------------------------------------------------- */
const BUTTERFLY = '<svg viewBox="0 0 40 40"><path d="M20 20C14 6 3 6 3 15c0 6 7 8 17 5z" fill="#F2B632" stroke="#8a5a00" stroke-width="1"/><path d="M20 20C26 6 37 6 37 15c0 6-7 8-17 5z" fill="#F2B632" stroke="#8a5a00" stroke-width="1"/><path d="M20 21C13 24 8 32 13 35c4 2 7-5 7-14zM20 21c7 3 12 11 7 14-4 2-7-5-7-14z" fill="#E59A0F" stroke="#8a5a00" stroke-width="1"/><path d="M20 12v18" stroke="#5a3a00" stroke-width="1.6"/></svg>';
function makeButterflies(container, n) {
  for (let i = 0; i < n; i++) {
    const b = document.createElement("div"); b.className = "butterfly"; b.innerHTML = BUTTERFLY;
    const sc = 0.7 + Math.random() * 0.7; b.style.width = b.style.height = 34 * sc + "px";
    container.appendChild(b);
    if (!b.animate) continue;
    const rp = () => "translate(" + Math.round(Math.random() * (innerWidth - 40)) + "px," + Math.round(Math.random() * (innerHeight - 100)) + "px) rotate(" + Math.round(Math.random() * 50 - 25) + "deg)";
    const frames = []; for (let k = 0; k < 6; k++) frames.push({ transform: rp() });
    frames.push(Object.assign({}, frames[0]));
    b.animate(frames, { duration: 22000 + Math.random() * 14000, iterations: Infinity, easing: "ease-in-out", delay: -Math.random() * 20000 });
  }
}
function makePetals(container, count) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span"); p.className = "petal";
    const size = 8 + Math.random() * 14; p.style.width = p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "%"; p.style.setProperty("--drift", (Math.random() * 120 - 60) + "px");
    p.style.animationDuration = 9 + Math.random() * 10 + "s"; p.style.animationDelay = -Math.random() * 15 + "s";
    container.appendChild(p);
  }
}

/* ---------------------------------------------------------
   Music
   --------------------------------------------------------- */
const audio = $("#bgMusic"), musicBtn = $("#musicBtn");
function setMusicUI(on) { musicBtn.classList.toggle("playing", on); musicBtn.setAttribute("aria-pressed", String(on)); }
function playMusic() { const p = audio.play(); if (p && p.then) p.then(() => setMusicUI(true)).catch(() => setMusicUI(false)); }
musicBtn.addEventListener("click", () => { if (audio.paused) playMusic(); else { audio.pause(); setMusicUI(false); } });

/* ---------------------------------------------------------
   Opening -> main
   --------------------------------------------------------- */
let observersReady = false;
function openInvitation() {
  const opening = $("#opening");
  opening.classList.add("leaving");
  $("#main").classList.remove("hidden"); $("#bottomNav").classList.remove("hidden"); musicBtn.classList.remove("hidden");
  document.body.classList.remove("locked"); window.scrollTo(0, 0);
  playMusic();
  setTimeout(() => { opening.style.display = "none"; }, 1000);
  initObservers();
}
$("#openBtn").addEventListener("click", openInvitation);

function initObservers() {
  if (observersReady) return; observersReady = true;
  const revealIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      if (e.target.id === "calGrid") {
        const weddingDay = e.target.querySelector(".wed");
        if (weddingDay) setTimeout(() => weddingDay.classList.add("focused"), 2000);
      }
      revealIO.unobserve(e.target);
    }
  }), { threshold: 0.120 });
  $$(".reveal").forEach(el => revealIO.observe(el));
  $$(".collage figure").forEach((fig, i) => { fig.style.transitionDelay = (i % 4) * 0.12 + "s"; revealIO.observe(fig); });

  const links = $$(".bottom-nav a");
  const sections = $$("section[data-nav]");
  function updateActive() {
    const mid = innerHeight * 0.5; let cur = sections[0];
    sections.forEach(s => { const r = s.getBoundingClientRect(); if (r.top <= mid) cur = s; });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = sections[sections.length - 1];
    links.forEach(a => a.classList.toggle("active", a.dataset.target === cur.id));
  }
  addEventListener("scroll", updateActive, { passive: true }); updateActive();
}

/* smooth scrolling */
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const t = document.getElementById(a.getAttribute("href").slice(1)); if (!t) return;
  e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" });
  if (a.dataset.target) $$(".bottom-nav a").forEach(l => l.classList.toggle("active", l === a));
});

/* ---------------------------------------------------------
   Gallery + lightbox
   --------------------------------------------------------- */
let lbIndex = 0;
function buildGallery() {
  const wrap = $("#collage");
  CONFIG.gallery.forEach((src, i) => {
    const fig = document.createElement("figure"), img = document.createElement("img");
    img.src = src; img.alt = "Wedding photo " + (i + 1); img.loading = "lazy";
    fig.appendChild(img); fig.addEventListener("click", () => openLightbox(i)); wrap.appendChild(fig);
  });
}
const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCount = $("#lbCount");
function showLightbox() {
  lbImg.src = CONFIG.gallery[lbIndex]; lbImg.style.animation = "none"; void lbImg.offsetWidth; lbImg.style.animation = "";
  lbCount.textContent = (lbIndex + 1) + " / " + CONFIG.gallery.length;
}
function openLightbox(i) { lbIndex = i; showLightbox(); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); document.body.classList.add("locked"); }
function closeLightbox() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); if (!qrModal.classList.contains("open")) document.body.classList.remove("locked"); }
function stepLightbox(d) { const n = CONFIG.gallery.length; lbIndex = (lbIndex + d + n) % n; showLightbox(); }
$(".lb-close").addEventListener("click", closeLightbox);
$(".lb-prev").addEventListener("click", () => stepLightbox(-1));
$(".lb-next").addEventListener("click", () => stepLightbox(1));
lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
let touchX = null;
lb.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", e => { if (touchX === null) return; const dx = e.changedTouches[0].clientX - touchX; if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1); touchX = null; });

/* ---------------------------------------------------------
   QR popup
   --------------------------------------------------------- */
const qrModal = $("#qrModal");
function openQR() { qrModal.classList.add("open"); qrModal.setAttribute("aria-hidden", "false"); document.body.classList.add("locked"); }
function closeQR() { qrModal.classList.remove("open"); qrModal.setAttribute("aria-hidden", "true"); if (!lb.classList.contains("open")) document.body.classList.remove("locked"); }
$("#qrOpenBtn").addEventListener("click", openQR);
$$("[data-close]", qrModal).forEach(el => el.addEventListener("click", closeQR));

document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeLightbox(); closeQR(); }
  if (lb.classList.contains("open")) { if (e.key === "ArrowRight") stepLightbox(1); if (e.key === "ArrowLeft") stepLightbox(-1); }
});

/* ---------------------------------------------------------
   Wishes (saved in this browser only — localStorage)
   --------------------------------------------------------- */
const WISH_KEY = "khmer-wedding-wishes";
function loadWishes() { try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; } catch (e) { return []; } }
function saveWishes(list) { try { localStorage.setItem(WISH_KEY, JSON.stringify(list.slice(0, 50))); } catch (e) { /* storage blocked */ } }
let wishes = loadWishes();
function renderWishes() {
  const box = $("#wishList"); box.innerHTML = "";
  if (!wishes.length) { const p = document.createElement("p"); p.className = "wish-empty"; p.textContent = "សូមជាអ្នកដំបូងដែលផ្ញើពាក្យជូនពរ ✨"; box.appendChild(p); return; }
  wishes.forEach(w => {
    const d = document.createElement("div"); d.className = "wish";
    const b = document.createElement("b"); b.textContent = w.name;
    const s = document.createElement("span"); s.textContent = w.msg;
    d.append(b, s); box.appendChild(d);
  });
}
$("#wishForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#wishName").value.trim(), msg = $("#wishMsg").value.trim();
  if (!name || !msg) return;
  wishes.unshift({ name, msg }); saveWishes(wishes); renderWishes(); e.target.reset();
});

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */
populate(); buildGallery(); renderWishes(); startCountdown();
makePetals($("#openingPetals"), 18);
makePetals($("#fx"), 12);
makeButterflies($("#fx"), 6);
