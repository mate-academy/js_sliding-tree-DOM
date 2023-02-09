'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const target = e.target.closest('span');

  if (!target) {
    return;
  }

  const nextSibling = target.nextSibling;

  if (!nextSibling) {
    return;
  }

  if (nextSibling.style.display === 'none') {
    nextSibling.style.display = 'block';

    return;
  }

  nextSibling.style.display = 'none';
});
