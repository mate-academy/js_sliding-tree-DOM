'use strict';

const tree = document.querySelector('.tree');
const treeElements = document.querySelectorAll('li');

for (const element of treeElements) {
  const elementWrapper = document.createElement('span');

  element.prepend(elementWrapper);
  elementWrapper.append(elementWrapper.nextSibling);
}

tree.addEventListener('click', event => {
  const target = event.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  target.nextElementSibling.hidden = !target.nextElementSibling.hidden;
});
