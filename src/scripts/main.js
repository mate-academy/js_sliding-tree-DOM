'use strict';

const list = document.querySelector('.tree');
const itemsList = list.querySelectorAll('li');

for (const item of itemsList) {
  if (item.firstElementChild) {
    const span = document.createElement('span');

    span.className = 'title';
    span.textContent = item.firstChild.textContent;

    item.firstChild.replaceWith(span);
  }
}

list.addEventListener('click', (clickEvent) => {
  const targetSibling = clickEvent.target.nextSibling;

  if (targetSibling) {
    targetSibling.hidden = !targetSibling.hidden;
  }
});
