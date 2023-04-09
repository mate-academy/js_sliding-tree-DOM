'use strict';

const list = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const item of li) {
  if (item.children.length) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  };
}

list.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const element = e.target.parentNode.children[1];

  element.hidden = !element.hidden;
});
