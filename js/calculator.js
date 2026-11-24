"use strict";
const $ = (id) => document.getElementById(id);
const numeric = (id, label, min, max, hint, score) => ({
  id,
  label,
  min,
  max,
  hint,
  score,
  type: "num",
});
const choice = (id, label, options, hint = "") => ({
  id,
  label,
  options,
  hint,
  type: "sel",
});
const neuro = () =>
  choice("neuro", "Данные нейросонографии", [
    [0, "Нет кровоизлияния / только субэпендимальное"],
    [1, "Внутрижелудочковое кровоизлияние"],
    [
      2,
      "Паренхиматозное кровоизлияние / гидроцефалия / лейкомаляция / атрофия",
    ],
  ]);
const resp = () =>
  choice(
    "resp",
    "Респираторная поддержка",
    [
      [0, "Самостоятельное дыхание без дополнительного O₂"],
      [1, "CPAP или дополнительный O₂ (FiO₂ > 0,21)"],
      [2, "Инвазивная ИВЛ"],
    ],
    "Для неинвазивных режимов, не названных в исходной таблице, категорию определяет врач; не приравнивайте их автоматически к инвазивной ИВЛ.",
  );
const cv = () =>
  choice("cv", "Артериальное давление и поддержка", [
    [0, "Адекватное АД без медикаментозной поддержки"],
    [1, "Адекватное АД на постоянной медикаментозной поддержке"],
    [2, "Гипотензия сохраняется на фоне поддержки"],
  ]);
const food = () =>
  choice(
    "food",
    "Питание / состояние кишечника",
    [
      [0, "Энтеральное питание"],
      [1, "Необходимо полное парентеральное питание"],
      [2, "Признаки некротизирующего энтероколита"],
    ],
    "При сочетании признаков выбирайте наибольший балл.",
  );
const plate = () =>
  numeric(
    "plate",
    "Тромбоциты, ×10⁹/л",
    0,
    5000,
    "0: >100; 1: 30–100 включительно; 2: <30.",
    (v) => (v < 30 ? 2 : v <= 100 ? 1 : 0),
  );
const urine = () =>
  numeric(
    "urine",
    "Диурез, мл/(кг·ч)",
    0,
    100,
    "0: >1; 1: 0,2–1 включительно; 2: <0,2.",
    (v) => (v < 0.2 ? 2 : v <= 1 ? 1 : 0),
  );
const bd = () =>
  numeric(
    "bd",
    "Дефицит оснований BD, ммоль/л",
    0,
    100,
    "Введите положительную величину дефицита: BE −10 → BD 10. При отсутствии дефицита — 0. 0: <7; 1: 7–15; 2: >15.",
    (v) => (v > 15 ? 2 : v >= 7 ? 1 : 0),
  );
