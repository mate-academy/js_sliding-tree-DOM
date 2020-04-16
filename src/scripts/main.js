'use strict';

const tree = document.querySelector('.tree');
const li = [...document.querySelectorAll('li')];

li.forEach(el => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', element => {
  const ulChildren = element.target.parentNode.querySelector('ul');

  if (!ulChildren || element.target.tagName !== 'SPAN') {
    return;
  }

  ulChildren.classList.toggle('hide');
});
