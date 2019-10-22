'use strict';

const mainList = document.querySelector('.tree');

mainList.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }
  const ulChild = e.target.parentElement.querySelector('ul');
  ulChild.hidden = !ulChild.hidden;
});
