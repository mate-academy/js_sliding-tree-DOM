'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach(item => {
  const span = document.createElement('span');

  span.innerText = item.firstChild.textContent.trim();
  item.replaceChild(span, item.firstChild);
});

tree.addEventListener('click', e => {
  e.target.closest('span').nextElementSibling.hidden
    = !e.target.closest('span').nextElementSibling.hidden;
});
