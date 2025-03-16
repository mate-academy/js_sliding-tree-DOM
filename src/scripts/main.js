'use strict';

const listItems = document.querySelectorAll('li');
const list = document.querySelector('.tree');

listItems.forEach((li) => {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
    span.innerText = span.innerText.trim();
  }
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  }
});
