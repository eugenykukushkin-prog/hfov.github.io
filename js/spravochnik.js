const paths = {
  wave: "M2 12h4l2-8 4 16 4-16 2 8h4",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  start: "M8 5l11 7-11 7z",
  oxygen: "M12 3C9 8 5 11 5 15a7 7 0 0014 0c0-4-4-7-7-12z",
  co2: "M3 8h14m-4-4 4 4-4 4M21 16H7m4-4-4 4 4 4",
  recruit: "M3 20V4m0 16h18M6 16h4v-5h4V6h6",
  urgent: "M12 3L2 21h20L12 3zm0 6v5m0 3v1",
  vg: "M12 3l8 4v5c0 5-8 9-8 9s-8-4-8-9V7l8-4zm-4 9 3 3 5-6",
  monitor: "M3 4h18v14H3zM8 22h8m-4-4v4M5 11h3l2-4 3 8 2-4h4",
  wean: "M4 7h16M4 12h12M4 17h8m5-3 3 3-3 3",
  lung: "M10 3v9l-4 4m8-13v9l4 4M9 6C5 6 2 13 3 19c3 2 6 1 7-2V8m5-2c4 0 7 7 6 13-3 2-6 1-7-2V8",
  book: "M3 4h7l2 2 2-2h7v16h-7l-2 2-2-2H3zM12 6v16",
  star: "M12 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z",
  search: "M10 3a7 7 0 100 14 7 7 0 000-14zm5 12 6 6",
  back: "M15 5l-7 7 7 7",
  check: "M4 12l5 5L20 6",
};
function icon(name, size = 22) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name] || paths.book}"/></svg>`;
}
const sections = [
  {
    id: "start",
    title: "Начать ВЧО ИВЛ",
    sub: "Подготовка и стартовые параметры",
    icon: "start",
    color: "blue",
    tags: "старт перевод частота давление амплитуда I:E",
  },
  {
    id: "oxygen",
    title: "Настроить оксигенацию",
    sub: "FiO₂, Paw и объём лёгких",
    icon: "oxygen",
    color: "blue",
    tags: "кислород сатурация гипоксемия гипероксия SpO2",
  },
  {
    id: "co2",
    title: "Скорректировать CO₂",
    sub: "Алгоритмы с VG и без VG",
    icon: "co2",
    color: "teal",
    tags: "углекислота гиперкапния гипокапния частота вентиляция",
  },
  {
    id: "recruit",
    title: "Провести рекрутмент",
    sub: "Открытие, закрытие, поддержание",
    icon: "recruit",
    color: "amber",
    tags: "ателектаз маневр давление раскрытие",
  },
  {
    id: "urgent",
    title: "Внезапное ухудшение",
    sub: "Трубка, контур, лёгкие, гемодинамика",
    icon: "urgent",
    color: "red",
    tags: "пневмоторакс обструкция десатурация авария осцилляции",
  },
  {
    id: "vg",
    title: "Использовать VG",
    sub: "Целевой объём и предел амплитуды",
    icon: "vg",
    color: "teal",
    tags: "volume guarantee гарантированный объем VThf DCO2",
  },
  {
    id: "dco2",
    title: "DCO₂: показатель и ориентиры",
    sub: "Коэффициент транспорта газа и стартовые параметры",
    icon: "co2",
    color: "teal",
    tags: "dco2 дсо2 коэффициент транспорт диффузия углекислота масса таблица значения",
  },
  {
    id: "resistance",
    title: "Resistance — сопротивление",
    sub: "R: поток, ЭТТ и время выдоха",
    icon: "co2",
    color: "amber",
    tags: "resistance резистанс сопротивление R трубка обструкция постоянная времени тау tau",
  },
  {
    id: "compliance",
    title: "Compliance — податливость",
    sub: "C: объём, давление и механика лёгких",
    icon: "lung",
    color: "teal",
    tags: "compliance комплаенс податливость C Cdyn Cstat растяжимость сурфактант",
  },
  {
    id: "c20",
    title: "C20/C — конец вдоха",
    sub: "Оценка изменения податливости",
    icon: "recruit",
    color: "amber",
    tags: "c20/c c20 c20c с20 перераздувание гиперинфляция overdistension индекс",
  },
  {
    id: "radiology",
    title: "Паттерны рентгенодиагностики",
    sub: "РДС, БЛД, объём лёгких и утечки воздуха",
    icon: "monitor",
    color: "blue",
    tags: "рентген рентгенография рентгенодиагностика радиология паттерны рдс блд пневмоторакс пневмомедиастинум диафрагма бронхограмма",
  },
  {
    id: "xray",
    title: "Radiology",
    sub: "Атлас рентгенограмм из публикаций",
    icon: "monitor",
    color: "blue",
    tags: "radiology радиология рентгенограмма атлас рдс блд пневмоторакс пневмомедиастинум снимки фото",
  },
  {
    id: "monitor",
    title: "Контролировать безопасность",
    sub: "Газообмен и гемодинамика",
    icon: "monitor",
    color: "blue",
    tags: "контроль газы рентген мониторинг санация",
  },
  {
    id: "wean",
    title: "Уйти от ВЧО ИВЛ",
    sub: "Снижение поддержки и экстубация",
    icon: "wean",
    color: "teal",
    tags: "отлучение CPAP неинвазивная ИВЛ",
  },
  {
    id: "special",
    title: "Особые ситуации",
    sub: "Обструкция, ВДГ, ПЛГ и опции",
    icon: "lung",
    color: "amber",
    tags: "меконий БЛД гипоплазия вздохи sigh CLAC",
  },
];
let saved = [];
try {
  saved = JSON.parse(localStorage.getItem("hfov-saved") || "[]");
  if (!Array.isArray(saved)) saved = [];
} catch {}
let large = false;
try {
  large = localStorage.getItem("hfov-large") === "1";
} catch {}
let radPattern = "rds";
let xrayCase = "rds";
let xrayZoomed = false;
let current = "home",
  vgMode = false,
  highCO2 = true,
  recStep = 0,
  toastTimer;
const card = (id, title, html, kind = "") =>
  `<section class="panel ${kind}">${title ? `<h2>${title}</h2>` : ""}${html}</section>`;
const note = (title, text, type = "") =>
  `<div class="callout ${type}"><strong>${title}</strong>${text}</div>`;
const steps = (items) =>
  `<ol class="steps">${items.map((x) => `<li><strong>${x[0]}</strong><p>${x[1]}</p></li>`).join("")}</ol>`;
const details = (title, body) =>
  `<details><summary>${title}</summary><div>${body}</div></details>`;
const refs = (s = "Обзор, с. 90–91") =>
  `<div class="sourcesline">${s} · <button onclick="go('sources')">Источники и границы применения</button></div>`;
