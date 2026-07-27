/* eslint-disable no-console */
'use strict';

const refs = {
  listTitleEl: document.querySelectorAll('.tree li:has(ul)'),
};

refs.listTitleEl.forEach((li) => {
  const nestedList = li.querySelector('ul');

  if (!nestedList) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();
  li.firstChild.replaceWith(span);

  let displayList = nestedList.style.display;

  span.addEventListener('click', () => {
    displayList = displayList === 'none' ? '' : 'none';
  });
});
