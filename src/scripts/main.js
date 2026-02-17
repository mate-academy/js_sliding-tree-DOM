'use strict';

const items = document.querySelectorAll('.tree li');
const tree = document.querySelector('.tree');

items.forEach((li) => {
  if (!li.querySelector('ul')) {
    return;
  }

  const textNode = Array.from(li.childNodes).find(
    (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '',
  );

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  li.replaceChild(span, textNode);
});

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span || !tree.contains(span)) {
    return;
  }

  const li = span.closest('li');

  const childUl = li.querySelector('ul');

  if (!childUl) {
    return;
  }

  childUl.style.display = childUl.style.display ? '' : 'none';
});
