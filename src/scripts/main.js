'use strict';

const liArr = [...document.querySelectorAll('li')];

liArr.forEach(liItem => liItem.insertAdjacentHTML('afterbegin', `
  <span>${liItem.innerHTML.split(' ')[0]}</span>
`));

liArr.forEach(liItem => liItem.childNodes[3].remove());

const list = document.querySelector('.tree');
const handler = e => {
  const targetItem = e.target.closest('span');

  if (!targetItem || !list.contains(targetItem)) {
    return;
  }

  const siblingForItem = targetItem.nextElementSibling;

  if (siblingForItem) {
    if (siblingForItem.hidden === true) {
      siblingForItem.hidden = false;
    } else {
      siblingForItem.hidden = true;
    }
  }
};

list.addEventListener('click', handler);
