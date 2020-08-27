'use strict';

// write code here
const list = document.querySelector('.tree');
const allLi = list.querySelectorAll('li');

allLi.forEach(oneLi => {
  const span = document.createElement('span');

  oneLi.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = event.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
