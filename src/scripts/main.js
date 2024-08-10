'use strict';

const tree = document.querySelector('.tree');

tree.style.cursor = 'pointer';

const list = document.querySelectorAll('li');

list.forEach((li) => {
  if (li.firstChild) {
    const textNode = li.childNodes[0];
    const span = document.createElement('span');

    span.textContent = textNode.textContent;
    li.replaceChild(span, textNode);
  }
});

tree.addEventListener('click', (e) => {
  const li = e.target.closest('li');

  if (li) {
    const ul = li.querySelector('ul');

    if (ul) {
      if (ul.style.visibility === 'hidden') {
        ul.style.visibility = 'visible';
      } else {
        ul.style.visibility = 'hidden';
      }
    }
  }
});
