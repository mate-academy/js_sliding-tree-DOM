'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  const span = ev.target.closest('span');
  if (!span) {
    return;
  }

  const childList = span.parentElement.querySelector('ul');
  if (!childList) {
    return;
  }

  const currentDisplay = getComputedStyle(childList).display;
  if (currentDisplay ==='none') {
    childList.style.display = 'block';
  }
  if (currentDisplay ==='block') {
    childList.style.display = 'none';
  }
});
