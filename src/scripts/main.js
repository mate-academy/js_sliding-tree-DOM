'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', function(e) {
  const subList = e.target.querySelector('ul');

  (subList.style.display !== 'none')
    ? changeStyle('none', 'bold')
    : changeStyle('block', 'normal');

  function changeStyle(display, fontWeight) {
    subList.style.display = display;
    e.target.style.fontWeight = fontWeight;
  }
});
