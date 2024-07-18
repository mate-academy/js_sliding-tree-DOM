'use strict';

const tree = document.querySelector('.tree');
const allLiElements = tree.querySelectorAll('li');

allLiElements.forEach((listItem) => {
  const ul = listItem.querySelector('ul');

  if (ul) {
    const span = document.createElement('span');
    const text = listItem.firstChild;

    span.textContent = text.textContent;
    listItem.insertBefore(span, text);
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
