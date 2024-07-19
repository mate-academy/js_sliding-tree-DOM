'use strict';

const items = document.querySelectorAll('li');

Array.from(items).forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent;
  item.firstChild.replaceWith(span);

  const childUl = item.querySelector('ul');

  if (childUl) {
    span.addEventListener('click', () => {
      if (childUl.style.display === 'none') {
        childUl.style.display = 'block';
      } else {
        childUl.style.display = 'none';
      }
    });
  }
});
