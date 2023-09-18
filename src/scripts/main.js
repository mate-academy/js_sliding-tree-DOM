'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach(li => {
  const span = document.createElement('span');

  span.className = 'list-item';
  li.prepend(span);
  span.append(span.nextSibling);
});

tree.onclick = function(e) {
  if (e.target.className !== 'list-item') {
    return;
  }

  const children = e.target.parentNode.querySelector('ul');

  if (children) {
    children.hidden = !children.hidden;
  }
};
