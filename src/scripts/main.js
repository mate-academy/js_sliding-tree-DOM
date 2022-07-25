'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(item => {
  const elem = document.createElement('span');

  elem.innerHTML = item.childNodes[0].textContent;

  item.childNodes[0].remove();
  item.prepend(elem);
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
