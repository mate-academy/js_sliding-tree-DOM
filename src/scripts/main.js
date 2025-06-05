'use strict';

document.addEventListener('DOMContentLoaded', (ev) => {
  const titles = document.querySelectorAll('.title');

  titles.forEach((title) => {
    const childElement = title.nextElementSibling;

    if (childElement && childElement.tagName === 'ul') {
      title.style.display = 'none';
    }

    title.addEventListener('click', () => {
      // eslint-disable-next-line no-constant-condition
      childElement.style.display =
        childElement.style.display === 'none' ? 'block' : 'none';
    });
  });
});
