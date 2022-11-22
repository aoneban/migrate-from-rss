import "./index.html";
import "./index.scss";
import birdsData from "./modules/data";
import code from "./img/code.jpg";

import {
  birdsNames,
  setBirds,
  randomInteger,
  randomSongGenerator,
  generatePlayerWithSong,
  userSelect,
  birdsArray,
  birdsNewImage,
  birdsNewDesc,
} from "./modules/functions";

(function myRequest() {
  alert(
    "Ребята и девчата, прошу проверить работу ближе к окончанию срока проверки. Надеюсь на понимание. Спасибо."
  );
})();

setBirds(birdsNames(birdsData, 0));
generatePlayerWithSong(0);
userSelect(0);

let current = 1;
let buttonToNextLevel = document.getElementById("btn");
buttonToNextLevel.addEventListener("click", enterNewLevel);

function enterNewLevel() {
  document.getElementById("btn").disabled = true;
  document.querySelector(".next-level").style.backgroundColor = "#999";
  let myDelete = document.querySelector(".main-wrapper img");
  current += 1;
  myDelete.remove();
  setBirds(birdsNames(birdsData, current));
  generatePlayerWithSong(current);
  userSelect(current);
}
