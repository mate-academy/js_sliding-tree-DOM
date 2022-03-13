'use strict';

const tree = document.querySelector('.tree');

tree.style.cursor = 'pointer';

const hideFunction = (el) => {
  el.preventDefault();

  const currentElem = el.target;

  const currentChildren = [...currentElem.children];

  if (currentChildren.length) {
    currentChildren.map(elem => {
      elem.hidden = !elem.hidden;
    });

    if (currentChildren[0].hidden) {
      currentElem.style.fontWeight = 'bold';
    } else {
      currentElem.style.fontWeight = 'normal';
    }
  }
};

tree.addEventListener('click', hideFunction);
