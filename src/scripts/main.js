'use strict';

// write code here
const list = document.querySelector('.tree');
const elem = [...list.querySelectorAll('li')];

list.style.cssText = `
  position: absolute;
  top: ${list.getBoundingClientRect().top}px;
  left: ${list.getBoundingClientRect().left}px;
`;

elem.forEach(li => {
  const span = document.createElement('span');

  span.prepend(li.firstChild);
  li.prepend(span);
});

document.addEventListener('click', (event) => {
  const item = event.target.nextElementSibling;

  if (item.tagName === 'UL') {
    if (item.hidden === false) {
      item.hidden = true;
    } else {
      item.hidden = false;
    }
  }
});
