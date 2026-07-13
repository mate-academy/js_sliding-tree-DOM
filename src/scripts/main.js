'use strict';

const list = document.querySelector('.tree');
const titles = list.querySelectorAll('li:has(ul)');

titles.forEach((title) => {
  const titleText = title.firstChild.textContent;
  const wrappedTitle = document.createElement('span');

  wrappedTitle.textContent = titleText;

  title.firstChild.replaceWith(wrappedTitle);

  const listElem = title.querySelector('ul');

  wrappedTitle.addEventListener('click', (e) => {
    listElem.style.display = listElem.style.display === 'none' ? '' : 'none';
  });
});
