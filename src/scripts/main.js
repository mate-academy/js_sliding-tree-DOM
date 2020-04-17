'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling);
}

tree.addEventListener('click', hideElements);
tree.addEventListener('mouseover', boldElements);
tree.addEventListener('mouseout', boldElements);

// eslint-disable-next-line no-shadow
function hideElements(event) {
  const clicked = event.target.closest('li');

  if (clicked.childNodes[1] === undefined) {
    return;
  }

  if (!clicked.childNodes[1].hidden) {
    clicked.childNodes[1].hidden = true;
  } else {
    clicked.childNodes[1].hidden = false;
  }
}

// eslint-disable-next-line no-shadow
function boldElements(event) {
  const element = event.target.closest('span');

  if (element.style.fontWeight === 'bold') {
    element.style.fontWeight = 'normal';
  } else {
    element.style.fontWeight = 'bold';
  }
}
