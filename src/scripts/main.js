'use strict';

const mainList = document.querySelector('.tree');

mainList.addEventListener('click', (e) => {
  const ulChild = e.target.parentElement.querySelector('ul');
  ulChild.hidden = !ulChild.hidden;
});
