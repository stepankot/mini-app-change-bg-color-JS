// Нужен список цветов?
// Пример hex цвета - # решетка
// 6 символов
// #_ _ _ _ _ _
// Функция рандома Math, обратимся к документации JS

export default function getRandomColor() {
  let hexColor = "#"; //Создали решетку, к которой будем добавлять через цикл значения
  for (let i = 0; i < 6; i++) {
    //Логика для генерации рандомного числа от 0 до 9
    const randomNumber = Math.floor(Math.random() * 9);
    hexColor += randomNumber;
  }

  return hexColor;
}
