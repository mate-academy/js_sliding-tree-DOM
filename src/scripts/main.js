'use strict';

// write code here
const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();

  item.firstChild.replaceWith(span);
});

tree.addEventListener('click', (e) => {
  const clickedElement = e.target;
  const childList = clickedElement.parentElement.querySelector('ul');

  if (clickedElement.tagName !== 'SPAN') {
    return;
  }

  if (getComputedStyle(childList).display === 'none') {
    childList.style.display = '';
    clickedElement.style.fontWeight = 400;
  } else {
    childList.style.display = 'none';
    clickedElement.style.fontWeight = 700;
  }
});
