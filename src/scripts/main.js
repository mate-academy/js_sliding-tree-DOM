'use strict';

// write code here
const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent;
  item.firstChild.replaceWith(span);

  if (span.nextElementSibling) {
    span.addEventListener('click', () => {
      span.nextElementSibling.style.display =
        span.nextElementSibling.style.display !== 'none' ? 'none' : '';
    });
  }
});
