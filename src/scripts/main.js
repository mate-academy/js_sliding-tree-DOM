'use strict';

const listItems = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

const listItemsWithChildren = [...listItems]
  .filter((listItem) => {
    const childList = listItem.querySelector('ul');

    return Boolean(childList);
  });

const hideAndShowHandling = (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childList = e.target.nextElementSibling;

  childList.hidden = !childList.hidden;
};

listItemsWithChildren.forEach((listItem) => {
  const textNode = listItem.firstChild;
  const textContainer = document.createElement('span');

  textContainer.append(textNode);
  listItem.prepend(textContainer);
});

tree.addEventListener('click', hideAndShowHandling);
