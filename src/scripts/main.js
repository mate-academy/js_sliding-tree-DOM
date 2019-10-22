
'use strict';
const mainList = document.querySelector('.tree');

mainList.addEventListener('click', (e) => {
  const hide = e.target.parentElement.querySelector('ul');
  if (e.target.tagName !== 'SPAN' || !hide) {
    return;
  }

  hide.hidden = !hide.hidden;
});
