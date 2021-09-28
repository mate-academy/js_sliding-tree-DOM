'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const item of list) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', elem => {
  const el = elem.target.closest('span');

  el.nextElementSibling.hidden = !el.nextElementSibling.hidden;
});
