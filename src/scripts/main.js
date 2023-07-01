'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  function labelTree(item) {
    if (!item?.children?.length) {
      return;
    }

    for (const child of item.children) {
      if (child.tagName === 'LI') {
        const span = document.createElement('span');

        child.prepend(span);
        span.append(span.nextSibling);
        labelTree(child.querySelector('ul'));
      }
    }
  }

  labelTree(tree);

  tree.addEventListener('click', function(e) {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const childrenContainer = e.target.parentNode.querySelector('ul');

    if (!childrenContainer) {
      return;
    };

    childrenContainer.hidden = !childrenContainer.hidden;

    if (childrenContainer.hidden) {
      const nestedLists = childrenContainer.querySelectorAll('ul');

      for (const list of nestedLists) {
        list.hidden = true;
      }
    }
  });
});
