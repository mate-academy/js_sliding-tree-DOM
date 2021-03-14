'use strict';

const tree = document.querySelector('.tree');
const liElements = document.querySelectorAll('li');

[...liElements].forEach(element => {
  if (element.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = element.firstChild.textContent;
    span.className = 'spanElement';
    element.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', () => {
  const list = event.target.closest('.spanElement');

  if (!list || !tree.contains(list)) {
    return;
  }

  list.nextElementSibling.hidden = !list.nextElementSibling.hidden;
});
