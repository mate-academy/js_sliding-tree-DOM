'use strict';

const list = document.querySelector('.tree');
const allLi = document.querySelectorAll('li');

for (const li of allLi) {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

list.addEventListener('click', (e) => {
  if (!e.target.closest('span')) {
    return;
  }

  const ul = e.target.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
