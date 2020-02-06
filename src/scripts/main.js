'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', (e) => {
  const item = e.target;

  if (item.children.length !== 0) {
    item.children[0].classList.toggle('open');
  }
});
