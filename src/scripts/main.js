'use strict';

const tree = document.querySelector('.tree');
const li = tree.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

const toggleHandler = function(e) {
  const { target } = e;

  if (target.tagName !== 'SPAN') {
    return;
  }

  const childUl = e.target.parentNode.querySelector('ul');

  if (childUl) {
    childUl.hidden = !childUl.hidden;
  }

  return false;
};

tree.addEventListener('click', toggleHandler);
