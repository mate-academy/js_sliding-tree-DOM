
'use strict';

const titles = document.querySelectorAll('li');

titles.forEach(el => {
  el.insertAdjacentHTML('afterbegin', `
  <span> ${el.innerHTML.split('  ')[0]} </span>
  `);
  el.childNodes[3].remove();
});

const list = document.querySelector('.tree');

list.addEventListener('click', (ev) => {
  const item = ev.target;

  if (item.tagName !== 'SPAN') {
    return;
  }

  if (item.nextElementSibling) {
    item.nextElementSibling.hidden
  = !item.nextElementSibling.hidden;
  }
});
