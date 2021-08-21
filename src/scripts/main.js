'use strict';

const list = document.querySelector('.tree');

const listLiArr = [...list.querySelectorAll('li')];

for (const li of listLiArr) {
  if (li.querySelector('ul')) {
    const liHeader = li.firstChild;

    const span = document.createElement('span');

    span.textContent = liHeader.textContent;

    span.addEventListener('click', (e) => {
      if (e.target.nextElementSibling.style.display === 'none') {
        e.target.nextElementSibling.style.display = 'block';
        e.target.style.fontWeight = 'normal';
      } else {
        e.target.nextElementSibling.style.display = 'none';
        e.target.style.fontWeight = 'bold';
      }
    });

    liHeader.before(span);

    liHeader.remove();
  }
}
