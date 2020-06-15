'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const children = [ ...e.target.children ];

  if (children.length) {
    const [title] = children;

    [ ...title.children ].forEach(item => item.classList.toggle('hide'));
  }
});
