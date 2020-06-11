'use strict';

document.querySelector('.tree').addEventListener('click', function(e) {
  const title = e.target.firstChild;
  const list = title.nextElementSibling;

  if (e.target.tagName !== 'LI' || !list) {
    return;
  }

  list.classList.toggle('hidden');
});
