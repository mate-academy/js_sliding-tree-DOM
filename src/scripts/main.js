'use strict';

const tree = document.querySelector('.tree');

[...tree.querySelectorAll('li')]
  .forEach(li => {
    const span = document.createElement('span');

    li.prepend(span);
    span.textContent = span.nextSibling.textContent;
    span.nextSibling.remove();
  });

document.addEventListener('click', event => {
  const elementSibling = event.target.nextElementSibling;

  if (elementSibling && elementSibling.tagName === 'UL') {
    elementSibling.hidden = !elementSibling.hidden;
  }
});
