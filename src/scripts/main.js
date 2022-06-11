'use strict';

const uls = document.querySelectorAll('ul');

for (const list of uls) {
  const text = list.previousSibling.textContent.trim();
  const span = document.createElement('span');

  span.textContent = text;
  list.previousSibling.replaceWith(span);
}

const spans = document.querySelectorAll('span');

for (const span of spans) {
  span.addEventListener('click', (e) => {
    // span.nextSibling.style.display = 'none';

    span.nextSibling.style.display
    = span.nextSibling.style.display ? '' : 'none';
  });
}
