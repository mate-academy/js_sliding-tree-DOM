'use strict';

const li = document.querySelectorAll('li');

li.forEach((item) => {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = item.firstChild.textContent.trim().replace('\n', '');
    item.firstChild.replaceWith(span);
  }
});

const togglers = document.querySelectorAll('span');

togglers.forEach((item) => {
  item.addEventListener('click', () => {
    item.nextElementSibling.style.display =
      item.nextElementSibling.style.display === 'none' ? 'block' : 'none';
  });
});
