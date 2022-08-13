'use strict';

// write code here
const tree = document.querySelector('.tree');

function trees(item) {
  for (const layer of item.children) {
    if (layer.firstElementChild !== null && layer.tagName === 'LI') {
      layer.insertAdjacentHTML('afterbegin', `
      <span></span>`);
    }
    trees(layer);
  }
}
trees(tree);

tree.addEventListener('click', (events) => {
  const goin = events.target.children[0].tagName === 'SPAN';
  const hide = events.target.children[1];

  if (goin) {
    hide.hidden = hide.hidden === false;
  }
});
