'use strict';

// write code here
const lists = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of items) {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.firstChild.replaceWith(span);
}

lists.addEventListener('click', e => {
  if (e.target.nextSibling.hidden) {
    e.target.nextSibling.hidden = false;

    return;
  }

  e.target.nextSibling.hidden = true;
});
