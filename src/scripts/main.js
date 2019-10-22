'use strict';

const menu = document.querySelector('.tree');
menu.querySelectorAll('li').forEach((element) => {
  if (element.children.length) {
    element.classList.add('closed');
  }
});

menu.addEventListener('click', (e) => {
  const currentItem = e.target;
  if (currentItem.tagName !== 'LI') {
    return;
  }
  if (currentItem.children.length) {
    currentItem.classList.toggle('closed');
    currentItem.classList.toggle('open');
  }
});
