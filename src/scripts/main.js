'use strict';

const items = document.querySelectorAll('.tree li');
const tree = document.querySelector('.tree');

items.forEach((el) => {
  if (el.children.length) {
    const span = document.createElement('span');

    span.textContent = el.firstChild.textContent;
    el.replaceChild(span, el.firstChild);
  }
});

tree.addEventListener('click', (e) => {
  const isTitle = e.target.tagName === 'SPAN';

  if (isTitle) {
    const list = e.target.nextElementSibling;

    if (list.hasAttribute('hidden')) {
      list.removeAttribute('hidden');
    } else {
      list.setAttribute('hidden', '');
    }
  }
});
