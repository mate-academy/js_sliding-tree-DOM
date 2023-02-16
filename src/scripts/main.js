'use strict';

const tree = document.querySelector('.tree');
const allLi = tree.querySelectorAll('li');

for (let i = 0; i < allLi.length; i++) {
  const span = document.createElement('span');

  allLi[i].prepend(span);

  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentUl = e.target.parentElement.querySelector('ul');

  if (!parentUl) {
    return;
  }

  parentUl.hidden = !parentUl.hidden;
});
