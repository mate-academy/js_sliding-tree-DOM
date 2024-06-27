'use strict';

// write code here
const tree = document.querySelector('.tree');
const liAllElement = document.querySelectorAll('li');

function wrapElement(element, wrapperTag) {
  const createdElement = document.createElement(wrapperTag);

  createdElement.textContent = element.firstChild.textContent;
  element.replaceChild(createdElement, element.firstChild);
}

liAllElement.forEach((element) => {
  if (element.children.length) {
    wrapElement(element, 'span');
  }
});

// eslint-disable-next-line no-shadow
tree.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const parentLi = event.target.parentElement;
    const childrenUl = parentLi.querySelector('ul');

    if (childrenUl) {
      childrenUl.hidden = !childrenUl.hidden;
    }
  }
});
