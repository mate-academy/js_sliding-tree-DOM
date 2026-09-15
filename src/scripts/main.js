'use strict';

const items = document.querySelectorAll('li');

items.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.childNodes[0].textContent;

  item.childNodes[0].remove();

  item.append(span);

  const ul = item.querySelector('ul');

  if (ul) {
    span.addEventListener('click', () => {
      if (ul.style.display === 'none') {
        ul.style.display = 'block';
      } else {
        ul.style.display = 'none';
      }
    });
  }
});
