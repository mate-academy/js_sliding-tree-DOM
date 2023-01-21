'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of [...list]) {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    span.prepend(item.firstChild);
    item.prepend(span);
    span.className = 'header';
  }
}

tree.addEventListener('click', () => {
  const element = event.target.closest('.header');

  if (!element || !tree.contains(element)) {
    return;
  }
  element.nextSibling.style.display = 'none';
}
);
