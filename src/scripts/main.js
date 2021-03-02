'use strict';

const list = document.querySelector('.tree');

const lis = document.querySelectorAll('li');

[...lis].filter(li => li.children.length > 0)
  .forEach(li => {
    const span = document.createElement('span');

    span.innerText = li.firstChild.textContent;

    li.firstChild.replaceWith(span);
  });

list.addEventListener('click', (e) => {
  const item = e.target.closest('li').querySelector('ul');

  if (item.isClicked) {
    item.style.display = 'block';
    item.isClicked = false;
  } else {
    item.style.display = 'none';
    item.isClicked = true;
  }
});
