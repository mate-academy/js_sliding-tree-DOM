'use strict';

const hover = document.querySelectorAll('span');

hover.forEach((span) => {
  span.addEventListener('click', (e) => {
    const content = e.target.parentElement.querySelector('ul');

    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
