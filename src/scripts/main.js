'use strict';

document.querySelector('.tree').addEventListener('click', function(e) {
  const list = e.target.firstElementChild;

  if (e.target.tagName === 'LI' && list) {
    list.classList.toggle('hidden');
  }
});
