'use strict';

const lis = document.querySelectorAll('li');
const spans = document.querySelectorAll('span');
const tree = document.querySelector('.tree');

for (const li of lis) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

[...spans].forEach(span => {
  span.setAttribute('hidden', true);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const item = e.target.parentNode.querySelector('ul');

  item.toggleAttribute('hidden');
});
