'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  if (e.target.closest('span')) {
    const listItem = e.target.parentElement;

    if (listItem.lastElementChild.style.display === 'none') {
      listItem.lastElementChild.style.display = 'block';
    } else {
      listItem.lastElementChild.style.display = 'none';
    }
  }
});
