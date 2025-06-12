'use strict';

const tree = document.querySelector('.tree');
const liElements = tree.querySelectorAll('li');

liElements.forEach((li) => {
  if (li.querySelector('ul')) {
    const textNode = li.childNodes[0];
    const span = document.createElement('span');

    span.innerText = textNode.textContent.trim();
    li.replaceChild(span, textNode);
  }
});

tree.addEventListener('click', (e) => {
  const ul = e.target.parentElement.querySelector('ul');

  if (ul) {
    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  }
});
