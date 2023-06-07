'use strict';

const tree = document.querySelector('.tree');
const headlines = document.querySelectorAll('li');

headlines.forEach((headline) => {
  const span = document.createElement('span');

  headline.prepend(span);

  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (!e.target.closest('li')) {
    return;
  }

  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
