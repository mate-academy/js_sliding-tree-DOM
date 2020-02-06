'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const element of li) {
  const span = document.createElement('span');

  element.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', function(ev) {
  if (ev.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = ev.target.parentNode.querySelector('ul');

  if (childrenContainer) {
    childrenContainer.hidden = !childrenContainer.hidden;
  }
});
