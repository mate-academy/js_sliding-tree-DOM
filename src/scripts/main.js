'use strict';

const tree = document.querySelectorAll('li');

for (const element of tree) {
  if (element.querySelector('ul')) {
    const span = document.createElement('span');

    span.append(element.firstChild);
    element.prepend(span);
  }
}

document.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
});
