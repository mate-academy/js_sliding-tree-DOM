'use strict';

document.querySelectorAll('li').forEach((item) => {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();
    item.firstChild.replaceWith(span);
  }
});

document.querySelector('.tree').addEventListener('click', (e) => {
  const headLine = e.target.closest('span');

  if (headLine) {
    headLine.nextSibling.style.display = headLine.nextSibling.style.display
      ? ''
      : 'none';
  }
});
