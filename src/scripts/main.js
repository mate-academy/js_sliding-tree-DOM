/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  function labelTree(item) {
    console.log(item);

    if (!item) {
      return;
    }

    if (!item.children.length) {
      return;
    };

    for (const child of item.children) {
      console.log(child);

      if (child.tagName === 'LI') {
        const span = document.createElement('span');

        child.prepend(span); // inserting span as first element in list
        span.append(span.nextSibling); // appending the element to span that was supposed to be next to it;
        labelTree(child.querySelector('ul')); // recursion, look for ul inside current li el,
        // if it finds one, start labelTree all over again.
      }

      // console.log(child);
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
