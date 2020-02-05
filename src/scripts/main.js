'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const elemLi of li) {
  const span = document.createElement('span');

  elemLi.prepend(span);
  span.prepend(span.nextSibling);
}

tree.addEventListener('click', () => {
  const item = event.target;

  if (item.tagName !== 'SPAN') {
    return;
  }

  const ul = item.parentElement.querySelector('ul');

  ul.hidden = !ul.hidden;
});
