'use strict';

const list = document.querySelector('.tree');
const listElements = document.querySelectorAll('li');

listElements.forEach(item => {
  const span = document.createElement('span');

  span.innerText = item.firstChild.textContent.trim();
  item.replaceChild(span, item.firstChild);
});

list.addEventListener('click', e => {
  if (e.target.nextElementSibling === null) {
    return;
  }

  e.target.closest('span').nextElementSibling.hidden
    = !e.target.closest('span').nextElementSibling.hidden;
});