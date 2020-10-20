'use strict';

// write code here'

const elementHeaderClassName = 'sliding-header';

function makeSlidingTree(selector) {
  const tree = document.querySelector(selector);
  const headers = findElementHeaders(tree);

  createElementWrapper(headers);
  addListener(tree);
}

function findElementHeaders(element) {
  const listElements = element.querySelectorAll('li');

  return [...listElements]
    .filter((listItem) => {
      const childList = listItem.querySelector('ul');

      return !!childList;
    });
}

function createElementWrapper(elements) {
  elements.forEach((element) => {
    const textNode = element.childNodes[0];
    const textContainer = document.createElement('span');

    textContainer.classList.add(elementHeaderClassName);

    textContainer.append(textNode);
    element.prepend(textContainer);
  });
}

function addListener(element) {
  element.addEventListener('click', ({ target }) => {
    if (!target.classList.contains(elementHeaderClassName)) {
      return;
    }

    const elementChildList = target.parentElement.querySelector('ul');

    if (!elementChildList) {
      return;
    }

    elementChildList.hidden = !elementChildList.hidden;
  });
}

makeSlidingTree('.tree');
