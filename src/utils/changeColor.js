import getRandomColor from "./getRandomColor";

export const changeColor = (event) => {
  const body = document.querySelector("body");
  body.style.color = "";
  const randomColor = getRandomColor();
  body.style.background = randomColor;
};
