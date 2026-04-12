'use strict';

const tree = document.querySelector('.tree');

const allLists = tree.querySelectorAll('li');

allLists.forEach((list) => {
  const firstChild = list.firstChild;

  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = firstChild.textContent;
    list.insertBefore(span, firstChild);
    list.removeChild(firstChild);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.closest('li');
  const targertUl = parentLi.querySelector('ul');

  if (targertUl) {
    const isHidden = targertUl.style.display === 'none';

    targertUl.style.display = isHidden ? 'block' : 'none';
  }
});
