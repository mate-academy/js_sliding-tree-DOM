'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (evt) => {
  if (evt.target.children.length && evt.target.children[0].matches('ul')) {
    evt.target.children[0].classList.toggle('display-none');
  }
});

tree.addEventListener('mouseover', (evt) => {
  if (evt.target.children.length && evt.target.children[0].matches('ul')) {
    evt.target.style.fontWeight = 'bold';
  }
});

tree.addEventListener('mouseout', (evt) => {
  if (evt.target.children.length && evt.target.children[0].matches('ul')) {
    evt.target.style.fontWeight = 'normal';
  }
});
