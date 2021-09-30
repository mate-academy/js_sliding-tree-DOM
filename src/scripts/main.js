'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const element = e.target.children[0];

  if (element.hasAttribute('hidden')) {
    element.removeAttribute('hidden');
  } else {
    element.setAttribute('hidden', '');
  }
});
