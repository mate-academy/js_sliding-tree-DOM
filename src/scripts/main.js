'use strict';

const tree = document.querySelector('.tree');
const liList = document.querySelectorAll('li');

liList.forEach(li => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent;
  li.replaceChild(span, li.firstChild);
});

tree.addEventListener('click', e => {
  const firstChild = e.target.nextSibling;

  if (firstChild) {
    if (firstChild.hidden) {
      return (firstChild.hidden = false);
    }

    firstChild.hidden = true;
  }
});
