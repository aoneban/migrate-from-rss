import "./index.html";
import "./index.scss";
import code from "./img/code.jpg";
import birdsData from "./modules/data";
import { mult, sum } from "./modules/calc";

const imgWrap = document.querySelector(".img");
const img = new Image();
img.src = code;
img.width = 200;
imgWrap.append(img);

console.log(mult(3, 4));
console.log(sum(3, 4));

//array of passerine birds

function myBirds(arr, num) {
  let newBirds = [];
  for (let i = 0; i < 6; i++) {
    newBirds.push(arr[num][i]);
  }
  return newBirds.map((el) => el.name);
}

//list of birds

function setBirds(data) {
  const list = document.querySelector('.wrapper-list')
  document.querySelector(".wrapper-list").innerHTML = "";

    data.forEach((_,ind) => {
    const listEl = document.createElement("li");
    listEl.innerHTML = `<span class="dot"></span>${data[ind]}`
    list.appendChild(listEl)   
    })

}
setBirds(myBirds(birdsData, 0));
