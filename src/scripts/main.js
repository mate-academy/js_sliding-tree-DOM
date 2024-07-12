'use strict';

const tree = document.querySelector('.tree');
const liElements = document.querySelectorAll('li');

liElements.forEach((li) => {
  const ul = li.querySelector('ul');

  if (ul) {
    const span = document.createElement('span');
    const first = li.firstChild;

    span.textContent = first.textContent;
    li.insertBefore(span, first);
    first.remove();
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const nextItem = e.target.nextElementSibling;

    if (nextItem && nextItem.tagName === 'UL') {
      nextItem.hidden = !nextItem.hidden;
    }
  }
});
