'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');
  tree.querySelectorAll('li').forEach(item => {
    let span = document.createElement('span');
    item.prepend(span);
    span.append(span.nextSibling);
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName != 'SPAN') {
      return;
    }

    let childrenContainer = e.target.parentNode.querySelector('ul');

    if (!childrenContainer) return; 

    childrenContainer.hidden = !childrenContainer.hidden;
  });
});
