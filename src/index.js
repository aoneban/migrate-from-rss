import "./index.html";
import "./index.scss";
import code from "./img/code.jpg";
import birdsData from "./modules/data";

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

const imgWrap = document.querySelector(".img");
const img = new Image();
img.src = code;
img.width = 200;
imgWrap.append(img);

setBirds(birdsNames(birdsData, 0));
generatePlayerWithSong();
userSelect();

let testBut = document.querySelector(".next-level")
testBut.addEventListener("click", newFunc)

function newFunc() {
  alert('Hi')
}
