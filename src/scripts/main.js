'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const child = e.target.children[0];
  const height = +getComputedStyle(child).height.slice(0, -2);

  if (child && height > 0) {
    child.style.cssText = 'height: 0; width: 0; opacity: 0;';
  }

  if (child && height === 0) {
    child.style.cssText
      = 'height: fit-content; width: fit-content; opacity: 1;';
  }
});
