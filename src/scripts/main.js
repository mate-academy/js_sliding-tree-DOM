'use strict';

// write code here
const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const child = e.target.parentNode.querySelector('ul');

  if (!child) {
    return;
  }

  child.hidden = !child.hidden;
};
