'use strict';

const tree = document.querySelector('.tree');
const titles = tree.querySelectorAll('li');

titles.forEach(title => {
  if (title.firstElementChild) {
    const textNode = title.childNodes[0];
    const spanTitle = document.createElement('span');

    spanTitle.textContent = textNode.textContent.trim();
    spanTitle.className = 'tree__title';
    textNode.textContent = '';
    title.insertAdjacentElement('afterbegin', spanTitle);
  }
});

// eslint-disable-next-line no-shadow
tree.addEventListener('click', event => {
  const item = event.target.closest('.tree__title');

  if (!item) {
    return;
  }

  const itemList = item.nextElementSibling;
  const isHidden = itemList.getAttribute('hidden');

  if (isHidden) {
    itemList.removeAttribute('hidden');
  } else {
    itemList.setAttribute('hidden', 'true');
  }
});
