'use strict';

const items = Array.from(document.querySelectorAll('li'));

items.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(item.childNodes[1]);

  span.addEventListener('click', (ev) => {
    if (ev.isClick) {
      return;
    }

    ev.isClick = true;
    item.childNodes[1].hidden = !item.childNodes[1].hidden;
  });
});
