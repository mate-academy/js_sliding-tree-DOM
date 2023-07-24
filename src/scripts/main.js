'use strict';

const lilist = document.querySelectorAll('li');

lilist.forEach(li => {
  const span = document.createElement('span');
  const firstChild = li.firstChild;

  span.textContent = firstChild.textContent;
  li.insertBefore(span, firstChild);
  firstChild.textContent = '';
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  };

  const item = e.target.nextElementSibling;

  item.style.display === 'none'
    ? item.style.display = 'block'
    : item.style.display = 'none';
});
