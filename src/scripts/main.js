'use strict';

const tree = document.querySelector('.tree');
const branches = document.querySelectorAll('li');

for (const branch of branches) {
  const wrap = document.createElement('span');

  wrap.className = 'spanToWrap';

  wrap.innerText = branch.firstChild.textContent;

  branch.firstChild.replaceWith(wrap);
}

tree.addEventListener('click', clickEvent => {
  const list = clickEvent.target.closest('.spanToWrap');

  if (list !== null && !list) {
    return;
  }

  list.nextElementSibling.hidden = !list.nextElementSibling.hidden;
});
