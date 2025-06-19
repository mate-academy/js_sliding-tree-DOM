'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  for (const li of tree.querySelectorAll('li')) {
    const childNodes = Array.from(li.childNodes);

    for (const node of childNodes) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
        const span = document.createElement('span');

        span.textContent = node.textContent.trim();
        li.insertBefore(span, node);
        li.removeChild(node);
        break;
      }
    }
  }

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const li = e.target.closest('li');
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      nestedUl.hidden = !nestedUl.hidden;
    }
  });
});
