'use strict';

const tree = document.querySelector('.tree');
const liArr = [...document.querySelectorAll('ul')];

liArr.slice(1, liArr.length).forEach(item => {
  const span = document.createElement('span');

  span.className = 'header';
  span.innerText = item.parentElement.innerText;

  item.parentElement.className = 'head';
});

tree.addEventListener('click', e => {
  const item = e.target;

  if (item.className !== 'head') {
    return;
  }

  item.children[0].hidden = !item.children[0].hidden;
});
