import "./index.html";
import "./index.scss";
import birdsData from "./modules/data";
import code from "./img/code.jpg";
import { totalScore } from "./modules/functions"

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
  f1,
  addNewCart,
} from "./modules/functions";

setBirds(birdsNames(birdsData, 0));
generatePlayerWithSong(0);
userSelect(0);

let current = 1;
let buttonToNextLevel = document.getElementById("btn");
buttonToNextLevel.addEventListener("click", enterNewLevel);

function enterNewLevel() {
  if (current === 6) {
    let playElse = prompt("Игра окончена. Напишите 'да' и сыграем еще раз.");
    if (playElse == "да") {
      let score = document.querySelector(".score");
      score.innerHTML = `Счет игры: 0`;
      current = 0;
      totalScore = 0;
      setBirds(birdsNames(birdsData, current));
      generatePlayerWithSong(current);
      userSelect(current);
    }
  }
  document.getElementById("btn").disabled = true;
  document.querySelector(".next-level").style.backgroundColor = "#999";
  let myDelete = document.querySelector(".main-wrapper img");
  myDelete.remove();
  setBirds(birdsNames(birdsData, current));
  generatePlayerWithSong(current);
  userSelect(current);
  current += 1;
}

const button = document.getElementById("mbtn");
button.addEventListener("click", () => {
  alert("hi");
});
