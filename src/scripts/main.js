'use strict';

const listItems = document.querySelectorAll('li');

for (const listItem of listItems) {
  const span = document.createElement('span');

  listItem.prepend(span);
  span.append(span.nextSibling);
}

const handlerClick = function(clickEvent) {
  const target = clickEvent.target.closest('span');

  if (!target) {
    return;
  }

  const list = clickEvent.target.parentNode.querySelector('ul');

  if (!list) {
    return;
  }

  list.hidden = !list.hidden;
};

document.addEventListener('click', handlerClick);
