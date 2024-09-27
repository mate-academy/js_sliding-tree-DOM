'use strict';

const tree = document.querySelector('.tree');
const colection = tree.querySelectorAll('li');

for (const item of colection) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);

  tree.onclick = function(e) {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const childrenContainer = e.target.parentNode.querySelector('ul');

    if (!childrenContainer) {
      return;
    };

    childrenContainer.hidden = !childrenContainer.hidden;
  };
};
