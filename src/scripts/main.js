'use strict';

const li = document.querySelectorAll('li');

for (const item of li) {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const item = e.target.nextSibling;

  if (item.hidden === true) {
    item.hidden = false;
  } else {
    item.hidden = true;
  }
});
