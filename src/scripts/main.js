'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  const firstChild = li.firstChild;

  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = firstChild.textContent;
    li.insertBefore(span, firstChild);
    li.removeChild(firstChild);
  }
});

document.querySelector('.tree').addEventListener('click', (even) => {
  if (even.target.tagName === 'SPAN') {
    const li = even.target.closest('li');
    const childUl = li.querySelector('ul');

    if (childUl) {
      childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
    }
  }
});
