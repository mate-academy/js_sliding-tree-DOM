'use strict';

const tree = document.querySelector('.tree');
const liContainer = document.querySelectorAll('li');

for (const li of liContainer) {
  if (li.children.length) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (ev) => {
  if (ev.target.tagName !== 'SPAN') {
    return;
  }

  const ul = ev.target.nextSibling;

  ul.hidden = !ul.hidden;
});
