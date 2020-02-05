'use strict';

const tree = document.querySelector('.tree');
const listElements = tree.querySelectorAll('li');

for (const li of listElements) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function(action) {
  if (action.target.tagName !== 'SPAN') {
    return;
  }

  const clidrenList = action.target.parentNode.querySelector('ul');

  if (clidrenList) {
    clidrenList.hidden = !clidrenList.hidden;
  }
};
