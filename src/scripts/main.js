'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const item of li) {
  if (item.children.length !== 0) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', function hideAndShow(action) {
  const target = action.target.closest('span');

  if (target.nextElementSibling.style.display === 'none') {
    target.nextElementSibling.style.display = 'block';
  } else {
    target.nextElementSibling.style.display = 'none';
  }
});
