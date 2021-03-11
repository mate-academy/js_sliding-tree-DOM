'use strict';

// write code here
const li = document.body.querySelectorAll('li');
const list = document.body.querySelector('.tree');

li.forEach(element => {
  if (element.children.length !== 0) {
    const wrapElement = document.createElement('span');

    wrapElement.textContent = element.firstChild.textContent;
    element.firstChild.replaceWith(wrapElement);
  }
});

list.addEventListener('click', (eventClick) => {
  const elementToHidden = eventClick.target.nextSibling;

  if (!elementToHidden) {
    return;
  }

  if (eventClick.target.tagName === 'SPAN'
    && elementToHidden.hidden === false) {
    elementToHidden.hidden = true;

    return;
  }

  if (eventClick.target.tagName === 'SPAN' && elementToHidden.hidden === true) {
    elementToHidden.hidden = false;
  }
});
