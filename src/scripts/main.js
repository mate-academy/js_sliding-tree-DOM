'use strict';

const liList = document.querySelectorAll('li');

liList.forEach((el) => {
  if (el.querySelector('ul')) {
    el.childNodes.forEach((node) => {
      if (node.nodeType === 3 && node.textContent.trim() !== '') {
        const span = document.createElement('span');

        el.insertBefore(span, node);
        span.append(node);
      }
    });
  }
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const li = span.closest('li');
  const nestedUl = li.querySelector(':scope > ul');

  if (!nestedUl) {
    return;
  }

  nestedUl.hidden = !nestedUl.hidden;
});
