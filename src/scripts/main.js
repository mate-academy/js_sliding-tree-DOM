'use strict';

const headline = document.querySelectorAll('.tree li');

headline.forEach((item) => {
  if (item.hasChildNodes()) {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent;
    item.firstChild.replaceWith(span);
  }
});

document.addEventListener('click', (e) => {
  const title = e.target.closest('span');

  if (!title) {
    return;
  }

  const display = title.nextElementSibling.style.display;

  if (display === 'block') {
    title.nextElementSibling.style.display = 'none';
  } else {
    title.nextElementSibling.style.display = 'block';
  }
});
