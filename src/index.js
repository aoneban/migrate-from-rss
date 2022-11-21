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

let imgWrap = document.querySelector(".img");
let img = new Image();
img.src = code;
img.width = 200;
imgWrap.append(img);

setBirds(birdsNames(birdsData, 0));
generatePlayerWithSong(0);
userSelect(0);

let testBut = document.querySelector(".next-level");
testBut.addEventListener("click", newFunc);

function newFunc() {
   setBirds(birdsNames(birdsData, 1));
   generatePlayerWithSong(1);
   userSelect(1);
}
