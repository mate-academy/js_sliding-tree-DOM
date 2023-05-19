'use strict';

const tree = document.querySelector('.tree');
const headlines = document.querySelectorAll('.tree li');

headlines.forEach((headline) => {
  const span = document.createElement('span');

  headline.prepend(span);

  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const node = e.target.closest('span');

  if (node && node.nextSibling) {
    node.nextSibling.hidden = !node.nextSibling.hidden;
  }
});
