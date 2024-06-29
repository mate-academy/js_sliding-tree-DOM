/* eslint-disable no-shadow */
'use strict';

const mainTree = document.getElementsByTagName('ul')[0];
const firstFloor = mainTree.querySelectorAll('li');

firstFloor.forEach((li) => {
  li.style.cursor = 'pointer';

  li.addEventListener('click', (event) => {
    event.stopPropagation();

    const ul = li.querySelector('ul');

    if (!ul) {
      return;
    }

    if (!ul.hasAttribute('hidden')) {
      ul.setAttribute('hidden', '');
    } else {
      ul.removeAttribute('hidden');
    }
  });
});
