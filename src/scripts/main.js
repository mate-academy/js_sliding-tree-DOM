'use strict';

const lis = document.querySelectorAll('li');

lis.forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();
  li.firstChild.replaceWith(span);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const element = e.target.closest('li');

  if (!element) {
    return;
  }

  const ul = element.children[1];

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
