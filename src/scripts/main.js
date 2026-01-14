'use strict';

const tree = document.querySelectorAll('.tree li');

function getFirstNonEmptyTextNode(el) {
  for (const node of el.childNodes) {
    if (node.nodeType === 3) {
      const trimmed = node.textContent.trim();

      if (trimmed) {
        return node;
      }
    }
  }

  return null;
}

function wrapper(item) {
  const textNode = getFirstNonEmptyTextNode(item);

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();

    textNode.replaceWith(span);

    span.addEventListener('click', (e) => {
      e.stopPropagation();
      hideItems(span);
    });
  }
}

tree.forEach((item) => {
  const hasChildren = item.querySelector('ul');

  if (hasChildren) {
    wrapper(item);
  }
});

function hideItems(item) {
  const nextItem = item.nextElementSibling;

  if (!nextItem) {
    return;
  } // захист від помилок, якщо немає сусіднього елемента

  nextItem.style.display = nextItem.style.display === 'none' ? '' : 'none';
}
