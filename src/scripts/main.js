'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach((el) => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', ev => {
  const title = ev.target.nextSibling;
  const prevTitleHiddenValue = title.hidden;

  title.hidden = !prevTitleHiddenValue;
});
