'use strict';

// write code here
const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach((element) => {
  const text = element.firstChild;

  if (text.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    element.insertBefore(span, text);
    span.appendChild(text);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.closest('li');
  const nextLi = parentLi.querySelector(':scope > ul');

  if (!nextLi) {
    return;
  }
  nextLi.hidden = !nextLi.hidden;
});
