'use strict';

const list = document.querySelector('.tree');

const liCollection = document.querySelectorAll('li');
const ulCollection = document.querySelectorAll('ul');

for (const ul of ulCollection) {
  ul.style.display = 'block';
}

for (const li of liCollection) {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    span.className = 'title';

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

list.addEventListener('click', (e) => {
  const item = e.target;

  if (item.classList.contains('title')) {
    item.nextSibling.style.display === 'block'
      ? item.nextSibling.style.display = 'none'
      : item.nextSibling.style.display = 'block';
  }
});
