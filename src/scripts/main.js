/* eslint-disable no-console */
'use strict';

const tree = document.querySelectorAll('li');

for (const item of tree) {
  const header = item.firstChild.textContent;

  item.firstChild.textContent = '';

  item.insertAdjacentHTML(
    'afterbegin',
    `<span>${header}</span>`
  );

  item.firstChild.addEventListener('click', () => {
    if (item.children[1].style.display !== 'none') {
      item.children[1].style.display = 'none';

      return;
    }

    item.children[1].style.display = 'initial';
  });
}
