'use strict';

document.querySelectorAll('.tree').forEach((tree) => {
  tree.addEventListener('click', function(e) {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const li = e.target.closest('li');

    const childrenContainer = li.querySelector('ul');

    if (childrenContainer) {
      childrenContainer.hidden = !childrenContainer.hidden;
    }
  });
});

document.querySelectorAll('.tree li').forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.appendChild(span.nextSibling);
});
