'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const item = e.target.firstElementChild;

  if (item) {
    if (item.hidden) {
      return (item.hidden = false);
    }

    item.hidden = true;
  }
}
);
