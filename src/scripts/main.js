'use strict';

const tree = document.querySelector('.tree');
const branches = tree.querySelectorAll('li');

branches.forEach((el) => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);

  span.setAttribute('class', 'span');
});

const showHide = (e) => {
  if (!e.target.closest('.span')) {
    return;
  }

  const children = e.target.parentElement.querySelector('ul');

  switch (children.hidden) {
    case true:
      children.hidden = false;
      break;
    default:
      children.hidden = true;
  };
};

tree.addEventListener('click', showHide);
