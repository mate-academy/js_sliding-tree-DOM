'use strict';

const tree = document.querySelector('.tree');

const checkTarget = e =>
  e.target.tagName === 'LI' && e.target.firstElementChild;

tree.addEventListener('mouseover', function(e) {
  if (checkTarget(e)) {
    e.target.style.fontWeight = 'bold';

    e.target.firstElementChild.style.fontWeight = 'normal';
  }
});

tree.addEventListener('mouseout', function(e) {
  if (checkTarget(e)
    && !e.target.firstElementChild.classList.contains('hidden')) {
    e.target.style.fontWeight = '';
  }
});

tree.addEventListener('click', function(e) {
  if (checkTarget(e)
    && e.target.firstElementChild.classList.contains('hidden')) {
    e.target.style.fontWeight = 'bold';
  }
});
