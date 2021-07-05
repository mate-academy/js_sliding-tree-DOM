'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

for (const listItem of headers) {
  if (listItem.childElementCount > 0) {
    const span = document.createElement('span');

    listItem.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', e => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
});
