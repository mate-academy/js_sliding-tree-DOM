'use strict';

const list = document.querySelector('.tree');
const allLiesInList = list.querySelectorAll('li');

allLiesInList.forEach(li => {
  if (li.children.length) {
    li.childNodes[0].textContent = li.insertAdjacentHTML('afterbegin', `
    <span>${li.childNodes[0].textContent}</span>
  `);
  }
});

list.addEventListener('click', (e) => {
  const column = e.target.closest('span');

  if (!column) {
    return;
  }

  if (column.nextElementSibling.hidden === false) {
    column.nextElementSibling.hidden = true;
  } else {
    column.nextElementSibling.hidden = false;
  }
});
