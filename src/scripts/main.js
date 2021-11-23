'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of items) {
  if (item.childNodes.length > 1) {
    const span = document.createElement('span');

    span.classList.add('header');
    item.prepend(span);
    span.prepend(span.nextSibling);
  }
}

function toggle(el) {
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

tree.addEventListener('click', e => {
  const target = e.target.closest('.header');

  if (!tree.contains(target)) {
    return;
  }

  toggle(target.nextSibling);
});
