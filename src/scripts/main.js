'use strict';
// wrapping headers and subheaders with span ↓

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  if (item.querySelector('ul')) {
    const textNode = item.firstChild;
    const span = document.createElement('span');

    span.appendChild(textNode);
    item.prepend(span);
  }
});
// creating class 'hidden' ↓

const style = document.createElement('style');

style.appendChild(document.createTextNode('.hidden { display: none; }'));
document.head.appendChild(style);
// adding class 'hidden' for ul inside list headers wrapped with span ↓

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', () => {
    const list = span.nextElementSibling;

    list.classList.toggle('hidden');
  });
});
