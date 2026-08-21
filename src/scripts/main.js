'use strict';

const tree = document.querySelector('.tree');

const list = tree.querySelectorAll('li');

list.forEach((el) => {
  const span = document.createElement('span');

  span.append(el.firstChild);
  el.prepend(span);
});

tree.addEventListener('click', (e) => {
  const li = e.target.parentNode;
  const ulInIl = li.querySelector('ul');

  ulInIl.hidden = !ulInIl.hidden;
});
