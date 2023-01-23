'use strict';

const li = document.querySelectorAll('li');
const main = document.querySelector('.tree');

[...li].forEach(el => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

main.addEventListener('click', e => {
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
