'use strict';
const tree = document.querySelector('.tree');

tree.addEventListener('click',function(event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }
  const ulChildren = event.target.parentNode.querySelector('ul');

  if (!ulChildren) return;
  ulChildren.hidden = !ulChildren.hidden;
});
