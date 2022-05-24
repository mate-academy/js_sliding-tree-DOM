'use strict';

const items = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of items) {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
};

tree.addEventListener('click', (browserEvent) => {
  const item = browserEvent.target.closest('span');

  if (item.nextElementSibling.style.display === 'none') {
    item.nextElementSibling.style.display = 'block';
  } else {
    item.nextElementSibling.style.display = 'none';
  }
});
