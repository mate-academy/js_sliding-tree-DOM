'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

for (const header of headers) {
  const span = document.createElement('span');

  header.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', function(e) {
  const item = e.target.closest('span').nextSibling;

  if (item) {
    item.hidden = !item.hidden;
  }
});
