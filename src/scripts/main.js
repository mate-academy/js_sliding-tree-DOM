'use strict';

const tree = document.querySelector('.tree');
const toggleDisplay = (elem) => {
  if (elem) {
    if (elem.style.display !== 'none') {
      elem.style.display = 'none';
    } else {
      elem.style.display = '';
    }
  }
};

tree.addEventListener('click', click => {
  const ul = click.target.querySelector('ul');

  toggleDisplay(ul);
});
