import "./index.html";
import "./index.scss";
import birdsDataEn from "./modules/dataEn";

import {
  birdsNames,
  setBirds,
  generatePlayerWithSong,
  userSelect,
  finalPage,
  activMenu,
} from "./modules/functions";

setBirds(birdsNames(birdsDataEn, 0));
generatePlayerWithSong(0);
userSelect(0);

let buttonToNextLevel = document.getElementById("btn");
buttonToNextLevel.addEventListener("click", enterNewLevel);

let current = 1;

function enterNewLevel() {
  if (current === 6) {
    finalPage();
    let close = document.querySelector(".close");
    let container = document.getElementById("container");
    close.addEventListener("click", () => {
      container.remove();
    });
  }
  activMenu(current);
  document.getElementById("btn").disabled = true;
  document.querySelector(".next-level").style.backgroundColor = "#999";
  let myDelete = document.querySelector(".main-wrapper img");
  myDelete.remove();
  setBirds(birdsNames(birdsDataEn, current));
  generatePlayerWithSong(current);
  userSelect(current);
  current += 1;
}
