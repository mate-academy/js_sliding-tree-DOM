'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', function(e) {
  const title = e.target;

  if (title.tagName !== 'SPAN') {
    return;
  }

  const ul = title.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
