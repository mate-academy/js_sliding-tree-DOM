'use strict';

// write code here

const treeHeaders = document.querySelectorAll('.tree li > span');

treeHeaders.forEach((headerSpan) => {
  headerSpan.addEventListener('click', (e) => {
    const parentLi = e.target.parentNode;
    const subList = parentLi.querySelector('ul');

    if (subList) {
      if (subList.style.display === 'none') {
        subList.style.display = 'block';
      } else {
        subList.style.display = 'none';
      }
    }
  });
});
