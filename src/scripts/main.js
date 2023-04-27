'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const list = e.target.firstElementChild;

  if (list && list.tagName === 'UL') {
    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
});

tree.addEventListener('mouseover', e => {
  const li = e.target.closest('LI');

  if (li) {
    li.style.cursor = 'pointer';
    li.style.fontWeight = 'bold';
  }

  li.addEventListener('mouseleave', () => {
    li.style.fontWeight = 'normal';
  });
});
