'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  tree.addEventListener('click', (e) => {
    const clickedElement = e.target;

    // Check if the clicked element is a span inside an li element
    if (clickedElement.tagName === 'SPAN'
    && clickedElement.parentElement.tagName === 'LI') {
      // Toggle the visibility of the nested ul element
      const sublist = clickedElement.parentElement.querySelector('ul');

      if (sublist) {
        sublist.style.display = sublist.style.display
        === 'none' ? 'block' : 'none';
      }
    }
  });
});
