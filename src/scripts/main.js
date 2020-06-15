'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const children = [ ...e.target.children ];

  if (children.length) {
    const [title] = children;

    [ ...title.children ].forEach(item => item.classList.toggle('hide'));
  }
});

tree.onmouseover = function({ target }) {
  // first child of our target should have extra styling
  if (target.firstElementChild) {
    target.style.fontWeight = 'bold';

    // all the other children should have a normal font weight
    [ ...target.children ]
      .forEach(element => {
        element.style.fontWeight = 'normal';
      });
  }
};

tree.onmouseout = function({ target }) {
  target.style.fontWeight = 'normal';
};
