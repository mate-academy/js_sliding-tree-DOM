'use strict';

const [...titles] = document.querySelectorAll('li');
const createdSpans = [];

titles.forEach((title) => {
  const span = document.createElement('span');

  if (title.firstChild && title.childNodes.length > 1) {
    span.appendChild(title.firstChild);
    title.insertBefore(span, title.firstChild);
    createdSpans.push(span);
  }
});

createdSpans.forEach((span) => {
  span.addEventListener('click', (e) => {
    if (e.target !== span) {
      return;
    }

    const ul = span.parentElement.querySelector('ul');

    if (ul) {
      ul.classList.toggle('collapsed');
    }
  });
});
