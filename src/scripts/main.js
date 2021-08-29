'use strict';

const list = document.querySelector('.tree');
const listItem = document.querySelectorAll('li');

[...listItem].map((item) => {
  const span = document.createElement('span');

  if (item.childElementCount > 0) {
    item.prepend(span);
    span.append(span.nextSibling);
  };
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  };
});
