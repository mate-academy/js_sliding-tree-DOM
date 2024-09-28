'use strict';

const items = document.querySelectorAll('.tree li');

items.forEach((item) => {
  const span = document.createElement('span');
  const sublist = item.querySelector('ul');

  span.textContent = item.firstChild.textContent;
  item.firstChild.replaceWith(span);

  if (sublist) {
    span.addEventListener('click', () => {
      sublist.style.display =
        sublist.style.display === 'none' ? 'block' : 'none';
    });
  }
});
