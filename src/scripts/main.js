'use strict';

const tree = document.querySelector('.tree');
const listItems = [...document.querySelectorAll('li')];

listItems.forEach(item => {
  const span = document.createElement('span');

  if (item.firstElementChild) {
    item.prepend(span);
    span.append(span.nextSibling);
  }
}
);

tree.addEventListener('click', e => {
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
