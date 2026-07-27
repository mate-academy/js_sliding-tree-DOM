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

  span.addEventListener('click', () => {
    nestedList.style.display =
      nestedList.style.display === 'none' ? '' : 'none';
  });
});
