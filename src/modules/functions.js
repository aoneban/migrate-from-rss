import birdsData from "./data";
import fail from "./soundFail";
import win from "./soundWin";

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
export function generatePlayerWithSong(numArray) {
  let list = document.querySelector(".content-bird");
  document.querySelector(".content-bird").innerHTML = "";

  let h3 = document.createElement("h3");
  h3.classList.add("h3-class");
  h3.textContent = "*****";
  list.appendChild(h3);
  let audio = document.createElement("div");
  audio.innerHTML = `<audio controls>
  <source src="${randomSongGenerator(birdsData, numArray)}" type="audio/mp3">
</audio>`;
  list.appendChild(audio);
}

//generates a specific auxiliary array of objects
//генерирует определенный вспомогательный массив объектов
export function birdsArray(arr, num) {
  let newBirds = [];
  for (let i = 0; i < 6; i++) {
    newBirds.push(arr[num][i]);
  }
  return newBirds.map((el) => el);
}

// finding and generation link to photo of guess bird
//находит генерирует ссылку на фото угаданной птицы
export function birdsNewImage(arr, num, bird) {
  let newImage = "";
  let newBirds = [];
  for (let i = 0; i < 6; i++) {
    newBirds.push(arr[num][i]);
  }
  newBirds.map((el) => {
    if (el.name == bird) {
      newImage += el.image;
    }
  });
  return newImage;
}

// finding and generation link to description of bird
//находит генерирует ссылку на описание текущей птицы
export function birdsDesc(arr, num, bird) {
  let newDesk = "";
  let newBirds = [];
  for (let i = 0; i < 6; i++) {
    newBirds.push(arr[num][i]);
  }
  newBirds.map((el) => {
    if (el.name == bird) {
      newDesk += el.description;
    }
  });
  return newDesk;
}

// finding and generation link to latino description of bird 
//находит генерирует ссылку на описание текущей птицы на латинском зыке
export function birdsLatinoDesc(arr, num, bird) {
  let newDesk = "";
  let newBirds = [];
  for (let i = 0; i < 6; i++) {
    newBirds.push(arr[num][i]);
  }
  newBirds.map((el) => {
    if (el.name == bird) {
      newDesk += el.species;
    }
  });
  return newDesk;
}

// finding and generation audio-link of bird 
//находит генерирует аудио-ссылку на выбранную птицу
export function birdsAudio(arr, num, bird) {
  let newDesk = "";
  let newBirds = [];
  for (let i = 0; i < 6; i++) {
    newBirds.push(arr[num][i]);
  }
  newBirds.map((el) => {
    if (el.name == bird) {
      newDesk += el.audio;
    }
  });
  return newDesk;
}

//sound of win or fail
//звук победы или неудачи
export function soundClick(link) {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = link; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

// user's selection of a specific bird
//функция выбора пользователем определенной птицы
export function userSelect(numArray) {
  let audioSong = document
    .querySelector("audio")
    .innerHTML.replace('<source src="', "")
    .replace('" type="audio/mp3">', "")
    .trim();
  let arr = birdsArray(birdsData, numArray);
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
            alert("Ура!");
            soundClick(win);
            document.querySelector(".next-level").style.backgroundColor = 'green'
            let oldImg = document.querySelector(".img");
            oldImg.remove();
            let imgNewWrap = document.querySelector(".main-wrapper");
            let img = new Image();
            img.src = birdsNewImage(birdsData, numArray, e.currentTarget.innerText);
            img.width = 220;
            img.height = 150;
            imgNewWrap.insertAdjacentElement("afterbegin", img);
            let winName = document.querySelector(".h3-class");
            winName.innerText = e.currentTarget.innerText;
            e.currentTarget.firstChild.style.backgroundColor = "green";
          } else {
            soundClick(fail);
            if (e.currentTarget.firstChild.style.backgroundColor !== "green") {
              e.currentTarget.firstChild.style.backgroundColor = "red";
              let newContent = document.querySelector(".chouse-birds")
              document.querySelector(".chouse-birds").innerHTML = ""
              newContent.innerHTML = `
              <div class="new-content">
              <img class="new-image" src=${birdsNewImage(birdsData, numArray, e.currentTarget.innerText)} alt=${e.currentTarget.innerText}>
              <h3 class="new-h3">${e.currentTarget.innerText}</h3>
              <h4 class="new-h4">${birdsLatinoDesc(birdsData, numArray, e.currentTarget.innerText)}</h4>
              <audio controls>
                <source src="${birdsAudio(birdsData, numArray, e.currentTarget.innerText)}" type="audio/mp3">
              </audio>
              <p class="new-desc">${birdsDesc(birdsData, numArray, e.currentTarget.innerText)}</p>
              </div>
             `
            }
          }
        }
      }
    });
  }
}
