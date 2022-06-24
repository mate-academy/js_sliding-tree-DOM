'use strict';

const tree = document.querySelector('.tree');
const items = [...tree.querySelectorAll('li')];

const createSpan = (item) => {
  const span = document.createElement('span');

  span.innerText = item.firstChild.textContent;

  if (item.children.length > 0) {
    span.className = 'item';
  }

  item.firstChild.replaceWith(span);
};

const moveList = (click) => {
  const item = click.target.matches('.item');

  if (!item) {
    return false;
  }

  const nextList = click.target.nextElementSibling;

  switch (nextList.style.display) {
    case '':
      nextList.style.display = 'none';
      break;
    case 'none':
      nextList.style.display = '';
      break;
  }
};

items.map(createSpan);

tree.addEventListener('click', moveList);
