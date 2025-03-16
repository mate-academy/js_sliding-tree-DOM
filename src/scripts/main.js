'use strict';

const li = document.querySelectorAll('li');

li.forEach((item) => {
  const span = document.createElement('span');
  const text = item.firstChild.textContent;
  const listUl = item.querySelector('ul');

  if (listUl) {
    span.textContent = text;
    item.firstChild.textContent = '';

    item.prepend(span);
  }

  span.addEventListener('click', (e) => {
    listUl.style.display = listUl.style.display === 'none' ? 'block' : 'none';
  });
});
