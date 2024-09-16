'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');
const arrayOfLists = [...listItems].filter((item) => {
  const child = item.querySelector('ul');

  return Boolean(child);
});

arrayOfLists.forEach((item) => {
  const textSpan = item.firstChild;
  const span = document.createElement('span');

  span.append(textSpan);
  item.prepend(span);
});

tree.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const ul = event.target.nextElementSibling;

  ul.hidden = !ul.hidden;
});
