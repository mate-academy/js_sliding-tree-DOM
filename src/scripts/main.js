'use strict';

const branches = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const branch of branches) {
  const span = document.createElement('span');

  branch.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
