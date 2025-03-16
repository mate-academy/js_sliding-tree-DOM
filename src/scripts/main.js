'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((item) => {
  if (item.firstElementChild) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);

    span.addEventListener('click', () => {
      const spanChild = span.nextSibling;

      if (spanChild.style.display === '') {
        spanChild.style.display = 'none';
      } else {
        spanChild.style.display = '';
      }
    });
  }
});
