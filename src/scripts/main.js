'use strict';
document.querySelector('.tree').addEventListener('click', (action) => {
  if (action.target.tagName !== 'SPAN') {
    return;
  }

  const children = action.target.parentElement.querySelector('ul');
  if (!children) {
    return;
  }

  children.hidden = !children.hidden;
});
