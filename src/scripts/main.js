'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const item = e.target.closest('li');

  if (!item.children.length || e.target !== item) {
    return;
  }

  if (!item.children[0].hasAttribute('hidden')) {
    item.children[0].setAttribute('hidden', 'true');
  } else {
    item.children[0].removeAttribute('hidden');
  }
});
