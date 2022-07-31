'use strict';

// write code here
const tree = document.querySelector('.tree');

const hideShow = (e) => {
  const item = e.target;
  const element = item.firstElementChild;

  if (!element.hidden) {
    element.hidden = true;
  } else {
    element.hidden = false;
  }
};

tree.addEventListener('click', hideShow);