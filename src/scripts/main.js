'use strict';

const tree = document.querySelector('.tree');
const liAllElements = document.querySelectorAll('li');

function wrapElement(element, wrapperTag) {
  const createdElement = document.createElement(wrapperTag);

  createdElement.textContent = element.firstChild.textContent;
  element.replaceChild(createdElement, element.firstChild);
}

tree.addEventListener('click', (evenT) => {
  if (evenT.target.tagName === 'SPAN') {
    const parentLi = evenT.target.parentElement;
    const childrenUl = parentLi.querySelector('ul');

    if (childrenUl) {
      childrenUl.hidden = !childrenUl.hidden;
    }
  }
});

liAllElements.forEach((element) => {
  if (element.children.length) {
    wrapElement(element, 'span');
  }
});
