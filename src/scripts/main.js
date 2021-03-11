'use strict';

// write code here
const tree = document.querySelector('.tree');
const colection = document.querySelectorAll('li');

colection.forEach(el => {
  const span = document.createElement('span');

  span.innerText = el.firstChild.textContent;
  el.replaceChild(span, el.firstChild);
});

tree.addEventListener('click', (tap) => {
  if (tap.target.matches('span')) {
    const ul = tap.target.parentNode.querySelector('ul');

    ul.toggleAttribute('hidden');
  }
});
