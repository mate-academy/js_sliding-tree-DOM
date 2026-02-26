'use strict';

document.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  if (e.target.closest('a, button, input')) {
    return;
  }

  const parentLi = span.closest('li');

  if (!parentLi) {
    return;
  }

  const childList = parentLi.querySelector(':scope > ul');

  if (!childList) {
    return;
  }

  childList.classList.toggle('hidden');
});
