'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');
  const ul = span.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  if (ul.style.display === 'none') {
    ul.style.display = '';

    return;
  }

  ul.style.display = 'none';
});
