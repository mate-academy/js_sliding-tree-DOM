'use strict';

document.querySelectorAll('li').forEach((item) => {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    span.classList.add('tree__headline');
    span.append(item.firstChild);
    item.prepend(span);
  }
});

document.querySelector('.tree').addEventListener('click', (e) => {
  const headLine = e.target.closest('.tree__headline');

  if (headLine) {
    headLine.nextSibling.hidden = !headLine.nextSibling.hidden;
  }
});
