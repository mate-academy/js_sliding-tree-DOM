'use strict';

const tree = document.querySelector('.tree');
const branches = document.querySelectorAll('li');

for (const branch of branches) {
  const wrap = document.createElement('span');

  wrap.innerText = branch.firstChild.textContent;

  branch.firstChild.replaceWith(wrap);
}

tree.addEventListener('click', e => {
  const list = e.target.closest('li').querySelector('ul');

  if (list === null) {
    return;
  }

  if (list.style.display === 'none') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
});
