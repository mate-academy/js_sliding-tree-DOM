'use strict';

const itemsList = document.querySelectorAll('li');

for (const item of itemsList) {
  const span = document.createElement('span');

  if (item.querySelector('ul')) {
    span.classList.add('span__collapse');
    span.textContent = item.firstChild.textContent;
    item.firstChild.replaceWith(span);
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const item = e.target.closest('.span__collapse');

  if (!item) {
    return;
  }

  item.nextElementSibling.hidden = !item.nextElementSibling.hidden;
});
