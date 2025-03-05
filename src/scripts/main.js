'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const list = e.target.nextSibling;

  if (list) {
    list.hidden = !list.hidden;
  }
});

function spanWrapper() {
  const list = document.querySelectorAll('.tree li');

  list.forEach((item) => {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  });
}

spanWrapper();
