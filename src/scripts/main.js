'use strict';

const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    span.className = 'header-text';
    span.append(item.childNodes[0]);
    item.prepend(span);
  }
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('header-text')) {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
