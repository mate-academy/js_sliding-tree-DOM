'use strict';

const list = document.querySelector('.tree');

const liColection = document.querySelectorAll('li');
const ulColection = document.querySelectorAll('ul');

for (const ul of ulColection) {
  ul.style.display = 'block';
}

for (const li of liColection) {
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
    if (item.nextSibling.style.display === 'block') {
      item.nextSibling.style.display = 'none';
    } else {
      item.nextSibling.style.display = 'block';
    }
  }
});
