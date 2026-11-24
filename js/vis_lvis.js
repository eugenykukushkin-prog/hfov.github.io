(() => {
  "use strict";
  const drugs = [
    { id: "dopamine", name: "Допамин", unit: "мкг/кг/мин", factor: 1 },
    { id: "dobutamine", name: "Добутамин", unit: "мкг/кг/мин", factor: 1 },
    { id: "epinephrine", name: "Адреналин", unit: "мкг/кг/мин", factor: 100 },
    {
      id: "norepinephrine",
      name: "Норадреналин",
      unit: "мкг/кг/мин",
      factor: 100,
    },
    { id: "milrinone", name: "Милринон", unit: "мкг/кг/мин", factor: 10 },
    {
      id: "vasopressin",
      name: "Вазопрессин",
      unit: "ЕД/кг/мин",
      factor: 10000,
    },
    {
      id: "levosimendan",
      name: "Левосимендан",
      unit: "мкг/кг/мин",
      factor: 50,
      extended: true,
    },
    {
      id: "phenylephrine",
      name: "Фенилэфрин",
      unit: "мкг/кг/мин",
      factor: 100,
      extended: true,
    },
  ];
  let mode = "vis";
  const $ = (id) => document.getElementById(id);
  const inputs = {};
  const fmt = (n) =>
    Number(n.toFixed(6)).toLocaleString("ru-RU", { maximumFractionDigits: 6 });
  for (const d of drugs) {
    const row = document.createElement("div");
    row.className = "drug";
    row.id = "row-" + d.id;
    const wrap = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = d.id;
    label.textContent = d.name;
    const unit = document.createElement("div");
    unit.className = "unit";
    unit.textContent = d.unit + " · × " + d.factor;
    wrap.append(label, unit);
    const input = document.createElement("input");
    input.id = d.id;
    input.type = "text";
    input.inputMode = "decimal";
    input.autocomplete = "off";
    input.placeholder = "0";
    input.setAttribute("aria-label", d.name + ", " + d.unit);
    input.addEventListener("input", calculate);
    inputs[d.id] = input;
    row.append(wrap, input);
    $("fields").append(row);
  }
  function parse(s) {
    s = s.trim().replace(",", ".");
    if (!s) return 0;
    if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(s)) return NaN;
    return Number(s);
  }
  function calculate() {
    let total = 0,
      valid = true,
      details = [];
    for (const d of drugs) {
      if (d.extended && mode === "vis") continue;
      const n = parse(inputs[d.id].value);
      if (!Number.isFinite(n) || n < 0) {
        valid = false;
        inputs[d.id].setAttribute("aria-invalid", "true");
      } else {
        inputs[d.id].removeAttribute("aria-invalid");
        const v = n * d.factor;
        total += v;
        if (n !== 0) details.push([d.name, v]);
      }
    }
    if (!Number.isFinite(total)) valid = false;
    $("error").textContent = valid
      ? ""
      : "Проверьте ввод: допускаются только неотрицательные числовые дозы.";
    $("score").textContent = valid ? fmt(total) : "—";
    $("breakdown").replaceChildren();
    if (valid) {
      if (!details.length) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 2;
        td.textContent = "Нет введённых доз";
        tr.append(td);
        $("breakdown").append(tr);
      } else {
        for (const [name, v] of details) {
          const tr = document.createElement("tr");
          const a = document.createElement("td");
          a.textContent = name;
          const b = document.createElement("td");
          b.textContent = fmt(v);
          tr.append(a, b);
          $("breakdown").append(tr);
        }
      }
    }
    return valid ? total : null;
  }
  function setMode(next) {
    mode = next;
    for (const d of drugs)
      if (d.extended)
        $("row-" + d.id).classList.toggle("hidden", mode !== "lvis");
    for (const [id, m] of [
      ["visTab", "vis"],
      ["lvisTab", "lvis"],
    ]) {
      $(id).classList.toggle("active", mode === m);
      $(id).setAttribute("aria-pressed", String(mode === m));
    }
    $("resultTitle").textContent =
      mode === "vis" ? "Стандартный индекс VIS" : "Расширенный индекс LVIS";
    $("formula").textContent =
      "VIS = допамин + добутамин + 100 × адреналин + 100 × норадреналин + 10 × милринон + 10 000 × вазопрессин" +
      (mode === "lvis" ? " + 50 × левосимендан + 100 × фенилэфрин" : "") +
      ". Все катехоламины, милринон и левосимендан/фенилэфрин — в мкг/кг/мин; вазопрессин — в ЕД/кг/мин.";
    calculate();
  }
  $("visTab").addEventListener("click", () => setMode("vis"));
  $("lvisTab").addEventListener("click", () => setMode("lvis"));
  $("reset").addEventListener("click", () => {
    for (const d of drugs) inputs[d.id].value = "";
    calculate();
  });
  $("copy").addEventListener("click", async () => {
    const value = calculate();
    if (value === null) return;
    const s =
      (mode === "vis" ? "VIS" : "LVIS") +
      " = " +
      fmt(value) +
      "\n" +
      drugs
        .filter((d) => !d.extended || mode === "lvis")
        .map((d) => d.name + ": " + (inputs[d.id].value || "0") + " " + d.unit)
        .join("\n");
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(s);
      } else {
        const t = document.createElement("textarea");
        t.value = s;
        document.body.append(t);
        t.select();
        if (!document.execCommand("copy")) throw Error("copy");
        t.remove();
      }
      $("copy").textContent = "Скопировано";
      setTimeout(() => ($("copy").textContent = "Копировать результат"), 1700);
    } catch (e) {
      $("error").textContent =
        "Копирование недоступно в этом браузере. Выделите результат вручную.";
    }
  });
  function openRequestedIndex() {
    setMode(location.hash === "#lvis" ? "lvis" : "vis");
  }
  window.addEventListener("hashchange", openRequestedIndex);
  openRequestedIndex();
})();
