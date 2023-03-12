'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
};

tree.addEventListener('click', element => {
  element.target.nextSibling.hidden = !element.target.nextSibling.hidden;
});
