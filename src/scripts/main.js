'use strict';

const lists = document.querySelectorAll('ul');
const tree = document.querySelector('.tree');

for (const list of lists) {
  if (list.className !== 'tree') {
    const item = list.closest('li');
    const wrapper = document.createElement('span');

    item.prepend(wrapper);
    wrapper.append(wrapper.nextSibling);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.matches('span')) {
    const toHide = e.target.nextSibling;

    if (toHide.style.display === 'none') {
      toHide.style.display = '';
    } else {
      toHide.style.display = 'none';
    }
  }
});
