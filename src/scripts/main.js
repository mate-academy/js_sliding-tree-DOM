'use strict';

const fullList = document.querySelector('.tree');

for (const item of document.querySelectorAll('li')) {
  if (item.children.length > 0) {
    const name = item.firstChild.textContent;

    item.firstChild.textContent = '';

    item.insertAdjacentHTML('afterbegin', `
      <span class='list'>${name}</span>
  `);
  }
};

const hideList = (event) => {
  const item = event.target.nextElementSibling;

  if (item.tagName !== 'UL') {
    return;
  }

  item.hidden = !item.hidden;
};

fullList.addEventListener('click', hideList);
