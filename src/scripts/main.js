'use strict';

const tree = document.querySelector('ul');
const list = document.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const span = e.target;
    const nextElement = span.nextElementSibling;

    if (nextElement.style.display === 'none') {
      nextElement.style.display = 'block';
    } else {
      nextElement.style.display = 'none';
    }
  }
});
