'use strict';

const list = document.querySelector('.tree');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  if (event.target.className === 'tree') {
    return;
  }

  const item = event.target.children[0];

  if (item.style.display === 'none') {
    item.style.display = 'block';

    return;
  }

  item.style.display = 'none';
});
