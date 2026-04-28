'use strict';

const tree = document.querySelector('.tree');

const items = tree.querySelectorAll('li');

items.forEach((li) => {
  const textNode = li.firstChild;

  if (textNode.nodeType === 3) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    li.insertBefore(span, textNode);
    li.removeChild(textNode);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.parentElement;
  const children = li.querySelector('ul');

  if (!children) {
    return;
  }

  children.hidden = !children.hidden;
});
