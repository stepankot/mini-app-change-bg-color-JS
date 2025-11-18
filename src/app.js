import Button from "./components/button";
import { changeColor } from "./utils/changeColor";

export default function initApp() {
  document
    .querySelector("body")
    .append(Button(changeColor, "Изменить цвет страницы"));
}
