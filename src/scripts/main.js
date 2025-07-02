'use strict';

// write code here

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  const text = li.firstChild;

  if (text.nodeType === 3) {
    const span = document.createElement('span');

    span.textContent = text.textContent.trim();

    li.insertAdjacentElement('afterbegin', span);
    text.parentNode.removeChild(text);
  }
});

document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.parentElement;
  const childUl = li.querySelector('ul');

  if (childUl) {
    childUl.hidden = !childUl.hidden;
  }
});
