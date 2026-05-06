'use strict';

const element = document.querySelectorAll('li');

element.forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);

  span.addEventListener('click', (ev) => {
    const list = item.querySelector('ul');

    if (list) {
      list.hidden = !list.hidden;
    }
  });
});
