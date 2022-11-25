import "./index.html";
import "./index.scss";
import birdsDataEn from "./modules/dataEn";

import {
  birdsNames,
  setBirds,
  generatePlayerWithSong,
  userSelect,
  finalPage,
} from "./modules/functions";

setBirds(birdsNames(birdsDataEn, 0));
generatePlayerWithSong(0);
userSelect(0);

export let hello = "Hello";
export let current = 1;
let buttonToNextLevel = document.getElementById("btn");
buttonToNextLevel.addEventListener("click", enterNewLevel);

function enterNewLevel() {
  if (current === 6) {
    finalPage();
  }
  document.getElementById("btn").disabled = true;
  document.querySelector(".next-level").style.backgroundColor = "#999";
  let myDelete = document.querySelector(".main-wrapper img");
  myDelete.remove();
  setBirds(birdsNames(birdsDataEn, current));
  generatePlayerWithSong(current);
  userSelect(current);
  current += 1;
}


