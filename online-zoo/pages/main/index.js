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

//modal testimonials//

(function () {
  let modal = document.getElementById("myModal");
  let modalContent = document.getElementById("img01");
  let opinion = document.querySelectorAll(".opinion");
  let captionText = document.getElementById("caption");
  let close = document.querySelector(".close");

  if (screen < 840) {
    opinion.forEach((el) => {
      el.addEventListener(
        "click",
        (e) => {
          let name = e.currentTarget.querySelector(".user__name");
          let address = e.currentTarget.querySelector(".user__address");
          let img = e.currentTarget.querySelector(".user__logo");
          let text = e.currentTarget.querySelector('.user__text .long-text')
          let cloneText = text.cloneNode(true);
          let cloneImg = img.cloneNode(true);
          let cloneName = name.cloneNode(true);
          let cloneAddress = address.cloneNode(true);
          cloneImg.style.position = 'relative'
          cloneImg.style.left = '20px'
          cloneAddress.style.color = "#555";
          cloneText.style.display = "block"
          cloneText.style.color = "#555"
          cloneText.style.marginTop = "15px"
          console.log(text);
          modalContent.appendChild(cloneImg);
          modalContent.appendChild(cloneName);
          modalContent.appendChild(cloneAddress);
          modalContent.appendChild(cloneText);
          modal.style.display = "block";
          captionText.innerText = "testimonial";
          captionText.style.color = "#ffffff";
          modal.appendChild(captionText);
          close.addEventListener("click", () => {
            cloneText.remove()
            cloneImg.remove();
            cloneName.remove();
            cloneAddress.remove();
            modal.style.display = "none";
          });
        },
      );
    });
  }
})();

//burger-menu//
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
