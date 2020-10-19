'use strict';

for (const element of document.querySelectorAll('li')) {
  const newSpan = document.createElement('span');

  element.prepend(newSpan);
  newSpan.append(newSpan.nextSibling);
}

const tree = document.querySelector('.tree');

(function ({ style }) {
  style.position = 'absolute';
  style.top = `${tree.getBoundingClientRect().top}px`;
  style.left = `${tree.getBoundingClientRect().left}px`;
}(tree));


tree.addEventListener('click', (event) => {
  const point = event.target;

  if (point.nextElementSibling.tagName === 'UL') {
    point.nextElementSibling.hidden = !point.nextElementSibling.hidden;
  }
});
