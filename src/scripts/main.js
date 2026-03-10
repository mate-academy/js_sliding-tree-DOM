'use strict';

document
  .querySelector('.tree')
  .querySelectorAll('li')
  .forEach((element) => {
    const treeItem = element.querySelector('ul');

    if (treeItem) {
      const span = document.createElement('span');

      span.textContent = element.firstChild.textContent;
      element.firstChild.replaceWith(span);

      span.addEventListener('click', () => {
        treeItem.hidden = !treeItem.hidden;
      });
    }
  });
