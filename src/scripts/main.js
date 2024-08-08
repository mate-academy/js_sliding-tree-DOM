'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((listItem) => {
  const span = document.createElement('span');

  span.textContent = listItem.firstChild.textContent;

  listItem.replaceChild(span, listItem.firstChild);

  span.addEventListener('click', () => {
    const nestedList = listItem.querySelector('ul');

    if (nestedList) {
      nestedList.hidden = !nestedList.hidden;
    }
  });
});
