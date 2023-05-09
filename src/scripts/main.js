'use strict';

const tree = document.querySelector('.tree');

function spanWrap(nodes) {
  [...nodes].forEach(node => {
    if (node.children.length > 0) {
      spanWrap(node.children);

      if (node.tagName === 'LI') {
        const span = document.createElement('span');

        node.prepend(span);
        span.append(span.nextSibling);
      }
    }
  });
}

spanWrap(tree.children);

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childNode = e.target.closest('li').lastElementChild;

  childNode.hidden = !childNode.hidden;
});
