'use strict';

// write code here

const tree = document.querySelector('.tree');
const listLi = document.querySelectorAll('li');

listLi.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', function(e) {
  const item = e.target.closest('span');

  item.nextSibling.hidden = !item.nextSibling.hidden;
});
