'use strict';

const liElements = document.querySelectorAll('li');

liElements.forEach((li) => {
  const text = li.childNodes[0];
  const span = document.createElement('span');

  li.replaceChild(span, text);
  span.appendChild(text);
});

document.addEventListener('click', (e) => {
  const span = e.target.closest('span');
  const spanNextSibling = span.nextSibling;

  if (!span) {
    return;
  }

  if (spanNextSibling.style.display !== 'none') {
    spanNextSibling.style.display = 'none';
  } else {
    spanNextSibling.style.display = 'block';
  }
});
