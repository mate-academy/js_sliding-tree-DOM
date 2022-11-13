'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(item => {
  if (item.children.length) {
    const text = item.firstChild.textContent;

    item.firstChild.remove();
    item.insertAdjacentHTML('afterbegin', `<span> ${text} </span>`);
  }
});

list.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }
  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
