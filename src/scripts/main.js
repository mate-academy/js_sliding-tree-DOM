'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const li of list) {
  const p = document.createElement('p');

  li.prepend(p);
  p.append(p.nextSibling);
}

tree.addEventListener('click', () => {
  if (event.target.tagName !== 'P') {
    return;
  }

  const item = event.target.parentNode.querySelector('ul');

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
});
