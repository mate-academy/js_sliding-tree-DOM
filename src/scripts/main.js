'use strict';

const tree = document.querySelector('.tree');

function expandList(list) {
  const caption = document.querySelectorAll('[data-item]');

  caption.forEach(item => {
    const span = document.createElement('span');

    item.prepend(span);
    span.prepend(span.nextSibling);
  });

  list.addEventListener('click', (passage) => {
    const target = passage.target;
    const selectedList = target.closest('[data-item]');

    if (target.tagName !== 'SPAN') {
      return;
    }

    [...selectedList.children].map(child => {
      if (child.tagName !== 'SPAN') {
        child.hidden = !child.hidden;

        return child.hidden;
      }
    });
  });
}

expandList(tree);
