'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

li.forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.prepend(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const nextElement = e.target.nextSibling;

    if (nextElement.tagName === 'UL') {
      nextElement.hidden = !nextElement.hidden;
    }
  }
});
