'use strict';

document.addEventListener('click', event => {
  if (event.target.children[0]
    && event.target.children[0].className !== 'tree') {
    event.target.children[0].classList.toggle('hidden');
  }
});
