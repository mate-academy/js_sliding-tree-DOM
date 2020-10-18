'use strict';

const tree = document.querySelector('.tree');

tree.style.position = 'absolute';
tree.style.top = tree.getBoundingClientRect().top + 'px';
tree.style.left = tree.getBoundingClientRect().left + 'px';

const liList = document.querySelectorAll('li');

for (const item of liList) {
  if (item.children.length) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

document.addEventListener('click', event => {
  const header = event.target;

  if (header.nextElementSibling.tagName === 'UL') {
    header.nextElementSibling.hidden = !header.nextElementSibling.hidden;
  }
});
