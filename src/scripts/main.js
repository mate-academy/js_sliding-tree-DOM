'use strict';

const tree = document.querySelector('.tree');

const li = tree.querySelectorAll('li');

li.forEach(elem => {
  const span = document.createElement('span');

  span.className = 'list-item';
  elem.prepend(span);
  span.append(span.nextSibling);
});

tree.onclick = function(e) {
  if (e.target.tagName === 'SPAN') {
    const ulElem = e.target.parentElement.querySelector('ul');

    if (ulElem) {
      ulElem.classList.toggle('visible');
    }
  }
};
