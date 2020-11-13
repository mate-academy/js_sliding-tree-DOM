'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

let visible = true;

for (const item of [...listItems]) {
  const span = document.createElement('span');

  span.append(item.firstChild);
  item.prepend(span);
}

tree.addEventListener('click', e => {
  const item = e.target.closest('li');

  if (item) {
    if (visible) {
      item.children[1].style.display = 'none';
      visible = false;
    } else {
      item.children[1].style.display = 'block';
      visible = true;
    }
  }
});
