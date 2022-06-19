'use strict';

const listItems = document.querySelectorAll('li');

[...listItems].forEach(li => {
  if (li.firstElementChild) {
    const title = document.createElement('span');

    title.innerText = li.firstChild.textContent;
    li.firstChild.replaceWith(title);

    title.addEventListener('click', e => {
      e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
    });
  }
});
