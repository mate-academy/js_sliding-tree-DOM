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
      childUl.style.maxHeight =
        childUl.style.maxHeight === '0vh' ? '100vh' : '0vh';

      childUl.style.display =
        childUl.style.display === 'none' ? 'block' : 'none';
    }
  }
});
