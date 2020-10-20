'use strict';

const listItems = document.querySelectorAll('li');
const listItemsWithChildren = [...listItems]
  .filter((listItem) => {
    const childList = listItem.querySelector('ul');

    return Boolean(childList);
  });

listItemsWithChildren.forEach((listItem) => {
  const textNode = listItem.firstChild;
  const textContainer = document.createElement('span');

  textContainer.append(textNode);
  listItem.prepend(textContainer);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childList = event.target.nextElementSibling;

  childList.hidden = !childList.hidden;
});
