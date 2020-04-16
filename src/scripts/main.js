'use strict';

const tree = document.querySelector('.tree');
const listLi = document.querySelectorAll('li');

for (const li of listLi) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const element = e.target;

  if (element.tagName !== 'SPAN') {
    return;
  }

  const listChildren = e.target.parentNode.querySelector('ul');

  listChildren.hidden = !listChildren.hidden;
});
