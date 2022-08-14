'use strict';

const list = document.querySelector('.tree');
const allLi = document.querySelectorAll('li');

[...allLi].forEach(li => {
  if (li.children) {
    const span = document.createElement('span');

    span.className = 'header';
    span.textContent = li.firstChild.textContent;
    li.firstChild.remove();
    li.prepend(span);
  }
});

list.addEventListener('click', (e) => {
  const nextElement = e.target.parentElement.children[1];

  if (e.target.className === 'header') {
    nextElement.hidden = !nextElement.hidden;
  }
});
