let mode = "full"; // Добавлено объявление переменной mode

const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

// Присвоение обработчиков событий
fullBtn.onclick = bindMode("full");
dateBtn.onclick = bindMode("date");
timeBtn.onclick = bindMode("time");

setInterval(update, 10);
update();

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString() + "." + now.getMilliseconds();
    case "date":
      return now.toLocaleDateString(); // Исправлено на toLocaleDateString для отображения только даты
    case "full":
      return now.toLocaleString(); // Исправлено на toLocaleString для отображения полной даты и времени
    default:
      return now.toLocaleString(); // Исправлено на toLocaleString
  }
}
