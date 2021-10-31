'use strict';

// write code here
const tree = document.querySelector('.tree');

tree.addEventListener('click', (event) => {
  const item = event.target;

  if (!item || !tree.contains(item)) {
    return;
  }

  if (!item.classList.contains('hidden')) {
    [...item.children].map(elem => elem.hidden = true);
    item.classList.add('hidden');
  } else {
    [...item.children].map(elem => elem.hidden = false);
    item.classList.remove('hidden');
  };

});
