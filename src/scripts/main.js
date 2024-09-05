'use strict';

const tree = document.querySelector('.tree');
const liItems = document.querySelectorAll('li');

for (const item of liItems) {
  const firstChild = item.firstChild;
  const span = document.createElement('span');

  span.append(item.firstChild.textContent.trim());
  firstChild.replaceWith(span);
}

tree.addEventListener('click', (e) => {
  const spans = [...document.querySelectorAll('span')];

  if (spans.includes(e.target)) {
    const nextSibling = e.target.nextElementSibling;

    if (nextSibling) {
      nextSibling.style.display =
        nextSibling.style.display === 'none' ? 'block' : 'none';
    }
  }
});
