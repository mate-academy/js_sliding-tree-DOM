'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', changeOnClick);

function changeOnClick(event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childrenElement = event.target.parentNode.querySelector('ul');

  if (!childrenElement) {
   return;
  }

  childrenElement.hidden = !childrenElement.hidden;
}
