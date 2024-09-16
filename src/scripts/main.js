'use strict';

const ulElements = document.querySelectorAll('ul');
const tree = document.querySelector('.tree');

ulElements.forEach((element) => {
  if (element.parentNode.tagName === 'LI') {
    const span = document.createElement('span');

    span.classList.add('header');

    span.innerHTML = element.parentNode.firstChild.textContent.trim();
    element.parentNode.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.classList.contains('header')) {
    const listElements = clickEvent.target.nextElementSibling;

    listElements.hidden = !listElements.hidden;
  }
});
