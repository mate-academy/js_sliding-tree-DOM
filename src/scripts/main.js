'use strict';

// write code here
const tree = document.querySelector('.tree');
const items = document.querySelectorAll('.tree li');

for (const li of items) {
  const span = document.createElement('span');

  const text = li.firstChild;

  if (text && text.textContent.trim() !== '') {
    span.append(text);
    li.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const subTree = e.target.parentNode.querySelector('ul');

  if (subTree) {
    subTree.hidden = !subTree.hidden;
  }
});
