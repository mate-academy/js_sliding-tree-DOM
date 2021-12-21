'use strict';

const state = ['none', 'block'];

document.addEventListener('click', (event) => {
  const items = event.target.children;

  if (items[0] !== undefined) {
    items[0].style.display = state[0];

    state.reverse();
  }
});
