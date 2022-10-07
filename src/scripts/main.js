'use strict';

const list = document.querySelector('.tree');
const listEls = document.querySelectorAll('.tree li');

[...listEls].map(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

list.onclick = function(ev) {
  const hide = ev.target.nextSibling;

  hide.hidden = !hide.hidden;
};
