'use strict';

const liAll = document.querySelectorAll('li');
const ulAll = document.querySelectorAll('ul');

for (const li of liAll) {
  const span = document.createElement('span');

  span.append(li.firstChild);
  li.prepend(span);

  for (const ul of ulAll) {
    if (li.contains(ul)) {
      li.classList.add('tree_header');
    }
  }
}

document.querySelector('.tree').addEventListener('click', e => {
  const item = e.target;

  if (!item.parentElement.classList.contains('tree_header')) {
    return;
  }

  const itemToRoll = item.nextSibling;

  (itemToRoll.hidden) ? itemToRoll.hidden = false : itemToRoll.hidden = true;
});
