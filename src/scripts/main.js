'use strict';

const tree = document.querySelector('.tree');
const lis = tree.querySelectorAll('li');

for (const li of lis) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const target = e.target.closest('SPAN');

  if (!target || !target.nextSibling) {
    return;
  }

  target.nextSibling.hidden = !target.nextSibling.hidden;
});
