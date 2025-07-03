'use strict';

const tree = document.querySelector('.tree');

const listItems = tree.querySelectorAll('li');

listItems.forEach((li) => {
  for (const node of li.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      li.insertBefore(span, node);
      li.removeChild(node);
      break;
    }
  }

  const spanEl = li.querySelector('span');

  if (spanEl) {
    spanEl.style.cursor = 'pointer';

    spanEl.addEventListener('click', () => {
      const childUl = li.querySelector('ul');

      if (childUl) {
        childUl.hidden = !childUl.hidden;
      }
    });
  }
});
