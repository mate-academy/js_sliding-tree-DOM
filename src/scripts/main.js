'use strict';

// write code here
const li = document.body.querySelectorAll('li');
const list = document.body.querySelector('.tree');

li.forEach(element => {
  if (element.children.length !== 0) {
    const wrapElement = document.createElement('span');

    wrapElement.className = 'wrapper';
    wrapElement.textContent = element.firstChild.textContent;
    element.firstChild.replaceWith(wrapElement);
  }
});

list.addEventListener('click', (eventClick) => {
  const elementToHide = eventClick.target.nextSibling;

  if (!elementToHide) {
    return;
  }

  if (eventClick.target.classList.contains('wrapper')) {
    elementToHide.hidden = !elementToHide.hidden;
  }
});
