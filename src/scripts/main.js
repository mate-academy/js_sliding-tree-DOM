'use strict';

const allLiElement = [ ...document.querySelectorAll('li') ];
const elementTree = document.querySelector('.tree');

allLiElement.map(x => {
  const span = document.createElement('span');

  span.append(x.firstChild.textContent);
  x.replaceChild(span, x.firstChild);
});

elementTree.addEventListener('click', (e) => {
  (e.target.closest('span').nextElementSibling.hidden
    = !e.target.closest('span').nextElementSibling.hidden);
});
