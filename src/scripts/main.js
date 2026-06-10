'use strict';

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', () => {
    const ul = span.nextElementSibling;

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  });
});
