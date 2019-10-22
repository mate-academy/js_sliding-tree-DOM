'use strict';
const tree = document.querySelector('.tree');
const allLiAtTree = tree.querySelectorAll('li');
for (const li of allLiAtTree) {
  const span = document.createElement('span');
  span.classList.add('show');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const childContainer = e.target.parentNode.querySelector('ul');
  if (e.target.tagName !== 'SPAN' || !childContainer) {
    return;
  }
  childContainer.hidden = !childContainer.hidden;
});
