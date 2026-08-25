'use strict';

const items = document.querySelectorAll('.tree li');

items.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.replaceChild(span, item.firstChild);
});

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', () => {
    const list = span.nextElementSibling;

    list.hidden = !list.hidden;
  });
});
