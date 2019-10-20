'use strict';

const tree = document.querySelector('.tree');

const hideChildren = (e) => {
  if (!e.target.matches('.title')) {
    return;
  }
  const children = e.target.parentElement.children;
  for (const child of children) {
    if (!child.matches('.title') && child.hidden === false) {
      child.hidden = true;
      return;
    } else {
      child.hidden = false;
    }
  }
};

tree.addEventListener('click', hideChildren);
