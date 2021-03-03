'use strict';

const list = document.querySelector('.tree');

const listLies = document.querySelectorAll('li');

[...listLies].filter(li => li.children.length > 0)
  .forEach(li => {
    const span = document.createElement('span');

    span.innerText = li.firstChild.textContent;

    li.firstChild.replaceWith(span);
  });

list.addEventListener('click', (e) => {
  const item = e.target.closest('li').querySelector('ul');

  item.hidden = !item.hidden;
});
