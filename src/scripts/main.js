'use strict';

const mainList = document.querySelector('.tree');
const list = [...document.querySelectorAll('li')];

list.forEach(item => {
  if (item.firstElementChild) {
    const titleText = item.firstChild.textContent;

    item.firstChild.remove();

    item.insertAdjacentHTML('afterbegin', `
    <span>${titleText}</span>`);
  }
});

mainList.addEventListener('click', (e) => {
  if (!mainList.contains(e.target.closest('.tree'))) {
    return;
  }

  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
