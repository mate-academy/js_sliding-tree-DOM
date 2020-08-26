'use strict';

document.body.style.overflowX = 'hidden';

document.querySelectorAll('ul').forEach(ul => {
  ul.style.transitionDuration = '0.5s';
});

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

    if (ul.style.transform !== 'translateX(100vw)') {
      ul.style.transform = 'translateX(100vw)';

      setTimeout(() => {
        // ul.hidden = true;
        ul.style.height = 0;
      }, 500);
    } else {
      // ul.hidden = false;
      ul.style.height = 'auto';

      setTimeout(() => {
        ul.style.transform = 'translateX(0)';
      }, 500);
    }
  });
});
