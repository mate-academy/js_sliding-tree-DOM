'use strict';

const list = document.querySelectorAll('li');

list.forEach((element) => {
  if (element.querySelector('ul')) {
    const span = document.createElement('span');

    const text = element.firstChild.textContent.trim();

    span.textContent = text;

    element.prepend(span);

    element.firstChild.nextSibling.nodeValue = '';

    span.addEventListener('click', (e) => {
      const field = e.target;
      const ul = field.parentElement.querySelector('ul');

      if (ul) {
        if (ul.style.display === 'none') {
          ul.style.display = 'block';
        } else {
          ul.style.display = 'none';
        }
      }
    });
  }
});
