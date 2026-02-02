'use strict';

const tree = document.querySelector('.tree');

// 1. Wrap header text into span
const listItems = tree.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
  const li = listItems[i];
  const childUl = li.querySelector('ul');

  if (!childUl) {
    continue;
  }

  // шукаємо текстовий вузол
  for (let j = 0; j < li.childNodes.length; j++) {
    const node = li.childNodes[j];

    if (node.nodeType === 3 && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();

      li.insertBefore(span, node);
      li.removeChild(node);
      break;
    }
  }
}

// 2. Event delegation
// eslint-disable-next-line no-shadow
tree.onclick = function (event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const li = event.target.parentElement;
  const childUl = li.querySelector('ul');

  if (!childUl) {
    return;
  }

  childUl.hidden = !childUl.hidden;
};
