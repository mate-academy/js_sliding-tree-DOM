'use strict';

const categories = document.querySelector('.tree');

// { parent-owner: his html }
const hidedElements = new Map();

categories.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target;
  const itemHTMLBeforeHiding
    = item.innerHTML.replaceAll(' ', '').split('\n')[0];

  if (e.target === categories || e.target.tagName === 'UL') {
    return;
  }

  if (hidedElements.get(itemHTMLBeforeHiding)) {
    item.innerHTML = hidedElements.get(itemHTMLBeforeHiding);
    hidedElements.delete(itemHTMLBeforeHiding);

    return;
  }

  const itemHTML = item.innerHTML.replaceAll(' ', '');
  const itemKey = itemHTML.split('\n')[0];

  hidedElements.set(itemKey, itemHTML || '');
  item.innerHTML = itemHTML.split('\n')[0];
});
