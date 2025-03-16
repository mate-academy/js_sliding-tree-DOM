'use strict';

const liElems = document.querySelectorAll('li');

liElems.forEach((li) => {
  const span = document.createElement('span');

  if (li.childNodes.length !== 1) {
    li.prepend(span);
    span.append(span.nextSibling);
  }

  const findUl = span.nextElementSibling;

  if (findUl && findUl.closest('ul')) {
    span.addEventListener('click', () => {
      const ul = findUl.closest('ul');

      if (ul) {
        ul.hidden = !ul.hidden;
      }
    });
  }
});
