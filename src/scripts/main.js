'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

list.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.onclick = (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const containUl = e.target.parentNode.querySelector('ul');

  if (!containUl) {
    return;
  }

  containUl.hidden = !containUl.hidden;
};
