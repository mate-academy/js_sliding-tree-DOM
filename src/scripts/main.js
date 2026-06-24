'use strict';

const items = document.querySelectorAll('li:has(ul)');

items.forEach((li) => {
  const text = li.firstChild.textContent;

  li.firstChild.remove();

  const span = document.createElement('span');

  span.textContent = text;

  li.prepend(span);

  span.addEventListener('click', () => {
    const ul = li.querySelector('ul');

    ul.style.display = ul.style.display === 'none' ? '' : 'none';
  });
});
