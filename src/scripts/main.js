'use strict';

const list = document.querySelector('.tree');
const listItems = list.querySelectorAll('li');

for (const listItem of listItems) {
  const span = document.createElement('span');

  span.classList.add('show');
  listItem.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', e => {
  const headerChild = e.target.nextSibling;

  if (headerChild) {
    headerChild.hidden = !headerChild.hidden;
  }
});
