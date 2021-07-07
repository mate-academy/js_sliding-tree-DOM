'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

function findListItemWithChildren(li) {
  return [...li].filter((listItem) => {
    const childList = listItem.querySelector('ul');

    return Boolean(childList);
  });
}

function addSpanWrapper(listItem) {
  listItem.forEach(item => {
    const spanWrapper = document.createElement('span');
    const textNode = item.childNodes[0];

    spanWrapper.append(textNode);
    item.prepend(spanWrapper);
  });
}

function addListeners(list) {
  list.addEventListener('click', (event) => {
    if (event.target.tagName !== 'SPAN') {
      return;
    }

    const childList = event.target.nextElementSibling;

    childList.hidden = !childList.hidden;
  });
}

const listItemWithChildren = findListItemWithChildren(listItems);

addSpanWrapper(listItemWithChildren);
addListeners(tree);
