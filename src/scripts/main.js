'use strict';

const mainList = document.querySelector('.tree');

mainList.addEventListener('click', (e) => {
  const allUl = document.querySelectorAll('ul');

  for (const someUl of allUl) {
    if (someUl === e.target) {
      return;
    }
  }

  const parentLi = e.target;
  const childLi = parentLi.children[0];

  childLi.hidden = (!childLi.hidden)? true: false;
});
