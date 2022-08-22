'use strict';

const list = document.querySelectorAll('li');

for (const item of list) {
  const span = document.createElement('span');

  span.classList.add('show');
  item.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', e => {
  const headerChild = e.target.nextSibling;

  if (headerChild) {
    headerChild.hidden = !headerChild.hidden;
  }
});
