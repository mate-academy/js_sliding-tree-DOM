'use strict';

// write code here

const tree = document.querySelector('.tree');

const currentTarget = (e) => {
  const element = e.target;
  const childs = element.childNodes[1].children;

  function callback(child) {
    child.hidden = child.hidden === false
      ? child.hidden = true
      : child.hidden = false;
  }

  [ ...childs ].map(callback);
};

tree.addEventListener('click', currentTarget);
