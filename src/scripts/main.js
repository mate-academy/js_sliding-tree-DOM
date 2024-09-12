'use strict';

const li = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (let i = 0; i < li.length; i++) {
  const span = document.createElement('span');

  li[i].prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const children = e.target.parentNode.querySelector('ul');

  if (!children) {
    return;
  }

  if (children.style.display === 'none') {
    children.style = '';

    return;
  }

  children.style.display = 'none';
});
