'use strict';

const tree = document.querySelector('.tree');
const itemsList = tree.querySelectorAll('li');

const itemsListWithChildren = [...itemsList]
  .filter((listItem) => {
    const childList = listItem.querySelector('ul');

    return !!childList;
  });

itemsListWithChildren.forEach((listItem) => {
  const textContainer = document.createElement('span');
  const textNode = listItem.firstChild;

  listItem.prepend(textContainer);
  textContainer.append(textNode);
});

tree.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childList = event.target.nextElementSibling;

  childList.hidden = !childList.hidden;
});
