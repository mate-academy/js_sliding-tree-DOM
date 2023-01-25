'use strict';

const list = document.querySelector('.tree');
const listItem = document.querySelectorAll('li');

for (const item of listItem) {
  const span = document.createElement('span');

  if (item.children.length) {
    span.appendChild(item.childNodes[0]);
    item.prepend(span);
  }
}

list.addEventListener('click', (e) => {
  if (!e.target.matches('span')) {
    return;
  }

  if (e.target.nextElementSibling.style.display === 'none') {
    e.target.nextElementSibling.style.removeProperty('display');

    return;
  }

  e.target.nextElementSibling.style.display = 'none';
});
