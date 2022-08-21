'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach(title => {
  const span = document.createElement('span');

  title.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const list = e.target.parentNode.querySelector('ul');

  if (e.target.tagName === 'SPAN') {
    list.hidden = !list.hidden;
  }
});
