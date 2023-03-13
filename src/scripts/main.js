'use strict';

const treeMain = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const li of listItems) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

treeMain.addEventListener('click', (e) => {
  const id = e.target.parentNode.querySelector('span');

  if (!id) {
    return;
  }

  if (id.nextSibling === null) {
    return;
  }

  id.nextSibling.hasAttribute('hidden')
    ? id.nextSibling.removeAttribute('hidden')
    : id.nextSibling.setAttribute('hidden', '');
});
