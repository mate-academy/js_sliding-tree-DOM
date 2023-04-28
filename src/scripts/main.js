'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', (e) => {
  if (e.target === list) {
    return;
  }

  const items = e.target.children;

  [...items].forEach(item => {
    if (item) {
      const isHidden = item.style.display === 'none';

      isHidden ? item.style.display = 'block' : item.style.display = 'none';
    }
  });
});

document.addEventListener('mousedown', (e) => {
  e.preventDefault();
});
