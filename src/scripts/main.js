'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  if (!li.querySelector('ul')) {
    return;
  }

  for (const node of Array.from(li.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      li.replaceChild(span, node);
      break;
    }
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const subList = e.target.parentNode.querySelector('ul');

  if (subList) {
    subList.hidden = !subList.hidden;
  }
});
