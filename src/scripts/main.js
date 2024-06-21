'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const closestList = e.target.closest('li');

  if (closestList.children.length !== 0) {
    const listStyle = closestList.children[0].style;

    if (listStyle.display !== 'none') {
      listStyle.display = 'none';
    } else {
      listStyle.display = 'block';
    }
  }
});
