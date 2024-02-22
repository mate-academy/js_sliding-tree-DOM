'use strict';

const tree = document.querySelector('.tree');

const items = document.querySelectorAll('li');

for (const item of items) {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const elements = e.target.closest('li').querySelectorAll('ul');

    [...elements].forEach(el => {
      el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });
  }
});
