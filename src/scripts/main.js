'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.tree li');

  titles.forEach((title) => {
    const span = document.createElement('span');

    span.textContent = title.firstChild.textContent.trim(); // copy w/out spaces

    // replace text with span
    title.firstChild.replaceWith(span);

    span.addEventListener('click', (e) => {
      e.stopPropagation(); // stop expanding event on other elements

      const childrenContainer = title.querySelector('ul');

      if (childrenContainer) {
        if (childrenContainer.style.display === 'block') {
          childrenContainer.style.display = 'none';
        } else {
          childrenContainer.style.display = 'block';
        }
      }
    });
  });
});
