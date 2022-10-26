'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const listItem of list) {
  const span = document.createElement('span');

  if (listItem.childElementCount > 0) {
    listItem.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (e) => {
  e.target.closest(':not(ul)').nextSibling.hidden
  = !e.target.closest(':not(ul)').nextSibling.hidden;
});
