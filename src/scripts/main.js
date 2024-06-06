'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();

  item.firstChild.textContent = '';

  item.prepend(span);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const item = e.target.closest('li');

  if (item.lastElementChild.tagName === 'UL') {
    const ulElem = item.querySelector('ul');

    ulElem.hidden = !ulElem.hidden;
  }
});
