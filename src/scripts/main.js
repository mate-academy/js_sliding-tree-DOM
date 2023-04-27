'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', (e) => {
  const item = e.target.children[0];

  if (item) {
    const isHidden = item.style.display === 'none';

    isHidden ? item.style.display = 'block' : item.style.display = 'none';
  }
});
