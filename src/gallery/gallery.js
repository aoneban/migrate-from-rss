import birdsDataEn from '../modules/dataEn';

showBirds(birdsDataEn, 0, 1);
function showBirds(data, x, num) {
  const wrapper = document.querySelector('.wrapper');
  for (let i = x; i < num; i++) {
    data[i].forEach((el) => {
      const birdElement = document.createElement('div');
      birdElement.classList.add('element');
      const img = document.createElement('img');
      img.classList.add('element-img');
      img.src = el.image;
      img.alt = el.name;
      const item = document.createElement('div');
      item.classList.add('color', 'item-name');
      item.textContent = el.name;
      const itemLatino = document.createElement('div');
      itemLatino.classList.add('item-latino');
      itemLatino.textContent = el.species;
      const audio = document.createElement('audio');
      audio.setAttribute('type', 'audio/mp3');
      audio.setAttribute('src', el.audio);
      audio.setAttribute('controls', 'controls');
      audio.classList.add('new-audio');
      const itemDesc = document.createElement('div');
      itemDesc.classList.add('color', 'item-desc');
      itemDesc.textContent = el.description;

      birdElement.append(img, item, itemLatino, audio, itemDesc)
      wrapper.appendChild(birdElement);
    });
  }
}

const btn2 = document.getElementById('btn');
btn2.addEventListener('click', () => newFunc(1, 6));

function newFunc(x, arg) {
  showBirds(birdsDataEn, x, arg);
  btn2.disabled = true;
}
