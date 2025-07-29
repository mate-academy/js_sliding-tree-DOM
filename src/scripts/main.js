'use strict';

const getHeader = document.querySelectorAll('li');

getHeader.forEach((li) => {
  const firstChild = li.firstChild;

  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = firstChild.textContent.trim();

    li.insertBefore(span, firstChild);
    li.removeChild(firstChild);

    span.addEventListener('click', () => {
      const ul = li.querySelector('ul');

      if (ul) {
        ul.hidden = !ul.hidden;
      }
    });
  }
});
