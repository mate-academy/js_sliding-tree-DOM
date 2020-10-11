'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  if (item.children.length > 0 && item.firstElementChild.tagName === 'UL') {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(item.childNodes[1]);
  }
});

tree.addEventListener('click', event => {
  if (event.target.tagName === 'SPAN') {
    if (event.target.parentElement.lastElementChild.style.display === 'none') {
      event.target.parentElement.lastElementChild.style.display = 'block';
    } else {
      event.target.parentElement.lastElementChild.style.display = 'none';
    }
  }
});
