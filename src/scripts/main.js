'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

list.forEach(item => {
  const span = document.createElement('span');

  if (item.firstElementChild) {
    item.prepend(span);
    span.append(span.nextSibling);
  }
}
);

const hide = () => {
  const target = event.target.closest('span').nextSibling;

  if (target.nodeName === 'UL') {
    target.hidden = !target.hidden;
  }
};

tree.addEventListener('click', hide);
