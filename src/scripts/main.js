'use strict';

const listItems = document.querySelectorAll('li');

for (const li of listItems) {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling);
}

document.addEventListener('click', e => {
  const header = e.target.nextSibling;

  if (header) {
    header.hidden = !header.hidden;
  }
});
