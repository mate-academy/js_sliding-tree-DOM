'use strict';

// const { createElement } = require('react');

// write code here
const tree = document.querySelector('.tree');
const li = tree.querySelectorAll('li:has(ul)');

li.forEach((s) => {
  const span = document.createElement('span');

  span.textContent = s.firstChild.textContent.trim();
  s.firstChild.remove();
  s.prepend(span);
});

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', () => {
    const ul = span.parentElement.querySelector('ul');

    ul.hidden = !ul.hidden;
  });
});
