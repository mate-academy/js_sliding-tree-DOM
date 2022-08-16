'use strict';

const list = [ ...document.querySelectorAll('li > ul') ];

list.map(element => {
  const li = element.parentNode;
  const liTitle = li.firstChild;

  const span = document.createElement('span');

  span.prepend(liTitle);
  li.prepend(span);

  span.addEventListener('click', () => {
    span.nextSibling.toggleAttribute('hidden');
  });
});
