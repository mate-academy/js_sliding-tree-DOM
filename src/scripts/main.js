'use strict';

Array.from(document.querySelectorAll('li')).forEach(lishka => {
  const span = document.createElement('span');

  lishka.prepend(span);
  span.append(span.nextSibling);

  span.addEventListener('click', () => {
    if (span.nextSibling) {
      if (span.nextSibling.style.display === 'none') {
        span.nextSibling.style.display = 'block';
      } else {
        span.nextSibling.style.display = 'none';
      }
    }
  }, false);
});
