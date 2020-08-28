'use strict';

const list = [...document.querySelectorAll('li')];
const tree = document.querySelector('.tree');

for (let i = 0; i < list.length; i++) {
  const span = document.createElement('span');

  list[i].prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.nextElementSibling.hidden) {
    target.nextElementSibling.hidden = true;
  } else {
    target.nextElementSibling.hidden = false;
  }
});

tree.style.position = 'absolute';
tree.style.top = '50px';
