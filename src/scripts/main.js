'use strict';

const list = document.querySelector('.tree');

const handleListClick = ({ target }) => {
  const { nodeName, childElementCount } = target;

  if (nodeName === 'LI' && childElementCount > 0) {
    const nextLi = target.children[0].children;

    for (let i = 0; i < nextLi.length; i++) {
      nextLi[i].classList.toggle('opened');
    }
  }
};

list.addEventListener('click', handleListClick);
