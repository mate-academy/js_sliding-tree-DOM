'use strict';

const tree = document.querySelector('.tree');

document.addEventListener('DOMContentLoaded', () => {
  for (const li of tree.querySelectorAll('li')) {
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      const span = document.createElement('span');

      span.textContent = li.firstChild.nodeValue.trim();
      li.firstChild.nodeValue = '';
      li.prepend(span);

      span.addEventListener('click', () => {
        nestedUl.hidden = !nestedUl.hidden;
      });
    }
  }
});
