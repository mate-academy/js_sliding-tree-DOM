'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

for (const header of headers) {
  const span = document.createElement('span');

  header.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.closest('span').nextSibling.style.display === 'none') {
    e.target.closest('span').nextSibling.style.display = 'block';
  } else {
    e.target.closest('span').nextSibling.style.display = 'none';
  }
});
