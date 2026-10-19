'use strict';

const list = document.querySelectorAll('.tree li:has(> ul)');

for (const item of list) {
  const span = document.createElement('span');

  span.classList.add('tree__toggle');
  span.append(item.firstChild);
  item.prepend(span);
}

document.querySelector('.tree').addEventListener('click', (e) => {
  const toggle = e.target.closest('.tree__toggle');

  if (toggle) {
    const sublist = toggle.nextElementSibling;

    sublist.hidden = !sublist.hidden;
  }
});
