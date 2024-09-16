'use strict';

const li = [...document.querySelectorAll('li')];

li.forEach(item => {
  const title = item.firstChild;
  const span = document.createElement('span');
  const list = item.querySelector('ul');

  if (!list) {
    return;
  }

  title.replaceWith(span);
  span.textContent = title.data.trim();

  span.addEventListener('click', () => {
    list.hidden = !list.hidden;
  });
});
