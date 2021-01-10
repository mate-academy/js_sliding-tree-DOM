'use strict';

const list = document.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
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
