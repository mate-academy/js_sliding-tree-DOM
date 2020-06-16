'use strict';

const list = document.querySelector('.tree');

function targetCatcher(ev) {
  if (ev.target.tagName === 'LI' && ev.target.children.length !== 0) {
    return true;
  }

  return false;
}

list.addEventListener('click', function(ev) {
  const item = ev.target;

  if (targetCatcher(ev)) {
    if (item.children[0].style.display === 'none') {
      item.children[0].style.display = 'block';
    } else {
      item.children[0].style.display = 'none';
    }
  }
});

list.addEventListener('mouseover', function(ev) {
  const item = ev.target;

  if (targetCatcher(ev)) {
    item.style.fontWeight = 'bold';
    item.children[0].style.fontWeight = 'normal';
  }
});

list.addEventListener('mouseout', function(ev) {
  const item = ev.target;

  if (targetCatcher(ev)) {
    item.style.fontWeight = 'normal';
  }
});
