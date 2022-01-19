'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
};

tree.addEventListener('click', (ev) => {
  const li = ev.target.closest('span');

  if (!li) {
    return;
  }
  li.nextSibling.hidden = !li.nextSibling.hidden;
});
