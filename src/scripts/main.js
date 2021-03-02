'use strict';

const list = document.querySelector('.tree');

const forest = document.querySelectorAll('li');

[...forest].filter(li => li.children.length > 0)
  .forEach(li => {
    const span = document.createElement('span');

    span.innerText = li.firstChild.textContent;

    li.firstChild.replaceWith(span);
  });

list.addEventListener('click', (e) => {
  const item = e.target.closest('li').querySelector('ul');

  if (item.hidden) {
    item.hidden = false;
  } else {
    item.hidden = true;
  }
});
