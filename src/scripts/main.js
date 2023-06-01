'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');
const ul = document.querySelectorAll('ul');

[...li].forEach(el => {
  const span = document.createElement('span');

  Array.from(ul).forEach(ulEl => {
    if (el.contains(ulEl)) {
      el.prepend(span);
    }
  });

  span.prepend(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  };

  const content = e.target.nextSibling;

  content.hidden = !content.hidden;
});
