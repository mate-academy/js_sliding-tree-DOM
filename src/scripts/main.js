'use strict';

const headers = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

headers.forEach((node) => {
  const spanElem = document.createElement('span');

  spanElem.textContent = node.firstChild.textContent.trim();

  node.replaceChild(spanElem, node.firstChild);
});

tree.addEventListener('click', (e) => {
  const list = e.target.closest('li').querySelector('ul');

  if (list) {
    list.classList.toggle('hidden');
  }
});
