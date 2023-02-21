'use strict';

const list = document.querySelectorAll('li');

for (const item of list) {
  const spanElement = document.createElement('span');

  item.prepend(spanElement);
  spanElement.append(spanElement.nextSibling);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', eventFunc => {
  const item = eventFunc.target.closest('li').children[1];

  if (item) {
    item.hidden = !item.hidden;
  }
});
