'use strict';

const tree = document.querySelector('.tree');
const liArr = [...document.querySelectorAll('ul')];

liArr.forEach(item => {
  item.parentElement.className = 'listItem';
  document.body.removeAttribute('class');
});

const headers = document.querySelectorAll('.listItem');

headers.forEach(item => {
  const span = document.createElement('span');

  span.className = 'header';
  span.innerText = item.innerHTML.split('<').slice(0, 1).join('').trim();

  item.prepend(span);
  span.nextSibling.remove();
});

tree.addEventListener('click', e => {
  const item = e.target;

  if (item.className !== 'header') {
    return;
  }

  item.parentElement.children[1].hidden
    = !item.parentElement.children[1].hidden;
});
