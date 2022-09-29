'use strict';

const tree = document.body.querySelector('.tree');
const liItems = document.body.querySelectorAll('.tree li');

for (const li of liItems) {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling);
}

tree.addEventListener('click', e => {
  const hiddenElement = e.target.nextElementSibling;

  if (hiddenElement) {
    hiddenElement.hidden = !hiddenElement.hidden;
  }
});
