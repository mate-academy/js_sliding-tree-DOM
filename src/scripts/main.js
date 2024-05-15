'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('li').forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const hiddenUl = e.target.nextSibling;

    if (hiddenUl) {
      hiddenUl.hidden = !hiddenUl.hidden;
    }
  }
});
