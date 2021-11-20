'use strict';
// write code here

const items = document.querySelectorAll('li');

for (const key of items) {
  const span = document.createElement('span');

  key.prepend(span);
  span.prepend(span.nextSibling);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {

  const item = e.target.closest('li').querySelector('ul');

  if (item) {
    item.hidden = !item.hidden;
  }
});
