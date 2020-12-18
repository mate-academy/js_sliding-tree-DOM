'use strict';

const list = document.querySelector('.tree');
// eslint-disable-next-line max-len
const headers = [...list.querySelectorAll('li')].filter(li => li.children.length);

headers.forEach(header => {
  const span = document.createElement('span');

  header.prepend(span);
  span.append(header.childNodes[1]);
});

list.addEventListener('click', (event) => {
  const listInList = event.target;

  if (event.target.tagName === 'SPAN') {
    const listItems = listInList.parentElement.children[1];

    if (listItems.style.display === 'block') {
      listItems.style.display = 'none';
    } else {
      listItems.style.display = 'block';
    }
  }
});
