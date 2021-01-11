'use strict';

const listAll = document.querySelectorAll('li');

for (const list of listAll) {
  const span = document.createElement('span');

  list.prepend(span);
  span.append(span.nextSibling);
}

document.querySelector('.tree').onclick = function(even) {
  if (even.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = even.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
};
