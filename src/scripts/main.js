'use strict';

const listItems = document.querySelectorAll('li');
const listItemsWithChildren = [...listItems]
  .filter((listItem) => {
    const childList = listItem.querySelector('ul');

    return !!childList;
  });

for (const element of listItemsWithChildren) {
  const newSpan = document.createElement('span');

  element.prepend(newSpan);
  newSpan.append(newSpan.nextSibling);
}

const tree = document.querySelector('.tree');
const { top, left } = tree.getBoundingClientRect();

tree.style.position = 'absolute';
tree.style.top = `${top}px`;
tree.style.left = `${left}px`;

tree.addEventListener('click', (event) => {
  const point = event.target;

  if (point.nextElementSibling.tagName === 'UL') {
    point.nextElementSibling.hidden = !point.nextElementSibling.hidden;
  }
});
