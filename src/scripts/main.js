'use strict';

const liAll = document.querySelectorAll('li');
const ulAll = document.querySelectorAll('ul');

for (const li of liAll) {
  for (const ul of ulAll) {
    if (li.contains(ul)) {
      li.classList.add('tree_header');
    }
  }
}

document.querySelector('.tree').addEventListener('click', e => {
  const item = e.target;

  if (!item.classList.contains('tree_header')) {
    return;
  }

  const itemToRoll = item.firstElementChild;

  (itemToRoll.hidden) ? itemToRoll.hidden = false : itemToRoll.hidden = true;
});
