'use strict';

const tree = document.querySelector('.tree');
const li = tree.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

const toggleList = function(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childUl = e.target.parentNode.querySelector('ul');

  if (!childUl) {
    return;
  }

  childUl.hidden = !childUl.hidden;
};

tree.addEventListener('click', toggleList);
