'use strict';

const hidingTree = document.querySelector('ul');
const allLiTags = document.querySelectorAll('li');

for (const item of allLiTags) {
  const liItem = item.firstChild;
  const spanElement = document.createElement('span');

  spanElement.append(liItem);
  item.prepend(spanElement);
}

hidingTree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.parentNode;
  const childrenContainer = parentLi.querySelector('ul');

  if (childrenContainer) {
    childrenContainer.hidden = !childrenContainer.hidden;
  }
});
