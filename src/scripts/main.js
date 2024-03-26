'use strict';

[...document.querySelectorAll('li')].map((element) => {
  const span = document.createElement('span');

  span.className = 'item__list';

  element.prepend(span);
  span.append(span.nextSibling);
});

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const item = e.target.parentNode.querySelector('ul');

  if (item) {
    item.hidden = !item.hidden;
  }
});
