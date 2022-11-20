import birdsData from "./data";

//array of passerine birds
//создан массив имен птиц семейства воробьиных

export function birdsNames(arr, num) {
  let newBirds = [];
  for (let i = 0; i < 6; i++) {
    newBirds.push(arr[num][i]);
  }
  return newBirds.map((el) => el.name);
}

//list of birds
//вывод массива имен сеймейства воробьиных

export function setBirds(data) {
  const list = document.querySelector(".wrapper-list");
  document.querySelector(".wrapper-list").innerHTML = "";

  data.forEach((_, ind) => {
    const listEl = document.createElement("li");
    listEl.classList.add("data-birds");
    listEl.innerHTML = `<span class="dot"></span>${data[ind]}`;
    list.appendChild(listEl);
  });
}

// random number generation to generate random song
// генератор случайного числа для рандмного выбора песни
export function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// generate link to random song
// генератор ссылки случайной песни
export function randomSongGenerator(arr, num) {
  let newSong = [];
  for (let i = 0; i < 6; i++) {
    newSong.push(arr[num][i]);
  }
  newSong = newSong.map((el) => el.audio);
  return newSong[randomInteger(1, 5)];
}

// функция создания плеера и добавления в него рандомной песни
//the function of creating a player and adding a random song to it
export function generatePlayerWithSong() {
  const list = document.querySelector(".content-bird");
  document.querySelector(".content-bird").innerHTML = "";

  const h3 = document.createElement("h3");
  h3.classList.add("h3-class");
  h3.textContent = "*****";
  list.appendChild(h3);
  const audio = document.createElement("div");
  audio.innerHTML = `<audio controls>
  <source src="${randomSongGenerator(birdsData, 0)}" type="audio/mp3">
</audio>`;
  list.appendChild(audio);
}

export function birdsArray(arr, num) {
  let newBirds = [];
  for (let i = 0; i < 6; i++) {
    newBirds.push(arr[num][i]);
  }
  return newBirds.map((el) => el);
}

// user's selection of a specific bird
//функция выбора пользователем определенной птицы
export function userSelect() {
  let audioSong = document
    .querySelector("audio")
    .innerHTML.replace('<source src="', "")
    .replace('" type="audio/mp3">', "")
    .trim();
  let arr = birdsArray(birdsData, 0);
  console.log(arr);
  const newArr = document.getElementsByClassName("data-birds");
  for (let item of newArr) {
    item.addEventListener("click", (e) => {
      if (e.target !== e.currentTarget) {
        e.stopPropagation();
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (
            arr[i].name === e.currentTarget.innerText &&
            arr[i].audio === audioSong
          ) {
            console.log("текущее" + e.target.innerHTML);
            let winName = document.querySelector(".h3-class");
            winName.innerText = e.currentTarget.innerText;
            e.currentTarget.firstChild.style.backgroundColor = "green";
            alert("Ура!");
          } else {
            if (e.currentTarget.firstChild.style.backgroundColor !== "green") {
              e.currentTarget.firstChild.style.backgroundColor = "red";
            }
          }
        }
      }
    });
  }
}
