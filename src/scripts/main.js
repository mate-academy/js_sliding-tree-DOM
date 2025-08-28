'use strict';

const li = document.querySelectorAll('li');

li.forEach((n) => {
  const first = n.firstChild;
  const span = document.createElement('span');

  span.textContent = first.textContent;

  n.replaceChild(span, first);
});

const forSpan = document.querySelectorAll('span');

forSpan.forEach((n) => {
  n.addEventListener('click', (el) => {
    const ul = el.currentTarget.nextElementSibling;

    if (ul && ul.tagName === 'UL') {
      const show = ul.style.display;

      if (show === 'none') {
        ul.style.display = 'block';
      } else {
        ul.style.display = 'none';
      }
    }
  });
});
