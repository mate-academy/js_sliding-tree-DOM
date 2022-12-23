'use strict';

const tree = document.querySelector('.tree');
const headlines = document.querySelectorAll('li');

for (const headline of headlines) {
  const createSpan = document.createElement('span');

  headline.prepend(createSpan);
  createSpan.append(createSpan.nextSibling);
}

tree.addEventListener('click', action => {
  const item = action.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
