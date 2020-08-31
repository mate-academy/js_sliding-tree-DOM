'use strict';

[...document.querySelectorAll('li')].map((li) => {
  const span = document.createElement('span');

  if (li.parentNode.querySelector('ul')) {
    span.prepend(li.firstChild);
    li.prepend(span);
  }
});

document.addEventListener('click', event => {
  if (event.target.tagName === 'SPAN') {
    event.target.parentNode.childNodes[1].hidden
    = !event.target.parentNode.childNodes[1].hidden;
  }
});
