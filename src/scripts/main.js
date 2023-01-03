'use strict';

const element = Array.from(document.querySelectorAll('li'));

element.forEach(node => {
  const span = document.createElement('span');

  node.prepend(span);
  span.append(span.nextSibling);
});

document.addEventListener('click', (el) => {
  if (el.target.closest('span')) {
    const childrenContainer = el.target.parentNode.querySelector('ul');

    childrenContainer.hidden = !childrenContainer.hidden;
  }
});
