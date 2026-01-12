'use strict';

// write code here
const items = document.querySelectorAll('.tree li');

items.forEach((el) => {
  const sp = document.createElement('span');

  sp.append(el.firstChild);

  el.prepend(sp);

  const subList = el.querySelector('ul');

  if (subList) {
    sp.addEventListener('click', (e) => {
      if (subList.hidden) {
        subList.hidden = false;
      } else {
        subList.hidden = true;
      }
    });
  }
});
