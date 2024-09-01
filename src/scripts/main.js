'use strict';

const tree = document.querySelector('.tree');

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.firstChild.textContent = '';
  item.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const childUl = e.target.parentNode.querySelector('ul');

    if (childUl) {
      childUl.style.visibility =
        childUl.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
  }
});
