'use strict';

document.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    for (const child of e.target.children) {
      child.style.display = (child.style.display === 'none') ? '' : 'none';
    }
  }
});
