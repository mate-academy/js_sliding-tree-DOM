'use strict';

// write code here
const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of [...items]) {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent;
    item.firstChild.textContent = '';
    item.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  const list = e.target.parentNode.querySelector('ul');

  if (!list) {
    return;
  }
  list.hidden = !list.hidden;
});
