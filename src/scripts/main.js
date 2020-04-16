'use strict';

const tree = document.querySelector('.tree');
const lis = document.querySelectorAll('li');

lis.forEach(item => {
  const span = document.createElement('span');

  span.innerHTML = item.firstChild.data.trim();
  item.replaceChild(span, item.firstChild);
});

tree.addEventListener('click', e => {
  const ul = e.target.nextElementSibling;

  if (ul) {
    ul.classList.toggle('hide');
  }
});
