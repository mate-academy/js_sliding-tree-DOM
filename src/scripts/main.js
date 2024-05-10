'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('li').forEach((item) => {
  if (item.childNodes.length > 1) {
    const span = document.createElement('span');

    item.prepend(span);
    span.appendChild(span.nextSibling);
  }
});

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    target.nextSibling.hidden = !target.nextSibling.hidden;
  }
});
