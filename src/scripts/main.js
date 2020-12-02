'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

[...listItems].forEach(item => {
  const span = document.createElement('span');

  span.append(item.childNodes[0]);
  item.prepend(span);
});

tree.addEventListener('click', e => {
  const elem = e.target.nextElementSibling;

  if (!!elem && elem.tagName === 'UL') {
    elem.hidden = !elem.hidden;
  }
});
