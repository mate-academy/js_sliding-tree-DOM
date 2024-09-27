'use strict';

const treeItems = document.querySelectorAll('li');

treeItems.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent;
  item.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    const ul = item.querySelector('ul');

    if (ul) {
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    }
  });
});
