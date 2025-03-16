'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach((item) => {
  const wrap = document.createElement('span');

  item.prepend(wrap);
  wrap.prepend(wrap.nextSibling);
});

list.addEventListener('click', (action) => {
  if (action.target.tagName === 'SPAN') {
    const el = action.target.nextSibling;

    if (el) {
      el.hidden = !el.hidden;
    }
  }
});
