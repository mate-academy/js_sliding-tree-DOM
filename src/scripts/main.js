'use strict';

// write code here
const theTree = document.querySelector('.tree');

for (const liElement of document.querySelectorAll('li')) {
  if (liElement.children.length > 0) {
    const content = liElement.firstChild.textContent;

    liElement.firstChild.textContent = '';

    liElement.insertAdjacentHTML('afterbegin', `
      <span class='list'>${content}</span>`);
  }
};

const hideEvent = (event) => {
  const item = event.target.nextElementSibling;

  if (item.tagName !== 'UL') {
    return;
  }

  item.hidden = !item.hidden;
};

theTree.addEventListener('click', hideEvent);