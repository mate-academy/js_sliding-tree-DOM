'use strict';

const list = document.querySelectorAll('li');

[...list].forEach(li => {
  if (li.firstElementChild) {
    const span = document.createElement('span');

    span.innerText = li.firstChild.textContent;
    li.firstChild.replaceWith(span);

    span.addEventListener('click', e => {
      e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
    });
  }
});
