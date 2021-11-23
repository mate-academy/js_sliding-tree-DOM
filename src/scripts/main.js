'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

for (const li of liAll) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
};

tree.onclick = function(events) {
  const childrenContainer = events.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
};
