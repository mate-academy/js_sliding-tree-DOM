'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');
const fragment = document.createDocumentFragment();

listItems.forEach((listItem) => {
  const span = document.createElement('span');

  span.className = 'list-item';
  span.append(listItem.firstChild);
  fragment.appendChild(span);
  listItem.prepend(fragment);
});

list.addEventListener('click', (e) => {
  if (e.target.className === 'list-item') {
    const currentHeader = e.target.parentNode.querySelector('ul');

    if (currentHeader) {
      currentHeader.hidden = !currentHeader.hidden;
    }
  }
});
