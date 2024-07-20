'use strict';

document.querySelectorAll('li').forEach((item) => {
  if (!item.querySelector('ul')) {
    return;
  }

  const span = document.createElement('span');

  span.className = 'tree__headline';
  span.append(item.firstChild);
  span.after(item.firstElementChild);
  item.prepend(span);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const headLine = e.target.closest('.tree__headline');

  if (!headLine) {
    return;
  }

  headLine.nextSibling.style.display = headLine.nextSibling.style.display
    ? ''
    : 'none';
});
