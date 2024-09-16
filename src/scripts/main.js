'use strict';

const treeItems = document.querySelectorAll('.tree > li, .tree > li > ul > li');
const li = document.querySelectorAll('li');

treeItems.forEach((item) => {
  const textNode = item.firstChild;
  const span = document.createElement('span');

  span.textContent = textNode.textContent;
  item.replaceChild(span, textNode);
});

li.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.stopPropagation();

    if (element.children.length > 0) {
      if (element.lastElementChild.style.display === 'none') {
        element.lastElementChild.style.display = 'block';
      } else {
        element.lastElementChild.style.display = 'none';
      }
    }
  });
});
