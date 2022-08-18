'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

for (const key of items) {
  const span = document.createElement('span');

  key.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', el => {
  el.target.nextElementSibling.hidden = !el.target.nextElementSibling.hidden;
});
