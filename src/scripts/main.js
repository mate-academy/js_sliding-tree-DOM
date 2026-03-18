'use strict';

const tree = document.querySelector('.tree');
const node = document.querySelectorAll('li');

for (const li of node) {
  const isUl = li.querySelector('ul');

  if (isUl) {
    const span = document.createElement('span');

    li.prepend(span);

    span.append(li.childNodes[1]);
  }
}

tree.addEventListener('click', (_event) => {
  if (_event.target.tagName === 'SPAN') {
    const subClick = _event.target.nextElementSibling;

    subClick.hidden = !subClick.hidden;
  }
});
