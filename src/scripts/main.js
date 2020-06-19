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
}

);

tree.addEventListener('mouseover', (e) => {
  const branch = e.target;

  if (branch.firstElementChild) {
    if (branch.firstElementChild.tagName === 'UL') {
      branch.style.fontWeight = 'bold';
      branch.style.cursor = 'pointer';
      branch.firstElementChild.style.fontWeight = 'normal';
      branch.firstElementChild.style.cursor = 'default';
    }
  }
});

tree.addEventListener('mouseout', (e) => {
  const branch = e.target;

  if (branch.firstElementChild) {
    if (branch.firstElementChild.tagName === 'UL') {
      branch.style.fontWeight = 'normal';
    }
  }
});
