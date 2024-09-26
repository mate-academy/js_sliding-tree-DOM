'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(e => {
  const span = document.createElement('span');

  span.innerText = e.childNodes[0].textContent;
  e.childNodes[0].textContent = '';
  e.prepend(span);
});

list.addEventListener('click', showList);

function showList(e) {
  const ul = e.target.closest('li').querySelector('ul');

  if (!ul) {
    return;
  }

  if (ul.hidden) {
    ul.hidden = false;

    return;
  }

  ul.hidden = true;
}
