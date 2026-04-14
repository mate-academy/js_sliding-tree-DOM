'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((li) => {
  let textNode = null;

  for (const node of li.childNodes) {
    if (node.nodeType === 3 && node.textContent.trim() !== '') {
      textNode = node;
      break;
    }
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent;
  li.replaceChild(span, textNode);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const li = e.target.parentElement;
    const ul = li.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  }
});
