'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tree li');

  items.forEach((li) => {
    const sublist = li.querySelector('ul');

    if (sublist) {
      const textNode = li.firstChild;
      const span = document.createElement('span');

      span.textContent = textNode.textContent;
      li.insertBefore(span, textNode);
      li.removeChild(textNode);

      span.style.cursor = 'pointer';

      span.addEventListener('click', () => {
        sublist.style.display =
          sublist.style.display === 'none' ? 'block' : 'none';
      });
    }
  });
});
