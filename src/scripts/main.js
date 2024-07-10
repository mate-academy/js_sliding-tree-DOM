'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  // Select all the list items that have nested lists
  const items = document.querySelectorAll('.tree li');

  items.forEach((item) => {
    const span = document.createElement('span');

    span.style.cursor = 'pointer';
    // Extract the text content from the list item and set it as the span's text
    span.textContent = item.childNodes[0].nodeValue.trim();

    span.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the event from bubbling up

      const childUl = item.querySelector('ul');

      if (childUl) {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      }
    });

    // Replace the text node with the span
    item.insertBefore(span, item.childNodes[0]);
    item.removeChild(item.childNodes[1]);
  });
});
