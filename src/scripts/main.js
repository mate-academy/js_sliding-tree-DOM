'use strict';

const li = document.querySelectorAll('li');

li.forEach((item) => {
  const text = item.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = text;

  item.firstChild.textContent = '';

  item.prepend(span);
});

document.addEventListener('click', (e) => {
  const title = e.target.closest('li');

  if (title.lastElementChild.style.display === 'none') {
    title.lastElementChild.style.display = 'block';
  } else {
    title.lastElementChild.style.display = 'none';
  }
});
