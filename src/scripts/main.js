'use strict';

const tree = document.querySelector('.tree');
const treeItems = tree.querySelectorAll('li');

for (const li of treeItems) {
  const textNode = li.firstChild;

  if (textNode.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();

    textNode.textContent = '';
    li.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const span = e.target;
  const li = span.parentElement;
  const ul = li.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
