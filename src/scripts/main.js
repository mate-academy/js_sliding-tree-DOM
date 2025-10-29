'use strict';

const tree = document.querySelector('.tree');
const lis = tree.querySelectorAll('li');

lis.forEach((li) => {
  const childUl = li.querySelector('ul');

  if (childUl) {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();

    li.firstChild.replaceWith(span);

    span.addEventListener('click', () => {
      childUl.hidden = !childUl.hidden;
    });
  }
});
