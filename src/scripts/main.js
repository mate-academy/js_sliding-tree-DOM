'use strict';

const li = [...document.querySelectorAll('li')];

li.forEach((item) => {
  const text = item.childNodes[0];

  if (text.nodeType === 3) {
    const span = document.createElement('span');

    span.textContent = text.textContent.trim();
    text.replaceWith(span);

    span.addEventListener('click', () => {
      const ulInside = item.querySelector('ul');

      if (!ulInside) {
        return;
      }

      if (ulInside.style.display === 'none') {
        ulInside.style.display = '';
      } else {
        ulInside.style.display = 'none';
      }
    });
  }
});
