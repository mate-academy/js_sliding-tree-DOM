'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', (e) => {
  const item = e.target.closest('li');

  if (!item || !list.contains(item)) {
    return;
  }

  for (const i of item.children) {

    if (i.hidden === true) {
      i.hidden = false;
    } else {
      i.hidden = true;
    }
  }
});
