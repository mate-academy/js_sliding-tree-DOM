'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const isHidden = e.target.firstElementChild.getAttribute('hidden') || false;

  if (e.target.firstElementChild.tagName === 'UL') {
    const branch = e.target.firstElementChild;

    isHidden === false
      ? branch.setAttribute('hidden', true)
      : branch.removeAttribute('hidden');
  };
});
