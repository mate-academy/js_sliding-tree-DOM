'use strict';

document.addEventListener('click', (e) => {
  const clicked = e.target.closest('li');

  if (!clicked) {
    return 0;
  }

  const ul = clicked.querySelectorAll(':scope > ul');

  if (!ul) {
    return;
  }

  for (const u of ul) {
    u.style.display = u.style.display === 'none' ? 'block' : 'none';
  }
});
