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
} from "./modules/functions";

const imgWrap = document.querySelector(".img");
const img = new Image();
img.src = code;
img.width = 200;
imgWrap.append(img);

setBirds(birdsNames(birdsData, 0));
generatePlayerWithSong();

const newArr = document.getElementsByClassName("data-birds");
console.log(newArr);

for (let item of newArr) {
  item.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {
      e.stopPropagation();
    } else {
      alert('hi');
      console.log(e.currentTarget.innerText)
    }
  });
}
