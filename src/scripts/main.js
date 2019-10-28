'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', function(targetEvent) {
  if (event.target.className !== 'element') {
    return;
  }
  const ulChild = event.target.parentNode.querySelector('ul');

  if (ulChild) {
    ulChild.hidden = !ulChild.hidden;
  }
});
