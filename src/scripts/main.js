'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((item) => {
    const textSpan = document.createElement('span');

    textSpan.textContent = item.firstChild.textContent.trim();

    item.insertBefore(textSpan, item.firstChild);
    item.firstChild.nextSibling.remove();

    textSpan.addEventListener('click', (ev) => {
      const subList = item.querySelector('ul');

      if (subList) {
        subList.style.display =
          subList.style.display === 'none' ? 'block' : 'none';
      }
      ev.stopPropagation();
    });
  });
});
