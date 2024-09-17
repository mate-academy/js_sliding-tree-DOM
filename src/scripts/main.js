'use strict';

// write code here
const ulListRef = document.querySelector('.tree');

ulListRef.addEventListener('click', (e) => {
  const item = e.target;
  const listChildrens = [...item.children];
  const isLastLi = !listChildrens.length;
  const ul = listChildrens[0];

  if (isLastLi) {
    return false;
  }

  ul.hidden = !ul.hidden
});
