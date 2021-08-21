'use strict';

const items = document.querySelectorAll('li');
const list = document.querySelector('.tree');

for (const item of items) {
  if (item.children.length !== 0) {
    const text = item.childNodes[0].data.trim();

    item.childNodes[0].data = '';

    item.insertAdjacentHTML('afterbegin', `
      <span>${text}</span>
    `);
  }
};

let itemIsShowed = true;

list.addEventListener('click', e => {
  const span = e.target.closest('span');
  const li = e.target.closest('li');

  if (li.contains(span)) {
    switch (true) {
      case itemIsShowed === true:
        li.children[1].hidden = true;
        itemIsShowed = false;
        break;

      default:
        li.children[1].hidden = false;
        itemIsShowed = true;
        break;
    }
  }
});
