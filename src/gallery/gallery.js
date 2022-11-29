import birdsDataEn from "../modules/dataEn";


showBirds(birdsDataEn, 0, 1)
function showBirds(data, x, num) {
    const wrapper = document.querySelector(".wrapper");
    for(let i = x; i < num; i++) {
        data[i].forEach(el => {
            const birdElement = document.createElement("div")
            birdElement.classList.add("element")
            birdElement.innerHTML = `
              <img class="element-img" src=${el.image} alt="bird" />
              <div class="color item-name">${el.name}</div>
              <div class="item-latino">${el.species}</div>
              <audio class="new-audio" controls>
                <source src=${el.audio} type="audio/mp3">
                Your browser does not support the audio element.
              </audio>
              <div class="color item-desc">${el.description}</div>
            `
            wrapper.appendChild(birdElement)
        });
    }   
}

const btn2 = document.getElementById("btn")
btn2.addEventListener("click",() => newFunc(1, 6))

function newFunc(x, arg) {
    showBirds(birdsDataEn, x, arg)
    btn2.disabled = true
}

