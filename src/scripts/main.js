'use strict';

// write code here

const list = document.querySelector('.tree');
const elements = document.querySelectorAll('li');

for (const el of elements) {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', (event) => {
  const item = event.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
