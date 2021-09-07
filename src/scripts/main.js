'use strict';

const hideList = document.querySelector('ul');

hideList.addEventListener('click', () => {
  if (event.target.firstElementChild) {
    event.target.firstElementChild.toggleAttribute('hidden');
  }
});
