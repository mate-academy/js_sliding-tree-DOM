'use strict';

const tree = document.querySelector('.tree');
const allListItems = document.querySelectorAll('li');

for (const item of allListItems) {
  const span = document.createElement('SPAN');

  span.append(item.firstChild);
  item.prepend(span);
}

function clickHandler() {
  const innerUl = event.target.parentNode.querySelector('ul');

  if (event.target.tagName !== 'SPAN'
    || (event.target.tagName === 'SPAN' && !innerUl)) {
    return;
  }

  innerUl.hidden = !innerUl.hidden;
}

tree.addEventListener('click', clickHandler);
