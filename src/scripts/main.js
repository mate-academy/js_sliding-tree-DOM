'use strict';

const listItems = [...document.querySelectorAll('li')];
const liWithUl = listItems.filter((item) => item.querySelector('ul'));

liWithUl.forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);

  span.append(item.childNodes[1]);

  span.addEventListener('click', (e) => {
    const ul = item.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  });
});
