'use strict';

const elements = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

elements.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const element = e.target.nextSibling;

    if (element) {
      element.hidden = !element.hidden;
    }
  }
});
