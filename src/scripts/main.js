'use strict';

const tree = document.body.querySelector('.tree');
const liItems = tree.querySelectorAll('li');

for (const li of liItems) {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling);
}

tree.addEventListener('click', e => {
  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (!childrenContainer || e.target.tagName !== 'SPAN') {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
