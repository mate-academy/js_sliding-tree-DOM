'use strict';

const tree = document.querySelector('.tree');
const allLi = document.querySelectorAll('li');

allLi.forEach(item => {
  const span = document.createElement('span');

  span.innerText = item.firstChild.textContent.trim();
  item.replaceChild(span, item.firstChild);
});

tree.addEventListener('click', e => {
  if (e.target.nextElementSibling === null) {
    return;
  }

  e.target.closest('span').nextElementSibling.hidden
    = !e.target.closest('span').nextElementSibling.hidden;
});
