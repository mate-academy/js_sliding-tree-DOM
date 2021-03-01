'use strict';

const liAll = document.querySelectorAll('li');
const liTitles = [...liAll].filter(li => li.children.length > 0);

liTitles.map(li => {
  const span = document.createElement('span');

  span.innerText = li.firstChild.textContent;

  li.firstChild.replaceWith(span);

  const list = li.querySelector('ul');

  span.addEventListener('click', () => {
    list.hidden = !list.hidden;
  });
});
