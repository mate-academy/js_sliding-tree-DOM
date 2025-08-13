'use strict';

// write code here
const tree = document.querySelector('.tree');
const li = tree.querySelectorAll('li');

for (const l of li) {
  if (l.querySelector('ul') !== null) {
    for (const node of l.childNodes) {
      if (node.nodeType === 3 && node.textContent.trim().length > 0) {
        const span = document.createElement('span');

        span.textContent = node.textContent.trim();
        l.replaceChild(span, node);
        break;
      }
    }
  }
}

for (const l of li) {
  if (l.querySelector('ul') !== null) {
    const span = l.querySelector('span');
    const childUl = l.querySelector('ul');

    span.addEventListener('click', () => {
      childUl.hidden = !childUl.hidden;
    });
  }
}
