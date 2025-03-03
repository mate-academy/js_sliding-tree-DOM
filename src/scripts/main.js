'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const list = e.target.nextSibling;

  if (list) {
    list.hidden = !list.hidden;
  }
});

function spanWraper() {
  const liElements = tree.querySelectorAll('li');

  liElements.forEach((li) => {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  });
}

spanWraper();
