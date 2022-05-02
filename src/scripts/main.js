'use strict';

const list = document.querySelector('.tree');
const headers = list.querySelectorAll('li');

headers.forEach(li => {
  const span = document.createElement('span');

  span.append(li.firstChild);
  li.prepend(span);
});

list.addEventListener('click', e => {
  const item = e.target;
  const insideList = item.parentElement.querySelector('ul');

  if (!insideList || item.tagName !== 'SPAN') {
    return;
  }

  if (insideList.hidden) {
    insideList.removeAttribute('hidden');
  } else {
    insideList.hidden = `true`;
  }
});
