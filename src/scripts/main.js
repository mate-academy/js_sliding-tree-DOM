'use strict';

const li = document.querySelectorAll('li');

for (const item of li) {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    span.className = 'move';
    span.append(item.childNodes[0]);
    item.prepend(span);
  }
}

document.addEventListener('click', (el) => {
  if (el.target.classList.contains('move')) {
    el.target.nextElementSibling.hidden
    = !el.target.nextElementSibling.hidden;
  }
});
