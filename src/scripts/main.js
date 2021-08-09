'use strict';

document.querySelectorAll('li').forEach(el => {
  const wrapSpan = document.createElement('span');

  wrapSpan.append(el.firstChild);
  el.prepend(wrapSpan);
});

document.querySelector('.tree').addEventListener('click', (e) => {
  const folder = e.target.closest('span');

  folder.nextElementSibling.hidden = !folder.nextElementSibling.hidden;
});
