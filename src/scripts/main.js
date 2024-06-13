'use strict';

const li = document.querySelectorAll('li');

li.forEach((item) => {
  const span = document.createElement('span');
  const text = item.firstChild.textContent;
  const neededUl = item.querySelector('ul');

  if (neededUl) {
    span.textContent = text;
    item.firstChild.textContent = '';

    item.prepend(span);
  }

  span.addEventListener('click', (e) => {
    neededUl.style.display =
      neededUl.style.display === 'none' ? 'block' : 'none';
  });
});
