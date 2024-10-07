'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((item) => {
  const textNode = item.firstChild;

  const category = document.createElement('span');

  category.textContent = textNode.textContent.trim();

  item.replaceChild(category, textNode);

  const changeCategoryListVisible = () => {
    const categoryList = item.querySelector('ul');

    if (categoryList) {
      if (categoryList.classList.contains('hidden')) {
        categoryList.classList.remove('hidden');
      } else {
        categoryList.classList.add('hidden');
      }
    }
  };

  category.addEventListener('click', changeCategoryListVisible);
});
