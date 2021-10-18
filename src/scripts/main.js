'use strict';

const listItems = document.querySelectorAll('li');

for (const li of listItems) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

const handler = function(e) {
  const target = e.target.closest('span');

  if (!target) {
    return;
  }

  const list = e.target.parentNode.querySelector('ul');

  if (!list) {
    return;
  }

  list.hidden = !list.hidden;
};

document.addEventListener('click', handler);
