'use strict';

const tree = document.querySelectorAll('.tree');

tree.forEach((item) => {
  const treeFirstLevelChildren = [...item.children];

  treeFirstLevelChildren.forEach((child) => {
    const treeSecondLevelChildren = [...child.childNodes];
    const span = document.createElement('span');

    span.appendChild(treeSecondLevelChildren[0]);
    child.prepend(span);

    span.addEventListener('click', () => {
      span.nextSibling.style.display =
        span.nextSibling.style.display === 'none' ? 'block' : 'none';
    });

    const treeThirdLevelChildren = [...treeSecondLevelChildren[1].children];

    treeThirdLevelChildren.forEach((child2) => {
      const treeFourLevelChildren = [...child2.childNodes];
      const span2 = document.createElement('span');

      span2.appendChild(treeFourLevelChildren[0]);
      child2.prepend(span2);

      span2.addEventListener('click', () => {
        span2.nextSibling.style.display =
          span2.nextSibling.style.display === 'none' ? 'block' : 'none';
      });
    });
  });
});