const table = (heads, rows) =>
  `<div class="tablewrap"><table><thead><tr>${heads.map((t) => `<th>${t}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((t) => `<td>${t}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const footer = () =>
  `<div class="footer"><span>ВЧО ИВЛ · Неонатальный справочник</span><span>Редакция 1.5 · 07.11.2026</span></div>`;
function nav() {
  document.querySelector("#sidenav").innerHTML =
    `<button class="sideitem ${current === "home" ? "active" : ""}" onclick="go('home')"><span class="sideicon">${icon("grid", 18)}</span>Все карточки</button>` +
    sections
      .map(
        (s) =>
          `<button class="sideitem ${s.id === current ? "active" : ""} ${s.id === "urgent" ? "urgent" : ""}" onclick="go('${s.id}')"><span class="sideicon">${icon(s.icon, 18)}</span>${s.title}</button>`,
      )
      .join("") +
    `<button class="sideitem ${current === "saved" ? "active" : ""}" onclick="go('saved')"><span class="sideicon">${icon("star", 18)}</span>Избранное${saved.length ? " · " + saved.length : ""}</button><button class="sideitem ${current === "sources" ? "active" : ""}" onclick="go('sources')"><span class="sideicon">${icon("book", 18)}</span>Источники</button>`;
  ["home", "urgent", "saved", "sources"].forEach((id, i) => {
    let n = document.querySelector("#nav-" + id);
    n.innerHTML =
      icon(["grid", "urgent", "star", "book"][i]) +
      ["Карточки", "Ухудшение", "Избранное", "Источники"][i];
    n.classList.toggle("active", id === current);
  });
}
function home() {
  return `<section class="hero"><div class="eyebrow">Неонатальная интенсивная терапия</div><h1>ВЧО ИВЛ<br>у новорождённых</h1><p>Клинические задачи, наглядные схемы и контроль результата — под рукой.</p><div class="hero-meta"><span class="pill">${sections.length} карточек</span><span>По обзору Задворнова и соавт., 2026</span></div><svg class="hero-wave" viewBox="0 0 400 160" fill="none" stroke="#83b7c9" stroke-width="2"><path d="M0 80H400" opacity=".4"/><path d="M0 80q10-80 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0"/></svg></section><div class="searchwrap">${icon("search", 20)}<input id="search" type="search" placeholder="Найти: CO₂, рекрутмент, осцилляции…" aria-label="Поиск по клиническим задачам" oninput="filterCards(this.value)"></div><div class="sectionhead"><h2>Что нужно сделать?</h2><span>Выберите задачу</span></div><div class="cards" id="cards">${taskCards(sections)}</div>${note("Как пользоваться", "Выберите задачу. Внутри: оценка → действие → контроль эффекта. Числовые ориентиры обзора помечены отдельно.")}<p class="bottom-note">Профессиональный справочник на основе обзора, с уточнениями из дополнительных источников. Настройки зависят от состояния ребёнка и модели аппарата. Это редакция для врачебного рецензирования, а не утверждённый СОП отделения.</p>${footer()}`;
}
function taskCards(arr) {
  return (
    arr
      .map(
        (s) =>
          `<button class="task-card ${s.color}" onclick="go('${s.id}')"><span class="cardicon">${icon(s.icon)}</span><span><h3>${s.title}</h3><p>${s.sub}</p></span><span class="arrow">›</span></button>`,
      )
      .join("") ||
    '<div class="empty">Карточки не найдены. Попробуйте другой термин.</div>'
  );
}
function filterCards(q) {
  let n = q.toLowerCase().replace(/₂/g, "2").replace(/ё/g, "е");
  let found = sections.filter((s) =>
    (s.title + " " + s.sub + " " + s.tags)
      .toLowerCase()
      .replace(/₂/g, "2")
      .replace(/ё/g, "е")
      .includes(n),
  );
  document.querySelector("#cards").innerHTML = taskCards(found);
}
function lungFigure() {
  return `<div class="figurebox"><svg class="viz" viewBox="0 0 570 155" role="img" aria-label="Схема: недостаточное раскрытие, оптимальный объём, перераздувание лёгких"><g fill="none" stroke-width="2"><circle cx="85" cy="65" r="31" fill="#dde6ef" stroke="#8199ad"/><path d="M62 62l20 11 17-17M70 85l8-17M83 36l-2 24" stroke="#8199ad"/><circle cx="285" cy="65" r="42" fill="#e0efeb" stroke="#548c85"/><path d="M257 66h56M285 37v56" stroke="#9bbeb7"/><circle cx="485" cy="65" r="53" fill="#f4e9da" stroke="#b49664"/><path d="M440 65h90M485 20v90" stroke="#d4bd99"/></g><g fill="#3c5870" font-size="14" text-anchor="middle"><text x="85" y="139">Ателектаз</text><text x="285" y="139">Оптимальный объём</text><text x="485" y="139">Перераздувание</text></g></svg><p class="caption">Схематичное изображение альвеол. И недостаточное раскрытие, и перераздувание могут ухудшать оксигенацию.</p></div>`;
}

function mechanicsScope() {
  return note(
    "Как применять при ВЧО ИВЛ",
    "Расчёты R, C и C20/C в этих карточках относятся к механике обычного дыхательного цикла. Доступность и достоверность расчёта в HFOV зависят от аппарата и версии ПО. Не рассчитывать их подстановкой осцилляторной ΔP в формулы традиционной ИВЛ.",
    "warn",
  );
}
function c20Figure() {
  return `<div class="figurebox"><svg class="viz" viewBox="0 0 600 180" role="img" aria-label="Схемы давление–объём: уменьшение, сохранение и увеличение податливости в конце вдоха"><g fill="none" stroke="#afc0ce" stroke-width="1.5"><path d="M25 12v120h150M225 12v120h150M425 12v120h150"/></g><g fill="#5d7387" font-size="12"><text x="8" y="14">V</text><text x="208" y="14">V</text><text x="408" y="14">V</text><text x="173" y="146">P</text><text x="373" y="146">P</text><text x="573" y="146">P</text></g><g fill="none" stroke="#9fb5c5" stroke-width="3"><path d="M28 129L105 57M228 129L305 57M428 129L505 72"/></g><g fill="none" stroke-width="4"><path d="M105 57Q132 45 165 42" stroke="#aa6c56"/><path d="M305 57L350 15" stroke="#4c8e88"/><path d="M505 72Q524 48 533 15" stroke="#497e9e"/></g><g font-size="14" text-anchor="middle" fill="#34546f"><text x="100" y="170">C20/C &lt;1</text><text x="300" y="170">C20/C ≈1</text><text x="500" y="170">C20/C &gt;1</text></g></svg><p class="caption">Условные кривые P–V: цветом выделена заключительная часть вдоха. Меньший наклон означает меньшую податливость. Схема не задаёт способ расчёта индекса на конкретном аппарате.</p></div>`;
}

const radPatterns = {
  rds: {
    name: "РДС",
    title: "Респираторный дистресс-синдром",
    signs: [
      "Диффузное мелкогранулярное снижение прозрачности, «матовое стекло».",
      "Воздушные бронхограммы на фоне уплотнённой паренхимы; часто сниженный объём лёгких.",
      "При тяжёлом процессе контуры сердца и диафрагмы становятся плохо различимыми.",
    ],
    meaning:
      "Сурфактантный дефицит и ателектазирование. Выраженность картины зависит от времени снимка и уже проведённых вмешательств.",
    action:
      "Оценить газообмен, предшествующую сурфактантную терапию и раскрытие лёгких. При рекрутабельном ателектазировании подбирать Paw по комплексному ответу ребёнка.",
    trap: "Рентгенологический паттерн не строго специфичен: сходная картина возможна при инфекции, отёке и кровоизлиянии. После сурфактанта изменения могут быть неоднородными.",
    legend: ["Диффузное уплотнение", "Воздушная бронхограмма"],
  },
  bpd: {
    name: "БЛД",
    title: "Бронхолегочная дисплазия",
    signs: [
      "Неоднородная аэрация: чередование участков повышенной прозрачности и уплотнения.",
      "Возможны грубые линейные тени, локальные ателектазы и перераздувание.",
      "Пузырьковые/кистозные просветления характерны для части тяжёлых форм, но не обязательны.",
    ],
    meaning:
      "Хронически неоднородная лёгочная механика. «Новая» БЛД может не иметь выраженных кистозных изменений.",
    action:
      "Искать региональное перераздувание и потери объёма. Учитывать обструкцию и воздушные ловушки; не считать всю паренхиму одинаково рекрутабельной.",
    trap: "БЛД не диагностируют и не стадируют только по рентгенограмме. Один снимок не позволяет надёжно назвать линейные тени необратимым фиброзом.",
    legend: ["Участки повышенной прозрачности", "Линейные тени и уплотнения"],
  },
  low: {
    name: "Недостаточный объём",
    title: "Гипоинфляция / ателектазирование",
    signs: [
      "Высокое стояние диафрагмы и уменьшенный объём лёгочных полей.",
      "При локальном ателектазе — уплотнение с признаками потери объёма.",
      "Возможны смещение междолевой щели и средостения в сторону потери объёма.",
    ],
    meaning:
      "Недостаточное раскрытие либо локальная потеря объёма. Причиной может быть не только низкий Paw, но и положение/обструкция ЭТТ.",
    action:
      "Сначала оценить качество снимка, положение ЭТТ и проходимость дыхательных путей. Затем решить вопрос о рекрутменте с контролем оксигенации, CO₂ и гемодинамики.",
    trap: "Не повышать Paw автоматически, если диафрагма выше VIII ребра. Ротация, фаза дыхания и региональная патология меняют картину.",
    legend: ["Высокая диафрагма", "Уменьшенный объём лёгких"],
  },
  high: {
    name: "Перераздувание",
    title: "Гиперинфляция",
    signs: [
      "Повышенная прозрачность и увеличение объёма лёгочных полей.",
      "Низкая, уплощённая диафрагма; возможно расширение межрёберных промежутков.",
      "При неоднородном поражении изменения могут быть выражены локально.",
    ],
    meaning:
      "Возможны избыточное расправляющее давление или воздушные ловушки. Последние могут сочетаться с ателектазами других участков.",
    action:
      "Сопоставить с АД, перфузией, CO₂ и механикой лёгких. При подтверждённом перераздувании пересмотреть избыточное Paw и стратегию вентиляции.",
    trap: "Низкая диафрагма сама по себе не доказывает безопасное раскрытие или необходимость конкретного шага снижения Paw. Отсутствие гипоксемии не исключает перераздувания.",
    legend: ["Увеличенный объём лёгких", "Низкая уплощённая диафрагма"],
  },
  ptx: {
    name: "Пневмоторакс",
    title: "Воздух в плевральной полости",
    signs: [
      "Линия висцеральной плевры и отсутствие лёгочного рисунка кнаружи от неё.",
      "У лежащего ребёнка воздух может быть переднемедиальным или базальным: глубокий реберно-диафрагмальный синус (deep sulcus sign).",
      "При напряжении возможны смещение средостения в противоположную сторону и депрессия диафрагмы.",
    ],
    meaning:
      "Плевральная утечка воздуха. Напряжение определяется клиническим влиянием на вентиляцию и кровообращение, а не только размером на снимке.",
    action:
      "При нестабильности и клиническом подозрении на напряжённый пневмоторакс — немедленная декомпрессия по протоколу, без ожидания рентгенографии. У стабильного ребёнка тактика зависит от симптомов и объёма утечки.",
    trap: "Кожная складка может имитировать плевральную линию. Сохраняющийся рисунок за линией и оценка её хода помогают заподозрить артефакт. Отсутствие явного смещения средостения не исключает опасную утечку.",
    legend: ["Плевральный воздух без рисунка", "Край коллабированного лёгкого"],
  },
  pm: {
    name: "Пневмомедиастинум",
    title: "Воздух в средостении",
    signs: [
      "Тонкие полосы просветления вдоль структур средостения.",
      "Оттеснение тимуса кверху и латерально — spinnaker-sail / «крылья ангела».",
      "Воздух под сердцем может сделать центральный участок диафрагмы видимым — симптом непрерывной диафрагмы.",
    ],
    meaning:
      "Медиастинальная утечка воздуха; может сочетаться с пневмотораксом, пневмоперикардом и подкожной эмфиземой.",
    action:
      "При стабильном состоянии обычно наблюдение и пересмотр избыточной вентиляционной нагрузки. При нарушении кровообращения — срочная оценка напряжённой утечки и пневмоперикарда.",
    trap: "Обычный тимический «парус» не равен spinnaker-sail sign: важен воздух, отделяющий и приподнимающий тимус. Сплошной ободок вокруг сердца требует исключить пневмоперикард.",
    legend: ["Воздух под приподнятым тимусом", "Воздух вдоль средостения"],
  },
};
function radFigure(k) {
  const small = k === "rds" || k === "low",
    tall = k === "high",
    bottom = small ? 248 : tall ? 320 : 295,
    fill = k === "rds" ? "url(#radgrain)" : "#dce8ef";
  const rlung = `M230 65C200 48 140 62 115 110C94 155 95 ${bottom - 25} 108 ${bottom}Q166 ${bottom - 29} 228 ${bottom}Z`,
    llung = `M270 65C300 48 360 62 385 110C406 155 405 ${bottom - 25} 392 ${bottom}Q334 ${bottom - 29} 272 ${bottom}Z`;
  let lungs =
    k === "ptx"
      ? `<path d="${rlung}" fill="#fbf4e6" stroke="#c7b695"/><path d="M230 77Q176 119 185 195Q190 242 230 253Z" fill="#d4e2eb" stroke="#4c778f" stroke-width="3"/><path d="${llung}" fill="#dce8ef" stroke="#7497ad"/>`
      : `<path d="${rlung}" fill="${fill}" stroke="#7497ad"/><path d="${llung}" fill="${fill}" stroke="#7497ad"/>`;
  let markings =
    k === "ptx"
      ? `<path d="M285 110l38 40 45 50m-45-50 24-9m-40-7-15 45M225 117l-20 34 10 37"/>`
      : `<path d="M220 110l-35 38-40 45m40-45-22-9m37-7 14 42M280 110l35 38 40 45m-40-45 22-9m-37-7-14 42"/>`;
  if (k === "rds")
    markings = `<path d="M220 100l-30 32-43 42m43-42-28-4m43-13 4 42M280 100l30 32 43 42m-43-42 28-4m-43-13-4 42"/>`;
  let extra = "";
  if (k === "bpd")
    extra = `<g fill="#f7fbfd" stroke="#8cabbc" stroke-width="1.5"><ellipse cx="153" cy="115" rx="22" ry="28"/><ellipse cx="185" cy="224" rx="23" ry="18"/><ellipse cx="353" cy="211" rx="25" ry="29"/><ellipse cx="324" cy="101" rx="17" ry="24"/></g><g stroke="#839cac" stroke-width="9" opacity=".65"><path d="M127 185l75-24m95 73 72 16m-77-95 47-19"/></g>`;
  if (k === "pm")
    extra = `<path d="M220 98Q190 82 164 104L191 144L229 124M280 98Q310 82 336 104L309 144L271 124" fill="#9bb1c4" stroke="#597e98" stroke-width="2"/><path d="M229 131Q202 119 191 112M271 131Q298 119 309 112" fill="none" stroke="#fff" stroke-width="13"/><path d="M237 142L234 198M263 142L266 177" stroke="#fff" stroke-width="7"/>`;
  const dia = tall
    ? `M108 320Q165 307 228 320M272 320Q335 307 392 320`
    : `M108 ${bottom}Q166 ${bottom - 34} 228 ${bottom}M272 ${bottom}Q334 ${bottom - 34} 392 ${bottom}`;
  let marks = {
    rds: [
      [147, 213],
      [192, 150],
    ],
    bpd: [
      [151, 114],
      [157, 177],
    ],
    low: [
      [156, 231],
      [169, 122],
    ],
    high: [
      [155, 229],
      [344, 317],
    ],
    ptx: [
      [133, 167],
      [191, 200],
    ],
    pm: [
      [195, 121],
      [236, 166],
    ],
  }[k];
  return `<div class="radimage"><svg class="viz" viewBox="0 0 500 355" role="img" aria-label="Учебная схема: ${radPatterns[k].title}"><defs><pattern id="radgrain" width="13" height="13" patternUnits="userSpaceOnUse"><rect width="13" height="13" fill="#cedce7"/><circle cx="3" cy="4" r="1.5" fill="#a0b5c6"/><circle cx="10" cy="11" r="1.2" fill="#a0b5c6"/></pattern></defs><path d="M210 32Q124 26 82 99Q52 159 82 308Q164 343 250 330Q336 343 418 308Q448 159 418 99Q376 26 290 32" fill="#f3f6f8" stroke="#b2c2d0" stroke-width="2"/><g fill="none" stroke="#c9d5de" stroke-width="1.5"><path d="M93 116Q150 96 212 113M83 153Q146 132 212 150M81 191Q144 169 212 187M85 231Q148 207 212 225M89 270Q151 249 212 264M288 113Q350 96 407 116M288 150Q354 132 417 153M288 187Q356 169 419 191M288 225Q352 207 415 231M288 264Q349 249 411 270"/></g>${lungs}<g fill="none" stroke="${k === "rds" ? "#4b6c84" : "#9bb4c5"}" stroke-width="${k === "rds" ? 4 : 2}">${markings}</g><path d="M241 151Q272 135 286 180Q323 200 302 264Q283 296 243 282Q215 259 222 220Q214 180 241 151Z" fill="#b2c5d4" stroke="#819eb4" transform="translate(${k === "ptx" ? 22 : 0} 0)"/><path d="M244 24v83l-23 19m35-102v83l23 19" fill="none" stroke="#b0c4d2" stroke-width="5"/><path d="${dia}" fill="none" stroke="#5d7f98" stroke-width="3"/>${extra}<text x="56" y="54" font-size="18" fill="#526c80">R</text><g fill="#f7e5be" stroke="#af9153">${marks.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="12"/><text x="${x}" y="${y + 4}" fill="#6a5428" stroke="none" text-anchor="middle" font-size="13" font-weight="700">${i + 1}</text>`).join("")}</g></svg></div>`;
}
function radView() {
  const d = radPatterns[radPattern];
  return `<div class="panel-label">Выберите паттерн</div><div class="radchoices" role="group" aria-label="Рентгенологические паттерны">${Object.entries(
    radPatterns,
  )
    .map(
      ([k, v]) =>
        `<button class="${k === radPattern ? "selected" : ""}" aria-pressed="${k === radPattern}" onclick="setRad('${k}')">${v.name}</button>`,
    )
    .join(
      "",
    )}</div><h2>${d.title}</h2><div class="figurebox">${radFigure(radPattern)}<div class="radlegend">${d.legend.map((x, i) => `<span><b>${i + 1}</b>${x}</span>`).join("")}</div><p class="caption">Учебная схема, не рентгенограмма. Признаки показаны условно; R обозначает правую сторону пациента.</p></div><div class="radinfo"><h3>Что искать</h3><ul class="checklist">${d.signs.map((x) => `<li>${x}</li>`).join("")}</ul><h3>Что это может означать</h3><p>${d.meaning}</p><h3>Клинический акцент</h3><p>${d.action}</p>${note("Диагностическая ловушка", d.trap, radPattern === "ptx" ? "danger" : "warn")}</div>`;
}
function setRad(k) {
  if (!Object.hasOwn(radPatterns, k)) return;
  radPattern = k;
  let y = window.scrollY;
  render();
  window.scrollTo(0, y);
}

