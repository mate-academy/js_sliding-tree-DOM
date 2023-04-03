'use strict';

document.addEventListener('click', e => {
  const ul = e.target.closest('li').querySelector('ul');

  if (ul) {
    ul.style.display = getComputedStyle(ul).display === 'none'
      ? 'block'
      : 'none';

    ul.style.pointerEvents = 'none';
  }
});

document.querySelectorAll('li').forEach(li => {
  li.style.cursor = 'pointer';
});
