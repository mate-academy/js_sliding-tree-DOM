'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(el => {
  if (!el.children.length) {
    return;
  }

  const elements = el;
  const span = document.createElement('span');

  span.textContent = `${elements.childNodes[0].data}`;
  el.childNodes[0].remove();

  el.childNodes[0].before(span);
});

list.addEventListener('click', (ev) => {
  const span = ev.target.closest('SPAN');
  if (!span || !list.contains(span)) {
    return;
  }

  span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
});