const xrayImages = {
  rds: "assets/images/031963e67cc78217.jpg",
  bpd: "assets/images/0721e372933017f3.png",
  ptx: "assets/images/ab795418af68cad4.webp",
  pm: "assets/images/f7a0444b38766eb0.jpg",
};
const xrayCases = {
  rds: {
    tab: "РДС",
    title: "Респираторный дистресс-синдром",
    badge: "Снимок 1 / 4",
    patient:
      "Недоношенный ребёнок. Точная гестация и возраст на снимке в исходной подписи не указаны.",
    caption:
      "Двустороннее диффузное снижение прозрачности по типу «матового стекла» с воздушными бронхограммами.",
    look: [
      "Сопоставить двустороннее снижение прозрачности и мелкогранулярный рисунок.",
      "Проследить воздушные бронхограммы на фоне уплотнённой паренхимы.",
      "Оценить объём лёгких и положение диафрагмы с учётом проекции и уже начатой терапии.",
    ],
    context:
      "Снимок иллюстрирует РДС, но не определяет тяжесть дыхательной недостаточности или настройки Paw сам по себе.",
    credit:
      "R. Kamity, MD — автор снимка; StatPearls Publishing, 2026. Neonatal Respiratory Distress Syndrome, Figure 1. Bookshelf ID NBK560779.",
    license: "CC BY-NC-ND 4.0",
    source: "",
    licenseUrl: "",
    original: "Оригинал без обрезки, ретуши и дополнительных меток.",
  },
  bpd: {
    tab: "БЛД",
    title: "Тяжёлая бронхолегочная дисплазия",
    badge: "Снимок 2 / 4",
    patient:
      "Девочка, родившаяся в 25 недель гестации; на снимке — 36 недель постменструального возраста, 11 недель жизни.",
    caption:
      "Общая гиперинфляция с чередованием участков повышенной прозрачности и уплотнения. Пример сформированной тяжёлой БЛД.",
    look: [
      "Оценить неоднородность аэрации обоих лёгких.",
      "Найти чередование просветлений и более плотных линейных/паренхиматозных участков.",
      "Сопоставить региональный объём, диафрагму и клиническую динамику.",
    ],
    context:
      "Это иллюстрация тяжёлого фенотипа. Выраженные кистозные изменения не обязательны для всех форм БЛД.",
    credit:
      "Higano N.S. et al. Bronchopulmonary dysplasia from chest radiographs to magnetic resonance imaging and computed tomography: adding value. Pediatric Radiology, 2022, Figure 1. DOI: 10.1007/s00247-021-05250-1. PMCID PMC8921108.",
    license: "CC BY 4.0",
    source: "",
    licenseUrl: "",
    original: "Оригинал иллюстрации; содержание не изменено.",
  },
  ptx: {
    tab: "Пневмоторакс",
    title: "Правосторонний пневмоторакс",
    badge: "Снимок 3 / 4",
    patient:
      "Новорождённый мальчик, 38 недель 4 дня гестации. Неонатальный случай мекониальной аспирации с бронхоплевральным свищом.",
    caption:
      "Правосторонний пневмоторакс с коллапсом лёгкого и смещением средостения влево. На опубликованном снимке уже присутствует плевральный дренаж.",
    look: [
      "Правый гемиторакс соответствует левой стороне изображения: учитывать маркировку и ориентацию оригинала.",
      "Найти плевральное просветление без периферического лёгочного рисунка и край коллабированного лёгкого.",
      "Оценить смещение средостения и положение дренажа; большая чёрная стрелка — исходная авторская метка.",
    ],
    context:
      "При нестабильности и подозрении на напряжённый пневмоторакс декомпрессию не откладывают ради рентгенографии.",
    credit:
      "Zhang T. et al. Treatment of pneumothorax and bronchopleural fistula by extracorporeal membrane oxygenation in a neonate: a case report. Frontiers in Pediatrics, 2024, Figure 1. DOI: 10.3389/fped.2024.1466852.",
    license: "CC BY 4.0",
    source: "",
    licenseUrl: "",
    original:
      "Оригинал иллюстрации с авторской стрелкой; содержание не изменено.",
  },
  pm: {
    tab: "Пневмомедиастинум",
    title: "Пневмомедиастинум после сурфактанта",
    badge: "Снимок 4 / 4",
    patient:
      "Девочка, родившаяся в 33 недели 6 дней гестации, масса при рождении 1972 г. Точный возраст на этой рентгенограмме не указан.",
    caption:
      "Пневмомедиастинум на предоперационной рентгенограмме, выполненной сразу после введения сурфактанта. Чёрные стрелки присутствуют в оригинале.",
    look: [
      "Рассмотреть зоны просветления в проекции верхнего средостения, отмеченные исходными стрелками.",
      "Сопоставить медиастинальный воздух с контурами тимуса и сердца.",
      "Не считать любой ободок вокруг сердца специфичным для пневмомедиастинума: исключать пневмоперикард и сочетанные утечки.",
    ],
    context:
      "В этой иллюстрации авторы отмечают медиастинальный воздух. Полный классический spinnaker-sail sign не следует приписывать снимку только по названию заболевания.",
    credit:
      "Nakajima H. et al. Idiopathic pneumoperitoneum without gastrointestinal perforation in a low-birth weight infant: A rare type of air leak syndrome. Radiology Case Reports, 2020, Figure 2. DOI: 10.1016/j.radcr.2020.04.036. PMCID PMC7215104.",
    license: "CC BY-NC-ND 4.0",
    source: "",
    licenseUrl: "",
    original:
      "Оригинал без обрезки, ретуши и дополнительных меток. Разрешение исходного изображения 357 × 321 пиксель.",
  },
};
function xrayView() {
  const d = xrayCases[xrayCase];
  return `<div class="xraytabs" role="group" aria-label="Рентгенограммы">${Object.entries(
    xrayCases,
  )
    .map(
      ([k, v]) =>
        `<button class="${k === xrayCase ? "selected" : ""}" aria-pressed="${k === xrayCase}" onclick="setXray('${k}')">${v.tab}</button>`,
    )
    .join(
      "",
    )}</div><div class="xray-case-num"><span class="pill">${d.badge}</span><span class="small muted">Реальная рентгенограмма</span></div><h2 style="margin-top:15px">${d.title}</h2><p class="small muted">${d.patient}</p><figure class="xray-stage"><button class="xray-imgbutton" onclick="openXray()" aria-label="Увеличить: ${d.title}"><img src="${xrayImages[xrayCase]}" alt="${d.caption}" decoding="async"></button><figcaption>${d.caption}</figcaption></figure><div class="xraytoolbar"><span class="xray-quality">${d.original}</span><button onclick="openXray()">Увеличить снимок</button></div><h3 style="margin-top:22px">На что обратить внимание</h3><ul class="checklist">${d.look.map((x) => `<li>${x}</li>`).join("")}</ul>${note("Клинический контекст", d.context, xrayCase === "ptx" ? "danger" : "")}<div class="xray-source">${d.credit}<br><span>Публикация</span> · <span>${d.license}</span>. Изображение воспроизведено без изменения содержания.</div>`;
}
function setXray(k) {
  if (!Object.hasOwn(xrayCases, k)) return;
  xrayCase = k;
  const y = scrollY;
  render();
  scrollTo(0, y);
}
function openXray() {
  const d = xrayCases[xrayCase];
  const im = document.querySelector("#xray-modal-img");
  im.src = xrayImages[xrayCase];
  im.alt = d.caption;
  im.style.width = "100%";
  xrayZoomed = false;
  document.querySelector("#xray-modal-title").textContent = d.title;
  document.querySelector("#xray-modal-caption").textContent = d.original;
  document.querySelector("#xray-zoom-button").textContent = "Увеличить ×2";
  document.querySelector("#xraydialog").showModal();
}
function zoomXray() {
  xrayZoomed = !xrayZoomed;
  document.querySelector("#xray-modal-img").style.width = xrayZoomed
    ? "200%"
    : "100%";
  document.querySelector("#xray-zoom-button").textContent = xrayZoomed
    ? "Вписать в окно"
    : "Увеличить ×2";
}

