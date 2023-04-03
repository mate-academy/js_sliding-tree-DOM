'use strict';

document.querySelectorAll('li').forEach((li) => {
  if (li.querySelector('ul')) {
    const text = li.firstChild.textContent;

    li.firstChild.remove();

    const span = document.createElement('span');

    span.textContent = text;
    li.prepend(span);
  }
});

document.addEventListener('click', e => {
  const ul = e.target.closest('li').querySelector('ul');

  if (ul) {
    ul.style.display = getComputedStyle(ul).display === 'none'
      ? 'block'
      : 'none';
  }
});
