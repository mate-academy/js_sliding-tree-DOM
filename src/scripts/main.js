'use strict';

const myList = document.querySelector('.tree');

const listItems = myList.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].hidden = false;

  const newSpan = document.createElement('span');

  listItems[i].insertAdjacentElement('beforebegin', newSpan);
  newSpan.append(listItems[i]);
}

const add = (e) => {
  if (!e.target.children.length || e.target.tagName === 'UL') {
    return;
  }

  e.target.children[0].hidden = !e.target.children[0].hidden;
};

myList.addEventListener('click', add);
