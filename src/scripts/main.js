'use strict';

const myList = document.querySelector('.tree');

const listItems = myList.querySelectorAll('li');

listItems.forEach((listItem) => {
  listItem.hidden = false;

  const newSpan = document.createElement('span');

  listItem.insertAdjacentElement('beforebegin', newSpan);
  newSpan.append(listItem);
});

const togglingList = (e) => {
  if (!e.target.parentElement.tagName === 'SPAN') {
    return;
  }

  e.target.children[0].hidden = !e.target.children[0].hidden;
};

myList.addEventListener('click', togglingList);
