'use strict';

const items = document.querySelectorAll('.tree li');

items.forEach((item) => {
  const text = item.firstChild.textContent.trim();

  const span = document.createElement('span');

  span.textContent = text;

  item.firstChild.replaceWith(span);
});

const spans = document.querySelectorAll('span');

spans.forEach((spany) => {
  spany.addEventListener('click', () => {
    const list = spany.parentElement.querySelector('ul');

    if (!list) {
      return;
    }

    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  });
});
