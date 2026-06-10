'use strict';

const allLi = document.querySelectorAll('.tree li');

allLi.forEach((li) => {
  const isUl = li.querySelector('ul');

  if (isUl) {
    const newSpan = document.createElement('span');

    newSpan.append(li.firstChild);

    li.prepend(newSpan);
  }
});

const ourTree = document.querySelector('.tree');

ourTree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const hiddenUl = e.target.nextElementSibling;

  hiddenUl.hidden = !hiddenUl.hidden;
});
