'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(item => {
  const span = document.createElement('span');

  span.className = 'list';
  item.prepend(span);
  span.append(span.nextSibling);
},
);

tree.addEventListener('click', (e) => {
  const hiddenList = e.target.parentNode.querySelector('ul');

  if (hiddenList) {
    hiddenList.hidden = !hiddenList.hidden;
  };
});
