'use strict';

const items = document.querySelectorAll('li');

for (const li of items) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', e => {
  if (e.target.localName !== 'span') {
    return;
  }

  const list = e.target.parentNode.querySelector('ul');

  list.hidden = !list.hidden;
});
