'use strict';

const list = document.querySelector('.tree');
const listItms = list.querySelectorAll('li');

const listItemsWithChildren = [...listItms]
  .filter(listItem => {
    const childList = listItem.querySelector('ul');

    return !!childList;
  });

for (const li of listItemsWithChildren) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childList = event.target.parentNode.querySelector('ul');

  if (!childList) {
    return;
  }

  childList.hidden = !childList.hidden;
});
