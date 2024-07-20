'use strict';

const lis = document.querySelectorAll('li:has(ul)');

lis.forEach((el) => {
  const span = document.createElement('span');

  span.className = 'tree__headline';
  span.append(el.firstChild);
  span.after(el.firstElementChild);
  el.prepend(span);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const headLine = e.target.closest('.tree__headline');

  if (!headLine) {
    return;
  }

  if (headLine.nextSibling.style.display === 'none') {
    headLine.nextSibling.style.display = '';
  } else {
    headLine.nextSibling.style.display = 'none';
  }
});
