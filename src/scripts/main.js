'use strict';

// write code here
const tree = document.querySelector('.tree');
const liElement = document.querySelectorAll('li');

liElement.forEach(l => {
  const span = document.createElement('span');

  l.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const node = e.target.nextSibling;

  if (node.style.display === 'none') {
    node.style.display = 'block';
  } else {
    node.style.display = 'none';
  }
});
