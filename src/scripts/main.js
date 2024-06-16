'use strict';

const listItems = [...document.querySelectorAll('li')];
const haveUl = listItems.filter((item) => item.querySelector('ul'));

haveUl.forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(item.childNodes[1]);

  span.addEventListener('click', (e) => {
    const ul = item.querySelector('ul');

    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  });
});
