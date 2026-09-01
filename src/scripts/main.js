'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const list = item.querySelector('ul');

  if (list) {
    const span = document.createElement('span');

    span.textContent = item.childNodes[0].textContent.trim();
    item.removeChild(item.childNodes[0]);
    list.before(span);

    span.addEventListener('click', () => {
      list.style.display = list.style.display === 'none' ? '' : 'none';
    });
  }
});
