'use strict';

document.addEventListener('click', e => {
  if (!(e.target.tagName === 'LI' && e.target.children.length !== 0)) {
    return;
  }

  const displayValue = e.target.children[0].style.display;

  if (!displayValue) {
    e.target.children[0].style.display = 'none';
  } else {
    e.target.children[0].style.display = null;
  }
});
