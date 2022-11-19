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
  userChoise
} from "./modules/functions";

const imgWrap = document.querySelector(".img");
const img = new Image();
img.src = code;
img.width = 200;
imgWrap.append(img);

setBirds(birdsNames(birdsData, 0));
generatePlayerWithSong();
userChoise()
