'use strict';

const bigTree = document.querySelector('.tree');
const liHead = bigTree.querySelectorAll('li');

liHead.forEach((el) => {
  const span = document.createElement('span');
  const content = el.firstChild.textContent;

  span.textContent = content;
  el.firstChild.replaceWith(span);

  const sublist = el.querySelector('ul');

  if (sublist) {
    span.addEventListener('click', () => {
      sublist.classList.toggle('hidden');
    });
  }
});
