'use strict';

// write code here
const tree = document.querySelector('.tree');

const hideShow = (el) => {
  const item = el.target;
  const element = item.firstElementChild;

  if (element.hidden === false) {
    element.hidden = true;
  } else {
    element.hidden = false;
  }
};

tree.addEventListener('click', hideShow);
