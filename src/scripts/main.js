'use strict';

const list = document.querySelector('.tree');
const allLi = document.querySelectorAll('li');

for (const li of allLi) {
  const childList = li.querySelector('ul');

  if (childList) {
    const span = document.createElement('span');
    const textNode = li.firstChild;

    span.append(textNode);
    li.prepend(span);
  }
}

list.addEventListener('click', function(event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const ul = event.target.nextElementSibling;

  ul.hidden = !ul.hidden;
  event.target.style.fontWeight = ul.hidden ? '700' : '400';
});
