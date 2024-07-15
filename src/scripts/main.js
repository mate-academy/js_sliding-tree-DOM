'use strict';

const tree = document.querySelector('.tree');
const liArr = tree.querySelectorAll('li');

liArr.forEach((li) => {
  const ul = li.querySelector('ul');

  if (ul) {
    const span = document.createElement('span');
    const text = li.firstChild;

    span.textContent = text.textContent;
    li.insertBefore(span, text);
    text.remove();
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const nextSibling = e.target.nextSibling;

    if (nextSibling && nextSibling.tagName === 'UL') {
      nextSibling.hidden = !nextSibling.hidden;
    }
  }
});
