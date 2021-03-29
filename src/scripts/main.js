'use strict';

function slidingTree() {
  const listItems = document.querySelectorAll('li');
  const tree = document.querySelector('.tree');

  for (const li of listItems) {
    const elementSpan = document.createElement('span');

    li.prepend(elementSpan);
    elementSpan.append(elementSpan.nextSibling);
  };

  tree.addEventListener('click', function(click) {
    if (click.target.tagName !== 'SPAN') {
      return null;
    }

    const childrenContainer = click.target.parentNode.querySelector('ul');

    if (!childrenContainer) {
      return null;
    }

    childrenContainer.hidden = !childrenContainer.hidden;
  });
}

slidingTree();
