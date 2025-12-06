'use strict';

let tree;

document.addEventListener('DOMContentLoaded', () => {
  tree = document.querySelector('.tree');
});

const uls = tree.querySelectorAll('ul');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.nextElementSibling;
  let state = 'none';

  if (!ul || ul.tagName !== 'UL') {
    return;
  }

  if (getComputedStyle(ul).display === 'none') {
    state = '';
  }

  ul.style.display = state;
});

uls.forEach((ul) => {
  const prev = ul.previousSibling;

  if (!prev || prev.nodeType !== 3) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = prev.textContent.trim();

  prev.replaceWith(span);
});
