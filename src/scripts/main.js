'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', function(ev) {
  const item = ev.target;

  if (item.tagName !== 'LI') {
    return;
  }

  if (item.children.length !== 0) {
    item.children[0].classList.toggle('tree__hidden');
  };
});
