'use strict';

// write code here
const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

[...items].forEach(item => {
  if (item.children.length > 0) {
    const container = document.createElement('span');

    container.append(item.childNodes[0]);
    item.prepend(container);
  }
});

list.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN' || !list.contains(e.target)) {
    return;
  }

  const item = e.target.closest('li');

  item.children[1].hidden = !item.children[1].hidden;
});
