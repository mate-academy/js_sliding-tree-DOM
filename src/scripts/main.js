'use strict';

// write code here
const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  if (item.childElementCount) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

list.addEventListener('click', e => {
  const header = e.target.closest('span');

  if (header) {
    header.nextElementSibling.hidden = !header.nextElementSibling.hidden;
  }
});
