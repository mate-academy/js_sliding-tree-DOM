'use strict';

const listItems = document.querySelectorAll('li');
const listItemsWithChildren = [...listItems]
  .filter((listItem) => {
    const childList = listItem.querySelector('ul');

    return !!childList;
  });

listItemsWithChildren.forEach((listItem) => {
  const textNode = listItem.firstChild;
  const elementWrapper = document.createElement('span');

  listItem.prepend(elementWrapper);
  elementWrapper.append(textNode);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childList = event.target.nextElementSibling;

  childList.hidden = !childList.hidden;
});
