'use strict';

document.querySelectorAll('li').forEach(el => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

document.addEventListener('click', e => {
  const item = e.target.nextElementSibling;

  if (e.target.tagName === 'SPAN') {
    item.hidden = !item.hidden;
  }
});
