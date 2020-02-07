'use strict';

const tree = document.querySelector('.tree');

const closeFunc = (e) => {
  if (e.target.firstElementChild) {
    e.target.firstElementChild.hidden = !e.target.firstElementChild.hidden;
  }
};

tree.addEventListener('click', closeFunc);
