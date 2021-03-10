'use strict';

const tree = document.querySelector('.tree');
const elementsOfList = [...tree.querySelectorAll('li')];

elementsOfList.forEach(pointOfList => {
  const list = pointOfList.querySelector('ul');

  if (!list) {
    return;
  }

  const newNode = pointOfList.firstChild;

  const spanElement = document.createElement('span');

  newNode.replaceWith(spanElement);

  spanElement.textContent = newNode.data;

  spanElement.addEventListener('click', (e) => {
    list.hidden = !list.hidden;
  });
});
