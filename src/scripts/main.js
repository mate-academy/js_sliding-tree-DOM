'use strict';

const tree = document.querySelector('.tree');
const li = [...document.querySelectorAll('li')];

li.forEach((element) => {
  if (element.children.length > 0) {
    const span = document.createElement('span');

    span.appendChild(element.firstChild);
    element.prepend(span);
  }
});

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');
  const mainLi = span.closest('li');
  const ul = mainLi.querySelector('ul');

  if (!span) {
    return addEventListener;
  }

  if (ul.hasAttribute('style')) {
    ul.removeAttribute('style');
  } else {
    ul.style.display = 'none';
  }
});
