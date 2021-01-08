'use strict';

const root = document.querySelector('.tree');

root.querySelectorAll('ul').forEach(item => creating(item));
root.addEventListener('click', e => hiding(e));

function creating(item) {
  const elem = item.previousSibling;

  elem.parentNode.insertAdjacentHTML('afterbegin',
    `<span>${elem.textContent.trim()}</span>`);

  elem.textContent = '';
}

function hiding(e) {
  if (e.target.matches('span')) {
    const child = e.target.nextElementSibling;

    child.hidden = !child.hidden;
  }
}
