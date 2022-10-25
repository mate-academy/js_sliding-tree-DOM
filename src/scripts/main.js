'use strict';

const list = document.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', e => {
  const target = e.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  const children = target.parentNode.querySelector('ul');

  if (!children) {
    return;
  }

  children.hidden = !children.hidden;
});
