'use strict';

// write code here

const tree = document.querySelectorAll('.tree li');

tree.forEach((element) => {
  const text = element.firstChild;

  if (!text) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = text.textContent;

  text.remove();

  element.prepend(span);

  span.addEventListener('click', (e) => {
    const ul = span.nextElementSibling;

    if (!ul) {
      return;
    }

    ul.hidden = !ul.hidden;
  });
});
