'use strict';
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */

const tree = document.querySelector('.tree');

const clickHandler = (e) => {
  const headline = e.target.closest('span');

  if (!headline) {
    return;
  }

  const closestUl = e.target.nextElementSibling;

  if (!closestUl) {
    return;
  }

  if (closestUl.style.display !== 'none') {
    closestUl.style.display = 'none';
  } else {
    closestUl.style.display = 'block';
  }
};

tree.addEventListener('click', clickHandler);
