'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

for (const i of headers) {
  const span = document.createElement('span');

  i.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
