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
  if (target.firstElementChild) {
    target.style.fontWeight = 'bold';

    [ ...target.children ]
      .forEach(element => {
        element.style.fontWeight = 'normal';
      });
  }
};

tree.onmouseout = function({ target }) {
  target.style.fontWeight = 'normal';
};
