'use strict';

const items = [ ...document.querySelectorAll('li') ];
const tree = document.querySelector('.tree');

items.forEach(item => {
  const index = item.innerText.indexOf('\n');
  let itemName = '';

  if (index !== -1) {
    itemName = item.innerText.slice(0, index + 1);
  } else {
    itemName = item.innerText;
  }

  const wrap = document.createElement('span');

  wrap.className = 'item-title';
  wrap.innerText = itemName;
  item.firstChild.remove();
  item.prepend(wrap);
});

tree.addEventListener('click', (e) => {
  if (!e.target.classList.contains('item-title')) {
    return;
  }

  if (e.target.nextSibling.hidden !== true) {
    e.target.nextSibling.setAttribute('hidden', true);
  } else {
    e.target.nextSibling.removeAttribute('hidden');
  };
});
