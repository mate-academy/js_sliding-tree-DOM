'use strict';

// write code here
const ulListRef = document.querySelector('.tree');

ulListRef.addEventListener('click', (e) => {
  const item = e.target;
  const listChildrens = [...item.children];
  const isLastLi = listChildrens.length === 0;
  const ul = listChildrens[0];

  if (isLastLi) {
    return false;
  }

  if (ul.hidden === true) {
    ul.hidden = false;
  } else {
    ul.hidden = true;
  }
});
