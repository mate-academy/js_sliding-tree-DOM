'use strict';

// write code here

const list = document.querySelector('.tree');
const headers = list.querySelectorAll('li');

headers.forEach(li => {
  const span = document.createElement('span');

  span.append(li.firstChild);
  li.prepend(span);
});

list.addEventListener('click', (ev) => {
  const item = ev.target;
  const insideList = item.parentElement.querySelector('ul');

  if (item.tagName !== 'SPAN' || insideList === null) {
    return;
  }

  if (insideList.hidden) {
    insideList.removeAttribute('hidden');
  } else {
    insideList.hidden = `true`;
  }
});
