'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const ul = e.target.closest('li').querySelector('ul');

  if (ul) {
    ul.style.display = getComputedStyle(ul).display === 'none'
      ? 'block'
      : 'none';
  }
});
