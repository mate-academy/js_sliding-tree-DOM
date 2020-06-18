/* eslint-disable no-console */
'use strict';

console.log('hello mate academy!');

const tree = document.querySelector('.tree');

tree.addEventListener('click', click => {
  const ul = click.target.querySelector('ul');

  if (ul) {
    if (ul.style.display !== 'none') {
      ul.style.display = 'none';
    } else {
      ul.style.display = '';
    }
  }
});
