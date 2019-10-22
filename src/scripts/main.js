'use strict';

document.querySelector('.tree').addEventListener('click', (targetEvent) => {
  const child = targetEvent.target.parentElement.querySelector('ul');
  if (!child || targetEvent.target.tagName !== 'SPAN') { return; }

  child.hidden = !child.hidden;
});
