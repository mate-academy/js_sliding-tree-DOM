'use strict';

[...document.querySelectorAll('li')].forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent;
  li.firstChild.textContent = '';
  li.prepend(span);
});

document.querySelector('.tree').addEventListener('click', (e) => {
  const li = e.target.closest('li');

  if (li.children.length > 1 && e.target === li.firstChild) {
    if (li.lastElementChild.style.display === 'none') {
      li.lastElementChild.style.display = 'block';
    } else {
      li.lastElementChild.style.display = 'none';
    }
  }
});
