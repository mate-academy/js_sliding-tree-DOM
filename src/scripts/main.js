'use strict';

const tree = document.querySelector('.tree');
const li = tree.querySelectorAll('li');

tree.style.position = 'absolute';
tree.style.top = `${tree.getBoundingClientRect().top}px`;
tree.style.left = `${tree.getBoundingClientRect().left}px`;

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.textContent = span.nextSibling.textContent.trim();
  span.nextSibling.remove();
}

tree.addEventListener('click', (event) => {
  const list = event.target.nextElementSibling;

  if (list.tagName === 'UL') {
    list.hidden = !list.hidden;
  }
});
