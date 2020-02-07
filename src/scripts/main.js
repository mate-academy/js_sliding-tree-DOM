'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenBox = e.target.parentNode.querySelector('ul');

  if (!childrenBox) {
    return;
  }

  childrenBox.hidden = !childrenBox.hidden;
};
