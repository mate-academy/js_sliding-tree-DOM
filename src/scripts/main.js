'use strict';

const root = document.querySelector('.tree');

root.querySelectorAll('ul').forEach(item => wrapInSpan(item));
root.addEventListener('click', e => hideElement(e));

function wrapInSpan(item) {
  const elem = item.previousSibling;

  elem.parentNode.insertAdjacentHTML('afterbegin',
    `<span>${elem.textContent.trim()}</span>`);

  elem.textContent = '';
}

function hideElement(e) {
  if (e.target.matches('span')) {
    const child = e.target.nextElementSibling;

    child.hidden = !child.hidden;
  }
}
