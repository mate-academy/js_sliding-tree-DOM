'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach((li) => {
  const span = document.createElement('span');

  span.classList.add('element');

  li.prepend(span);
  span.prepend(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (target.className === 'element') {
    if (target.nextSibling) {
      target.nextSibling.hidden = !target.nextSibling.hidden;
    }
  }
});
