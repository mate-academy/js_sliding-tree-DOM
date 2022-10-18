'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

[...list].map((el) => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', ev => {
  const title = ev.target.nextSibling;

  if (title.hidden === false) {
    title.hidden = true;
  } else {
    title.hidden = false;
  }
});
