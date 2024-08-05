'use strict';

document.addEventListener('DOMContentLoaded', DOMready);

function DOMready() {
  const tree = document.querySelector('.tree');

  markHeaders(tree);

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const childUl = e.target.parentNode.querySelector('ul');

      childUl.hidden = !childUl.hidden;
    }
  });
}

function markHeaders(list) {
  const allLi = list.querySelectorAll('li');

  for (const li of allLi) {
    if (li.children.length > 0) {
      const span = document.createElement('span');

      li.prepend(span);
      span.append(span.nextSibling);
    }
  }
}
