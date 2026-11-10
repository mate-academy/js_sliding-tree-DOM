'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const nestedList = item.querySelector('ul');

  if (nestedList) {
    const span = document.createElement('span');

    span.append(item.firstChild);

    item.prepend(span);

    span.addEventListener('click', (e) => {
      nestedList.hidden = !nestedList.hidden;
    });
  }
});
