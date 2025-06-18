'use strict';

const tree = document.querySelector('.tree');

function wrapTextInSpan(li) {
  for (const node of li.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      li.insertBefore(span, node);
      li.removeChild(node);
      break;
    }
  }
}

const itemsWithChildren = tree.querySelectorAll('li:has(ul)');

itemsWithChildren.forEach(wrapTextInSpan);

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const li = span.parentElement;
  const childUl = li.querySelector('ul');

  if (childUl) {
    childUl.hidden = !childUl.hidden;
  }
});
