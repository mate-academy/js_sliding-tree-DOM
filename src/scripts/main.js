'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const firstChild = li.firstChild;

  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = firstChild.textContent.trim();
    li.insertBefore(span, firstChild);
    li.removeChild(firstChild);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.parentElement;

  const childUl = parentLi.querySelector('ul');

  if (childUl) {
    childUl.style.display = childUl.style.display === 'none' ? 'block' : 'none';
  }
});
