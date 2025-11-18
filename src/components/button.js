// Создаем универсальный компонент кнопки
// Принимает 2 параметра - стрелочную функцию, которая будет обрабатывать клик
// Текст самой кнопки

export default function Button(onclick, text) {
  const btn = document.createElement("button");
  btn.className = "button";
  btn.textContent = text;
  btn.addEventListener("click", onclick);

  return btn;
}
