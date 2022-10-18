'use strict';
// write code here

const list = document.querySelectorAll('li');
const block = document.querySelector('.tree');

for (const item of list) {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

block.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.nextElementSibling;

  ul.hidden = !ul.hidden;
});
