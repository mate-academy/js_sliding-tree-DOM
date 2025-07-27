'use strict';

// write code here
const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  const text = li.firstChild;

  if (!li.querySelector('ul') || text.nodeType !== 3) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = text.textContent.trim();

  li.insertBefore(span, text);
  li.removeChild(text);
});

document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const nestedList = e.target.nextElementSibling;

  if (nestedList) {
    nestedList.hidden = !nestedList.hidden;
  }
});