const group = (name, fields, custom) => ({ name, fields, custom });
const configs = {
  n: {
    name: "nSOFA",
    max: 15,
    intro:
      "Оценка дыхательной, сердечно-сосудистой и гематологической дисфункции. Выберите поддержку и введите показатели.",
    note: "SpO₂ вводится в процентах, FiO₂ — в долях единицы. Например: 95 и 0,40 → S/F = 237,5. Без интубации дыхательный компонент равен 0, включая неинвазивную поддержку.",
    groups: [
      group(
        "Дыхательная система",
        [
          choice("tube", "Интубация / инвазивная ИВЛ", [
            [0, "Нет"],
            [1, "Да"],
          ]),
          numeric("spo", "SpO₂, %", 1, 100, "Например: 95.", null),
          numeric(
            "fio",
            "FiO₂, доля",
            0.21,
            1,
            "От 0,21 до 1,00. Не вводите 40 вместо 0,40.",
            null,
          ),
        ],
        (v) =>
          v.tube === 0
            ? 0
            : v.tube === null || v.spo === null || v.fio === null
              ? null
              : nResp(v.spo / v.fio),
      ),
      group(
        "Сердечно-сосудистая система",
        [
          choice("ino", "Число инотропных / вазоактивных препаратов", [
            [0, "0"],
            [1, "1"],
            [2, "2 и более"],
          ]),
          choice(
            "steroid",
            "Системные глюкокортикоиды для поддержки гемодинамики",
            [
              [0, "Нет"],
              [1, "Да"],
            ],
            "Учитываются при предполагаемой надпочечниковой недостаточности или катехоламинорезистентном шоке; антенатальные стероиды не учитываются.",
          ),
        ],
        (v) =>
          v.ino === null || v.steroid === null ? null : nCard(v.ino, v.steroid),
      ),
      group("Гематологическая система", [
        numeric(
          "plate",
          "Тромбоциты, ×10⁹/л",
          0,
          5000,
          "Последний анализ. 0: ≥150; 1: ≥100 и <150; 2: ≥50 и <100; 3: <50.",
          (v) => (v < 50 ? 3 : v < 100 ? 2 : v < 150 ? 1 : 0),
        ),
      ]),
    ],
  },
  o: {
    name: "NEOMOD",
    max: 14,
    intro: "Исходная шкала Janota, 2001. Семь систем, каждая от 0 до 2 баллов.",
    note: "Все семь систем оцениваются отдельно. Пустое поле не считается нормой. Для ежедневной оценки используйте один и тот же суточный интервал.",
    groups: [
      group("Центральная нервная система", [neuro()]),
      group("Гемокоагуляция", [plate()]),
      group("Дыхательная система", [resp()]),
      group("Желудочно-кишечная система", [food()]),
      group("Сердечно-сосудистая система", [cv()]),
      group("Почечная система", [urine()]),
      group("Кислотно-основное состояние", [bd()]),
    ],
  },
  m: {
    name: "Модифицированная NEOMOD",
    max: 16,
    intro:
      "Çetinkaya, 2012. Восемь систем. В каждой системе учитывается наибольший балл её критериев, максимум 2.",
    note: "Период оценки — 24 часа, первые 28 суток жизни. В статье: худшие значения за сутки; для ЖКТ и почечной системы — средние за сутки. Билирубин и АЛТ входят в ЖКТ, отдельного девятого компонента печени нет.",
    groups: [
      group("Центральная нервная система", [neuro()]),
      group("Гемокоагуляция", [
        plate(),
        numeric(
          "wbc",
          "Лейкоциты, ×10⁹/л",
          0,
          500,
          "0: >5; 1: 3–5; 2: <3.",
          (v) => (v < 3 ? 2 : v <= 5 ? 1 : 0),
        ),
      ]),
      group("Дыхательная система", [resp()]),
      group("Желудочно-кишечная система", [
        food(),
        numeric(
          "bili",
          "Общий билирубин, мкмоль/л",
          0,
          3000,
          "Порог 4 мг/дл = 68,416; 6 мг/дл = 102,624 мкмоль/л. Коэффициент авторов 17,104.",
          (v) => (v > 102.624 ? 2 : v >= 68.416 ? 1 : 0),
        ),
        choice(
          "alt",
          "АЛТ относительно верхнего предела нормы",
          [
            [0, "В пределах нормы"],
            [1, "Выше нормы, но менее 2 ВПН"],
            ["uncertain", "Ровно 2 ВПН — граница не определена авторами"],
            [2, "Более 2 ВПН"],
          ],
          "Используйте верхний предел нормы своей лаборатории.",
        ),
      ]),
      group("Сердечно-сосудистая система", [
        cv(),
        choice("hr", "Стойкое отклонение ЧСС", [
          [0, "Нет: ЧСС 100–180/мин включительно"],
          [2, "Да: ЧСС <100 или >180/мин"],
        ]),
      ]),
      group("Почечная система", [
        urine(),
        numeric(
          "creat",
          "Креатинин, мкмоль/л",
          0,
          3000,
          "0: <88,4; 1: 88,4–176,8; 2: >176,8. Коэффициент 88,4.",
          (v) => (v > 176.8 ? 2 : v >= 88.4 ? 1 : 0),
        ),
      ]),
      group("Кислотно-основное состояние", [bd()]),
      group("Микроциркуляция", [
        choice("edema", "Отёки", [
          [0, "Нет"],
          [1, "Подкожные"],
          [2, "Генерализованные"],
        ]),
        numeric(
          "albumin",
          "Альбумин, г/л",
          0,
          100,
          "0: >30; 1: 25–30; 2: <25. По таблице авторов 2012 года.",
          (v) => (v < 25 ? 2 : v <= 30 ? 1 : 0),
        ),
      ]),
    ],
  },
};
let current = "n",
  state = { n: {}, o: {}, m: {} },
  last = null;
