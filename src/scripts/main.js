'use strict';

const tree = document.querySelector('.tree');
const coords = tree.getBoundingClientRect();

tree.style.cssText = `
  position: absolute;
  top: ${coords.top}px;
  left: ${coords.left}px;
`;

[...document.querySelectorAll('li')].forEach((li) => {
  const span = document.createElement('span');

  span.prepend(li.firstChild);
  li.prepend(span);
});

[...document.querySelectorAll('ul')].forEach(el => {
  el.addEventListener('click', (event) => {
    event.stopPropagation();

    const targetNode = event.target;

    if (targetNode.tagName.toLowerCase() === 'span'
    && targetNode.parentNode.querySelector('ul')) {
      const ul = targetNode.parentNode.childNodes[1];

      ul.hidden = !ul.hidden;
    }
  });
});
