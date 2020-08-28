'use strict';

const tree = document.querySelector('.tree');
const allLi = tree.querySelectorAll('li');

tree.style.position = `absolute`;
tree.style.top = `10%`;
tree.style.left = `40vw`;

for (const item of allLi) {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (event) => {
  const ul = event.target.nextSibling;

  ul.hidden = !ul.hidden;
});
