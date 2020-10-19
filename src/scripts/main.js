'use strict';

const tree = document.querySelector('.tree');
const lists = tree.querySelectorAll('ul');

lists.forEach(list => {
  const listHeader = list.previousSibling.data;

  list.previousSibling.remove();
  list.insertAdjacentHTML('beforebegin', `<span>${listHeader}</span>`);
});

tree.addEventListener('click', ({ target }) => {
  const list = target.nextSibling;

  if (target.tagName !== 'SPAN' || !list) {
    return;
  }

  const currentDisplay = window.getComputedStyle(list).display;

  list.style.display = (currentDisplay === 'block')
    ? 'none'
    : 'block';
});
