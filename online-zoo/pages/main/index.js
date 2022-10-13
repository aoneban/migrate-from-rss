//pets
const carousel = document.getElementById("carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

next.addEventListener("click", () => {
  carousel.classList.add("add");
});

prev.addEventListener("click", () => {
  carousel.classList.remove("add");
});

//testimonials
let screen = document.documentElement.clientWidth;
let myscroll = document.querySelector(".opinions__wrapper");
console.log(screen);
let offset0 = 0;
let offset1 = 295;
let offset2 = 590;
let offset3 = 885;
let offset4 = 1180;
let offset5 = 1475;
let offset6 = 1770;
let offset7 = 2065;

document.getElementById("myRange").addEventListener("input", () => {
  let data = +document.getElementById("myRange").value;
  if (screen > 1350) {
    if (data == 0) {
      myscroll.style.left = -offset0 + "px";
    } else if (data == 1) {
      myscroll.style.left = -offset1 + "px";
    } else if (data == 2) {
      myscroll.style.left = -offset2 + "px";
    } else if (data == 3) {
      myscroll.style.left = -offset3 + "px";
    } else if (data == 4) {
      myscroll.style.left = -offset4 + "px";
    } else if (data == 5) {
      myscroll.style.left = -offset5 + "px";
    } else if (data == 6) {
      myscroll.style.left = -offset6 + "px";
    } else if (data == 7) {
      myscroll.style.left = -offset7 + "px";
    }
  } else if (screen < 1350) {
    if (data == 0) {
      myscroll.style.left = 0 + "px";
    } else if (data == 1) {
      myscroll.style.left = -320 + "px";
    } else if (data == 2) {
      myscroll.style.left = -640 + "px";
    } else if (data == 3) {
      myscroll.style.left = -960 + "px";
    } else if (data == 4) {
      myscroll.style.left = -1290 + "px";
    } else if (data == 5) {
      myscroll.style.left = -1610 + "px";
    } else if (data == 6) {
      myscroll.style.left = -1930 + "px";
    } else if (data == 7) {
      myscroll.style.left = -2249 + "px";
    }
  }
});

//modal
let modal = document.getElementById("myModal");
newModal();
function newModal() {
  let modal = document.getElementById("myModal");
  const nodeList = Array.from(document.querySelectorAll(".user__text"));
  let opinion = document.querySelectorAll(".opinion");
  let userName = Array.from(document.querySelectorAll(".user__name"));
  var modalImg = document.getElementById("img02");
  var captionText = document.getElementById("caption");
  if (screen < 650) {
    opinion.forEach((el) => {
      el.addEventListener("click", (e) => {
        let num = 0;
        modal.style.display = "block";
        captionText.innerHTML = `
        <p class="user__name">${userName[3].innerHTML}</p>
        <img
            id="img02"
            src="../../assets/images/Vector.png"
            alt="user_1"
            class="user__logo"
          />
        <p>${nodeList[3].innerText}</p>
        `;
        console.log(u);
      });
    });
    document.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

//modal-menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
