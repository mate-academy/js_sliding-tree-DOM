'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
};

tree.addEventListener('click', el => {
  el.target.nextSibling.hidden = !el.target.nextSibling.hidden;
});
