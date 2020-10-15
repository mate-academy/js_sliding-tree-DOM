'use strict';

const list = document.querySelector('.tree');
const innerLists = list.querySelectorAll('ul');

innerLists.forEach(innerList => {
  const span = document.createElement('span');

  innerList.closest('li').prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const listItems = event.target.nextElementSibling;

    if (listItems.style.display === 'block' || listItems.style.display === '') {
      listItems.style.display = 'none';
    } else {
      listItems.style.display = 'block';
    }
  }
});
