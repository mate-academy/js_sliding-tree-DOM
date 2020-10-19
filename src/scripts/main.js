'use strict';

const list = document.querySelector('.tree');
const listItmes = list.querySelectorAll('li');

for (const li of listItmes) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childList = event.target.parentNode.querySelector('ul');

  if (!childList) {
    return;
  }

  childList.hidden = !childList.hidden;
});
