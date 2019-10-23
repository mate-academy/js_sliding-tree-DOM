'use strict';

document.querySelector('.tree').addEventListener('click', (action) => {
  if (action.target.tagName !== 'SPAN') {
    return;
  }
  const children = action.target.parentElement.querySelector('ul');
  children.hidden = !children.hidden;
});
