'use strict';

const tree = document.querySelector('.tree');

const headlines = document.querySelectorAll('li');

for (const headline of headlines) {
  const span = document.createElement('span');

  headline.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const list = e.target.closest('span').nextSibling;

  list.hidden = !list.hidden;
});
