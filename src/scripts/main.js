'use strict';

const liItems = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const liItem of liItems) {
  if (liItem.children.length > 0) {
    const span = document.createElement('span');

    span.classList.add('ul--wrapper');
    span.textContent = liItem.firstChild.textContent;
    liItem.firstChild.replaceWith(span);
  }
}

tree.addEventListener('click', e => {
  const headerEl = e.target.closest('.ul--wrapper');

  if (!headerEl) {
    return;
  }

  headerEl.nextElementSibling.hidden = !headerEl.nextElementSibling.hidden;
});
