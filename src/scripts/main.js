'use strict';

const li = document.querySelectorAll('li');

li.forEach(elem => {
  const span = document.createElement('span');

  elem.prepend(span);
  span.append(span.nextSibling);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', function(e) {
  const item = e.target.closest('li');

  if (!item || !tree.contains(item)) {
    return;
  }

  const childrens = e.target.parentElement.querySelector('ul');

  if (!childrens) {
    return;
  }

  childrens.hidden = !childrens.hidden;
});
