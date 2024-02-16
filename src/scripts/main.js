'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const slideTreeInit = () => {
    const tree = document.querySelector('.tree');

    if (tree) {
      const treeChildren = [...tree.children];

      const toggleTree = (list) => {
        if (list.length === 0) {
          return;
        }

        const currentList = list[0];

        !currentList.style.display
          ? (currentList.style.display = 'none')
          : (currentList.style = null);
      };

      treeChildren.forEach((child) => {
        child.addEventListener('click', ({ target }) => {
          toggleTree(target.children);
        });
      });
    }
  };

  slideTreeInit();
});
