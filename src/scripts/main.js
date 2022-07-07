'use strict';

const elements = document.querySelectorAll('li');

for (const element of elements) {
  if (element.childElementCount > 0) {
    const span = document.createElement('span');

    span.innerText = element.firstChild.data;
    element.firstChild.replaceWith(span);

    span.addEventListener('click', (el) => {
      const item = el.target.closest('span').nextSibling;

      item.hidden = !item.hidden;
    });
  }
}
