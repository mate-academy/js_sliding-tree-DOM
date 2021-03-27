'use strict';

function slidingTree() {
  const fruits = document.querySelectorAll('li');
  const tree = document.querySelector('.tree');

  for (const li of fruits) {
    const elementSpan = document.createElement('span');

    li.prepend(elementSpan);
    elementSpan.append(elementSpan.nextSibling);
  };

  tree.onclick = function(click) {
    if (click.target.tagName !== 'SPAN') {
      return null;
    }

    const childrenContainer = click.target.parentNode.querySelector('ul');

    if (!childrenContainer) {
      return null;
    }

    childrenContainer.hidden = !childrenContainer.hidden;
  };
}

slidingTree();
