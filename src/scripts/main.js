'use strict';

const tree = document.querySelector('.tree');

const listItems = document.querySelectorAll('.tree li');
const ul = document.querySelectorAll('ul');

ul.forEach((el) => {
  el.style.maxHeight = '100vh';
  el.style.transition = 'max-height 300ms ease-in-out';
});

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
      if (window.getComputedStyle(childUl).visibility === 'visible') {
        Array.from(childUl.children).forEach(function (element) {
          element.style.opacity = '0';
          element.style.transition = 'opacity 300ms ease-in-out';
          element.style.transition = 'max-height 300ms ease-in-out';
        });
      } else {
        Array.from(childUl.children).forEach(function (element) {
          element.style.opacity = '1';
          element.style.transition = 'opacity 300ms ease-in-out';
          element.style.transition = 'max-height 300ms ease-in-out';
        });
      }

      childUl.style.maxHeight =
        childUl.style.maxHeight === '0vh' ? '100vh' : '0vh';

      childUl.style.visibility =
        childUl.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
  }
});
