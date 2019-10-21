'use strict';
const tree = document.querySelector('.tree');
for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');
  span.classList.add('show');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }
  const childContainer = e.target.parentNode.querySelector('ul');
  if (!childContainer) {
    return;
  }
  childContainer.hidden = !childContainer.hidden;
};
