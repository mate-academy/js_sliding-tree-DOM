'use strict';

document.querySelector('.tree').addEventListener('click', (targetEvent) => {
  if (targetEvent.target.tagName !== 'P') { return; }

  const child = targetEvent.target.parentElement.querySelector('ul');
  if (!child) { return; }

  child.hidden = !child.hidden;
});
