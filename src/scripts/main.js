'use strict';

const block = document.querySelector('.tree');
const items = [...block.querySelectorAll('li')];

items.forEach(item => {
  const list = item.querySelector('ul');

  if (!list) {
    return;
  }

  const text = item.firstChild;
  const wrapperText = document.createElement('span');

  text.replaceWith(wrapperText);
  wrapperText.append(text.data.trim());

  wrapperText.addEventListener('click', (e) => {
    list.hidden = !list.hidden;
  });
});
