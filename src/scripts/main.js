'use strict';

const tree = document.querySelector('.tree');

tree.onclick = function(e) {
  const ulElem = e.target.querySelector('ul');

  if (ulElem && e.target.tagName === 'LI') {
    ulElem.hidden = !ulElem.hidden;
  }
};

const li = tree.querySelectorAll('li');

li.forEach(elem => {
  const span = document.createElement('span');

  span.className = 'list-item';
  elem.prepend(span);
  span.append(span.nextSibling);
});
