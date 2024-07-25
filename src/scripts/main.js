'use strict';

// write code here
const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');

li.forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.prepend(span.nextSibling);
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
