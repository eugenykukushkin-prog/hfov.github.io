const np = [
  {
    name: "Плач / раздражительность",
    pain: [
      "Адекватный плач; нет раздражительности",
      "Периодический плач, раздражительность; утешается",
      "Высокий или беззвучный непрерывный плач; не утешается",
    ],
    sedation: [
      "Нет плача даже на болевой стимул",
      "Минимальный стон или плач на болевой стимул",
      "Адекватный плач",
    ],
  },
  {
    name: "Поведенческое состояние",
    pain: [
      "Соответствует гестационному возрасту",
      "Беспокойство, частые пробуждения",
      "Выгибание, удары ногами, постоянное бодрствование либо минимальная реакция без седации",
    ],
    sedation: [
      "Нет пробуждения и спонтанных движений",
      "Минимальное пробуждение, мало спонтанных движений",
      "Соответствует гестационному возрасту",
    ],
  },
  {
    name: "Мимика",
    pain: [
      "Расслабленная, соответствует возрасту",
      "Периодические признаки боли",
      "Постоянные признаки боли",
    ],
    sedation: [
      "Рот расслаблен, мимики нет",
      "Минимальная мимическая реакция на стимул",
      "Обычная мимика",
    ],
  },
  {
    name: "Тонус конечностей",
    pain: [
      "Расслабленные кисти и стопы, нормальный тонус",
      "Периодическое сжатие пальцев / разведение пальцев, без общего напряжения",
      "Постоянное сжатие пальцев / разведение пальцев, напряжённое тело",
    ],
    sedation: [
      "Вялость, нет хватательных рефлексов",
      "Слабый хватательный рефлекс, снижен тонус",
      "Нормальный тонус",
    ],
  },
  {
    name: "Витальные показатели",
    pain: [
      "В пределах исходных значений",
      "ЧСС / ЧД / АД повышаются на 10–20% при стимуляции; SpO₂ 76–85% с быстрым восстановлением",
      "ЧСС / ЧД / АД повышаются >20%; SpO₂ ≤75% или десинхронизация с аппаратом",
    ],
    sedation: [
      "Нет вариабельности при стимуляции, гиповентиляция / апноэ",
      "Изменение от исходного уровня <10% при стимуляции",
      "Обычная реакция на стимул",
    ],
  },
];
const ni = [
  { name: "Выражение лица", opts: ["Лицо расслаблено", "Гримаса"] },
  {
    name: "Плач",
    opts: [
      "Нет плача",
      "Хныканье, слабый прерывистый плач",
      "Громкий непрерывный плач (включая беззвучный при интубации)",
    ],
  },
  {
    name: "Характер дыхания",
    opts: ["Обычное спокойное дыхание", "Изменение дыхательного паттерна"],
  },
  { name: "Руки", opts: ["Расслаблены", "Напряжены, согнуты или разогнуты"] },
  { name: "Ноги", opts: ["Расслаблены", "Напряжены, согнуты или разогнуты"] },
  {
    name: "Состояние бодрствования",
    opts: ["Спит или спокойно бодрствует", "Беспокоен, возбуждён"],
  },
];
let scale = "npass";
let values = { pain: {}, sedation: {}, nips: {} };
function mode() {
  return document.querySelector('input[name="mode"]:checked').value;
}
function switchScale(s) {
  scale = s;
  document.getElementById("npass").classList.toggle("hide", s !== "npass");
  document.getElementById("nips").classList.toggle("hide", s !== "nips");
  document
    .getElementById("tab-npass")
    .classList.toggle("active", s === "npass");
  document.getElementById("tab-nips").classList.toggle("active", s === "nips");
  render();
}
function renderItems(target, items, key) {
  document.getElementById(target).innerHTML = items
    .map(
      (it, i) =>
        '<div class="item"><strong>' +
        (i + 1) +
        ". " +
        it.name +
        '</strong><div class="choices">' +
        (key === "nips" ? it.opts : it[key])
          .map((desc, j) => {
            let v = key === "sedation" ? j - 2 : j;
            return (
              '<label class="choice"><input type="radio" name="' +
              key +
              i +
              '" value="' +
              v +
              '" ' +
              (values[key][i] === v ? "checked" : "") +
              " onchange=\"choose('" +
              key +
              "'," +
              i +
              "," +
              v +
              ')"><span><b>' +
              (v > 0 ? "+" : "") +
              v +
              "</b> — " +
              desc +
              "</span></label>"
            );
          })
          .join("") +
        "</div></div>",
    )
    .join("");
}
function choose(key, i, v) {
  values[key][i] = v;
  update();
}
function render() {
  let m = mode();
  document.getElementById("gaBox").classList.toggle("hide", m === "sedation");
  renderItems("npassItems", np, m);
  renderItems("nipsItems", ni, "nips");
  update();
}
function update() {
  let m = mode(),
    key = scale === "nips" ? "nips" : m,
    required = key === "nips" ? 6 : 5,
    vals = Object.values(values[key]),
    complete = vals.length === required,
    ga = document.getElementById("ga").value,
    ready = complete && (key !== "pain" || ga !== ""),
    sum =
      vals.reduce((a, b) => a + b, 0) +
      (key === "pain" && ga !== "" ? Number(ga) : 0),
    result = document.getElementById(scale + "Result");
  document.getElementById("scoreLabel").textContent =
    key === "nips"
      ? "NIPS"
      : m === "pain"
        ? "N-PASS · боль"
        : "N-PASS · седация";
  document.getElementById("scoreValue").textContent = ready ? sum : "—";
  document.getElementById("scoreHint").textContent = ready
    ? "Оценка завершена"
    : "Заполнено " +
      vals.length +
      " из " +
      required +
      (key === "pain" && ga === "" ? " · укажите возраст" : "");
  if (!ready) {
    result.innerHTML =
      '<b>Результат не рассчитан</b><p class="muted">Необходимо оценить все критерии' +
      (key === "pain"
        ? " и указать гестационный / скорректированный возраст"
        : "") +
      ".</p>";
    return;
  }
  let msg = "";
  if (key === "pain")
    msg =
      sum > 3
        ? "Более 3 баллов: требуется оценка необходимости обезболивания / вмешательства."
        : "0–3 балла: ниже порога >3, используемого в одном из клинических протоколов. Известный болевой стимул требует профилактики боли независимо от баллов.";
  else if (key === "sedation")
    msg =
      sum === 0
        ? "Признаков угнетения реакции по шкале нет."
        : sum <= -8
          ? "Выраженная глубина седации / угнетения реакций."
          : sum <= -4
            ? "Снижение реактивности, оцените целевой уровень седации."
            : "Небольшое снижение реактивности; сопоставьте с клинической целью.";
  else
    msg =
      sum === 0
        ? "Боль по шкале не выявлена."
        : sum <= 3
          ? "1–3: слабовыраженные признаки боли."
          : sum <= 5
            ? "4–5: умеренно выраженные признаки боли."
            : "6–7: выраженные признаки боли.";
  result.innerHTML =
    "<h2>Итог: " +
    sum +
    " " +
    (key === "pain"
      ? "баллов (с поправкой " + (Number(ga) > 0 ? "+" : "") + ga + ")"
      : "баллов") +
    "</h2><p>" +
    msg +
    "</p>" +
    (key === "nips"
      ? '<p class="muted">Для NIPS пороги интерпретации различаются между публикациями; здесь используется классификация LOINC (0 / 1–3 / 4–5 / 6–7).</p>'
      : "");
}
function resetCurrent() {
  let k = scale === "nips" ? "nips" : mode();
  values[k] = {};
  if (k === "pain") document.getElementById("ga").value = "";
  render();
}
render();
