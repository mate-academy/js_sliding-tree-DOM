'use strict';
const tree = document.querySelector('.tree');

tree.onclick = function(event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }
  let ulChildren = event.target.parentNode.querySelector('ul');

  if (!ulChildren) return;
  ulChildren.hidden = !ulChildren.hidden;
};
