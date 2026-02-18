'use strict';

const lists = document.querySelectorAll('.tree li');

lists.forEach((list) => {
  if (list.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = list.firstChild.textContent.trim().replaceAll('\n', '');
    list.firstChild.replaceWith(span);
  }
});

const switches = document.querySelectorAll('.tree span');

switches.forEach((item) => {
  item.addEventListener('click', () => {
    const target = item.nextElementSibling;

    if (!target) {
      return;
    }

    target.style.display = target.style.display === 'none' ? 'block' : 'none';
  });
});
