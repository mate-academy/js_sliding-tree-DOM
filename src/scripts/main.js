'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');
const nestedList = [...listItems]
  .filter((listItem) => {
    const childList = listItem.querySelector('ul');

    return !!childList;
  });

nestedList.forEach((listItem) => {
  const textContainer = document.createElement('span');

  listItem.prepend(textContainer);
  textContainer.append(textContainer.nextSibling);
});

tree.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childList = event.target.nextElementSibling;

  childList.hidden = !childList.hidden;
});