function nResp(r) {
  return r < 100 ? 8 : r < 150 ? 6 : r < 200 ? 4 : r < 300 ? 2 : 0;
}
function nCard(i, s) {
  return i === 0 ? s : i === 1 ? (s ? 3 : 2) : s ? 4 : 3;
}
function aggregate(values) {
  if (values.includes(2)) return 2;
  return values.includes(null) ? null : Math.max(...values);
}
function el(tag, props = {}, content) {
  const e = document.createElement(tag);
  Object.assign(e, props);
  if (content !== undefined) e.textContent = content;
  return e;
}
function render() {
  const c = configs[current];
  $("panel").setAttribute("aria-labelledby", "tab-" + current);
  $("title").textContent = c.name;
  $("intro").textContent = c.intro;
  $("note").textContent = c.note;
  $("form").replaceChildren();
  $("reportbox").hidden = true;
  document.querySelectorAll("[data-tab]").forEach((b) => {
    b.setAttribute("aria-selected", String(b.dataset.tab === current));
    b.tabIndex = b.dataset.tab === current ? 0 : -1;
  });
  c.groups.forEach((g, gi) => {
    const section = el("section", { className: "group" }),
      head = el("div", { className: "grouphead" });
    head.append(
      el("h3", {}, g.name),
      el("span", { className: "points", id: "p-" + gi }, "—"),
    );
    section.append(head);
    const fs = el("div", { className: "fields" });
    g.fields.forEach((f) => {
      const box = el("div", {
        className: "field" + (f.type === "sel" ? " wide" : ""),
      });
      const id = "f-" + f.id;
      box.append(el("label", { htmlFor: id }, f.label));
      let input;
      if (f.type === "sel") {
        input = el("select", { id });
        input.append(el("option", { value: "" }, "Выберите / нет данных"));
        f.options.forEach(([val, text]) =>
          input.append(el("option", { value: String(val) }, text)),
        );
      } else {
        input = el("input", {
          id,
          type: "text",
          inputMode: "decimal",
          placeholder: "Не введено",
        });
        input.setAttribute("autocomplete", "off");
      }
      input.value = state[current][f.id] ?? "";
      input.setAttribute("aria-describedby", id + "-hint " + id + "-error");
      input.addEventListener(f.type === "sel" ? "change" : "input", () => {
        state[current][f.id] = input.value;
        update();
      });
      box.append(
        input,
        el("small", { id: id + "-hint" }, f.hint || ""),
        el("div", { id: id + "-error", className: "error" }),
      );
      fs.append(box);
    });
    section.append(fs);
    $("form").append(section);
  });
  buildCriteria();
  update();
}
function read(f) {
  const inp = $("f-" + f.id),
    raw = inp.value.trim();
  let value = null,
    error = "";
  if (raw !== "") {
    if (f.type === "sel") {
      if (raw === "uncertain") error = "Балл не определён на этой границе.";
      else value = Number(raw);
    } else if (!/^(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(raw))
      error = "Введите неотрицательное число.";
    else {
      value = Number(raw.replace(",", "."));
      if (!Number.isFinite(value) || value < f.min || value > f.max) {
        error = "Допустимый диапазон: " + f.min + "–" + f.max + ".";
        value = null;
      }
    }
  }
  inp.setAttribute("aria-invalid", String(!!error));
  $("f-" + f.id + "-error").textContent = error;
  return value;
}
function update() {
  const c = configs[current],
    vals = {},
    fieldScores = {},
    results = [];
  if (current === "n") {
    const tube = $("f-tube").value;
    ["spo", "fio"].forEach((id) => {
      $("f-" + id).disabled = tube === "0";
    });
  }
  c.groups.forEach((g) =>
    g.fields.forEach((f) => {
      if (
        current === "n" &&
        ["spo", "fio"].includes(f.id) &&
        $("f-tube").value === "0"
      ) {
        vals[f.id] = null;
        $("f-" + f.id + "-error").textContent = "";
        $("f-" + f.id).setAttribute("aria-invalid", "false");
      } else vals[f.id] = read(f);
      fieldScores[f.id] =
        vals[f.id] === null
          ? null
          : f.type === "sel"
            ? vals[f.id]
            : f.score
              ? f.score(vals[f.id])
              : null;
    }),
  );
  c.groups.forEach((g, i) => {
    const s = g.custom
      ? g.custom(vals)
      : aggregate(g.fields.map((f) => fieldScores[f.id]));
    results.push(s);
    $("p-" + i).textContent = s === null ? "Нет данных" : s + " балл.";
  });
  const complete = results.every((v) => v !== null),
    total = complete ? results.reduce((a, b) => a + b, 0) : null;
  $("score").textContent = complete ? total + " / " + c.max : "— / " + c.max;
  $("status").textContent = complete
    ? "Расчёт завершён. Систем с баллом >0: " +
      results.filter((v) => v > 0).length +
      "."
    : "Оценено систем: " +
      results.filter((v) => v !== null).length +
      " из " +
      results.length +
      ". Заполните недостающие данные.";
  $("breakdown").replaceChildren(
    ...c.groups.map((g, i) => {
      const li = el("li");
      li.append(
        el("span", {}, g.name),
        el("strong", {}, results[i] === null ? "—" : String(results[i])),
      );
      return li;
    }),
  );
  $("report").disabled = !complete;
  last = { vals, results, total, complete };
  $("reportbox").hidden = true;
  $("printreport").textContent = reportText();
}
function reportText() {
  if (!last?.complete) return "Полный расчёт не выполнен.";
  const c = configs[current];
  let lines = [
    c.name + ": " + last.total + " из " + c.max + " баллов.",
    "Время формирования: " +
      new Date().toLocaleString("ru-RU") +
      " (время устройства).",
  ];
  c.groups.forEach((g, i) => {
    lines.push("\n" + g.name + ": " + last.results[i] + " балл.");
    g.fields.forEach((f) => {
      if (
        current === "n" &&
        last.vals.tube === 0 &&
        ["spo", "fio"].includes(f.id)
      )
        return;
      const raw = state[current][f.id] ?? "",
        text =
          f.type === "sel"
            ? f.options.find((o) => String(o[0]) === raw)?.[1]
            : raw;
      lines.push("  " + f.label + ": " + (text || "нет данных"));
    });
  });
  if (current === "n" && last.vals.tube === 1)
    lines.push("\nSpO₂/FiO₂: " + (last.vals.spo / last.vals.fio).toFixed(2));
  lines.push("\n" + c.note, "Версия калькулятора: 1.0 / 08.11.2026.");
  return lines.join("\n");
}
function buildCriteria() {
  const c = configs[current],
    box = $("criteria");
  box.replaceChildren();
  if (current === "n") {
    const wrap = el("div", { className: "tablewrap" });
    const t = el("table");
    const rows = [
      ["Компонент", "Баллы и условия"],
      [
        "Дыхание",
        "0 — нет интубации или S/F ≥300; 2 — S/F <300; 4 — <200; 6 — <150; 8 — <100. При интубации выбирается максимальная соответствующая категория.",
      ],
      [
        "Гемодинамика",
        "0 — нет препаратов и стероидов; 1 — только стероиды; 2 — один препарат без стероидов; 3 — ≥2 препаратов без стероидов или один со стероидами; 4 — ≥2 со стероидами.",
      ],
      ["Тромбоциты, ×10⁹/л", "0 — ≥150; 1 — [100;150); 2 — [50;100); 3 — <50."],
    ];
    rows.forEach((r, i) => {
      const tr = el("tr");
      r.forEach((x) => tr.append(el(i ? "td" : "th", {}, x)));
      t.append(tr);
    });
    wrap.append(t);
    box.append(wrap);
  } else {
    box.append(
      el(
        "p",
        {},
        "В каждой системе 0 — норма, 1 — умеренная, 2 — тяжёлая дисфункция. При нескольких критериях системы берётся максимум, а не сумма. При известном критерии на 2 балла результат системы уже определён, даже если другой критерий не заполнен.",
      ),
    );
    c.groups.forEach((g) => {
      const p = el("p");
      p.append(el("strong", {}, g.name + ": "));
      g.fields.forEach((f) => {
        p.append(
          document.createTextNode(
            f.label +
              ". " +
              (f.type === "sel"
                ? f.options.map(([v, t]) => v + ": " + t).join("; ")
                : f.hint) +
              " ",
          ),
        );
      });
      box.append(p);
    });
  }
}
document.querySelectorAll("[data-tab]").forEach((b) => {
  b.onclick = () => {
    current = b.dataset.tab;
    render();
  };
  b.onkeydown = (e) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const tabs = ["n", "o", "m"];
    let i = tabs.indexOf(current);
    current =
      e.key === "Home"
        ? "n"
        : e.key === "End"
          ? "m"
          : tabs[(i + (e.key === "ArrowRight" ? 1 : 2)) % 3];
    render();
    $("tab-" + current).focus();
  };
});
$("reset").onclick = () => {
  state[current] = {};
  render();
};
$("report").onclick = () => {
  $("reporttext").value = reportText();
  $("printreport").textContent = reportText();
  $("reportbox").hidden = false;
  $("reporttext").focus();
  $("reporttext").select();
};
$("print").onclick = () => window.print();
render();

function openRequestedScale() {
  const id = location.hash.slice(1);
  if (["n", "o", "m"].includes(id)) {
    current = id;
    render();
  }
}
window.addEventListener("hashchange", openRequestedScale);
openRequestedScale();
