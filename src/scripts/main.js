'use strict';

// write code here
const header = document.querySelector('.tree');

const someFunction = (e) => {
  e.preventDefault();

  const currentElem = e.target;

  const currentChildren = [...currentElem.children]

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

header.addEventListener('click', someFunction);
