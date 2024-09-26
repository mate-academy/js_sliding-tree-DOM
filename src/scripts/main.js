'use strict';

const lists = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

lists.forEach(list => {
  if (list.childNodes.length > 1) {
    const text = list.firstChild.textContent;

    list.firstChild.replaceWith(document.createElement('span'));
    list.firstChild.textContent = text;
  }
});

tree.addEventListener('click', (e) => {
  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
