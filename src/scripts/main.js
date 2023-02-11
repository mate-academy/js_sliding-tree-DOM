'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const child = e.target.children[0];
  const height = child ? +getComputedStyle(child).height.slice(0, -2) : null;

  if (child) {
    if (child.tagName === 'UL' && height > 0) {
      child.style.cssText = 'height: 0; width: 0; opacity: 0;';
    }

    if (child.tagName === 'UL' && height === 0) {
      child.style.cssText
        = 'height: fit-content; width: fit-content; opacity: 1;';
    }
  }
});
