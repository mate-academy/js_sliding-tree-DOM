'use strict';

const tree = document.querySelector('.tree');

tree.style.cursor = 'pointer';

tree.addEventListener('click', (e) => {
  const li = e.target.closest('li');

  if (li) {
    if (li.firstElementChild.style.display === '') {
      li.firstElementChild.style.display = 'none';
    } else {
      li.firstElementChild.style.display = '';
      li.firstElementChild.removeAttribute('style');
    }
  }
});
