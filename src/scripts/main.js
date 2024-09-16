'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((item) => {
  const textNode = item.firstChild;
  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  item.replaceChild(span, textNode);

  span.addEventListener('click', () => {
    const sublist = item.querySelector('ul');

    if (sublist) {
      if (sublist.style.display === 'none') {
        sublist.style.display = 'block';
      } else {
        sublist.style.display = 'none';
      }
    }
  });
});
