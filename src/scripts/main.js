'use strict';

const findTree = document.querySelector('.tree');
let createSpan = document.createElement('span');
const arrHeader = [...findTree.children];

function findHeader(arrHead) {
  arrHead.forEach(elem => {
    if (!elem.childElementCount) {
      return;
    }

    if (elem.nodeName === 'UL') {
      findHeader([...elem.children]);
    }

    createSpan = document.createElement('span');
    createSpan.className = 'toggle';
    createSpan.textContent = elem.firstChild.textContent.trim();
    elem.prepend(createSpan);
    elem.childNodes[1].parentNode.removeChild(elem.childNodes[1]);
    findHeader([...elem.children]);
  });
};

findHeader(arrHeader);

const tree = document.querySelector('.tree');

tree.addEventListener('click', (event) => {
  const item = event.target;

  if (!item.classList.contains('toggle')) {
    return;
  }

  if (item.parentElement.children[1].hidden === true) {
    item.parentElement.children[1].hidden = false;
  } else {
    item.parentElement.children[1].hidden = true;
  };
});
