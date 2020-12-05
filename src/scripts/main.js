'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');
const listWithInsetr = [...listItems]
  .filter((listItem) => {
    const childList = listItem.querySelector('ul');

    return !!childList;
  });

listWithInsetr.forEach((listItem) => {
  const textNode = listItem.childNodes[0];
  const textContainer = document.createElement('span');

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
