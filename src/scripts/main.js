'use strict';

const allLi = document.querySelectorAll('li');

for (const item of allLi) {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    span.className = 'headerName';
    span.append(item.childNodes[0]);
    item.prepend(span);
  }
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('headerName')) {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
