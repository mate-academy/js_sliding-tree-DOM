'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

listItems.forEach(item => {
  const sublist = item.querySelector('ul');

  if (sublist) {
    const span = document.createElement('span');
    const text = item.firstChild.textContent;

    span.textContent = text;
    item.replaceChild(span, item.firstChild);

    span.addEventListener('click', (e) => {
      if (e.target === span) {
        sublist.style.display = sublist.style.display === 'none'
          ? 'block' : 'none';
      }
    });
  }
});
