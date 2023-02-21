'use strict';

const tree = document.querySelector('.tree');
const listItem = tree.querySelectorAll('li');

for (const element of listItem) {
  const span = document.createElement('span');

  element.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const item = e.target.closest('span');

  if (!item) {
    return;
  }

  const innerList = item.nextSibling;

  if (!innerList) {
    return;
  }

  if (innerList.style.display === 'none') {
    innerList.style.display = 'block';

    return;
  }

  innerList.style.display = 'none';
});
