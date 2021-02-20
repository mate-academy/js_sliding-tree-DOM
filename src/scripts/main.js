'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const node of listItems) {
  if (!node.children.length) {
    continue;
  }

  const span = document.createElement('span');

  span.innerText = node.firstChild.nodeValue;
  node.replaceChild(span, node.firstChild);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.parentNode.querySelector('ul');

  ul.toggleAttribute('hidden');
});
