'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    const li = e.target.closest('li');
    const ul = li.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  }
});
