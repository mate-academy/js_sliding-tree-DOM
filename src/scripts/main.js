'use strict';

const tree = document.querySelector('.tree');
const slideLists = tree.querySelectorAll('ul');

for (const slideList of slideLists) {
  const title = slideList.previousSibling.data;

  slideList.previousSibling.remove();

  const span = document.createElement('span');

  span.textContent = title;
  slideList.before(span);
}

tree.addEventListener('click', (e) => {
  if (e.target.matches('span')) {
    const ul = e.target.nextElementSibling;

    ul.hidden = !ul.hidden;
  }
});
