'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const element of li) {
  const span = document.createElement('span');

  element.prepend(span);
  span.prepend(span.nextSibling);
}

tree.addEventListener('click', () => {
  const listItem = event.target;

  const ul = listItem.parentElement.querySelector('ul');

  ul.hidden = !ul.hidden;
});
