'use strict';

const tree = document.querySelector('.tree');

const hideChildren = (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }
  const children = e.target.parentElement.children;
  for (const child of children) {
    if (child.tagName !== e.target.tagName && !child.hidden) {
      child.hidden = !child.hidden;
      return;
    } else {
      child.hidden = false;
    }
  }
};

tree.addEventListener('click', hideChildren);
