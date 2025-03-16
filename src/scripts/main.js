'use strict';

const list = document.querySelector('.tree');

const liCollection = list.querySelectorAll('li');

liCollection.forEach((item) => {
  if (item.hasChildNodes) {
    const newSpan = document.createElement('span');

    newSpan.textContent = item.childNodes[0].textContent;

    item.childNodes[0].remove();
    item.prepend(newSpan);
  }
});

const spanCollection = list.querySelectorAll('span');

spanCollection.forEach((item) => {
  item.addEventListener('click', () => {
    const targetItem = item.parentElement;
    const targetItemKids = targetItem.querySelectorAll('li');

    targetItemKids.forEach((kid) => {
      if (kid.style.display !== 'none') {
        kid.style.display = 'none';
      } else {
        kid.style.display = 'list-item';
      }
    });
  });
});
