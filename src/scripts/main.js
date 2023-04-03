'use strict';

document.addEventListener('click', e => {
  const ul = e.target.closest('li').querySelector('ul');

  if (ul) {
    ul.style.display = getComputedStyle(ul).display === 'none'
      ? 'block'
      : 'none';
  }
});
