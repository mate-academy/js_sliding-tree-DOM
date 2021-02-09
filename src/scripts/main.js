'use strict';

// write code here

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

const body = document.querySelector('body');

body.addEventListener('click', (ent) => {
  const item = ent.target;

  if (item.tagName !== 'SPAN') {
    return;
  }

  const ul = item.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
