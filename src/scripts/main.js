'use strict';

const dataTree = document.querySelector('.tree');

function modList(node) {
  for (const el of node.children) {
    const span = document.createElement('span');
    const ul = el.querySelector('ul');

    span.innerHTML = el.firstChild.textContent;
    el.firstChild.replaceWith(span);

    if (ul) {
      el.firstChild.addEventListener('click', () => {
        ul.hidden = !ul.hidden;
      });

      modList(ul);
    }
  }
}

modList(dataTree);
