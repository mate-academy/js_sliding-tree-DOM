'use strict';

const lis = document.querySelectorAll('.tree li');

lis.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

lis.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.tagName === 'SPAN') {
      const sub = el.querySelector('ul');

      if (sub) {
        sub.hidden = !sub.hidden;
      }
    }
  });
});
