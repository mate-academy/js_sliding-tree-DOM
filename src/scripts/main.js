'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
    span.textContent = span.textContent.trim();
  }
});

document.addEventListener('click', (evt) => {
  if (!tree || !tree.contains(evt.target)) {
    return;
  }

  if (evt.target.tagName === 'SPAN') {
    evt.target.nextSibling.hidden = !evt.target.nextSibling.hidden;
  }
});
