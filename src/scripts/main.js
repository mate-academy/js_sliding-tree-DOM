'use strict';

const tree = document.querySelector('.tree');
const listItem = [...tree.querySelectorAll('li')];

listItem.forEach(item => {
  const list = item.querySelector('ul');

  if (!list) {
    return;
  }

  const textNode = item.firstChild;
  const titleWrapper = document.createElement('span');

  textNode.replaceWith(titleWrapper);
  titleWrapper.textContent = textNode.data.trim();

  titleWrapper.addEventListener('click', () => {
    list.hidden = !list.hidden;
  });
});
