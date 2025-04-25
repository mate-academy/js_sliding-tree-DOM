'use strict';

const mainList = document.querySelector('ul');

mainList.addEventListener('click', (e) => {
  const target = e.target.closest('li');

  if (!target) {
    return;
  }

  const childList = target.querySelector('ul');

  if (childList) {
    childList.classList.toggle('hide');
  }
});
