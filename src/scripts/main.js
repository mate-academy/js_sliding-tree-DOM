'use strict';

// Find the root tree container
const tree = document.querySelector('.tree') || document.querySelector('ul');

if (tree) {
  // Dynamically wrap each header text in a span element
  const listItems = tree.querySelectorAll('li');

  listItems.forEach((li) => {
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      const span = document.createElement('span');

      // Move all child nodes before the sub-list into the span
      while (li.firstChild && li.firstChild !== nestedUl) {
        span.appendChild(li.firstChild);
      }

      li.insertBefore(span, nestedUl);
    }
  });

  // Attach a single click listener using event delegation
  tree.addEventListener('click', (e) => {
    // Ignore clicks that are not directly on a span element
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    // Find the associated nested sub-list within the parent list item
    const parentLi = e.target.closest('li');

    if (!parentLi) {
      return;
    }

    const targetUl = parentLi.querySelector('ul');

    if (targetUl) {
      // Toggle the visibility using the HTML5 hidden attribute
      targetUl.hidden = !targetUl.hidden;
    }
  });
}
