'use strict';

const tree = document.querySelector('.tree');

function catchTarget(e) {
  const target = e.target;

  return target.tagName === 'LI' && target.children.length !== 0;
};

tree.addEventListener('click', e => {
  if (catchTarget(e)) {
    if (e.target.children[0].style.display !== 'none') {
      e.target.children[0].style.display = 'none';
      e.target.style.fontWeight = 'bold';
    } else {
      e.target.children[0].style.display = 'block';
      e.target.style.fontWeight = 'normal';
    }
  }
});

tree.addEventListener('mouseover', e => {
  if (catchTarget(e)) {
    e.target.style.fontWeight = 'bold';
    e.target.children[0].style.fontWeight = 'normal';
  }
});

tree.addEventListener('mouseout', e => {
  if (catchTarget(e) && e.target.children[0].style.display === 'none') {
    e.target.style.fontWeight = 'bold';
  } else {
    e.target.style.fontWeight = 'normal';
  }
});
