'use strict';

const list = document.querySelector('.tree');
const listEls = document.querySelectorAll('.tree li');

[...listEls].map(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

list.onclick = function(ev) {
  if (!ev.target.tagName === 'SPAN') {
    return;
  }

  const childrenContainer = ev.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
};
