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
  const item = event.target;
  const childrenContainer = item.nextElementSibling;

  if (item.tagName !== 'SPAN' || !childrenContainer) {
    return;
  }
  childrenContainer.hidden = !childrenContainer.hidden;
});
