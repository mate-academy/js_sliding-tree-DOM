'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((item) => {
  const textNode = item.firstChild;

  const category = document.createElement('span');

  category.textContent = textNode.textContent.trim();

  item.replaceChild(category, textNode);

  category.onclick = () => {
    const categoryList = item.querySelector('ul');

    if (categoryList) {
      if (categoryList.style.display === 'none') {
        categoryList.style.display = '';
      } else {
        categoryList.style.display = 'none';
      }
    }
  };
});
