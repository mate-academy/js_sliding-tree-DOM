'use strict';

// write code here

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  tree.querySelectorAll('li').forEach((li) => {
    const childUl = li.querySelector('ul');

    if (!childUl) {
      return;
    }

    for (const node of [...li.childNodes]) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        const span = document.createElement('span');

        span.textContent = node.textContent.trim();
        li.replaceChild(span, node);
        break;
      }
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const li = e.target.closest('li');

      if (!li) {
        return;
      }

      const childUl = li.querySelector(':scope > ul');

      if (!childUl) {
        return;
      }

      if (getComputedStyle(childUl).display === 'none') {
        childUl.style.display = 'block';
      } else {
        childUl.style.display = 'none';
      }
    }
  });
});
