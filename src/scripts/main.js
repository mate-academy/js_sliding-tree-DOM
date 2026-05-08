'use strict';

// write code here
const tree = document.querySelector('.tree');

const listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
  li.childNodes.forEach((node) => {
    if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.nodeValue.trim();
      li.insertBefore(span, node);
      node.remove();
    }
  });
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const nestedUl = li.querySelector('ul');

  if (nestedUl) {
    nestedUl.hidden = !nestedUl.hidden;
  }
});
