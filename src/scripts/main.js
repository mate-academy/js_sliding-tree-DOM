'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach(title => {
  const span = document.createElement('span');

  title.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (el) => {
  const list = el.target.parentNode.querySelector('ul');

  if (el.target.tagName === 'SPAN') {
    list.hidden = !list.hidden;
  };
});
