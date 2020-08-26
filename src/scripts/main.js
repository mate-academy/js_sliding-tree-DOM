'use strict';

const points = document.querySelectorAll('li');

points.forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling);

  span.addEventListener('click', (event) => {
    const ul = span.parentElement.children[1];

    if (!ul) {
      return;
      // I need it because of next sybbling or current variant will throw
      // error in console if I touch Cherry or other childrenless element
    }

    if (window.getComputedStyle(ul).display !== 'none') {
      ul.style.display = 'none';
    } else {
      ul.style.display = 'block';
    }
  });
});
