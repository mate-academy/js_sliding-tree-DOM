'use strict';

const tree = document.querySelector('.tree');

const wrapHeaders = () => {
  const listItems = tree.querySelectorAll('li');

  for (const listItem of listItems) {
    const isListHeader = !!listItem.firstElementChild;

    if (!isListHeader) {
      continue;
    }

    const span = document.createElement('span');

    span.className = 'list-title';

    listItem.prepend(span);
    span.appendChild(span.nextSibling);
  }
};

/* eslint-disable-next-line no-shadow */
const toggleList = (event) => {
  const target = event.target;
  const listTitle = target.closest('.list-title');

  const targetList = target.nextElementSibling;

  if (!listTitle || !tree.contains(listTitle) || !targetList) {
    return;
  }

  targetList.hidden = !targetList.hidden;
};

wrapHeaders();

tree.addEventListener('click', toggleList);
