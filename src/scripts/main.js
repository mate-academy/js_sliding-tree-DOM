'use strict';

const tree = document.querySelector('.tree');
const elementsList = [...document.querySelectorAll('li')];

elementsList.forEach(li => {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = li.firstChild.textContent;

    li.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', (clickEvent) => {
  const list = clickEvent.target;

  if (list.tagName === 'SPAN') {
    (list.nextSibling.hidden = !list.nextSibling.hidden);
  }
});
