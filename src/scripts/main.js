'use strict';

const titles = document.querySelectorAll('.tree li');

titles.forEach((title) => {
  const span = document.createElement('span');

  span.textContent = title.firstChild.textContent.trim(); // copy w/out spaces

  // replace text with span
  title.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    const childrenContainer = title.querySelector('ul');

    if (!childrenContainer.style.display) {
      childrenContainer.style.display = 'block';
    }

    if (childrenContainer.style.display === 'block') {
      childrenContainer.style.display = 'none';
    } else {
      childrenContainer.style.display = 'block';
    }
  });
});
