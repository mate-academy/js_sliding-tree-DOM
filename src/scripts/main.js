'use strict';

const tree = document.querySelector('.tree');
const titles = tree.querySelectorAll('li');

titles.forEach(title => {
  if (title.firstElementChild) {
    const textNode = title.childNodes[0];
    const spanTitle = document.createElement('span');

    spanTitle.className = 'tree__title';
    textNode.before(spanTitle);
    spanTitle.prepend(textNode);
  }
});

// eslint-disable-next-line no-shadow
tree.addEventListener('click', event => {
  const item = event.target.closest('.tree__title');

  if (!item) {
    return;
  }

  const itemList = item.nextElementSibling;

  itemList.toggleAttribute('hidden');
});
