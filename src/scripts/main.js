'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  // Select all the list items that have nested lists
  const items = document.querySelectorAll('.tree li');

  items.forEach((item) => {
    const span = document.createElement('span');

    span.style.cursor = 'pointer';
    span.textContent = item.firstChild.textContent;

    span.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the event from bubbling up

      const childUl = item.querySelector('ul');

      if (childUl) {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      }
    });

    // Replace the text node with the span
    item.insertBefore(span, item.firstChild);
    item.firstChild.nodeValue = '';
  });
});
