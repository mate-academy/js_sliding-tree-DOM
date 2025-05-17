'use strict';

document
  .querySelector('.tree')
  .querySelectorAll('li')
  .forEach((li) => {
    if (li.children.length) {
      const span = document.createElement('span');

      li.prepend(span);
      span.append(span.nextSibling);
      span.addEventListener('click', function (e) {
        if (e.target.tagName !== 'SPAN') {
          return;
        }

        e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
      });
    }
  });
