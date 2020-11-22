'use strict';

const tree = document.querySelector('.tree');

const addSpan = function(element) {
  if (element.children.length === 0) {
    return;
  }

  if (element.tagName === 'LI') {
    const text = element.childNodes[0];
    const span = document.createElement('span');

    span.innerHTML = text.textContent;
    element.prepend(span);
    text.remove();
  }

  for (const prop of element.children) {
    addSpan(prop);
  }
};

const handler = function(event) {
  const clicked = event.target;

  if (clicked.closest('span')) {
    clicked.nextElementSibling.hidden = !clicked.nextElementSibling.hidden;
  }
};

addSpan(tree);
document.addEventListener('click', handler);
