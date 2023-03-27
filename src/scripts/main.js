'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

for (const header of headers) {
  const span = document.createElement('span');

  header.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.style.display === 'none'
    ? e.target.parentNode.querySelector('ul').style.display = 'block'
    : e.target.parentNode.querySelector('ul').style.display = 'none';
});
