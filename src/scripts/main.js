'use strict';

const tree = document.querySelector('.tree');

const hiddenText = (e) => {
  const { target } = e;

  target.firstElementChild.toggleAttribute('hidden');
};

tree.addEventListener('click', hiddenText);
