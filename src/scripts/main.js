'use strict';

const li = document.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);

  document.addEventListener('click', e => {
    const { closest, nextSibling } = e.target;

    if (closest('span')) {
      nextSibling.hidden = !nextSibling.hidden;
    }
  });
}
