'use strict';

const tree = document.querySelector('.tree');

const list = document.querySelectorAll('li');

[...list].forEach(el => {
  if (el.children.length > 0) {
    const span = document.createElement('span');

    el.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', function(e) {
  const item = e.target.closest('span');

  if (item.nextElementSibling.style.display === 'none') {
    item.nextElementSibling.style.display = 'block';
  } else {
    item.nextElementSibling.style.display = 'none';
  }
});
