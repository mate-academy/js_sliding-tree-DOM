'use strict';

const list = document.querySelector('.tree');
const listOfli = document.querySelectorAll('li');

for (const li of listOfli) {
  const span = document.createElement('span');

  if (li.children.length !== 0) {
    li.prepend(span);
    span.append(span.nextSibling);
  }
}

list.addEventListener('click', (events) => {
  const item = events.target.matches('span');

  if (!item) {
    return;
  }

  const itemCliked = events.target;

  if (itemCliked.nextElementSibling.hidden === true) {
    itemCliked.nextElementSibling.hidden = false;
  } else {
    itemCliked.nextElementSibling.hidden = true;
  }
}
);
