'use strict';

const tree = document.querySelector('.tree');
const listItem = tree.querySelectorAll('li');

for (const li of listItem) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  if (!e.target.closest('li')) {
    return;
  }

  const ul = e.target.closest('li').querySelector('ul');

  if (ul.style.display === 'none') {
    ul.style.display = 'list-item';
  } else {
    ul.style.display = 'none';
  }
});
