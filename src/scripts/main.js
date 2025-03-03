'use strict';

const list = document.querySelector('.tree');
const li = document.querySelectorAll('li');

[...li].forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  const item = e.target.closest('span');

  if (item) {
    const ul = e.target.nextSibling.closest('ul');

    ul.hidden = !ul.hidden;
  }
});
