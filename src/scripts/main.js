'use strict';

const list = document.querySelector('.tree');

const handleListClick = ({ target }) => {
  if (target.nodeName === 'LI' && target.childElementCount > 0) {
    const nextLi = target.children[0].children;

    for (let i = 0; i < nextLi.length; i++) {
      nextLi[i].classList.toggle('displaied');
    }
  }
};

list.addEventListener('click', handleListClick);
