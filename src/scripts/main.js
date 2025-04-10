'use strict';

const treeList = document.querySelector('.tree');

treeList.querySelectorAll('li').forEach((li) => {
  const childUl = li.querySelector('ul');

  if (childUl) {
    const span = document.createElement('span');
    const text = li.firstChild.textContent.trim();

    span.textContent = text;

    li.insertBefore(span, childUl);

    li.firstChild.remove();
  }
});

treeList.addEventListener('click', (e) => {
  if (!e.target.matches('li > span')) {
    return;
  }

  const clickedElement = e.target.closest('li');

  if (clickedElement) {
    const nestedList = clickedElement.querySelector('ul');

    if (nestedList) {
      if (nestedList.style.display === 'none') {
        nestedList.style.display = 'block';
      } else {
        nestedList.style.display = 'none';
      }
    }
  }
});
