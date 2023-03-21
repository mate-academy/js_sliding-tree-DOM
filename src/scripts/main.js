'use strict';

const li = document.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);

  document.addEventListener('click', e => {
    if (e.target.closest('span')) {
      e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
    }
  });
}
