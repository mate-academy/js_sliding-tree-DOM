'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

[...li].map((item) => {
  const span = document.createElement('span');

  if (item.childElementCount > 0) {
    item.prepend(span);
    span.prepend(span.nextSibling);
  };
});

tree.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    event.target.nextSibling.hidden
    = !event.target.nextSibling.hidden;
  };
});
