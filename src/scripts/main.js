'use strict';

const tree = document.querySelector('.tree');

const fruit = tree.firstElementChild;

const redFruits = fruit.firstElementChild.firstElementChild;

const yellowFruits = fruit.firstElementChild.lastElementChild;

const fish = tree.lastElementChild;

const oceanFish = fish.firstElementChild.firstElementChild;

const freshWaterFish = fish.firstElementChild.lastElementChild;

function spanWrap(input) {
  const text = input.innerHTML;
  let newText = '<span>';
  let count = 0;

  for (const ch of text) {
    if (ch !== '<') {
      newText += ch;
      count++;
    }

    if (ch === '<') {
      newText += '</span>';
      newText += text.slice(count);
      break;
    }
  }
  input.innerHTML = newText;
}

spanWrap(redFruits);
spanWrap(yellowFruits);
spanWrap(oceanFish);
spanWrap(freshWaterFish);

const spanList = document.querySelectorAll('span');

spanList.forEach(element => {
  element.dataset.dropDown = false;
});

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    switch (e.target.dataset.dropDown) {
      case 'false':
        e.target.parentElement.lastElementChild.hidden = true;
        e.target.dataset.dropDown = true;

        break;

      case 'true':
        e.target.parentElement.lastElementChild.hidden = false;
        e.target.dataset.dropDown = false;

        break;
    }
  }
});

// document.addEventListener('click', (e) => {
//   if (e.target.tagName === 'SPAN') {
//     if (e.target.dataset.dropDown === 'false') {
//       e.target.parentElement.lastElementChild.hidden = true;
//       e.target.dataset.dropDown = true;

//       return;
//     }

//     if (e.target.dataset.dropDown === 'true') {
//       e.target.parentElement.lastElementChild.hidden = false;
//       e.target.dataset.dropDown = false;
//     }
//   }
// });
