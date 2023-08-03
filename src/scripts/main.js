'use strict';

const tree = document.querySelector('.tree');

/* eslint-disable-next-line no-shadow */
const toggleList = (event) => {
  const target = event.target;
  const listTitle = target.closest('.list-title');

  if (!listTitle || !tree.contains(listTitle)) {
    return;
  }

  const targetList = target.nextElementSibling;

  targetList.hidden = !targetList.hidden;
};

tree.addEventListener('click', toggleList);
