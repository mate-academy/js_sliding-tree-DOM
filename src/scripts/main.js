'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

// eslint-disable-next-line prettier/prettier
listItems.forEach(li => {
  const nodes = Array.from(li.childNodes);
  // eslint-disable-next-line max-len
  const textNode = nodes.find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    textNode.replaceWith(span);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const ul = li.querySelector('ul');

  if (ul) {
    ul.hidden = !ul.hidden;
  }
});

// write code here
