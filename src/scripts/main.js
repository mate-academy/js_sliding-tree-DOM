'use strict';

const liItems = document.querySelectorAll('li');

liItems.forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

document.body.addEventListener('click', (e) => {
  const toHidden = e.target.nextSibling;

  if (toHidden) {
    toHidden.hidden = !toHidden.hidden;
  }
});