const content = {
  start: () =>
    card(
      "",
      null,
      `<div class="panel-label">Оценить до перевода</div>${steps([
        [
          "Определить задачу",
          "Недостаточный газообмен либо необходимость потенциально повреждающих параметров традиционной ИВЛ. Оценить рекрутабельность лёгких.",
        ],
        [
          "Проверить дыхательные пути и аппарат",
          "Положение и проходимость ЭТТ, утечку, контур, увлажнение, датчик потока и доступность необходимых измерений.",
        ],
        [
          "Оценить исходное состояние",
          "Газы крови, текущие MAP и FiO₂, SpO₂, АД и перфузию. При нестабильности — оценка гемодинамики, по показаниям ЭхоКГ.",
        ],
      ])}`,
    ) +
    card(
      "",
      "Стартовые ориентиры обзора",
      `<p class="small muted">Значения ниже приведены авторами обзора. Последующая настройка — по ответу ребёнка и возможностям аппарата.</p>${table(
        ["Параметр", "Ориентир"],
        [
          [
            "Paw / MAP",
            "На 2 мбар выше среднего давления предшествующей поддержки при переводе с традиционной ИВЛ. При утечке воздуха или перераздувании требуется другая стратегия.",
          ],
          [
            "FiO₂",
            "Исходно — уровень предыдущей поддержки; затем титровать к назначенной цели SpO₂.",
          ],
          [
            "ΔP без VG",
            "До видимых симметричных осцилляций грудной клетки и передней брюшной стенки; далее — по VThf и газам крови.",
          ],
          [
            "VThf",
            "В обзоре: 1,8–2,2 мл/кг при надёжном измерении. Индивидуальный объём может быть ниже; это не фиксированная цель для всех детей.",
          ],
          [
            "Частота",
            "В обзоре: >2,5 кг — 10 Гц; недоношенные — 11–14 Гц; ЭНМТ — 15 Гц. Выбор зависит также от механики лёгких и аппарата.",
          ],
          [
            "I:E",
            "В обзоре — 1:2. Соотношение зависит от аппарата; переносить его между моделями автоматически нельзя.",
          ],
        ],
      )}${refs("Обзор, с. 89–91; уточнение I:E — NHSGGC")}`,
    ) +
    note(
      "Единицы давления",
      "В обзоре использованы мбар. На аппарате могут отображаться см вод. ст.: 1 мбар ≈ 1,02 см вод. ст. Проверяйте единицы и определение амплитуды в инструкции.",
    ) +
    card(
      "",
      "Первый контроль",
      `${steps([
        [
          "Непрерывно у постели",
          "SpO₂, ЧСС, АД/перфузия, симметрия осцилляций, VThf и DCO₂ при наличии.",
        ],
        [
          "Газы крови через 20–30 минут",
          "Раньше — при ухудшении; после существенной коррекции повторить контроль. Не ждать планового забора при нестабильности.",
        ],
        [
          "Оценка расправления лёгких",
          "Рентгенография после начала поддержки по клинической ситуации. Уровень диафрагмы оценивается вместе с общей картиной и гемодинамикой.",
        ],
      ])}${refs("Обзор, с. 90–91; первый анализ газов — NHSGGC")}`,
    ),
  oxygen: () =>
    card(
      "",
      "Два инструмента оксигенации",
      `<div class="metric-grid"><div class="metric"><span class="pill">Кислород</span><div class="big">FiO₂</div><p>Концентрация кислорода во вдыхаемой смеси.</p></div><div class="metric"><span class="pill">Объём лёгких</span><div class="big">Paw / MAP</div><p>Поддержание раскрытия лёгких при минимально достаточном давлении.</p></div></div>${lungFigure()}`,
    ) +
    card(
      "",
      "SpO₂ ниже назначенной цели",
      steps([
        [
          "Подтвердить гипоксемию",
          "Проверить сигнал пульсоксиметра, перфузию и состояние ребёнка. При внезапном ухудшении перейти к аварийной карточке.",
        ],
        [
          "Проверить трубку и контур",
          "Проходимость и положение ЭТТ, симметрию осцилляций, соединения и конденсат.",
        ],
        [
          "Оценить объём лёгких и кровообращение",
          "Ателектаз, перераздувание, утечка воздуха, ПЛГ и нарушения гемодинамики требуют разных действий.",
        ],
        [
          "Титровать поддержку",
          "FiO₂ — к назначенной цели. Paw повышать при признаках недостаточного раскрытия и потенциально рекрутабельных лёгких; при перераздувании рассмотреть снижение.",
        ],
        [
          "Проверить ответ",
          "SpO₂, потребность в FiO₂, АД/перфузия, VThf и CO₂. Отсутствие эффекта требует пересмотра причины.",
        ],
      ]),
    ) +
    note(
      "Не повышать Paw только по сатурации",
      "Гипоксемия при перераздувании или снижении сердечного выброса может усугубиться при дальнейшем повышении давления.",
      "warn",
    ) +
    card(
      "",
      "SpO₂ выше назначенной цели",
      `<p>Снижать FiO₂ с контролем оксигенации. При улучшении лёгочной механики своевременно пересматривать Paw, чтобы избежать перераздувания.</p>${details("Какой диапазон SpO₂ указан в статье?", "В обзоре указан диапазон 92–96%. Его нельзя считать универсальным для всех новорождённых. Цель назначают с учётом гестационного и постменструального возраста, ПЛГ, сопутствующих состояний и действующего протокола отделения.")}${refs("Обзор, с. 90–94; клиническое пояснение редакции")}`,
    ),
  co2: () =>
    `<div class="panel"><h2>Выберите режим и ситуацию</h2><div class="segmented" role="group" aria-label="Режим вентиляции"><button class="${!vgMode ? "selected" : ""}" onclick="setCO2(false,null)" aria-pressed="${!vgMode}">Без VG</button><button class="${vgMode ? "selected" : ""}" onclick="setCO2(true,null)" aria-pressed="${vgMode}">С VG</button></div><div class="statuspair" role="group" aria-label="Изменение CO2"><button class="${highCO2 ? "selected" : ""}" onclick="setCO2(null,true)" aria-pressed="${highCO2}">CO₂ ↑</button><button class="${!highCO2 ? "selected" : ""}" onclick="setCO2(null,false)" aria-pressed="${!highCO2}">CO₂ ↓</button></div><div id="co2algorithm">${co2Algorithm()}</div></div>${note("Газы крови определяют тактику", "Оценивать CO₂ вместе с pH, динамикой, типом образца и клиническим состоянием. PaCO₂ и PvCO₂ не взаимозаменяемы. Избегать быстрых колебаний CO₂.")}${details("Числовые цели в обзоре", "Авторы приводят PaCO₂ 35–55 мм рт. ст. и отмечают дискуссионность целей и допустимой гиперкапнии. Это не обязательный диапазон для каждого ребёнка. Целевой PvCO₂ в статье не определён. Транскутанный CO₂ полезен для динамики с сопоставлением с газами крови.")}${refs("Обзор, с. 90–91; различие частотного ответа при VG — European Consensus 2025")}`,
  recruit: () =>
    note(
      "Сначала — оценка рекрутабельности",
      "Манёвр рассматривают при недостаточном раскрытии лёгких. Обструкция, воздушные ловушки, утечка воздуха и нестабильная гемодинамика требуют отдельного решения.",
      "warn",
    ) +
    card(
      "",
      "Три этапа рекрутмента",
      `<p class="small muted">Выберите этап, чтобы увидеть задачу и контроль.</p><div class="figurebox"><svg class="viz" viewBox="0 0 590 230" role="img" aria-label="Схема трёх этапов рекрутмента: повышение Paw, снижение до закрытия, поддерживающее давление"><path d="M42 22V187H558" fill="none" stroke="#adbdcb"/><text x="8" y="18" fill="#5a7287" font-size="13">Paw</text><text x="510" y="213" fill="#5a7287" font-size="12">Время</text><path id="rec1" d="M48 159h38v-26h38v-26h38V81h38V55h45" fill="none" stroke="${recStep === 0 ? "#337f92" : "#beced8"}" stroke-width="4"/><path id="rec2" d="M245 55h30v25h34v26h34v26h34v26h35" fill="none" stroke="${recStep === 1 ? "#b18742" : "#beced8"}" stroke-width="4"/><path id="rec3" d="M412 158h25v-30h105" fill="none" stroke="${recStep === 2 ? "#538f82" : "#beced8"}" stroke-width="4"/><circle cx="245" cy="55" r="6" fill="#337f92"/><circle cx="412" cy="158" r="6" fill="#b18742"/><circle cx="465" cy="128" r="6" fill="#538f82"/><g font-size="12" fill="#4a657c"><text x="205" y="34">Открытие</text><text x="365" y="182">Закрытие</text><text x="439" y="110">Поддержание</text></g></svg><p class="caption">Обучающая схема: высота и длительность ступеней условны, абсолютные значения Paw не заданы.</p></div><div class="recsteps" role="group" aria-label="Этапы рекрутмента">${["1. Открытие", "2. Закрытие", "3. Поддержание"].map((x, i) => `<button class="${recStep === i ? "selected" : ""}" aria-pressed="${recStep === i}" onclick="setRec(${i})">${x}</button>`).join("")}</div><div class="reccontent">${recBody()}</div>${refs("Обзор, с. 91–92, рис. 3")}`,
    ) +
    note(
      "Прекратить эскалацию и оценить причину",
      "При падении АД/ухудшении перфузии, нарастающей десатурации, подозрении на утечку воздуха или перераздувание. Не продолжать повышение Paw ради достижения FiO₂ 0,30.",
      "danger",
    ) +
    details(
      "Пошаговые числовые ориентиры авторов",
      "В статье: изменение Paw на 1–2 мбар с интервалами 15–20 минут; ориентир открытия — снижение FiO₂ до 0,30 при поддержании целевой SpO₂; закрытия — повторное нарастание потребности в кислороде; поддержание — обычно на 2 мбар выше точки закрытия. Интервалы и конечные точки в других протоколах отличаются. Эти числа описывают методику обзора, а не обязательный сценарий для каждого ребёнка.",
    ) +
    details(
      "Повторный рекрутмент и доказательность",
      "Обзор считает манёвр опциональным и подчёркивает индивидуальное решение. Приведённое в нём предложение повторять манёвр каждые 12 часов не перенесено в алгоритм как рутинное назначение. Улучшение оксигенации само по себе не доказывает улучшения долгосрочных исходов.",
    ),
  urgent: () =>
    note(
      "Действовать одновременно с оценкой",
      "Немедленно привлечь помощь и обеспечить оксигенацию/вентиляцию по состоянию ребёнка. При критической брадикардии — реанимационные действия по действующему алгоритму отделения. Не ждать завершения диагностики.",
      "danger",
    ) +
    card(
      "",
      "Быстрая проверка у постели",
      steps([
        [
          "Ребёнок и сигнал",
          "ЧСС, SpO₂, АД, перфузия; качество сигнала монитора. Оценить выраженность и симметрию осцилляций.",
        ],
        [
          "ЭТТ",
          "Положение и фиксация, проходимость, перегиб, секрет, утечка. Отсутствие осцилляций может быть связано с обструкцией или экстубацией.",
        ],
        [
          "Контур и аппарат",
          "Соединения, разгерметизация, подача газов, конденсат, работа осциллятора, датчик потока и тревоги.",
        ],
        [
          "Лёгкие и кровообращение",
          "Пневмоторакс, дерекрутмент, перераздувание, ПЛГ, снижение венозного возврата или другая причина шока. Срочная оценка по доступным методам.",
        ],
      ]),
    ) +
    card(
      "",
      "Признак → направление поиска",
      table(
        ["Что изменилось", "Что исключать"],
        [
          [
            "Осцилляции уменьшились с двух сторон",
            "Обструкция ЭТТ, экстубация, размыкание/неисправность контура, накопление конденсата.",
          ],
          [
            "Осцилляции стали асимметричными",
            "Смещение ЭТТ, однолёгочная вентиляция, пневмоторакс.",
          ],
          [
            "Ухудшение после санации или размыкания",
            "Дерекрутмент; также проверить положение и проходимость ЭТТ.",
          ],
          [
            "Снижение АД после повышения Paw",
            "Перераздувание и снижение венозного возврата; параллельно исключать другие причины шока.",
          ],
          [
            "CO₂ растёт, VThf снижается",
            "Трубка/контур, изменение механики лёгких; при VG — достижение предела амплитуды.",
          ],
        ],
      ),
    ) +
    note(
      "Подозрение на напряжённый пневмоторакс",
      "При клинической картине и нестабильности — экстренная помощь по протоколу отделения без ожидания рентгенографии.",
      "danger",
    ) +
    card(
      "",
      "После устранения причины",
      `<p>Повторно оценить газообмен, гемодинамику, VThf и потребность в поддержке. После восстановления проходимости или раскрытия лёгких возможна быстрая гипервентиляция: пересмотреть ΔP / целевой VThf.</p>${refs("Обзор, с. 90, 93–94; экстренная последовательность — клиническая редакционная адаптация")}`,
    ),
  vg: () =>
    card(
      "",
      "Что делает аппарат",
      `<div class="figurebox"><div class="metric-grid"><div class="metric"><span class="pill">Врач задаёт</span><div class="big">VThf</div><p>Целевой осцилляторный объём и предел ΔP, а также Paw, частоту и FiO₂.</p></div><div class="metric"><span class="pill">Аппарат меняет</span><div class="big">ΔP</div><p>Амплитуду для достижения VThf в пределах заданных ограничений.</p></div></div></div><p>Контролировать фактический объём, амплитуду, её предел, утечку, работу датчика потока и газы крови.</p>${refs("Обзор, с. 90–91; контроль предела — клиническое пояснение")}`,
    ) +
    card(
      "",
      "Как трактовать изменение ΔP",
      table(
        ["При одинаковом целевом VThf", "Возможное объяснение"],
        [
          [
            "ΔP постепенно уменьшается",
            "Для достижения объёма требуется меньшее давление; возможно улучшение механики лёгких. Оценить Paw и риск перераздувания.",
          ],
          [
            "ΔP увеличивается",
            "Возможно ухудшение механики или рост сопротивления: секрет, перегиб/обструкция ЭТТ, конденсат, изменение утечки.",
          ],
          [
            "ΔP достигла предела, VThf ниже цели",
            "Целевой объём не обеспечивается. Проверить ребёнка, ЭТТ, контур и измерение; не повышать предел автоматически.",
          ],
        ],
      ),
    ) +
    note(
      "Частота: другой ответ при VG",
      "При сохранённом фактическом VThf снижение частоты уменьшает DCO₂. Алгоритм «снизить частоту, чтобы вывести CO₂» из режима без VG сюда автоматически не переносится.",
    ) +
    card(
      "",
      "DCO₂ — показатель динамики",
      `<div class="equation">DCO₂ = f × VThf²</div><p class="small muted">f — Гц (с⁻¹); VThf — мл; DCO₂ — мл²/с. При нормировании на массу квадрат массы находится в знаменателе: мл²/(кг²·с).</p><p>Сравнивать динамику у конкретного ребёнка, учитывая единицы аппарата, собственное дыхание и качество измерения. DCO₂ не заменяет измерение CO₂ крови.</p><button class="back" onclick="go('dco2')">Таблица ориентиров DCO₂ →</button>${refs("Формула и ограничения интерпретации — NHSGGC; частотный ответ VG — European Consensus 2025")}`,
    ),
  dco2: () =>
    card(
      "",
      "Математическая модель элиминации CO₂",
      `<p>Для количественной оценки вентиляции в режиме HFOV используют коэффициент транспорта газа DCO₂. По его динамике клиницист может косвенно оценивать изменение элиминации углекислого газа.</p><div class="equation">DCO₂ = f × VThf²</div><ul class="checklist"><li><strong>f</strong> — частота осцилляций в герцах; 1 Гц = 60 циклов/мин.</li><li><strong>VThf</strong> — высокочастотный дыхательный объём в мл.</li><li><strong>DCO₂</strong> — коэффициент транспорта газа, мл²/с.</li></ul><p>Квадратичная зависимость от дыхательного объёма означает, что при неизменной частоте даже небольшое увеличение VThf заметно повышает DCO₂. Например, увеличение VThf на 10% повышает DCO₂ на 21%.</p><p>При ВЧО ИВЛ <strong>без VG</strong> первым шагом коррекции гиперкапнии после проверки ЭТТ, контура и раскрытия лёгких обычно служит увеличение амплитуды осцилляций. При <strong>VG</strong> корректируют целевой VThf, а аппарат подбирает амплитуду в пределах заданного ограничения.</p>`,
    ) +
    card(
      "",
      "Ориентировочные показатели DCO₂ для новорождённых",
      `<p>Таблица содержит ориентировочные стартовые значения DCO₂ и соответствующего дыхательного объёма в зависимости от массы ребёнка. Основа — руководство CAHS: расчёт из DCO₂corr = 60 мл²/(кг²·с), для детей до 2 кг.</p><p class="small muted"><strong>Таблица 1.</strong> Стартовые параметры DCO₂ и дыхательного объёма по массе тела.</p>${table(
        [
          "Масса<br>тела,<br>кг",
          "Целевой<br>DCO₂,<br>мл²/с",
          "VT при<br>10 Гц,<br>мл",
          "VT при<br>12 Гц,<br>мл",
          "VT при<br>15 Гц,<br>мл",
        ],
        [
          ["0,5", "15", "1,2", "1,1", "1,0"],
          ["0,7", "30", "1,7", "1,6", "1,4"],
          ["1,0", "60", "2,4", "2,2", "2,0"],
          ["1,3", "100", "3,2", "2,9", "2,6"],
          ["1,5", "135", "3,7", "3,4", "3,0"],
          ["1,8", "200", "4,4", "4,0", "3,6"],
          ["2,0", "240", "4,9", "4,5", "4,0"],
        ],
      )}<p class="caption">VT в таблице — абсолютный осцилляторный объём VThf в мл, а не мл/кг. Числа округлены, поэтому могут не совпадать точно с расчётом по формуле. Это стартовые ориентиры, достижение нормокапнии подтверждают газами крови.</p><p class="small"><span>Источник: CAHS, Ventilation — HFOV, с. 3</span></p>`,
    ) +
    card(
      "",
      "Коррекция по газам крови",
      `<p>В руководстве CAHS предложено изменять DCO₂ примерно на <strong>10%</strong> с учётом CO₂ и целевого pH.</p>${steps(
        [
          [
            "CO₂ высокий, pH ниже назначенной цели",
            "После исключения механических причин недостаточной вентиляции рассмотреть повышение DCO₂ примерно на 10%.",
          ],
          [
            "CO₂ низкий, имеется респираторный алкалоз",
            "Рассмотреть снижение DCO₂ примерно на 10%, ориентируясь на назначенные цели газообмена.",
          ],
          [
            "Проверить результат",
            "Повторно оценить CO₂ и pH. Без VG корректируют амплитуду, при VG — целевой VThf.",
          ],
        ],
      )}<p class="small muted" style="margin-top:16px">Шаг DCO₂ 10% не равен шагу VThf 10%: при постоянной частоте для повышения DCO₂ на 10% расчётный прирост VThf составляет около 4,9%.</p>`,
    ) +
    note(
      "Оценивать вместе с состоянием ребёнка",
      "DCO₂ не измеряет pCO₂ крови. Учитывать собственное дыхание, утечку, качество измерения объёма, механику лёгких и фактическое достижение VThf при VG.",
    ) +
    refs("Дополнение к обзору: CAHS, Ventilation — HFOV, с. 3"),
  resistance: () =>
    card(
      "",
      "Что означает Resistance",
      `<p><strong>R — сопротивление потоку газа.</strong> Чем оно выше, тем больше перепад давления нужен для заданного потока.</p><div class="equation">R = ΔPрез / поток</div><p class="small muted">ΔPрез — резистивная часть перепада давления. Единицы: <strong>см вод. ст.·с/л</strong> или <strong>мбар·с/л</strong>. Это не отношение PIP к потоку: часть давления расходуется на эластическое растяжение.</p><div class="figurebox"><svg class="viz" viewBox="0 0 540 110" role="img" aria-label="Сужение просвета дыхательных путей увеличивает сопротивление"><g fill="none" stroke-width="3"><path d="M15 25h160M15 75h160" stroke="#6d93a8"/><path d="M300 25h40l35 15h70l35-15h40M300 75h40l35-15h70l35 15h40" stroke="#ae8254"/><path d="M40 50h100m-12-8 12 8-12 8M315 50h175m-12-8 12 8-12 8" stroke="#658396"/></g><g fill="#4b667c" font-size="13" text-anchor="middle"><text x="95" y="103">Свободный просвет</text><text x="410" y="103">Сужение → R ↑</text></g></svg></div><p class="small">На VN500 <strong>R</strong> — общее сопротивление; <strong>Rpat</strong> — расчётное сопротивление пациента с учётом ЭТТ. Для Rpat важны правильно введённые тип и внутренний диаметр трубки.</p>`,
    ) +
    card(
      "",
      "Если R увеличивается",
      `${table(
        ["Возможная причина", "Что проверить"],
        [
          [
            "ЭТТ: секрет, перегиб, малый просвет",
            "Проходимость, положение и фиксацию трубки; показания к санации.",
          ],
          [
            "Контур: вода или дополнительное сопротивление",
            "Конденсат, фильтры, соединения, исправность датчика потока.",
          ],
          [
            "Изменение дыхательных путей",
            "Обструкцию и динамику потока; оценивать вместе с клиникой.",
          ],
        ],
      )}<p class="small muted" style="margin-top:14px">Рост R не является самостоятельным показанием к бронхолитикам или повышению давления.</p>`,
    ) +
    card(
      "",
      "Почему меняется время выдоха",
      `<div class="equation">τ = R × C</div><p class="small muted">Для τ в секундах использовать C в л/мбар при R в мбар·с/л. Если C задан в мл/мбар, то τ = R × C / 1000.</p><p>В простой пассивной модели рост R при неизменной C удлиняет постоянную времени. При недостаточной длительности выдоха возможны неполное опорожнение и воздушные ловушки.</p><p class="small">В традиционной ИВЛ оценивать возврат экспираторного потока к нулю до следующего вдоха. Формула τ не задаёт автоматически частоту или I:E при ВЧО ИВЛ.</p>`,
    ) +
    mechanicsScope() +
    note(
      "Практический акцент HFOV",
      "При росте сопротивления ЭТТ могут уменьшиться VThf и DCO₂. При VG возможен рост ΔP до заданного предела. Сначала проверить доставку объёма, затем пересматривать настройки.",
    ) +
    details(
      "Как оценивать достоверность",
      "Сравнивать тренд на одном аппарате при сопоставимых условиях. Учитывать утечку, собственные дыхательные усилия, изменение потока, калибровку и алгоритм устройства. Универсальный диапазон R для всех новорождённых здесь не задан.",
    ) +
    refs(
      "Dräger Babylog VN500 SW 2.n, с. 78, 272; CAHS Conventional Ventilation, с. 7; клиническая адаптация",
    ),
  compliance: () =>
    card(
      "",
      "Что означает Compliance",
      `<p><strong>C — податливость дыхательной системы:</strong> изменение объёма на единицу изменения растягивающего давления. Измерение у дыхательных путей характеризует систему «лёгкие + грудная стенка», а не только лёгочную ткань.</p><div class="equation">C = ΔV / ΔPэласт</div><p class="small muted">Единицы: <strong>мл/см вод. ст.</strong> или <strong>мл/мбар</strong>. Для сопоставления с массой: C/масса, мл/(кг·см вод. ст.). ΔPэласт — эластическая часть давления.</p><div class="figurebox"><svg class="viz" viewBox="0 0 520 180" role="img" aria-label="На графике давление–объём более крутой наклон соответствует большей податливости"><path d="M50 15v130h420" fill="none" stroke="#a9bbc9" stroke-width="1.5"/><path d="M55 140L290 28" fill="none" stroke="#4b8c86" stroke-width="3"/><path d="M55 140L430 85" fill="none" stroke="#aa8a61" stroke-width="3"/><g font-size="14" fill="#45627a"><text x="20" y="20">V</text><text x="472" y="160">P</text><text x="305" y="32">C выше</text><text x="377" y="78">C ниже</text></g></svg><p class="caption">Сравнение наклонов P–V в условной линейной модели. Диапазон объёмов и давлений не задан.</p></div>`,
    ) +
    card(
      "",
      "Статическая и динамическая",
      `${table(
        ["Показатель", "Как понимать"],
        [
          [
            "Cstat",
            "При отсутствии потока или по модели с отделением резистивной составляющей. Классическая формула: VT / (Pplat − PEEPtotal).",
          ],
          [
            "Cdyn",
            "Зависит от метода. Приближение VT / (PIP − PEEPtotal) включает влияние сопротивления; аппаратный регрессионный расчёт может отличаться.",
          ],
        ],
      )}<p class="small muted" style="margin-top:14px">Формулы относятся к традиционной ИВЛ: для оценки по плато нужны отсутствие потока, пассивность пациента и достоверное давление плато. PEEPtotal включает внутреннее PEEP. Нельзя считать VThf/ΔP измеренным комплаенсом при HFOV.</p>`,
    ) +
    card(
      "",
      "Интерпретация тренда",
      `${table(
        ["Наблюдение", "Что учитывать"],
        [
          [
            "C снижается",
            "Ателектаз/дерекрутмент, изменение паренхимы или грудной стенки; возможно также перераздувание. Одно число не определяет направление коррекции Paw.",
          ],
          [
            "C увеличивается",
            "Возможны раскрытие лёгких или эффект сурфактанта. При прежнем давлении без VG объём может увеличиться — нужен контроль CO₂.",
          ],
          [
            "После изменения PEEP или Paw",
            "Оценивать вместе с газообменом, объёмом и гемодинамикой. Максимальное C само по себе не доказывает безопасный объём лёгких.",
          ],
        ],
      )}`,
    ) +
    mechanicsScope() +
    note(
      "На ВЧО ИВЛ",
      "При изменении механики отслеживать фактический VThf, DCO₂ и CO₂; при VG — также ΔP и её предел. Эти тренды дополняют, но не заменяют оценку раскрытия лёгких.",
    ) +
    details(
      "Пример расчёта — не целевое значение",
      "При VT 4 мл и эластическом перепаде давления 8 см вод. ст. C = 0,5 мл/см вод. ст. Для массы 1 кг C/масса = 0,5 мл/(кг·см вод. ст.). Пример иллюстрирует единицы, а не норму или стартовую настройку.",
    ) +
    refs(
      "Hamilton Medical: Cstat vs Cdyn; SLE6000 IFU UM165/UK issue 7, с. 165; клиническая адаптация",
    ),
  c20: () =>
    card(
      "",
      "Что показывает C20/C",
      `<p>Безразмерное отношение податливости в заключительной части вдоха (<strong>C20</strong>) к податливости всего вдоха (<strong>C</strong>). Показывает, как меняется наклон зависимости давление–объём к концу вдоха.</p><div class="equation">C20/C = C20 ÷ C</div><p class="small muted">C20 — не «20% от значения C». Выделение последних 20% зависит от алгоритма: например, в описании интерфейса SLE6000 указан последний 20%-й участок подъёма давления.</p>${c20Figure()}`,
    ) +
    card(
      "",
      "Как трактовать результат",
      `${table(
        ["Значение", "Интерпретация"],
        [
          [
            "<1",
            "На VN500 означает снижение податливости в конце вдоха; возможно перераздувание.",
          ],
          [
            "<0,8",
            "В материале Dräger C20/Cstat — ориентир возможного перераздувания. Это не универсальный порог для всех моделей и вариантов индекса.",
          ],
          [
            "≈1",
            "Наклон существенно не меняется. Индекс сам по себе не исключает регионального перераздувания.",
          ],
          [
            ">1",
            "Податливость в конце вдоха увеличивается; возможно раскрытие дополнительных участков во время вдоха. Это не автоматическое показание повышать PEEP.",
          ],
        ],
      )}`,
    ) +
    card(
      "",
      "Если индекс снижается",
      `${steps([
        [
          "Подтвердить достоверность",
          "Оценить утечку, датчик потока, собственные усилия и качество кривых. Для VN500 проверить введённые тип и внутренний диаметр ЭТТ.",
        ],
        [
          "Сопоставить с другими данными",
          "VT, давление, P–V-петля, газообмен, расправление лёгких и гемодинамика.",
        ],
        [
          "Пересмотреть стратегию при подтверждённом перераздувании",
          "Оценить избыточный объём и давление; коррекцию выбирать по всей клинической картине. Не снижать и не повышать PEEP только по индексу.",
        ],
      ])}`,
    ) +
    mechanicsScope() +
    note(
      "Ограничение C20/C",
      "Это показатель формы обычного вдоха. Нельзя использовать его как универсальную шкалу рекрутмента при HFOV или автоматически переносить порог 0,8 на любую модель аппарата.",
      "warn",
    ) +
    details(
      "Источники и различия обозначений",
      "Dräger Babylog VN500 SW 2.n, с. 317: C20/C <1, =1, >1 и зависимость коррекции от ЭТТ. Dräger «Did you know? C20/C»: обозначение C20/Cstat и ориентир <0,8. SLE6000 UM165/UK issue 7, с. 172: последний 20%-й участок подъёма давления. Эти обозначения не следует считать полностью взаимозаменяемыми.",
    ) +
    refs(
      "Dräger Babylog VN500 IFU, с. 317; Dräger Did you know? C20/C; SLE6000 IFU, с. 172; клиническая адаптация",
    ),
  radiology: () =>
    note(
      "Рентгенограмма — часть оценки",
      "Учитывать клинику, возраст, проекцию, ротацию и уже проведённое лечение. Частоту снимков определяет клиническая необходимость; «непрерывный рентгенологический мониторинг» не требуется.",
    ) +
    card(
      "",
      "Как читать снимок у ребёнка на ВЧО ИВЛ",
      `${steps([
        [
          "Проверить условия и устройства",
          "Дата, сторона, положение пациента, ротация и экспозиция. Положение ЭТТ, катетеров и дренажей.",
        ],
        [
          "Оценить объём и паренхиму",
          "Симметрия аэрации, положение диафрагмы, зоны уплотнения и просветления, воздушные бронхограммы.",
        ],
        [
          "Искать утечку воздуха",
          "Плевра и периферический рисунок, средостение, тимус, контуры сердца; сравнить с предыдущим снимком.",
        ],
      ])}`,
    ) +
    card("", "", radView()) +
    details(
      "Диафрагма и Paw: ориентиры, а не команда",
      "В обзоре Задворнова и соавт. и в практическом руководстве NHSGGC VIII–IX задние рёбра приведены как ориентир расправления. Низкая уплощённая диафрагма на уровне X ребра и ниже может сопровождать гиперинфляцию. Счёт рёбер оценивают вместе с качеством снимка, неоднородностью поражения, SpO₂/FiO₂, CO₂ и гемодинамикой; он не задаёт автоматическое изменение Paw на 1–2 см вод. ст.",
    ) +
    note(
      "Неотложная ситуация",
      "При клиническом подозрении на напряжённый пневмоторакс у нестабильного ребёнка не ждать рентгенографии. Действовать по неотложному протоколу отделения.",
      "danger",
    ) +
    details(
      "Дополнительные ограничения интерпретации",
      "Симптом непрерывной диафрагмы не устанавливает единственную локализацию воздуха. Воздух вокруг сердца требует дифференциации медиастинальной и перикардиальной утечки. Свободный газ в брюшной полости нельзя считать нехирургическим только из-за сопутствующего пневмомедиастинума: требуется отдельная оценка абдоминальной патологии.",
    ) +
    refs(
      "По предоставленному тексту, с редакционной сверкой: ESPR 2025; Decoding the neonatal chest radiograph, 2021; BPD imaging review, 2022; CAHS Pneumothorax",
    ),
  xray: () =>
    card(
      "",
      "Рентгенологический атлас",
      `<p>Четыре опубликованные рентгенограммы с краткими пояснениями, сведениями о пациенте, авторстве и лицензии. Нажмите на снимок для увеличения.</p><p class="small muted">Изображения демонстрируют конкретные наблюдения. Настройки вентиляции не выбирают по сходству с одной иллюстрацией.</p>`,
    ) +
    card("", "", xrayView()) +
    details(
      "Проверка предложенных источников",
      "<p><strong>NBK560779:</strong> Figure 1 действительно содержит рентгенограмму РДС; она включена.</p><p><strong>PMC10313521:</strong> обзор содержит схемы и графики HFV, а не рентгенограмму БЛД. Для БЛД использована Figure 1 из PMC8921108.</p><p><strong>PMC12396899:</strong> наблюдение девочки 1 года 7 месяцев после интубационной травмы трахеи. Это педиатрический, а не неонатальный пример. Для основного атласа пневмоторакса выбран неонатальный случай Zhang et al., 2024.</p><p><strong>PMC7215104:</strong> Figure 2 действительно показывает пневмомедиастинум у недоношенной девочки; она включена.</p><p><strong>PMC3736656:</strong> наблюдение ребёнка 4 месяцев с бронхиолитом и сочетанной утечкой воздуха. Оно не представлено здесь как снимок новорождённого.</p>",
    ) +
    note(
      "Учебное использование изображений",
      "Условия воспроизведения указаны под каждым снимком. Для материалов CC BY-NC-ND разрешено некоммерческое распространение без изменения содержания при сохранении авторства.",
    ) +
    refs(
      "StatPearls / NBK560779; Higano et al., 2022; Zhang et al., 2024; Nakajima et al., 2020",
    ),
  monitor: () =>
    card(
      "",
      "Что наблюдать",
      table(
        ["Постоянно", "В динамике / по ситуации"],
        [
          [
            "SpO₂, ЧСС; АД и перфузия",
            "Газы крови и pH; транскутанный CO₂ с сопоставлением с анализами.",
          ],
          [
            "Симметрия и выраженность осцилляций",
            "Положение/проходимость ЭТТ, утечка, секрет и конденсат.",
          ],
          [
            "VThf, ΔP, DCO₂ при наличии",
            "Рентгенография и УЗИ лёгких по показаниям; оценка расправления и утечки воздуха.",
          ],
          [
            "При VG — достижение целевого объёма и предела ΔP",
            "ЭхоКГ при ПЛГ, шоке или подозрении на влияние Paw на кровообращение.",
          ],
        ],
      ),
    ) +
    note(
      "CO₂ может измениться быстро",
      "Особенно после сурфактанта, рекрутмента, санации и изменения механики лёгких. В этих ситуациях пересматривают параметры и учащают контроль по клинической необходимости.",
    ) +
    card(
      "",
      "Не допустить дерекрутмента",
      `<ul class="checklist"><li>Минимизировать размыкания контура при уходе и перемещениях.</li><li>Использовать закрытую санационную систему, если доступна.</li><li>Санировать по признакам секрета/обструкции, снижению VThf или осцилляций, изменению газообмена.</li><li>После вмешательства повторно оценить раскрытие лёгких и потребность в поддержке.</li></ul>${refs("Обзор, с. 90–91, 93–94")}`,
    ) +
    details(
      "Рентгенологический ориентир",
      "В обзоре: диафрагма на уровне VIII–IX задних рёбер, прозрачность лёгочных полей и различимые контуры сердца и диафрагмы. Положение диафрагмы само по себе не определяет оптимальный Paw; учитывать перераздувание, неоднородность поражения и гемодинамику.",
    ) +
    details(
      "Интервалы контроля в статье",
      "Первый анализ газов авторы предлагают через 30 минут, затем приводят интервалы 4, 6, 8 часов. Рентген-контроль — через 2 часа после перевода, далее ежедневно или по ситуации. В справочнике это не превращено в обязательное расписание: частота исследований зависит от нестабильности и вмешательств. Обычная EtCO₂-капнометрия при ВЧО ИВЛ непригодна для оценки элиминации CO₂.",
    ),
  wean: () =>
    card(
      "",
      "Снижать поддержку по ответу",
      steps([
        [
          "Убедиться в улучшении",
          "Стабильный газообмен, уменьшение кислородозависимости, приемлемая гемодинамика и улучшение заболевания.",
        ],
        [
          "Пересматривать FiO₂ и Paw",
          "Удерживать назначенную оксигенацию; при улучшении механики снижать избыточное расправляющее давление с контролем дерекрутмента.",
        ],
        [
          "Уменьшать вентиляционную поддержку",
          "Без VG — корректировать ΔP по CO₂; с VG — целевой VThf по газам крови. Отслеживать гипокапнию.",
        ],
        [
          "Оценить готовность к экстубации",
          "Самостоятельное дыхание и его устойчивость, газообмен, невысокая потребность в поддержке, проходимость дыхательных путей, гемодинамика и возможность неинвазивной поддержки.",
        ],
      ]),
    ) +
    note(
      "Paw — только часть решения",
      "В обзоре Paw 8–9 мбар приведено как ориентир перехода с ВЧО ИВЛ. Это не самостоятельный критерий экстубации и не универсальный порог.",
    ) +
    card(
      "",
      "Два возможных пути",
      `<div class="metric-grid"><div class="metric"><h3>Экстубация</h3><p>С переходом на выбранную неинвазивную поддержку при готовности ребёнка.</p></div><div class="metric"><h3>Традиционная ИВЛ</h3><p>Если инвазивная поддержка ещё необходима; параметры подбираются по механике и газообмену.</p></div></div><p class="small muted" style="margin-top:16px">Преимущество одного пути для всех пациентов в обзоре не установлено. Обязательного промежуточного этапа традиционной ИВЛ нет.</p>${refs("Обзор, с. 94–95; критерии готовности — клиническая адаптация")}`,
    ),
  special: () =>
    card(
      "",
      "Выбирать стратегию по механике",
      table(
        ["Ситуация", "Практический акцент"],
        [
          [
            "Обструкция, воздушные ловушки, эмфизема",
            "Риск перераздувания. Стратегия минимально необходимого Paw; отказ от рутинного рекрутмента. Индивидуально оценивать частоту и время выдоха.",
          ],
          [
            "Мекониальная аспирация",
            "Возможна неоднородная механика с обструкцией и ателектазами. Не относить автоматически всё лёгкое к рекрутабельному; избегать избыточного Paw.",
          ],
          [
            "ВДГ / гипоплазия лёгких",
            "Рекрутмент не увеличивает анатомическое количество лёгочной ткани. Индивидуальная стратегия; универсального преимущества ВЧО ИВЛ обзор не устанавливает.",
          ],
          [
            "ПЛГ",
            "Оценить паренхиму лёгких и гемодинамику. Раскрытие ателектазов может быть полезно при лёгочном компоненте; ВЧО ИВЛ не заменяет лечение причины ПЛГ.",
          ],
          [
            "Сформированная БЛД",
            "Один стартовый алгоритм для всех фенотипов неприменим. Оценить обструкцию, неоднородность вентиляции и воздушные ловушки. В обзоре нет отдельного проверенного протокола ВЧО ИВЛ при БЛД.",
          ],
        ],
      ),
    ) +
    card(
      "",
      "Дополнительные опции",
      `${table(
        ["Опция", "Что учитывать"],
        [
          [
            "Sigh — вздохи",
            "Могут улучшать раскрытие и газообмен в отдельных случаях. Данных для рутинного применения недостаточно; учитывать риск дополнительного растяжения.",
          ],
          [
            "Автоматическое управление FiO₂",
            "Может стабилизировать SpO₂. Нужны корректно заданные цели и тревоги; в обзоре не установлено улучшение долгосрочных исходов.",
          ],
        ],
      )}${refs("Обзор, с. 91–94; пояснение по БЛД — редакционная граница материала")}`,
    ),
};
function co2Algorithm() {
  const a = vgMode
    ? highCO2
      ? [
          [
            "Сначала проверить доставку объёма",
            "Фактический VThf, предел ΔP, утечку, датчик потока, проходимость ЭТТ и контур.",
          ],
          [
            "Если объём обеспечивается, а вентиляция недостаточна",
            "Рассмотреть небольшое повышение целевого VThf под контролем CO₂ и pH.",
          ],
          [
            "Проверить результат",
            "Контроль газов крови после коррекции; при наличии — непрерывная оценка транскутанного CO₂.",
          ],
        ]
      : [
          [
            "Проверить фактический VThf и тренд CO₂",
            "Учитывать улучшение механики, собственное дыхание и недавние вмешательства.",
          ],
          [
            "Уменьшить целевой VThf",
            "Малыми шагами с контролем газообмена. Аппарат должен снизить ΔP для нового целевого объёма.",
          ],
          [
            "Проверить результат",
            "Повторная оценка CO₂ и pH; предупредить быстрое нарастание гиперкапнии после коррекции.",
          ],
        ]
    : highCO2
      ? [
          [
            "Исключить механическую причину",
            "ЭТТ, контур, секрет, конденсат, снижение VThf, изменение раскрытия лёгких.",
          ],
          [
            "Повысить ΔP",
            "С контролем фактического VThf, осцилляций и газов крови.",
          ],
          [
            "Если амплитудой цель не достигается",
            "Рассмотреть снижение частоты при подходящей механике лёгких. VThf может заметно увеличиться: нужен близкий контроль CO₂.",
          ],
        ]
      : [
          [
            "Подтвердить гипервентиляцию",
            "Проверить анализ и динамику, VThf, улучшение комплаенса, результат санации или рекрутмента.",
          ],
          ["Снизить ΔP", "С контролем VThf, CO₂ и pH."],
          [
            "Частоту менять при необходимости",
            "Повышение частоты может уменьшить VThf и элиминацию CO₂. Эффект зависит от аппарата и механики лёгких.",
          ],
        ];
  return `<div class="panel-label">${vgMode ? "ВЧО ИВЛ + VG" : "ВЧО ИВЛ без VG"} · ${highCO2 ? "гиперкапния" : "гипокапния"}</div>${steps(a)}${note(vgMode ? "Частота при сохранённом VThf" : "Частота при неизменной ΔP", vgMode ? "Снижение f уменьшает DCO₂; повышение f увеличивает DCO₂, пока аппарат обеспечивает заданный VThf. Частоту не используют как автоматический первый шаг коррекции." : "Снижение f обычно увеличивает VThf и элиминацию CO₂; повышение f обычно уменьшает их. Сначала корректируют амплитуду.", "warn")}`;
}
function recBody() {
  return [
    steps([
      [
        "Постепенно повышать Paw",
        "Искать улучшение оксигенации и возможность снижения FiO₂ при сохранённой цели SpO₂.",
      ],
      [
        "Параллельно контролировать безопасность",
        "АД, перфузия, VThf и CO₂. Достигнутое высокое давление не оставляют как постоянную настройку.",
      ],
    ]),
    steps([
      [
        "Постепенно снижать Paw",
        "Искать уровень, при котором оксигенация снова ухудшается или растёт потребность в FiO₂.",
      ],
      [
        "Распознать точку закрытия",
        "Интерпретировать изменение вместе с гемодинамикой и состоянием ЭТТ/контура.",
      ],
    ]),
    steps([
      [
        "Выбрать давление выше точки закрытия",
        "По обзору — обычно +2 мбар; затем подтвердить клинический эффект и стабильность.",
      ],
      [
        "Продолжать переоценку",
        "По мере улучшения механики снижать избыточное Paw. Повторное раскрытие не выполнять автоматически по расписанию.",
      ],
    ]),
  ][recStep];
}
function sources() {
  return `<div class="detail-title"><div class="eyebrow">Доказательная основа</div><h1>Источники и пояснения</h1><p>Откуда взяты алгоритмы и где заканчиваются данные обзора.</p></div>${card("", "Основная статья", `<span class="pill">Основа справочника</span><h3 style="margin-top:14px">Современные аспекты высокочастотной осцилляторной вентиляции лёгких в неонатальной интенсивной терапии</h3><p>Задворнов А.А., Черных А.А., Григорьев Е.В.<br>Анестезиология и реаниматология. 2026;5:87–96.</p><span>Статья · DOI · DOI: 10.17116/anaesthesiology202605187</span><p class="small muted" style="margin-top:12px">Текст, предоставленный пользователем. Клиническая структура и большинство числовых ориентиров взяты из этой статьи. Иллюстрации справочника — самостоятельные обучающие схемы.</p>`)}${card("", "Дополнительная сверка", `<h3>European Consensus Guidelines on the Management of RDS: 2025</h3><p class="small">Neonatology. 2026;123:514–539. Раздел HFOV: различие частотного ответа при VG и без VG; контроль CO₂.</p><span>Открыть рекомендации · DOI: 10.1159/000551062</span><hr style="border:0;border-top:1px solid #dfe6ed;margin:20px 0"><h3>NHSGGC: HFOV in the neonate (888)</h3><p class="small">Практическое руководство: первый анализ газов через 20–30 минут, формула DCO₂, аппаратные различия I:E. Доступ проверен 07.11.2026.</p><span>Открыть руководство</span>`)}${card("", "Что требует индивидуального решения", `<ul class="checklist"><li>Диапазон SpO₂ 92–96% из обзора не установлен здесь как общая цель для всех детей.</li><li>I:E 1:2 относится к описанию авторов; выбор зависит от модели аппарата.</li><li>PaCO₂ 35–55 мм рт. ст., VThf 1,8–2,2 мл/кг и Paw 8–9 мбар показаны как ориентиры статьи, с ограничениями.</li><li>Рекрутмент, повторные манёвры, вздохи и способ отлучения требуют индивидуального решения.</li><li>Неотложная последовательность действий, пункты проверки оборудования и готовности к экстубации — клиническая редакционная адаптация, а не дословный алгоритм авторов.</li></ul>`)}${card("", "Дополнение: DCO₂", `<h3>CAHS: Ventilation — HFOV</h3><p class="small">Таблица стартовых DCO₂ и VThf для детей до 2 кг; коррекция DCO₂ примерно на 10% по CO₂ и pH. Числа таблицы округлены по руководству.</p><span>Руководство CAHS, с. 3</span>`)}${card("", "Механика дыхания: R, C, C20/C", `<p class="small">Дополнительные карточки по механике и аппаратному мониторингу. Показатели традиционного дыхательного цикла не представлены как универсально измеряемые при HFOV.</p><p class="small"><span>Dräger Babylog VN500 SW 2.n: с. 78, 272, 317</span></p><p class="small"><span>Dräger: Did you know? C20/C</span></p><p class="small"><span>SLE6000 IFU UM165/UK issue 7: с. 165, 172</span></p><p class="small"><span>CAHS: Conventional Ventilation, с. 7–8</span></p><p class="small"><span>Hamilton Medical: Cstat vs Cdyn</span></p>`)}${card("", "Паттерны рентгенодиагностики", `<p class="small">Основа — предоставленный пользователем текст о РДС, БЛД и утечках воздуха. Описания признаков адаптированы для карманного формата; иллюстрации — самостоятельные условные схемы.</p><p class="small"><span>ESR Essentials: рекомендации European Society of Paediatric Radiology, 2025</span></p><p class="small"><span>Decoding the neonatal chest radiograph, 2021</span></p><p class="small"><span>Bronchopulmonary dysplasia: imaging review, 2022</span></p><p class="small"><span>Spinnaker-sail sign: case study and scoping review, 2025</span></p><p class="small"><span>CAHS Neonatology: Pneumothorax</span></p>`)}${card("", "Radiology: оригинальные рентгенограммы", `<p class="small">РДС — R. Kamity / StatPearls, Figure 1, NBK560779, CC BY-NC-ND 4.0. БЛД — Higano et al., 2022, Figure 1, DOI 10.1007/s00247-021-05250-1, CC BY 4.0. Пневмоторакс — Zhang et al., 2024, Figure 1, DOI 10.3389/fped.2024.1466852, CC BY 4.0. Пневмомедиастинум — Nakajima et al., 2020, Figure 2, DOI 10.1016/j.radcr.2020.04.036, CC BY-NC-ND 4.0. Полные подписи и условия воспроизведения приведены в карточке Radiology.</p><p class="small">Фото воспроизведены без изменения содержания. Отдельные иллюстрации не доказывают эффективность режима вентиляции.</p>`)}${card("", "Рекомендации Минздрава РФ", `<p class="small">«Синдром дыхательного расстройства у новорождённого», 2025, ID 340_2.</p><span>Карточка в официальном рубрикаторе</span><p class="small muted" style="margin-top:12px">Полный текст официальной карточки не удалось извлечь для построчной проверки. Поэтому справочник не обозначен как сверенный с КР Минздрава РФ и не представлен как локальный СОП.</p>`)}${card("", "Обозначения", `<dl class="glossary"><dt>Paw / MAP</dt><dd>Среднее давление в дыхательных путях.</dd><dt>ΔP</dt><dd>Амплитуда осцилляторного давления; определение зависит от аппарата.</dd><dt>VThf</dt><dd>Осцилляторный дыхательный объём.</dd><dt>VG</dt><dd>Гарантированный объём: автоматическая коррекция амплитуды.</dd><dt>f</dt><dd>Частота осцилляций; 1 Гц = 60 циклов/мин.</dd><dt>DCO₂</dt><dd>Коэффициент транспорта CO₂: f × VThf².</dd><dt>ЭТТ</dt><dd>Эндотрахеальная трубка.</dd><dt>ПЛГ</dt><dd>Персистирующая лёгочная гипертензия.</dd><dt>R</dt><dd>Сопротивление потоку газа.</dd><dt>C</dt><dd>Податливость дыхательной системы.</dd><dt>τ</dt><dd>Постоянная времени; τ = R × C при согласованных единицах.</dd><dt>C20/C</dt><dd>Отношение податливости заключительной части вдоха к податливости всего вдоха.</dd></dl>`)}${card("", "Автономный справочник", `<p class="small">Весь справочник, включая шрифт, схемы и таблицы, находится в этом HTML-файле. Для чтения интернет не нужен. Откройте файл в браузере и переходите между карточками с помощью кнопок.</p><p class="small muted">Избранное и размер текста сохраняются в браузере, если он разрешает локальное хранение для файлов. Данные пациентов справочник не запрашивает.</p>`)}${footer()}`;
}
function render() {
  nav();
  let main = document.querySelector("#main");
  if (current === "home") {
    main.innerHTML = home();
    return;
  }
  if (current === "sources") {
    main.innerHTML = sources();
    return;
  }
  if (current === "saved") {
    main.innerHTML = `<div class="detail-title"><div class="eyebrow">Быстрый доступ</div><h1>Избранное</h1><p>Сохранённые клинические карточки.</p></div><div class="cards">${saved.length ? taskCards(sections.filter((s) => saved.includes(s.id))) : '<p class="empty">Откройте карточку и нажмите на звезду, чтобы добавить её сюда.</p>'}</div>${footer()}`;
    return;
  }
  let s = sections.find((s) => s.id === current);
  let i = sections.indexOf(s);
  main.innerHTML = `<div class="detailhead"><a class="back" href="index.html" style="text-decoration:none">${icon("back", 17)} Главное меню</a><button class="tool bookmark ${saved.includes(current) ? "active" : ""}" onclick="toggleSave()" aria-pressed="${saved.includes(current)}" aria-label="${saved.includes(current) ? "Удалить из избранного" : "Добавить в избранное"}">${icon("star", 21)}</button></div><div class="detail-title"><div class="eyebrow">Карточка ${String(i + 1).padStart(2, "0")} / ${String(sections.length).padStart(2, "0")}</div><h1 class="${s.id === "urgent" ? "urgent-title" : ""}">${s.title}</h1><p>${s.sub}</p></div>${content[current]()}<div class="nextbar"><button onclick="go('${i > 0 ? sections[i - 1].id : "home"}')">← ${i > 0 ? "Предыдущая" : "Все карточки"}</button><button onclick="go('${i < sections.length - 1 ? sections[i + 1].id : "sources"}')">${i < sections.length - 1 ? "Следующая" : "Источники"} →</button></div>${footer()}`;
}
function go(id) {
  if (!["home", "saved", "sources", ...sections.map((s) => s.id)].includes(id))
    id = "home";
  location.hash = id;
  if (current === id) {
    render();
    window.scrollTo(0, 0);
  }
}
function setCO2(v, h) {
  if (v !== null) vgMode = v;
  if (h !== null) highCO2 = h;
  let y = window.scrollY;
  render();
  window.scrollTo(0, y);
}
function setRec(i) {
  recStep = i;
  let y = window.scrollY;
  render();
  window.scrollTo(0, y);
}
function toggleSave() {
  if (saved.includes(current)) {
    saved = saved.filter((x) => x !== current);
    toast("Карточка удалена из избранного");
  } else {
    saved.push(current);
    toast("Карточка добавлена в избранное");
  }
  try {
    localStorage.setItem("hfov-saved", JSON.stringify(saved));
  } catch {}
  let y = scrollY;
  render();
  scrollTo(0, y);
}
function toast(s) {
  let t = document.querySelector("#toast");
  t.textContent = s;
  t.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add("hidden"), 2300);
}
function fontToggle() {
  large = !large;
  applyFont();
  try {
    localStorage.setItem("hfov-large", large ? "1" : "0");
  } catch {}
}
function applyFont() {
  document.body.classList.toggle("large", large);
  document
    .querySelector("#fontsize")
    .setAttribute("aria-pressed", String(large));
  document
    .querySelector("#fontsize")
    .setAttribute(
      "aria-label",
      large ? "Обычный размер текста" : "Увеличить текст",
    );
}
window.addEventListener("hashchange", () => {
  let id = location.hash.slice(1);
  current = ["home", "sources", "saved", ...sections.map((s) => s.id)].includes(
    id,
  )
    ? id
    : "home";
  render();
  window.scrollTo(0, 0);
  document.title =
    (sections.find((s) => s.id === current)?.title || "Карманный справочник") +
    " · ВЧО ИВЛ";
});
document.querySelector("#brandicon").innerHTML = icon("wave", 24);
document.querySelector("#sourceicon").innerHTML = icon("book", 19);
applyFont();
current = ["home", "sources", "saved", ...sections.map((s) => s.id)].includes(
  location.hash.slice(1),
)
  ? location.hash.slice(1)
  : "home";
render();
