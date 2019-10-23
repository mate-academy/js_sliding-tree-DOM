'use strict';

makeListSlide();

function makeListSlide() {
  const tree = document.querySelector('.tree');
  tree.addEventListener('click', (evt) => {
    const ul = evt.target.parentElement.querySelector('ul');
    ul.hidden = !ul.hidden;
  });
}
