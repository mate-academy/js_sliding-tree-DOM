'use strict';

const tree = document.querySelector('.tree');
const elementsOfTree = tree.querySelectorAll('li');
const listOfTree = [...elementsOfTree].filter(element => (
  element.children.length > 0
));

listOfTree.forEach(element => {
  const span = document.createElement('span');
  const firstChildOfElement = element.firstChild;

  span.className = 'titleOfList';
  span.textContent = firstChildOfElement.textContent;

  firstChildOfElement.replaceWith(span);
});

tree.addEventListener('click', clickEvent => {
  const element = clickEvent.target.closest('.titleOfList');
  const childrenListOfElement = element.parentNode.querySelector('ul');

  if (!element || !tree.contains(element)) {
    return;
  }

  childrenListOfElement.hidden = !childrenListOfElement.hidden;
});
