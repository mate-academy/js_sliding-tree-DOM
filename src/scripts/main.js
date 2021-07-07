'use strict';

const tree = document.querySelector('.tree');
const listElements = document.querySelectorAll('li');

tree.style.position = 'absolute';
tree.style.top = `${tree.getBoundingClientRect().top}px`;
tree.style.left = `${tree.getBoundingClientRect().left}px`;

[...listElements].forEach(element => {
  const span = document.createElement('span');

  element.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (event) => {
  const elem = event.target;

  if (elem.nextElementSibling.tagName === 'UL') {
    elem.nextElementSibling.hidden = !elem.nextElementSibling.hidden;
  };
});
